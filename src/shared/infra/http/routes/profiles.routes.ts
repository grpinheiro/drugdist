import { CreateProfileController } from "@modules/profiles/useCases/createProfile/CreateProfileController";
import { ListProfilesController } from "@modules/profiles/useCases/listProfiles/ListProfilesController";
import { Router } from "express";

const profilesRoutes = Router();

const createProfileController = new CreateProfileController();
const listProfilesController = new ListProfilesController();

profilesRoutes.post("/", createProfileController.handle);
profilesRoutes.get("/list", listProfilesController.handle);

export { profilesRoutes };
