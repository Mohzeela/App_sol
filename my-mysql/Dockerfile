FROM mysql:8.0 as mybuild

RUN useradd mysql_user 

ENV MYSQL_ROOT_PASSWORD my_secret

ENV MYSQL_DATABASE titanic_survivor_data

ENV MYSQL_USER mysql_user

ENV MYSQL_PASSWORD user_password

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/ 

RUN mkdir -p /var/lib/mysql_dir \
    && docker-entrypoint.sh mysqld --datadir /var/lib/mysql_dir

#RUN docker-entrypoint.sh /bin/true

#create  from mybuild

FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD my_secret
ENV MYSQL_DATABASE titanic_survivor_data

COPY --from=builder /var/lib/mysql_dir /var/lib/mysql_dir

CMD ["mysqld", "--datadir", "/var/lib/mysql_tmp"]


EXPOSE 3306

