import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Posts</h1>
      <p>Post Page</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <button
          onClick={() => {
            navigate({ to: '/posts/$postId', params: { postId: '1' } });
          }}
        >
          Post 1
        </button>
        {/* <Link> 컴포넌트를 사용하여 다른 경로로 이동할 수 있습니다. */}
        <Link to="/posts/$postId" params={{ postId: '1' }}>
          Post 1
        </Link>
        <Link to="/posts/$postId" params={(prev) => ({ ...prev, postId: '2' })}>
          Post 2
        </Link>
      </div>
    </div>
  );
}
