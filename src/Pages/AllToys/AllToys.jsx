import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";

const AllToys = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])

    // const [allHeros, setAllHeros] = useState([]);
    // const heros = categories.map(hero => setAllHeros)

    return (
        <div className="mb-10">
            <div className="my-16">
                <h2 className="text-5xl font-bold text-center">ALL <span className="text-[#FF0000]">TOYS</span></h2>
                <p className="text-base font-semibold text-center w-2/4 mx-auto my-4">All the toys our sellers added for sell here we have. Our products have the best quality in the market. We filter the best product for the customers. </p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full bg-slate-100">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>sub-Category</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            categories.map(category => <SingleToy
                                key={category._id}
                                category={category}
                            ></SingleToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;