import "./Hymn.css";
import { Link } from "react-router-dom";

const Hymn = ({ number, title, verses, chorus }) => {
  const hymn = {
    title: title,
    chorus: chorus,
    verses: verses,
  };

  const c = verses.map((verse) => {
    const lines = verse.split("\n");

    return [...lines];
  });

  console.log(c);
  return (
    <div className="hymn-div">
      <figure>
        <img src="./Images/music-note.png" alt="Music-note" />
      </figure>

      <Link to="/verses" state={hymn}>
        <div>
          <h4>
            {number} {title}
          </h4>
          {/* <p>{verses.map(verse => {
          let line = verse.split('\n')
          
          return line

         })}</p> */}
          <p>{verses}</p>
        </div>
      </Link>
    </div>
  );
};

export default Hymn;
