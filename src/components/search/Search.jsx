import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiUrl, geoApiOptions } from "../../api";

function Search({ onSearchChange }) {
  // passed in the onSearchChange from App.js
  const [search, setSearch] = React.useState(null);

  function handleChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  function loadOptions(inputValue) {
    return fetch(`${geoApiUrl}/cities?namePrefix=${inputValue}`, geoApiOptions) // pass in the api link from api.js
      .then((response) => response.json())
      .then((response) => {
        const data = response.data || [];
        return {
          options: data.map((city) => {
            return {
              value: `${city.longitude} ${city.latitude}`, // returned the lat and long axis from the api
              label: `${city.name} ${city.countryCode}`, // returned the city name and code as "label" for the
              // for the client using the website to see
            };
          }),
        };
      })
      .catch((err) => console.error(err)); // catch any errors and console it out
  }

  return (
    <AsyncPaginate // is for the search bae
      placeholder="Search for city"
      debounceTimeout={600} //
      value={search}
      onChange={handleChange} // brings in onThisChange as props from App.js
      loadOptions={loadOptions}
    />
  );
}

export default Search;
