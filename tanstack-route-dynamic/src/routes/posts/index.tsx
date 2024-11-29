import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import PostList from '../../components/PostList';
import { getPosts } from '../../services/api';

export const Route = createFileRoute('/posts/')({
  loader: async () => await getPosts(),
  pendingComponent: () => <div>Loading...</div>,
  pendingMs: 500,
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const posts = Route.useLoaderData();

  return (
    <div>
      <h1>Posts</h1>
      <p>Post Page</p>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: '1rem',
              marginTop: '1rem',
            }}
          >
            <p>
              {/* <button> 컴포넌트를 사용하여 다른 경로로 이동할 수 있습니다. */}
              <button
                onClick={() => {
                  navigate({
                    to: '/posts/$postId',
                    params: { postId: post.id.toString() },
                  });
                }}
              >
                {post.title}
              </button>{' '}
            </p>
            {/* <Link> 컴포넌트를 사용하여 다른 경로로 이동할 수 있습니다. */}
            <p>
              <Link to="/posts/$postId" params={{ postId: post.id.toString() }}>
                {post.title}
              </Link>
            </p>
          </li>
        ))}
      </ul>
      <h2 style={{ color: 'yellow' }}>
        아래 PostList 컴포넌트는 <code>useLoaderData</code> 훅을 사용하여
        데이터를 가져옵니다.
      </h2>
      <PostList />
    </div>
  );
}
