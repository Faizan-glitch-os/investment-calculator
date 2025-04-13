export default function UserInput({ label }) {
  return (
    <div>
      <label htmlFor="userInput">{label}</label>
      <input type="number" step="1" id="userInput" />
    </div>
  );
}
