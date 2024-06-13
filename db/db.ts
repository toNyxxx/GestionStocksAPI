require('dotenv').config();
import { Sequelize, Options } from "sequelize";
import configs from "./config/config.js";

const env = process.env.NODE_ENV || "development";

// console.log(configs);

const seq: Sequelize = new Sequelize({
	host: process.env.MYSQL_DB_HOST,
	database: process.env.MYSQL_DB_NAME,
	username: process.env.MYSQL_DB_USERNAME,
	password: process.env.MYSQL_DB_PASSWORD,
	dialect: 'mysql',
	define: {
		underscored: true,
	},
});

export default seq;
