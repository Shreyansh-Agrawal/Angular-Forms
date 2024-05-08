import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent implements OnInit {
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      empId: new FormControl(null),
      empName: new FormControl(null),
      expenses: new FormArray([
        new FormGroup({
          description: new FormControl(null),
          amount: new FormControl(null),
        }),
      ]),
    });
  }

  addExpense() {
    const formGroup = new FormGroup({
      description: new FormControl(null),
      amount: new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('expenses')).push(formGroup);
  }

  deleteExpense(index: number) {
    const controls = <FormArray>this.reactiveForm.get('expenses');
    console.log(controls);

    controls.removeAt(index);
  }

  submitForm() {
    console.log(this.reactiveForm.value);
  }
}
