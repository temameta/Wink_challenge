import Bell from '@/assets/Bell.svg';
import User from '@/assets/User.svg';
import Home from '@/assets/Home.svg';
import NavbarLink from './NavbarLink';
import Header from '@/components/Header/Header';

interface INavbarLink {
	imgSrc: string;
	href: string;
}

const NavbarLinks: INavbarLink[] = [
	{
		imgSrc: Home.src,
		href: '/',
	},

	{
		imgSrc: Bell.src,
		href: '/',
	},
	{
		imgSrc: User.src,
		href: '/',
	},
];
const Navbar = () => {
	return (
		<div className='pl-[60px] justify-end bg-[#3C3C3C] w-full flex flex-col justify-between relative h-[112px] xl:h-auto xl:pl-0 xl:items-center'>
			<Header />
			<div className='flex justify-end items-start  gap-[15px] absolute top-[36px] right-[24px]'>
				{NavbarLinks.map((link, linkInd) => {
					return <NavbarLink key={linkInd} imgSrc={link.imgSrc} href={link.href} />;
				})}
			</div>
		</div>
	);
};

export default Navbar;
