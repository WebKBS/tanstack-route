import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
});

function RouteComponent() {
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
