import HourCard from './HourCard';
import "../css/HourCards.css"

function HourCards(props) {

    let hours = [];
    for (let i = 0; i < 8; ++i)//we'll use 8 hour points separeted by 3 hours
    {
        // for now temperature is random
        hours.push(<HourCard time={`${i * 3}:00`} temp={Math.floor(Math.random() * 10)} key={i/**indecies is safe to use */}/>)
    }


    return <div className="hour-cards">{hours}</div>;
}

export default HourCards;
