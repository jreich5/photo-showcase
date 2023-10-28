import React from "react";
import Photo from "./Photo";

function Photos({ albumId, photos }) {
  return (
    <section>
      <h2>Album {albumId} Photos</h2>
      {photos
        .filter((photo) => photo.albumId == albumId)
        .map(({ id, title, url }) => (
          <Photo key={id} id={id} title={title} url={url} />
        ))}
    </section>
  );
}

export default Photos;
