import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  habitForm

  habits!: Observable<any>;

  constructor(private formBuilder: FormBuilder, private habitService: HabitService) { 
    this.habitForm = this.formBuilder.group({
      title: ''
    })
  }

  onAddHabit(newHabit: any) {
    this.habitService.addHabit(newHabit);
  }

  ngOnInit(): void {
    this.habits = this.habitService.getHabits();
  }
}
