import express from 'express';
import { createUser, deleteUser, editUser, getUser, getUsers } from './controllers/controler.js';
const router = express.Router();

router.post("/enter",createUser);
router.get("/show",getUsers);
router.put('/:id',editUser);
router.get('/:id',getUser);
router.delete('/:id',deleteUser);


export default router;