import clsx from 'clsx';
import { FC } from 'react';

interface AssessmentItemNumericProps {
	text: string;
	numericValue: true;
	answer: number;
	onAnswerChange: (answer: string | number) => void;
}

interface AssessmentItemStrProps {
	text: string;
	numericValue: false;
	answer: string;
	onAnswerChange: (answer: string | number) => void;
}

type AssessmentItemProps = AssessmentItemNumericProps | AssessmentItemStrProps;

const AssessmentItem: FC<AssessmentItemProps> = ({ text, numericValue, answer, onAnswerChange }) => {
	return (
		<div className='w-full border p-[20px] shadow-[0px_4px_4px_0px_#00000040]'>
			<p className='text-[24px] mb-[10px]'>{text}</p>
			{numericValue ? (
				<div className='flex w-full justify-center gap-[23px] mt-[10px]'>
					{Array.from({ length: 10 }).map((el, elInd) => {
						return (
							<div key={elInd}>
								<div
									onClick={() => {
										onAnswerChange(elInd + 1);
									}}
									className={clsx(
										'cursor-pointer rounded-[50%] w-[40px] h-[40px] border after:content-[""] relative after:absolute after:w-[23px] after:h-[23px] after:bg-[#FF7D51] after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2',
										{
											'after:block': answer !== undefined && elInd + 1 <= answer,
											'after:hidden': answer === undefined || elInd + 1 > answer,
										}
									)}
								></div>
								<p className='mt-[5px] text-[20px] text-center'>{elInd + 1}</p>
							</div>
						);
					})}
				</div>
			) : (
				<textarea
					onChange={(e) => {
						onAnswerChange(e.target.value);
					}}
					name=''
					id=''
					rows={4}
					className='rounded-[20px] bg-[#F0F0F0] shadow-[inset_0px_4px_4px_0px_#00000040] w-full p-[5px]'
				></textarea>
			)}
		</div>
	);
};

export default AssessmentItem;
