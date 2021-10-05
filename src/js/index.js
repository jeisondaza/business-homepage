const scrolled = document.querySelectorAll('.noShow');
for (const item of scrolled) {
    item.classList.remove('scrolled');
}

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    console.log(entries);
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('scrolled');
        return;
      }
    });
  });
  for (const item of scrolled) {
      observer.observe(item);
  }