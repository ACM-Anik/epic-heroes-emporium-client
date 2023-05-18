import { Link } from "react-router-dom";

const SingleToy = ({ category }) => {
    const { heroes } = category;
    console.log(category);


    return (
        <>
            {
                heroes.map(hero =>
                    <tr key={hero.id}>
                        <td>
                            <div className="avatar">
                                <div className="rounded w-24 h-24">
                                    {
                                        hero.picture && <img src={hero.picture} alt="service" />
                                    }
                                </div>
                            </div>
                        </td>
                        <td>{hero.seller}</td>
                        <td>{hero.name}</td>
                        <td>
                            {hero.category_name}
                        </td>
                        <td>{"$" + hero.price}</td>
                        <td>{hero.quantity} pieces</td>
                        <th>
                            <Link to="/singleDetails">
                                <button className="btn btn-sm text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]">View Details </button>
                            </Link>
                        </th>
                    </tr>)
            }

        </>
    );
};

export default SingleToy;