import { Box, Container, Stack, Typography } from "@mui/material"
import LayoutContainer from "../companents/layoutContainer";
import CloseIcon from '@mui/icons-material/Close';

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
        <div className="basket-big-contaner">
            {cartItems.map((item: any) => {
                return (
                    <Container>
                    <div className="container-basket" key={item.id}>
                    <div className="basket-page">
                        <img className="basket-img" src={`./Imge/${item.img}.png`}/>

                        <div className="basket-ad">
                            <h3>mehsulun adi</h3>
                            <h3>{item.item}</h3>
                        </div>

                        <div className="basket-say">
                            <h3>say</h3>
                            <h3>{item.count}</h3>
                        </div>

                        <div className="basket-price">
                            <h3>qiymet</h3>
                            <h3>{item.count * item.price} $</h3>
                        </div>
                    </div>

                        <div className="basket-close" onClick={() => removeFromCart(item.id)}>
                            <CloseIcon/>
                        </div>
                    </div>
                    </Container>
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

