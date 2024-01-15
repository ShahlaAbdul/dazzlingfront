import React, { useContext, useEffect, useState } from "react";
import "./dazzlingCards.scss";
import { SearchContext } from "../../useContext/SearchContext";
import { WishlistContext } from "../../useContext/WishlistContext";

function DazzlingCards() {
    const [fetchdata, setFetchdata] = useState([]);
    const [sortedProperty, setSortedProperty] = useState(null)
    const { search, handleSearch } = useContext(SearchContext);
    const {  addWishlist } = useContext(WishlistContext);
    
  useEffect(() => {
    fetchAllData();
  }, []);

  function fetchAllData() {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setFetchdata(data));
  }

  return (
    <div>
      <h1>dazzlingcards</h1>

      <div className="dazzling_cards">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => handleSearch(e)}
        />
        <div className="buttons">
          <button
            onClick={() => setSortedProperty({ property: "title", asc: false })}
          >
            Z-A
          </button>
          <button
            onClick={() => setSortedProperty({ property: "title", asc: true })}
          >
            A-Z
          </button>
          <button onClick={() => setSortedProperty(null)}>Deafult</button>
        </div>
        {fetchdata
          .sort((a, b) => {
            if (sortedProperty && sortedProperty.asc) {
              return a[sortedProperty.property] > b[sortedProperty.property]
                ? 1
                : b[sortedProperty.property] > a[sortedProperty.property]
                ? -1
                : 0;
            } else if (sortedProperty && sortedProperty.asc === false) {
              return a[sortedProperty.property] < b[sortedProperty.property]
                ? 1
                : b[sortedProperty.property] < a[sortedProperty.property]
                ? -1
                : 0;
            } else {
              return 0;
            }
          })
          .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <div className="dazzling_card" key={x._id}>
              <h1>{x.title}</h1>
              <div className="card_head">
                <div className="card_head_date">
                  <span>date</span>
                </div>
                <div className="card_head_category">
                  <span className={x.category.categoryIcon}></span>
                  <span> {x.category.categoryName}</span>
                </div>
                <button>add to addPage</button>
              </div>
              <div className="card_content">
                <div className="card_content_image">
                  <img src={x.image} alt="" />
                </div>
                <div className="card_content_desc">
                  <p>{x.description}</p>
                  <i
                    class="fa-regular fa-heart"
                    onClick={() => addWishlist(x)}
                    style={{ fontSize: "22px", cursor: "pointer" }}
                  ></i>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DazzlingCards;
