import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import AppProvider, { AppContext } from '../components/AppProvider';

class Index extends React.Component {
  render() {
    return (
      <AppProvider>
        <Layout>
          <AppContext.Consumer>
            <h1>Search for TV shows</h1>
            {/* {(context) => console.log(context)} */}
          </AppContext.Consumer>
        </Layout>
      </AppProvider>
    );
  }
}

Index.getInitialProps = async function (context) {
  // console.log(context, 'context');
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');

  // const data = await res.json();

  // console.log(`Count: ${data.length}`);

  return {}
}

export default Index;
