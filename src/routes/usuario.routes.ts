import { Router, Request, Response } from 'express'; // Importação correta
import Usuario from '../models/Usuario';

const router = Router();

// Rota para criar um novo usuário
router.post('/', async (req: any, res: any) => {
  try {
    const { nome, email } = req.body;

    // Verificar se o usuário já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'E-mail já cadastrado!' });
    }

    // Criar usuário
    const usuario = await Usuario.create({ nome, email });
    res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

export default router;
