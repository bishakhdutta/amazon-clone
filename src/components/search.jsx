import { useEffect } from "react";

const Search = ({ searchValue, width, display, searchValUpdate,category }) => {
  const style = {
    width: `${width}px`,
    marginLeft: "54px",
    backgroundColor: "white",
    top: "50px",
    position: "absolute",
    borderColor: "#d4d4d4",
    borderWidth: "1px",
    borderStyle: "solid",
    display: display,
    maxHeight: "350px",
    flexDirection: "column",
    overflow: "hidden",
  };
  const resultStyle = {
    minHeight: "35px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "4px",
    paddingRight: "4px",
    whiteSpace: "pre",
    fontSize: "18px",
  };
  const searchResult = [
    {
      name: "Samsung M20",
      path: "/samsung-m20",
      category: "electronics",
    },
    {
      name: "Samsung M10",
      path: "/samsung-m10",
      category: "electronics",
    },
    {
      name: "Samsung M21",
      path: "/samsung-m20",
      category: "electronics",
    },
    {
      name: "Samsung M30",
      path: "/samsung-m30",
      category: "electronics",
    },
    {
      name: "Samsung M25",
      path: "/samsung-m25",
      category: "electronics",
    },
    {
      name: "Samsung buds",
      path: "/samsung-m20",
      category: "electronics",
    },
    {
      name: "samsung TV",
      path: "/samsung-m20",
      category: "electronics",
    },
    {
      name: "Samsung M52",
      path: "/samsung-m20",
      category: "electronics",
    },
    {
      name: "HP Victus",
      path: "/samsung-m20",
      category: "computer",
    },
    {
      name: "Macbook",
      path: "/samsung-m20",
      category: "computer",
    },
    {
      name: "Iphone XS Max",
      path: "/samsung-m20",
      category: "electronics",
    },
  ];

  const filteredValue = searchResult.filter((elem) => {
    return elem.name.match(new RegExp(`^${searchValue}`, "i")) && (elem.category==category||category=='all');
  });
  let automaticSearchCont = filteredValue.map((result) => {
    let searchVal = result.name.toString();
    let upVal = searchVal.substring(0, searchValue.length);
    let downVal = searchVal.substring(searchValue.length, searchVal.length);
    return (
      <div
        style={resultStyle}
        className="searchResults"
        onMouseDown={() => searchValUpdate(searchVal)}
      >
        {upVal}
        <b>{downVal}</b>
      </div>
    );
  });
  return (
    <div className="search-result" style={style}>
      {automaticSearchCont}
    </div>
  );
};
export default Search;
