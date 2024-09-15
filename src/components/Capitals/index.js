import React, { Component } from 'react';
import './index.css';

// JSON Data
const countryData = [
  {
    country: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    official_language: ["English"],
    currency: "United States Dollar"
  },
  {
    country: "Canada",
    capital: "Ottawa",
    population: 37742154,
    official_language: ["English", "French"],
    currency: "Canadian Dollar"
  },
  {
    country: "Brazil",
    capital: "Brasília",
    population: 212559417,
    official_language: ["Portuguese"],
    currency: "Brazilian Real"
  },
  {
    country: "United Kingdom",
    capital: "London",
    population: 67886011,
    official_language: ["English"],
    currency: "Pound Sterling"
  },
  {
    country: "Australia",
    capital: "Canberra",
    population: 25409800,
    official_language: ["English"],
    currency: "Australian Dollar"
  },
  {
    "country": "Germany",
    "capital": "Berlin",
    "population": 83783942,
    "official_language": ["German"], // Changed to array
    "currency": "Euro"
  },
  {
    "country": "France",
    "capital": "Paris",
    "population": 65273511,
    "official_language": ["French"], // Changed to array
    "currency": "Euro"
  },
  {
    "country": "Italy",
    "capital": "Rome",
    "population": 60244639,
    "official_language": ["Italian"], // Changed to array
    "currency": "Euro"
  },
  {
    "country": "Spain",
    "capital": "Madrid",
    "population": 46754778,
    "official_language": ["Spanish"], // Changed to array
    "currency": "Euro"
  },
  {
    "country": "Japan",
    "capital": "Tokyo",
    "population": 126476461,
    "official_language": ["Japanese"], // Changed to array
    "currency": "Japanese Yen"
  },
  {
    "country": "China",
    "capital": "Beijing",
    "population": 1393409038,
    "official_language": ["Mandarin"], // Changed to array
    "currency": "Renminbi"
  },
  {
    "country": "India",
    "capital": "New Delhi",
    "population": 1380004385,
    "official_language": ["Hindi", "English"],
    "currency": "Indian Rupee"
  },
  {
    "country": "South Africa",
    "capital": "Pretoria",
    "population": 59308690,
    "official_language": ["Zulu", "Xhosa", "Afrikaans", "English"],
    "currency": "South African Rand"
  },
  {
    "country": "Russia",
    "capital": "Moscow",
    "population": 145912025,
    "official_language": ["Russian"], // Changed to array
    "currency": "Russian Ruble"
  },
  {
    "country": "Mexico",
    "capital": "Mexico City",
    "population": 128932753,
    "official_language": ["Spanish"], // Changed to array
    "currency": "Mexican Peso"
  },
  {
    "country": "Poland", // Example you mentioned
    "capital": "Warsaw",
    "population": 38386000,
    "official_language": ["Polish"], // Changed to array
    "currency": "Polish Zloty"
  }
];

class CountryDetails extends Component {
  state = {
    searchTerm: '', 
    filteredCountries: countryData, 
    activeCountry: null,
  };

  onSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filter countries based on the search term
    const filteredCountries = countryData.filter(country =>
      country.country.toLowerCase().includes(searchTerm)
    );
    
    this.setState({ 
      searchTerm, 
      filteredCountries,
      activeCountry: filteredCountries.length > 0 ? filteredCountries[0] : null,
    });
  };

  render() {
    const { searchTerm, activeCountry } = this.state;

    return (
      <div className="app-container">
        <div className="country-details-container">
          <h1 className="heading">Country Information</h1>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={this.onSearchChange}
            />
          </div>

          {searchTerm === '' ? (
            <div className="default-message">
              <p>What country and capital would you like to search?</p>
              <p>Start typing to explore the information!</p>
            </div>
          ) : (
            activeCountry ? (
              <div className="details-container">
                <p className="country-name">{activeCountry.country}</p>
                <p className="detail-item">
                  <strong>Capital:</strong> {activeCountry.capital}
                </p>
                <p className="detail-item">
                  <strong>Population:</strong> {activeCountry.population.toLocaleString()}
                </p>
                <p className="detail-item">
                  <strong>Official Languages:</strong> {activeCountry.official_language.join(', ')}
                </p>
                <p className="detail-item">
                  <strong>Currency:</strong> {activeCountry.currency}
                </p>
              </div>
            ) : (
              <p className="no-results">No countries found</p>
            )
          )}
        </div>
      </div>
    );
  }
}

export default CountryDetails;
