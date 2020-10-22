import React from 'react';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  TextArea,
} from './ContactElement';

const Contact = () => {
  return (
    <Container id='contact'>
      <FormWrap>
        <FormContent>
          <Form action='/contact' name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />
            <FormH1>Hubungi Kami</FormH1>
            <FormLabel htmlFor='for'>Nama</FormLabel>
            <FormInput type='text' name='name' required />
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' name='email' required />
            <FormLabel htmlFor='for'>Pesan</FormLabel>
            <TextArea type='text' name='message' rows='8' required />
            <FormButton type='submit'>Kirim</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
