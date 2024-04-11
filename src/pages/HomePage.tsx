import sofaBackground from "assets/sofa.png"
import chair from "assets/chair.png"
import phoneHandler from "assets/phoneHandler.png"
import bigSofa from "assets/bigSofa.png"
import smallSofa from "assets/smallSofa.png"
import corridor from "assets/corridor.png"

const HomePage = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col items-center gap-8 max-w-[500px] m-auto'>
                <h1 className='font-bold md:text-[56px] text-4xl'>Minimalist Room</h1>
                <p className='text-center text-lg'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
            <img alt='Sofa Background' src={sofaBackground} className='object-fit' />
            <section className='flex flex-col gap-5 xl:flex-row'>
                <div className='flex-1'>
                    <h3 className='font-semibold mb-6 text-center xl:text-left xl:text-1xl text-3xl'>Project Overview</h3>
                    <p className='text-gray100 xl:text-lg text-2xl'>Online learning with us does not interfere with your daily life. because
                        learning can be done anytime and anywhere. Online learning with us does not interfere with your
                        daily life. because learning can be done anytime and anywhere. Online learning with us does not
                        interfere with your daily life. because learning can be done anytime and anywhere.</p>
                    <div className='flex gap-12 mt-12'>
                        <span className='text-gray100 xl:text-lg text-2xl'>July 22 - 2022</span>
                        <span className='text-gray100 xl:text-lg text-2xl'>Interior Design - Furniture</span>
                    </div>
                </div>
                <div className='flex-1'>
                    <h3 className='font-semibold mb-6 text-center xl:text-left xl:text-1xl text-3xl'>Design Process</h3>
                    <p className='text-gray100 mb-6 xl:text-lg text-2xl'>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
                    <span className='text-gray100 xl:text-lg text-2xl'>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</span>
                </div>
            </section>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-8'>
                <img alt='Char' src={chair} className='col-span-1 transition-all hover:opacity-80'/>
                <img alt='Phone Handler' src={phoneHandler} className='col-span-1 transition-all hover:opacity-80'/>
                <img alt='Big Sofa' src={bigSofa} className='xl:col-span-3 col-span-1 transition-all hover:opacity-80'/>
                <img alt='Small Sofa' src={smallSofa} className='col-span-1 transition-all hover:opacity-80'/>
                <img alt='Corridor' src={corridor} className='xl:col-span-2 col-span-1 transition-all hover:opacity-80'/>
            </div>
        </div>
    );
};

export default HomePage;