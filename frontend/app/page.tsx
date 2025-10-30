'use client';
import Header from '@/components/Header/Header';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import Goal from '@/widgets/Goal/Goal';
import { useState } from 'react';

const Page = () => {
	const [searchValue, setSearchValue] = useState<string>();
	return (
		<div className='relative h-screen w-full'>
			<Header text='Мои цели' />
			<div className='ml-[41px] mt-[52px] mr-[154px]'>
				<SearchInput
					onChange={(value) => {
						setSearchValue(value);
					}}
				/>
				<Goal />
			</div>
		</div>
	);
};

export default Page;
