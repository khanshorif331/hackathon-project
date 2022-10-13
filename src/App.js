import './App.css'
import Login from './Pages/Authentication/Login'
import Register from './Pages/Authentication/Register'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
