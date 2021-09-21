import React, { useState } from 'react';


import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag" id="contact"><em>Contact me</em></h1>
      {"\n"}
      {"\n"}
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"><em>Name:</em></label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        {"\n"}
        <div>
          <label htmlFor="email"><em>Email address:</em></label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        {"\n"}
        <div>
          <label htmlFor="message"><em>Message:</em></label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit"><em>Submit</em></button>
      </form>
    </section>
  );
}

export default ContactForm;
