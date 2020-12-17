import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAlbum } from "../types/album";
import { IPhoto } from "../types/photo";

export default function AlbumsDetails() {
  const albumParams = useParams<{ id: string }>();

  const [album, setAlbum] = useState<IAlbum>(null);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const url = "https://jsonplaceholder.typicode.com/albums/" + albumParams.id;
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: IAlbum) => {
        console.log(data);
        setAlbum(data);
      });
  }, [url]);

  const photosUrl =
    "https://jsonplaceholder.typicode.com/photos?albumId=" + albumParams.id;

  useEffect(() => {
    fetch(photosUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, [photosUrl]);

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
