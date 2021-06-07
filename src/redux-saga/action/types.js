// Hanh dong se truyen di
export const REQUEST_SERVER_DATA = Symbol('REQUEST_SERVER_DATA');

// Hanh dong REQUEST_SERVER_DATA no se duoc middleware - redux saga tiep nhan
// Action ma saga se tra ve va sau nay se dispatch vao store  

export const START_GET_DATA = Symbol('START_GET_DATA');
export const GET_DATA_SUCCESS = Symbol('GET_DATA_SUCCESS');
export const GET_DATA_FAIL = Symbol('GET_DATA_FAIL');
export const FINISH_GET_DATA = Symbol('FINISH_GET_DATA');
