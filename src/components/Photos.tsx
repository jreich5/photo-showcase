import React from "react";
import Photo from "./Photo";

function Photos({ albumId, photos }) {
  return (
    <section>
      <h2 className={["text-3xl", "mb-2"].join(" ")}>Album {albumId} Photos</h2>
      <div
        className={[
          "grid",
          "grid-cols-2",
          "md:grid-cols-3",
          "lg:grid-cols-6",
          "gap-4",
          "animate-fade-in",
        ].join(" ")}
      >
        {photos
          .filter((photo) => photo.albumId == albumId)
          .map(({ id, title, thumbnailUrl }) => (
            <Photo key={id} id={id} title={title} url={thumbnailUrl} />
          ))}
      </div>
    </section>
  );
}

export default Photos;
