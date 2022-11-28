import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits = [
    {
      title: "Habit 1"
    },
    {
      title: "Habit 2"
    }
  ]

  constructor() { }

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit(newHabit: any) {
    this.habits.push(newHabit);
  }
}
