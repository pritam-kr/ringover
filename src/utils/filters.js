export const filteredPriceRangeShoes = (array, price) => {
  let copied = [...array];

  if (!price) {
    return copied;
  }

  if (price === 700) {
    return copied.filter((eachShoes) => eachShoes.price >= price);
  } else if (typeof price === "object") {
    return copied.filter(
      (eachShoes) =>
        eachShoes.price >= price?.start && eachShoes.price <= price?.end
    );
  }
};
