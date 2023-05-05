import { Formik, Field, ErrorMessage} from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import {
    Container,
    ContainerInputs,
    FormFormik,
    Input,
    Button,
    Title,
    ToLogin,
    ErrorMessageStyled
} from '../login/sessionStyles'

const Signup = () => {

    const navigate = useNavigate();

    return (
    <Container>
        <Title>Signup</Title>
        <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values, action) => {
                console.log(values);
                action.resetForm();
            }}
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
                <ToLogin>Do you registered? <b onClick={() => navigate("/login")} style={{color:'blue',cursor:'pointer'}} >Login</b>  </ToLogin>
                <Button type="submit">Sign up</Button>
            </FormFormik>
        </Formik>
    </Container>
    );
};

export default Signup;