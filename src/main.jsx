import  React from 'react';
import Root from "./routes/root";
import ReactDOM from 'react-dom/client';
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
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
    children:[

      {
        path:"contacts/:contactId",
        element: <Contact/>,
      },
      
    ],
  },
  
]) ;

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);

// This first route is what we often call the "root route" since the rest of our routes will render inside of it. 
// It will serve as the root layout of the UI, we'll have nested layouts as we get farther along.
// However, it's not inside of our root layout 😠 --> Nested Routes : We want the contact component to render inside of the <Root> layout.
// We do it by making the contact route a child of the root route. -->You'll now see the root layout again but a blank page on the right. We need to tell the root route where we want it to render its child routes. We do that with <Outlet>.
// Find the <div id="detail"> and put an outlet inside
// 👉 Render an <Outlet>