FROM mysql

ENV MYSQL_ROOT_PASSWORD my_secret

ENV MYSQL_DATABASE Titanic_survivor_data

ENV MYSQL_USER user1

ENV MYSQL_PASSWORD user1_password

EXPOSE 3600

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/  
