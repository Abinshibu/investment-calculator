export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', +event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', +event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return Rate</label>
          <input
            type="number"
            required
            value={userInput.expectedReturnRate}
            onChange={(event) =>
              onChange('expectedReturnRate', +event.target.value)
            }
          />
        </p>

        <p>
          <label>Investment Period (years)</label>
          <input
            type="number"
            required
            value={userInput.investmentPeriod}
            onChange={(event) =>
              onChange('investmentPeriod', +event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}