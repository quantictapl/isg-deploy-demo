
import * as AFRAME from "aframe"
AFRAME.registerComponent('custom-loading', {
    init: function () {
      // Reference to the A-Frame scene
      var sceneEl = this.el;
  
      // Wait for assets to be fully loaded
      sceneEl.addEventListener('loaded', function () {
        // Remove the default loading screen
        sceneEl.removeAttribute('loading-screen');
      });
    },
  });