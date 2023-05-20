import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch("https://epic-heroes-emporium.vercel.app/actionToys")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            })
    }, [])


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
                            allToys.map(toys => <SingleToy
                                key={toys._id}
                                toys={toys}
                            ></SingleToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;