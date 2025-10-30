const Header = ({ text }: { text: string }) => {
	return (
		<div className='bg-[#3C3C3C] w-full'>
			<div className='py-[12px] flex bg-[#FF7D51] justify-center items-center w-full rounded-[15px] shadow-[0px_4px_4px_0px_#00000040]'>
				<h1 className='font-normal text-[24px] text-white'>{text}</h1>
			</div>
		</div>
	);
};

export default Header;
