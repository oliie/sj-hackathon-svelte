export const numberWithSpaces = (n) => {
  return n ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : 0;
};
