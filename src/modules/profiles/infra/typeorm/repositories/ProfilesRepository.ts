import { ICreateProfileDTO } from "@modules/profiles/dtos/ICreateProfileDTO";
import { IProfileRepository } from "@modules/profiles/repositories/IProfilesRepository";
import { getRepository, Repository } from "typeorm";

import { Profile } from "../entities/Profile";

class ProfilesRepository implements IProfileRepository {
  private repository: Repository<Profile>;

  constructor() {
    this.repository = getRepository(Profile);
  }

  async create({ id, name }: ICreateProfileDTO): Promise<void> {
    const profile = this.repository.create({
      id,
      name,
    });

    await this.repository.save(profile);
  }
}

export { ProfilesRepository };
