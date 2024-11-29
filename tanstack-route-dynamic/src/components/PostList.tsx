import { getRouteApi } from '@tanstack/react-router';
const postRoute = getRouteApi('/posts/');

const PostList = () => {
  const posts = postRoute.useLoaderData();
  const params = postRoute.useParams();
  const search = postRoute.useSearch();
  console.log('params', params);
  console.log('search', search);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
