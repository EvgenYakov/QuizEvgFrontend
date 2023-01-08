import {Button, TextField} from "@mui/material";
import React from "react";
import './registerForm.scss'
import {useFormik} from "formik";


function validate(values:Values )  {
    const errors:Values = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }


    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }


    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 20 characters or less';
    }

    if (!values.secPassword) {
        errors.secPassword = 'Required';
    } else if (values.secPassword.length < 6) {
        errors.secPassword = 'Must be 6 characters or more';
    } else if (values.secPassword != values.password){
        errors.secPassword = 'Passwords do not match'
    }
    return errors;
};

interface Values {
    name?: string;
    email?: string;
    password?: string;
    secPassword?:string;
}

export default function RegisterForm(){
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            secPassword:''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            },
    })

    return(
        <form  onSubmit={formik.handleSubmit}>
            <TextField
                label="Имя"
                className="textField"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <span style={{color:"red"}}>{formik.errors.name}</span>
            ) : null}
            <TextField
                label="Почта"
                className="textField"
                name="email"
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <span style={{color:"red"}}>{formik.errors.email}</span>
            ) : null}
            <TextField
                label="Пароль"
                className="textField"
                name="password"
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <span style={{color:"red"}}>{formik.errors.password}</span>
            ) : null}
            <TextField
                label="Введите пароль ещё раз"
                className="textField"
                name='secPassword'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.secPassword}
            />
            {formik.touched.secPassword && formik.errors.secPassword ? (
                <span style={{color:"red"}}>{formik.errors.secPassword}</span>
            ) : null}
            <Button  type='submit' sx={{margin:"15px" }} disabled={!formik.isValid || !formik.dirty}>
               Зарегистрироваться
            </Button>
        </form>
    )
}
