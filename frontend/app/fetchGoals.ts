import { axiosInstance } from '@/api';

export interface Task {
	id: number;
	goalId: number;
	name: string;
	description: string;
	deadline: Date;
}

export interface FetchGoalResponse {
	id: number;
	name: string;
	description: string;
	deadline: Date;
	isDone: boolean;
	expectedResults: string;
	tasks: Task[];
}

export const fetchGoals = async () => {
	// const { data } = await axiosInstance.get<FetchGoalResponse[]>(`/api/goals/all`);
	const dat: FetchGoalResponse[] = [
		{
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
		},
		{
			id: 2,
			name: 'Фитнес-программа',
			description: 'Достижение спортивной формы к летнему сезону',
			deadline: new Date('2024-06-01'),
			isDone: true,
			expectedResults: 'Уменьшение веса на 10 кг, повышение выносливости',
			tasks: [
				{
					id: 201,
					goalId: 2,
					name: 'Составить план тренировок',
					description: 'Разработать программу силовых и кардио тренировок',
					deadline: new Date('2024-01-15'),
				},
				{
					id: 202,
					goalId: 2,
					name: 'Корректировка питания',
					description: 'Переход на сбалансированное питание',
					deadline: new Date('2024-01-31'),
				},
			],
		},
		{
			id: 3,
			name: 'Прочитать 12 книг за год',
			description: 'Регулярное чтение для саморазвития',
			deadline: new Date('2024-12-31'),
			isDone: false,
			expectedResults: 'Расширение кругозора, улучшение навыков мышления',
			tasks: [
				{
					id: 301,
					goalId: 3,
					name: 'Составить список книг',
					description: 'Выбрать 12 книг из разных жанров',
					deadline: new Date('2024-01-10'),
				},
				{
					id: 302,
					goalId: 3,
					name: 'Прочитать первую книгу',
					description: 'Начать с художественной литературы',
					deadline: new Date('2024-01-31'),
				},
				{
					id: 303,
					goalId: 3,
					name: 'Прочитать бизнес-литературу',
					description: 'Изучить книги по менеджменту и предпринимательству',
					deadline: new Date('2024-06-30'),
				},
			],
		},
		{
			id: 4,
			name: 'Изучение английского языка',
			description: 'Достижение уровня B2 по английскому языку',
			deadline: new Date('2024-09-01'),
			isDone: false,
			expectedResults: 'Свободное чтение технической документации, разговорная практика',
			tasks: [
				{
					id: 401,
					goalId: 4,
					name: 'Записаться на курсы',
					description: 'Найти подходящие языковые курсы',
					deadline: new Date('2024-02-01'),
				},
				{
					id: 402,
					goalId: 4,
					name: 'Ежедневная практика',
					description: 'Выполнение домашних заданий и упражнений',
					deadline: new Date('2024-09-01'),
				},
			],
		},
		{
			id: 5,
			name: 'Завершить рабочий проект',
			description: 'Завершение разработки CRM системы для клиента',
			deadline: new Date('2024-05-15'),
			isDone: false,
			expectedResults: 'Полностью функционирующая система, довольный клиент',
			tasks: [
				{
					id: 501,
					goalId: 5,
					name: 'Разработка backend',
					description: 'Создание API и бизнес-логики',
					deadline: new Date('2024-03-31'),
				},
				{
					id: 502,
					goalId: 5,
					name: 'Разработка frontend',
					description: 'Создание пользовательского интерфейса',
					deadline: new Date('2024-04-30'),
				},
				{
					id: 503,
					goalId: 5,
					name: 'Тестирование',
					description: 'Полное тестирование системы',
					deadline: new Date('2024-05-10'),
				},
				{
					id: 504,
					goalId: 5,
					name: 'Деплой',
					description: 'Развертывание на продакшн сервере',
					deadline: new Date('2024-05-14'),
				},
			],
		},
	];
	return dat;
};
