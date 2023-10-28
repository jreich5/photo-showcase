import { useState, useEffect } from "react";
import { PhotoAPI } from "./PhotoAPI";
import AlbumForm from "./components/AlbumForm";
import Photos from "./components/Photos";
import Pagination from "./components/Pagination";
import React from "react";

function App() {
  const [albumId, setAlbumId] = useState("1");
  const [pageNum, setPageNum] = useState(1);
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
    setAlbumId(id);
  };

  const changePageNum = (pageNum: number) => {
    setPageNum(pageNum);
  };

  return (
    <>
      <div id="wrapper">
        <header>
          <h1>Photo Showcase</h1>
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
