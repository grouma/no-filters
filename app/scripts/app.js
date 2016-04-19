(function (document) {
  'use strict';

  var app = document.querySelector('#app');

  app.baseUrl = '/';
  if (window.location.port === '') { // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function () {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function () {
    // imports are loaded and elements have been registered
  });

  /* Clear the app state i.e. token and device information */
  app.clearData = function () {
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
    name: 'Threshold',
    description: 'Textured, deep, layered, glowing, awakening, rooted, raw, release, weighted, swinging, smooth and steady, gravity, controlled, bound, guarded, wringing, and lengthy.'
  }, {
    name: 'Nostalgic',
    description: 'Winding, blurry, muddled, faded, pretty, pensive, sincere, sustained, slow, luxurious, meandering, wafting, poised, and feminine.'
  }, {
    name: 'Zeal',
    description: 'Passionate, intense, big, high contrast, virtuosic, sophisticated, determined, excitement, energetic, massive, direct, unswerving, uninhibited, staccato, vibrant, vivacious, and vigorous.'
  }, ];
})(document);