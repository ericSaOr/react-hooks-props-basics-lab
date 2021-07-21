import React from "react";



function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.Name} is a Web Developer from {props.City}
      </h1>
    </div>
  );
}

export default Home;
