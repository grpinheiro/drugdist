import { ICreateProfileDTO } from "@modules/profiles/dtos/ICreateProfileDTO";
import { IProfilesRepository } from "@modules/profiles/repositories/IProfilesRepository";
import { getRepository, Repository } from "typeorm";

import { Profile } from "../entities/Profile";

class ProfilesRepository implements IProfilesRepository {
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

  async findById(id: string): Promise<Profile> {
    const profile = await this.repository.findOne(id);
    return profile;
  }

  async findByName(name: string): Promise<Profile> {
    const profile = await this.repository.findOne({ name });
    return profile;
  }

  async findAll(): Promise<Profile[]> {
    const profiles = await this.repository.find();
    return profiles;
  }
}

export { ProfilesRepository };
