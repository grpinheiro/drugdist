import { ICreateProfileDTO } from "@modules/profiles/dtos/ICreateProfileDTO";
import { IProfilesRepository } from "@modules/profiles/repositories/IProfilesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateProfileUseCase {
  constructor(
    @inject("ProfilesRepository")
    private profileRepository: IProfilesRepository
  ) {}

  async execute({ name }: ICreateProfileDTO): Promise<void> {
    await this.profileRepository.create({ name });
  }
}

export { CreateProfileUseCase };
