import React, { useEffect } from 'react';
import p5 from 'p5';

const Pendulum = ({ size }) => {
  useEffect(() => {
    let pendulums = [];
    let pendulumCount = 40; // Number of pendulums
    let myP5;

    const sketch = (p) => {
      p.setup = () => {
        // Create the canvas and append it to the container
        const container = document.querySelector('.animation-container');
        p.createCanvas(container.clientWidth, container.clientHeight).parent(container);
        for (let i = 0; i < pendulumCount; i++) {
          pendulums[i] = new Pendulum(i, size); // Pass size to the Pendulum class
        }
      };

      p.draw = () => {
        p.blendMode(p.BLEND);
        // p.background(255);
        p.background(	255,	255,	252)
        
        // Center the pendulums in the canvas
        p.translate(p.width / 2, p.height / 2);
        
        for (let i = 0; i < pendulumCount; i++) {
          pendulums[i].update();
          pendulums[i].display(p);
        }
      };

      class Pendulum {
        constructor(n, size) {
          this.angle = 0;
          this.angleSpeed = 0.01 + n * 0.0008;
          this.radius = size + n * (size / 5); // Modify the radius based on size
        }

        update() {
          this.angle += this.angleSpeed;
        }

        display(p) {
          let x = this.radius * p.cos(this.angle);
          let y = this.radius * p.sin(this.angle);
          p.stroke(255, 105, 180);
          p.line(0, 0, x, y);
          p.fill(255, 105, 180);
          p.ellipse(x, y, 5, 5);
        }
      }
    };

    myP5 = new p5(sketch);

    // Clean up on unmount
    return () => {
      myP5.remove();
    };
  }, [size]); // Add size as a dependency

  return (
    <div className="animation-container" style={{ 
        width: '40%', height: '80%', 
        display:'inline-block',
        position: 'absolute',
        // border: 'solid red 2px',
        right:'50%',
        bottom:'17%',

    }}>
      {/* The canvas will be created here */}
    </div>
  );
};

export default Pendulum;
