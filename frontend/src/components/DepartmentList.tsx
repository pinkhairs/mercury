import { useEffect, useState } from "react"
import { Department } from "../models/Models"
import api from "../utils/api"

export const DepartmentList = () => {
	const [departments, setDepartments] = useState<Department|undefined>()


	useEffect(() => {

		(async () => {
			try {
				setDepartments(await api.listDepartments())
			}
			catch (ex) {
				console.error(ex)
			}
		})()

	}, [])


	if (!departments) {
		return <p>Loading Departments...</p>
	}
	else if (departments.length === 0) {
		return <p>No departments</p>
	}

	// added link to department detail page
  	return (
		  <>
		<h2>Department List</h2>
		
		<ul>
			{departments.map(d => <li><a href={'/department/'+d.id}>{d.name}</a></li>)}
		</ul>
		</>
	)
}