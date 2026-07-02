const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach((item) => item.classList.remove('active'));

    const matchingNavLink = document.querySelector(`.nav-links a[href="${link.getAttribute('href')}"]`);

    if (matchingNavLink) {
      matchingNavLink.classList.add('active');
    }
  });
});

document.querySelectorAll('.pin').forEach((pin) => {
  pin.addEventListener('click', () => {
    pin.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.35)' },
        { transform: 'scale(1)' },
      ],
      {
        duration: 350,
        easing: 'ease-out',
      },
    );
  });
});
