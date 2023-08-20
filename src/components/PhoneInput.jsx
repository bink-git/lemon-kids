import { useState } from 'react';
import styled from 'styled-components';
import { PhoneInput, CountrySelector } from 'react-international-phone';
import 'react-international-phone/style.css';

const Phone = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <PhoneStyles>
        <PhoneInput
          defaultCountry="ua"
          value={phone}
          onChange={(phone) => setPhone(phone)}
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
      </PhoneStyles>
    </div>
  );
};

const PhoneStyles = styled.div`
  .arrow {
    width: 8px;
    height: 10px;
    border-radius: 2px;
    margin-left: 10px;
    padding-left: 20px;
  }

  .phone-input {
    width: 60%;
  }
`;

export default Phone;
