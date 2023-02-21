import { Link } from "react-router-dom"
import style from './CountryItem.module.css'

const CountryItem = ({ country }) => {
    return (
        <>
            <Link to={`/${country.id}`} className={style.card}>
                <img src={country.img} />
                <h4>{country.name}</h4>
            </Link>
        </>
    )
}

export default CountryItem