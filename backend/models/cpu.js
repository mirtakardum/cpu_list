module.exports = (sequelize, DataTypes) => {
    const Cpu = sequelize.define(
      'Cpu',
      {
        brand: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        clockSpeed: DataTypes.FLOAT,
        cores: DataTypes.INTEGER,
        threads: DataTypes.INTEGER,
        tdp: DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        socketId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'sockets',
            key: 'id',
          },
        },
      },
      {
        tableName: 'cpus',
      }
    );
  
    Cpu.associate = (models) => {
      Cpu.belongsTo(models.Socket, { foreignKey: 'socketId' });
    };
  
    return Cpu;
  };
  