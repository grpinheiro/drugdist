import { ICreateProfileDTO } from "../dtos/ICreateProfileDTO";
import { Profile } from "../infra/typeorm/entities/Profile";

interface IProfilesRepository {
  create(data: ICreateProfileDTO): Promise<void>;
  findByName(name: string): Promise<Profile>;
  findById(id: string): Promise<Profile>;
  findAll(): Promise<Profile[]>;
}

export { IProfilesRepository };
