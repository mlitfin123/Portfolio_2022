import React, { useRef, useState} from "react";
import emailjs, { init } from "@emailjs/browser";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    init(process.env.REACT_APP_PUBLIC_KEY);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY).then(
        (result) => {
            alert("Message Sent Successfully");
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
        );
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };
    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit} ref={form}>
                <h1 className="text-center">Contact Me</h1>
                <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" className="form-control" name="name" required 
                    onChange={event => setName(event.target.value)}
                    value={name}/>
                </div>
                <div className="form-group col-12">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email@email.com"
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                    />
                </div>
                <div className="form-group col-12">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="xxx-xxx-xxxx"
                    name="phone"
                    onChange={event => setPhone(event.target.value)}
                    value={phone}
                    />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="message">Message:</label>
                    <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    name="message"
                    maxlength="250"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                    required
                    />
                </div>
                </div>

                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </form>
            </div>
        );
    }

export default Contact;