import { motion, type Transition } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
   children: ReactNode;
   variant?: 'fade' | 'slide' | 'scale' | 'flip' | 'rotate' | 'swipe';
}

const variants = {
   fade: {
      initial: { opacity: 0 },
      in: { opacity: 1 },
      out: { opacity: 0 }
   },
   slide: {
      initial: { x: -300, opacity: 0 },
      in: { x: 0, opacity: 1 },
      out: { x: 300, opacity: 0 }
   },
   scale: {
      initial: { scale: 0, opacity: 0 },
      in: { scale: 1, opacity: 1 },
      out: { scale: 1.5, opacity: 0 }
   },
   flip: {
      initial: { rotateY: 90, opacity: 0 },
      in: { rotateY: 0, opacity: 1 },
      out: { rotateY: -90, opacity: 0 }
   },
   rotate: {
      initial: { rotate: -180, opacity: 0, scale: 0.8 },
      in: { rotate: 0, opacity: 1, scale: 1 },
      out: { rotate: 180, opacity: 0, scale: 0.8 }
   },
   swipe: {
      initial: { y: "100%", opacity: 0 },
      in: { y: 0, opacity: 1 },
      out: { y: "-100%", opacity: 0 }
   }
};

const transitions: Record<PageTransitionProps['variant'] & string, Transition> = {
   fade: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.2
   },
   slide: {
      type: "tween",
      ease: "anticipate",
      duration: 0.5
   },
   scale: {
      type: "spring",
      stiffness: 260,
      damping: 20
   },
   flip: {
      type: "tween",
      duration: 0.8,
      ease: "circOut"
   },
   rotate: {
      type: "spring",
      damping: 15,
      stiffness: 200
   },
   swipe: {
      type: "tween",
      ease: "circInOut",
      duration: 0.5
   }
};

export function PageTransition({ children, variant = 'fade' }: PageTransitionProps) {
   return (
      <motion.div
         initial="initial"
         animate="in"
         exit="out"
         variants={variants[variant]}
         transition={transitions[variant]}
         style={{ width: '100%', height: '100%' }}
      >
         {children}
      </motion.div>
   );
}
