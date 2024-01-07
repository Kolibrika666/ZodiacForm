import "./App.css";
import React from "react";
import zodiacDesc from "./zodiac/zodiacDesc";

class ZodiacForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите знак зодиака:
          <select value={this.state.value} onChange={this.handleChange}>
            {zodiacDesc.map((e) => (
              <option value={e.pred}>{e.sign}</option>
            ))}
          </select>
        </label>
        <div>
          <input type="submit" value="Получить предсказание" />
          <p>{this.state.value}</p>
        </div>
      </form>
    );
  }
}

function App() {
  return (
    <>
      <ZodiacForm />
    </>
  );
}

export default App;
