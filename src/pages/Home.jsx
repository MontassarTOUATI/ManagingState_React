import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/countries");
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {data?.map((v) => (
        <div key={v.alpha3Code} className="group relative">
          <Link to={`/singleCountry/${v.alpha3Code}`}>
            <img
              src={v.flags.svg}
              alt={v.name}
              className="aspect-square w-full h-1/2 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto"
            />
          </Link>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">{v.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
                <b>Population :</b> {v.population}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                <b>Region :</b> {v.region}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                <b>Capital :</b> {v.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
