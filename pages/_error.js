import Layout from '../components/Layout';

const Error = ({ statusCode }) => (
  <Layout title="Error!!!">
    <p>{statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Couldn't get that page, Sorry!`}</p>
  </Layout>
);

export default Error;
