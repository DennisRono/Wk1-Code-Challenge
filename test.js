function payeDeductions(taxablePay, relief) {
  const taxBands = [
    { from: 1, to: 24000, rate: 0.1 },
    { from: 24001, to: 32333, rate: 0.25 },
    { from: 32334, to: 500000, rate: 0.3 },
    { from: 500001, to: 800000, rate: 0.325 },
    { from: 800001, to: Infinity, rate: 0.35 },
  ]

  let payeBeforeRelief = 0

  for (let band of taxBands) {
    if (taxablePay > band.from) {
      let taxableAmountInBand = Math.min(taxablePay, band.to) - band.from + 1
      payeBeforeRelief += taxableAmountInBand * band.rate
    }
  }
  let payeDue = payeBeforeRelief - relief

  return payeDue.toFixed(2)
}

console.log(payeDeductions(100000, 2400))
