const ScrollToElement = () => {
  const handleClick = () => {
    const targetElement = document.getElementById('targetElement');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollButton = document.getElementById('scrollButton');
  if (scrollButton) {
    scrollButton.addEventListener('click', handleClick);
  }
};

export default ScrollToElement;
