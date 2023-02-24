import { useEffect, useState } from "react"
import { Department } from "../models/Models"
import api from "../utils/api"

export const DepartmentDetails = () => {
	const [department, setDepartment] = useState<Department|undefined>()
	const urlPath = window.location.pathname.split('/');
	const departmentIdFromUrl = urlPath[2];

	useEffect(() => {

		(async () => {
			try {
				setDepartment(await api.showDepartment(departmentIdFromUrl))
			}
			catch (ex) {
				console.error(ex)
			}
		})()

	}, [])


	if (!department) {
		return <p>Loading Department...</p>
	}

  	return (
		<>
			<p className="label">Department Details</p>
			<h2>{department.name}</h2>
			<h3>Employees</h3>
			<ul>
				{department.employees.map((employee) => {
					return <li>{employee.name}</li>
				})}
			</ul>
		</>
	)
}