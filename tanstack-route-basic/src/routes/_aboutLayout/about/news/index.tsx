import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_aboutLayout/about/news/')({
  component: NewsPage,
})

function NewsPage() {
  return (
    <div>
      <h1>News</h1>
    </div>
  )
}
