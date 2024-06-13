import { CreateDepartmentDto, FilterDepartmentDto, UpdateDepartmentDto } from "."
import { Department } from "../../../db/models"
import { DepartmentService } from "../../../db/services"

const create = async(payload: CreateDepartmentDto): Promise<Department | null> => {
    return await DepartmentService.create(payload)
}

const update = async (id: number, payload: UpdateDepartmentDto): Promise<Department | null> => {
    return await DepartmentService.update(id, payload)
}

const getById = async (id: number): Promise<Department | null> => {
    return await DepartmentService.getById(id)
}

const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await DepartmentService.deleteById(id)
    return isDeleted
}

const getAll = async(filters: FilterDepartmentDto): Promise<Department[]> => {
    return (await DepartmentService.getAll(filters))
}

export { create, update, getById, deleteById, getAll }