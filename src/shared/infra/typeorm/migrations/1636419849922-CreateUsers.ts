import { hash } from "bcryptjs";
import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export class CreateUsers1636419849922 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },

          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "profile_id",
            type: "uuid",
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "main_phone",
            type: "varchar",
          },
          {
            name: "secondary_phone",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cpf_cnpj",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "cep",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "neighborhood",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "number_address",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "state",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserProfile",
            referencedTableName: "profiles",
            referencedColumnNames: ["id"],
            columnNames: ["profile_id"],
            onDelete: "CASCADE",
          },
        ],
      })
    );

    const idProfileAdmin = uuidV4();

    await queryRunner.query(
      `INSERT INTO profiles (id, name) VALUES('${idProfileAdmin}','Administrador')`
    );

    const passwordHash = await hash("admin", 8);

    await queryRunner.query(
      `INSERT INTO users (id, name, email, password, profile_id, cpf_cnpj, main_phone) VALUES ('${uuidV4()}', 
      'Administrador', 'admin@grdev.com.br', '${passwordHash}', '${idProfileAdmin}', '000.000.000-00', '(00)00000-0000')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
