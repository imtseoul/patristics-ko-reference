const chapterMenu = document.querySelector('.chapter-menu');
chapterMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => { chapterMenu.open = false; });
});

const notes = document.getElementById('translation-notes');
function revealNotes() {
  if (notes && location.hash === '#translation-notes') notes.open = true;
}
document.querySelector('a[href="#translation-notes"]')?.addEventListener('click', () => {
  notes.open = true;
});
window.addEventListener('hashchange', revealNotes);
revealNotes();
