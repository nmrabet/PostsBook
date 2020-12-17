import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IAlbum } from "../types/album";

export default function AlbumsDetails() {
  const albumParams = useParams<{ id: string }>();
  console.log(albumParams);

  const [photos, setPhotos] = useState<IAlbum[]>([]);

  const url =
    "https://jsonplaceholder.typicode.com/albums?userId=" + albumParams.id;
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: IAlbum[]) => {
        setPhotos(data);
      });
  }, [url]);

  return (
    <div className='photos'>
      {photos.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.url} alt='images'/>
            <Link to={`/albums/${albumParams.id}`}>
              <h4>{photo.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
