import { Controller } from 'lux-framework';
import jwt from 'lux-jwt';
import unless from 'lux-unless';
import { TokenConfig } from 'app/utils/constants';

class ApplicationController extends Controller {
    beforeAction = [
        unless({
            path: ['/auth/token-auth', '/auth/token-refresh'],
            method: ['OPTIONS']
        }, jwt({secret: TokenConfig.secret}))
    ];
}

export default ApplicationController;
