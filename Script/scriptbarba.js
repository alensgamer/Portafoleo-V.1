import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';

barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 1
        });
      },
          opacity: 0
        });
      }
    }]
  });