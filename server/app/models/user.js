import { Model } from 'lux-framework';

class User extends Model {
    static scopes = {
        findByEmail(email) {
            return this.first().where({
                email: email
            });
        }
    };
}

export default User;
