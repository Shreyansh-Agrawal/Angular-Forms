export interface Employee {
    empId: string;
    empName: string;
    expenses: Expenses[]
}

export interface Expenses {
    description: string;
    amount: string;
}