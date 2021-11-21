import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    id,
    name,
    email,
    password,
    profile_id,
    avatar,
    main_phone,
    secondary_phone,
    cpf_cnpj,
    cep,
    address,
    neighborhood,
    number_address,
    city,
    state,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      password,
      profile_id,
      avatar,
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

    await this.repository.save(user);
  }
}

export { UsersRepository };
