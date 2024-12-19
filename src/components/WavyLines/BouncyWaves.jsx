import React, { useEffect, useRef } from 'react';
import './style.scss'; // Ensure you have your styles for the waves animation
import { Noise } from 'noisejs'; // Import noisejs for the Perlin noise functionality

const BouncingWaves = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Define the BouncingWaves custom element
    class BouncingWaves extends HTMLElement {
      connectedCallback() {
        // Elements
        this.svg = this.querySelector('.js-svg');

        // Properties
        this.mouse = {
          x: 0,
          y: 0,
          speed: 0,
          angle: 0,
        };

        this.lines = [];
        this.paths = [];
        this.noise = new Noise(Math.random());

        // Initialize
        this.setSize();
        this.createWaveGrid();
        this.bindEvents();

        // RAF
        requestAnimationFrame(this.animate.bind(this));
      }

      // Bind events
      bindEvents() {
        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('touchmove', this.onTouchMove.bind(this));
      }

      // Resize handler
      onResize() {
        this.setSize();
        this.createWaveGrid();
      }

      // Mouse movement handler
      onMouseMove(e) {
        this.updateMousePosition(e.pageX, e.pageY);
      }

      // Touch move handler
      onTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        this.updateMousePosition(touch.clientX, touch.clientY);
      }

      // Update mouse position
      updateMousePosition(x, y) {
        const { mouse } = this;
        mouse.x = x - this.bounding.left;
        mouse.y = y - this.bounding.top + window.scrollY;
      }

      // Set the size of the SVG
      setSize() {
        this.bounding = this.getBoundingClientRect();
        this.svg.style.width = `${window.innerWidth}px`;
        this.svg.style.height = `${window.innerHeight}px`;
      }

      // Create wave grid with randomized points
      createWaveGrid() {
        const { width, height } = this.bounding;
        this.lines = [];
        this.paths = [];

        const xGap = 20;
        const yGap = 40;
        const noiseScale = 0.1;

        // Clear previous paths
        this.paths.forEach((path) => {
          path.remove();
        });

        // Calculate number of points for the grid
        const totalLines = Math.ceil(width / xGap);
        const totalPoints = Math.ceil(height / yGap);

        for (let i = 0; i < totalLines; i++) {
          const points = [];
          for (let j = 0; j < totalPoints; j++) {
            const point = {
              x: i * xGap,
              y: j * yGap,
              offsetX: Math.random() * 100, // Random starting position for noise
              offsetY: Math.random() * 100,
            };
            points.push(point);
          }

          // Create path
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.classList.add('wave-line');
          this.svg.appendChild(path);
          this.paths.push(path);

          // Add points
          this.lines.push(points);
        }
      }

      // Animate waves based on time and mouse interaction
      animate(time) {
        const { mouse } = this;

        // Calculate mouse movement speed and direction
        const dx = mouse.x - mouse.lastX || 0;
        const dy = mouse.y - mouse.lastY || 0;
        const distance = Math.hypot(dx, dy);
        mouse.speed = distance;
        mouse.angle = Math.atan2(dy, dx);

        // Update mouse position
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;

        // Move wave points
        this.moveWavePoints(time);
        this.renderWaves();

        requestAnimationFrame(this.animate.bind(this));
      }

      // Move wave points with noise and mouse influence
      moveWavePoints(time) {
        const { lines, mouse, noise } = this;

        lines.forEach((points) => {
          points.forEach((point, idx) => {
            // Apply Perlin noise for organic wave movement
            const noiseX = noise.perlin2(point.x * 0.05 + time * 0.002, point.y * 0.05);
            const noiseY = noise.perlin2(point.x * 0.05 + time * 0.003, point.y * 0.05);
            point.offsetX += noiseX * 4;
            point.offsetY += noiseY * 4;

            // Influence of mouse on wave movement
            const mouseFactor = Math.pow(1 - Math.min(1, Math.hypot(mouse.x - point.x, mouse.y - point.y) / 200), 2);
            point.offsetX += Math.cos(mouse.angle) * mouse.speed * mouseFactor * 0.05;
            point.offsetY += Math.sin(mouse.angle) * mouse.speed * mouseFactor * 0.05;
          });
        });
      }

      // Render wave paths
      renderWaves() {
        const { lines, paths } = this;

        lines.forEach((points, i) => {
          let pathData = `M ${points[0].x + points[0].offsetX} ${points[0].y + points[0].offsetY}`;

          points.forEach((point, j) => {
            if (j === 0) return;
            pathData += `L ${point.x + point.offsetX} ${point.y + point.offsetY}`;
          });

          paths[i].setAttribute('d', pathData);
        });
      }
    };

    // Register the custom element
    if (!customElements.get('bouncing-waves')) {
      customElements.define('bouncing-waves', BouncingWaves);
    }

    // Create the custom element and append it to the container
    const bouncingWavesElement = document.createElement('bouncing-waves');
    if (containerRef.current) {
      containerRef.current.appendChild(bouncingWavesElement);
    }

    // Cleanup function to remove the element when component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(bouncingWavesElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="bouncing-waves-container">
      <bouncing-waves>
        <svg className="js-svg"></svg>
      </bouncing-waves>
    </div>
  );
};

export default BouncingWaves;
