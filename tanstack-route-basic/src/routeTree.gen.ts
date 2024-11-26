/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactLayoutImport } from './routes/_contactLayout'
import { Route as AboutLayoutImport } from './routes/_aboutLayout'
import { Route as IndexImport } from './routes/index'
import { Route as ContactLayoutContactIndexImport } from './routes/_contactLayout/contact/index'
import { Route as AboutLayoutAboutIndexImport } from './routes/_aboutLayout/about/index'
import { Route as AboutLayoutAboutNewsIndexImport } from './routes/_aboutLayout/about/news/index'

// Create/Update Routes

const ContactLayoutRoute = ContactLayoutImport.update({
  id: '/_contactLayout',
  getParentRoute: () => rootRoute,
} as any)

const AboutLayoutRoute = AboutLayoutImport.update({
  id: '/_aboutLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ContactLayoutContactIndexRoute = ContactLayoutContactIndexImport.update({
  id: '/contact/',
  path: '/contact/',
  getParentRoute: () => ContactLayoutRoute,
} as any)

const AboutLayoutAboutIndexRoute = AboutLayoutAboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => AboutLayoutRoute,
} as any)

const AboutLayoutAboutNewsIndexRoute = AboutLayoutAboutNewsIndexImport.update({
  id: '/about/news/',
  path: '/about/news/',
  getParentRoute: () => AboutLayoutRoute,
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
    '/_aboutLayout': {
      id: '/_aboutLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AboutLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_contactLayout': {
      id: '/_contactLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ContactLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_aboutLayout/about/': {
      id: '/_aboutLayout/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLayoutAboutIndexImport
      parentRoute: typeof AboutLayoutImport
    }
    '/_contactLayout/contact/': {
      id: '/_contactLayout/contact/'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLayoutContactIndexImport
      parentRoute: typeof ContactLayoutImport
    }
    '/_aboutLayout/about/news/': {
      id: '/_aboutLayout/about/news/'
      path: '/about/news'
      fullPath: '/about/news'
      preLoaderRoute: typeof AboutLayoutAboutNewsIndexImport
      parentRoute: typeof AboutLayoutImport
    }
  }
}

// Create and export the route tree

interface AboutLayoutRouteChildren {
  AboutLayoutAboutIndexRoute: typeof AboutLayoutAboutIndexRoute
  AboutLayoutAboutNewsIndexRoute: typeof AboutLayoutAboutNewsIndexRoute
}

const AboutLayoutRouteChildren: AboutLayoutRouteChildren = {
  AboutLayoutAboutIndexRoute: AboutLayoutAboutIndexRoute,
  AboutLayoutAboutNewsIndexRoute: AboutLayoutAboutNewsIndexRoute,
}

const AboutLayoutRouteWithChildren = AboutLayoutRoute._addFileChildren(
  AboutLayoutRouteChildren,
)

interface ContactLayoutRouteChildren {
  ContactLayoutContactIndexRoute: typeof ContactLayoutContactIndexRoute
}

const ContactLayoutRouteChildren: ContactLayoutRouteChildren = {
  ContactLayoutContactIndexRoute: ContactLayoutContactIndexRoute,
}

const ContactLayoutRouteWithChildren = ContactLayoutRoute._addFileChildren(
  ContactLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof ContactLayoutRouteWithChildren
  '/about': typeof AboutLayoutAboutIndexRoute
  '/contact': typeof ContactLayoutContactIndexRoute
  '/about/news': typeof AboutLayoutAboutNewsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof ContactLayoutRouteWithChildren
  '/about': typeof AboutLayoutAboutIndexRoute
  '/contact': typeof ContactLayoutContactIndexRoute
  '/about/news': typeof AboutLayoutAboutNewsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_aboutLayout': typeof AboutLayoutRouteWithChildren
  '/_contactLayout': typeof ContactLayoutRouteWithChildren
  '/_aboutLayout/about/': typeof AboutLayoutAboutIndexRoute
  '/_contactLayout/contact/': typeof ContactLayoutContactIndexRoute
  '/_aboutLayout/about/news/': typeof AboutLayoutAboutNewsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/about' | '/contact' | '/about/news'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/about' | '/contact' | '/about/news'
  id:
    | '__root__'
    | '/'
    | '/_aboutLayout'
    | '/_contactLayout'
    | '/_aboutLayout/about/'
    | '/_contactLayout/contact/'
    | '/_aboutLayout/about/news/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutLayoutRoute: typeof AboutLayoutRouteWithChildren
  ContactLayoutRoute: typeof ContactLayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutLayoutRoute: AboutLayoutRouteWithChildren,
  ContactLayoutRoute: ContactLayoutRouteWithChildren,
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
        "/_aboutLayout",
        "/_contactLayout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_aboutLayout": {
      "filePath": "_aboutLayout.tsx",
      "children": [
        "/_aboutLayout/about/",
        "/_aboutLayout/about/news/"
      ]
    },
    "/_contactLayout": {
      "filePath": "_contactLayout.tsx",
      "children": [
        "/_contactLayout/contact/"
      ]
    },
    "/_aboutLayout/about/": {
      "filePath": "_aboutLayout/about/index.tsx",
      "parent": "/_aboutLayout"
    },
    "/_contactLayout/contact/": {
      "filePath": "_contactLayout/contact/index.tsx",
      "parent": "/_contactLayout"
    },
    "/_aboutLayout/about/news/": {
      "filePath": "_aboutLayout/about/news/index.tsx",
      "parent": "/_aboutLayout"
    }
  }
}
ROUTE_MANIFEST_END */