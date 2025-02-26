import Usuario from './Usuario';
import Cartao from './cartao';

// Definir relações
Usuario.hasMany(Cartao, { foreignKey: 'usuario_id' });
Cartao.belongsTo(Usuario, { foreignKey: 'usuario_id' });

export { Usuario, Cartao };
