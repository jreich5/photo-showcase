import React from "react";
import { useState, useMemo } from "react";

/**
 *
 * @param photos
 * @returns the total number of unique album ids for a given array of photos
 */
export const calculateNumberOfAlbums = (photos) => {
  return Array.from(new Set(photos.map(({ albumId }) => albumId))).length;
};

function AlbumForm({ changeAlbumId, photos }) {
  const [albumId, setAlbumId] = useState("");
  const numberOfAlbums = useMemo(
    () => calculateNumberOfAlbums(photos),
    [photos]
  );
  const processInputChange = (e: { target: any }) => {
    let id = e.target.value;
    if (!isNaN(Number(id)) && id <= numberOfAlbums && id !== 0 && id !== ".") {
      let idNumber = String(Math.floor(Number(id)));
      if (idNumber === "0") {
        id = "";
      }
      changeAlbumId(id);
      setAlbumId(id);
    }
  };
  return (
    <>
      <section className={["flex", "mb-12"].join(" ")}>
        <form
          className={["m-auto", "flex", "flex-col", "items-center"].join(" ")}
        >
          <div>
            <label
              className="flex flex-col items-center font-bold"
              htmlFor="album-id"
            >
              <span className="">Search by album id</span>
              <span>(numbers 1-{numberOfAlbums})</span>
            </label>
          </div>
          <input
            className={[
              "p-2",
              "w-[8rem]",
              "border",
              "border-2",
              "rounded",
              "text-center",
            ].join(" ")}
            id="album-id"
            type="text"
            placeholder="Enter album id"
            value={albumId}
            onChange={processInputChange}
          />
        </form>
      </section>
    </>
  );
}

export default AlbumForm;
