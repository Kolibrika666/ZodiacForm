import "./App.css";
import React from "react";
import zodiacDeck from "./components/zodiacDeck";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", text: "", button: false, p: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
      button: true,
    });
  }
}

class ZodiacForm extends Form {
  handleSubmit(event) {
    this.setState({
      value: event.target.value,
      p: true,
      text: this.state.value,
    });
    event.preventDefault();
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

        {this.state.button && (
          <div>
            <button type="submit">Получить предсказание</button>
            {this.state.p && <p>{this.state.text}</p>}
          </div>
        )}
      </form>
    );
  }
}

class DateZodiacForm extends Form {
  handleSubmit(event) {
    const date = new Date(this.state.value);
    date.setFullYear("2009");
    zodiacDeck.forEach((item) => {
      const [start, end] = item.date;
      const isCorrect = date >= new Date(start) && new Date(end);
      if (isCorrect) {
        this.setState({ text: item.pred, p: true });
      }
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
        {this.state.button && (
          <div>
            <button type="submit">Получить предсказание</button>
            {this.state.p && <p>{this.state.text}</p>}
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
