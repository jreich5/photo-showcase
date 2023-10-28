import { useState } from "react";

function AlbumForm({ changeAlbumId }) {
  const [albumId, setAlbumId] = useState("");
  const processInputChange = (e: { target: any }) => {
    const id = e.target.value;
    changeAlbumId(id);
    setAlbumId(id);
  };
  return (
    <>
      <section>
        <form action="">
          <input
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
