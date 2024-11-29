/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as NewsIndexImport } from './routes/news/index'
import { Route as PostsPostIdImport } from './routes/posts/$postId'
import { Route as NewsNewsIdIndexImport } from './routes/news/$newsId/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  id: '/posts/',
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const NewsIndexRoute = NewsIndexImport.update({
  id: '/news/',
  path: '/news/',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/posts/$postId',
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)

const NewsNewsIdIndexRoute = NewsNewsIdIndexImport.update({
  id: '/news/$newsId/',
  path: '/news/$newsId/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof rootRoute
    }
    '/news/': {
      id: '/news/'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsIndexImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
    '/news/$newsId/': {
      id: '/news/$newsId/'
      path: '/news/$newsId'
      fullPath: '/news/$newsId'
      preLoaderRoute: typeof NewsNewsIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/news': typeof NewsIndexRoute
  '/posts': typeof PostsIndexRoute
  '/news/$newsId': typeof NewsNewsIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/news': typeof NewsIndexRoute
  '/posts': typeof PostsIndexRoute
  '/news/$newsId': typeof NewsNewsIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/news/': typeof NewsIndexRoute
  '/posts/': typeof PostsIndexRoute
  '/news/$newsId/': typeof NewsNewsIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/posts/$postId' | '/news' | '/posts' | '/news/$newsId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/posts/$postId' | '/news' | '/posts' | '/news/$newsId'
  id:
    | '__root__'
    | '/'
    | '/posts/$postId'
    | '/news/'
    | '/posts/'
    | '/news/$newsId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PostsPostIdRoute: typeof PostsPostIdRoute
  NewsIndexRoute: typeof NewsIndexRoute
  PostsIndexRoute: typeof PostsIndexRoute
  NewsNewsIdIndexRoute: typeof NewsNewsIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PostsPostIdRoute: PostsPostIdRoute,
  NewsIndexRoute: NewsIndexRoute,
  PostsIndexRoute: PostsIndexRoute,
  NewsNewsIdIndexRoute: NewsNewsIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/posts/$postId",
        "/news/",
        "/posts/",
        "/news/$newsId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/posts/$postId": {
      "filePath": "posts/$postId.tsx"
    },
    "/news/": {
      "filePath": "news/index.tsx"
    },
    "/posts/": {
      "filePath": "posts/index.tsx"
    },
    "/news/$newsId/": {
      "filePath": "news/$newsId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
