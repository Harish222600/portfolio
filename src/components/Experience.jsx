import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaUserTie } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            year: "2025",
            title: "Full Stack Developer Intern",
            company: "Beeja Innovative Ventures",
            desc: [
                "Engineered LMS modules using React.js, Node.js, Express.js, and MongoDB.",
                "Implemented secure JWT authentication and improved API performance.",
                "Integrated Cloudinary and Supabase for efficient media and data storage."
            ],
            icon: <FaBriefcase />,
            color: "#00f3ff",
            tech: ["React", "Node", "Mongo"]
        },
        {
            year: "2024",
            title: "Vice President",
            company: "Department Association (BCA)",
            desc: [
                "Organized academic events and led student groups.",
                "Managed team coordination and event planning."
            ],
            icon: <FaUserTie />,
            color: "#7000ff",
            tech: ["Leadership", "Management"]
        },
        {
            year: "2023",
            title: "Event Organizer",
            company: "College Symposium",
            desc: [
                "Coordinated department level events and logistics.",
                "Managed participants and event flow."
            ],
            icon: <FaUsers />,
            color: "#ff00e6",
            tech: ["Event Mgmt", "Coordination"]
        },
        {
            year: "2022",
            title: "Discipline Committee Member",
            company: "Student Council",
            desc: [
                "Managed discipline and event flow during college events."
            ],
            icon: <FaGraduationCap />,
            color: "#00ff88",
            tech: ["Discipline"]
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="experience" className="section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-title"
            >
                <h2>My <span className="accent">Journey</span></h2>
                <div className="title-line"></div>
            </motion.div>

            <div className="cyber-grid">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        variants={cardVariants}
                        className="cyber-card"
                        style={{ '--card-color': exp.color }}
                    >
                        <div className="cyber-card-header">
                            <div className="cyber-icon" style={{ color: exp.color }}>
                                {exp.icon}
                            </div>
                            <span className="cyber-date">{exp.year}</span>
                        </div>

                        <div className="cyber-card-body">
                            <h3 style={{ color: exp.color }}>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <ul>
                                {exp.desc.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Aesthetic Elements */}
                        <div className="cyber-decoration top-right"></div>
                        <div className="cyber-decoration bottom-left"></div>
                        <div className="scanline"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
