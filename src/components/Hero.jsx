import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="greeting"
                >
                    Hello, I'm
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="hero-name"
                >
                    Harish S
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="hero-role"
                >
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'MERN Stack Dev',
                            2000,
                            'Software Engineer',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block', color: 'var(--text-muted)' }}
                        repeat={Infinity}
                    />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="hero-desc"
                >
                    Passionate about building scalable web applications and intuitive user interfaces.
                    SPECIALISED in React, Node.js, and modern web technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="cta-group"
                >
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="social-links"
                >
                    <a href="https://github.com/Harish222600" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/s-harish-182954264/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </motion.div>
            </div>

            {/* Visual Element - 3D Floater styled in CSS */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="hero-visual"
            >
                <div className="code-block-visual">
                    <div className="code-header">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <pre>
                        <code>
                            <span className="keyword">const</span> <span className="function">developer</span> = <span className="keyword">new</span> <span className="class">Person</span>();
                            <br />
                            <span className="variable">developer</span>.<span className="property">name</span> = <span className="string">"Harish S"</span>;
                            <br />
                            <span className="variable">developer</span>.<span className="property">skills</span> = [
                            <br />  <span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"MongoDB"</span>
                            <br />];
                            <br />
                            <span className="variable">developer</span>.<span className="function">code</span>();
                        </code>
                    </pre>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
