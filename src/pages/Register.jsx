import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Register</h1>
      <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid').required('Required'),
          password: Yup.string().min(4, 'Too short').required('Required'),
          confirm: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required')
        })}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);
          const res = await register({ email: values.email, password: values.password });
          setSubmitting(false);
          if (res.ok) {
            navigate('/login');
          } else {
            setFieldError('email', res.message);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Email</label>
            <Field name="email" type="email" />
            <div className="error"><ErrorMessage name="email" /></div>
            <label>Password</label>
            <Field name="password" type="password" />
            <div className="error"><ErrorMessage name="password" /></div>
            <label>Confirm</label>
            <Field name="confirm" type="password" />
            <div className="error"><ErrorMessage name="confirm" /></div>
            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}