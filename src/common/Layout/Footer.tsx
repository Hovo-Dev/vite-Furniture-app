import socialLinks from "constants/socials";
import LogoIcon from "assets/vectors/Logo.svg?react";
import ArrowRight from "assets/vectors/ArrowRight.svg?react"

const Footer = () => (
    <footer
        className='flex flex-col items-center gap-10 md:items-start md:flex-row md:justify-between xl:py-20 xl:pb-20 xl:px-32 px-5 py-10'>
        <div className='flex flex-col gap-1 self-start'>
            <LogoIcon/>
            <p className='font-semibold text-4xl text-gray300'>One of the best furniture agency.</p>
        </div>
        <div className='flex flex-col items-center md:items-end gap-10 md:w-fit w-full'>
            <div className='flex items-end justify-between border-b-2 border-black md:min-w-[400px] w-full'>
                <label className='flex flex-col gap-4'>
                    <span
                        className='flex items-center gap-2 before:bg-black before:w-[8px] before:h-[8px] before:rounded'>
                    Enter your email to get the latest news
                    </span>
                    <input placeholder='Email Address' className='bg-transparent'/>
                </label>
                <ArrowRight className='mb-4'/>
            </div>
            <div className='flex flex-col gap-3 items-center md:items-end'>
                <p className='text-gray300 text-base'>Follow us On</p>
                <div className='flex gap-6'>
                    {socialLinks.map(({id, link, Icon}) => (
                        <a key={id} href={link} target='_blank' className='bg-gray400 p-2 rounded-full'>
                            <Icon className='md:w-6 md:h-6 w-8 h-8'/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;