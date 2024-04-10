// first try to make ScrollToElement, not using this file

export const ScrollToElement = () => {
  if (typeof window !== 'undefined') {
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
  }
};

export const ScrollToProject = () => {
  if (typeof window !== 'undefined') {
    const handleClick = () => {
      const targetProject = document.getElementById('targetProject');
      if (targetProject) {
        targetProject.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollButton = document.getElementById('scrollProject');
    if (scrollButton) {
      scrollButton.addEventListener('click', handleClick);
    }
  }
};
