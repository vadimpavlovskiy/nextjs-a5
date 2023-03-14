import client from "client"

const PageInfo = ({pageInfo}:any) => {
  
  return (
    <article>
      <h1>{pageInfo?.slug?.current}</h1>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug:any) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context:any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const article = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  
  return {
    props: {
      article
    }
  }
}


export default PageInfo;

