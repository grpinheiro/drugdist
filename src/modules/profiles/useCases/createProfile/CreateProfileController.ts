import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProfileUseCase } from "./CreateProfileUseCase";

class CreateProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createProfileUseCase = container.resolve(CreateProfileUseCase);
    await createProfileUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateProfileController };
