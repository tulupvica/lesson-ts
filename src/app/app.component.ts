import { Component } from '@angular/core';
import { School } from '../model/school';
import { ISchool } from '../model/ISchool';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    const courseIdMin: object = this.getCourse(this.school);
    const factorial: number | string = this.factorial('5');

    console.log(courseIdMin);
    console.log(factorial);
  }

  school: School = {
    name: 'Hillel',
    executive: 'Misha',
    courses: [
      {
        id: 10,
        courseName: 'Javascript basic',
        price: 5400,
      },
      {
        id: 12,
        courseName: 'Javascript Pro',
        price: 6400,
      },
      {
        id: 2,
        courseName: 'Python',
        price: 6400,
      },
      {
        id: 54,
        courseName: 'Php',
        price: 5400,
      },
    ],
  };

  getCourse(obj: object): object {
    const idList: number[] = [];
    obj.courses.map((course) => {
      idList.push(course.id);
    });

    const minId: number = Math.min(...idList);
    return obj.courses.filter((course) => {
      if (course.id === minId) {
        return course;
      }
    })[0];
  }

  factorial(num: number | string): number {
    if (typeof num === 'string') {
      return Number(num) != 1 ? Number(num) * this.factorial(Number(num) - 1) : 1;
    }
    return num != 1 ? num * this.factorial(num - 1) : 1;
  }
}


class NewSchool implements ISchool {
  constructor(schoolName, executive) {
    this.schoolName = schoolName;
    this.executive = executive;
  }

  getSchoolName() {
    return this.schoolName;
  }

  getExecutive() {
    return this.executive;
  }
}

const school = new NewSchool('Hillel', 'Misha');
 
console.log(school);
console.log(school.getSchoolName());
console.log(school.getExecutive());


