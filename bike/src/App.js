import React, {useRef} from 'react';
import Provider from './containers/Context';
import Header from './containers/Header/Header';
import Product from './containers/Product/Product';
import Posts from './containers/Posts/Posts';
import Order from './containers/Order/Order';
import Footer from './containers/Footer/Footer';

 function App() {
     const productRef = useRef(null);
     const orderRef = useRef(null);

     const handleProductScroll = () => {
          productRef.current.scrollIntoView({behavior: 'smooth', block : 'center'})
     };

     
     const handleOrderScroll = () => {
          orderRef.current.scrollIntoView({behavior: 'smooth'})
     };
  return (
       <Provider>
            <Header handleProductScroll={handleProductScroll}/>
            <Product ref={productRef} handleProductScroll={handleOrderScroll}/>
            <Posts />
            <Order ref={orderRef} />
            <Footer />
       </Provider>  
     );
}
export default App;
