import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateToy = () => {
    const toy = useLoaderData();
    const { _id, toy_name, picture, price, rating, quantity, category_name, description } = toy;
    const navigate = useNavigate();

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category_name = form.category.value;
        const description = form.description.value;
        const picture = form.photo.value;

        const updatedToy = { toy_name, picture, price, rating, quantity, category_name, description }
        console.log(updatedToy);

        fetch(`https://epic-heroes-emporium.vercel.app/actionToys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                      navigate("/myToys");
                }
            })
    }

    return (
        <div className='bg-red-100 p-6 mb-10'>
            <div className='text-center '>
                <h2 className="text-5xl font-extrabold">Update Toys</h2>
                <p className='text-base font-semibold w-3/4 lg:w-2/4 mx-auto my-3'>Here you can add any action-toy product to the website for sell by fill-up all these following information fields.</p>
            </div>
            <div className="p-8 lg:px-20 lg:py-10">
                <form onSubmit={handleUpdateToy}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" defaultValue={toy_name} placeholder="Toy Name" name="name" className="input input-bordered w-full rounded-lg" />
                        </div>
                        <div className="form-control md:w-1/2  ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" defaultValue={quantity} placeholder="Available Quantity" name="quantity" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full rounded-lg" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>                    
                            <input type="text" defaultValue={rating} placeholder="Rating" name="rating" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" defaultValue={category_name} name="category" placeholder="Category Name" className="input input-bordered w-full rounded-lg" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" defaultValue={picture} name="photo" placeholder="Photo URL" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" defaultValue={description} name="description" className="input input-bordered w-full rounded-lg" />
                        </div>
                    </div>
                    <input type="submit" value="Update The Toy" className="btn btn-block text-white border-0 bg-[#FF0000] hover:bg-[#cb0707] rounded-lg" />
                </form>
            </div>
        </div>
    );
};


export default UpdateToy;