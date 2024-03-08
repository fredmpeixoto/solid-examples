import { DatabaseRepository } from "./dependency-inversion-principle";
import { BirdsSkills } from "./interface-segregation-principle";
import { SalaryCalculation } from "./liskov-substitution-principle";
import { UserGame } from "./open-closed-principle";
import { UserInfo } from "./single-responsability-principle";

//S - Single Responsability Principle
const user = new UserInfo();
user.main();

//O - Open and Closed Principle
const game = new UserGame()
game.main();

//L - Liskov Substitution Principle
const employeeSalary = new SalaryCalculation();
employeeSalary.main();

//I - Interface Segregation Principle
const birdsSkills = new BirdsSkills();
birdsSkills.main();

//D - Dependency Inversion Principle
const database = new DatabaseRepository();
database.main();
