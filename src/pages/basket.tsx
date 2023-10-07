
import LayoutContainer from "../companents/layoutContainer";

function Basket({ cartItems, setCartItems }: any) {
  const removeFromCart = (productId: any) => {
    setCartItems((prevCart: any[]) => prevCart.filter((item) => item.id !== productId));
  };

  const totalItemCount = cartItems.reduce(
    (total: any, item: { count: any }) => total + item.count,
    0
  );
  const getTotalItemAmount = cartItems.reduce(
    (total: number, item: { count: number; price: number }) => total + item.count * item.price,
    0
  );
//   const [basket , setbasket] = useState()

  return (
    <LayoutContainer>
    {cartItems && totalItemCount !==0? (
        <div>
            {cartItems.map((item: any) => {
                return (
                    <div key={item.id}>
            <h1>{item.title}</h1>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        );
    })}
    <h1>Total Items: {totalItemCount}</h1>
    <h1>Total Amount: ${getTotalItemAmount.toFixed(2)}</h1>
        </div>
    ) : <div style={{display:'flex' , justifyContent:"center" , padding:'50px'}}>
        <h1>Sebet bosdu</h1>
    </div>

    }
    </LayoutContainer>
  );
}

export default Basket;

