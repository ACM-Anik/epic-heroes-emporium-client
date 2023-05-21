import { Link } from "react-router-dom";

const AllToyRow = ({ toys }) => {
    const { _id, picture, toy_name, seller_name, category_name, price, quantity} = toys;



    return (
        <>
            <tr>
                <td>
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                picture && <img src={picture} alt="service" />
                            }
                        </div>
                    </div>
                </td>
                <td>{seller_name}</td>
                <td>{toy_name}</td>
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

export default AllToyRow;