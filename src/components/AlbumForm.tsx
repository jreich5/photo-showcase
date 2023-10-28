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
    const id = e.target.value;
    if (!isNaN(Number(id)) && id <= numberOfAlbums) {
      changeAlbumId(id);
      setAlbumId(id);
    }
  };
  return (
    <>
      <section>
        <form>
          <div>
            <label htmlFor="album-id">
              Search by album id
              <br />
              <span>(numbers 1-{numberOfAlbums})</span>
            </label>
          </div>
          <input
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
