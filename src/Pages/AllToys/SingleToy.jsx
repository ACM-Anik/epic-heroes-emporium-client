import { Link } from "react-router-dom";

const SingleToy = ({ toys }) => {
    const { _id, picture, name, seller, category_name, price, quantity} = toys;
    console.log(toys);


    return (
        <>
            <tr key={_id}>
                <td>
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                picture && <img src={picture} alt="service" />
                            }
                        </div>
                    </div>
                </td>
                <td>{seller}</td>
                <td>{name}</td>
                <td>
                    {category_name}
                </td>
                <td>{"$" + price}</td>
                <td>{quantity} pieces</td>
                <th>
                    <Link to={`/singleDetails/${_id}`}>
                        <button className="btn btn-sm text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]">View Details </button>
                    </Link>
                </th>
            </tr>
        </>
    );
};

export default SingleToy;