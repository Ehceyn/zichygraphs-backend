import React from "react";

function Filter(props) {
  return (
    <li>
      <button
        onClick={props.onFilterWork}
        value={props.category}
        // style={{
        //   border: `${props.style.border}`,
        //   backgroundColor: `${props.style.backgroundColor}`,
        //   color: `${props.style.color}`,
        // }}
      >
        <p>{props.category}</p>
      </button>
    </li>
  );
}

export default Filter;
