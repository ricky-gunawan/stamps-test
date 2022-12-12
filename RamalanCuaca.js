const { default: axios } = require("axios");
require("dotenv/config");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getRamalanCuaca = async () => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=jakarta&appid=${process.env.OPEN_WEATHER_API}&units=metric`);
  const dataCuaca = {};
  resp.data.list.forEach((data) => {
    const d = new Date(Number(`${data.dt}000`));
    const dayName = days[d.getDay()];
    const date = d.getDate();
    const monthName = months[d.getMonth()];
    const year = d.getFullYear();
    const temp = data.main.temp;

    const cuacaString = dayName + ", " + date + " " + monthName + " " + year + ": " + temp + " Celcius";
    dataCuaca[dayName] = cuacaString;
  });
  console.log("Weather Forecast: ");
  Object.values(dataCuaca).forEach((data) => console.log(data));
};

getRamalanCuaca();
