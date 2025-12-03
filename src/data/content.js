// src/data/content.js
export const content = {
  es: {
    nav: {
      about: "Nivel 1: Perfil",
      exp: "Nivel 2: XP",
      projects: "Nivel 3: Misiones",
      contact: "Game Over",
      miniGame: "Bonus Stage"
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Frontend & Web Apps",
      start: "PRESIONA START PARA INICIAR",
      selectLang: "SELECCIONA IDIOMA (Idioma)",
      selectTheme: "SELECCIONA MODO (Claro/Oscuro)",
    },
    about: {
      title: "ESTADÍSTICAS DEL JUGADOR",
      objective: "Consolidar mi trayectoria en el desarrollo de software aportando valor mediante conocimiento técnico e innovación. Busco diseñar soluciones que automaticen procesos y mejoren la experiencia de usuario.",
      softSkillsTitle: "Habilidades Blandas", // <--- TRADUCIDO
      softSkills: ["Comunicación", "Trabajo en Equipo", "Pensamiento Crítico", "Resolución de Problemas", "Creatividad"],
      hobbiesTitle: "Pasatiempos", // <--- TRADUCIDO
      hobbies: ["Fútbol", "Basketball", "Videojuegos"]
    },
    experience: {
      title: "HISTORIAL DE MISIONES (XP)",
      challenge: "Desafío: Responder Correctamente para Acceder al Siguiente Nivel.", // <--- NUEVO
      jobs: [
        {
          company: "Marfiro Seg S.A.",
          role: "Prestador de Servicios (Actual)",
          desc: "Desarrollo y análisis de datos con Metabase para Business Intelligence. Desarrollo de la página web corporativa en WordPress."
        },
        {
          company: "Marfiro Seg S.A.",
          role: "Prácticas Preprofesionales",
          desc: "Apoyo en sistemas y gestión de tecnología durante 6 meses."
        }
      ]
    },
    projects: {
      title: "INVENTARIO DE PROYECTOS",
      viewRepo: "Ver Código",
      viewDemo: "Jugar Demo"
    },
    contact: {
      title: "GAME OVER - CONTINUAR?",
      email: "Enviar Correo",
      linkedin: "Conectar en LinkedIn",
      github: "Ver GitHub"
    }
  },
  en: {
    nav: {
      about: "Lvl 1: Profile",
      exp: "Lvl 2: XP",
      projects: "Lvl 3: Quests",
      contact: "Game Over",
      miniGame: "Bonus Stage"
    },
    hero: {
      greeting: "Hi, I am",
      role: "Frontend & Web App Developer",
      start: "PRESS START TO BEGIN",
      selectLang: "SELECT LANGUAGE (Language)",
      selectTheme: "SELECT MODE (Light/Dark)",
    },
    about: {
      title: "PLAYER STATS",
      objective: "To consolidate my career in software development by providing value through technical knowledge and innovation. I seek to design solutions that automate processes and improve user experience.",
      softSkillsTitle: "Soft Skills", 
      softSkills: ["Communication", "Teamwork", "Critical Thinking", "Problem Solving", "Creativity"],
      hobbiesTitle: "Hobbies", 
      hobbies: ["Soccer", "Basketball", "Video Games"]
    },
    experience: {
      title: "MISSION LOG (XP)",
      challenge: "Challenge: Answer Correctly to Access the Next Level.", 
      jobs: [
        {
          company: "Marfiro Seg S.A.",
          role: "Service Provider (Current)",
          desc: "Data analysis and development with Metabase for Business Intelligence. Development of the corporate website using WordPress."
        },
        {
          company: "Marfiro Seg S.A.",
          role: "Internship",
          desc: "IT support and technology management for 6 months."
        }
      ]
    },
    projects: {
      title: "PROJECT INVENTORY",
      viewRepo: "View Code",
      viewDemo: "Play Demo"
    },
    contact: {
      title: "GAME OVER - CONTINUE?",
      email: "Send Email",
      linkedin: "Connect on LinkedIn",
      github: "View GitHub"
    }
  }
};

export const personalData = {
  name: "John Peña (Jhoncii)",
  email: "johnpenia28@gmail.com",
  githubUrl: "https://github.com/Jhoncii",
  linkedinUrl: "https://ec.linkedin.com/in/john-pe%C3%b1a-762325271",
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Next.js", "React", "Angular", "Vue.js", "NestJS", "Express.js"],
  projects: [
    {
      name: "Valentine Day",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/Jhoncii/Valentine-s-Day",
      demo: "https://valentine-s-day-rose.vercel.app",
      descEs: "Detalle especial interactivo por San Valentín.",
      descEn: "Interactive special detail for Valentine's Day."
    },
    {
      name: "Flores Amarillas",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/Jhoncii/Flores-Amarillas",
      demo: "https://flores-amarillas-beta.vercel.app",
      descEs: "Animación y detalle temático de flores amarillas.",
      descEn: "Animation and thematic detail of yellow flowers."
    },
    {
      name: "Sistema de Amortización",
      tech: "Next.js, Supabase",
      repo: "https://github.com/JosephCargua/Payment-schedule",
      demo: null,
      descEs: "Simulación financiera para créditos e inversiones.",
      descEn: "Financial simulation for credits and investments."
    },
    {
      name: "Seguridad AES",
      tech: "Next.js, Crypto",
      repo: "https://github.com/KevinVichi/repoSeguroFront",
      demo: null,
      descEs: "Encriptación extremo a extremo con roles.",
      descEn: "End-to-end encryption with user roles."
    },
    {
      name: "Alquiler Vehículos",
      tech: "Angular, Express",
      repo: "https://github.com/Thetander/Alquiler_vehiculo_frontend",
      demo: null,
      descEs: "Plataforma completa de gestión de rentas.",
      descEn: "Complete car rental management platform."
    },
    {
      name: "Marfiro Seguros",
      tech: "WordPress, Web",
      repo: null,
      demo: "https://marfiroseguros.com",
      descEs: "Sitio corporativo empresarial en producción.",
      descEn: "Corporate business website currently in production."
    }
  ]
};
