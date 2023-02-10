import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Filter.css";
const Filter = ({
  selectCountry,
  search,
  onSelectCountry,
  onSearch,
  categories,
}) => {
  return (
    <div className="filter container">
      <div className="flex items-center justify-between mb-6">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <BsSearch />
          </span>
          <input
            type="text"
            name="search-input"
            id="search-input"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            value={search}
            placeholder={"Search for a country ..."}
            onChange={onSearch}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <select
          name="sort-products"
          id="sort-products"
          value={selectCountry}
          onChange={onSelectCountry}
          className="bg-transparent text-slate-400 rounded-xl"
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          {categories.map((c) => {
            return (
              <option
                className="bg-slate-500 text-slate-300"
                value={c.population}
              >
                {c.region}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
