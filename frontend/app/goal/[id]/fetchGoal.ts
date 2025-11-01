import { axiosInstance } from '@/api';
import { FetchGoalResponse } from '@/app/fetchGoals';

export const fetchGoal = async (id: number) => {
	// const { data } = await axiosInstance.get<FetchGoalResponse>(`/goals${id}`);
	// return data;
	return {
		id: 1,
		name: 'Изучение TypeScript',
		description: 'Полное освоение TypeScript для профессиональной разработки',
		deadline: new Date('2024-12-31'),
		isDone: false,
		expectedResults: 'Создание сложных приложений на TypeScript, понимание продвинутых типов',
		tasks: [
			{
				id: 101,
				goalId: 1,
				name: 'Изучить базовые типы',
				description: 'Освоить примитивные типы, интерфейсы, типы объединений',
				deadline: new Date('2024-03-31'),
			},
			{
				id: 102,
				goalId: 1,
				name: 'Освоить дженерики',
				description: 'Изучить generic types и их применение',
				deadline: new Date('2024-06-30'),
			},
			{
				id: 103,
				goalId: 1,
				name: 'Практический проект',
				description: 'Создать полноценное приложение на TypeScript',
				deadline: new Date('2024-11-30'),
			},
		],
	};
};
