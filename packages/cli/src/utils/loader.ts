/**
 * Create and display a loader in the console.
 *
 * @param {string} [text=""] Text to display after loader
 * @param {array.<string>} [chars=["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"]]
 * Array of characters representing loader steps
 * @param {number} [delay=100] Delay in ms between loader steps
 * @example
 * let loader = loadingAnimation("Loading…");
 *
 * // Stop loader after 1 second
 * setTimeout(() => clearInterval(loader), 1000);
 * @returns {number} An interval that can be cleared to stop the animation
 */

import chalk from 'chalk';

let interval: ReturnType<typeof setInterval>;

export default function loadingAnimation(
  text = '',
  delay = 100,
  chars = ['⠙', '⠘', '⠰', '⠴', '⠤', '⠦', '⠆', '⠃', '⠋', '⠉'],
) {
  let x = 0;

  if (interval) clearInterval(interval);

  interval = setInterval(function () {
    process.stdout.write(chalk.cyan(chars[x] + ' ' + text + '\r'));
    x = x % chars.length;
  }, delay);

  return interval;
}

export function stopLoadingAnimation() {
  process.stdout.write('\n');
  if (interval) clearInterval(interval);
}
