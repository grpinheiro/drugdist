import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      profile_id,
      main_phone,
      secondary_phone,
      cpf_cnpj,
      cep,
      address,
      neighborhood,
      number_address,
      city,
      state,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      password,
      profile_id,
      main_phone,
      secondary_phone,
      cpf_cnpj,
      cep,
      address,
      neighborhood,
      number_address,
      city,
      state,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
