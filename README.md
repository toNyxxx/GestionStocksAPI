# Inventory Management

## Running Project

### Prerequisites
- [Node.js](https://nodejs.dev/)
- [MySQL](https://www.mysql.com/)

## Dev Dependancies

| Name | Version |
| ------------- | ------------- |
| @types/express | `^4.17.21` |
| @types/node | `^20.12.12` |
| @types/validator | `^13.11.10` |
| sequelize-cli | `^6.6.2` |
| ts-node | `^10.9.2` |
| tsc-watch | `^6.0.4` |
| typescript | `^5.4.5` |

## Project Dependancies

| Name | Version |
| ------------- | ------------- |
| dotenv | `^16.4.5` |
| express | `^4.19.2` |
| mysql2 | `^3.9.7` |
| reflect-metadata | `^0.2.2` |
| sequelize | `^6.37.3` |

<ins>Installation shorthand</ins> : `npm install express mysql2 sequelize dotenv reflect-metadata`

### Run

> [!NOTE]
> In order to run the project, create `.env` file at root level.
> The .env file should contain those informations :
> | Environment Vars | Description |
> | ------------- | ------------- |
> | MYSQL_DB_NAME="inventory_management" | Replace the value if needed |
> | MYSQL_DB_HOST="127.0.0.1" | IP of the MySQL's host server |
> | MYSQL_DB_PORT="3306" | Port of the MySQL's host server |
> | MYSQL_DB_USERNAME="root" | User to connect to the MySQL Database |
> | MYSQL_DB_PASSWORD="" | Password to login with |
> | MYSQL_DB_USERNAME="root" | User to connect to the MySQL Database |
> | NODE_ENV="development" | Used for development purposes |
> | API_PREFIX="/api/v1" | API's prefix for default routes |

### DB Initialization

Setup database: `npm run db:full-init`
> [!NOTE]
> This command will drop & rebuild the whole database. Then tables get created, and populated by seeders.
> You can find the Sequelize configuration in the file `.sequelizerc` at root level

Compile & run the app : `npm start`
