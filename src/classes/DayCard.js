
import "./../css/DayCard.css"


//Object that map weather(ex. cloudy)and link to an img
const map = {
  "cloudy": "https://duckduckgo.com/assets/weather/svg/new/cloudy.svg",
};



/**
 * 
 * @param {Object} props 
 * {
 *      onClick,
 *      dow, - day of the week
 *      weather,
 *      max, 
 *      min, --max and min temperature    
 * }
 */
function DayCard(props)
{
    return (
      <div className="day-card" onClick={props.onClick}>
        <div>{props.dow}</div>
        <img alt={props.weather} src={map[props.weather]} />
        <span className="temp day-card__max">{props.max}</span>
        <span className="temp day-card__min">{props.min}</span>
      </div>
    );
}

export default DayCard;