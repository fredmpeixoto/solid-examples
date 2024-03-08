type userType = 'master' | 'regular';
//DON'T 
//Avoid to create modifications on class that can share behavior
//On this example we shouldn't if a condition for it
//Imagine that we can have more user types and we will need to modify 
//The class, allow the developer create bugs on the olds types
export class UserPoints {
  setPoint(point: number, userType: userType): number {
    if (userType === 'master') {
      return point * 5;
    }
    if (userType === 'regular') {
      return point * 2;
    }
  }
}
//DO IT
//Create an interface for variable/methods that can share the same behavior
//Implement this interface in a class for each new entity
//Now you can split up responsabilty and if you need to modification
//you will just change the class responsable for it 
//avoiding unnecessary changes
export interface Points {
  setPoint(point: number): number;
}

export class Master implements Points {
  setPoint(point: number): number {
    return point * 5;
  }
}

export class Regular implements Points {
  setPoint(point: number): number {
    return point * 2;
  }
}

export class UserGame {

  main() {
    const userMaster = new Master();
    const userRegular = new Regular();
    const resultMaster = userMaster.setPoint(2);
    const resultRegular = userRegular.setPoint(2);
    console.log('OCP:', { resultMaster, resultRegular })
  }
}