// number 15
let basicSalary = Number(prompt("Enter basic salary:"));
let benefits = Number(prompt("Enter benefits:"));

let grossSalary = basicSalary + benefits;

let nhif;

if (grossSalary < 6000) {
    nhif = 150;
} else if (grossSalary < 8000) {
    nhif = 300;
} else if (grossSalary < 12000) {
    nhif = 400;
} else if (grossSalary < 15000) {
    nhif = 500;
} else if (grossSalary < 20000) {
    nhif = 600;
} else if (grossSalary < 25000) {
    nhif = 750;
} else if (grossSalary < 30000) {
    nhif = 850;
} else if (grossSalary < 35000) {
    nhif = 900;
} else if (grossSalary < 40000) {
    nhif = 950;
} else if (grossSalary < 45000) {
    nhif = 1000;
} else if (grossSalary < 50000) {
    nhif = 1100;
} else if (grossSalary < 60000) {
    nhif = 1200;
} else if (grossSalary < 70000) {
    nhif = 1300;
} else if (grossSalary < 80000) {
    nhif = 1400;
} else if (grossSalary < 90000) {
    nhif = 1500;
} else if (grossSalary < 100000) {
    nhif = 1600;
} else {
    nhif = 1700;
}

console.log("Gross Salary: KSh " + grossSalary);
console.log("NHIF Deduction: KSh " + nhif);

// number 16
let nssf = Math.min(grossSalary, 18000) * 0.06;

console.log("NSSF Deduction: KSh" + nssf);

// number 17
let nhdf = grossSalary * 0.015;

console.log("NHDF Deduction: KSh" + nhdf);

// number 18
let taxableIncome = grossSalary - (nssf+nhdf+nhif);

console.log("Taxable Income: KSh" + taxableIncome);

// number 19
let payee = 0;

if (taxableIncome > 0) {
    payee += Math.min(taxableIncome, 24000) * 0.10;
}

if (taxableIncome > 24000) {
    payee += Math.min(taxableIncome - 24000, 8333) * 0.25;
}

if (taxableIncome > 32333) {
    payee += Math.min(taxableIncome - 32333, 467667) * 0.30;
}

if (taxableIncome > 500000) {
    payee += Math.min(taxableIncome - 500000, 300000) * 0.325;
}

if (taxableIncome > 800000) {
    payee += (taxableIncome - 800000) * 0.35;
}

// remove personal relief
payee = Math.max(0, payee - 2400);

console.log("PAYEE: KSh"+ payee);

// number 20
let netSalary = grossSalary - (nhdf+nhif+nssf+payee);

console.log("Net Salary: KSh" + netSalary);
