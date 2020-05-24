import React from "react";
import "./styles.css";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  handleCountryChange = async country => {
    const data = await fetchData(country);
    this.setState({ data, country });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {/* <Chart /> */}
      </div>
    );
  }
}

export default App;
