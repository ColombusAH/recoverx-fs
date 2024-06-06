
import { User, AccountManager } from '../shared'
import { remultExpress } from 'remult/remult-express';

export const api = remultExpress({
    entities: [AccountManager, User],
    admin: true,
    getUser: (req: any) => req.user,
})


