'use client';
import { useFetchGoal } from '@/app/hooks/api/useFetchGoal';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import AssessmentItem from './AssessmentItem';
import Save from '@/assets/Save.svg';
import { sendAssessment } from './sendAssessment';

interface AssessmentQuestion {
	text: string;
	numericValue: boolean;
}

const assessmentQuestions: AssessmentQuestion[] = [
	{
		text: `1. Впиши, используя шаблон, каких результатов удалось достичь. (пример: выявил возможность оптимизации количества кликов при оформлении подписки и после реализации улучшения рост по оплате подписки составил +1%)`,
		numericValue: false,
	},
	{
		text: `2. Какой личный вклад ты сделал в полученный результат? 
(пример: благодаря созданной документации команда находила решения в 1,5 раза быстрее)`,
		numericValue: false,
	},
	{
		text: `3. Что ты забираешь с собой по результатам выполнения этой задачи? 
(например: прокачался в микросервисах, хочу это развивать дальше)`,
		numericValue: false,
	},
	{
		text: `4. Что в следующий раз будешь делать по-другому?`,
		numericValue: false,
	},
	{
		text: `5. Как ты оцениваешь качество своего взаимодействия с коллегами, командой по данной задаче?`,
		numericValue: true,
	},
	{
		text: `6. Как ты оцениваешь общую удовлетворенность своим выполнением данной задачи?`,
		numericValue: true,
	},
];

const SelfAssessment = () => {
	const params = useParams<{ id: string }>();
	const [answers, setAnswers] = useState<Array<string | number>>([]);

	const { goal } = useFetchGoal(Number(params.id));

	const onSubmit = async () => {
		try {
			await sendAssessment(answers);
		} catch (error) {
			alert('Произошла ошибка');
		}
	};

	if (!goal) return <></>;

	return (
		<div className='pl-[60px] pt-[22px] pr-[136px]'>
			<h1 className='text-[32px] mb-[25px]'>Цель:</h1>
			<div className='text-[24px] py-[12px] pl-[10px] shadow-[inset_0px_4px_4px_0px_#00000040] bg-[#F0F0F0] rounded-[20px]'>
				{goal.name}
			</div>
			<div className='space-y-[58px] mt-[13px]'>
				{assessmentQuestions.map((qst, qstInd) => {
					if (qst.numericValue) {
						return (
							<AssessmentItem
								onAnswerChange={(answer) => {
									setAnswers((prev) => {
										const prevCopy = [...prev];
										prevCopy[qstInd] = answer;
										return prevCopy;
									});
								}}
								key={qstInd}
								text={qst.text}
								numericValue={true}
								answer={answers[qstInd] as number}
							/>
						);
					} else {
						return (
							<AssessmentItem
								onAnswerChange={(answer) => {
									setAnswers((prev) => {
										const prevCopy = [...prev];
										prevCopy[qstInd] = answer;
										return prevCopy;
									});
								}}
								key={qstInd}
								text={qst.text}
								numericValue={false}
								answer={answers[qstInd] as string}
							/>
						);
					}
				})}
			</div>
			<button
				onClick={() => onSubmit()}
				className='mb-[24px] shadow-[0px_4px_4px_0px_#00000040] flex gap-[20px] py-[14px] pl-[21px] items-center bg-[#EFEFEF] rounded-[20px] pr-[60px] mt-[40px] cursor-pointer'
			>
				<img src={Save.src} alt='' className='w-[48px] h-[48px]' />
				<p className='text-[24px]'>Сохранить</p>
			</button>
		</div>
	);
};

export default SelfAssessment;
