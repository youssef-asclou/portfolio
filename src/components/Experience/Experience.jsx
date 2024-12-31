import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";  // Contient les compétences avec icônes et titres
import history from "../../data/history.json";  // Contient les catégories de compétences
import { getImageUrl } from "../../utils"; // Fonction pour obtenir l'URL de l'image

export const Experience = () => {
  // Grouper les compétences par catégorie
  const groupedSkills = history.map(category => {
    return {
      ...category,
      skills: skills.filter(skill => category.skills.includes(skill.title))
    };
  });

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & Skills</h2>
      <div className={styles.content}>
        {/* Affichage des compétences par catégorie */}
        <div className={styles.skills}>
          {groupedSkills.map((category, id) => (
            <div key={id} className={styles.category}>
              {/* <h3 className={styles.categoryTitle}>{category.category}</h3> */}
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillId) => (
                  <div key={skillId} className={styles.skillCard}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                        className={styles.skillImage}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Affichage des expériences professionnelles */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.category} Logo`}
                className={styles.historyItemImage}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.category}`}</h3>
                <ul>
                  {historyItem.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
