import zodiakDeck from "./zodiacDesc";
export default function getZodiak(date) {
  date = new Date(date);
  date.setFullYear("2009");
  zodiakDeck.map((e) => {
    let arr = Array.from(e.date);
    arr[0] = new Date(arr[0]);
    arr[1] = new Date(arr[1]);
    if (date >= arr[0] && date <= arr[1])
      return alert(
        `Ваш знак зодиака - ${e.zodiac}, ваше предсказание - ${e.pred}`
      );
  });
}
