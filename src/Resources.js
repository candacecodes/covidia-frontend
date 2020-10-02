import React, { Component } from "react";

class Resources extends Component {
  render() {
    return (
      <div>
        <h3>
          <br></br>
          ----
          <br></br>
          If you would like to learn more about COVID-19, please check out the
          following resources:
          <br></br>
        </h3>
        <h4>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/communication/print-resources.html?Sort=Date%3A%3Adesc">
            CDC
          </a>{" "}
          //{" "}
          <a href="https://sf.gov/topics/coronavirus-covid-19">
            SF COVID Resources
          </a>{" "}
          //{" "}
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
            WHO COVID Resources
          </a>{" "}
          // <a href="https://www.nih.gov/coronavirus">NIH COVID Resources</a>
        </h4>
      </div>
    );
  }
}

export default Resources;
