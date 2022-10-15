import React from 'react'
import Data from '../../../Assets/constants/data.json'

const DashboardHome = () => {
	return (
		<div className="w-full">
			{/* -----------1st part---------- */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center p-4">
				{/* -------------1st card--------- */}
				<div class="card full bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title">Total No of sent file</h2>
						<p>0</p>
					</div>
				</div>
				{/* -------------2nd card--------- */}
				<div class="card full bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title">Total No of Recieved file</h2>
						<p>0</p>
					</div>
				</div>
				{/* -------------3rd card--------- */}
				<div class="card full bg-base-100 shadow-xl">
					<div class="card-body text-center">
						<input type="file" />
						<button className="btn btn-primary">Send File</button>
					</div>
				</div>
			</div>
			{/* -----------Table Section---------- */}
			<h1 className=" p-4 border-b-2">Dashboard</h1>
			<div className=" p-4">
				<div class="overflow-x-auto">
					<table class="table table-compact w-full">
						{/* <!-- head --> */}
						<thead>
							<tr>
								{[
									'Sl No',
									'Post',
									'Sent By',
									'Recieved By',
									'Description',
									'Comments',
									'Date Time',
								].map((item, index) => {
									return <th key={index}>{item}</th>
								})}
							</tr>
						</thead>
						<tbody>
							{/* <!-- row 1 --> */}
							{Data.map((item, index) => {
								return (
									<tr>
										<td>{index + 1}</td>
										<td>{item.post}</td>
										<td>{item.sender}</td>
										<td>{item.receiver}</td>
										<td>{item.description}</td>
										<td>{item.comments}</td>
										<td>{item.Date}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default DashboardHome
