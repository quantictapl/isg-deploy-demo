import * as AFRAME from "aframe"
import * as THREE from "three"
AFRAME.registerComponent('camera-movement', {
    schema: {
        initialRotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
        reverseRotation: { default: false }
      },
    
      init: function () {
        this.rotation = new THREE.Euler(
          THREE.MathUtils.degToRad(this.data.initialRotation.x),
          THREE.MathUtils.degToRad(this.data.initialRotation.y),
          THREE.MathUtils.degToRad(this.data.initialRotation.z)
        );
    
        // Attach the rotation to the camera's object3D
        this.el.sceneEl.camera.el.object3D.rotation.copy(this.rotation);
    
        this.previousMouseEvent = {};
        this.bindMethods();
        this.addEventListeners();
      },
    
      bindMethods: function () {
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
      },
    
      addEventListeners: function () {
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('touchmove', this.onTouchMove);
      },
    
      removeEventListeners: function () {
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('touchmove', this.onTouchMove);
      },
    
      onMouseMove: function (evt) {
        this.rotateCamera(evt.movementX, evt.movementY);
      },
    
      onTouchMove: function (evt) {
        if (evt.touches.length === 1) {
          const touch = evt.touches[0];
          const deltaX = touch.clientX - this.previousMouseEvent.screenX;
          const deltaY = touch.clientY - this.previousMouseEvent.screenY;
          this.rotateCamera(deltaX, deltaY);
          this.previousMouseEvent.screenX = touch.clientX;
          this.previousMouseEvent.screenY = touch.clientY;
        }
      },
    
      rotateCamera: function (deltaX, deltaY) {
        const rotationSpeed = 0.002;
        const direction = this.data.reverseRotation ? -1 : 1;
        
        this.rotation.y += deltaX * rotationSpeed * direction;
        this.rotation.x += deltaY * rotationSpeed * direction;
    
        // Limit the vertical rotation to avoid flipping upside down
        this.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.rotation.x));
    
        // Apply the rotation to the camera's object3D
        this.el.sceneEl.camera.el.object3D.rotation.copy(this.rotation);
      },
    
      remove: function () {
        this.removeEventListeners();
      }
  });