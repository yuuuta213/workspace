import Link from "next/link"
import Image from "next/image";
import fs from "fs";//ファイル読み込み
import path from "path";//ファイルへのパス
import matter from "gray-matter";

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"))//mdのは行ったdataフォルダへアクセス定数=files二格納

  const blogs = files.map((fileName) => {

    //URL末尾作成によりリンク先の作成
    const slug = fileName.replace(".md", "")

    //fsのreadFileSyncでファイル(file)を読み込む
    const fileData = fs.readFileSync(
      path.join("data", fileName),
      "utf-8"
    )
    const { data } = matter(fileData)
    return {
      frontmatter: data,
      //.md->/first-blogで文字列を置き換える
      slug: slug,
    }
  })
  //idが高い順に記事を並び替え
  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id
  })

  return {
    //getAllBlogsの結果を格納
    blogs: orderedBlogs
  }
}

const Blog = async () => {
  const { blogs } = await getAllBlogs()
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Blog</h1>
          <p>エンジニアになるための、私の日常生活をお届けします</p>
          {/* map()で展開 */}
          {blogs.map((blog, index) =>
            <div key={index} className="blogCard">
              <div className="cardContainer">
                <h2>{blog.frontmatter.title}</h2>
                <p>{blog.frontmatter.excerpt}</p>
                <p>{blog.frontmatter.date}</p>
                <Link href={`/blog/${blog.slug}`}>
                  Read More
                </Link>
              </div>
              <div className="blogImg">
                <Image
                  src={blog.frontmatter.image}
                  alt="card-image"
                  width={1000}
                  height={300}
                  quality={90}
                  priority={true}
                />
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  )
}

export default Blog