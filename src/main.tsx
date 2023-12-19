import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StartPage } from './pages/StartPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { Cars } from './components/Cars.tsx';
import { CatFact } from './components/CatFact.tsx';
import { CatFacts } from './components/CatFacts.tsx';
import { QueryClient, QueryClientProvider } from 'react-query'
import { CatFactsReactQuery } from './components/CatFactsReactQuery.tsx';
import { ReduxDemo } from './components/ReduxDemo.tsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { CatFactsRedux } from './components/CatFactsRedux.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/useStateExample",
    element: <Cars />
  },
  {
    path: "/fetchDataExample",
    element: <CatFact />
  },
  {
    path: "/catFacts",
    element: <CatFacts />
  },
  {
    path: "/catFactsReactQuery",
    element: <CatFactsReactQuery />
  },
  {
    path: "reduxdemo",
    element: <ReduxDemo />
  },
  {
    path: "catfactsredux",
    element: <CatFactsRedux />
  }
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
