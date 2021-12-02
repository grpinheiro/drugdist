import { Profile } from "@modules/profiles/infra/typeorm/entities/Profile";
import { IProfilesRepository } from "@modules/profiles/repositories/IProfilesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListProfilesUseCase {
  constructor(
    @inject("ProfilesRepository")
    private profilesRepository: IProfilesRepository
  ) {}

  async execute(): Promise<Profile[]> {
    const profiles = await this.profilesRepository.findAll();

    return profiles;
  }
}

export { ListProfilesUseCase };
