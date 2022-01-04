var verFrase = document.getElementById('verFrase');
var check = document.querySelector(".check");
const botonAceptaCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fondo-aviso-cookies");
dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
} else {
    dataLayer.push({'event': "cookies-aceptadas"});
}

botonAceptaCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({'event': "cookies-aceptadas"});
});

document.getElementById("button-up").addEventListener('click', scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop; //|| document.body.scrollTo;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)";
    }
}

var buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 500){
        buttonUp.style.transform = "scale(1)";
    } else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}

check.addEventListener('click', idioma);

function idioma(){
    let id = check.checked;
    console.log(check.checked);
    if(id == true){
        location.href="en/index.html";
    } else {
        location.href="../index.html";
    }
}

function MostrarFrase(){
    var frases = new Array();
    frases[0] = 'Lealtad es lo mas importante';
    frases[1] = 'Los ganadores no crean excusas';
    frases[2] = 'Esta es la diferencia entre tú y yo, tú quieres perder poco y yo quiero ganar mucho';
    frases[3] = 'Si tienes una pistola apuntándote a la cabeza, sacas un arma mayor';
    frases[4] = 'No mereces el privilegio de verme ganar';
    frases[5] = 'Las personas responden a la vestimenta';
    frases[6] = 'Yo no juego a la estadística, yo juego con el hombre';
    frases[7] = 'No tengo suerte. Yo hago mi propia suerte';
    frases[8] = 'Nunca vas a ganar en grande si sólo actúas para minimizar tus fracasos';
    frases[9] = 'Actuando dentro de las reglas no llegarás a ningún lado';
    frases[10] = 'Ajusta tu estrategia basada en la observación de las reacciones emocionales de las personas';
    frases[11] = 'Si estas contra la pared, rompe la pared';
    frases[12] = 'Sólo porque seas el novato no significa que tengas que pensar como uno';
    frases[13] = 'No anuncies el problema, arréglalo';
    frases[14] = 'Es momento de confiar en otros';
    frases[15] = 'Si lo que ganas es para vicios y fiestas te aseguro que nunca progresarás';
    frases[16] = 'Un toro enfurecido solo ve el manto rojo, y no al hombre';
    frases[17] = 'Nunca te conformes. Siempre hay un pez más grande que atrapar';
    frases[18] = 'Cuantas menos cosas dejes al azar, mejor las controlarás';
    frases[19] = 'No juegues con la baraja, juega con el hombre';
    frases[20] = 'No tengo sueños tengo metas';
    frases[21] = 'Yo no respondo ante amenazas. Yo las hago';
    frases[22] = 'Si muestras que te importan pensaran que eres débil';
    frases[23] = 'Si quieres que un hombre se quite el abrigo, no se lo quites. Haz que sienta calor y él mismo se lo quitará';
    frases[24] = '¿Un escenario donde se puede fracasar? Debes crear una situación donde eso no sea ni una posibilidad. Gana lo imposible reescribiendo las reglas.';
    frases[25] = 'No se toman grandes decisiones en la vida tras una pérdida';
    frases[26] = 'Vives en un mundo diluido donde crees que siempre ganas';
    frases[27] = 'Ser arrogante tiene ciertos beneficios';
    frases[28] = 'Nunca agaches la cabeza, mira siempre bien alto, ganes o pierdas';
    frases[29] = 'Los buenos se concentran en los hechos, los grandes solo en los oponentes';
    frases[30] = 'La emoción está bien pero debe estar respaldada con hechos fríos y duros';
    frases[31] = 'A veces me gusta estar con personas no tan brillantes para ver como es que viven ellos';
    frases[32] = 'Estoy en contra de tener emociones, no de utilizarlas';
    frases[33] = 'La única vez que el éxito viene antes que el trabajo es en el diccionario';
    frases[34] = 'Niegate a responder con el argumento de que no quiero';
    frases[35] = 'Te he disparado en la rodilla para que él no pudiera dispararte en la cara. De nada';
    frases[36] = 'Quienquiera que intente derribarte ya está debajo de ti';
    frases[37] = 'El éxito es como cuando una mujer está embarazada, todos la felicitan pero nadie sabe cuántas veces lo ha intentado';
    frases[38] = '¿Alguna vez has amado tanto a alguien que harías cualquier cosa por él? Sí, bueno, conviértete en ese alguien y haz lo que quieras por ti';
    frases[39] = 'El 97% de las personas que se rindieron están empleadas por el 3% que nunca se rindió';
    frases[40] = 'Deja que te odien. Solo asegúrate de que sepan tu nombre correctamente';
    frases[41] = 'Creen que te importa, caminarán sobre ti';
    frases[42] = 'Cualquiera puede hacer mi trabajo, pero nadie puede ser yo';
    frases[43] = 'Si lo intentas, entonces fracasaras, el verbo es hacer, no intentar';
    frases[44] = 'Va a suceder, porque voy a hacer que suceda';
    frases[45] = 'No apuestes a las probabilidades, apuesta a las acciones';
    frases[46] = 'Concéntrate en mejorarte. No en pensar que eres el mejor';
    frases[47] = 'No es alardear si estas diciendo la verdad';
    frases[48] = 'Gana una situación de no ganar reescribiendo las reglas';
    frases[49] = 'No levantes la voz en una discusión, simplemente mejora tu argumento';
    frases[50] = '¿Quieres cambiar tu vida? Cambia tu forma de pensar';
    frases[51] = 'Establece objetivos tan grandes para tu vida que te incomode contarselos a personas de mentalidad pequeña';
    frases[52] = 'Me gusta sonreírle a las personas que no me quieren';
    frases[53] = 'La vida es un juego. Jugar para ganar';
    frases[54] = 'Mátalos con tu éxito. Entiérralos con una sonrisa';
    frases[55] = 'La gente responde a cómo estamos vestidos, así que nos guste o no, debemos apegarnos a eso';
    frases[56] = 'La lealtad es una calle de doble sentido. Si te lo pido, entonces me lo vas a dar';
    frases[57] = 'La vida tiene dos reglas: Nunca renuncies, Recuerde siempre la regla Nº 1';
    frases[58] = 'El éxito de tu cliente es un éxito tuyo';
    frases[59] = 'Puedes ganar las batallas antes de iniciarlas';
    frases[60] = 'La ley es la ley, y la verdad es subjetiva';
    frases[61] = 'Nunca vas a ganar mucho si solo vas a minimizar tus pérdidas';
    frases[62] = 'Cuando las personas que ni siquiera conoces te odian, es cuando descubres que eres el mejor';
    frases[63] = 'Cuando logras que tu objetivo sea más importante que ir de fiesta, bienvenido al 1%';
    frases[64] = 'No pierdas tu tiempo con explicaciones. La gente solo escucha lo que quiere escuchar';
    frases[65] = 'Los ganadores no tienen excusas';
    frases[66] = 'El tiempo es libre, pero no tiene precio. No puedes tenerlo, pero vaya que puedes usarlo';
    frases[67] = 'Te sorprendería lo que haría la gente en la que confías cuando alguien los ponga en una posición en la que piensen que no tienen otra opción';
    frases[68] = 'Nunca destruyas a nadie en público cuando puedes lograr el mismo resultado en privado';
    frases[69] = 'Si engañó a alguien más contigo te va a engañar a ti con alguien mas';
    frases[70] = 'Si empiezas en la ultima fila no llegarás al frente';



    aleatorio = Math.random() * (frases.length)
    aleatorio = Math.floor(aleatorio)

    verFrase.innerHTML = frases[aleatorio];
}

window.addEventListener("load", function(e){
    e.preventDefault();
    document.getElementById("loader").classList.toggle("loader2")
})
