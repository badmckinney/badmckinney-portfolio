const highlightActiveLink = (location) => {
  const links = document.querySelectorAll('.nav-item');

  links.forEach(link => {
    if (link.id === location) {
      link.classList.add('selected');
    } else {
      link.classList.remove('selected');
    }
  });
}

export default highlightActiveLink;