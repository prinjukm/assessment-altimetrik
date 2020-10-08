import React, { useCallback,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setUser } from 'store/app/actions';
import { User } from 'store/app/types';
import { withTheme } from '@rjsf/core';
import { Theme as MaterialUITheme } from '@rjsf/material-ui';
import { Link } from "react-router-dom";

const App  = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const handleLocaleChange = useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            dispatch(setLocale(e.currentTarget.value as Locale));
        },
        [dispatch]
    );

    const Form = withTheme(MaterialUITheme);

   const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Login",
   "type": "object",
   "properties": {
     "username": {
       "type": "string",
       "title": "User Name",
       "minLength": 2,
       "maxLength": 30,       
     },
        "password": {
         "title": "Password",
          "type": "string",
          "minLength": 2,
          "maxLength": 10,         
        },
   },
   "required": [
     "username",
     "password",
   ]
 }
  const uiSchema =  {
     gender: {
       "ui:widget": "radio" // could also be "select"
     },
     country: {
         "ui:widget": "select"
       }
   };
   const [loginschema, setLoginSchema] = useState(schema);
   
     const onsubmit = useCallback(
      (data:any) => {
          dispatch(setUser(data.formData as User));
      },
      [dispatch]
  );


     

    return (
        <React.Fragment>
        <div className="container">
            <section className="main-right">
            <Form schema={loginschema} uiSchema={uiSchema} onSubmit={onsubmit} />
            <span className="sign-in-heading">You dont have account ?  <Link to="/signup">SignUp</Link></span>
            </section>
            </div>
        </React.Fragment>
    );
};

export default App;
