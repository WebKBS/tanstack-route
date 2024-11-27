import { createFileRoute } from '@tanstack/react-router';

// news 페이지는 폴더로 구성되어 있으며, $newsId 라는 동적 라우트를 가지고 있습니다.
export const Route = createFileRoute('/news/$newsId/')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /news/$newsId/';
}
