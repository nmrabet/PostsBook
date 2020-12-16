import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {IAlbums} from '../types/albums';

export default function Albums() {
  const [albums, setAlbums] = useState<IAlbums[]>([]);

  const url = "https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: IAlbums[]) => {
        setAlbums(data);
      });
  }, [url]);

  return (
      <div>
          {albums.map((album) => {
              return (<div>
                  <Link to={`/albums/${album.id}`}>
              <h3 key={album.userId}>{album.title}</h3>
            </Link>
              </div>)
          })}
      </div>
  )
}
