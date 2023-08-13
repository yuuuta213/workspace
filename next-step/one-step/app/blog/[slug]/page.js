//記事ページの汎用のページ

import Image from "next/image";
import fs from "fs";//ファイル読み込み
import path from "path";//ファイルへのパス
import matter from "gray-matter";
import ReactMarkdown from "react-markdown"

//ページ毎にurlの取得
async function getSingleBlog(context) {
  const { slug } = context.params
  const data = await import(`../../../data/${slug}.md`)
  const singleDocument = matter(data.default)

  return {
    singleDocument: singleDocument
  }
}

const SingleBlog = async (props) => {
  const { singleDocument } = await getSingleBlog(props)

  return (
    <>
      <div className="img-container">
        <Image
          src={singleDocument.data.image}
          alt="blog-image"
          width={1000}
          height={500}
          quality={90}
          priority={true}
        />
      </div>
      <div className="wrapper">
        <div className="container">
          <h1>{singleDocument.data.title}</h1>
          <p>{singleDocument.data.data}</p>
          <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default SingleBlog

//登録したいslugをまとめる
export async function generateStaticParams() {

  // /blog/page.jsのgetAllBlogsの再利用
  async function getAllBlogs() {
    const files = fs.readdirSync(path.join("data"))
    const blogs = files.map((fileName) => {
      const slug = fileName.replace(".md", "")
      const fileData = fs.readFileSync(
        path.join("data", fileName),
        "utf-8"
      )
      const { data } = matter(fileData)
      return {
        frontmatter: data,
        slug: slug,
      }
    })
    return {
      blogs: blogs
    }
  }
  //slugを取得するblogsで呼び出し
  const { blogs } = await getAllBlogs()
  //mapで展開し、pathに格納
  const paths = blogs.map((blog) => `/${blog.slug}`)

  return paths
}