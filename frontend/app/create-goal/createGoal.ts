import { axiosInstance } from '@/api';

interface CreateGoalRequest {
	name: string;
	description: string;
	deadline: Date;
}

export const createGoal = async (dto: CreateGoalRequest) => {
	const { data } = await axiosInstance.post(`/goals`, dto);
	return data;
};
