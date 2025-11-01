'use client';
import Header from '@/components/Header/Header';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import Goal from '@/widgets/Goal/Goal';
import { useEffect, useState } from 'react';
import Plus from '@/assets/Plus2.svg';
import { useRouter } from 'next/navigation';
import { fetchGoals, FetchGoalResponse } from './fetchGoals';

const Page = () => {
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
			<div className='ml-[41px] mt-[52px] mr-[154px] md:mr-0'>
				<SearchInput
					onChange={(value) => {
						setSearchValue(value);
					}}
					className='mb-[73px]'
				/>
				<div className='space-y-[53px] relative'>
					{goals?.map((goal, goalInd) => {
						return <Goal key={goalInd} goal={goal} />;
					})}
					<div
						className='cursor-pointer absolute -right-[120px] bottom-[20px] flex justify-center items-center w-[83px] h-[82px] rounded-[50%] bg-[#FF7D51]'
						onClick={() => router.push('/create-goal')}
					>
						<img src={Plus.src} alt='' className='w-[42px]' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
