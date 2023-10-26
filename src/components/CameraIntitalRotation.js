import * as AFRAME from "aframe"
import * as THREE from "three"
import "./CameraMovement"
AFRAME.registerComponent('camera-initial-rotation', {
    init: function () {
      // Set the initial rotation to align with your preferred view
      const initialRotation = new THREE.Vector3(0, 0, 0).multiplyScalar(Math.PI / 180);
      this.el.object3D.rotation.set(initialRotation.x, initialRotation.y, initialRotation.z);
  
      // Animate the camera to rotate 360 degrees
      this.animateRotation();
    },
  
    animateRotation: function () {
      const self = this;
      const rotationSpeed = 0.02; // Increase the speed
      const targetRotation = new THREE.Vector3(0, 360, 0).multiplyScalar(Math.PI / 180);
  
      function animate() {
        self.el.object3D.rotation.y += rotationSpeed;
  
        // Check if the camera has completed a 360-degree rotation
        if (self.el.object3D.rotation.y >= targetRotation.y) {
          // Set the rotation to the center (0, -40, 0)
          self.el.object3D.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z);
         
          // Remove the initial rotation animation
          self.el.removeAttribute('camera-initial-rotation');
          const event = new Event('cameraRotationEnd');
          document.dispatchEvent(event);
          setTimeout(()=>{
            //self.el.setAttribute("rotation","0 -40 0")
            self.el.setAttribute("look-controls","reverseMouseDrag:true");
            //self.el.components['look-controls'].pitchObject.rotation.set(THREE.MathUtils.degToRad(self.el.pitchObject),0,0);
            // self.el.components['look-controls'].yawObject.rotation.set(0,THREE.MathUtils.degToRad(self.el.yawObject),0);
          },500);
          //self.el.components['look-controls'].pitchObject.rotation.set(THREE.MathUtils.degToRad(self.el.pitchObject),0,0);
          //self.el.components['look-controls'].yawObject.rotation.set(0,THREE.MathUtils.degToRad(self.el.yawObject),0);
          
  
          return;
        }
  
        // Request the next frame of the animation
        requestAnimationFrame(animate);
      }
  
      // Start the rotation animation
      animate();
    }
  });