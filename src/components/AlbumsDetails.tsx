import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAlbum, IPhoto } from "types";

export default function AlbumsDetails() {
  const albumParams = useParams<{ id: string }>();

  const [album, setAlbum] = useState<IAlbum>(null);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const url = "https://jsonplaceholder.typicode.com/albums/" + albumParams.id;
  console.log(url);

  const photosUrl =
    "https://jsonplaceholder.typicode.com/photos?albumId=" + albumParams.id;

  useEffect(() => {
    const albumPromise = fetch(url);
    const photosPromise = fetch(photosUrl);

    Promise.all([albumPromise, photosPromise]).then((values) => {
      const albumDataPromise = values[0].json();
      const photosDataPromise = values[1].json();

      Promise.all([albumDataPromise, photosDataPromise]).then((dataValues) => {
        setAlbum(dataValues[0]);
        setPhotos(dataValues[1]);
      });
    });
  });

  const albumTitle = album === null ? "Loading..." : album.title;

  return (
    <div className='albums-details'>
      <h2>{albumTitle}</h2>
      <div className='photos'>
        {photos.map((photo) => {
          return (
            <div key={photo.id} className='photo'>
              <img width='100%' src={photo.url} alt='photos' />
            </div>
          );
        })}
      </div>
    </div>
  );
}
