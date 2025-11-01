'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Схема валидации для регистрации
const registerSchema = z.object({
	lastName: z.string().min(1, 'Фамилия обязательна'),
	firstName: z.string().min(1, 'Имя обязательно'),
	middleName: z.string().optional(),
	role: z.string().min(1, 'Роль обязательна'),
	email: z.string().email('Некорректный email'),
	password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			role: 'user', // значение по умолчанию
		},
	});

	const onSubmit = async (data: RegisterFormData) => {
		try {
			console.log('Данные регистрации:', data);
			// Здесь ваш API запрос
			// await registerUser(data);
			reset();
			alert('Регистрация успешна!');
		} catch (error) {
			console.error('Ошибка регистрации:', error);
		}
	};

	return (
		<div className='bg-white flex justify-center pt-[60px]'>
			<div className='w-full max-w-2xl p-8 bg-[#F0F0F0] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040_inset] mx-4'>
				<h2 className='text-[32px] font-bold mb-8 text-center'>Регистрация</h2>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					{/* Фамилия */}
					<div>
						<label className='block text-[20px] font-medium text-gray-700 mb-2'>Фамилия *</label>
						<input
							{...register('lastName')}
							type='text'
							className='text-[24px] bg-white shadow-[0px_4px_8px_3px_#00000026] min-w-[343px] p-3 rounded-[4px] w-full'
							placeholder='Введите фамилию'
						/>
						{errors.lastName && (
							<p className='text-red-500 text-[18px] mt-2'>{errors.lastName.message}</p>
						)}
					</div>

					{/* Имя */}
					<div>
						<label className='block text-[20px] font-medium text-gray-700 mb-2'>Имя *</label>
						<input
							{...register('firstName')}
							type='text'
							className='text-[24px] bg-white shadow-[0px_4px_8px_3px_#00000026] min-w-[343px] p-3 rounded-[4px] w-full'
							placeholder='Введите имя'
						/>
						{errors.firstName && (
							<p className='text-red-500 text-[18px] mt-2'>{errors.firstName.message}</p>
						)}
					</div>

					{/* Отчество */}
					<div>
						<label className='block text-[20px] font-medium text-gray-700 mb-2'>Отчество</label>
						<input
							{...register('middleName')}
							type='text'
							className='text-[24px] bg-white shadow-[0px_4px_8px_3px_#00000026] min-w-[343px] p-3 rounded-[4px] w-full'
							placeholder='Введите отчество'
						/>
					</div>

					{/* Роль */}
					<div>
						<label className='block text-[20px] font-medium text-gray-700 mb-2'>Роль *</label>
						<select
							{...register('role')}
							className='text-[24px] bg-white shadow-[0px_4px_8px_3px_#00000026] min-w-[343px] p-3 rounded-[4px] w-full focus:outline-none'
						>
							<option value='user'>Пользователь</option>
							<option value='admin'>Администратор</option>
							<option value='manager'>Менеджер</option>
						</select>
						{errors.role && <p className='text-red-500 text-[18px] mt-2'>{errors.role.message}</p>}
					</div>

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
							placeholder='Не менее 6 символов'
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
							{isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
