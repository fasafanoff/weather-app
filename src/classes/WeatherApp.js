import './../css/WeatherApp.css';
import HourCards from "./HourCards";
import DayCards from "./DayCards";
import React from "react";







class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched:false,//wheather the data was fatched 
      daily: null,//array of daily weather 
      hourly:null, // hourly weather 
      day:0,//day that is currently chosen
      geolocation: false,//wheather user allowed geolocation
      user: {//user's longitude and latitude
        log: null,
        lat: null
      },
    };
  }

  componentWillMount()
  {
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(
          (Pos) => {
            //success;
            this.setState({
              user: { log: Pos.coords.longitude, lat: Pos.coords.latitude, },
              geolocation:true,
            });
             fetch(
               `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.user.lat}&lon=${this.state.user.log}&exclude=minutely&appid=4616b1e1699fbe374cabeff8b99b471a&units=metric`
             )
               .then((r) => r.json())
               .then((d) => this.setState({ daily: d.daily,hourly:d.hourly ,fetched:true}));
          }, //failure
          (e) => {
            this.setState({ geolocation: false });
          }
        );
      }
  }

  render() {
    if (!this.state.geolocation) {
      return (
        <div>You have to turn your geolocation on in order to proceed!</div>
      );
    }
    if (!this.state.fetched) return <div>Loading...</div>

   

    
    for (let i = 0; i < 48; ++i)
    {
        let hour = this.state.hourly[i];
      let date = new Date(hour.dt * 1000);
      //-2 coz of the way getDay() works and the way I chose this.state.day
        if ((date.getDay() - 2) === this.state.day) {
          var hourly = this.state.hourly.slice(i, i + 24);
          break;
        }
    }

    return (
      <div className="App">
        <HourCards hourly={hourly} />
        <DayCards daily={this.state.daily} onDayClick={this.onDayClick} />
      </div>
    );
  }
  onDayClick = (id) =>
  {
    this.setState({ day: id });
  }
}

export default App;
