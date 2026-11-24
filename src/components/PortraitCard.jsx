import { useEffect, useRef } from 'react';
import portrait from '../assets/cv-photo-cutout.png';
import objectsSheet from '../assets/portrait-objects.png';
import './portrait.css';

const objects = [
  ['globe', 'Wireframe globe with orbit'],
  ['gear', 'Mechanical gear'],
  ['chat', 'Speech bubble'],
  ['shield', 'Security shield'],
  ['code', 'Code brackets'],
  ['robot', 'AI robot'],
  ['server', 'Server rack'],
  ['database-cpu', 'Database and microchip'],
  ['cloud', 'Cloud upload'],
];

export default function PortraitCard() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const icons = [...stage.querySelectorAll('.portrait-object')];
    const badges = [...stage.querySelectorAll('.portrait-badge')];
    const portraitElement = stage.querySelector('.portrait-person');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let last = performance.now();
    let angle = 0;
    let scroll = window.scrollY;
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (event) => {
      const rect = stage.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
      targetY = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)));
    };
    const onPointerLeave = () => { targetX = 0; targetY = 0; };

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, .05);
      last = now;
      if (!reduceMotion.matches) angle -= dt * .055;
      scroll += (window.scrollY - scroll) * .1;
      mouseX += (targetX - mouseX) * .1;
      mouseY += (targetY - mouseY) * .1;
      const total = reduceMotion.matches ? 0 : angle - scroll * .0012;
      const rx = Math.min(stage.clientWidth * .45, 225);
      const ry = Math.min(stage.clientHeight * .48, 275);

      icons.forEach((icon, index) => {
        const theta = total + index * Math.PI * 2 / icons.length - 2.2;
        const front = (Math.sin(theta) + 1) / 2;
        const x = Math.cos(theta) * rx - mouseX * 12;
        const y = Math.sin(theta) * ry - mouseY * 10;
        const scale = (icon.matches(':hover') ? 1.2 : 1) * (.88 + front * .18);
        icon.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
        icon.style.zIndex = '5';
      });

      if (!reduceMotion.matches) {
        portraitElement.style.transform = `translateX(-50%) translate3d(${mouseX * 7}px, ${mouseY * 5 - Math.min(scroll * .025, 35)}px, 0)`;
        badges.forEach((badge, index) => {
          const bob = Math.sin(now * .002 + index * 1.4) * 4;
          badge.style.translate = `${mouseX * (16 + index * 3)}px ${mouseY * (12 + index * 2) + bob - (badge.matches(':hover') ? 8 : 0)}px`;
        });
      }
      frame = requestAnimationFrame(tick);
    };

    stage.addEventListener('pointermove', onPointerMove, { passive: true });
    stage.addEventListener('pointerleave', onPointerLeave);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="portrait-scene" aria-label="Portrait of Miraj Hossain with orbiting AI and software objects">
      <div className="portrait-slide-card" aria-hidden="true">
        <div className="portrait-slide-content">
          <span className="portrait-slide-word">AI</span>
          <span className="portrait-slide-word">Engineer</span>
          <span className="portrait-slide-word">AI</span>
        </div>
      </div>
      <div className="portrait-glass-cube" aria-hidden="true">
        <div className="portrait-cube-shadow" />
        <div className="portrait-cube-blur"><div className="portrait-cube-inner">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((side) => <i key={side} className={`portrait-cube-face portrait-cube-${side}`} />)}
        </div></div>
        <div className="portrait-cube-outer">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((side) => <i key={side} className={`portrait-cube-face portrait-cube-${side}`} />)}
        </div>
        <div className="portrait-cube-light" />
      </div>
      {objects.map(([name, label]) => (
        <div key={name} className={`portrait-object object-${name}`} title={label} aria-hidden="true">
          <span className="portrait-object-face" style={{ backgroundImage: `url(${objectsSheet})` }} />
        </div>
      ))}
      <img className="portrait-person" src={portrait} alt="Miraj Hossain wearing a dark blazer and AIUB lanyard" />
      <div className="portrait-badge badge-code">agent.run(<span>"build-ideas"</span>)</div>
      <div className="portrait-badge badge-request"><span className="badge-check">✓</span> Building with AI</div>
      <div className="portrait-badge badge-host"><strong>Full-stack</strong><small>web · AI · systems</small></div>
      <div className="portrait-badge badge-model"><strong>React · Python · AI</strong><small>from idea to product</small></div>
      <div className="portrait-nameplate"><span><strong>Miraj Hossain</strong><small>AI Engineer &amp; Full-Stack Developer · Dhaka, BD</small></span></div>
    </div>
  );
}
