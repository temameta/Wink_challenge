import ArrowLeft from '@/assets/ArrowLeft.svg';

const GoalItem = () => {
	return (
		<div className='bg-[#D3D2D2] rounded-[20px] w-full flex justify-between shadow-[0px_4px_4px_0px_#00000040_inset] px-[31px] items-center h-[56px]'>
			<h2 className='text-[24px]'>Срок 25.05.2026</h2>
			<img src={ArrowLeft.src} alt='' className='w-[40px] cursor-pointer' />
		</div>
	);
};

export default GoalItem;
