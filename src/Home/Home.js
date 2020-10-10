import React from "react";
import "./Home.css";
import Product from "../Product/Product.js";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/1500x600_Hero-Tall_np._CB403152874_.jpg"
        alt=""
      />
      {/* product id,title, price, image */}
      <div className="home_row">
        <Product
          id="1234231"
          title="Redmi Earbuds 2C in-Ear Truly Wireless Earphones [Black]"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61k1jK9XwVL._SL1500_.jpg"
        />
        <Product
          id="1234232"
          title="Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free | with 12 Months..."
          price={268}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/815qFLtOfXL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1234235"
          title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
          price={350}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71sZ1HdUJoL._SL1500_.jpg"
        />
        <Product
          id="1234236"
          title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
          price={523}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
        />
        <Product
          id="1234237"
          title="OnePlus Buds (White)"
          price={67}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/61IgqbMF98L._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1234238"
          title="Samsung 138 cm (55 Inches) 4K UHD QLED Smart TV 55Q8C (Metallic Silver)"
          price={2500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-xTVXKXoL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
