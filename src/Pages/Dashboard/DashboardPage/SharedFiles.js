import React from 'react'
import Data from '../../../Assets/constants/files.json'
const SharedFiles = () => {
	return (
		<div className="p-4">
			<div>
				<h1 className="text-2xl">File</h1>
			</div>
			<div className=" p-4">
				<div class="overflow-x-auto">
					<table class="table table-compact w-full">
						{/* <!-- head --> */}
						<thead>
							<tr>
								{[
									'Sl No',
									'Title',
									'Sender',
									'Reciever',
									'No of files',
									'Date Time',
									'Actions',
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
										<td>{item.title}</td>
										<td>{item.sender}</td>
										<td>{item.receiver}</td>
										<td>{item.description}</td>
										<td>{item.Date}</td>
										<td>
											<button class="btn btn-xs">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</td>
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

export default SharedFiles
