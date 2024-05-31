
import { UserCredentials } from '../shared'
import { remultExpress } from 'remult/remult-express';

export const api = remultExpress({
    entities: [UserCredentials],
    admin: true,
    getUser: (req: any) => req.user,
})


