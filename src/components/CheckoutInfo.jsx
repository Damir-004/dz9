// import React from "react";
// import * as yup from 'yup';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     email: yup.string().email().required(),
//   });

// const CheckoutInfo = ({ allFalse, state }) => {
//     const validationSchema = Yup.object().shape({
//         email: Yup.string()
//           .email('Invalid email address')
//     });

//     const { register, handleSubmit, errors } = useForm({
//         resolver: yupResolver(schema),
//     });
    
//     const onSubmit = (data) => console.log(data);
    
//   return (
//     <div className="checkout-info">
//         <div className="container">
//             <h1>Ingredient info</h1>
//             <ul>
//             {state[0].pizza.ingredients.map((obj, i) => {
//                 if (obj.total > 0) {
//                 return (
//                     <li key={i}>
//                     <span>{obj.text}</span>
//                     <img src={obj.picture} alt="" />
//                     <span>{obj.total}</span>
//                     </li>
//                 );
//                 }
//             })}
//             </ul>
//             <h1>Checkout info:</h1>
//                 <Formik
//                     initialValues={{ email: '' }}
//                     validationSchema={validationSchema}
//                     onSubmit={(values) => {
//                     }}
//                 >
//                 {({ errors}) => (
//                 <Form>
//                     <div className="bottom_main-box">
//                         <div className="info">
//                             <label>Name:</label>
//                             <input type="text" />
//                         </div>
//                         <div className="info">
//                             <label htmlFor="email">Email</label>
//                             <Field name="email" type="email" />
//                         </div>
//                         <div className="delivery">
//                             <label>Choose delivery method</label>
//                             <select name="" id="">
//                             <option value="">Delivary</option>
//                                 <option value="">Local pickup</option>
//                             </select>
//                         </div>
//                         <div className="note">
//                             <label>Additional notes:</label>
//                             <textarea name="" id=""></textarea>
//                         </div>
//                         <div className="client">
//                             <label>Are you a regular client?</label>
//                             <input type="radio" name="asd" id="a1" />
//                             <label htmlFor="a1">Yes</label>
//                             <input type="radio" name="asd" id="a2" />
//                             <label htmlFor="a2">No</label>
//                         </div>
//                         <div className="code">
//                             <label>Do you have a coupon code?</label>
//                             <input type="checkbox" />
//                         </div>
//                         <div className="coupon">
//                             <label>Coupon:</label>
//                             <input type="text" />
//                         </div>
//                         <div className="info-button">
//                             <button>Reset</button>
//                             <button onClick={allFalse}>Submit</button>
//                         </div>
//                         <h1 className="error"><ErrorMessage name="email" /></h1>
//                     </div>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="firstName" ref={register} />
//       {errors.firstName && <p>{errors.firstName.message}</p>}

//       <input name="lastName" ref={register} />
//       {errors.lastName && <p>{errors.lastName.message}</p>}

//       <input name="email" ref={register} />
//       {errors.email && <p>{errors.email.message}</p>}
        // <div className="note">
        //     <label>Additional notes:</label>
        //     <textarea name="" id=""></textarea>
        // </div>
        // <div className="client">
        //     <label>Are you a regular client?</label>
        //     <input type="radio" name="asd" id="a1" />
        //     <label htmlFor="a1">Yes</label>
        //     <input type="radio" name="asd" id="a2" />
        //     <label htmlFor="a2">No</label>
        // </div>
        // <div className="code">
        //     <label>Do you have a coupon code?</label>
        //     <input type="checkbox" />
        // </div>
        // <div className="coupon">
        //     <label>Coupon:</label>
        //     <input type="text" />
        // </div>

//             <button type="submit">Submit</button>
//         </form>
//                 </Form>
                
//                 )}
//             </Formik>
            
//             </div>
//     </div>
//   );
// };

// export default CheckoutInfo;







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