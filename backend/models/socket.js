module.exports = (sequelize, DataTypes) => {
    const Socket = sequelize.define(
      'Socket',
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        tableName: 'sockets',
      }
    );
  
    Socket.associate = (models) => {
      Socket.hasMany(models.Cpu, { foreignKey: 'socketId' });
    };
  
    return Socket;
  };
  