import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/news/$newsId/')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /blog/$blog/!';
}
