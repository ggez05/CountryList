import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './filterbar.css'




const FilterBar = () => {

    const COUNTRY_URL = 'https://restcountries.com/v3.1/all';

    const [countryList, setCountry] = useState([]);
    const [searchString, setSearchString] = useState("");

    const filtered = countryList.filter((country) => {
        let name = country.name.common;
        return name.toLocaleLowerCase().includes(searchString);
    });

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(`${COUNTRY_URL}`)
                const Alldata = await response.data
                setCountry(Alldata)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCountries()
    }, [])    

    return (
        <div className='overall'>
            <div className='searchbox-wrapperss'>
            <div className="alert alert-secondary" role="alert">
            <label htmlFor="search-input" className='label-searchbox'>Search Countries</label>
            <input type="search" placeholder='Search Country'
            onChange={(event) => {
                const searchField = event.target.value.toLocaleLowerCase();
                setSearchString(searchField);
    
            }} 
            className='region-search' 
            name='search-input' /> 
            </div>
            </div>
            <div className='country-wrapper'>
            {
                filtered.map((country,i)=> {
                    return(
                        <div className='card' key={i}>
                            <img src={country.flags.png} alt={country.name.common} />
                            <div className="card__content">
                                <h1>{country.name?.common}</h1>
                                <p>
                                    <b>Population: </b> {country.population}
                                </p>
                                <p>
                                    <b>Region: </b>
                                    {country.region}
                                </p>
                                <p>
                                    <b>Capital: </b>
                                    {country.capital}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )

}
export default FilterBar;