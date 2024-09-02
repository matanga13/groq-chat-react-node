import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  chats: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Chat;