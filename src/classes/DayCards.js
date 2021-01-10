import DayCard from "./DayCard.js";
import "./../css/DayCards.css"

//days of the week
const dow = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


function DayCards(props) {

    var Days = [];
    for (let i = 0; i < 8; ++i)//we'll display 8 days from now on
    {
        //for now we assume that the information is static, later we'll keep that infomation up-to-date
        Days.push(<DayCard dow={dow[i % 7]} max={"10"} min={"-10"} key={i /**I think it's save to use indecies*/} weather={"cloudy" }/>);
    }



    return <div className="day-cards">{Days}</div>;
}

export default DayCards;
