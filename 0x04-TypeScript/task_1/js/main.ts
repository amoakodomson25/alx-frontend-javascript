// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Example usage
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

// Example usage
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

// Interface describing the class structure
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
// Interface describing the class constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Assign the class to a variable using the constructor interface
const StudentClass: StudentConstructor = class {
  constructor(private firstName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};
// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
