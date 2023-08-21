import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const blogsPerPage = 3//1ページあたりに表示する記事数

export async function getAllBlogs() {
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
  //1ページあたりに表示する記事の数と記事の合計数から必要なページ数の計算
  const numberPages = Math.ceil(orderedBlogs.length / blogsPerPage)

  return {
    //getAllBlogsの結果を格納
    blogs: orderedBlogs,
    numberPages: numberPages
  }
}

export async function getSingleBlog(context) {
  const { slug } = context.params
  const data = await import(`../../data/${slug}.md`)
  const singleDocument = matter(data.default)

  return {
    singleDocument: singleDocument
  }
}