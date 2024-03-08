// DON'T use the same class for more than one reason.
//We have the USER class that access DB information, we shouldn't do that.
//We must split this class in a new one to handle database events.

// export class User {
//   name: string = "Fred";

//   showName(): void {
//     console.log(this.name)
//   }

//   connectToDB(dbExample): void {
//     //Bad Practice
//     //We must create a separate class to handle with Database responsibility.
//     return dbExample;
//   }
// }
//DO split up on two class for divid responsability.
//Coding it the class has just one reason to change.
//Whether you need to change the DB function,
//You can do that without touch on User Class. (one reason to change)
export class User {
  name: string;

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export class DBRespository {
  connectToDB(myDbExample: string): string {
    return myDbExample;
  }
}


export class UserInfo {
  main() {
    const user = new User();
    user.setName("Fred");
    const name = user.getName();
    console.log('SRP:', { name });
  }
}