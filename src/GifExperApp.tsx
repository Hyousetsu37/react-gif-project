import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExperApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  //Instead of passing the set function we pass this helper function so we know manage what happens to our state from here
  const onNewCategory = (category: string) => {
    // const lowerCaseCategory = category.toLowerCase();

    if (
      !categories.find((cat) => cat.toLowerCase() === category.toLowerCase())
      /*  !categories
        .map(
          (cat) =>
            cat.toLowerCase().trim() === lowerCaseCategory && lowerCaseCategory
        )
        .includes(lowerCaseCategory) */
    ) {
      setCategories((categories) => [category, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExperApp</h1>

      <AddCategory onNewCategory={onNewCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
