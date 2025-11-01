import { Task } from '@/app/fetchGoals';
import ArrowLeft from '@/assets/ArrowLeft.svg';
import Checkbox from '@/components/Checkbox/Checkbox';
import { FC, useState } from 'react';

interface GoalItemProps {
	task: Task;
}

const GoalItem: FC<GoalItemProps> = ({ task }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	return (
		<div className=' bg-[#F0F0F0] rounded-[20px] w-full flex justify-between shadow-[0px_4px_4px_0px_#00000040_inset] pl-[78px] pr-[40px] items-center h-[67px]'>
			<div className='flex gap-[13px] items-center'>
				<Checkbox
					onClick={() => {
						setIsChecked((prev) => !prev);
					}}
					isChecked={isChecked}
				/>
				<h2 className='text-[24px]'>{task.name}</h2>
			</div>
			<h2 className='text-[24px]'>Срок {task.deadline.toLocaleDateString('ru-RU')}</h2>
		</div>
	);
};

export default GoalItem;
