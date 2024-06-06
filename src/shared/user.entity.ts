import { Entity, Fields, Validators, Relations, Allow } from 'remult';
import { AccountManager } from './account-manager.enitty';

@Entity<User>('users', {
    allowApiCrud: true,
    allowApiDelete: true,
    defaultOrderBy: {
        firstName: 'asc',
        lastName: 'asc'
    }
})
export class User {
    @Fields.autoIncrement()
    id!: number;

    @Fields.string({ required: true })
    accountId!: string;

    @Fields.string({ validate: Validators.required })
    firstName!: string;

    @Fields.string({ validate: Validators.required })
    lastName!: string;

    @Fields.string()
    phone!: string;

    @Fields.date()
    dateOfBirth!: Date;

    @Fields.string()
    gender!: 'Male' | 'Female' | 'Other';

    @Relations.toOne<User, AccountManager>(() => AccountManager, {
        fields: {
            id: 'accountId'
        },
        defaultIncluded: true
    })
    accountManager!: AccountManager;
}
