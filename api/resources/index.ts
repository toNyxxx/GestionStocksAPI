import { Router } from "express"
import { DepartmentRouter } from "./department";
// import { GroupRouter } from "./group";
// import { ManufacturerRouter } from "./manufacturer";
// import { EquipmentCategoryRouter } from "./equipement-category";
// import { SupplierRouter } from "./supplier/supplier.routes";
// import { RequestStateRouter } from "./request-state";

const resourcesRouter = Router();

resourcesRouter.use('/departments', DepartmentRouter);
// resourcesRouter.use('/groups', GroupRouter);
// resourcesRouter.use('/manufacturers', ManufacturerRouter);
// resourcesRouter.use('/equipment-categories', EquipmentCategoryRouter);
// resourcesRouter.use('/suppliers', SupplierRouter);
// resourcesRouter.use('/request-states', RequestStateRouter);

export default resourcesRouter