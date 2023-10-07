
import LayoutContainer from "../companents/layoutContainer";

function Basket({ cart, setCart }: any) {
  const removeFromCart = (productId: any) => {
    setCart((prevCart: any[]) => prevCart.filter((item) => item.id !== productId));
  };
  let totalPrice = 0;


  cart.forEach((item: { price: string; }) => {
    const itemPrice = parseFloat(item.price);

    if (!isNaN(itemPrice)) {
      totalPrice += itemPrice;
    }
  });

  return (
    <LayoutContainer>
      <div>basket</div>
      {cart.map((item:any) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        );
      })}
      <h1>${totalPrice.toFixed(2)}</h1>
    </LayoutContainer>
  );
}

export default Basket;
