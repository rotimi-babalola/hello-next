import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <h2>{new Date(props.show.premiered).getFullYear()}</h2>
    {
      props.show.summary ? <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p> :
        <p>No summary available</p>
    }
    <img src={props.show.image && props.show.image.medium} alt="Some alt" />
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Name: ${show.name}`);

  return { show };
}

export default Post;
