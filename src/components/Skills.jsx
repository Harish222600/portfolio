import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <FaCode />,
            skills: ["React.js", "HTML", "CSS", "Bootstrap", "Angular", "JavaScript"]
        },
        {
            title: "Backend Development",
            icon: <FaServer />,
            skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Java", "Python"]
        },
        {
            title: "Database & Cloud",
            icon: <FaDatabase />,
            skills: ["MongoDB", "SQL", "AWS EC2", "AWS S3", "Supabase", "Cloudinary"]
        },
        {
            title: "Tools & DevOps",
            icon: <FaTools />,
            skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "NPM"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-title"
            >
                <h2>Technical <span className="accent">Skills</span></h2>
                <div className="title-line"></div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="skills-container"
            >
                {skillCategories.map((category, index) => (
                    <motion.div key={index} variants={itemVariants} className="skill-category">
                        <h3>{category.icon} {category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
