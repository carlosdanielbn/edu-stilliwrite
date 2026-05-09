
const englishBtn = document.getElementById('englishBtn');
const spanishBtn = document.getElementById('spanishBtn');

englishBtn.addEventListener('click', () => {
document.getElementById('heroEyebrow').textContent =
'Education Reimagined';

document.getElementById('heroTitle').textContent =
'Learning should inspire curiosity and wonder.';
});

spanishBtn.addEventListener('click', () => {
document.getElementById('heroEyebrow').textContent =
'Educación Reimaginada';

document.getElementById('heroTitle').textContent =
'El aprendizaje debe inspirar curiosidad y asombro.';
});
