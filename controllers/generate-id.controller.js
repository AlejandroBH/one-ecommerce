'use strict';

export const generateId = () => {
  return Math.random().toString(30).substring(2);
}
