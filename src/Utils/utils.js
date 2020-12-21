export const signNumber = (val) => {
  if (Number(val) > 0) {
    return '+' + val;
  } else if (Number(val) < 0) {
    return '-' +(-val);
  } else {
    return val;
  }
};
