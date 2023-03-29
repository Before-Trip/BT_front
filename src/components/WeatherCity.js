import { useState } from "react";
import { useEffect } from "react"

import style from '../pages/Countries/Countries.module.css'

const KEY = process.env.REACT_APP_WEATHER_KEY;

const makeWeatherObj = (cur, arr) => {
    const dailyWeather = []
    arr.forEach(elem => {
        let date = elem.dt_txt.slice(5, 10)
        if (cur !== date) {
            cur = date
            console.log(cur, dailyWeather, "아이템이 바뀌었습니다.")
            dailyWeather.push(
                {
                    date: date,
                    temp: Math.round(elem.main.temp),
                    weather: `https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`
                })
        }
    });

    return dailyWeather;
}

function WeatherCity({ city }) {

    const [cityWeather, setCityWeather] = useState([])

    const fetchWeather = async () => {
        const fetchRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}&units=metric&lang=kr`,
            {
                method: 'GET'
            })

        if (fetchRes.ok) {
            const cityWeather = await fetchRes.json()
            console.log(cityWeather)
            const res = makeWeatherObj(0, cityWeather.list)
            setCityWeather(res)
        }
    }

    useEffect(() => {
        fetchWeather();
    }, [])

    return (
        <div className={style.card}>
            <h5>{city}</h5>
            <ul>
                {cityWeather.map((day, idx) =>
                    <li key={idx} className={style.day}>
                        <p>
                            {day.date}
                        </p>
                        <div className={style.weather}>
                            <img src={day.weather} />
                        </div>
                        <p>
                            {day.temp}&#8451;
                        </p>
                    </li>)}
            </ul>
        </div>
    )
}

export default WeatherCity