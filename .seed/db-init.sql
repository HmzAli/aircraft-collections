/* DB setup */
CREATE DATABASE aircollections;
CREATE USER superadmin WITH ENCRYPTED PASSWORD 'Abcd123';
GRANT ALL PRIVILEGES ON DATABASE aircollections TO superadmin;


/* Tables setup */
CREATE TABLE aircollections.aircraft (
  id SERIAL,
  name varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  image TEXT NULL
);


/* Initial data */
INSERT INTO aircollections.aircraft VALUES (1, 'P-52 Mustang', 'Fighter', NULL);
