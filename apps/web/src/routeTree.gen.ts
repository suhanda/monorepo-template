/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersManagementImport } from './routes/users-management'
import { Route as IndexImport } from './routes/index'
import { Route as UsersManagementIndexImport } from './routes/users-management/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as UsersManagementCreateIndexImport } from './routes/users-management/create/index'
import { Route as UsersManagementUserIdIndexImport } from './routes/users-management/$userId/index'
import { Route as UsersManagementUserIdEditImport } from './routes/users-management/$userId/edit'

// Create/Update Routes

const UsersManagementRoute = UsersManagementImport.update({
  id: '/users-management',
  path: '/users-management',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersManagementIndexRoute = UsersManagementIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => UsersManagementRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const UsersManagementCreateIndexRoute = UsersManagementCreateIndexImport.update(
  {
    id: '/create/',
    path: '/create/',
    getParentRoute: () => UsersManagementRoute,
  } as any,
)

const UsersManagementUserIdIndexRoute = UsersManagementUserIdIndexImport.update(
  {
    id: '/$userId/',
    path: '/$userId/',
    getParentRoute: () => UsersManagementRoute,
  } as any,
)

const UsersManagementUserIdEditRoute = UsersManagementUserIdEditImport.update({
  id: '/$userId/edit',
  path: '/$userId/edit',
  getParentRoute: () => UsersManagementRoute,
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
    '/users-management': {
      id: '/users-management'
      path: '/users-management'
      fullPath: '/users-management'
      preLoaderRoute: typeof UsersManagementImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/users-management/': {
      id: '/users-management/'
      path: '/'
      fullPath: '/users-management/'
      preLoaderRoute: typeof UsersManagementIndexImport
      parentRoute: typeof UsersManagementImport
    }
    '/users-management/$userId/edit': {
      id: '/users-management/$userId/edit'
      path: '/$userId/edit'
      fullPath: '/users-management/$userId/edit'
      preLoaderRoute: typeof UsersManagementUserIdEditImport
      parentRoute: typeof UsersManagementImport
    }
    '/users-management/$userId/': {
      id: '/users-management/$userId/'
      path: '/$userId'
      fullPath: '/users-management/$userId'
      preLoaderRoute: typeof UsersManagementUserIdIndexImport
      parentRoute: typeof UsersManagementImport
    }
    '/users-management/create/': {
      id: '/users-management/create/'
      path: '/create'
      fullPath: '/users-management/create'
      preLoaderRoute: typeof UsersManagementCreateIndexImport
      parentRoute: typeof UsersManagementImport
    }
  }
}

// Create and export the route tree

interface UsersManagementRouteChildren {
  UsersManagementIndexRoute: typeof UsersManagementIndexRoute
  UsersManagementUserIdEditRoute: typeof UsersManagementUserIdEditRoute
  UsersManagementUserIdIndexRoute: typeof UsersManagementUserIdIndexRoute
  UsersManagementCreateIndexRoute: typeof UsersManagementCreateIndexRoute
}

const UsersManagementRouteChildren: UsersManagementRouteChildren = {
  UsersManagementIndexRoute: UsersManagementIndexRoute,
  UsersManagementUserIdEditRoute: UsersManagementUserIdEditRoute,
  UsersManagementUserIdIndexRoute: UsersManagementUserIdIndexRoute,
  UsersManagementCreateIndexRoute: UsersManagementCreateIndexRoute,
}

const UsersManagementRouteWithChildren = UsersManagementRoute._addFileChildren(
  UsersManagementRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/users-management': typeof UsersManagementRouteWithChildren
  '/dashboard': typeof DashboardIndexRoute
  '/login': typeof LoginIndexRoute
  '/users-management/': typeof UsersManagementIndexRoute
  '/users-management/$userId/edit': typeof UsersManagementUserIdEditRoute
  '/users-management/$userId': typeof UsersManagementUserIdIndexRoute
  '/users-management/create': typeof UsersManagementCreateIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/login': typeof LoginIndexRoute
  '/users-management': typeof UsersManagementIndexRoute
  '/users-management/$userId/edit': typeof UsersManagementUserIdEditRoute
  '/users-management/$userId': typeof UsersManagementUserIdIndexRoute
  '/users-management/create': typeof UsersManagementCreateIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/users-management': typeof UsersManagementRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/login/': typeof LoginIndexRoute
  '/users-management/': typeof UsersManagementIndexRoute
  '/users-management/$userId/edit': typeof UsersManagementUserIdEditRoute
  '/users-management/$userId/': typeof UsersManagementUserIdIndexRoute
  '/users-management/create/': typeof UsersManagementCreateIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/users-management'
    | '/dashboard'
    | '/login'
    | '/users-management/'
    | '/users-management/$userId/edit'
    | '/users-management/$userId'
    | '/users-management/create'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard'
    | '/login'
    | '/users-management'
    | '/users-management/$userId/edit'
    | '/users-management/$userId'
    | '/users-management/create'
  id:
    | '__root__'
    | '/'
    | '/users-management'
    | '/dashboard/'
    | '/login/'
    | '/users-management/'
    | '/users-management/$userId/edit'
    | '/users-management/$userId/'
    | '/users-management/create/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  UsersManagementRoute: typeof UsersManagementRouteWithChildren
  DashboardIndexRoute: typeof DashboardIndexRoute
  LoginIndexRoute: typeof LoginIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  UsersManagementRoute: UsersManagementRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
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
        "/users-management",
        "/dashboard/",
        "/login/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/users-management": {
      "filePath": "users-management.tsx",
      "children": [
        "/users-management/",
        "/users-management/$userId/edit",
        "/users-management/$userId/",
        "/users-management/create/"
      ]
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/users-management/": {
      "filePath": "users-management/index.tsx",
      "parent": "/users-management"
    },
    "/users-management/$userId/edit": {
      "filePath": "users-management/$userId/edit.tsx",
      "parent": "/users-management"
    },
    "/users-management/$userId/": {
      "filePath": "users-management/$userId/index.tsx",
      "parent": "/users-management"
    },
    "/users-management/create/": {
      "filePath": "users-management/create/index.tsx",
      "parent": "/users-management"
    }
  }
}
ROUTE_MANIFEST_END */