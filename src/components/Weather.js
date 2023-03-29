import { useParams } from "react-router-dom"
import { Cities } from "../utils/Cities"
import style from '../pages/Countries/Countries.module.css'

// components
import WeatherCity from "./WeatherCity"

function Weather() {

    const { id } = useParams();

    const cityList = Cities.find(city => id === city.name).cities
    // console.log(cityList)

    return (
        <>
            {cityList.map((city, idx) => <WeatherCity key={idx} city={city} />)}
        </>
    )
}

export default Weather
