import React from 'react';
import { useFormContext } from 'react-hook-form';

const NameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input-name">
      <label htmlFor="name">ПІБ</label>
      <input
        type="text"
        placeholder="Введіть ваші ПІБ"
        id="name"
        {...register('name')}
      />
      <p>{errors.name?.message}</p>
    </div>
  );
};

export default NameInput;
