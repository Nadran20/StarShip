import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {Page404} from "./Pages/Page404/Page404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Page404/>,
    },
    {
        path: "/world/:userId",
        element: <Home/>
    }
]);

function App() {
    return (
        <div className="routes">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
