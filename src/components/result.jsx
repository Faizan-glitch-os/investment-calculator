import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ result }) {
  let calculatedData = calculateInvestmentResults(result);

  const initialInvestment =
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest -
    calculatedData[0].annual;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.annual * data.year - initialInvestment;

          const investedCapital = data.valueEndOfYear - totalInterest;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
