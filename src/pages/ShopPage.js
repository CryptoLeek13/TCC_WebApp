import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Buttons/FilterButton/Button";
import Navbar from "../components/Navbar/Navbar";
import ShopCard from "../components/ShopCard/ShopCard";

function ShopPage() {
  // const { state } = useLocation();
  // const idOfShop = state;
  // console.log(idOfShop);
  // const navigate = useNavigate();
  // const navigateToDetails = (details) => {
  //   navigate(`/shop${idOfShop}/${details.id}`, { state: details });
  // };
  //here I will send query to api with the ID of clicked shop (ID received through useParams) to get all data
  const { shoppage } = useParams();
  // console.log(shoppage);
  const carousel = React.useRef(null);

  const handleScrollLeft = () => {
    carousel.current.scrollLeft -= 170;
    carousel.current.style.transitionDuration = "0.3s";
  };
  const handleScrollRight = () => {
    carousel.current.scrollLeft += 170;
    carousel.current.style.transitionDuration = "0.3s";
  };
  const [isProductListOn, setIsProductListOn] = React.useState(false);
  const [isSortByOn, setIsSortByOn] = React.useState(false);

  const [filtersList, setFiltersList] = React.useState([]);

  const flowers = React.useRef(null);
  const productsList = React.useRef(null);
  const sortByList = React.useRef(null);

  const toggleProductList = () => {
    if (isProductListOn) {
      productsList.current.style.display = "none";
    } else {
      productsList.current.style.display = "flex";
    }
    setIsProductListOn((prev) => !prev);
  };
  const toggleSortByList = () => {
    if (isSortByOn) {
      sortByList.current.style.display = "none";
    } else {
      sortByList.current.style.display = "flex";
    }
    setIsSortByOn((prev) => !prev);
  };
  const addFilterToList = (e) => {
    let currentTarget = e.target;
    currentTarget.classList.toggle("toggle-style");
    let temp = filtersList.filter((item) => item === e.target.dataset.filter);
    if (temp < 1) {
      return setFiltersList([...filtersList, e.target.dataset.filter]);
    }
    if (filtersList.filter((item) => item === e.target.dataset.filter)) {
      setFiltersList((item) =>
        item.filter((element) => element !== e.target.dataset.filter)
      );
    }
  };

  return (
    <div>
      <Navbar backBtn={true} />
      <div className="section-wrapper">
        <section className="selected-shop">
          <div className="selected-shop-card">
            <img
              src={require("../tempIMG/shopImgBlackBorder.png")}
              alt="shop"
            ></img>
            <div className="card-shop_details">
              <h3 className="shop-name">Planet 13</h3>
              <p className="shop-location">
                Woodland Hills, CA, 1.2 Miles Away
              </p>
              <div className="shop-in-pill">
                <h4>
                  Open 24/7 <br /> Delivery and Pickup Available
                </h4>
              </div>
              <div className="contact">
                <a href="tel:999999999" className="call-btn">
                  <img src={require("../tempIMG/call.png")} alt="call"></img>
                </a>
                <a href="" className="dir-btn">
                  <img
                    src={require("../tempIMG/navi.png")}
                    alt="direction"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="hours-of-operation">
            <h3>Hours of Operation</h3>
            <div className="hours-grid">
              <div className="days">
                <p>Moday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className="hours">
                <p>12:00am - 12:00am</p>
                <p>12:00am - 12:00am</p>
                <p>12:00am - 12:00am</p>
                <p>12:00am - 12:00am</p>
                <p>12:00am - 12:00am</p>
                <p>12:00am - 12:00am</p>
                <p>12:00am - 12:00am</p>
              </div>
            </div>
          </div>
          {/* For now I will use hard coded example later the data will be received from api */}
        </section>
        <section className="products-section">
          <div className="shop-filters">
            {/* here I will be filtering all products received from api and if filter is not set then default set will be passed down to display */}
            <button className="product" onClick={toggleProductList}>
              <p>
                Products
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                </svg>
              </p>
            </button>

            <button className="sort-by" onClick={toggleSortByList}>
              <p>
                Sort By
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                </svg>
              </p>
            </button>
          </div>
          <aside className="products-list" ref={productsList}>
            <li
              className="products-list-item"
              data-filter="flower"
              onClick={addFilterToList}
            >
              Flower
            </li>
            <li
              className="products-list-item"
              data-filter="edibles"
              onClick={addFilterToList}
            >
              Edibles
            </li>
            <li
              className="products-list-item"
              data-filter="concentrates"
              onClick={addFilterToList}
            >
              Concentrates
            </li>
            <li
              className="products-list-item"
              data-filter="cartridges"
              onClick={addFilterToList}
            >
              Cartridges
            </li>
            <li
              className="products-list-item"
              data-filter="misc"
              onClick={addFilterToList}
            >
              Misc.
            </li>
          </aside>
          <aside className="sort_by-list" ref={sortByList}>
            <li
              className="sort_by-list-item"
              data-filter="recommended"
              onClick={addFilterToList}
            >
              Recommended
            </li>
            <li
              className="sort_by-list-item"
              data-filter="sativa"
              onClick={addFilterToList}
            >
              Sativa
            </li>
            <li
              className="sort_by-list-item"
              data-filter="indica"
              onClick={addFilterToList}
            >
              Indica
            </li>
            <li
              className="sort_by-list-item"
              data-filter="hybrid"
              onClick={addFilterToList}
            >
              Hybrid
            </li>
          </aside>
          <section className="flowers" ref={flowers}>
            <h2>All Products</h2>
            {/* items filtered or not will be displayed here */}
            <div className="inline-wrapper_heading_scrolling">
              <h3>Flower</h3>
              <div className="scrolling">
                <p className="more">More</p>
                <button className="left" onClick={handleScrollLeft}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                  </svg>
                </button>
                <button className="right" onClick={handleScrollRight}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="items-wrapper" ref={carousel}>
              {/* This whole products datas will be received through API and all data will be send through props to detail page so it don't have to send another query to api*/}
              {/* Also here I will map through the products in API and display them here  */}
              <Link to={`/shop${shoppage}/1`}>
                <div className="item">
                  <img src={require("../tempIMG/Rectangle.png")} />

                  <p className="item-taste">Lava Cake by Sweet Dirt</p>
                  <p className="item-title">
                    Hybrid Flower{/*Product data from api etc.*/}
                  </p>
                  <p className="item-thc">22.9%</p>
                  <Button
                    title="Details"
                    // handleNavigate={navigateToDetails}
                    // details={{
                    //   img: 'Rectangle.png',
                    //   id: 1,
                    //   flower: 'Hybrid Flower',
                    //   supplier: 'Planet 13',
                    //   price: '$60.00',
                    //   quantity: 'Per 1/8 oz',
                    //   type: 'Indica',
                    //   thc: '26% THC',
                    //   name: 'Blueberry Pie'
                    // }}
                  />
                </div>
              </Link>

              <Link to={`/shop${shoppage}/2`}>
                <div className="item">
                  <img src={require("../tempIMG/Rectangle.png")} />

                  <p className="item-taste">Lava Cake by Sweet Dirt</p>
                  <p className="item-title">
                    Hybrid Flower{/*Product data from api etc.*/}
                  </p>
                  <p className="item-thc">22.9%</p>
                  <Button
                    title="Details"
                    // handleNavigate={navigateToDetails}
                    // details={{
                    //   img: 'Rectangle.png',
                    //   id: 1,
                    //   flower: 'Hybrid Flower',
                    //   supplier: 'Planet 13',
                    //   price: '$60.00',
                    //   quantity: 'Per 1/8 oz',
                    //   type: 'Indica',
                    //   thc: '26% THC',
                    //   name: 'Blueberry Pie'
                    // }}
                  />
                </div>
              </Link>
              <Link to={`/shop${shoppage}/3`}>
                <div className="item">
                  <img src={require("../tempIMG/Rectangle.png")} />

                  <p className="item-taste">Lava Cake by Sweet Dirt</p>
                  <p className="item-title">
                    Hybrid Flower{/*Product data from api etc.*/}
                  </p>
                  <p className="item-thc">22.9%</p>
                  <Button
                    title="Details"
                    // handleNavigate={navigateToDetails}
                    // details={{
                    //   img: 'Rectangle.png',
                    //   id: 1,
                    //   flower: 'Hybrid Flower',
                    //   supplier: 'Planet 13',
                    //   price: '$60.00',
                    //   quantity: 'Per 1/8 oz',
                    //   type: 'Indica',
                    //   thc: '26% THC',
                    //   name: 'Blueberry Pie'
                    // }}
                  />
                </div>
              </Link>
              <Link to={`/shop${shoppage}/4`}>
                <div className="item">
                  <img src={require("../tempIMG/Rectangle.png")} />

                  <p className="item-taste">Lava Cake by Sweet Dirt</p>
                  <p className="item-title">
                    Hybrid Flower{/*Product data from api etc.*/}
                  </p>
                  <p className="item-thc">22.9%</p>
                  <Button
                    title="Details"
                    // handleNavigate={navigateToDetails}
                    // details={{
                    //   img: 'Rectangle.png',
                    //   id: 1,
                    //   flower: 'Hybrid Flower',
                    //   supplier: 'Planet 13',
                    //   price: '$60.00',
                    //   quantity: 'Per 1/8 oz',
                    //   type: 'Indica',
                    //   thc: '26% THC',
                    //   name: 'Blueberry Pie'
                    // }}
                  />
                </div>
              </Link>
              <Link to={`/shop${shoppage}/5`}>
                <div className="item">
                  <img src={require("../tempIMG/Rectangle.png")} />

                  <p className="item-taste">Lava Cake by Sweet Dirt</p>
                  <p className="item-title">
                    Hybrid Flower{/*Product data from api etc.*/}
                  </p>
                  <p className="item-thc">22.9%</p>
                  <Button
                    title="Details"
                    // handleNavigate={navigateToDetails}
                    // details={{
                    //   img: 'Rectangle.png',
                    //   id: 1,
                    //   flower: 'Hybrid Flower',
                    //   supplier: 'Planet 13',
                    //   price: '$60.00',
                    //   quantity: 'Per 1/8 oz',
                    //   type: 'Indica',
                    //   thc: '26% THC',
                    //   name: 'Blueberry Pie'
                    // }}
                  />
                </div>
              </Link>
              <Link to={`/shop${shoppage}/6`}>
                <div className="item">
                  <img src={require("../tempIMG/Rectangle.png")} />

                  <p className="item-taste">Lava Cake by Sweet Dirt</p>
                  <p className="item-title">
                    Hybrid Flower{/*Product data from api etc.*/}
                  </p>
                  <p className="item-thc">22.9%</p>
                  <Button
                    title="Details"
                    // handleNavigate={navigateToDetails}
                    // details={{
                    //   img: 'Rectangle.png',
                    //   id: 1,
                    //   flower: 'Hybrid Flower',
                    //   supplier: 'Planet 13',
                    //   price: '$60.00',
                    //   quantity: 'Per 1/8 oz',
                    //   type: 'Indica',
                    //   thc: '26% THC',
                    //   name: 'Blueberry Pie'
                    // }}
                  />
                </div>
              </Link>
              {/* <div className="item">
                <img src={require('../tempIMG/Rectangle.png')} />
                <p className="item-title">
                  Hybrid Flower{/*Product data from api etc.
                </p>
                <p className="item-taste">Lava Cake by Sweet Dirt</p>
                <p className="item-thc">22.9%</p>
                <Button
                  title="Details"
                  handleNavigate={navigateToDetails}
                  details={{
                    img: 'Rectangle.png',
                    id: 6,
                    flower: 'Hybrid Flower',
                    supplier: 'Planet 13',
                    price: '$60.00',
                    quantity: 'Per 1/8 oz',
                    type: 'Indica',
                    thc: '26% THC',
                    name: 'Blueberry Pie'
                  }}
                />
              </div> */}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default ShopPage;
