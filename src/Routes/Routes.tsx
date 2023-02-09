import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Page404 } from '../Pages/Page404/Page404'
import { Ship } from '../Pages/Ship/Ship'
import { Test } from '../Pages/Test/Test'
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