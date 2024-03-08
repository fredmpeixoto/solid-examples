//DON'T
//On this example we are extends a Payroll class
//To both employee types, it goes throw an error on execution.
//The Freelancer class cannot receive monthly.
// export class Payroll {
//   valueHour: number;
//   constructor(value: number) {
//     this.valueHour = value;
//   }
//   getSalaryMontly() {
//     return this.valueHour * 168;
//   }
// }

// export class RegularEmployee extends Payroll {
// }

// export class FreelancerEmployee extends Payroll {
//   getSalaryMontly(): number {
//     throw Error("I can receive monthly");
//   }
// }

// export class Calculation {
//   main() {
//     const regularEmployee = new RegularEmployee(35);
//     const regularSalary = this.showMySalary(regularEmployee);
//     console.log('LSP', { regularSalary })
//     //result: LSP { regularSalary: 5880 }
//     const freelancerEmployee = new FreelancerEmployee(35);
//     const salaryFreelancer = this.showMySalary(freelancerEmployee);
//     console.log('LSP', { salaryFreelancer })
//     //result: throw Error("I can receive monthly");
//   }

//   private showMySalary(employee: Payroll): number {
//     return employee.getSalaryMontly();
//   }
// }
//DO IT
//Split up the payrolls types on different classes
//Extend properly the classes
//Create new functions to show the monthly Salary
//Now you are able to run the code and replace the entities using the proper functions
export class PayrollMontly {
  valueHour: number;
  constructor(value: number) {
    this.valueHour = value;
  }
  getSalaryMontly() {
    return this.valueHour * 168;
  }
}

export class PayrollFreelancer {
  valueHour: number;
  constructor(value: number) {
    this.valueHour = value;
  }

  getSalaryMonthly(workedHours: number) {
    return this.valueHour * workedHours;
  }
}

export class RegularEmployee extends PayrollMontly {
}

export class FreelancerEmployee extends PayrollFreelancer {
}

export class SalaryCalculation {
  main() {
    const regularEmployee = new RegularEmployee(35);
    const regularSalary = this.showMySalaryMontly(regularEmployee);
    const freelancerEmployee = new FreelancerEmployee(35);
    const salaryFreelancer = this.showMyFreelanceSalaryMonthly(freelancerEmployee, 100);
    console.log('LSP', { regularSalary, salaryFreelancer })
    //result: LSP { regularSalary: 5880, salaryFreelancer: 3500 }
  }

  private showMySalaryMontly(employee: PayrollMontly): number {
    return employee.getSalaryMontly();
  }

  private showMyFreelanceSalaryMonthly(employee: PayrollFreelancer, workedHours: number) {
    return employee.getSalaryMonthly(workedHours);
  }
}