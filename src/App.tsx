import { useState, useEffect } from "react";
import { PhotoAPI } from "./PhotoAPI";
import AlbumForm from "./components/AlbumForm";
import Photos from "./components/Photos";
import Pagination from "./components/Pagination";
import React from "react";

function App() {
  const [albumId, setAlbumId] = useState("1");
  const [photos, setPhotos] = useState(() => {
    const savedPhotos = localStorage.getItem("photos");
    const initialValue = JSON.parse(savedPhotos);
    return initialValue || [];
  });

  useEffect(() => {
    (async () => {
      const fetchedPhotos = await PhotoAPI.getAll();
      // if the data in the API has changed, update the state and local storage
      if (photos !== fetchedPhotos) {
        setPhotos(photos);
        localStorage.setItem("photos", JSON.stringify(photos));
      }
    })();
  });

  const changeAlbumId = (id: string) => {
    if (id === "") {
      id = "1";
    }
    setAlbumId(id);
  };

  return (
    <>
      <div id="wrapper" className={["p-4"].join(" ")}>
        <header className={["w-100"].join(" ")}>
          <h1
            className={[
              "text-center",
              "font-extrabold",
              "text-5xl",
              "py-12",
            ].join(" ")}
          >
            Photo Showcase
          </h1>
        </header>
        <main>
          <AlbumForm photos={photos} changeAlbumId={changeAlbumId} />
          <Photos albumId={albumId} photos={photos} />
        </main>
      </div>
    </>
  );
}

export default App;
