import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

interface PostSearchParams {
  page?: number;
}

export const Route = createFileRoute('/posts/')({
  validateSearch: (search: Record<string, unknown>): PostSearchParams => ({
    page: Number(search.page) || 1,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const { page } = Route.useSearch();
  console.log('search', page);

  return (
    <div>
      <h1>Posts</h1>
      <p>Post Page</p>
      <p>Search: {page}</p>
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
          Button Post 1
        </button>
        <button
          onClick={() => {
            navigate({
              to: '/posts',
              search: { page: 1 },
            });
          }}
        >
          Button Params Search 1
        </button>
        {/* <Link> 컴포넌트를 사용하여 다른 경로로 이동할 수 있습니다. */}
        <Link to="/posts/$postId" params={{ postId: '1' }}>
          Link Post 1
        </Link>
        <Link to="/posts/$postId" params={(prev) => ({ ...prev, postId: '2' })}>
          Link Post 2
        </Link>
        <Link to="/posts" search={{ page: 1 }}>
          Link Search 1
        </Link>
      </div>
    </div>
  );
}
