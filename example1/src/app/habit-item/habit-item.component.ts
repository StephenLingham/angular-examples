import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.css']
})
export class HabitItemComponent implements OnInit {
  @Input() 
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
