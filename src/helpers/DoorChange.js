const AFRAME = window.AFRAME;
const THREE = require('aframe/src/lib/three');
AFRAME.registerComponent('doorchange', {
    schema: {
        
    },

    init: function () {
      // Do something when component first attached.
      let el=this.el;
      this.toggleDoor=function(){
        alert("Clicked")
      }
      this.el.addEventListener('click',this.toggleDoor);
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
      this.el.removeEventListener('click',this.toggleDoor);
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
export default AFRAME;
