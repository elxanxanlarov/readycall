import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Qeydiyyat</h2>
      <div>
        <label htmlFor="firstName">Ad:</label>
        <input
          id="firstName"
          {...register("firstName", { required: "Ad daxil edilməlidir" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Soyad:</label>
        <input
          id="lastName"
          {...register("lastName", { required: "Soyad daxil edilməlidir" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
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
      <button type="submit">Qeydiyyatdan Keç</button>
    </form>
  );
};

export default RegisterForm;
