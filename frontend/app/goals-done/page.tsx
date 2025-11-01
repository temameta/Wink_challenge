'use client';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import Goal from '@/widgets/Goal/Goal';
import { useEffect, useState } from 'react';
import Plus from '@/assets/Plus2.svg';
import { useRouter } from 'next/navigation';
import { fetchGoals, FetchGoalResponse } from '../fetchGoals';

const GoalsDone = () => {
	const [searchValue, setSearchValue] = useState<string>();
	const router = useRouter();
	const [goals, setGoals] = useState<FetchGoalResponse[]>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchGoals();
				setGoals(data);
			} catch (err) {}
		};
		fetchData();
	}, [setGoals]);
	return (
		<div className='h-screen w-full'>
			<div className='ml-[41px] mt-[52px] mr-[154px]'>
				<SearchInput
					onChange={(value) => {
						setSearchValue(value);
					}}
					className='mb-[73px]'
				/>
				<div className='space-y-[30px]'>
					{goals?.map((goal) => {
						return (
							<div
								key={goal.id}
								className='relative shadow-[inset_0px_4px_4px_0px_#00000040] flex justify-between rounded-[20px] h-[153px] bg-[#F0F0F0]'
							>
								<div className='w-full'>
									<h2
										className='mt-[40px] ml-[10px] text-[24px] cursor-pointer'
										onClick={() => router.push(`/self-assessment/${goal.id}`)}
									>
										{goal.name}
									</h2>
									<div className='text-[24px] pl-[10px] bottom-0 absolute text-[#0C622B80] rounded-[20px] bg-[#D3D2D2] w-full py-[10px] shadow-[inset_0px_4px_4px_0px_#00000040]'>
										Выполнено 25.05.2026
									</div>
								</div>
								<div className='z-10 bg-[#999999] w-[217px] rounded-r-[20px] justify-center text-[#F3F3F3] flex items-center text-white text-[30px] text-center h-full shadow-[inset_0px_4px_4px_0px_#00000040]'>
									Результат
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default GoalsDone;
