import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import OurCustomerServices from "../OurCustomerServices/OurCustomerServices";


const Home = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/actionToys")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data);
            })
    }, [])


    return (
        <div>
            <Banner></Banner>
            <OurCustomerServices></OurCustomerServices>
            <Gallery></Gallery>
            <ShopByCategory toys={toys}></ShopByCategory>
        </div>
    );
};

export default Home;