import "./Verses.css";
import { useLocation } from "react-router-dom";
import { Form } from "react-router-dom";

const Verses = () => {
  const location = useLocation();
  const hymn = location.state;

  // const h = hymn.verses.join("\n\n");

  // const p = hymn.chorus.join("\n\n");

  // console.log(p);

  console.log(hymn);

  return (
    <section>
      <header className="verses-header">
        <div>
          <Form action="/">
            <button className="verses-back-btn">
              <img src="./Images/arrow.png" alt="Church logo" />
            </button>
          </Form>
          <div className="verses-header-div">
            <figure>
              <img src="./Images/church_logo.png" alt="Church logo" />
            </figure>
            <h1>{hymn.title}</h1>
            <p>{hymn.author}</p>
          </div>
        </div>
      </header>

      <div className="verses-div">
        {hymn.verses.map((verse, index) => {
          let newIdx = index + 1;
          return (
            <>
              <div key={newIdx} className="verse-div">
                <div className="verse-number" key={newIdx}>
                  {newIdx}
                </div>
                <p className="verses-p">{verse}</p>
              </div>
              {newIdx === 1 && <p className="chorus-p">{hymn.chorus}</p>}
            </>
          );
        })}

        {/* {h} */}
      </div>
    </section>
  );
};

export default Verses;
