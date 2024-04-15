import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('usuarios_bd', 'root', 'Admin1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

  export default sequelize;