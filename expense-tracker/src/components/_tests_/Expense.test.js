import renderer from 'react-test-renderer';
import Expense from '../Expense';

test('set income', ()=> {
  const comp = renderer.create(
    <Expense>expense</Expense>,
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapchsot();
})

