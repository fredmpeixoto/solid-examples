//DON'T
//In thie example below, you create a Repository class that 
//created a new MYSQL entity, it looks fine, but it is againt DIP.
// interface Database {
//   query(query: string): void;
// }

// class MySQLDatabase implements Database {
//   query(sql: string): string {
//     return `MySQL Query: ${sql}`;
//   }
// }

// class Repository {
//   private database: MySQLDatabase;

//   constructor() {
//     this.database = new MySQLDatabase();
//   }

//   fetchData(query: string): string {
//     return this.database.query(query);
//   }
// }

// export class DatabaseRepository {
//   main() {
//     const repositoryWithoutDIP = new Repository();
//     const query = repositoryWithoutDIP.fetchData('SELECT * FROM users')
//     console.log('DIP', { query });
//   }
// }

//DO IT.
// Ensure that you receive the entity type instead of creating a new one.
// Wrap your constructor to handle various entity types dynamics.
// By doing this, your repository class becomes independent of the selected schema

interface Database {
  query(sql: string): string;
}

class MySQLDatabase implements Database {
  query(sql: string): string {
    return `MySQL Query: ${sql}`;
  }
}

class PosgresDatabase implements Database {
  query(sql: string): string {
    return `Posgres Query: ${sql}`
  }
}

class Repository {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  fetchData(query: string): string {
    return this.database.query(query);
  }
}

export class DatabaseRepository {
  main() {
    const mySQL = new MySQLDatabase();
    const postgres = new PosgresDatabase()
    const repositoryMySQL = new Repository(mySQL);
    const repositoryPostgres = new Repository(postgres);
    const queryMySQL = repositoryMySQL.fetchData('SELECT * FROM users');
    const queryPostgres = repositoryPostgres.fetchData('SELECT * FROM users');
    console.log('DIP', { queryMySQL, queryPostgres });
    //DIP {
    // queryMySQL: 'MySQL Query: SELECT * FROM users',
    // queryPostgres: 'Posgres Query: SELECT * FROM users'
    //}
  }
}
