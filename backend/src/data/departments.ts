import Employees from "./employees"

// Get department employees as full objects instead of IDs because that makes more sense
const getDeptEmployees = (id: string) => {
    return Employees.filter((employee) => {
        return employee.departmentId === id
    })
}

const departments = [
    {
        id: "2",
        name: "Full Stack Development",
        get employees() {
            return getDeptEmployees(this.id)
        }
    },
    {
        id: "3",
        name: "Connected Devices Engineering",
        get employees() {
            return getDeptEmployees(this.id)
        }
    },
    {
        id: "4",
        name: "Android Engineering",
        get employees() {
            return getDeptEmployees(this.id)
        }
    },
]

export default departments