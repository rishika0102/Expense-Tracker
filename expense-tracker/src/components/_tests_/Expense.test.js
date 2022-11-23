import renderer from 'react-test-renderer';
import Expense from '../Expense';

test('set income', ()=> {
  render(<Expense/>);
  const linkElement = screen.getByText(/{balance}/i);
  expect(linkElement).toBeInTheDocument();
});

