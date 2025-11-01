import React, { FC, useState } from 'react';
import Check from '@/assets/Check.svg';
import clsx from 'clsx';

interface CheckboxProps {
	className?: string;
	onClick: () => void;
	isChecked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ className, onClick, isChecked }) => {
	return (
		<div
			className={clsx('border-[3.5px] w-[30px] h-[30px] rounded-[6px]  cursor-pointer', className)}
			onClick={() => onClick()}
		>
			{isChecked && <img src={Check.src} alt='' className='pl-[5px] pb-[8px] w-[32px] max-w-[100px]' />}
		</div>
	);
};

export default Checkbox;
