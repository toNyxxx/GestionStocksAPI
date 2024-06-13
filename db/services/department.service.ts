import { CreateDepartmentDto, FilterDepartmentDto, UpdateDepartmentDto } from '../../api/resources/department'
import { DepartmentDAL } from '../dal/'
import { Department } from '../models'

const getAll = (filters: FilterDepartmentDto): Promise<Department[]> => {
    return DepartmentDAL.getAll(filters)
}

const getById = (id: number): Promise<Department | null> => {
    return DepartmentDAL.getById(id)
}

const create = async (payload: CreateDepartmentDto): Promise<Department | null> => {
    const exists = await DepartmentDAL.departmentExists(payload.name);
    if (exists) return null;
    return DepartmentDAL.create(payload);
}

const update = async (id: number, payload: UpdateDepartmentDto): Promise<Department | null> => {
    const exists = await DepartmentDAL.departmentExists(payload.name);
    if (exists) return null;
    return DepartmentDAL.update(id, payload)
}

const deleteById = (id: number): Promise<boolean> => {
    return DepartmentDAL.deleteById(id)
}

export {
    getAll,
    getById,
    create,
    update,
    deleteById
}

