export const countryList = [
    {
        id: "JP",
        country: "일본",
        name: "Japan",
        img: process.env.PUBLIC_URL + '/assets/japan.jpg',
        visa: "None",
        gover: "None",
        vac: "None",
        hae: "None",
        etc: "None",
    },
    {
        id: "US",
        name: "United States of America",
        country: "미국",
        img: process.env.PUBLIC_URL + '/assets/us.jpg',
        visa: "None",
        gover: "None",
        vac: "None",
        hae: "None",
        etc: "None",
    },
    {
        id: "AU",
        name: "Australia",
        country: "호주",
        img: process.env.PUBLIC_URL + '/assets/as.jpg',
        visa: "None",
        gover: "None",
        vac: "None",
        hae: "None",
        etc: "None",
    },
    {
        id: "GB",
        name: "United Kingdom",
        country: "영국",
        img: process.env.PUBLIC_URL + '/assets/uk.jpg',
        visa: "None",
        gover: "None",
        vac: "None",
        hae: "None",
        etc: "None",
    },
    {
        id: "ES",
        name: "Spain",
        country: "스페인",
        img: process.env.PUBLIC_URL + '/assets/spain.jpg',
        visa: "None",
        gover: "None",
        vac: "None",
        hae: "None",
        etc: "None",
    },
]

export function getCountry(id) {
    const countryName = countryList.find(country => id === country.id)
    return countryName.country
}