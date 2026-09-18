const chapterMenu = document.querySelector('.chapter-menu');
chapterMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => { chapterMenu.open = false; });
});

const notes = document.getElementById('translation-notes');
function revealNotes() {
  if (!notes || !location.hash) return;
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (target !== notes && !notes.contains(target)) return;
  notes.open = true;
  target.scrollIntoView({block: 'start'});
  if (target !== notes) target.focus({preventScroll: true});
}
document.querySelectorAll('[data-note-link], a[href="#translation-notes"]').forEach(link => {
  link.addEventListener('click', () => { if (notes) notes.open = true; });
});
window.addEventListener('hashchange', revealNotes);
revealNotes();
