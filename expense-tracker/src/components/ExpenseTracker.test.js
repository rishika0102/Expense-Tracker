import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import details from './ExpenseTracker';

it("Api testing", async function(){
  const response = new details();
  var data = await response.api();

  except(data.details[0].balance).toEqual(80493)
})
