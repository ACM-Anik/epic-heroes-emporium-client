import img from '../../../assets/customer-services.webp';

const OurCustomerServices = () => {
    return (
        <div className='my-16' data-aos="zoom-out">
            <div className='text-center my-8'>
                <h1 className='text-4xl md:text-5xl font-bold'>Our Customer Services</h1>
                <p className='font-semibold my-4 w-3/6 mx-auto'>Striving for excellence in every interaction with our valued customers. Where customer service meets excellence, every step of the way.</p>
            </div>
            <div>
                <img className='object-cover shadow-md' src={img} alt="customer services" />
            </div>
        </div>
    );
};

export default OurCustomerServices;