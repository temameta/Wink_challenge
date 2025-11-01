import { axiosInstance } from '@/api';

export const sendAssessment = async (answers: (string | number)[]) => {
	const { data } = await axiosInstance.post(`/`, answers);
	return data;
};
