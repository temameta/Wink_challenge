# Стадия сборки с Amazon Corretto 24
FROM amazoncorretto:24-al2023-jdk AS builder
# Устанавливаем рабочую директорию
WORKDIR /app
# Копируем только файлы конфигурации Maven для кэширования зависимостей
COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .
# Скачиваем зависимости (этот слой будет кэшироваться)
RUN mvn dependency:go-offline -B
# Копируем исходный код
COPY src ./src

# Собираем приложение (пропускаем тесты для ускорения)
RUN mvn clean package -DskipTests
# Финальный образ - используем JRE версию или slim JDK
FROM amazoncorretto:24-al2023-jre
# Устанавливаем рабочую директорию
WORKDIR /app
# Копируем JAR файл из стадии сборки
COPY --from=builder /app/target/*.jar app.jar
# Открываем порт
EXPOSE 8080
# Запускаем приложение
ENTRYPOINT ["java", "-jar", "app.jar"]