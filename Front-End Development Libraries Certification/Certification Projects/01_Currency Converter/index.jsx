const { useState, useMemo } = React;

const conversionRates = {
  USD: 1,
  EUR: 0.85323,
  GBP: 0.73872,
  JPY: 159.308,
  INR: 93.8802
};

export function CurrencyConverter() {
  const [inputs, setInputs] = useState({
    amount: 1,
    from: "USD",
    to: "EUR",
  });

  const memoizedConvertedAmounts = useMemo(() => {
    const convertedAmounts = {};

    for (const curr in conversionRates) {
      //start-curr --> base-curr (USD here) --> target-curr
      //(amount / conversionRate[from]) converts from start-curr to base-curr
      // (... * conversionRate[curr]) converts from base-curr to target-curr
      convertedAmounts[curr] =
        (inputs.amount / conversionRates[inputs.from]) * conversionRates[curr];
    }

    return convertedAmounts;
  }, [inputs.amount, inputs.from]);

  const selectOptions = Object.keys(conversionRates).map((curr) => (
    <option key={curr}>{curr}</option>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h1 className="heading">Currency Converter</h1>
      <h2 className="conversion-type">
        {inputs.from} to {inputs.to} Conversion
      </h2>
      <form action="#">
        <input
          type="number"
          name="amount"
          id="amount"
          value={inputs.amount}
          onChange={handleChange}
        />
        <label htmlFor="start-curr" className="label">
          Start Currency:
          <select
            name="from"
            id="start-curr"
            className="select"
            value={inputs.from}
            onChange={handleChange}
          >
            {selectOptions}
          </select>
        </label>
        <label htmlFor="target-curr" className="label">
          Target Currency:
          <select
            name="to"
            id="target-curr"
            className="select"
            value={inputs.to}
            onChange={handleChange}
          >
            {selectOptions}
          </select>
        </label>
        <p className="result">
          Converted Amount: {memoizedConvertedAmounts[inputs.to].toFixed(2)}{" "}
          {inputs.to}
        </p>
      </form>
    </div>
  );
}
