import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  profile_id: string;

  @Column()
  avatar: string;

  @Column()
  main_phone: string;

  @Column()
  secondary_phone: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  cep: string;

  @Column()
  address: string;

  @Column()
  neighborhood: string;

  @Column()
  number_address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
