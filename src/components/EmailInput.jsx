import React from 'react';
import { useFormContext } from 'react-hook-form';

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input-email">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Введіть вашу електронну пошту"
        id="email"
        {...register('email', {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      <p>{errors.email?.message}</p>
    </div>
  );
};

export default EmailInput;
