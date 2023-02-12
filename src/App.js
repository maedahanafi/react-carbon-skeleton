import React from "react";
import {
  Content,
  Header, HeaderName, 
} from "@carbon/react";
import "./app.scss";
import Homepage from "./pages/HomePage/Homepage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UploadsPage from "./pages/UploadsPage/UploadsPage";
import Navigation from "./components/navigation/Navigation";
import { Provider, useSelector } from "react-redux";
import { Store, Persistor } from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Content>
          <Header aria-label="Header for Our Skeleton App">
          <HeaderName href="https://react.carbondesignsystem.com/" prefix="Carbon Design System">
            Header for Our Skeleton App
          </HeaderName>
        </Header>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Navigate to="/homepage" />} />
            
            <Route path="/homepage" element={<Homepage />} />
            
            <Route path="/upload" element={<UploadsPage />} />
            
            <Route path="/profile" element={<ProfilePage />} />
            
          </Routes>
        </Content>  
      </PersistGate>
    </Provider>
  </BrowserRouter>);
  
}

export default App;
