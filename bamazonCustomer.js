var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({

  host: "localhost",
  
  port: 3306,
  
  user: "root",
  
  password: "Pass321",
  
  database: "bamazonDB"
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return "Please enter a whole non-zero number.";
	}
}

function promptUserPurchase() {
	inquirer.prompt([
		{
			type: "input",
			name: "item_id",
			message: "Please enter the Item ID which you would like to purchase.",
			validate: validateInput,
			filter: Number
		},
		{
			type: "input",
			name: "quantity",
			message: "How many do you need?",
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

		var queryStr = "SELECT * FROM products WHERE ?";

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log("ERROR: Please select an Item ID.");
				displayInventory();

			} else {
				var productData = data[0];
				if (quantity <= productData.stock_quantity) {
					console.log("Order Placed!");

					var updateQueryStr = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE item_id = " + item;


					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log("Your total is $" + productData.price * quantity);
						console.log("Thank you for shopping!");
						console.log("\n---------------------------------------------------------------------\n");

						connection.end();
					})
				} else {
					console.log("Sorry, there is not enough product in stock.");
					console.log("Please order fewer items.");
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}

function displayInventory() {

	queryStr = "SELECT * FROM products";

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log("Existing Inventory: ");
		console.log("...................\n");

		var strOut = "";
		for (var i = 0; i < data.length; i++) {
			strOut = "";
			strOut += "Item ID: " + data[i].item_id + "  //  ";
			strOut += "Product Name: " + data[i].product_name + "  //  ";
			strOut += "Department: " + data[i].department_name + "  //  ";
			strOut += "Price: $" + data[i].price + "\n";

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	promptUserPurchase();
	})
}

function runBamazon() {

	displayInventory();
}

runBamazon();