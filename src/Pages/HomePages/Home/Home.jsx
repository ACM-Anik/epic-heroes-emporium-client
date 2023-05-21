import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import OurCustomerServices from "../OurCustomerServices/OurCustomerServices";
import OurPartners from "../OurPartners/OurPartners";


const Home = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("https://epic-heroes-emporium.vercel.app/actionToys")
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
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;