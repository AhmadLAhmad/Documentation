*Basic Queries*
1- select Name from students
2- select * from students where Age > 30
3- select name from students where Gender='F' and Age > 30
4- select name,points from students where name='Alex'
5- insert into students(ID,Name,Age,Gender,Points) values(7,"Ahmad","24","M",1000)
6- update students set Points=500 where ID=2
7- update students set points=100 where ID=1

*Creating Table*
10- INSERT INTO graduates (ID,name, Age, Gender,Points)
    SELECT 	ID,name,Age, Gender,Points
    FROM students
    WHERE ID=4

11- UPDATE graduates
    SET Graduation ='08/09/2018'
    WHERE ID = 4

12- DELETE FROM students WHERE ID=4



