function chale(){
    let ancho=document.getElementsByClassName("mueble");
    console.log(ancho)
    let newancho=console.log(ancho[0].clientWidth)
    newancho=500;
    console.log(newancho)
}
console.log("pq entras en mi codigo? 📸🧐")




barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });
