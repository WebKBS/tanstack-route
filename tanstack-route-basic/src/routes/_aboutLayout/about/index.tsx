import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_aboutLayout/about/')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/about/news">News</Link>
    </div>
  );
}
