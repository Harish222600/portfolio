import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaEye } from 'react-icons/fa';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "LMS Application",
            Stack: ["React", "Node.js", "MongoDB", "AWS"],
            desc: "Comprehensive Learning Management System with student/admin portals.",
            fullDesc: "Built authentication (JWT, bcrypt), dashboards, and CRUD operations. Integrated cloud storage with Supabase and deployed on AWS EC2.",
            icon: "graduation-cap",
            gitHubUrl: "https://github.com/Harish222600/Beeja-lms-supabase.git"
        },
        {
            id: 2,
            title: "Todo Application",
            Stack: ["React", "MongoDB", "Express"],
            desc: "Responsive task manager with CRUD operations.",
            fullDesc: "Designed a responsive task manager with CRUD operations and REST APIs.",
            icon: "check-circle",
            gitHubUrl: "https://github.com/Harish222600/TODO-Project-Mern-.git"
        },
        {
            id: 3,
            title: "LE-TECH Symposium",
            Stack: ["HTML", "CSS", "JS", "Bootstrap"],
            desc: "Event website for college symposium.",
            fullDesc: "Built a responsive event website using HTML, CSS, JS, and Bootstrap.",
            icon: "calendar-alt",
            gitHubUrl: "https://github.com/Harish222600/LE-TECH.git"
        },
        {
            id: 4,
            title: "E-Commerce Site",
            Stack: ["React", "Node.js", "Stripe"],
            desc: "Full-featured shopping platform.",
            fullDesc: "Developed product listing, UI components, and shopping cart interface.",
            icon: "shopping-cart",
            gitHubUrl: "https://github.com/Harish222600/beeja-ecom.git"
        },
        {
            id: 5,
            title: "Zoho Event App",
            Stack: ["Zoho Creator", "Deluge"],
            desc: "Event management system (Best Performer Award).",
            fullDesc: "Created an event management system using Zoho Creator and Deluge.",
            icon: "mobile-alt",
            gitHubUrl: "#" // No link provided for this one
        }
    ];

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 25,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.05,   // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <section id="projects" className="section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-title"
            >
                <h2>Featured <span className="accent">Projects</span></h2>
                <div className="title-line"></div>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Tilt key={index} options={defaultOptions} className="project-card-tilt">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="project-card"
                            style={{ height: '100%' }} // Ensure full height for tilt
                        >
                            <div className="card-content">
                                <div className="card-icon">
                                    {/* Placeholder icons, normally you'd map these to actual Icon components */}
                                    <i className={`fas fa-${project.icon}`}></i>
                                </div>
                                <h3>{project.title}</h3>
                                <p className="tech-stack">{project.Stack.join(" • ")}</p>
                                <p>{project.desc}</p>
                                <div className="card-links">
                                    <button onClick={() => setSelectedProject(project)} className="card-btn">
                                        View Details <FaEye />
                                    </button>

                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedProject(null)}>
                                <FaTimes />
                            </button>
                            <div className="modal-body">
                                <div className="modal-img">
                                    <img src={`https://via.placeholder.com/800x600/00f3ff/000000?text=${selectedProject.title}`} alt={selectedProject.title} />
                                </div>
                                <div className="modal-text">
                                    <h2>{selectedProject.title}</h2>
                                    <p>{selectedProject.fullDesc}</p>
                                    <div className="modal-tech">
                                        {selectedProject.Stack.map((tech, i) => (
                                            <span key={i}>{tech}</span>
                                        ))}
                                    </div>
                                    <div className="modal-links">
                                        <a href={selectedProject.gitHubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><FaGithub /> Code</a>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
