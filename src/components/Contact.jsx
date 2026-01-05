import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending for now, easy to enable real sending by uncommenting
        setTimeout(() => {
            setStatus('success');
            alert("Message Sent (Simulated)!");
            e.target.reset();
        }, 1500);

        /*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setStatus('success');
                e.target.reset();
            }, (error) => {
                setStatus('error');
            });
        */
    };

    return (
        <section id="contact" className="section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-title"
            >
                <h2>Get In <span className="accent">Touch</span></h2>
                <div className="title-line"></div>
            </motion.div>

            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="contact-info"
                >
                    <h3>Let's Talk</h3>
                    <p>I'm open to freelance opportunities and full-time roles. Feel free to connect!</p>

                    <div className="contact-item">
                        <FaPhone />
                        <span>+91 7305471455</span>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope />
                        <span>hariharish2604@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Chennai, India</span>
                    </div>

                    <div className="social-links large-icons" style={{ marginTop: '2rem' }}>
                        <a href="https://github.com/Harish222600" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/s-harish-182954264/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </motion.div>

                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="contact-form"
                >
                    <div className="form-group">
                        <input type="text" name="user_name" placeholder=" " required />
                        <label>Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" name="user_email" placeholder=" " required />
                        <label>Email</label>
                    </div>
                    <div className="form-group">
                        <textarea name="message" rows="5" placeholder=" " required></textarea>
                        <label>Message</label>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
