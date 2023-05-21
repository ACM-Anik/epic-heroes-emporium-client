import { Link } from "react-router-dom";


const MyToyRow = ({ toys, handleDelete }) => {
    const {
        _id,
        picture,
        toy_name,
        seller_name,
        seller_email,
        category_name,
        price, rating,
        quantity,
        description
    } = toys;

    const MAX_DESCRIPTION_LENGTH = 15;
    const truncatedDescription = description.length > MAX_DESCRIPTION_LENGTH
    ? description.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
    : description;

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
                <td>{toy_name}</td>
                <td>{category_name}</td>
                <td className="description-cell overflow-hidden whitespace-nowrap">
                    {truncatedDescription}
                </td>
                <td>{"$" + price}</td>
                <td>{rating}</td>
                <td>{quantity} pieces</td>
                <td>{seller_name}</td>
                <td>{seller_email}</td>
                <td>
                    <Link to={`/updateToy/${_id}`}>
                        <button className="btn btn-sm text-white rounded-lg border-0 bg-[#000000] hover:bg-[#131111e8]">Update </button>
                    </Link>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]">Delete </button>
                </td>
            </tr>
        </>
    );
};

export default MyToyRow;