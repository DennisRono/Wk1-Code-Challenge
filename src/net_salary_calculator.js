/**
 * Net Salary Calculator By Kibet :)
 *
 * Deduction - NHIF, NSSF, Housing Levy, PAYE
 *
 */

const nhifDeductions = (taxable_income) => {
  let deduction
  if (taxable_income <= 5999) {
    deduction = 150
  } else if (taxable_income <= 7999) {
    deduction = 300
  } else if (taxable_income <= 11999) {
    deduction = 400
  } else if (taxable_income <= 14999) {
    deduction = 500
  } else if (taxable_income <= 19999) {
    deduction = 600
  } else if (taxable_income <= 24999) {
    deduction = 750
  } else if (taxable_income <= 29999) {
    deduction = 850
  } else if (taxable_income <= 34999) {
    deduction = 900
  } else if (taxable_income <= 39999) {
    deduction = 950
  } else if (taxable_income <= 44999) {
    deduction = 1000
  } else if (taxable_income <= 49999) {
    deduction = 1100
  } else if (taxable_income <= 59999) {
    deduction = 1200
  } else if (taxable_income <= 69999) {
    deduction = 1300
  } else if (taxable_income <= 79999) {
    deduction = 1400
  } else if (taxable_income <= 89999) {
    deduction = 1500
  } else if (taxable_income <= 99999) {
    deduction = 1600
  } else {
    deduction = 1700
  }

  return deduction
}

const nssfDeductions = (taxable_income) => {
  let deduction
  if (taxable_income > 18000) {
    deduction = 2160
  } else {
    deduction = taxable_income * 0.12
  }
  return deduction
}

const payeDeductions = (taxable_income) => {
  let rate_of_deductions
  if (taxable_income <= 24000) {
    rate_of_deductions = 10.0
  } else if (taxable_income <= 32333) {
    rate_of_deductions = 25.0
  } else if (taxable_income <= 500000) {
    rate_of_deductions = 30.0
  } else if (taxable_income <= 800000) {
    rate_of_deductions = 32.5
  } else {
    rate_of_deductions = 35.0
  }
  return (taxable_income * rate_of_deductions) / 100
}

const salaryCalculator = (gross_icome) => {
  const personal_relief = 2400
  const taxable_income = gross_icome - personal_relief

  /* NHIF TAX */
  const nhifDeduction = nhifDeductions(taxable_income)

  /* NSSF TAX */
  const nssfDeduction = nssfDeductions(taxable_income)

  /* PAYE TAX */
  const payeDeduction = payeDeductions(taxable_income)

  return (
    'Your net Salary is Ksh' +
    (gross_icome - nhifDeduction - nssfDeduction - payeDeduction)
  )
}

console.log(salaryCalculator(200000))
