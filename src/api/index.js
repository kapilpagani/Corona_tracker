// export const fetchData = () => {
//   return fetch("https://covid19.mathdro.id/api")
//     .then(res => res.json())
//     .then(data => console.log(data));
// };
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async country => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get("https://covid19.mathdro.id/api/countries");

    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};
