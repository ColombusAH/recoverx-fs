// src/shared/Task.ts

import { Allow, Entity, Fields, Validators } from 'remult'

@Entity<AccountManager>('accountManagers', {
    allowApiCrud: true,
    allowApiDelete: true,
})
export class AccountManager {
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

    @Fields.string({ validate: Validators.required })
    role!: 'Doctor' | 'Patient' | 'Admin' | 'Staff';

    @Fields.createdAt()
    createdAt?: Date
}