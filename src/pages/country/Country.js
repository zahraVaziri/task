import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import "./Country.css";
const Country = () => {
  const [country, setCountry] = useState([]);

  const { name } = useParams();
  console.log(country);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/name/${name.trim()}`)
      .then((res) => setCountry(res.data));
  }, []);

  const navigate= useNavigate()
  console.log(navigate,'nnnnn')
  const exitHandler = ()=>{
navigate("/")
  }
  return (
    <div className="detail">
      {/* <button><BsArrowLeft/> Back</button> */}
      {country.map((item) => {
        return (
          <div className="container detail1">
            <div>
              <button
                onClick={() => {
                  exitHandler();
                }}
              >
                <BsArrowLeft /> Back
              </button>
            </div>
            <div className="detail2">
              <section>
                <img src={item.flags.png} />
              </section>
              <section className=" section-desc">
                <h4 className="mb-4">{item.name}</h4>
                <div className="detail-desc">
                  <div style={{ marginRight: "10rem" }}>
                    <p>
                      <strong>Native Name: </strong>
                      {item.nativeName}
                    </p>
                    <p>
                      <strong>Population: </strong>
                      {item.population}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {item.region}
                    </p>
                    <p>
                      <strong>Sub Region: </strong>
                      {item.subregion}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {item.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>top Lavel Domain: </strong>
                      {item.topLevelDomain}
                    </p>
                    <p>
                      <strong>currencies: </strong>
                      {item.currencies[0].name}
                    </p>
                    <p>
                      <strong>language: </strong>
                      {item.languages[0].name}
                    </p>
                  </div>
                </div>
                <div className="detail-border">
                  <h5>Borders: </h5>
                                    
                  <span>{item.borders[0]}</span>
                  <span>{item.borders[1]}</span>
                  <span>{item.borders[3]}</span>
                </div>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
{
  /* <div className="detail-country">
            
             <div>
              
               <img src={item.flags.png} />
             </div>
             <section className="detail-des">
               <div>
                 <aside>
                   <h1>{item.name}</h1>
                   <p>
                     <strong>sdfghjkl</strong>hhh
                   </p>
                   <p>
                     <strong>sdfghjkl</strong>uuuu
                   </p>
                   <p>
                     <strong>sdfghjkl</strong>vcv
                   </p>
                   <p>
                     <strong>sdfghjkl</strong>bfnj
                   </p>
                 </aside>
                 <aside>
                   <p>
                     <strong>sdfghjkl</strong>uuuu
                   </p>
                   <p>
                     <strong>sdfghjkl</strong>vcv
                   </p>
                   <p>
                     <strong>sdfghjkl</strong>bfnj
                   </p>
                 </aside>
               </div>
               <div>
                 <h5>lkhlhi:</h5>
                 <span>vjhyfjy</span>
                 <span>vjhyfjy</span>
                 <span>vjhyfjy</span>
               </div>
             </section>
          </div>*/
}
