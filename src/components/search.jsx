const Search = ({ searchValue, width, display }) => {
  const style = {
    width: `${width}px`,
    marginLeft: "62px",
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
  };
  const searchResult = [
    {
      name: "Samsung M20",
      path: "/samsung-m20",
    },
    {
      name: "Samsung M10",
      path: "/samsung-m10",
    },
    {
      name: "Samsung M21",
      path: "/samsung-m20",
    },
    {
      name: "Samsung M30",
      path: "/samsung-m30",
    },
    {
      name: "Samsung M25",
      path: "/samsung-m25",
    },
    {
      name: "Samsung buds",
      path: "/samsung-m20",
    },
    {
      name: "Samsung TV",
      path: "/samsung-m20",
    },
    {
      name: "Samsung M52",
      path: "/samsung-m20",
    },
    {
      name: "HP Victus",
      path: "/samsung-m20",
    },
    {
      name: "Macbook",
      path: "/samsung-m20",
    },
    {
      name: "Iphone XS Max",
      path: "/samsung-m20",
    },
    
  ];
  const filteredValue = searchResult.filter((elem)=>{
    return elem.name.startsWith(searchValue);
  })
  let automaticSearchCont = filteredValue.map((result) => {
    let searchVal = result.name.toString();
    let newVal = searchVal.substring(searchValue.length, searchVal.length);
    return (
      <div style={resultStyle} className="searchResults">
        {searchValue}
        <b>{newVal}</b>
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
