const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

const Animes = db.define('animes', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ano:{
        type: DataTypes.INTEGER
    },
    classificacao:{
        type: DataTypes.INTEGER
    },
    temporadas:{
        type: DataTypes.INTEGER
    },
    sinopse:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    nota:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    img:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName:'animes'
})

module.exports = Animes;