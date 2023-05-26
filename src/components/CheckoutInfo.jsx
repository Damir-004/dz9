import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const CheckoutInfo = ({ allFalse, state }) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
      });
  return (
    <div className="checkout-info">
        <div className="container">
            <h1>Ingredient info</h1>
            <ul>
            {state[0].pizza.ingredients.map((obj, i) => {
                if (obj.total > 0) {
                return (
                    <li key={i}>
                    <span>{obj.text}</span>
                    <img src={obj.picture} alt="" />
                    <span>{obj.total}</span>
                    </li>
                );
                }
            })}
            </ul>
            <h1>Checkout info:</h1>
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                    }}
                >
                {({ errors}) => (
                <Form>
                    <div className="bottom_main-box">
                        <div className="info">
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div className="info">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                        </div>
                        <div className="delivery">
                            <label>Choose delivery method</label>
                            <select name="" id="">
                            <option value="">Delivary</option>
                                <option value="">Local pickup</option>
                            </select>
                        </div>
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
                        <div className="info-button">
                            <button>Reset</button>
                            <button onClick={allFalse}>Submit</button>
                        </div>
                        <h1 className="error"><ErrorMessage name="email" /></h1>
                    </div>
                    
                </Form>
                )}
            </Formik>
            
            </div>
    </div>
  );
};

export default CheckoutInfo;