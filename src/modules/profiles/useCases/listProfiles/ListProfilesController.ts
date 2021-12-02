import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProfilesUseCase } from "./ListProfilesUseCase";

class ListProfilesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProfilesUseCase = container.resolve(ListProfilesUseCase);

    const profiles = await listProfilesUseCase.execute();

    return response.json(profiles);
  }
}

export { ListProfilesController };
