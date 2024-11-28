import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleContry = () => {
  const param = useParams();
  const id = param.id;

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:3000/countries?alpha3Code=${id}`
      );
      setData(res.data);
    };
    getData();
  }, []);

  console.log(`http://localhost:3000/countries?alpha3Code=${id}`);
  console.log({ data });

  return (
    <div>
      <img src={data ? data[0].flags.png : null} alt="flag" />
      <h3>{data ? data[0].name : null}</h3>
      <b>Native Name :</b> {data ? data[0].nativeName : null}
      <br />
      <b>Population :</b> {data ? data[0].population : null}
      <br />
      <b>Region :</b> {data ? data[0].region : null}
      <br />
      <b>Sub Region :</b> {data ? data[0].subregion : null}
      <br />
      <b>Capital :</b> {data ? data[0].capital : null}
      <br />
      <b>Top Level Domain :</b> {data ? data[0].topLevelDomain[0] : null}
      <br />
      <b>Currencies :</b>
      {data ? (data[0].currencies ? data[0].currencies[0]?.name : null) : null}
      <br />
      <b>Languages :</b> {data ? data[0].languages.name : null}
    </div>
  );
};

export default SingleContry;
