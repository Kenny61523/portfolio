import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import  selfieImage  from "../assets/about_me.jpg";



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px]
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <>
      <div className={`relative w-full max-w-7xl mx-auto`}> {/*${styles.paddingX} */}
        {/* Header container with flex layout */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text container */}
          <motion.div variants={textVariant()} className="flex flex-col">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>

          {/* Image container */}
          <div className="mt-4 md:mt-0">
            <img src={selfieImage} 
            alt="Kenny"
            className="rounded-full w-32 h-32 object-cover"/>
          </div>
        </div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled full-stack software developer with experience 
            in Java, C, C++, Ruby, MySQL, HTML, JavaScript, TypeScript,
            and expertise in frameworks like React, Node.js, and Three.js.
        </motion.p>

        

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); // higher order function