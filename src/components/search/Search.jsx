import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiUrl, geoApiOptions } from "../../api";

function Search({ onSearchChange }) {
  const [search, setSearch] = React.useState(null);

  function handleChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  function loadOptions(inputValue) {
    return fetch(`${geoApiUrl}/cities?namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.longitude} ${city.latitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  }

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
