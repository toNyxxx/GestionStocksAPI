import { CreationAttributes } from "sequelize";
import { Department } from "../../../db/models";

interface CreateDepartmentDto extends CreationAttributes<Department> {}

type UpdateDepartmentDto = CreateDepartmentDto;

type FilterDepartmentDto = {
    includeDeleted?: boolean
};

export { CreateDepartmentDto, UpdateDepartmentDto, FilterDepartmentDto }