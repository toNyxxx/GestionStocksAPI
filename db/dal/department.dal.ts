import { Department } from "../models"
import {
	CreateDepartmentDto,
	FilterDepartmentDto,
	UpdateDepartmentDto,
} from "../../api/resources/department";

const getAll = async (filters?: FilterDepartmentDto): Promise<Department[]> => {
    // TODO: Add "where" clause
    return Department.findAll();
}

const getById = async (id: number): Promise<Department | null> => {
    return await Department.findByPk(id);
}

const create = async (payload: CreateDepartmentDto): Promise<Department> => {
    const department = await Department.create(payload);
    return department;
}

const findOrCreate = async (payload: CreateDepartmentDto): Promise<Department> => {
    const [department] = await Department.findOrCreate({ where: { name: payload.name }, defaults: payload });
    return department;
}

const update = async (id: number, payload: Partial<UpdateDepartmentDto>): Promise<Department> => {
    const department = await Department.findByPk(id);

    if (!department)
        throw new Error(`Department with id ${id} not found`);

    const updatedDepartment = await department.update(payload);
    return updatedDepartment;
}

const deleteById = async (id: number): Promise<boolean> => {
    const deletedDepartmentCount = await Department.destroy({ where: { id } });
    return !!deletedDepartmentCount;
}

const departmentExists = async (name: string): Promise<boolean> => {
    const departmentWithName = await Department.findOne({ where: { name } });
    return departmentWithName != null;
}

export {
    getAll,
    getById,
    create,
    findOrCreate,
    update,
    deleteById,
    departmentExists
}