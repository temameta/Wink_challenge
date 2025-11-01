import { FetchGoalResponse } from '@/app/fetchGoals';
import { fetchGoal } from '@/app/goal/[id]/fetchGoal';
import { useEffect, useState } from 'react';

export const useFetchGoal = (id: number) => {
	const [goal, setGoal] = useState<FetchGoalResponse>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const goal = await fetchGoal(id);
				setGoal(goal);
			} catch (err) {}
		};
		fetchData();
	}, [id, setGoal]);

	return { goal };
};
