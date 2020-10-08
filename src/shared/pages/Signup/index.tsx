import React, { useCallback,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'store/app/actions';
import { Locale } from 'store/app/types';
import { withTheme } from '@rjsf/core';
import { Theme as MaterialUITheme } from '@rjsf/material-ui';
import { Link } from "react-router-dom";


const Signup  = () => {
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
     "title": "Sign Up",
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
         "confirmPassword": {
          "title": "Confirm Password",
           "type": "string",
           "minLength": 2,
           "maxLength": 10,          
         },
         
      "email": {
         "title": "Email",
        "type": "string",
        "format":"email",
        "minLength": 4,
        "maxLength": 20,
        "ui" : {
          "show" : false
        },
        "validationMessages": {
            "required": "This field is required.",
            "minLength": "Product name is not matching Impelsys.Must be at least {{minimumLength}} characters long."
        }
      },
         "firstname": {
          "title": "FirstName",
           "type": "string",
           "minLength": 2,
           "maxLength": 10,
         },
         "lastname": {
             "title": "Last Name",
             "type": "string",
             "minLength": 2,
             "maxLength": 10,
           },
     
       "gender": {
         "title": "Gender",
         "type": "boolean" 
       },
       "country":  {
         "type": "string",
         "title": "Country",
         "enum": [
           "India",
           "Japan",
           "USA",
           "UK",
           "Denmark"
         ],
         "enumNames": [
             "India",
             "Japan",
             "USA",
             "UK",
             "Denmark"
         ]
       },
    },
    "required": [
      "email",
      "username",
      "lastname",
      "firstname",
      "confirmPassword",
      "password",
      "gender",
      "country"
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
     const onsubmit =(data:any) =>  {
     console.log(data)
     }
    return (
        <div className="container">
            <section className="main-right">
            <Form schema={loginschema} uiSchema={uiSchema} onSubmit={onsubmit} />
            <span className="sign-in-heading">Already have an account ?  <Link to="/">SignIn</Link></span>
            </section>
        </div>
    );
};

export default Signup;
