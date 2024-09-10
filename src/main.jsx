import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path: '/',element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:"/",element:<Home/>},
      {path:"/login",element:<Login/>},
      {path:"/dashboard",element:<Dashboard/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </StrictMode>,
)
