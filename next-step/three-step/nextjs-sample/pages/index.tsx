import { Client } from "@notionhq/client";
import { GetStaticProps, NextPage } from "next";//ビルド時にデータを取得し、静的なHTMLを生成。高速かつ効率的なWebページを提供する関数

const notion = new Client({
  auth: process.env.NOTION_TOKEN //auth(認証):どこから
});

type StaticProps = {
  post: Post | null;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || '', //NotionのDBからデータを取得
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: { equals: true }
        }
      ]
    },//Published属性がtrueの時のみページを取得するようフィルタリング
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending'
      }
    ]//作成日時降順で並び替えれるように
  });
  // console.dir(database, { depth: null });//取得したDBの内容を確認

  const page = database.results[0];//pageは[PageObjectResponse]と[PatrialPageObjectResponce]
  if (!page) {
    return {
      props: { post: null }
    };
  }
  if (!('properties' in page)) {
    return {
      props: {
        post: {
          id: page.id,
          title: null,
          slug: null,
          createdTs: null,
          lastEditedTs: null,
          contents: []
        }
      }
    };
  }
  let title: string | null = null;
  if (page.properties['Name'].type === 'title') {
    title = page.properties['Name'].title[0]?.plain_text ?? null;
  }
  let slug: string | null = null;
  if (page.properties['Slug'].type === 'rich_text') {
    slug === page.properties['Slug'].rich_text[0]?.plain_text ?? null;
  }

  const blocks = await notion.blocks.children.list({
    block_id: page.id
  });//ページの内容の取得
  // console.dir(blocks, { depth: null });//ページ内容の確認

  const contents: Content[] = [];
  blocks.results.forEach((block) => {
    if (!('type' in block)) {
      return;
    }
    switch (block.type) {
      case 'paragraph': contents.push({
        type: 'paragraph',
        text: block.paragraph.rich_text[0]?.plain_text ?? null
      });
        break;
      case 'heading_2': contents.push({
        type: 'heading_2',
        text: block.heading_2.rich_text[0]?.plain_text ?? null
      });
        break;
      case 'heading_3': contents.push({
        type: 'heading_3',
        text: block.heading_3.rich_text[0]?.plain_text ?? null
      });
        break;
      case 'quote': contents.push({
        type: 'quote',
        text: block.quote.rich_text[0]?.plain_text ?? null
      });
        break;
      case 'code': contents.push({
        type: 'code',
        text: block.code.rich_text[0]?.plain_text ?? null,
        language: block.code.language
      });
    }
  });

  const post: Post = {
    id: page.id,
    title,
    slug,
    createdTs: page.created_time,
    lastEditedTs: page.last_edited_time,
    contents
  };
  console.dir(post, { depth: null });

  return {
    props: { post }//getStaticProps関数はpropsオブジェクトを返さいないといけない
  };
};

const Home: NextPage<StaticProps> = ({ post }) => {
  console.log(post);
  return <div></div>;
};

export default Home;