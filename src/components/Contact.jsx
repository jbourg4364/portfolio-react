import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vakzyf6', 'template_gqb0hwx', "form", 'z-bjWzEqmRLp6hIp8')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

        
        console.log("Form submitted", {name, email, message});
        alert("Your message has been sent to Jason Bourg!");

        setName('');
        setEmail('');
        setMessage('');
    };




    return (
        <>
        <div id='contact'>
           <h1 className='contact-heading'>Contact</h1>
           <div id='form'>
            <form useRef="form" name='contact' method='POST' onSubmit={handleSubmit}>
                <input required className='form-input' type='text' name='name' placeholder='Name' onChange={(e) => setName(e.target.value)} value={ name }></input>
                <input required className='form-input' type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={ email }></input>
                <textarea required name='message' rows='6' className='form-input' placeholder='Message' onChange={(e) => setMessage(e.target.value)} value={ message }></textarea>
                <button className='contact-button' type='submit'>Send</button>
            </form>
           </div>
        </div>
        </>
    )
};

export default Contact;