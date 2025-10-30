# Приложение для создания целей сотрудников и оценки их *KPI*
Для запуска на локальном компьютере будет необходим [Docker Desktop](https://www.docker.com/products/docker-desktop/). Для его первой установки потребуется некоторая 
настройка системы, гайды можно найти на *YouTube*.
## Запуск на локальном компьютере:
1. Скачать / клонировать репозиторий;
2. Запустить Docker Desktop;
3. В Windows PowerShell ввести:
```powershell
   cd путь_до_репозитория
   
   docker compose up
```
4. После того как деплой завершится:
    * [localhost:3000](http://localhost:3000) - страница создания цели
    * [localhost:8080/api/tasks/all](http://localhost:8080/api/tasks/all) - вывод всех целей
### Дополнительные эндпоинты
* localhost:8080/api/tasks/get/id/{id} - поиск цели по id;
* localhost:8080/api/tasks/get/is-done/{isDone} - получение списка целей по готовности/неготовности (true/false соответственно)
* localhost:8080/api/tasks/get/name/{name} - получение цели по имени
* localhost:8080/api/tasks/get/deadline/{deadline} - получение списка целей по дедлайну
    