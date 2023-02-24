import { Router, Response, Request } from 'express'

// Separate data for reusability
import Employees from '../data/employees';
import Departments from '../data/Departments';

const router: Router = Router()

router.get('/v1/departments', (_req: Request, res: Response) => {
    res.send(Departments)
})

router.get('/v1/department/:id', (_req: Request, res: Response) => {
    res.send(Departments.find(department => department.id === _req.params.id))
})

router.get('/v1/employees', (_unused: Request, res: Response) => {

    res.send(Employees)
})

export default router