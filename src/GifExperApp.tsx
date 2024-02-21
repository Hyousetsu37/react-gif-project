import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExperApp = () => {
  const [categories, setCategories] = useState<string[]>(['Inuyasha']);

  return (
    <>
      {/* titulo */}
      <h1>GifExperApp</h1>
      {/* Input */}
      <AddCategory setCategories={setCategories} />
      {/* Listado de Gif */}
      <ol>
        {categories.map((category) => (
          <li key={category}> {category} </li>
        ))}
      </ol>
      {/* Gif Item */}
    </>
  );
};
