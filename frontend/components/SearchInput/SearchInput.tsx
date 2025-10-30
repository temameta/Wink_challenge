import { FC } from 'react';
import Search from '@/assets/Search.svg';
import Filter from '@/assets/Filter.svg';

interface SearchInputProps {
	onChange: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
	return (
		<div className='flex justify-between w-full '>
			<div className='flex gap-[8px] bg-[#cdcdcd] p-[11px]  rounded-[100px] w-full'>
				<img src={Search.src} alt='' />
				<input
					type='text'
					onChange={(e) => onChange(e.target.value)}
					placeholder='Поиск'
					className=' text-[17px] flex-1'
				/>
			</div>
			<img src={Filter.src} alt='' className='ml-[10px]' />
		</div>
	);
};
