import React from 'react';
import ExpenseTrackerForm from './ExpenseTrackerForm';
import transaction from './ExpenseTrackerForm';
import api from '../api/transaction';

it("Api testing", async function(){
  const response = new transaction();
  var data = await response.api();
  let amount = 5000;
  except(amount).toEqual(5000)

jest.mock("./transaction");

render.act('mocking api', async ()=> {
  api.getData().mockResolvedValueOnce({ok: true});

  expect(api.getData).toHaveBeenCalledTimes(5);
})

});
