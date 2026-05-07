/**
 * scrollToSection.js — place in src/utils/
 * Scrolls to a section by ID without adding # to the URL.
 * If called from outside the home page, navigates home first then scrolls.
 */
export function scrollToSection(id, navigate, location) {
  if (location.pathname !== '/') {
    navigate('/', { state: { scrollTo: id } });
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}