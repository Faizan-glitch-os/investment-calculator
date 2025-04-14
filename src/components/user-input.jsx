export default function UserInput({ handleOnChange, value }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            type="number"
            id="initial"
            step="1"
            required
            value={value.initial}
            onChange={(event) => handleOnChange("initial", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annaul">Annual Investment</label>
          <input
            type="number"
            id="annaul"
            step="1"
            required
            value={value.annual}
            onChange={(event) => handleOnChange("annual", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">Expected Returns</label>
          <input
            type="number"
            id="expected"
            step="1"
            required
            value={value.expected}
            onChange={(event) => handleOnChange("expected", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            step="1"
            required
            value={value.duration}
            onChange={(event) => handleOnChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
