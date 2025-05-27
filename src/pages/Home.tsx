import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {/* Développeur, Administrateur Systéme et Réseau */}
            Mohammet FALL
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Etudiant en Licence 3 genie logiciel et systeme d'information à l'Ecole Superieure Polytechnique de DAKAR (ESP). Passionné par le developpement , la cybersécurité et l'administration des Systémes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Me contacter
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link 
              to="/experience" 
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors"
            >
              Voir mes projets
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Mes compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Programmation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Création d'interfaces utilisateur modernes et réactives avec les dernières technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Html CSS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">PHP</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Laravel</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Node</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">C</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">UML</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Git/Github</span>


              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Server className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Systeme & Reseaux</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {/* Développement de serveurs robustes et d'APIs performantes pour alimenter vos applications. */}
                Mise en place d'une infrastructure réseau sécurisée et performante.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Maitrise de l'environnement Linux</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Windows Server 2022</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">GNS3</span>
                {/* <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Packet Tracer</span> */}
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">DNS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">WEB</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">FTP</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">RDP</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">VNC/NoVNC</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Vmware</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Virtual Box</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">SSH</span>





                {/* <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Windows Server 2022</span> */}

                {/* <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">API REST</span> */}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Base de données</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Conception et optimisation de bases de données pour stocker et gérer efficacement vos données.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">MariaDB</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">XAMP, WAMP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projets récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Plateforme Credit-Ease</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Une plateforme complete permettant aux clients d'une banque de faire des demandes de crédit en ligne et de suivre l'avancement .
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Laravel</span>
                  {/* <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Node.js</span> */}
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">MySQL</span>
                </div>
                <Link 
                  to="/experience" 
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
                >
                  Voir les détails
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Projet Services Reseaux</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Développement et Déploiement d’une Plateforme Web avec Intégration des Services Réseaux et Accès Distant                 </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Ubuntu</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Windows</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">FTP WEB DNS MySQL SSH</span>
                </div>
                <Link 
                  to="/experience" 
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
                >
                  Voir les détails
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;