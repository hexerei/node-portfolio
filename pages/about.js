import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import { Component } from 'react';

export default class About extends Component {

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/hexerei');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return {
      user: data,
      statusCode 
    };
  }

  render () {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About">
        <p>{user.bio}</p>
        <img
          src={user.avatar_url}
          alt={user.name}
          height="200px"
        />
      </Layout>
    );
  }
}
