import {render, unmountComponentAtNode} from "react-dom";
// import {render} from '@testing-library/react';
import Expense from './Expense';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('income', ()=>{
  let income = 200;
  except(balance).toBe( 2298915);
})

test('expense', ()=>{
  let expense = 100;
  except(balance).toBe( 2298615);
})
