import { Formik, Field, ErrorMessage} from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import {
    Container,
    ContainerInputs,
    FormFormik,
    Input,
    Button,
    Title,
    ToSignUp,
    ErrorMessageStyled
} from './sessionStyles'

const LoginPage = () => {

    const navigate = useNavigate();

    return (
    <Container>
        <Title>Login</Title>
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={
                (values, action) => {
                    console.log(values);
                    action.resetForm();
                }
            }
        >
            <FormFormik>
                <Field name='email'>
                    {({ field, form: {errors, touched}}) => (
                        <ContainerInputs>
                            <Input 
                                type='email'
                                placeholder='Email'
                                {...field}
                                isError={errors[field.name] && touched[field.name]}
                            />
                            <ErrorMessage name={field.name}>
                                { message =>  <ErrorMessageStyled> {message} </ErrorMessageStyled>}
                            </ErrorMessage>
                        </ContainerInputs>
                        
                    )}
                </Field>
                <Field name='password'>
                    {({ field, form: {errors, touched}}) => (
                        <ContainerInputs>
                            <Input 
                                type='password'
                                placeholder='Password'
                                {...field}
                                isError={errors[field.name] && touched[field.name]}
                            />
                            <ErrorMessage name={field.name}>
                                { message =>  <ErrorMessageStyled> {message} </ErrorMessageStyled>}
                            </ErrorMessage>
                        </ContainerInputs>
                        
                    )}
                </Field>
                <ToSignUp>Do you not registered? <b onClick={() => navigate("/signup")} style={{color:'blue',cursor:'pointer'}} >SignUp</b>  </ToSignUp>
                <Button type="submit">Log In</Button>
            </FormFormik>
        </Formik>
    </Container>
    );
};

export default LoginPage;