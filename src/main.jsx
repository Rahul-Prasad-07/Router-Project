import  React from 'react';
import Root from "./routes/root";
import ReactDOM from 'react-dom/client';
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// Adding Router :First thing to do is create a Browser Router and configure our first route. 
// This will enable client side routing for our web app.

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
]) ;

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);

// This first route is what we often call the "root route" since the rest of our routes will render inside of it. 
// It will serve as the root layout of the UI, we'll have nested layouts as we get farther along.