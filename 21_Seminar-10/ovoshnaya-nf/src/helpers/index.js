const card = new Set();

export function addToCart(id) {
  card.add(id);
  console.log(
    "Thank you for adding the item, now you have amount - ",
    card.size
  );
}

export function deleteToCart(id) {
  card.delete(id);
  console.log(
    "Thank you for deleting the item, now you have amount - ",
    card.size
  );
}
