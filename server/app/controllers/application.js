import { Controller } from 'lux-framework';
import jwt from 'lux-jwt';
import unless from 'lux-unless';
import { secret } from 'app/utils/token';

class ApplicationController extends Controller {
    beforeAction = [
        unless({
            path: ['/auth/token-auth', '/auth/token-refresh'],
            method: ['OPTIONS']
        }, jwt({secret: secret}))
    ];
}

export default ApplicationController;
