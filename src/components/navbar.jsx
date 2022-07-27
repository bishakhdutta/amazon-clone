import "../assets/Style/navbar.css";
import { HiOutlineLocationMarker as LocationDot} from "react-icons/hi";
import {AiFillCaretDown as ArrowDown} from "react-icons/ai";
import {BsSearch as SearchIcon} from "react-icons/bs"; 
import {FiShoppingCart as Cart} from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
  const [textColor, setColor] = useState('rgb(92, 92, 92)');
  const [searchValue, setsearchValue] = useState('');
  const [selectVal, setselectVal] = useState('');
  const [border, setBorder] = useState(false);
  const inputEventFocus = ()=>{
    setColor('black');
    setBorder(true);
  }
  const inputEventBlur = ()=>{
    setColor('rgb(92, 92, 92)');
    setBorder(false);
  }
  const borderStyle = {
    display: 'flex',
    height: '40px',
    width: '100%',
    borderColor: border ? '#ff9900' : 'transparent',
    border: '3px solid',
    borderRadius: '6px'
  }
  return (
    <nav>
      <div className="nav-left">
        <a href="/" className="brand-logo navElem"></a>
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
          <div style={borderStyle}>
          <div
           className="select-type-label" 
           style={{color: `${textColor}`}} 
           onMouseOver={()=>setColor('black')} 
           onMouseOut={()=>setColor('rgb(92, 92, 92)')}
           >
            All<ArrowDown/>
          </div>
          <select className="search-type" hidden={true} value={selectVal} onChange={(e)=>setselectVal(e.target.value)}>
            <option value="all">All</option>
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
          type="text" value={searchValue}
          onChange={(e)=>setsearchValue(e.target.value)}
          onFocus={inputEventFocus}
          onBlur={inputEventBlur}
          />
        <div className="search-btn">
          <SearchIcon size="20px"/>
        </div>
        </div>
        </div>
      </div>
      <div className="nav-right">
        <div className="language-cont navElem">
          <div className="lang-hov">
            🇺🇸
            <ArrowDown size="14px" style={{marginBottom: '2px'}}/>
          </div>
        </div>
        <div className="account-cont down-style navElem">
          <div style={{height:'32px'}}>
          Hello, Sign In
          <div className="acount-sign-in loc">
            Account & Lists
          </div>
          </div>
          <ArrowDown size="14px" style={{marginTop: '15px'}}/>
        </div>
        <div className="returns down-style navElem">
          <div style={{height:'32px'}}>
          Returns
          <div className="acount-sign-in loc">
            & Orders
          </div>
          </div>
        </div>
        <div className="cart navElem">
          <div className="cart-item">0</div>
          <div className="cart-icon">
          <Cart color="white" size="26px" style={{marginTop: '4px'}}/>
          Cart
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
