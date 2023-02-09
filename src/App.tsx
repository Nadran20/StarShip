import React from 'react'
import {Routes} from './Routes/Routes'
import {Toaster} from './Components/Toaster/Toaster'

import './App.css'


function App() {
	return (
		<div className="routes">
			<Routes/>
			<Toaster/>
		</div>
	)
}

export default App
