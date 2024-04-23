import React from 'react'
import Login from './login/login';
import { Route, Routes } from 'react-router-dom';
import Signup from './signup/signup';
import Homepage from './homepage/homepage';
import Choose from './choose/choose';
import Explore from './explore/explore';
import Delivery from './delivery/delivery';
import Followus from './followus/followus';
import Home from './home/home';

function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<Login></Login>}> </Route>
            <Route path="/signup" element={<Signup></Signup>}> </Route>
            <Route path="/homepage" element={<Homepage></Homepage>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/choose" element={<Choose></Choose>}></Route>
            <Route path="/explore" element={<Explore></Explore>}></Route>
            <Route path="/delivery" element={<Delivery></Delivery>}></Route>
            <Route path="/followus" element={<Followus></Followus>}></Route>
        </Routes>
    )
}
export default AppRouter;