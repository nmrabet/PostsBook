import React, {useState, useEffect} from 'react'
import { IPhoto } from '../types/photo';
import { useParams } from 'react-router-dom';

export default function Photos() {
    const [photos, setPhotos] = useState<IPhoto[]>([]);

    const photosParams = useParams<{ albumId: string }>();
  console.log(photosParams);

    const url = 'https://jsonplaceholder.typicode.com/photos' + photosParams.albumId

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data: IPhoto[]) => {
            setPhotos(data);
          });
      }, [url]);
      console.log(photos);

    return (
        <div>
            {photos.map((photo) => {
                return <div key={photo.id}>
                    <h4>{photo.title}</h4>
                    <img src={photo.url} alt="photos"/>
                </div>
            })}
        </div>
    )
}
