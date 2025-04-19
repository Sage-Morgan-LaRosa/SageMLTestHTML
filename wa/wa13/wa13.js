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
    {
        firstName: "Anna",
        department: "Tech",
        designation: "Executive",
        salary: 25600,
        raiseEligible: false
    }
];

const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

// Problem 1: Calculate total salary for all employees
const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalSalary);

// Problem 2: Update salary for raise-eligible employees
company.employees.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10; // Increase salary by 10%
        employee.raiseEligible = false; // Set raise eligibility to false
    }
});
console.log("Updated Employees:", company.employees);

// Problem 3: Update employees with working from home status
const workingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
});
console.log("Updated Company JSON:", company);
