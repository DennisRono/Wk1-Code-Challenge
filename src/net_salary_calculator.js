/**
 * Net Salary Calculator By Kibet :)
 *
 * Challenge 3: Net Salary Calculator (Toy Problem)
 *
 * Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
 * Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.
 *
 * NB: Use KRA, NHIF, and NSSF values provided in the link below.
 *
 * - https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.
 *
 * Links to an external site.-  Links to an external site.Links to an external site.
 *
 * - www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye
 *
 * Deductions - NHIF, NSSF, Housing Levy, PAYE
 *
 */

// Function to calculate NHIF deductions based on taxable income
const nhifDeductions = (taxable_income) => {
  let deduction
  if (taxable_income <= 5999) {
    deduction = 150
  } else if (taxable_income > 5999 && taxable_income <= 7999) {
    deduction = 300
  } else if (taxable_income > 7999 && taxable_income <= 11999) {
    deduction = 400
  } else if (taxable_income > 11999 && taxable_income <= 14999) {
    deduction = 500
  } else if (taxable_income > 14999 && taxable_income <= 19999) {
    deduction = 600
  } else if (taxable_income > 19999 && taxable_income <= 24999) {
    deduction = 750
  } else if (taxable_income > 24999 && taxable_income <= 29999) {
    deduction = 850
  } else if (taxable_income > 29999 && taxable_income <= 34999) {
    deduction = 900
  } else if (taxable_income > 34999 && taxable_income <= 39999) {
    deduction = 950
  } else if (taxable_income > 39999 && taxable_income <= 44999) {
    deduction = 1000
  } else if (taxable_income > 44999 && taxable_income <= 49999) {
    deduction = 1100
  } else if (taxable_income > 49999 && taxable_income <= 59999) {
    deduction = 1200
  } else if (taxable_income > 59999 && taxable_income <= 69999) {
    deduction = 1300
  } else if (taxable_income > 69999 && taxable_income <= 79999) {
    deduction = 1400
  } else if (taxable_income > 79999 && taxable_income <= 89999) {
    deduction = 1500
  } else if (taxable_income > 89999 && taxable_income <= 99999) {
    deduction = 1600
  } else {
    deduction = 1700
  }

  return deduction
}

// Function to calculate NSSF deductions based on taxable income
const nssfDeductions = (taxable_income) => {
  let deduction
  if (taxable_income > 18000) {
    deduction = 2160
  } else {
    deduction = taxable_income * 0.12
  }
  return deduction
}

// Function to calculate PAYE deductions based on taxable income
const payeDeductions = (taxable_income) => {
  let rate_of_deductions
  if (taxable_income <= 24000) {
    rate_of_deductions = 10.0
  } else if (taxable_income > 24000 && taxable_income <= 32333) {
    rate_of_deductions = 25.0
  } else if (taxable_income > 32333 && taxable_income <= 500000) {
    rate_of_deductions = 30.0
  } else if (taxable_income > 500000 && taxable_income <= 800000) {
    rate_of_deductions = 32.5
  } else {
    rate_of_deductions = 35.0
  }
  return (taxable_income * rate_of_deductions) / 100
}

// Function to calculate housing levy based on gross income
const housingDeductions = (gross_income) => {
  let deduction = gross_income * 0.015
  return deduction
}

// Main function to calculate net salary
const salaryCalculator = (gross_income, benefits) => {
  const personal_relief = 2400 // Personal relief
  const taxable_income = gross_income + benefits - personal_relief // Calculate taxable income

  // Calculate NHIF deduction
  const nhifDeduction = nhifDeductions(taxable_income)

  // Calculate NSSF deduction
  const nssfDeduction = nssfDeductions(taxable_income)

  // Calculate PAYE deduction
  const payeDeduction = payeDeductions(taxable_income)

  // Calculate housing levy deduction
  const housingLevyDeduction = housingDeductions(gross_income)

  // Calculate total deductions
  const allDeductions =
    nhifDeduction + nssfDeduction + payeDeduction + housingLevyDeduction

  // Calculate net salary
  const netSalary = gross_income - allDeductions

  // Return the calculated values
  return {
    gross_income,
    personal_relief,
    net_salary: netSalary,
    deductions: {
      nhif_deduction: nhifDeduction,
      nssf_deduction: nssfDeduction,
      paye: payeDeduction,
      housing_levy: housingLevyDeduction,
      total_deductions: allDeductions,
    },
  }
}

// Print the output
console.log(salaryCalculator(200000, 20000))
