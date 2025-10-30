'use client';
import PlusButton from '@/components/PlusButton/PlusButton';
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { createGoal } from './createGoal';
import Save from '@/assets/Save.svg';
import Close from '@/assets/Close.svg';
import Close2 from '@/assets/Close2.svg';
import Header from '@/components/Header/Header';

enum Priorities {
	Low = 'Низкий',
	Medium = 'Средний',
	Critical = 'Критичный',
}

interface ITask {
	name: string;
	deadline: Date;
	priority: Priorities;
}

interface IGoal {
	name: string;
	goalDeadline: Date;
	description: string;
	expectedResults: string;
	tasks: ITask[];
}

const CreateGoal = () => {
	const {
		control,
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		watch,
	} = useForm<IGoal>({
		defaultValues: {
			name: '',
			goalDeadline: new Date(),
			description: '',
			expectedResults: '',
			tasks: [{ name: '', deadline: new Date(), priority: Priorities.Medium }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'tasks',
		rules: {
			required: 'Добавьте хотя бы одну задачу',
			minLength: {
				value: 1,
				message: 'Добавьте хотя бы одну задачу',
			},
		},
	});

	const onSubmit: SubmitHandler<IGoal> = async (data) => {
		try {
			await createGoal({
				name: data.name,
				description: data.description,
				deadline: data.goalDeadline,
			});
		} catch (error) {
			console.error('Ошибка при создании цели:', error);
			alert('Произошла ошибка при создании цели');
		}
	};

	const addTask = () => {
		append({
			name: '',
			deadline: new Date(),
			priority: Priorities.Medium,
		});
	};

	return (
		<div className='pr-[124px]'>
			<Header text='Создание цели' />

			<div className='mt-[26px] w-full mx-auto pt-[30px] pb-[36px] pr-[26px] pl-[61px] bg-[#D7D7D7] rounded-r-[15px] shadow-[0px_4px_4px_0px_#00000040_inset]'>
				<form onSubmit={handleSubmit(onSubmit)} className='relative'>
					{/* Основная информация о цели */}
					<div className='grid grid-cols-1'>
						<div className='flex flex-col gap-[3px] mb-[22px] md:flex-col md:items-start'>
							<label htmlFor='name' className='font-normal text-[24px]'>
								Название цели:
							</label>
							<input
								id='name'
								{...register('name', {
									required: 'Название цели обязательно',
									minLength: {
										value: 3,
										message: 'Минимум 3 символа',
									},
									maxLength: {
										value: 100,
										message: 'Максимум 100 символов',
									},
								})}
								type='text'
								className='text-[24px] bg-[#F0F0F0] shadow-[0px_4px_8px_3px_#00000026] text-[24px] min-w-[343px] p-[5px] rounded-[4px] md:w-full md:min-w-auto'
								placeholder=''
							/>
							{errors.name && <p className='mt-1 text-sm text-red-600'>{errors.name.message}</p>}
						</div>

						<div className='flex flex-col gap-[3px] mb-[22px] md:flex-col md:items-start '>
							<label htmlFor='goalDeadline' className='font-normal text-[24px]'>
								Срок выполнения:
							</label>
							<input
								id='goalDeadline'
								{...register('goalDeadline', {
									required: 'Дедлайн обязателен',
									validate: {
										futureDate: (value) => new Date(value) > new Date() || 'Дата должна быть в будущем',
									},
								})}
								type='date'
								className='bg-[#F0F0F0] text-[24px] max-w-[206px] shadow-[0px_4px_8px_3px_#00000026] p-[5px] cursor-pointer rounded-[4px] md:w-full md:min-w-auto'
							/>
							{errors.goalDeadline && (
								<p className='mt-1 text-sm text-red-600'>{errors.goalDeadline.message}</p>
							)}
						</div>
						<div className='flex flex-col gap-[10px] mb-[22px]'>
							<label htmlFor='description' className='font-normal text-[24px]'>
								Краткое описание:
							</label>
							<textarea
								id='description'
								{...register('description', {
									required: 'Описание обязательны',
									minLength: {
										value: 10,
										message: 'Минимум 10 символов',
									},
									maxLength: {
										value: 1000,
										message: 'Максимум 1000 символов',
									},
								})}
								rows={2}
								className='w-[817px] rounded-[4px] text-[24px] bg-[#F0F0F0] shadow-[0px_4px_8px_3px_#00000026] xl:w-[100%] xl:min-w-auto'
								placeholder=''
							/>
							{errors.description && (
								<p className='mt-1 text-sm text-red-600'>{errors.description.message}</p>
							)}
						</div>
						<div className='flex flex-col gap-[10px] mb-[10px]'>
							<label htmlFor='expectedResults' className='font-normal text-[24px]'>
								Ожидаемые результаты:
							</label>
							<textarea
								id='expectedResults'
								{...register('expectedResults', {
									required: 'Ожидаемые результаты обязательны',
									minLength: {
										value: 10,
										message: 'Минимум 10 символов',
									},
									maxLength: {
										value: 1000,
										message: 'Максимум 1000 символов',
									},
								})}
								rows={2}
								className='w-[817px] rounded-[4px] text-[24px] bg-[#F0F0F0] shadow-[0px_4px_8px_3px_#00000026] xl:w-[100%] xl:min-w-auto'
								placeholder=''
							/>
							{errors.expectedResults && (
								<p className='mt-1 text-sm text-red-600'>{errors.expectedResults.message}</p>
							)}
						</div>
					</div>

					{/* Задачи */}
					<div className=''>
						<div className='flex gap-[12px] items-center '>
							<h2 className='text-[24px] font-normal'>Добавить задачу</h2>
							<PlusButton onClick={() => addTask()} className='' />
						</div>

						<div className='shadow-[0px_4px_8px_3px_#00000026] rounded-[4px] inline-block bg-[#F0F0F0]'>
							{fields.map((field, index) => (
								<div key={field.id} className=' flex items-start'>
									<div className='flex justify-between items-center'>
										{/* <h3 className='text-sm font-medium text-gray-700'>Задача {index + 1}</h3> */}
										{fields.length > 1 && (
											<button
												type='button'
												onClick={() => remove(index)}
												className='h-[42px] w-[42px] flex justify-center items-center border-b border-r cursor-pointer'
											>
												<img src={Close2.src} alt='' className='w-[16px] h-[16px] ' />
											</button>
										)}
									</div>

									<div className='flex xl:flex-col'>
										<div>
											{/* <label className='block text-xs font-medium text-gray-500 mb-[10px]'>
												Название задачи:
											</label> */}
											<input
												{...register(`tasks.${index}.name`, {
													required: 'Название задачи обязательно',
													minLength: {
														value: 2,
														message: 'Минимум 2 символа',
													},
												})}
												type='text'
												className='text-[16px] min-w-[343px] p-[5px] h-[42px] border-b border-r xl:w-full xl:min-w-auto'
												placeholder='Название'
											/>
											{errors.tasks?.[index]?.name && (
												<p className='mt-1 text-xs text-red-600'>{errors.tasks[index].name.message}</p>
											)}
										</div>

										<div>
											{/* <label className='block text-xs font-medium text-gray-500 mb-[10px]'>
												Сроки задачи:
											</label> */}
											<input
												{...register(`tasks.${index}.deadline`, {
													required: 'Дедлайн задачи обязателен',
													validate: {
														futureDate: (value) =>
															new Date(value) > new Date() || 'Дата должна быть в будущем',
													},
												})}
												type='date'
												className='text-[16px] min-w-[343px] h-[42px] border-b p-[5px] cursor-pointer border-r  xl:w-full xl:min-w-auto'
											/>
											{errors.tasks?.[index]?.deadline && (
												<p className='mt-1 text-xs text-red-600'>
													{errors.tasks[index].deadline.message}
												</p>
											)}
										</div>

										<div>
											{/* <label className='block text-xs font-medium text-gray-500 mb-[10px]'>
												Приоритет подзадачи:
											</label> */}
											<Controller
												name={`tasks.${index}.priority`}
												control={control}
												render={({ field }) => (
													<select
														{...field}
														className=' text-[16px] min-w-[343px] h-[42px] border-b p-[5px] outline-none xl:w-full xl:min-w-auto'
													>
														<option value={Priorities.Low}>Низкий</option>
														<option value={Priorities.Medium}>Средний</option>
														<option value={Priorities.Critical}>Критичный</option>
													</select>
												)}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Кнопка отправки */}
					<div className='flex justify-center pt-6 w-full'></div>
					<div className='absolute -right-[130px] -bottom-[100px]'>
						<button
							type='submit'
							disabled={isSubmitting}
							className='w-[83px] h-[83px] flex justify-center items-center rounded-[50%] bg-[#D7D7D7] mb-[10px] cursor-pointer'
						>
							<img src={Save.src} alt='' />
						</button>
						<button
							type='submit'
							disabled={isSubmitting}
							className='w-[83px] h-[83px] flex justify-center items-center rounded-[50%] bg-[#FF7D51] cursor-pointer'
						>
							<img src={Close.src} alt='' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateGoal;
