import {Tab, Tabs} from "@mui/material";
import RegisterForm from "../../components/forms/registerForm/registerForm";
import './authPage.scss'
import React, {useEffect, useRef, useState} from "react";
import LoginForm from "../../components/forms/loginForm/loginForm";

export default function AuthPage(){
    const [tabValue, setTabValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const ref = useRef<HTMLInputElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [height, setHeight] = useState(300);
    const [containerClass, setContainerClass] = useState(['formContent'])


    useEffect(() => {
        if (ref.current) {
            setContentHeight(500);
        }
    }, []);

    useEffect(()=>{
        console.log(containerClass)
        const copy = [...containerClass]
        if(tabValue==='one'){
            copy.splice(1,1)
            setContainerClass(copy)
        }
        else{
            copy.push('register')
            setContainerClass(copy)

        }

       // setHeight(height === 300 ? contentHeight : 300);
    },[tabValue])

    return (
      <div className="authPage">
          <div
              className={containerClass.join(' ')}
          //    style={{ height }}
           //   ref={ref}
          >
              <Tabs
                  value={tabValue}
                  onChange={handleChange}

                  //textColor="secondary"
                  // indicatorColor="secondary"
                  // aria-label="secondary tabs example"
              >
                  <Tab value="one" label="Войти" />
                  <Tab value="two" label="Регистрация" />
              </Tabs>
              {
                  tabValue === "one" ?
                      <LoginForm/>
                      :
                      <RegisterForm/>
              }
          </div>
      </div>
    )
}