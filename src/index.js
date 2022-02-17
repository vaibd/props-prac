import React from "react";
import ReactDOM from "react-dom";

function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Cards name="vaib" tel="2144213" img="dfew" />
    <Cards name="vcewaib" tel="214424213" img="dfefwerw" />
  </div>,
  document.getElementById("root")
);
