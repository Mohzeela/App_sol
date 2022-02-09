FROM mariadb as base


#RUN mkdir -p /initialized-db && chown -R mysql:mysql /initialized-db

#RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh/"]

ENV MYSQL_ROOT_PASSWORD my_secret

ENV MYSQL_DATABASE titanic_db

ENV MYSQL_USER mysql_user

ENV MYSQL_PASSWORD user_password

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/


#RUN docker-entrypoint.sh /bin/true
#RUN head -n-2 < /usr/local/bin/docker-entrypoint.sh > /usr/local/bin/docker-entrypoint.sh
#RUN mkdir -p /var/lib/mysql_dir
#RUN docker-entrypoint.sh mysqld --datadir /var/lib/mysql_dir
#RUN ["/usr/local/bin/docker-entrypoint.sh", "mysqld", "--datadir", "/initialized-db"]


#create  from mybuild

#FROM mysql:8.0

#COPY --from=base /docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d
#FROM mysql

#ENV MYSQL_ROOT_PASSWORD my_secret
#ENV MYSQL_DATABASE titanic_db

#COPY --from=base /var/lib/mysql_dir /var/lib/mysql_dir

#USER mysql

#CMD ["mysqld", "--datadir", "/var/lib/mysql_dir"]

#EXPOSE 3360

#CMD ["--datadir", "/initialized-db"]



