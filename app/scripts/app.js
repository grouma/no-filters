(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  /* Clear the app state i.e. token and device information */
  app.clearData = function() {
    app.token = null;
    app.device = null;
  };
  app.clearData();

  app.filters = [{
    name: 'Whimsy',
    description: 'Soft, delicate, dreamlike, fairy, playful, flighty, scattered, lifted, delicate, flick, float, free, weightless, animated, and airy.'
  }, {
    name: 'Evolve',
    description: 'Growing, soft to strong, extending, reaching, blended, high and low, shifting, organic, calming, flowing, liquid, suspended, gliding, and controlled.'
  }, {
    name: 'Uprising',
    description: 'Strong, sharp, heavy, dramatic, repetitive, powerful, percussive, abrupt, quick, accented with initiation and cessation, force, sudden, unconstrained, punching, slashing, firm, boisterous, and alert.'
  }, {
    name: 'Zeal',
    description: 'Passionate, intense, big, high contrast, virtuosic, sophisticated, determined, excitement, energetic, massive, direct, unswerving, uninhibited, staccato, vibrant, vivacious, and vigorous.'
  }, {
    name: 'Nostalgic',
    description: 'Winding, blurry, muddled, faded, pretty, pensive, sincere, sustained, slow, luxurious, meandering, wafting, poised, and feminine.'
  }, {
    name: 'Threshold',
    description: 'Textured, deep, layered, glowing, awakening, rooted, raw, release, weighted, swinging, smooth and steady, gravity, controlled, bound, guarded, wringing, and lengthy.'
  }, ];
})(document);
