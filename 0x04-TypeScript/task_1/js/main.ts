// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher3);
console.log(director1);


// Define the function type interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the function printTeacher using destructuring
function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}


// Example usage
const myFunction: printTeacherFunction = (firstName, lastName) =>
  printTeacher({ firstName, lastName });

console.log(myFunction("John", "Doe"));

/// Interface describing the class constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): {
    workOnHomework(): string;
    displayName(): string;
  };
}

// Implement the class
class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('John', 'Doe');
console.log(student.displayName());      // Output: John
console.log(student.workOnHomework());   // Output: Currently working

