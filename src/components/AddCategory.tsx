import { useState } from 'react';

interface InputProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = ({ setCategories }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
    console.log(inputValue);
  };

  const onSubmitting = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories((categories) =>
      inputValue.trim().length >= 1 && !categories.includes(inputValue)
        ? [inputValue, ...categories]
        : [...categories]
    );
    setInputValue('');
  };
  /*   const onSubmitting = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!categories.includes(inputValue)) {
      setCategories((categories) => [...categories, inputValue]);
    }
  }; */

  return (
    <form onSubmit={onSubmitting}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
