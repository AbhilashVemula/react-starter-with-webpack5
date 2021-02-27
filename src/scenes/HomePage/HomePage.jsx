import React from "react";
import "./Styles.scss";
import Component1 from '../../components/Component1';
import Component2 from '../../components/Component2';

// each scene means each page 
// a page can have any num of components
const HomePage = () => {
    return (
        <>
           <Component1/>
           <Component2/>
        </>
    );
};

export default HomePage;