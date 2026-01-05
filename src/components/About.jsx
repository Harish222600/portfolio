import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-title"
            >
                <h2>About <span className="accent">Me</span></h2>
                <div className="title-line"></div>
            </motion.div>

            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="about-image"
                >
                    <div className="img-box">
                        <img src="/myself.jpg" alt="Harish S" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="about-content"
                >
                    <h3>Developing with <span className="accent">Passion</span></h3>
                    <p>
                        I am a dedicated Full Stack Developer with a strong foundation in the MERN stack.
                        I love creating efficient, scalable, and visually appealing web applications.
                        My journey involves constant learning and applying modern technologies to solve real-world problems.
                    </p>
                    <p>
                        Currently, I am focusing on building interactive experiences using React.js and optimizing backend performance with Node.js.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <h4>2+</h4>
                            <p>Years Coding</p>
                        </div>
                        <div className="stat-item">
                            <h4>10+</h4>
                            <p>Projects</p>
                        </div>
                        <div className="stat-item">
                            <h4>5+</h4>
                            <p>Certifications</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
