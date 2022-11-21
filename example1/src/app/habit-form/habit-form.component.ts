import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.css']
})
export class HabitFormComponent implements OnInit {
  habitForm
  @Output() addHabit = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { 
    this.habitForm = this.formBuilder.group({
      title: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(newHabit: any) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }

}
