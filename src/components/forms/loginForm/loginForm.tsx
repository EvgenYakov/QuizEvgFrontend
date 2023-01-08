import {Button, TextField} from "@mui/material";
import React from "react";
import {useFormik} from "formik";
import './loginForm.scss'

export default function LoginForm(){
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <form  onSubmit={formik.handleSubmit}>
            <TextField
                label="Почта"
                className="textField"
                name="email"
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <TextField
                label="Пароль"
                className="textField"
                name="password"
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            <Button  type='submit' sx={{margin:"15px" }}>
                Войти
            </Button>
        </form>
    )
}