import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';

const AddAtoy = () => {
    const { user } =useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const seller_email = form.sellerEmail.value;
        const category_name = form.category.value;
        const seller_name = form.seller.value;
        const description = form.details.value;
        const picture = form.photo.value;

        const newToy = { toy_name, picture, price, rating, quantity, seller_email, seller_name, category_name, description }

        console.log(newToy);

        fetch('https://epic-heroes-emporium.vercel.app/actionToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div className='bg-red-100 p-6 mb-10'>
            <div className='text-center '>
                <h2 className="text-5xl font-extrabold">Add Toys</h2>
                <p className='text-base font-semibold w-3/4 lg:w-2/4 mx-auto my-3'>Here you can add any action-toy product to the website for sell by fill-up all these following information fields.</p>
            </div>
            <div className="p-8 lg:px-20 lg:py-10">
                <form onSubmit={handleAddToy}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" placeholder="Toy Name" name="name" className="input input-bordered w-full rounded-lg" />
                        </div>
                        <div className="form-control md:w-1/2  ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full rounded-lg" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>                    
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="seller" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full rounded-lg" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>                    
                            <input type="text" defaultValue={user?.email} placeholder="Seller Email" name="sellerEmail" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full rounded-lg" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <input type="submit" value="Add The Toy" className="btn btn-block text-white border-0 bg-[#FF0000] hover:bg-[#cb0707] rounded-lg" />
                </form>
            </div>
        </div>
    );
};


export default AddAtoy;