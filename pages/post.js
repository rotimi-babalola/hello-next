import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
  <Layout>
    {console.log(props, 'props')}
    <h1>{props.show.name}</h1>
    <h2>{new Date(props.show.premiered).getFullYear()}</h2>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} alt="Some alt" />
  </Layout>
)

Post.getInitialProps = async function (context) {
  console.log(context, 'context');
  const { id } = context.query;
  console.log(id, 'id');
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Name: ${show.name}`);

  return { show };
}

export default Post;
