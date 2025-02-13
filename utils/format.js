// utils/format.js
import { formatName, formatEmail } from '~/utils/format';

export function formatName(name) {
    return name.toUpperCase();
  }
  
  export function formatEmail(email) {
    return email.toLowerCase();
  }