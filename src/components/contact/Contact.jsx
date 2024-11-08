import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import Image from '../../assets/w.gif';
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);  // State for showing thank you message
    const [showButton, setShowButton] = useState(true);  // State to control button visibility

    // Regex for validating a basic email format (contains '@' and domain like .com, .org, etc.)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const submitHandler = async (e) => {
        e.preventDefault();

        // Check if the fields are empty
        if (!name || !email || !subject || !message) {
            return toast.error("Please complete the form above");
        }

        // Validate email format using regex
        if (!emailRegex.test(email)) {
            return toast.error("Please enter a valid email address (e.g., name@example.com)");
        }

        setLoading(true);

        const data = {
            name,
            email,
            subject,
            message,
        };

        // Hardcode your EmailJS service ID, template ID, and public API key
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Service ID from .env
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Template ID from .env
                data,
                import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY     // API Key from .env
            )
            .then(
                (result) => {
                    setLoading(false);
                    toast.success(`Successfully sent email.`);

                    // Clear the form fields after successful submission
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");

                    // Show the "Thanks for contacting me" message and hide the button
                    setThankYouMessageVisible(true);
                    setShowButton(false);

                    // Reset the view (show button again) after 35 seconds
                    setTimeout(() => {
                        setThankYouMessageVisible(false);
                        setShowButton(true);
                    }, 35000);
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error(error.text);
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Don't like forms? Send me an email. 👋
                    </p>
                    <img src={Image} />
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Insert your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Insert your subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Conditionally render the button and the thank you message */}
                    {showButton && (
                        <button type="submit" className="btn">
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    )}

                    {thankYouMessageVisible && (
                        <p className="thank-you-message">Thank You for Contacting Me!</p>
                    )}
                </form>
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;




