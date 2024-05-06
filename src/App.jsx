import { Fragment } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {path:'/',element: <Home/>},
      {path:'/Products',element: <Products/>},
      {path: '/About', element: <About/>},
      {path: '/Contact', element: <Contact/>},
      {path: '/Services', element: <Services/>},
    ]
  }
])

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
