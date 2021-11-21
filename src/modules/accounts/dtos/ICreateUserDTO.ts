interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  profile_id: string;
  avatar?: string;
  main_phone?: string;
  secondary_phone?: string;
  cpf_cnpj?: string;
  cep?: string;
  address?: string;
  neighborhood?: string;
  number_address?: string;
  city?: string;
  state?: string;
}

export { ICreateUserDTO };
