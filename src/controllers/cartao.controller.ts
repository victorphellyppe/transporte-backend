import { Request, Response } from "express";
import Cartao from "../models/cartao";

// Criar um cartão
export const criarCartao = async (req: Request, res: Response) => {
  try {
    const cartao = await Cartao.create(req.body);
    res.status(201).json(cartao);
  } catch (err: any) {
    res.status(400).json({ erro: err.message });
  }
};

// Listar todos os cartões
export const listarCartoes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cartoes = await Cartao.findAll();
    res.json(cartoes);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};

// Buscar cartão pelo número
export const buscarCartao = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cartao = await Cartao.findOne({
      where: { numero: req.params.numero },
    });
    if (!cartao) {
      res.status(404).json({ erro: "Cartão não encontrado" });
      return;
    }
    res.json(cartao);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};

// Atualizar saldo

export const atualizarSaldo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { numero } = req.params;
    const { saldo } = req.body;
    const [atualizado] = await Cartao.update({ saldo }, { where: { numero } });
    if (!atualizado) {
      res.status(404).json({ erro: "Cartão não encontrado" });
      return;
    }
    const cartaoAtualizado = await Cartao.findOne({ where: { numero } });
    res.json(cartaoAtualizado);
    return;
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
    return;
  }
};

// Deletar cartão
export const deletarCartao = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { numero } = req.params;
    const apagado = await Cartao.destroy({ where: { numero } });
    if (!apagado) {
      res.status(404).json({ erro: "Cartão não encontrado" });
      return;
    }
    res.json({ mensagem: "Cartão removido" });
    return;
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
    return;
  }
};
