import "../css/HourCard.css";

/**
 * 
 * @param {Object} props 
 * {
 *      time,
 *      temp, -- temperature
 * }
 */
function HourCard(props)
{
    return (
      <div className="hour-card">
        <span className="hour-card__time">{props.time}</span>
        <span className="hour-card__temp temp">{props.temp}</span>
      </div>
    );
}

export default HourCard;