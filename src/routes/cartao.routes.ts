import { Router } from 'express';
import { criarCartao, listarCartoes, buscarCartao, atualizarSaldo, deletarCartao } from '../controllers/cartao.controller';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post("/", asyncHandler(criarCartao));
router.get("/", asyncHandler(listarCartoes));
router.get("/:numero", asyncHandler(buscarCartao));
router.put("/:numero", asyncHandler(atualizarSaldo));
router.delete("/:numero", asyncHandler(deletarCartao));

export default router;
