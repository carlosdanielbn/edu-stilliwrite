const translations = {
en: {
hero_title: "Learning should inspire curiosity and wonder.",
hero_subtitle: "A modern educational platform designed for children.",
nav_grades: "Grades",
nav_subjects: "Subjects",
nav_accessibility: "Accessibility",
grades_title: "Elementary Grades",
subjects_title: "Subjects",
access_title: "Accessibility Tools"
},

es: {
hero_title: "El aprendizaje debe inspirar curiosidad y asombro.",
hero_subtitle: "Una plataforma educativa moderna diseñada para niños.",
nav_grades: "Grados",
nav_subjects: "Materias",
nav_accessibility: "Accesibilidad",
grades_title: "Grados de Primaria",
subjects_title: "Materias",
access_title: "Herramientas de Accesibilidad"
}
};

let currentLang = "en";

function setLang(lang){
currentLang = lang;
document.querySelectorAll("[data-i18n]").forEach(el=>{
el.textContent = translations[lang][el.dataset.i18n];
});
}

window.onload = ()=>setLang("en");