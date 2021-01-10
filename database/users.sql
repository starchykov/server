flush privileges;
create table users
(
    id         int auto_increment primary key,
    username   varchar(255),
    email      varchar(255),
    password   varchar(255),
    regdate    date,
    modifydate date,
    token      varchar(255)
);
/*alter table `database`.users add column token varchar(255)*/
