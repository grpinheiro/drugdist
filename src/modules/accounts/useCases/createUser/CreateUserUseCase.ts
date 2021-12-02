import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IProfilesRepository } from "@modules/profiles/repositories/IProfilesRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("ProfilesRepository")
    private profilesRepository: IProfilesRepository
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
    // Validação se o email informado existe na tabela de usuários
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError(`Email '${email}' already exists.`);
    }

    // Validação se o CPF/CNPJ informado existe na tabela de usuários
    const documentAlrearyExists = await this.usersRepository.findByDocument(
      cpf_cnpj
    );

    if (documentAlrearyExists) {
      throw new AppError(`CPF/CNPJ '${cpf_cnpj}' already exists.`);
    }

    // Validação se o perfil informado existe
    const profileAlreadyExists = await this.profilesRepository.findById(
      profile_id
    );

    if (!profileAlreadyExists) {
      throw new AppError("Profile does not exists");
    }

    // Criptografia de senha
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
