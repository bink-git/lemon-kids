import React, { forwardRef, useState } from 'react';
import { PhoneInput, CountrySelector } from 'react-international-phone';
import 'react-international-phone/style.css';

const PhoneNumberInput = ({ name, label, onChange }) => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
    onChange(name, value);
  };
  return (
    <>
      <label>{label}</label>

      <PhoneInput
        name={name}
        value={phone}
        onChange={handlePhoneChange}
        disableDialCodeAndPrefix={true}
        showDisabledDialCodeAndPrefix={true}
        defaultCountry="ua"
        inputStyle={{
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
          outline: 'none',
          width: '20px',
        }}
        className="phone-input"
        countrySelectorStyleProps={{
          buttonStyle: {
            height: '40px',
            border: '1px solid var(--grey-border, #b9bcc3)',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            padding: '8px',
          },
        }}
      />
    </>
  );
};

export default PhoneNumberInput;
