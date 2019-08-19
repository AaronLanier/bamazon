DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (45) NULL,
  department_name VARCHAR (45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT (9) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("airpods", "tech", 159.99, 467);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nerf gun", "toys", 19.99, 635);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4", "video games", 299.99, 143);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee maker", "appliances", 49.99, 215);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "tech", 499.99, 376);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fishing pole", "hunting & fishing", 69.99, 189);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "apparel", 199.99, 376);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone", "tech", 999.99, 805);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hat", "apparel", 15.00, 923);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gun", "hunting & fishing", 1999.99, 756);