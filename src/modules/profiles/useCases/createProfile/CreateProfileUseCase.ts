import { ICreateProfileDTO } from "@modules/profiles/dtos/ICreateProfileDTO";
import { IProfilesRepository } from "@modules/profiles/repositories/IProfilesRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateProfileUseCase {
  constructor(
    @inject("ProfilesRepository")
    private profileRepository: IProfilesRepository
  ) {}

  async execute({ name }: ICreateProfileDTO): Promise<void> {
    const profileAlreadyExists = await this.profileRepository.findByName(name);

    if (profileAlreadyExists) {
      throw new AppError("Profile already exists");
    }

    await this.profileRepository.create({ name });
  }
}

export { CreateProfileUseCase };
