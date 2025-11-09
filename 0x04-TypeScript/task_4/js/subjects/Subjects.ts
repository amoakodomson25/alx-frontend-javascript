namespace Subjects {
    export class Subject {
      protected teacher: Teacher | null = null;
  
      public setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
  
      public getTeacher(): Teacher | null {
        return this.teacher;
      }
    }
  }
  