import { useEffect, useRef, FC, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useOnScreen } from 'features';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface IProps {
  direction: Direction;
  delay?: number;
  children: ReactNode;
}

export const LazyShow: FC<IProps> = ({ direction, delay, children }) => {
  const controls = useAnimation();
  const rootRef = useRef(null!);
  const onScreen = useOnScreen(rootRef);

  function directionHandler() {
    let margin = 0;

    if (direction === 'left' || direction === 'top') {
      margin = 50;
    } else {
      margin = -50;
    }

    if (direction === 'left' || direction === 'right') {
      return { x: margin, opacity: 0 };
    }

    return { y: margin, opacity: 0 };
  }

  directionHandler();

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
          delay,
        },
      });
    }
  }, [onScreen, controls]);

  return (
    <motion.div
      className='lazy-div'
      ref={rootRef}
      initial={directionHandler()}
      animate={controls}>
      {children}
    </motion.div>
  );
};
