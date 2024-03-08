// //DON'T 
// //In the example below, we are sharing the same interface
// //For both cases, it is a problem, because although it is 
// //The same type of birds, they has different of skills
// //It will throw an error on application
// interface Bird {
//   fly(): void;
//   swim(): void;
// }

// class Penguins implements Bird {
//   fly(): void {
//     throw new Error("Penguins can't fly");
//   }
//   swim(): void {
//     console.log("swiming");
//   }
// }

// class Eagle implements Bird {
//   fly(): void {
//     console.log("flying");
//   }
//   swim(): void {
//     throw new Error("Eagles can't swim");
//   }
// }

// export class BirdsSkills {

//   main() {
//     const penguins = new Penguins();
//     const eagle = new Eagle();
//     this.goFly(penguins);
//     //throw new Error("Penguins can't fly");
//     this.goSwim(eagle);
//     //throw new Error("eagle can't swim");
//   }

//   private goFly(bird: Bird) {
//     bird.fly();
//   }

//   private goSwim(bird: Bird) {
//     bird.swim();
//   }
// }
//DO IT.
//Create an interface for each type of bird
//and implement accorging to definition.
interface BirdFlyer {
  fly(): string;
}
interface BirdSwimmer {
  swim(): string;
}

class Penguins implements BirdSwimmer {
  swim(): string {
    return "swiming";
  }
}

class Eagle implements BirdFlyer {
  fly(): string {
    return "flying";
  }
}

export class BirdsSkills {

  main() {
    const eagle = new Eagle();
    const penguins = new Penguins();
    const flying = this.goFly(eagle);
    const swiming = this.goSwim(penguins);
    console.log('ISP', { flying, swiming });
  }

  private goFly(bird: BirdFlyer): string {
    return bird.fly();
  }

  private goSwim(bird: BirdSwimmer): string {
    return bird.swim();
  }
}
