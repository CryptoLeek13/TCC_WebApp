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

<<<<<<< HEAD
  // const scrollingButtons = document.querySelectorAll('.scrolling');
  const scrollingButtonsRef = React.useRef([]);

  const addToRef = (el) => {
    if (el && !scrollingButtonsRef.current.includes(el)) {
      scrollingButtonsRef.current.push(el);
    }
  };
=======
  const scrollingButtons = document.querySelectorAll(".scrolling");
  const carouselWrapper = document.querySelector(".items-wrapper");
>>>>>>> 96d0bf16dd3383160d0e068e39c8eac047b4c4c5

  const handleScrollLeft = (e) => {
    scrollingButtonsRef.current.forEach((scroll) => {
      let leftButton = scroll.children[1];
      if (leftButton === e.target) {
        let carousel = scroll.parentElement.parentElement.children[1];
        carousel.scrollLeft -= 170;
      }
    });
  };
  const handleScrollRight = (e) => {
    scrollingButtonsRef.current.forEach((scroll) => {
      let rightButton = scroll.children[2];
      if (rightButton === e.target) {
        let carousel = scroll.parentElement.parentElement.children[1];
        carousel.scrollLeft += 170;
      }
    });
  };
  const [isProductListOn, setIsProductListOn] = React.useState(false);
  const [isSortByOn, setIsSortByOn] = React.useState(false);

  const [filtersList, setFiltersList] = React.useState([]);

  const productsList = React.useRef(null);
  const sortByList = React.useRef(null);
  const svgProduct = React.useRef(null);
  const svgSort = React.useRef(null);

  const toggleProductList = () => {
    setIsProductListOn((prev) => !prev);
    if (isProductListOn) {
      productsList.current.style.opacity = "0";
      productsList.current.style.pointerEvents = "none";
      svgProduct.current.style.transform = "rotate(0deg)";
    } else {
      productsList.current.style.opacity = "1";
      svgProduct.current.style.transform = "rotate(180deg)";
      productsList.current.style.pointerEvents = "all";
      sortByList.current.style.opacity = "0";
      svgSort.current.style.transform = "rotate(0deg)";
      sortByList.current.style.pointerEvents = "none";
      setIsSortByOn(false);
    }
  };
  const toggleSortByList = () => {
    setIsSortByOn((prev) => !prev);
    if (isSortByOn) {
      sortByList.current.style.opacity = "0";
      sortByList.current.style.pointerEvents = "none";
      svgSort.current.style.transform = "rotate(0deg)";
    } else {
      sortByList.current.style.opacity = "1";
      svgSort.current.style.transform = "rotate(180deg)";
      sortByList.current.style.pointerEvents = "all";
      productsList.current.style.opacity = "0";
      svgProduct.current.style.transform = "rotate(0deg)";
      productsList.current.style.pointerEvents = "none";
      setIsProductListOn(false);
    }
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
  const selectedFilter = document.querySelectorAll(".products-list-item");
  const selectedFilter2 = document.querySelectorAll(".sort_by-list-item");
  const flowerSections = document.querySelectorAll(".flowers");

  const applyFilters = () => {
    setIsSortByOn(false);
    setIsProductListOn(false);
    sortByList.current.style.opacity = "0";
    sortByList.current.style.pointerEvents = "none";
    productsList.current.style.opacity = "0";
    productsList.current.style.pointerEvents = "none";
    svgProduct.current.style.transform = "rotate(0deg)";
    svgSort.current.style.transform = "rotate(0deg)";

    flowerSections.forEach((section) => {
      if (filtersList.length > 0) {
        if (filtersList.includes(section.dataset.products)) {
          section.style.display = "block";
        } else section.style.display = "none";
      } else {
        section.style.display = "block";
      }
    });
  };

  const clearFilters = () => {
    setFiltersList([]);
    selectedFilter.forEach((element) => {
      element.classList.remove("toggle-style");
    });
    selectedFilter2.forEach((element) => {
      element.classList.remove("toggle-style");
    });
    flowerSections.forEach((section) => {
      section.style.display = "block";
    });
  };
  flowerSections.forEach((section) => {
    if (filtersList.length > 0) {
      if (filtersList.includes(section.dataset.products)) {
        section.style.display = "block";
      } else section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  });
  const removeFilter = (e) => {
    if (filtersList.filter((item) => item === e.target.dataset.filter)) {
      setFiltersList((item) =>
        item.filter((element) => element !== e.target.dataset.filter)
      );
    }

    selectedFilter.forEach((element) => {
      if (element.dataset.filter === e.target.dataset.filter) {
        element.classList.remove("toggle-style");
      }
    });
    selectedFilter2.forEach((element) => {
      if (element.dataset.filter === e.target.dataset.filter) {
        element.classList.remove("toggle-style");
      }
    });
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
                <svg
                  ref={svgProduct}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                </svg>
              </p>
            </button>

            <button className="sort-by" onClick={toggleSortByList}>
              <p>
                Sort By
                <svg
                  ref={svgSort}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                </svg>
              </p>
            </button>
          </div>
          <aside className="products-list" ref={productsList}>
            <li
              className="products-list-item"
              data-filter="Flower"
              onClick={addFilterToList}
            >
              Flower
            </li>
            <li
              className="products-list-item"
              data-filter="Edibles"
              onClick={addFilterToList}
            >
              Edibles
            </li>
            <li
              className="products-list-item"
              data-filter="Concentrates"
              onClick={addFilterToList}
            >
              Concentrates
            </li>
            <li
              className="products-list-item"
              data-filter="Cartridges"
              onClick={addFilterToList}
            >
              Cartridges
            </li>
            <li
              className="products-list-item"
              data-filter="Misc"
              onClick={addFilterToList}
            >
              Misc.
            </li>
            <button onClick={applyFilters} className="operation-buttons">
              Apply
            </button>
            <button onClick={clearFilters} className="operation-buttons">
              Clear All
            </button>
          </aside>
          <aside className="sort_by-list" ref={sortByList}>
            <li
              className="sort_by-list-item"
              data-filter="Sativa"
              onClick={addFilterToList}
            >
              Sativa
            </li>
            <li
              className="sort_by-list-item"
              data-filter="Indica"
              onClick={addFilterToList}
            >
              Indica
            </li>
            <li
              className="sort_by-list-item"
              data-filter="Hybrid"
              onClick={addFilterToList}
            >
              Hybrid
            </li>
            <button onClick={applyFilters} className="operation-buttons">
              Apply
            </button>
            <button onClick={clearFilters} className="operation-buttons">
              Clear All
            </button>
          </aside>
          {filtersList.length > 0 && (
            <section className="active-filters">
              Filters:
              {filtersList.map((filter) => {
                return (
                  <p
                    className="active-filter-holder"
                    key={filter}
                    data-filter={filter}
                    onClick={removeFilter}
                  >
                    {filter}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                    </svg>
                  </p>
                );
              })}
            </section>
          )}
          <h2 className="products-heading">Products</h2>
          <section className="flowers" data-products="Flower">
            {/* items filtered or not will be displayed here */}
            <div className="inline-wrapper_heading_scrolling">
              <h3>Flower</h3>
              <div className="scrolling" ref={addToRef}>
                <p className="more">More</p>
                <img
                  src={require("../tempIMG/left.png")}
                  className="left"
                  onClick={handleScrollLeft}
                ></img>
                <img
                  src={require("../tempIMG/right.png")}
                  className="right"
                  onClick={handleScrollRight}
                ></img>
              </div>
            </div>

            <div className="items-wrapper">
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
          <section className="flowers" data-products="Edibles">
            {/* items filtered or not will be displayed here */}
            <div className="inline-wrapper_heading_scrolling">
              <h3>Edibles</h3>
              <div className="scrolling" ref={addToRef}>
                <p className="more">More</p>
                <img
                  src={require("../tempIMG/left.png")}
                  className="left"
                  onClick={handleScrollLeft}
                ></img>
                <img
                  src={require("../tempIMG/right.png")}
                  className="right"
                  onClick={handleScrollRight}
                ></img>
              </div>
            </div>

            <div className="items-wrapper">
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
          <section className="flowers" data-products="Concentrates">
            {/* items filtered or not will be displayed here */}
            <div className="inline-wrapper_heading_scrolling">
              <h3>Concentrates</h3>
              <div className="scrolling" ref={addToRef}>
                <p className="more">More</p>
                <img
                  src={require("../tempIMG/left.png")}
                  className="left"
                  onClick={handleScrollLeft}
                ></img>
                <img
                  src={require("../tempIMG/right.png")}
                  className="right"
                  onClick={handleScrollRight}
                ></img>
              </div>
            </div>

            <div className="items-wrapper">
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
          <section className="flowers" data-products="Cartridges">
            {/* items filtered or not will be displayed here */}
            <div className="inline-wrapper_heading_scrolling">
              <h3>Cartridges</h3>
              <div className="scrolling" ref={addToRef}>
                <p className="more">More</p>
                <img
                  src={require("../tempIMG/left.png")}
                  className="left"
                  onClick={handleScrollLeft}
                ></img>
                <img
                  src={require("../tempIMG/right.png")}
                  className="right"
                  onClick={handleScrollRight}
                ></img>
              </div>
            </div>

            <div className="items-wrapper">
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
          <section className="flowers" data-products="Misc">
            {/* items filtered or not will be displayed here */}
            <div className="inline-wrapper_heading_scrolling">
              <h3>Misc.</h3>
              <div className="scrolling" ref={addToRef}>
                <p className="more">More</p>
                <img
                  src={require("../tempIMG/left.png")}
                  className="left"
                  onClick={handleScrollLeft}
                ></img>
                <img
                  src={require("../tempIMG/right.png")}
                  className="right"
                  onClick={handleScrollRight}
                ></img>
              </div>
            </div>

            <div className="items-wrapper">
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
