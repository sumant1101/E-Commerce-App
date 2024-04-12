import App from "../App";
import AddAddress from "../Private/Common/AddAdress";
import EditProfile from "../Private/Common/EditProfile";
import Cart from "../Private/Customer/Cart";
import Explore from "../Private/Customer/Explore";
import WishList from "../Private/Customer/WishList";
import AddProduct from "../Private/Seller/AddProduct";
import SellerDashboard from "../Private/Seller/SellerDashboard";
import Home from "../Public/Home";
import Login from "../Public/Login";
import Register from "../Public/Register";

const AllRoutes = () =>{
    const user = {
        userId : "123",
        username : "abc",
        role : "CUSTOMER",
        authenticated : true,
        accessExpiration : 3600,
        refreshExpiration : 1296000
    }
    const {role, authenticated} = user;
    let routes = [];

    if(authenticated)
    {
         (role==="SELLER") ?
         routes.push(
            <Route path='/seller-dashboard' element={<SellerDashboard />}  />,
            <Route path='/add-product' element={<AddProduct />}  />
         )
         : (role==="CUSTOMER") &&
         routes.push(
            <Route path='/explore' element={<Explore />}  />,
            <Route path='/cart' element={<Cart />}  />,
            <Route path='wishlist' element={<WishList />} />
         )
         routes.push(
            <Route path='/' element={<Home />}  />,
            <Route path='/add-Address' element={<AddAddress />}  />,
            <Route path='edit-profile' element={<EditProfile />} />
         )
    }
    else
    {
        (role==="CUSTOMER") &&
        setRoutes([...routes,
            <Route path='/explore' element={<Explore />}  />,
            <Route path='/' element={<Home />}  />,
            <Route path='login' element={<Login />} />,
            <Route path='register' element={<Register />} />
        ])
    }

    return(
        <Routes>
            <Route path='/' element={<App />}>{routes}</Route>
        </Routes>
    );
}

export default AllRoutes