"use client";
import PlusButton from "@/components/PlusButton/PlusButton";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { createGoal } from "./createGoal";

enum Priorities {
  Low = "Низкий",
  Medium = "Средний",
  Critical = "Критичный",
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

const page = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<IGoal>({
    defaultValues: {
      name: "",
      goalDeadline: new Date(),
      description: "",
      expectedResults: "",
      tasks: [{ name: "", deadline: new Date(), priority: Priorities.Medium }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
    rules: {
      required: "Добавьте хотя бы одну задачу",
      minLength: {
        value: 1,
        message: "Добавьте хотя бы одну задачу",
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
      console.error("Ошибка при создании цели:", error);
      alert("Произошла ошибка при создании цели");
    }
  };

  const addTask = () => {
    append({
      name: "",
      deadline: new Date(),
      priority: Priorities.Medium,
    });
  };

  return (
    <div className="mx-[36px]">
      <div className="mt-[26px] w-full mx-auto pt-[20px] pb-[31px] pr-[26px] pl-[26px] bg-[#D5BFFD] rounded-[15px] ">
        <h1 className="font-normal text-[32px] [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] mb-[46px]!">
          Создание цели
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* Основная информация о цели */}
          <div className="grid grid-cols-1">
            <div className="flex items-center gap-[3px] mb-[46px] md:flex-col md:items-start">
              <label htmlFor="name" className="font-normal text-[24px]">
                Название:
              </label>
              <input
                id="name"
                {...register("name", {
                  required: "Название цели обязательно",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  maxLength: {
                    value: 100,
                    message: "Максимум 100 символов",
                  },
                })}
                type="text"
                className="bg-[#AC7AFE80] text-[16px] min-w-[343px] p-[5px] rounded-[2px] md:w-full md:min-w-auto"
                placeholder=""
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-[3px] mb-[34px] md:flex-col md:items-start ">
              <label htmlFor="goalDeadline" className="font-normal text-[24px]">
                Срок:
              </label>
              <input
                id="goalDeadline"
                {...register("goalDeadline", {
                  required: "Дедлайн обязателен",
                  validate: {
                    futureDate: (value) =>
                      new Date(value) > new Date() ||
                      "Дата должна быть в будущем",
                  },
                })}
                type="date"
                className="bg-[#AC7AFE80] text-[16px] min-w-[343px] p-[5px] cursor-pointer rounded-[2px] md:w-full md:min-w-auto"
              />
              {errors.goalDeadline && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.goalDeadline.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[10px] mb-[34px]">
              <label
                htmlFor="description"
                className="font-normal text-[24px] mb-[10px]"
              >
                Краткое описание:
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: "Описание обязательны",
                  minLength: {
                    value: 10,
                    message: "Минимум 10 символов",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Максимум 1000 символов",
                  },
                })}
                rows={2}
                className="w-[817px] rounded-[2px] bg-[#AC7AFE80] xl:w-[100%] xl:min-w-auto"
                placeholder=""
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[10px] mb-[10px]">
              <label
                htmlFor="expectedResults"
                className="font-normal text-[24px] mb-[10px]"
              >
                Ожидаемые результаты:
              </label>
              <textarea
                id="expectedResults"
                {...register("expectedResults", {
                  required: "Ожидаемые результаты обязательны",
                  minLength: {
                    value: 10,
                    message: "Минимум 10 символов",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Максимум 1000 символов",
                  },
                })}
                rows={2}
                className="w-[817px] rounded-[2px] bg-[#AC7AFE80] xl:w-[100%] xl:min-w-auto"
                placeholder=""
              />
              {errors.expectedResults && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.expectedResults.message}
                </p>
              )}
            </div>
          </div>

          {/* Задачи */}
          <div className="">
            <div className="flex gap-[12px] items-center mb-4">
              <h2 className="text-[24px] font-normal">Добавить подзадачу</h2>
              <PlusButton
                onClick={() => addTask()}
                className="md:scale-[0.7] "
              />
            </div>

            <div className="space-y-4">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-700">
                      Задача {index + 1}
                    </h3>
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Удалить
                      </button>
                    )}
                  </div>

                  <div className="flex gap-[10px] xl:flex-col">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-[10px]">
                        Название подзадачи:
                      </label>
                      <input
                        {...register(`tasks.${index}.name`, {
                          required: "Название задачи обязательно",
                          minLength: {
                            value: 2,
                            message: "Минимум 2 символа",
                          },
                        })}
                        type="text"
                        className="bg-[#AC7AFE80] text-[16px] min-w-[343px] p-[5px] rounded-[2px] xl:w-full xl:min-w-auto"
                        placeholder=""
                      />
                      {errors.tasks?.[index]?.name && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.tasks[index].name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-[10px]">
                        Сроки подзадачи:
                      </label>
                      <input
                        {...register(`tasks.${index}.deadline`, {
                          required: "Дедлайн задачи обязателен",
                          validate: {
                            futureDate: (value) =>
                              new Date(value) > new Date() ||
                              "Дата должна быть в будущем",
                          },
                        })}
                        type="date"
                        className="bg-[#AC7AFE80] text-[16px] min-w-[343px] p-[5px] rounded-[2px] cursor-pointer xl:w-full xl:min-w-auto"
                      />
                      {errors.tasks?.[index]?.deadline && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.tasks[index].deadline.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-[10px]">
                        Приоритет подзадачи:
                      </label>
                      <Controller
                        name={`tasks.${index}.priority`}
                        control={control}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="bg-[#AC7AFE80] text-[16px] min-w-[343px] p-[5px] rounded-[2px] outline-none xl:w-full xl:min-w-auto"
                          >
                            <option value={Priorities.Low}>Низкий</option>
                            <option value={Priorities.Medium}>Средний</option>
                            <option value={Priorities.Critical}>
                              Критичный
                            </option>
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
          <div className="flex justify-center pt-6 w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-[5px] text-[24px] font-normal bg-[#5F31AB] text-white px-[45px] py-[13px] cursor-pointer"
            >
              {isSubmitting ? "Создание..." : "Создать"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
