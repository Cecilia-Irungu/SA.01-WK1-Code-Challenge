function calculateNetSalary() {
  const basic = parseInt(prompt("Enter your basic salary (KSh):"));
  if (isNaN(basic) || basic <= 0) {
    alert("Please enter a valid basic salary!");
    return;
  }
  const benefits = parseInt(prompt("Enter your benefits (KSh, optional):")) || 0;
  const gross = basic + benefits;

  const shif = gross * 0.0275;

  const tier1 = Math.min(gross, 8000);
  const tier2 = Math.min(Math.max(gross - 8000, 0), 72000 - 8000);
  const nssf = (tier1 + tier2) * 0.06;

  const housing = gross * 0.015;

  const taxable = gross - (shif + nssf + housing);

  const bands = [
    { limit: 24000, rate: 0.10 },
    { limit: 32333 - 24000, rate: 0.25 },
    { limit: 500000 - 32333, rate: 0.30 },
    { limit: 800000 - 500000, rate: 0.325 },
    { limit: Infinity, rate: 0.35 }
  ];

  let remaining = taxable;
  let paye = 0;
  for (const { limit, rate } of bands) {
    if (remaining <= 0) break;
    const amount = Math.min(remaining, limit);
    paye += amount * rate;
    remaining -= amount;
  }

  paye = Math.max(paye - 2400, 0);

  const totalDeductions = shif + nssf + housing + paye;
  const net = gross - totalDeductions;

  alert(
    "=== Net Salary Calculator ===\n\n" +
    `Gross Salary: KSh ${gross.toFixed(2)}\n` +
    `SHIF (2.75%): KSh ${shif.toFixed(2)}\n` +
    `NSSF (Employee): KSh ${nssf.toFixed(2)}\n` +
    `Housing Levy (1.5%): KSh ${housing.toFixed(2)}\n` +
    `Taxable Income: KSh ${taxable.toFixed(2)}\n` +
    `PAYE (after relief): KSh ${paye.toFixed(2)}\n` +
    `Total Deductions: KSh ${totalDeductions.toFixed(2)}\n\n` +
    `Net Salary: KSh ${net.toFixed(2)}`
  );
}

calculateNetSalary();