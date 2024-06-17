-- Create userdb database
use master
CREATE DATABASE userdb;

-- Create users table
use userdb
CREATE TABLE users (
    user_id INT PRIMARY KEY IDENTITY(1,1),
    user_username NVARCHAR(50),
    user_userpass NVARCHAR(50),
    user_mobile NVARCHAR(50)
);
