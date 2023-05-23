import { Sequelize } from "sequelize"
import config from './config'
import data from './db.json'
import { DataTypes  } from 'sequelize'
const sequelize = new Sequelize(config)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to database')
  })
  .catch((error) => {
    console.log(error)
  })

function insertDummyData(): void {
  data.forEach((product: any) => {
    const { name, image, price, quantity, gender, category, description } = product
    const selectQuery = `
      SELECT COUNT(*) AS count
      FROM products
      WHERE name = ? AND gender = ? AND category = ?
    `;

    sequelize
      .query(selectQuery, {
        replacements: [name, gender, category],
        type: Sequelize.DataTypes.SELECT,
      })
      .then((results: any) => {
        const count = results[0].count;

        if (count === 0) {

          const insertQuery = `
            INSERT INTO products (name, image, price, quantity, gender, category, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `;

          sequelize
            .query(insertQuery, {
              replacements: [name, image, price, quantity, gender, category, description],
              type: Sequelize.DataTypes.INSERT,
            })
            .then(() => {
              console.log(`Product inserted successfully`);
            })
            .catch((error) => {
              console.log(`Failed to insert product: ${error}`);
            });
        } else {
          console.log(`Similar entry already exists`);
        }
      })
      .catch((error) => {
        console.log(`Error checking for existing entry: ${error}`);
      });
  });
}

// insertDummyData();

export default new Sequelize(
  process.env.database as string,
  process.env.user as string,
  process.env.password as string,
  {
    dialect: "mysql",
    host: process.env.host as string,
  }
);
