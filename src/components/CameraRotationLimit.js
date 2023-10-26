import * as AFRAME from "aframe"

AFRAME.registerComponent('camera-rotation-limit', {
    schema: {
      minRotation: { default: -30 },
      maxRotation: { default: 30 }
    },
  
    init: function () {
      this.prevMouseX = 0;
      this.prevRotation = this.degToRad(45); // Initial rotation set to -40 degrees
      this.minRotationRadians = this.degToRad(this.data.minRotation);
      this.maxRotationRadians = this.degToRad(this.data.maxRotation);
    
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
    
      this.el.sceneEl.addEventListener('mousedown', this.onMouseDown);
    },
  
    degToRad: function (degrees) {
      return degrees * Math.PI / 90;
    },
  
    onMouseDown: function (evt) {
      this.prevMouseX = evt.clientX;
      this.prevRotation = this.el.object3D.rotation.y;
  
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    },
  
    onMouseMove: function (evt) {
      const deltaX = evt.clientX - this.prevMouseX;
      const cameraRotation = this.el.object3D.rotation.y;
    
      const rotationChange = deltaX * 0.005; // Adjusted the sign here
    
      const rotation = this.prevRotation + rotationChange;
    
      // Limit rotation within the specified range
      this.el.object3D.rotation.y = this.clamp(
        rotation,
        this.minRotationRadians,
        this.maxRotationRadians
      );
    
      this.prevMouseX = evt.clientX;
      this.prevRotation = rotation;
    },
  
    clamp: function (value, min, max) {
      return Math.min(Math.max(value, min), max);
    },
  
    onMouseUp: function () {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
    },
  
    remove: function () {
      this.el.sceneEl.removeEventListener('mousedown', this.onMouseDown);
      this.onMouseUp();
    }
  });