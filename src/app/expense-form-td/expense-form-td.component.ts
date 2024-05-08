import { Component } from '@angular/core';
import { Employee, Expenses } from './employe.model';

@Component({
  selector: 'app-expense-form-td',
  templateUrl: './expense-form-td.component.html',
  styleUrl: './expense-form-td.component.css',
})
export class ExpenseFormTdComponent {
  // @ViewChild('form') form: NgForm;

  employeeData: Employee = {empId: '',empName: '', expenses: [{description: '', amount: ''}]}
  // expenseData = { items: [] };

  addExpense() {
    const expenses: Expenses = {amount: '', description: ''}
    this.employeeData.expenses.push(expenses);
  }

  deleteExpense(index: number) {
    this.employeeData.expenses.splice(index, 1);
  }

  submitForm() {
    console.log(this.employeeData);
  }
}
