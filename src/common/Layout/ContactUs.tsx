import Footer from "./Footer";
import Button from "../Atom/Button";
import {EButtonVariant} from "../Atom/Button/types";

const ContactUs = () => {
    return (
        <>
            <div className='xl:flex-row items-center justify-start flex-col flex xl:justify-between w-full bg-blue-950 xl:px-28 py-6 px-5 gap-8'>
                <span className='text-white font-semibold text-4xl w-fit'>let's discuss making your interior like a dream place!</span>
                <div className='flex flex-col gap-2 w-full xl:w-fit xl:items-start items-center'>
                    <span className='text-gray200'>Contact us below to work together to build your amazing interior like a dream place!</span>
                    <Button variant={EButtonVariant.SECONDARY}>
                        Contact Us
                    </Button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;