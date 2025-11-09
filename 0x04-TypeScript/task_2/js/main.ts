// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Teacher | Director {
  // Convert string salary to number if needed
  if (typeof salary === 'string') {
    salary = parseInt(salary.replace(/\D/g, ''), 10); // remove non-numeric characters
  }

  if (salary < 500) return new Teacher();
  return new Director();
}

// Example usage
console.log(createEmployee(200));     // Teacher instance
console.log(createEmployee(1000));    // Director instance
console.log(createEmployee('$500'));  // Director instance


// Type guard: checks if employee is Director
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

// executeWork function
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks F