import { Router, Request, Response } from 'express';
import Usuario from '../models/usuario';
import Cartao from '../models/cartao'; // Importando o modelo de Cartão

const router = Router();

// Rota para criar um novo usuário
router.post('/', async (req: any, res: any) => {
  try {
    const { nome, email, cartao_id } = req.body;

    // Verificar se o usuário já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'E-mail já cadastrado!' });
    }

    // Verificar se o cartao_id foi fornecido
    if (!cartao_id) {
      return res.status(400).json({ message: 'O campo cartao_id é obrigatório!' });
    }

    // Verificar se o cartao_id existe na tabela Cartao
    const cartaoExistente = await Cartao.findOne({ where: { id: cartao_id } });
    if (!cartaoExistente) {
      return res.status(400).json({ message: 'Cartão não encontrado!' });
    }

    // Criar o novo usuário com o cartao_id
    const usuario = await Usuario.create({ nome, email });

    // Associar o usuário ao cartão
    await cartaoExistente.update({ usuario_id: usuario.id });

    // Responder com o usuário criado
    res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

export default router;
