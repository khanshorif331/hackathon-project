import './App.css'
import Login from './Pages/Authentication/Login'
import Register from './Pages/Authentication/Register'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import DashboardPage from './Pages/Dashboard/DashboardPage/DashboardPage'
import { MdNotificationsPaused } from 'react-icons/md'
import NotFound from './Components/NotFound'
import SharedFiles from './Pages/Dashboard/DashboardPage/SharedFiles'
import DashboardHome from './Pages/Dashboard/DashboardPage/DashboardHome'

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<DashboardPage />}>
					<Route index element={<DashboardHome />}></Route>
					<Route path="home" element={<DashboardHome />}></Route>
					<Route path="sharedFiles" element={<SharedFiles />}></Route>
				</Route>

				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	)
}

export default App
