import Plus from '@/assets/Plus.svg';
import clsx from 'clsx';
import { FC } from 'react';

interface IPLusButtonProps {
	onClick: () => void;
	className?: string;
}

const PlusButton: FC<IPLusButtonProps> = ({ onClick, className }) => {
	return (
		<div className={clsx('cursor-pointer', className)} onClick={() => onClick()}>
			<img src={Plus.src} alt='#' className='w-[32px]' />
		</div>
	);
};

export default PlusButton;
