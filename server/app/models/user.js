import { Model } from 'lux-framework';

class User extends Model {
    params = [
        'email',

        'firstName',
        'suffix',
        'lastName'
    ]
}

export default User;
