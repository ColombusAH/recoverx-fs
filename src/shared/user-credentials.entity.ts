// src/shared/Task.ts

import { Entity, Fields, Validators } from 'remult'

@Entity('users-credentials', {
    allowApiCrud: true,
    allowApiDelete: true,
    allowApiRead: true,
    allowApiInsert : true,
    allowApiUpdate: true,
    
})
export class UserCredentials {
    @Fields.cuid()
    id = '';

    @Fields.string({ required: false })
    tenantId = '';

    @Fields.string({ required: true, validate: [Validators.email()] })
    email = ''

    @Fields.boolean()
    emailVerified = false;

    @Fields.string()
    hashedPassword = '';

    @Fields.boolean()
    isActive = true;

    @Fields.object()
    roles: string[] = [];

    @Fields.createdAt()
    createdAt?: Date
}