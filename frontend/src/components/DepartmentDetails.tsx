import { useEffect, useState } from "react"
import { Department, Employee } from "../models/Models"
import api from "../utils/api"

export const DepartmentDetails = () => {
	const [department, setDepartment] = useState<Department|undefined>()
	const [employees, setEmployees] = useState<Employee[]|undefined>()
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

	}, [departmentIdFromUrl])

	useEffect(() => {
		setEmployees(department?.employees as Employee[])
	}, [department?.employees])

	if (!department) {
		return <p>Loading Department...</p>
	}

  	return (
		<>
			<p className="label">Department Details</p>
			<h2>{department.name}</h2>
			<h3>Employees</h3>
			<ul>
				{employees?.map((employee: Employee) => {
					return <li key={employee.id}>{employee.name}</li>
				})}
			</ul>
		</>
	)
}