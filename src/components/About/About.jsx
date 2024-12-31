import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>AI and Data Science Student</h3>
              <p>
              Master's student in AI and Data Science, passionate 
              about technology and solving complex problems with data-driven solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> Machine Learning & Computer Vision Enthusiast</h3>
              <p>
              Experienced in machine learning, deep learning, and computer vision, with expertise in image processing and translation using libraries like TensorFlow, Keras, and OpenCV.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3> Web Development Skills</h3>
              <p>
             
              Skilled in web development with Django, React, focusing on building multilingual applications and integrating machine learning models for seamless user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
