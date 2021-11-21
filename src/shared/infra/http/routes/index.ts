import { Router } from "express";

import { profilesRoutes } from "./profiles.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/profiles", profilesRoutes);
router.use("/users", usersRoutes);

export { router };
