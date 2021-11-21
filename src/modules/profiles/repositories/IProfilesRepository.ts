import { ICreateProfileDTO } from "../dtos/ICreateProfileDTO";

interface IProfilesRepository {
  create(data: ICreateProfileDTO): Promise<void>;
}

export { IProfilesRepository };
