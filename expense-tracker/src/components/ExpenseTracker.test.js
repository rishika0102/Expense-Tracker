import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import details from './ExpenseTracker';

it("Api testing", async function(){
  const response = new details();
  var data = await response.api();

  act(() => {
    render(< ExpenseTracker/>, response);
  });
  expect(response.details[1].name).toBe("jkjrgt");
  except(data.details[0].balance).toEqual(80493)
})


//act arrow function is used especially in the case of state changing
