
import { Department, Employee } from '../models/Models'
import { HTTPMethod, Service, Request, request } from './_abstract'

const Requests = {
    // Fixed typo in URL adding S to end of department
    departments: new Request<Department[]>(HTTPMethod.get, "v1/departments"),
    department: new Request<Department[]>(HTTPMethod.get, "v1/department"),
    employees: new Request<Employee[]>(HTTPMethod.get, 'v1/employees')
}

class Backend implements Service {
    baseUrl = process.env.REACT_APP_API_HOST

    async listEmployees(): Promise<Employee[]> {
        return request(this, Requests.employees).call()
    }

    async listDepartments(): Promise<Department[]> {
        return request(this, Requests.departments).call()
    }

    async showDepartment(id: string): Promise<Department[]> {
        Requests.department.path += '/'+id
        return request(this, Requests.department).call()
    }
}


export default new Backend()