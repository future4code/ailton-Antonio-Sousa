import { BaseDatabase } from "../BaseDataBase"
import { result } from "./Data"



class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error:any) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ProdutoJoin;
        DROP TABLE IF EXISTS produtosAmaro;
        DROP TABLE IF EXISTS produtosTags;
      
        
        CREATE TABLE IF NOT EXISTS produtosAmaro (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS produtosTags (
            tags varchar(255) primary key
        );

        CREATE TABLE IF NOT EXISTS ProdutoJoin(
            id int not null,
            tags varchar(255) not null,
            foreign key(id) references produtosAmaro(id),
            foreign key(tags) references produtosTags(tags)
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection('produtosAmaro')
            .insert(result)


        // await BaseDatabase
        //     .connection('produtosTags')
        //     .insert(shows)

        // await BaseDatabase
        //     .connection('ProdutoJoin')
        //     .insert(tickets)
    }
}

const migrations = new Migrations()
migrations.execute()