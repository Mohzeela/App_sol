FROM mysql:latest

RUN useradd mysql_user -u 1001

USER 1001:1001

ENV MYSQL_ROOT_PASSWORD my_secret

ENV MYSQL_DATABASE Titanic_survivor_data

ENV MYSQL_USER mysql_user

ENV MYSQL_PASSWORD user_password

EXPOSE 3600

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/  
