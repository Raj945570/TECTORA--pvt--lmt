import { motion } from 'framer-motion';

/**
 * Premium Motion Variants & Reusable Animation Wrappers
 * Configured with GPU-friendly transforms, smooth ease-in-out cubic-bezier easing,
 * and viewport: { once: false } so elements animate in on scroll down,
 * and smoothly hide when scrolling back up.
 */

const smoothEasing = [0.25, 0.1, 0.25, 1]; // Premium cubic-bezier ease-in-out

export const fadeVariants = {
  up: {
    initial: { opacity: 0, y: 36, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 }
  },
  down: {
    initial: { opacity: 0, y: -36, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 }
  },
  left: {
    initial: { opacity: 0, x: -44, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1 }
  },
  right: {
    initial: { opacity: 0, x: 44, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1 }
  },
  fade: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 }
  }
};

/**
 * FadeIn Component
 * @param {'up' | 'down' | 'left' | 'right' | 'fade'} direction
 * @param {number} delay in seconds
 * @param {number} duration in seconds (default: 0.75s)
 * @param {number} amount threshold before triggering (default: 0.12)
 */
export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.75,
  amount = 0.12,
  className = '',
  style = {},
  ...props
}) {
  const variant = fadeVariants[direction] || fadeVariants.up;

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: false, amount }}
      transition={{
        duration,
        delay,
        ease: smoothEasing
      }}
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * MotionCard Component
 * Wraps interactive cards with scroll-triggered fade-up entry
 * and a subtle, high-end 1.03 scale + elevation lift on hover.
 */
export function MotionCard({
  children,
  delay = 0,
  duration = 0.75,
  amount = 0.15,
  hoverScale = 1.03,
  hoverY = -4,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount }}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.28, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.99, y: 0 }}
      transition={{
        duration,
        delay,
        ease: smoothEasing
      }}
      onClick={onClick}
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * MotionButton Component
 * Wraps CTA buttons with subtle lift on hover and smooth tap feedback.
 */
export function MotionButton({
  children,
  className = '',
  style = {},
  onClick,
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.025, y: -2, transition: { duration: 0.2 } } : {}}
      whileTap={!disabled ? { scale: 0.98, y: 0 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{ willChange: 'transform', ...style }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
