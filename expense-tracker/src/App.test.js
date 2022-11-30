import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  ReactDom.render(<App />);
  const linkElement = screen.getByText(/Expense Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

//test() method has three arguments
// 1)name of test
// 2)funtion that contains exceptation
// 3)optional timeout (default timout value is 5 secs)
