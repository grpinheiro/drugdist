import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { ProfilesRepository } from "@modules/profiles/infra/typeorm/repositories/ProfilesRepository";
import { IProfilesRepository } from "@modules/profiles/repositories/IProfilesRepository";
import { container } from "tsyringe";
import "@shared/container/providers";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProfilesRepository>(
  "ProfilesRepository",
  ProfilesRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
