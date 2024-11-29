import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/news/$newsId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { newsId } = Route.useParams();
  return (
    <div>
      <h1>News</h1>
      <p>News Page {newsId}</p>
    </div>
  );
}
