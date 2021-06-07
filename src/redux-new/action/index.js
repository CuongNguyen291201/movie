import * as types from './types';

// Dinh nghia cac action
// Pure function: Xu ly tham so truyen vao, bussiness noi tai khong anh huong den ben ngoai
// Return object: co 2 thanh phan co ban: types and payload

export const incrementCount = (val) => ({
  type: types.INCREMENT_COUNT,
  val
})

export const decrementCount = (val) => ({
  type: types.DECREMENT_COUNT,
  val
})