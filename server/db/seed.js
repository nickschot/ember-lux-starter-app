import {hashPassword} from 'app/utils/password';
import User from 'app/models/user';

export default async function seed(trx) {
    let hashedPassword = await hashPassword('correct horse battery staple');

    await User.transacting(trx).create({
        email: 'mail@example.com',
        password: hashedPassword,

        firstName: 'John',
        suffix: null,
        lastName: 'Doe'
    });
}
