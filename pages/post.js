import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>Lorem ipsum dolor sit amet, consect...</p>
  </Layout>
)

export default withRouter(Post);