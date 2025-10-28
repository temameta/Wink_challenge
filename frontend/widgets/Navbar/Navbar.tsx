import Bell from '@/assets/Bell.svg';
import User from '@/assets/User.svg';
import NavbarLink from './NavbarLink';
interface INavbarLink {
	imgSrc: string;
	href: string;
}

const NavbarLinks: INavbarLink[] = [
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
		<div className='bg-[#3C3C3C] w-full flex flex-col justify-between'>
			<div className='flex justify-end items-start pr-[33px] pt-[23px] pb-[31px]  gap-[15px]'>
				{NavbarLinks.map((link, linkInd) => {
					return <NavbarLink key={linkInd} imgSrc={link.imgSrc} href={link.href} />;
				})}
			</div>
		</div>
	);
};

export default Navbar;
