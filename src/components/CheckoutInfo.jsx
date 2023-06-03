import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name:</label>
        <input type="text" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label>Last Name:</label>
        <input type="text" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label>Email:</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password:</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <div className="note">
            <label>Additional notes:</label>
            <textarea name="" id=""></textarea>
        </div>
        <div className="client">
            <label>Are you a regular client?</label>
            <input type="radio" name="asd" id="a1" />
            <label htmlFor="a1">Yes</label>
            <input type="radio" name="asd" id="a2" />
            <label htmlFor="a2">No</label>
        </div>
        <div className="code">
            <label>Do you have a coupon code?</label>
            <input type="checkbox" />
        </div>
        <div className="coupon">
            <label>Coupon:</label>
            <input type="text" />
        </div>

        <button type="submit">Submit</button>
    </form>
  );
}

export default App;
