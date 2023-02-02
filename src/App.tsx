import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {Page404} from "./Pages/Page404/Page404";
import {Test} from "./Pages/Test/Test";
import {Ship} from "./Pages/Ship/Ship";
import './bootstrap.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Page404/>,
    },
    {
        path: "/world/:userId",
        element: <Home/>
    },
    {
        path: "/world/:userId/ship/:shipId",
        element: <Ship/>
    },
    {
        path: "/test",
        element: <Test/>
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
