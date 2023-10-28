import React from "react";

function Photo({ id, title, url }) {
  return (
    <article>
      {/* <img src={url} alt={title} /> */}
      <p>id: {id}</p>
      <p>title: {title}</p>
    </article>
  );
}

export default Photo;
