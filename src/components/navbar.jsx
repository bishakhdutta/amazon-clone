import "../assets/Style/navbar.css";
import { HiOutlineLocationMarker as LocationDot } from "react-icons/hi";
import { AiFillCaretDown as ArrowDown } from "react-icons/ai";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { FiShoppingCart as Cart } from "react-icons/fi";
import { useState, useLayoutEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./search";

const Nav = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setsearchValue] = useState("");
  const [selectVal, setselectVal] = useState("all");
  const [selectValName, setselectValName] = useState("All");
  const [searchShow, setSearchShow] = useState("none");
  const [border, setBorder] = useState(false);
  const [hoverStyle, setHoverStyle] = useState(false);
  const [width, setWidth] = useState(0);
  const borderStyle = {
    display: "flex",
    height: "40px",
    width: "100%",
    borderColor: border ? "#ff9900" : "transparent",
    borderWidth: "3px",
    borderStyle: "solid",
    borderRadius: "6px",
  };
  const hovStyle = {
    color: hoverStyle ? "black" : "rgb(92, 92, 92)",
  };
  const ref = useRef(null);
  const anotherRef = useRef(null);
  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth - 54);
    window.addEventListener("resize", () => {
      setWidth(ref.current.offsetWidth - 54);
    });
  }, []);
  const focusEvent = () => {
    setBorder(true);
    if (searchValue.length > 0) {
      setSearchShow("flex");
    }
  };
  const blurEvent = () => {
    setBorder(false);
    setSearchShow("none");
  };
  const searchValUpdate = (value) => {
    setsearchValue(value);
    setSearchShow("none");
    navigate(
      `/search?category=${selectVal.replace(
        /-/g,
        "+"
      )}&product=${value.replace(/\s/g, "+")}`,
      { state: { searchValue: value } }
    );
  };
  return (
    <nav>
      <div className="nav-left">
        <a className="brand-logo navElem" onClick={() => navigate("/")}></a>
        <div className="deliver-cont">
          <div className="del-hov navElem">
            <div className="loc-icon">
              <LocationDot color="white" size="18px" />
            </div>
            <div className="deliver-loc down-style">
              Deliver To
              <div className="loc">India</div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-middle">
        <div className="search-cont">
          <div style={borderStyle} ref={ref}>
            <div className="select-type-label" style={hovStyle} ref={anotherRef}>
              {selectValName}
              <ArrowDown width="16px" />
            </div>
            <select
              className="search-type"
              value={selectVal}
              onChange={(e) => {
                setselectValName(e.target.options[e.target.selectedIndex].text);
                setselectVal(e.target.value);

              }}
              id="sel"
              onMouseOver={() => setHoverStyle(true)}
              onMouseOut={() => setHoverStyle(false)}
            >
              <option value="all">All Departments</option>
              <option value="art-craft">Arts Crafts</option>
              <option value="automotive">Automotive</option>
              <option value="baby">Baby</option>
              <option value="beauty">Beauty Personal Care</option>
              <option value="books">Books</option>
              <option value="boy-clothing">Boys' Fashion</option>
              <option value="computer">Computers</option>
              <option value="deals">Deals</option>
              <option value="music">Digital Music</option>
              <option value="electronics">Electronics</option>
              <option value="girl-clothing">Girls' Fashion</option>
              <option value="health">Health Household</option>
              <option value="kitchen">Home Kitchen</option>
              <option value="industrial">Industrial Scientific</option>
              <option value="kindle">Kindle Store</option>
              <option value="luggage">Luggage</option>
              <option value="men-clothing">Men's Fashion</option>
              <option value="movies">Movies TV</option>
              <option value="pet-supplies">Pet Supplies</option>
              <option value="software">Software</option>
              <option value="sports-outdoors">Sports Outdoors</option>
              <option value="toys">Toys Games</option>
              <option value="games">Video Games</option>
              <option value="women-clothing">Women's Fashion</option>
            </select>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => {
                setsearchValue(e.target.value);
                e.target.value.length > 0
                  ? setSearchShow("flex")
                  : setSearchShow("none");
              }}
              onFocus={focusEvent}
              onBlur={blurEvent}
            />
            <div className="search-btn">
              <SearchIcon size="20px" />
            </div>
          </div>
        </div>
        <Search
          searchValue={searchValue}
          width={width}
          display={searchShow}
          searchValUpdate={searchValUpdate}
          category={selectVal}
        />
      </div>
      <div className="nav-right">
        <div className="language-cont navElem">
          <div className="lang-hov">
            🇺🇸
            <ArrowDown size="14px" style={{ marginBottom: "2px" }} />
          </div>
        </div>
        <div className="account-cont down-style navElem">
          <div style={{ height: "32px" }}>
            Hello, Sign In
            <div className="acount-sign-in loc">Account & Lists</div>
          </div>
          <ArrowDown size="14px" style={{ marginTop: "15px" }} />
        </div>
        <div className="returns down-style navElem">
          <div style={{ height: "32px" }}>
            Returns
            <div className="acount-sign-in loc">& Orders</div>
          </div>
        </div>
        <div className="cart navElem">
          <div className="cart-item">0</div>
          <div className="cart-icon">
            <Cart color="white" size="26px" style={{ marginTop: "4px" }} />
            Cart
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
