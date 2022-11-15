import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  habitForm

  habits = [
    {
      title: "Habit 1"
    },
    {
      title: "Habit 2"
    }
  ]

  constructor(private formBuilder: FormBuilder) { 
    this.habitForm = this.formBuilder.group({
      title: ''
    })
  }

  onSubmit(newHabit: any) {
    this.habits.push(newHabit);
    this.habitForm.reset();
  }

  ngOnInit(): void {
  }

}
