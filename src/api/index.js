// export const fetchData = () => {
//   return fetch("https://covid19.mathdro.id/api")
//     .then(res => res.json())
//     .then(data => console.log(data));
// };
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};
