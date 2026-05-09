
const translations = {
en:{
nav_grades:"Grades",
nav_subjects:"Subjects",
nav_accessibility:"Accessibility",
nav_future:"Future",
hero_eyebrow:"Education Reimagined",
hero_title:"Learning should inspire curiosity and wonder.",
hero_description:"A cinematic educational platform focused on accessibility, multilingual learning, and beautifully designed educational experiences.",
explore_btn:"Explore Grades",
accessibility_btn:"Accessibility Tools",
mission_title:"Education should feel inspiring, calm and human.",
mission_description:"Built to support curiosity, accessibility, science, creativity and inclusive learning experiences for every child.",
grades_title:"Structured elementary education.",
grades_description:"Every grade is organized carefully to support growth, exploration and long-term educational foundations.",
subjects_title:"Knowledge organized beautifully.",
accessibility_title:"Universal accessibility matters.",
accessibility_description:"Accessibility is not an extra feature. It is a core foundation of this platform.",
future_title:"A future educational ecosystem.",
future_description:"Interactive lessons, AI educational assistance, science simulations, narration systems and immersive learning experiences."
},
es:{
nav_grades:"Grados",
nav_subjects:"Materias",
nav_accessibility:"Accesibilidad",
nav_future:"Futuro",
hero_eyebrow:"Educación Reimaginada",
hero_title:"El aprendizaje debe inspirar curiosidad y asombro.",
hero_description:"Una plataforma educativa cinematográfica enfocada en accesibilidad, aprendizaje multilingüe y experiencias educativas hermosas.",
explore_btn:"Explorar Grados",
accessibility_btn:"Herramientas de Accesibilidad",
mission_title:"La educación debe sentirse inspiradora, calmada y humana.",
mission_description:"Construida para apoyar la curiosidad, la accesibilidad, la ciencia, la creatividad y experiencias inclusivas.",
grades_title:"Educación primaria estructurada.",
grades_description:"Cada grado está cuidadosamente organizado para apoyar el crecimiento y la exploración.",
subjects_title:"Conocimiento organizado hermosamente.",
accessibility_title:"La accesibilidad universal importa.",
accessibility_description:"La accesibilidad no es una función extra. Es una base central de esta plataforma.",
future_title:"Un ecosistema educativo del futuro.",
future_description:"Lecciones interactivas, asistencia educativa con IA, simulaciones científicas y experiencias inmersivas."
}
};

function setLanguage(lang){
document.querySelectorAll('[data-i18n]').forEach(el=>{
el.textContent = translations[lang][el.dataset.i18n];
});
}

window.onload=()=>setLanguage('en');
