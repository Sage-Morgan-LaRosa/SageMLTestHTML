// probelm 1
const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    },
    //problem 3
    {
        firstName: "Anna",
        department: "Tech",
        designation: "Executive",
        salary: 25600,
        raiseEligible: false
    }
];

console.log(employees)

//problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log(company)

//problem 4
const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalSalary);

// problem 5
company.employees.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10; // Increase salary by 10%
        employee.raiseEligible = false; // Set raise eligibility to false
    }
});
console.log("Updated Employees:", company.employees);

//problem 6
const workingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
});
console.log("Updated Company JSON:", company);
