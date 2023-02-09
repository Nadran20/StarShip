import React from 'react'
import {Button} from '../../Components/Button/Button'
import {toast, ToastContainer} from 'react-toastify'

export const Home = () => {
	const notify = () => {
		toast('Hello world')
	}

	return <>
		<Button text={'Test'} color={'#76CEFF'} onClick={notify}/>
		<ToastContainer/>
	</>
}