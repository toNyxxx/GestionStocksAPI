import { Router, Request, Response, NextFunction } from "express";
import {
    CreateDepartmentDto,
    DepartmentController,
    FilterDepartmentDto,
    UpdateDepartmentDto,
} from ".";
import { HTTP_STATUS_CODES } from "../../utils";

const departmentRouter = Router();

departmentRouter.get("/", async (req: Request, res: Response) => {
    const filters: FilterDepartmentDto = req.query;

    const results = await DepartmentController.getAll(filters);
    return res.status(200).send(results);
});

departmentRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    await DepartmentController.getById(id)
        .then((dept) => {
            if (dept) return res.status(200).send(dept);   
            next({
                statusCode: HTTP_STATUS_CODES.NOT_FOUND,
                message: `A department with id ${id} doesn't exists`
            })     
        })
});

departmentRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const payload: CreateDepartmentDto = req.body;

    await DepartmentController.create(payload)
        .then((dept) => {
            if (dept) return res.status(200).send(dept);
            next({
                message: `A department with name ${payload.name} already exists`
            })    
        })
});

departmentRouter.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const payload: UpdateDepartmentDto = req.body;

    await DepartmentController.update(id, payload)
        .then((dept) => {
            if (dept) return res.status(201).send(dept);
            next({
                statusCode: HTTP_STATUS_CODES.NOT_FOUND,
                message: `Department with id ${id} not found`
            }) 
        })
    
});

departmentRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const result = await DepartmentController.deleteById(id);
    return res.status(204).send({
        success: result,
    });
});

export { departmentRouter as DepartmentRouter }