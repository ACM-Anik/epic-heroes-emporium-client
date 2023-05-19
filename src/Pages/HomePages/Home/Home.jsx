import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])


    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory categories={categories}></ShopByCategory>
        </div>
    );
};

export default Home;