import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref: cube, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }
    ],
    timing: {
      easing: 'steps(13, end)',
      direction: "reverse",
      duration: 600,
      iterations: Infinity
    },
  });

  const { ref: background1, getAnimation: animBackground1 } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 36000,
      iterations: Infinity
    },
  });

  const { ref: background2, getAnimation: animBackground2 } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 30000,
      iterations: Infinity
    },
  });

  const { ref: foreground1, getAnimation: animForeground1 } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 10000,
      iterations: Infinity
    },
  });

  const { ref: foreground2, getAnimation: animForeground2 } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 12000,
      iterations: Infinity
    },
  });

  const play = () => {
    getAnimation().play();
    animBackground1().play();
    animBackground2().play();
    animForeground1().play();
    animForeground2().play();
  };

  const pause = () => {
    getAnimation().pause();
    animBackground1().pause();
    animBackground2().pause();
    animForeground1().pause();
    animForeground2().pause();
  }

  const reverse = () => {
    getAnimation().reverse();
    animBackground1().reverse();
    animBackground2().reverse();
    animForeground1().reverse();
    animForeground2().reverse();
  };

  return (
    <div className="wrapper">
      <div className="buttons">
        <button id="btn" onClick={play}>Play</button>
        <button id="btn"onClick={pause}>Pause</button>
        <button id="btn"onClick={reverse}>Reverse</button>
      </div>
      <div className="sky"></div>
      <div className="earth">
        <img id="mountain" src="/images/mountain.png" alt="Ground" />
        <div id="cube">
          <img id="cube_sprite" ref={cube} src="/images/spritesheet.png" alt="Cube running" />
        </div>
      </div>
      <div className="scenery" ref={foreground1} id="foreground1">
        <img id="tree1" src="/images/tree-1.png" alt="Tree" />
      </div>
      <div className="scenery" ref={foreground2} id="foreground2">
        <img id="bush" src="/images/bush.png" alt="Bush" />
        <img id="rock_upright" src="/images/rock-1.png" alt="Rock" />
      </div>
      <div className="scenery" ref={background1} id="background1">
        <img id="rock2_upright" src="/images/rock-2.png" alt="Rock" />
        <img id="rocks" src="/images/rock-3.png" alt="Rock" />
        <img id="tree2" src="/images/tree-2.png" alt="Tree" />
      </div>
      <div className="scenery" ref={background2} id="background2">
        <img id="rock" src="/images/rock-4.png" alt="Rock" />
        <img id="tree3" src="/images/tree-3.png" alt="Tree" />
      </div>
    </div>
  );
}

export default App;
