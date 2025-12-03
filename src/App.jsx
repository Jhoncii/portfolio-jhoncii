import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Cpu, Terminal, Sun, Moon, ArrowLeft, RotateCcw, MonitorPlay, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { content, personalData } from './data/content';

// Estado de navegación:
// 0: Pantalla de Inicio (Start)
// 1: Seleccionar Idioma
// 2: Seleccionar Tema
// 3: Nivel 1: Perfil (About)
// 4: Nivel 2: XP (Experience)
// 5: Nivel 3: Misiones (Project View)
// 6: Game Over (Contact)

function App() {
  const [lang, setLang] = useState('es'); 
  const [darkMode, setDarkMode] = useState(true);
  const [level, setLevel] = useState(0); 
  const [projectIndex, setProjectIndex] = useState(0);

  const t = content[lang]; 

  // --- Handlers Globales ---
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    window.scrollTo(0, 0); 
  };

  const handlePreviousLevel = () => {
    if (level > 1) {
      handleLevelChange(level - 1);
      if (level === 5) setProjectIndex(0); 
    } else if (level === 1) {
      handleLevelChange(0);
    }
  };

  const restartGame = () => {
    setLevel(0);
    setLang('es');
    setDarkMode(true);
    setProjectIndex(0);
    document.documentElement.classList.add('dark');
  };
  
  // Componente de Botón Retro
  const RetroButton = ({ children, onClick, className = "" }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 border-4 font-bold text-2xl tracking-widest uppercase transition-all w-fit 
      ${darkMode 
        ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' 
        : 'border-black text-black hover:bg-black hover:text-white'} 
      ${className}`}
    >
      {children}
    </motion.button>
  );

  // --- Renderizado de Contenido por Nivel ---
  const renderContent = () => {
    const animationProps = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
        transition: { duration: 0.5 }
    };

    switch(level) {
      // ----------------------------------------------------
      // NIVEL 0: Pantalla de Inicio
      // ----------------------------------------------------
      case 0:
        return (
          <motion.div 
            key="level-0"
            {...animationProps}
            className="text-center space-y-8 min-h-screen flex flex-col justify-center"
          >
            <div className={`text-6xl md:text-8xl mb-4 font-black 
              ${darkMode ? 'text-green-500 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'text-black'}`}>
              PORTFOLIO
            </div>
            <p className={`text-2xl md:text-3xl blinking-cursor`}>
              v1.0.0 | {personalData.name}
            </p>
            <div className="pt-10">
              <RetroButton onClick={() => handleLevelChange(1)}>
                {t.hero.start}
              </RetroButton>
            </div>
          </motion.div>
        );

      // ----------------------------------------------------
      // NIVEL 1: Selección de Idioma
      // ----------------------------------------------------
      case 1:
        return (
          <motion.div 
            key="level-1"
            {...animationProps}
            className="text-center space-y-8 min-h-[50vh] flex flex-col justify-center" 
          >
            <h2 className="text-4xl mb-8">{t.hero.selectLang}</h2>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <RetroButton onClick={() => { setLang('es'); handleLevelChange(2); }}>
                ESPAÑOL
              </RetroButton>
              <RetroButton onClick={() => { setLang('en'); handleLevelChange(2); }}>
                ENGLISH
              </RetroButton>
            </div>
          </motion.div>
        );

      // ----------------------------------------------------
      // NIVEL 2: Selección de Tema
      // ----------------------------------------------------
      case 2:
        return (
          <motion.div 
            key="level-2"
            {...animationProps}
            className="text-center space-y-8 min-h-[50vh] flex flex-col justify-center" 
          >
            <h2 className="text-4xl mb-8">{t.hero.selectTheme}</h2>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <RetroButton onClick={() => { setDarkMode(false); handleLevelChange(3); }}>
                <Sun size={32} className="inline ml-2" />
              </RetroButton>
              <RetroButton onClick={() => { setDarkMode(true); handleLevelChange(3); }}>
                <Moon size={32} className="inline ml-2" />
              </RetroButton>
            </div>
          </motion.div>
        );

      // ----------------------------------------------------
      // NIVEL 3: Perfil (About)
      // ----------------------------------------------------
case 3:
  return (
    <motion.section 
      key="level-3"
      {...animationProps}
      className="space-y-8 py-10"
    >
      <h1 className="text-5xl md:text-7xl mb-4 border-l-4 pl-4 border-green-500">
          {t.nav.about}
      </h1>
      
      {/* --- LÍNEA AGREGADA: TÍTULO PROFESIONAL --- */}
      <h2 className="text-3xl md:text-5xl opacity-80 mb-8 flex items-center gap-2">
          <Code /> {t.hero.role} 
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className={`p-6 border-2 ${darkMode ? 'border-green-800 bg-gray-800/50' : 'border-gray-300 bg-white'}`}>
          <h4 className="text-2xl mb-4 underline decoration-wavy">BIO</h4>
          <p className="text-xl leading-relaxed">{t.about.objective}</p>
          
          <h4 className="text-2xl mt-6 mb-2 underline decoration-wavy uppercase">{t.about.hobbiesTitle}</h4>
          <div className="flex flex-wrap gap-3">
            {t.about.hobbies.map(hobby => (
              <span key={hobby} className={`px-2 py-1 text-base border ${darkMode ? 'border-green-700 bg-green-900' : 'border-gray-500 bg-gray-200'}`}>
                {hobby}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl mb-4 flex items-center gap-2"><Cpu /> SKILL TREE</h4>
          <div className="flex flex-wrap gap-3">
            {personalData.skills.map((skill) => (
              <motion.div 
                key={skill}
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-2 text-xl font-bold border-2 shadow-[4px_4px_0px_0px] 
                  ${darkMode 
                    ? 'border-green-500 shadow-green-700 bg-gray-900' 
                    : 'border-black shadow-gray-400 bg-white'}`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          
          <h4 className="text-2xl mt-8 mb-4 uppercase">{t.about.softSkillsTitle}</h4>
          <ul className="list-disc list-inside text-xl space-y-2">
            {t.about.softSkills.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </motion.section>
  );

      // ----------------------------------------------------
      // NIVEL 4: Experiencia (XP)
      // ----------------------------------------------------
      case 4:
        return (
          <motion.section 
            key="level-4"
            {...animationProps}
            className="space-y-8 py-10"
          >
            <h1 className="text-5xl md:text-7xl mb-8 border-l-4 pl-4 border-green-500">
                {t.nav.exp}
            </h1>

            <div className="space-y-6">
              {t.experience.jobs.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-6 border-l-4 ${darkMode ? 'border-green-500 bg-gray-800' : 'border-black bg-white'}`}
                >
                  <h4 className="text-3xl font-bold">{job.role}</h4>
                  <p className="text-xl opacity-80 mb-2">{job.company}</p>
                  <p className="text-lg">{job.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        );

      // ----------------------------------------------------
      // NIVEL 5: Proyectos (Misiones - Vista Individual)
      // ----------------------------------------------------
      case 5:
        const currentProject = personalData.projects[projectIndex];
        const totalProjects = personalData.projects.length;

        return (
          <motion.section 
            key="level-5"
            {...animationProps}
            className="space-y-8 py-10"
          >
            <h1 className="text-5xl md:text-7xl mb-8 border-l-4 pl-4 border-green-500 flex items-center gap-4">
                {t.nav.projects} 
                <span className="text-2xl opacity-70">({projectIndex + 1}/{totalProjects})</span>
            </h1>

            <motion.div
                key={projectIndex} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-8 border-4 relative ${darkMode ? 'border-green-500 bg-gray-900' : 'border-black bg-white'}`}
            >
                <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                    <MonitorPlay size={36} /> {currentProject.name}
                </h2>
                <p className="text-2xl mb-4 opacity-70">
                    {lang === 'es' ? currentProject.descEs : currentProject.descEn}
                </p>
                <p className="text-xl mb-6 border-b pb-4">
                    **Tech Stack:** {currentProject.tech}
                </p>

                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                    <button 
                        onClick={() => setProjectIndex(prev => (prev - 1 + totalProjects) % totalProjects)} 
                        className={`text-2xl p-4 border-2 hover:bg-opacity-20 flex items-center w-full md:w-auto ${darkMode ? 'border-green-500' : 'border-black'}`}
                    >
                        <ChevronLeft size={30} className="mr-2" /> {lang === 'es' ? 'Anterior Misión' : 'Previous Quest'}
                    </button>
                    
                    {currentProject.repo && (
                        <a href={currentProject.repo} target="_blank" rel="noreferrer" 
                           className={`text-2xl p-4 border-2 hover:invert transition-all flex-1 text-center w-full md:w-auto 
                           ${darkMode ? 'border-green-500' : 'border-black'}`}>
                            {t.projects.viewRepo}
                        </a>
                    )}
                    {currentProject.demo && (
                        <a href={currentProject.demo} target="_blank" rel="noreferrer"
                           className={`text-2xl p-4 border-2 flex-1 text-center font-bold bg-opacity-20 transition-all w-full md:w-auto
                           ${darkMode ? 'bg-green-500 text-white hover:bg-green-700' : 'bg-black text-white hover:bg-gray-800'}`}>
                            {t.projects.viewDemo}
                        </a>
                    )}
                    <button 
                        onClick={() => setProjectIndex(prev => (prev + 1) % totalProjects)} 
                        className={`text-2xl p-4 border-2 hover:bg-opacity-20 flex items-center w-full md:w-auto ${darkMode ? 'border-green-500' : 'border-black'}`}
                    >
                        {lang === 'es' ? 'Siguiente Misión' : 'Next Quest'} <ChevronRight size={30} className="ml-2" />
                    </button>
                </div>
            </motion.div>
          </motion.section>
        );

      // ----------------------------------------------------
      // NIVEL 6: Contacto (Game Over)
      // ----------------------------------------------------
      case 6:
        return (
          <motion.section 
            key="level-6"
            {...animationProps}
            className="py-20 text-center space-y-12"
          >
            <h2 className="text-5xl md:text-7xl animate-pulse">{t.contact.title}</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
               <RetroButton onClick={() => window.open(personalData.linkedinUrl, '_blank')}>
                  <Linkedin size={32} className="inline mr-2" /> LinkedIn
               </RetroButton>
               <RetroButton onClick={() => window.location.href = `mailto:${personalData.email}`}>
                  <Mail size={32} className="inline mr-2" /> Email
               </RetroButton>
               <RetroButton onClick={() => window.open(personalData.githubUrl, '_blank')}>
                  <Github size={32} className="inline mr-2" /> Github
               </RetroButton>
            </div>
          </motion.section>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen font-retro transition-colors duration-500`}>
      
      {/* HUD de Navegación */}
      {level >= 3 && (
        <nav className={`sticky top-0 z-50 border-b-4 p-4 flex justify-between items-center flex-wrap gap-4
          ${darkMode ? 'bg-gray-900 border-green-500' : 'bg-gray-100 border-black'}`}>
          
          <span className="text-2xl font-bold flex items-center gap-2">
            <Terminal size={24} /> {personalData.name}
          </span>
          
          <div className="flex gap-4 text-xl">
             {/* Botón de Nivel Anterior */}
             <button 
                onClick={handlePreviousLevel} 
                className="flex items-center hover:underline"
             >
                <ArrowLeft size={20} className="mr-1" /> {lang === 'es' ? 'Anterior' : 'Back'}
             </button>
             
             {/* Botón de Reiniciar Juego */}
             <button 
                onClick={restartGame} 
                className="flex items-center hover:underline"
             >
                <RotateCcw size={20} className="mr-1" /> {lang === 'es' ? 'Reiniciar Juego' : 'Restart Game'}
             </button>
             
             {/* Indicador de Nivel Actual */}
             <span className="font-bold border-l pl-4 ml-4">
                {level === 3 ? t.nav.about : level === 4 ? t.nav.exp : level === 5 ? t.nav.projects : t.nav.contact}
             </span>
          </div>
        </nav>
      )}

      <main className="max-w-5xl mx-auto p-6">
        <AnimatePresence mode="wait">
            {renderContent()}
        </AnimatePresence>
        
        {/* Botón de Continuar para avanzar a la siguiente sección (Niveles 3, 4, 5) */}
        {(level === 3 || level === 4 || level === 5) && (
            <div className="text-center py-10">
                <RetroButton onClick={() => handleLevelChange(level + 1)} className="min-w-[300px]">
                    {level === 3 ? t.nav.exp : level === 4 ? t.nav.projects : t.nav.contact} 
                    {lang === 'es' ? ' | Continuar' : ' | Continue'}
                </RetroButton>
            </div>
        )}

      </main>
      
      {/* Footer actualizado */}
      {(level >= 3) && (
          <footer className={`p-4 text-center border-t-4 mt-10 text-sm 
              ${darkMode ? 'border-green-500' : 'border-black'}`}>
              © 2025 Jhoncii Entertainment.
          </footer>
      )}
    </div>
  );
}

export default App;