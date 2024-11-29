import { createFileRoute, Link } from '@tanstack/react-router';

interface NewsSearch {
  page?: number;
}

export const Route = createFileRoute('/news/')({
  validateSearch: (search: Record<string, unknown>): NewsSearch => {
    return {
      page: search.page ? Number(search.page) : undefined,
    };
  },

  component: NewsRouteComponent,
});

function NewsRouteComponent() {
  const { page } = Route.useSearch();
  const navigate = Route.useNavigate();

  return (
    <div>
      <h1>News</h1>
      <p>News Page</p>
      <p>Search: {page}</p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <button
          onClick={() => {
            navigate({ to: '/news/$newsId', params: { newsId: '1' } });
          }}
        >
          Button News 1
        </button>
        <button
          onClick={() => {
            navigate({
              to: '/news',
              search: { page: 1 },
            });
          }}
        >
          Button Params Search 1
        </button>
        {/* <Link> 컴포넌트를 사용하여 다른 경로로 이동할 수 있습니다. */}
        <Link to="/news/$newsId" params={{ newsId: '1' }}>
          Link News 1
        </Link>
        <Link to="/news/$newsId" params={(prev) => ({ ...prev, newsId: '2' })}>
          Link News 2
        </Link>
        <Link to="/news" search={{ page: 1 }}>
          Link Search 1
        </Link>
      </div>
    </div>
  );
}
