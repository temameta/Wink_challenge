import Checkbox from '@/components/Checkbox/Checkbox';
import clsx from 'clsx';
import React, { useState } from 'react';
import Trash from '@/assets/Trash.svg';
import GoalItem from './GoalItem';
import ArrowLeft from '@/assets/ArrowLeft.svg';

const Goal = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	return (
		<div className='bg-[#F0F0F0] relative shadow-[0px_4px_4px_0px_#00000040_inset] rounded-[20px]'>
			<img
				src={Trash.src}
				alt=''
				className='absolute top-[25px] right-[21px] w-[40px] h-[40px] cursor-pointer'
			/>
			<div className='flex items-center pt-[50px] pl-[33px] pb-[17px] '>
				<Checkbox
					isChecked={isChecked}
					onClick={() => {
						setIsChecked(true);
					}}
				/>
				<h2 className={clsx('text-[24px] ml-[9px]', { 'text-[#0000005E]': isChecked })}>
					Разработать «Service Desk — Портал для IT-поддержки»
				</h2>
				{isChecked && (
					<button className='text-[#F3F3F3] bg-[#FF7D51] text-[23px] text-center py-[9px] px-[12px] rounded-[4px] ml-[40px]'>
						Оценить себя
					</button>
				)}
			</div>
			<div className='bg-[#D3D2D2] rounded-[20px] w-full shadow-[0px_4px_4px_0px_#00000040_inset]   min-h-[56px]'>
				<div className='flex justify-between h-full px-[31px] items-center'>
					<h2 className='text-[24px]'>Срок 25.05.2026</h2>
					<img src={ArrowLeft.src} alt='' className='w-[40px] cursor-pointer' />
				</div>
				{/* <GoalItem /> */}
			</div>
		</div>
	);
};

export default Goal;
