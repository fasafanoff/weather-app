import HourCard from './HourCard';
import "../css/HourCards.css"


/**
 * 
 * @param {Object} props 
 * {
 *  hourly, -- array of temperatures
 * }
 */
function HourCards(props) {

    if (!props.hourly||!props.hourly.length) return <div>Loading...</div>
    let hours = [];
    
    for (
      var i = 0;
      i < Math.floor(props.hourly.length / 3);
      ++i //we'll use 8 hour points separeted by 3 hours
    ) {
      let hour = props.hourly[i * 3];
      let date = new Date(hour.dt * 1000);

      hours.push(
        <HourCard
          time={`${date.getHours()}:00`}
          temp={hour.temp}
          key={i /**indecies is safe to use */}
        />
      );
    }
    return <div className="hour-cards">{hours}</div>;
}

export default HourCards;
