import { useEffect, useState } from 'react';
import type { Gifs } from '../helpers/getGifs';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

type PropType = {
  category: string;
};

export const GifGrid = ({ category }: PropType) => {
  const [gifList, setGifList] = useState<Gifs[]>([]);

  useEffect(() => {
    const getNewGifList = async () => {
      const newGifs: Gifs[] = await getGifs(category);
      setGifList(newGifs);
    };

    getNewGifList();

    /* const newGifs = getGifs(category);
    setGifList((gifList) => [newGifs, ...gifList]); */
  }, [category]);
  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {gifList.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
