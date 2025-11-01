'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Схема валидации для авторизации
const loginSchema = z.object({
	email: z.string().email('Некорректный email'),
	password: z.string().min(1, 'Пароль обязателен'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		try {
			console.log('Данные авторизации:', data);
			// Здесь ваш API запрос
			// await loginUser(data);
			reset();
			alert('Авторизация успешна!');
		} catch (error) {
			console.error('Ошибка авторизации:', error);
		}
	};

	return (
		<div className='bg-white flex justify-center pt-[60px]'>
			<div className='w-full max-w-2xl p-8 bg-[#F0F0F0] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040_inset] mx-4'>
				<h2 className='text-[32px] font-bold mb-8 text-center'>Авторизация</h2>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					{/* Email */}
					<div>
						<label className='block text-[20px] font-medium text-gray-700 mb-2'>Email *</label>
						<input
							{...register('email')}
							type='email'
							className='text-[24px] bg-white shadow-[0px_4px_8px_3px_#00000026] min-w-[343px] p-3 rounded-[4px] w-full'
							placeholder='example@mail.com'
						/>
						{errors.email && <p className='text-red-500 text-[18px] mt-2'>{errors.email.message}</p>}
					</div>

					{/* Пароль */}
					<div>
						<label className='block text-[20px] font-medium text-gray-700 mb-2'>Пароль *</label>
						<input
							{...register('password')}
							type='password'
							className='text-[24px] bg-white shadow-[0px_4px_8px_3px_#00000026] min-w-[343px] p-3 rounded-[4px] w-full'
							placeholder='Введите пароль'
						/>
						{errors.password && (
							<p className='text-red-500 text-[18px] mt-2'>{errors.password.message}</p>
						)}
					</div>

					<div className='flex justify-center'>
						<button
							type='submit'
							disabled={isSubmitting}
							className='w-[332px] h-[76px] bg-[#E5E5E5] text-black text-[24px] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
						>
							{isSubmitting ? 'Вход...' : 'Войти'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
