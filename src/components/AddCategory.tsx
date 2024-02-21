import { useState } from 'react';

type InputProps = {
  onNewCategory: (category: string) => void;
};

export const AddCategory = ({ onNewCategory }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmitting = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length >= 1) {
      onNewCategory(newValue);
    }
    setInputValue('');
  };

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
