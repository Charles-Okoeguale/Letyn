import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [estateRegister, setEstateRegister] = useState({
        estateName: '',
        country: '',
        state: '',
        city: '',
        phoneNumber: '',
        password: '',
        otp: '',
        confirmPassword: '' 
    });

    return (
        <FormContext.Provider value={{ estateRegister, setEstateRegister }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => useContext(FormContext);
