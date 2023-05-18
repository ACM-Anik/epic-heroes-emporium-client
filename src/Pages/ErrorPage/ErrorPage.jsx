import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error } = useRouteError()

    return (
        <div className="hero min-h-screen" >
    <div className=""></div>
    <div className="hero-content text-center">
        <div className="max-w-md flex flex-col items-center justify-center px-5 my-8">
            
            <div className='max-w-lg text-center'>
                <img src='https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?w=740&t=st=1684410531~exp=1684411131~hmac=77c6c253f6e6d85e4b09e49749d5a44da1843680ab1c6d96bfd0d55dbfa5d52d' alt='404 error'/>
                <p className=' font-semibold md:text-3xl  mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn text-white rounded-lg border-0 bg-[#FF0000] hover:bg-[#cb0707]'>
                    Back to homepage
                </Link>
            </div>
        </div>
    </div>
</div>
       
    );
};

export default ErrorPage;
