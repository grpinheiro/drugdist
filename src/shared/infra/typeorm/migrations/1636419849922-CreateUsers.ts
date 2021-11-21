import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
