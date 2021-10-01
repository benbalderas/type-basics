import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPostsForHome, getPostsWithCategory } from '../lib/api'

export default function Category({preview, categoryPosts}) {
    return(
        <Layout>
            <Container></Container>
        </Layout>
    )
}

export async function getStaticProps({ preview = false, previewData }) {
    const categoryPosts = await getPostsWithCategory(previewData)
    return {
      props: { preview, categoryPosts },
    }
  }