import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';
  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(4, 'Too short').required('Required')
        })}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);
          const res = await login(values);
          setSubmitting(false);
          if (res.ok) {
            navigate(from, { replace: true });
          } else {
            setFieldError('password', res.message || 'Login failed');
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

            <button type="submit" disabled={isSubmitting}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}