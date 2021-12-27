import { expect, test, jest } from "@jest/globals";
import { mount } from '@vue/test-utils'

import  isItLittleFriday from '../src/main.js';

test('Should throw an error', async () => {
  expect(() => {
    throw new TypeError();
  }).toThrow(
    TypeError
  );
});

test('Should initialize', async () => {
  expect(() => {
    document.body.innerHTML = `
    <div id="alma"></div
  `;
    return  new isItLittleFriday("#app");
  }).toBeInstanceOf(Function);
});
