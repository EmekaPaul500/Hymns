import "./Home.css";
import { useEffect, useState } from "react";
import Hymn from "../Hymn/Hymn";

const Home = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("/hymns_with_authors.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.hymns);
        // console.log(data.hymns);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hymnsJsx =
    data &&
    Object.values(data).filter((values) => {
      return values.title.toLowerCase().includes(value.toLowerCase());
    });

  return (
    <section>
      {/* Home Header */}
      <header className="home-header">
        <figure>
          <img src="./Images/church_logo.png" alt="Church-logo" />
        </figure>
        <h2>Sacred Hymns and songs</h2>

        <div className="home-input-div">
          <img src="./Images/search-01.png" alt="search" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </header>

      <section className="hymn-sec">
        {data &&
          hymnsJsx.map((hymnJsx) => {
            return (
              <Hymn
                key={hymnJsx.number}
                number={hymnJsx.number}
                title={hymnJsx.title}
                verses={hymnJsx.verses}
                chorus={hymnJsx.chorus}
                author={hymnJsx.author}
              />
            );
          })}

        {data && hymnsJsx.length === 0 && <h1>Hymn not Found</h1>}
      </section>
    </section>
  );
};

export default Home;
