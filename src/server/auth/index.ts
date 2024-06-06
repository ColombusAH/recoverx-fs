import express from "express";
import { api } from "../api";
import { remult } from "remult";
import { AccountManager, User } from "../../shared";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
//login

router.post("/login", api.withRemult, async (req, res) => {
    const secret = process.env.JWT_SECRET || 'secret';
    const usersCredentialsRepo = remult.repo<AccountManager>(AccountManager);
    const userRepo = remult.repo<User>(User);
    const { email, password } = req.body;
    const userAccount = await usersCredentialsRepo.findOne({ where: { email } });
    if (!userAccount) {
        return res.status(401).send({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, userAccount.hashedPassword);
    if (!isMatch) {
        return res.status(401).send({ message: 'Invalid credentials' });
    }

    const user = await userRepo.findOne({ where: { accountId: userAccount.id } });
    const token = jwt.sign({ id: user.id, tenant_id: userAccount.tenantId, roles: [userAccount.role] }, secret, { expiresIn: '12h' });
    return res.send({ token });
});


//register
router.post("/admin/register", api.withRemult, async (req, res) => {
    const usersCredentialsRepo = remult.repo(AccountManager);
    const userRepo = remult.repo<User>(User);
    const { email, password, role, firstName, lastName, phone, dateOfBirth, gender } = req.body;
    console.log(email, password);
    const user = await usersCredentialsRepo.findOne({ where: { email } });
    if (user) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userAccount = await usersCredentialsRepo.save({
        email,
        hashedPassword,
        role
    });

    const newUser = await userRepo.save({
        accountId: userAccount.id,
        firstName,
        lastName,
        phone,
        dateOfBirth,
        gender
    });
    return res.json({ message: 'User created successfully' });
});

export default router;