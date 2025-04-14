import { calculateInvestmentResults } from "../util/investment";

let calculatedData;

export function result(fullData) {
  calculatedData = calculateInvestmentResults(fullData);
  console.log(calculatedData);
}

export default function Result() {
  console.log(calculatedData);

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
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
