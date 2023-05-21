import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import { Helmet } from "react-helmet";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://epic-heroes-emporium.vercel.app/actionToys")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            })
    }, [])

    const handleSearch = () => {
        if(search){
            fetch(`https://epic-heroes-emporium.vercel.app/toySearchByName/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            })
        }
    }


    return (
        <div className="mb-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Toys-Epic Heroes Emporium</title>
            </Helmet>
            <div className="my-16">
                <h2 className="text-5xl font-bold text-center">ALL <span className="text-[#FF0000]">TOYS</span></h2>
                <p className="text-base font-semibold text-center w-2/4 mx-auto my-4">All the toys our sellers added for sell here we have. Our products have the best quality in the market. We filter the best product for the customers. </p>
            </div>

            <div className="mb-6 flex justify-center items-center gap-2">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by toy name" className="input input-bordered input-error w-full max-w-xs rounded-lg" />
                <button onClick={handleSearch} className="btn btn-outline text-[#FF0000] rounded-lg border-[#FF0000]  hover:bg-[#cb0707]">Search</button>
            </div>

            <div className="overflow-x-auto w-full" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
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
                            allToys.map(toys => <AllToyRow
                                key={toys._id}
                                toys={toys}
                            ></AllToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;