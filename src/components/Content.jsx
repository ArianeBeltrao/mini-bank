import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from "../views/Home"
import Param from "../views/Param"
import User from "../pages/User"

const Content = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home titulo='home'>children</Home>} />
            <Route path="/param/:id" element={<Param/>} />
            <Route path="/user" element={<User/>} />
        </Routes>
    </main>
)

export default Content