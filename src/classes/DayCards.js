import DayCard from "./DayCard.js";
import "./../css/DayCards.css"

//days of the week
const dow = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * 
 * @param {Object} props 
 * {
 *      daily, -- daily weather for 8 days 
 *      onDayClick,
 * }
 */
function DayCards(props) {
  if (!props.daily) return <div>Loading...</div>
  

  //getting day of the week
  var d = new Date();
  var n = d.getDay();
  
  var Days = [];
  for (let i = 0; i < 8; ++i)//we'll display 8 days from now on
  {       
      //for now we assume that the information is static, later we'll keep that infomation up-to-date
      Days.push(
        <DayCard
          //+7 is just to be safe cuz if n is 0 hence sunday then the expression will be -1 and that is 0 in js but it should be 6
          dow={dow[(n - 1 + i + 7) % 7]}
          max={props.daily[i].temp.max}
          min={props.daily[i].temp.min} 
          key={i /**I think it's save to use indecies*/}
          id={i}
          weather={props.daily[i].weather[0].main}
          onClick={props.onDayClick}
        />
      );
    }



    return <div className="day-cards">{Days}</div>;
}

export default DayCards;
