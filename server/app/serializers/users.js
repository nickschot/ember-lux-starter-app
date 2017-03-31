import { Serializer } from 'lux-framework';

class UsersSerializer extends Serializer {
    attributes = [
        'email',

        'firstName',
        'suffix',
        'lastName'
    ];
}

export default UsersSerializer;
