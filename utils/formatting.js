export const formatNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// export const yourFunctionName = () => console.log("say hello");

// export default () => console.log("say hello");

// const hello = () => console.log("say hello");
// export default hello;
