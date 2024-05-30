import express from "express";
import { api } from "../api";
import { remult } from "remult";
import { UserCredentials } from "@/shared";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
//login

router.post("/login", api.withRemult, async (req, res) => {
    const secret = process.env.JWT_SECRET || 'secret';
    const usersCredentialsRepo = remult.repo(UserCredentials);
    const { email, password } = req.body;
    const user = await usersCredentialsRepo.findOne({ where: { email } });
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, tenant_id: user.tenantId }, secret, { expiresIn: '12h' });
    return token;
});

export default router;