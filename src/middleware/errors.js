export const catchAsync = (handler) => (...args) =>
  handler(...args).catch((error) => console.log('We got error: ', error));
