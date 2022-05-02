const text = [
  `El cuerpo humano es una estructura compleja, pero absolutamente fascinante. A pesar de que la ciencia estudia cada parte del cuerpo desde hace siglos, nunca se lo termina de conocer del todo. ¡Es que es una infinita fuente de asombro!`,
  `Los músculos de nuestros ojos se mueven mucho más de lo que imaginas… ¡Aproximadamente 100.000 veces al día!
  Para que te des una idea de cuánto es eso, deberías saber esta relación: para que los músculos de la pierna hagan la misma cantidad de ejercicio, deberías caminar aproximadamente 80 km por día. `,
  `Cada persona tiene su aroma único, debido a las feromonas. Excepto los gemelos idénticos, que tienen exactamente el mismo olor.
  Hablando de esto, vale aclarar: según la ciencia, las mujeres siempre huelen mejor que los hombres. Y la nariz puede recordar hasta 50.000 aromas. `,
  `Más allá de la fuerza espiritual, el corazón es un órgano sumamente poderoso. De hecho, la presión que genera al bombear sangre podría, si saliera del cuerpo, alcanzar los 10 metros de distancia.`,
  `La lengua se está moviendo todo el día. Se expande, se contrae, se aplana, se vuelve a contraer. Al final del día, lo más probable es que la lengua haya hecho varios miles de movimientos.`,
  `La manera en que los hombres y las mujeres piensan, actúan y toman decisiones es diferente y esto es bien sabido. Los investigadores de la Escuela de Medicina de la Universidad de Indiana descubrieron que estas diferencias se aplican incluso en la manera en que ambos sexos escuchan.`,
  `Los elefantes son capaces de localizar agua y de detectar lluvias a distancias de aproximadamente 250 km. A su vez, tienen un sistema intuitivo de comunicación ya que cuando un miembro de la manada encuentra alguna reserva de agua, avisa mediante gruñidos de baja frecuencia al resto de la manada.`,
  `Quizá no lo parezca a simple vista, pero las patas de un avestruz tienen mucha fuerza. De hecho es suficiente fuerza muscular como para matar una persona, ¡o incluso a un león!`,
  `Así como los mininos pasan el 70% de sus vidas durmiendo, el 30% restante están despiertos acicalándose y alrededor de 10,950 horas ronroneando. `,
];
const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");
form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
