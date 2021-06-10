export const getUrl = (pic, dir = 'images') => {
  return require(`../assets/${dir}/${pic}.svg`);
}