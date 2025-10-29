import Link from 'next/link';
import React, { FC } from 'react';

interface INavbaLinkProps {
	href: string;
	imgSrc: string;
}
const NavbarLink: FC<INavbaLinkProps> = ({ href, imgSrc }) => {
	return (
		<Link href={href} className='cursor-pointer'>
			<img src={imgSrc} alt='' className='w-[40px] h-[40px]' />
		</Link>
	);
};

export default NavbarLink;
