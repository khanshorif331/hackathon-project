import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div class="navbar bg-primary">
			<div class="flex-1 text-2xl text-white">
				<Link to="/">SharePro</Link>
			</div>
			<div class="flex-none gap-2">
				<div class="form-control">
					<h1 className="text-white">Shoriful Islam</h1>
				</div>
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" alt="" />
						</div>
					</label>

					<ul
						tabindex="0"
						class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
					>
						{['profile', 'dashboard', 'settings', 'logout'].map(i => (
							<li>
								<Link to={`/${i}`}>{i}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
