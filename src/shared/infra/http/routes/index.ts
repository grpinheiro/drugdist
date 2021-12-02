import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { profilesRoutes } from "./profiles.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/profiles", profilesRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
