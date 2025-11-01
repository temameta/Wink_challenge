import Checkbox from '@/components/Checkbox/Checkbox';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import Trash from '@/assets/Trash.svg';
import Trash2 from '@/assets/Trash2.svg';
import GoalItem from './GoalItem';
import ArrowLeft from '@/assets/ArrowLeft.svg';
import ArrowLeft2 from '@/assets/ArrowLeft2.svg';
import { FetchGoalResponse } from '@/app/fetchGoals';
import { useFetchGoal } from '@/app/hooks/api/useFetchGoal';
import { useRouter } from 'next/navigation';

interface GoalProps {
	goal: FetchGoalResponse;
}

const Goal: FC<GoalProps> = ({ goal }) => {
	const router = useRouter();
	const [isChecked, setIsChecked] = useState<boolean>(goal.isDone);
	const [tasksOpened, setTasksOpened] = useState<boolean>(false);

	return (
		<div className='bg-[#F0F0F0] relative shadow-[0px_4px_4px_0px_#00000040_inset] rounded-[20px]'>
			<img
				src={isChecked ? Trash.src : Trash2.src}
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
				<h2
					className={clsx('text-[24px] ml-[9px] cursor-pointer', {
						'text-[#0000005E] cursor-i': isChecked,
					})}
					onClick={() => {
						if (!isChecked) {
							router.push(`/goal/${goal.id}`);
						}
					}}
				>
					{goal.name}
				</h2>
				{isChecked && (
					<button
						onClick={() => router.push(`/self-assessment/${goal.id}`)}
						className='cursor-pointer text-[#F3F3F3] bg-[#FF7D51] text-[23px] text-center py-[9px] px-[12px] rounded-[4px] ml-[40px]'
					>
						Оценить себя
					</button>
				)}
			</div>
			<div className='bg-[#D3D2D2] rounded-[20px] relative w-full shadow-[0px_4px_4px_0px_#00000040_inset] min-h-[56px]'>
				<div className='flex h-full px-[31px] items-center relative min-h-[56px]'>
					{!tasksOpened && (
						<h2 className='text-[24px]'>Срок {goal.deadline.toLocaleDateString('ru-RU')}</h2>
					)}
				</div>
				<img
					src={isChecked ? ArrowLeft.src : ArrowLeft2.src}
					alt=''
					className={clsx('w-[40px] cursor-pointer duration-150 absolute right-[15px] top-[5px]', {
						'-rotate-90': tasksOpened,
					})}
					onClick={() => setTasksOpened((prev) => !prev)}
				/>
				{tasksOpened && (
					<div className='space-y-[17px] pb-[17px]'>
						{goal.tasks.map((task, taskInd) => {
							return <GoalItem key={task.id} task={task} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Goal;
