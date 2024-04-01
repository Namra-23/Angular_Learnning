import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  weeklyHours: number = 0;
  totalSubjects: number = 0;
  professorList: string = '';
  timetableGenerated: boolean = false;
  timetable: any[] = [];

  constructor() {}

  generateTimetable() {
    this.timetable = [];

    const professors = this.professorList.split('\n');

    const hoursPerSubject = Math.floor(this.weeklyHours / this.totalSubjects);

    for (let i = 0; i < this.totalSubjects; i++) {
      const professorIndex = i % professors.length;
      const subject = `Subject ${i + 1}`;
      const professor = professors[professorIndex];
      const hours = hoursPerSubject;
      this.timetable.push({ subject, professor, hours });
    }

    this.timetableGenerated = true;
  }
}
