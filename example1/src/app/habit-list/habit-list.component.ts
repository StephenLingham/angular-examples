import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  habits = [
    {
      title: "Habit 1"
    },
    {
      title: "Habit 2"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
