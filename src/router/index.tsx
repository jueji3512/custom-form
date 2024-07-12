/* eslint-disable react-refresh/only-export-components*/
import { Navigate, RouteObject } from "react-router-dom"
import LazyComponent from "@/router/LazyComponent.tsx";
import {FC, lazy, LazyExoticComponent} from "react";

const DesignerDemo: LazyExoticComponent<FC> = lazy(() => import('@/example/DesignerDemo'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/designer" replace />
  },
  {
    path: '/designer',
    element: <LazyComponent component={DesignerDemo} />
  }
]