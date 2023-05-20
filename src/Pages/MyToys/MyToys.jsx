import { useContext, useEffect, useState } from "react";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    
    useEffect(() => {
        fetch(`https://epic-heroes-emporium.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
            })
    }, [user])



    const handleDelete = (_id) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3bd630',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://epic-heroes-emporium.vercel.app/actionToys/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                                const remaining = myToys.filter(toy => toy._id !==  _id);
                                setMyToys(remaining);
                            }
                        })
                }
            })
    }

    return (
        <>
            {
                myToys ?
                    <div className="my-16">
                        <div className="my-10">
                            <h2 className="text-5xl font-bold text-center">My <span className="text-[#FF0000]">TOYS</span></h2>
                            <p className="text-base font-semibold text-center w-2/4 mx-auto my-4">All the toys our sellers added for sell here we have. Our products have the best quality in the market. We filter the best product for the customers. </p>
                        </div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full bg-slate-100">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Toy Name</th>
                                        {/* <th>Details</th> */}
                                        <th>Category</th>
                                        <th>price</th>
                                        <th>Rating</th>
                                        <th>Available Quantity</th>
                                        <th>Seller</th>
                                        <th>Seller Email</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myToys.map(toys => <MyToyRow
                                            key={toys._id}
                                            toys={toys}
                                            handleDelete={handleDelete}
                                        ></MyToyRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <h2 className="text-center text-5xl font-bold">You didn't added any action toy product yet!</h2>
            }
        </>
    );
};

export default MyToys;