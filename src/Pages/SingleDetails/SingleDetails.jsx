import { useEffect, useState } from "react";


const SingleDetails = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('', )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDetails(data);
        })
    }, [])

    return (
        <div>
            <div>
                <h1>Single Details</h1>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SingleDetails;