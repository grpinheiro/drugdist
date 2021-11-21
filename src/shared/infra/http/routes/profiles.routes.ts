import { CreateProfileController } from "@modules/profiles/useCases/createProfile/CreateProfileController";
import { Router } from "express";

const profilesRoutes = Router();

const createProfileController = new CreateProfileController();

profilesRoutes.post("/", createProfileController.handle);

export { profilesRoutes };
