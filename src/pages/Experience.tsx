import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Tag } from 'lucide-react';

const Experience: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Plateforme CreditEase",
      description: "Une plateforme complète qui permet aux clients d'une banque de faire des demandes de credit en ligne et de suivre l'etat de leurs demandes.",
      image: "https://img.freepik.com/photos-gratuite/portrait-ingenieur-travaillant-terrain-pour-celebration-journee-ingenieurs_23-2151615096.jpg?semt=ais_hybrid&w=740", 
      technologies: ["Laravel", "Mysql", "Bootstrap"],
      role: "Développeur Full Stack",
      team: "Solo",
      date: "2023 - 2024",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Plateforme de gestion des parrainages de candidature à l'élection présidentielles. ",
      description: "L'objectif est de simplifier et de sécuriser le processus de parrainage en permettant aux citoyens de soutenir leurs candidats en ligne, tout en offrant aux administrateurs un outil complet pour gérer les électeurs, les candidats et les parrainages.",
      image: "data:image/jpeg;base64,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",
      technologies: ["Laravel", "MySql"],
      role: "Développeur Back-end ",
      team: "Équipe de 5 personnes",
      date: "2025",
      link: "https://vooz.alwaysdata.net/",
      github: "https://github.com/maodoss/SGBD"
    },
    {
      id: 3,
      title: "Plateforme de Gestion d'Intervention Chirurgicale",
      description: "Plateforme web permettant aux hôpitaux de trouver rapidement des chirurgiens spécialisés et aux chirurgiens de gérer leurs interventions. Solution centralisée pour optimiser la planification opératoire. ",
      image: "https://img.freepik.com/photos-gratuite/medecin-travaillant-ordinateur-portable-vierge_23-2148757409.jpg?semt=ais_hybrid&w=740",
      technologies: ["Laravel", "MySQL"],
      role: "Devellopeur Back-end",
      team: "Équipe de 5 personnes",
      date: "2025",
      link: "#",
      github: "#"
    },
    // {
    //   id: 4,
    //   title: "Application de Suivi Fitness",
    //   description: "Application mobile pour suivre les activités sportives, la nutrition et les progrès personnels. Intégration avec des appareils connectés et visualisation de données.",
    //   image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    //   technologies: ["React Native", "Firebase", "GraphQL", "TensorFlow.js"],
    //   role: "Développeur Mobile",
    //   team: "Équipe de 3 personnes",
    //   date: "2020",
    //   link: "#",
    //   github: "#"
    // },
    // {
    //   id: 5,
    //   title: "Plateforme d'Apprentissage en Ligne",
    //   description: "Système de gestion de contenu éducatif avec cours vidéo, quiz interactifs et suivi de progression. Fonctionnalités sociales et système de certification.",
    //   image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
    //   technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS S3"],
    //   role: "Développeur Full Stack",
    //   team: "Équipe de 6 personnes",
    //   date: "2019 - 2020",
    //   link: "#",
    //   github: "#"
    // }
  ];

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Projets & Expériences</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Découvrez une sélection de mes projets récents et des expériences qui ont façonné mon parcours professionnel.
          Chaque projet représente un défi unique et une opportunité d'apprentissage.
        </p>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="h-64 md:h-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="md:w-3/5 p-6">
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm flex items-center">
                        <Tag size={14} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{project.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users size={16} className="mr-2" />
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center"
                    >
                      Voir le projet
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                    
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors flex items-center"
                    >
                      Code source
                      <Github size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;