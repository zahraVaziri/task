import React, { useEffect, useState } from "react";
import "./HomePage.css";
// import * as data from "../../data";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../../component/Filter";
const HomePage = () => {
  const [categories, setCategories] = useState([]);
  //-----------------------------
  const [filterProducts, setFilterProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [selectCountry, setSelectedCountry] = useState("");
  const [search, setSearch] = useState("");

  const selectedCountryHandler = (e)=>{
    setSelectedCountry(e.target.value)
  }
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <div >
      <Filter
        selectCountry={selectCountry}
        onSelectCountry={selectedCountryHandler}
        categories={categories}
      />
      <div className="product-app">
        {categories.map((item) => {
          return (
            <Link to={`/contry/${item.name}`}>
              <div style={{ margin: "3rem 1.5rem 3rem 1.2rem" }}>
                <img alt={item.name} src={item.flags.png} />
                <div className="product-desc">
                  <h5>{item.name}</h5>
                  <p>
                    <strong>Population:</strong> {item.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {item.region}
                  </p>
                  <p>
                    <strong>Capital:</strong> {item.capital}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
