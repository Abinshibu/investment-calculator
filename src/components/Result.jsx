import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ input }) {

  const resultData = calculateInvestmentResults({
    initialInvestment: input.initialInvestment,
    annualInvestment: input.annualInvestment,
    expectedReturn: input.expectedReturnRate,
    duration: input.investmentPeriod,
  });

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultData.map((yearData) => {

          const totalAmountInvested =
            initialInvestment +
            yearData.annualInvestment * yearData.year;

          const totalInterestEarned =
            yearData.valueEndOfYear - totalAmountInvested;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>

              <td>
                {formatter.format(yearData.valueEndOfYear)}
              </td>

              <td>
                {formatter.format(yearData.interest)}
              </td>

              <td>
                {formatter.format(totalInterestEarned)}
              </td>

              <td>
                {formatter.format(totalAmountInvested)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}