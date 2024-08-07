function animateText(textArea) {
    let text = textArea.value;
    let to = text.length,
      from = 0;

    animate({
      duration: 5000,
      timing: bounce,
      draw: function(progress) {
        let result = (to - from) * progress + from;
        textArea.value = text.slice(0, Math.ceil(result))
      }
    });
  }


  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }


  var Slider = document.querySelector(".slider");
  var IconoDerecho = document.querySelector(".icono-derecho");
  var IconoIzuierdo = document.querySelector(".icono-izquierdo");
  var Imagenes = document.querySelectorAll(".img-slider").length;
  Contador = 0;
  
  function MoverSlider()
    {
      if(Contador > Imagenes - 1)
          {
            Contador = 0;
          } else if(Contador < 0)
                     {
                      Contador =  Imagenes - 1;
                     }
      Slider.style.transition = "all 1s ease"
      Slider.style.marginLeft = `-${100 * Contador}%`;
    }
  
  function MoverDerecha()
    {
       Contador++;
       MoverSlider();
    }
  IconoDerecho.addEventListener("click", MoverDerecha);
  
  function MoverIzquierda()
    {
      Contador--;
      MoverSlider();
    }
  IconoIzuierdo.addEventListener("click", MoverIzquierda)
