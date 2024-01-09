import "./App.css";
import React from "react";
import zodiacDeck from "./zodiac/zodiacDesc";
import getZodiak from "./zodiac/dateZodiacFunction";

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
            {zodiacDeck.map((e) => (
              <option value={e.pred}>{e.zodiac}</option>
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

class DateZodiacForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.button = false;
    this.pred = false;

    this.predText = "2 2 1996";
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.button = true;
    this.pred = false;
  }

  handleSubmit(event) {
    this.pred = true;
    this.button = true;
    let date = this.state.value;
    date = new Date(date);
    date.setFullYear("2009");
    zodiacDeck.map((e) => {
      let arr = Array.from(e.date);
      arr[0] = new Date(arr[0]);
      arr[1] = new Date(arr[1]);
      if (date >= arr[0] && date <= arr[1])
        alert(`Ваш знак зодиака - ${e.zodiac}, ваше предсказание - ${e.pred}`);
    });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Введите дату рождения (число месяца день год рождения, например "2 2
          1996"):
          <input
            placeholder="2 2
            1996"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
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
      <DateZodiacForm />
    </>
  );
}

export default App;
