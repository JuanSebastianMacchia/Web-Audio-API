
// OSCILATOR EXAMPLE

// var audioCtx = new (window.AudioContext || window.webkitAudioContext);

// var sine = audioCtx.createOscillator();

// sine.start();
// sine.connect(audioCtx.destination);


// TREE TONES

//create the context for the web audio
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//create, tune, start and connect each oscillator sinea, sineb and sinec

/*
var sinea = audioCtx.createOscillator();
sinea.frequency.value = 440;
sinea.type = "sine";
sinea.start();
sinea.connect(audioCtx.destination);
var sineb = audioCtx.createOscillator();
sineb.frequency.value = 523.25;
sineb.type = "sine";
sineb.start();
sineb.connect(audioCtx.destination);
var sinec = audioCtx.createOscillator();
sinec.frequency.value = 698.46;
sinec.type = "sine";
sinec.start();
sinec.connect(audioCtx.destination);
*/

// Agregando GANANCIA

/*
var audioCtx = new (window.AudioContext || window.webkitAudioContext)
// we create the gain module, named as volume, and connect it to our
var volume = audioCtx.createGain();
volume.connect(audioCtx.destination);
//these sines are the same, exept for the last connect statement.
//Now they are connected to the volume gain module and not to the au
var sinea = audioCtx.createOscillator();
sinea.frequency.value = 440;
sinea.type = "sine";
sinea.start();
sinea.connect(volume);
var sineb = audioCtx.createOscillator();
sineb.frequency.value = 523.25;
sineb.type = "sine";
sineb.start();
sineb.connect(volume);
var sinec = audioCtx.createOscillator();
sinec.frequency.value = 698.46;
sinec.type = "sine";
sinec.start();
sinec.connect(volume);
volume.gain.value=0.2;

*/



