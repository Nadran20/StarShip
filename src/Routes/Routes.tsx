import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../Views/Pages/Home/Home'
import { Page404 } from '../Views/Pages/Page404/Page404'
import { Ship } from '../Views/Pages/Ship/Ship'
import { Test } from '../Views/Pages/Test/Test'
import React from 'react'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		errorElement: <Page404/>,
	},
	{
		path: '/world/:userId',
		element: <Home/>
	},
	{
		path: '/world/:userId/ship/:shipId',
		element: <Ship/>
	},
	{
		path: '/test',
		element: <Test/>
	}
])

export const Routes = () => {
	return <RouterProvider router={router}/>
}