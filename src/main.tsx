import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import ErrorPage from './app/ErrorPage.tsx'
import StoryList, { StoryDetailsLoaderForQuery, StoryLoaderForQuery } from './app/StoryList.tsx'
import Redirect from './app/Redirect.tsx'
import StoryDetails from './app/StoryDetails.tsx'
import { store } from './state/store.ts'
import RouteErrorPage from './app/RouteErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Redirect />
      },
      {
        path: "story/:storyType",
        element: <StoryList />,
        loader: StoryLoaderForQuery,
        errorElement: <RouteErrorPage />
      },
      {
        path: "storydetails/:storyId",
        element: <StoryDetails />,
        loader: StoryDetailsLoaderForQuery,
        errorElement: <RouteErrorPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
