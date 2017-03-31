import { Controller } from 'lux-framework';

class UsersController extends Controller {
    params = [
        'email',

        'firstName',
        'suffix',
        'lastName'
    ];
}

export default UsersController;
