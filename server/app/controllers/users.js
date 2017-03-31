import { Controller } from 'lux-framework';

class UsersController extends Controller {
    attributes = [
        'email',

        'firstName',
        'suffix',
        'lastName'
    ];
}

export default UsersController;
