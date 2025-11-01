'use client';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

interface HeaderLink {
	text: string;
	href: string;
}

const headerLinks: HeaderLink[] = [
	{
		text: 'Самооценка',
		href: '/goals-done',
	},

	{
		text: 'Мои цели',
		href: '/',
	},
	{
		text: 'Оценка 360',
		href: '/asd',
	},
];

const Header = () => {
	const router = useRouter();
	const path = usePathname();
	return (
		<div className='bg-[#3C3C3C] w-full flex gap-[63px] cursor-pointer xl:flex-col xl:gap-[20px] xl:pt-[100px] xl:items-center'>
			{headerLinks.map((link, linkInd) => {
				return (
					<div
						className={clsx(
							'bg-[#000000] py-[12px] rounded-t-[15px] text-white w-[272px] text-[24px] text-center',
							{
								'bg-[#FF7D51]': path == link.href,
								'bg-[#000000]': path !== link.href,
							}
						)}
						key={linkInd}
						onClick={() => router.push(link.href)}
					>
						{link.text}
					</div>
				);
			})}
		</div>
	);
};

export default Header;
