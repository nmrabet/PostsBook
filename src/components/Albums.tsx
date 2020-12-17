import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IAlbum } from "types";

export default function Albums() {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  const url = "https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: IAlbum[]) => {
        setAlbums(data);
      });
  }, [url]);

  return (
    <div className='albums-component'>
      <h2 className='subtitle'> Albums </h2>
      {albums.map((album) => (
        <div key={album.id}>
          <Link to={`/albums/${album.id}`}>
            <h3>{album.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
