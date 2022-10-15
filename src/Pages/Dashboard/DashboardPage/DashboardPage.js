import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardPage = () => {
	return (
		<div class="drawer drawer-mobile">
			<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				{/* <!---------- Page content here -------> */}
				{/* <h1>Hey</h1>
				 */}
				<Outlet />
				<label
					for="my-drawer-2"
					class="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-2" class="drawer-overlay"></label>
				<ul class="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
					{/* <!--------- Sidebar content here -------> */}
					<li>
						<Link to="home">Dashboard</Link>
					</li>
					<li>
						<Link to="sharedFiles">Files</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default DashboardPage
