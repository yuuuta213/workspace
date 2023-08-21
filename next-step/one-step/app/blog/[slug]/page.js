//記事ページの汎用のページ
import Image from "next/image";
import ReactMarkdown from "react-markdown"
import PrevNext from "@/app/components/prevNext";
import { getAllBlogs, getSingleBlog } from "@/app/utils/mdQueries";


export async function generateMetadata(props) {
  const { singleDocument } = await getSingleBlog(props)
  return {
    title: singleDocument.data.title,
    description: singleDocument.data.excerpt,
  }
}

//ページ毎にurlの取得
const SingleBlog = async (props) => {
  const { singleDocument } = await getSingleBlog(props)
  //prev, nextの作成
  const { blogs } = await getAllBlogs()
  const prev = blogs.filter(blog => blog.frontmatter.id === singleDocument.data.id - 1)
  const next = blogs.filter(blog => blog.frontmatter.id === singleDocument.data.id + 1)


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
        <PrevNext prev={prev} next={next} />
      </div>
    </>
  )
}

export default SingleBlog

//登録したいslugをまとめる
export async function generateStaticParams() {
  //slugを取得するblogsで呼び出し
  const { blogs } = await getAllBlogs()
  //mapで展開し、pathに格納
  const paths = blogs.map((blog) => `/${blog.slug}`)

  return paths
}