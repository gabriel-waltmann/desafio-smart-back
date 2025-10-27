import { Sequelize } from 'sequelize';

const conf = require('../../config/config.js');

export default new Sequelize(conf);