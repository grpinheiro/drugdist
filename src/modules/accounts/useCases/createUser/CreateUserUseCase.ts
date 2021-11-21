import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
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
  }: ICreateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
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
  }
}

export { CreateUserUseCase };
