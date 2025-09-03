import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export function sanitize(dirty) {
  return purify.sanitize(dirty, {
    ADD_ATTR: ['target'], // Allow target attribute for links
    ADD_TAGS: ['iframe'], // Allow iframes if needed
  });
}