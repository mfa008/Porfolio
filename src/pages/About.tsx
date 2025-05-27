import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">À propos de moi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="bg-gray-200 dark:bg-gray-700 h-64 md:h-full rounded-lg overflow-hidden">
              <img 
                src="https://img.freepik.com/psd-gratuit/hacker-utilisant-ordinateur-dans-piece-sombre-concept-cybercrime-rendering-3d_1142-61489.jpg?semt=ais_hybrid&w=740" 
                alt="Portrait professionnel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
          
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Développeur Full Stack passionné avec une solide expérience dans la création d'applications web modernes et performantes. 
              Je combine créativité et expertise technique pour transformer des idées en solutions digitales innovantes.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Mon parcours m'a permis d'acquérir une expertise approfondie dans le développement , 
              ainsi que dans la conception de bases de données et l'architecture de systèmes.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Je suis constamment à la recherche de nouveaux défis et opportunités pour élargir mes compétences 
              et contribuer à des projets qui ont un impact positif.
            </p>
          </div>
        </div>
        
        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Expérience professionnelle
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Stagiaire en developpement web</h3>
                  <p className="text-gray-600 dark:text-gray-400">Orabank-Senegal</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Mai 2024 - Juin 2024</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Développement d'une plateforme permettant aux clients de la banque de faire des demandes de credits et de suivre l'etat de leurs demandes.
              </p>
            </div>
            
            {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Développeur Front-end</h3>
                  <p className="text-gray-600 dark:text-gray-400">Agence Web Créative</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2018 - 2020</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Création d'interfaces utilisateur réactives et accessibles pour divers clients.
                Implémentation de designs complexes avec HTML, CSS et JavaScript.
                Optimisation des performances et de l'expérience utilisateur sur différents appareils.
              </p>
            </div> */}
          </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Formation
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Licence en genie logiciel et Systeme d'information</h3>
                  <p className="text-gray-600 dark:text-gray-400">Ecole Superieure Polytechnique (ESP)</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2024 - 2025</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Spécialisation en développement web et applications mobiles.
                Projets de groupe sur des technologies émergentes.
                Mémoire sur l'optimisation des performances des applications web.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Diplome Supérieure de Technologie en INFORMATIQUE</h3>
                  <p className="text-gray-600 dark:text-gray-400">Ecole Superieure Polytechnique</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2022 - 2024</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Fondamentaux de la programmation et des algorithmes.
                Introduction aux bases de données et aux réseaux.
                Projets pratiques en développement logiciel.
              </p>
            </div>
          </div>
        </section>
        
        {/* Skills & Certifications */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Compétences et certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Compétences techniques</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Langages de programmation</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">PHP</span>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Frameworks & Bibliothèques</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Vue.js</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Express</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Django</span>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Outils & Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Git</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Docker</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">AWS</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">AWS Certified Developer</p>
                  <p className="text-gray-600 dark:text-gray-400">Amazon Web Services, 2022</p>
                </div>
                
                <div>
                  <p className="font-medium">Professional Scrum Master I</p>
                  <p className="text-gray-600 dark:text-gray-400">Scrum.org, 2021</p>
                </div>
                
                <div>
                  <p className="font-medium">MongoDB Certified Developer</p>
                  <p className="text-gray-600 dark:text-gray-400">MongoDB, 2020</p>
                </div>
                
                <div>
                  <p className="font-medium">React Developer Certification</p>
                  <p className="text-gray-600 dark:text-gray-400">Meta, 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        {/* Interests */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Centres d'intérêt
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              En dehors du développement, je m'intéresse à diverses activités qui nourrissent ma créativité et mon bien-être :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Documentaire</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Capturer des moments et explorer de nouvelles perspectives</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Anime/Film</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Explorer la nature et découvrir de nouveaux paysages</p>
              </div>
              
              {/* <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Lecture</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Science-fiction, développement personnel et technologie</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Musique</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Jouer de la guitare et découvrir de nouveaux genres</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Cuisine</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Expérimenter de nouvelles recettes et techniques</p>
              </div> */}
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Nouvelles technologies</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Suivre les dernières innovations et tendances</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;