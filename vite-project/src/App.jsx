import "./App.css";
import React from "react";
import zodiacDesc from "./zodiac/zodiacDesc";

class ZodiacForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.button = false;
    this.pred = false;

    this.predText = "";
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    this.button = true;
    this.pred = false;
  }

  handleSubmit(event) {
    this.setState({
      value: event.target.value,
    });
    this.pred = true;
    this.button = true;
    event.preventDefault();
    this.predText = this.state.value;
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

        {this.button && (
          <div>
            <button type="submit">Получить предсказание</button>
            {this.pred && <p>{this.predText}</p>}
          </div>
        )}
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
