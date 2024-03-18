// component that displays a single bakery item

export function BakeryItem(props) {
  const { name, description, price, image, addToCart, altText } = props;
  return (
    <div class="bakery-item">
      <img class="food-image" alt={altText} src={image} />

      <h1 class="header">{name}</h1>
      <p class="body-text">{description}</p>
      <div class="price">
        <p class="body-text"> $ {price}</p>
      </div>

      <button onClick={() => addToCart(name, price)}>
        <h1 class="button-text">Add to Cart</h1>
      </button>
    </div>
  );
}
