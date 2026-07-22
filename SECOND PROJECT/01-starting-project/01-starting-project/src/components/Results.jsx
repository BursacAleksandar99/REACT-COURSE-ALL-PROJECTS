import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultdata = calculateInvestmentResults(input);
  console.log(resultdata);

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
        {resultdata.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
