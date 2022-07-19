
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './redux/store'
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Main } from './components/Main';
import  {CartList}  from './components/CartList';
import { DetailView } from './components/DetailView';
import { addToCart, removeFromCart } from "./redux/shopping/shopping-actions";
// import {detailView} from "./redux/detailView/detail-view-actions"

function App() {
  // return (
  //   <div className="App">
  //     {/* <Products></Products> */}
  //     <Routes>
  //       <Route path="/Registration" element={<Registration />}></Route>
  //       <Route path="/Login" element={<Login />} ></Route>
  //       {/* <Route path="/Products" element={<Products />} ></Route>          */}
  //     </Routes>
  //   </div>
  // );
  const dispatch = useDispatch();

  const onAdd = (items) => {
    dispatch(addToCart(items));
  }
  const onRemove = (items) => {
    dispatch(removeFromCart(items));
  }

  return (
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/DetailView/:productId" element={<DetailView onAdd={onAdd} />}></Route>
          <Route path="/cart" element={<CartList onAdd={onAdd} onRemove={onRemove} />} ></Route>
        </Routes>
    </Provider>
  );
}

export default App;
