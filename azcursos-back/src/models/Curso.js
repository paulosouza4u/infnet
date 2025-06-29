const { DataTypes} = require("sequelize");
const sequelize = require("../../config/database");

const Curso = sequelize.define("Curso", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    capa: {
        type: DataTypes.STRING,
    },
    inicio: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "cursos",
    timestamps: false
});

module.exports = Curso;