import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Daxil Ol</h2>
      <div>
        <label htmlFor="email">E-poçt:</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "E-poçt daxil edilməlidir" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Şifrə:</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Şifrə daxil edilməlidir" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Daxil Ol</button>
    </form>
  );
};

export default LoginForm;
