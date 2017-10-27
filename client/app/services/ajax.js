import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

export default AjaxService.extend({
    session: service(),
    host: config.host,
    headers: computed('session.data.authenticated.token', {
        get() {
            let headers = {
                'Content-Type': 'application/vnd.api+json'
            };

            const authToken = this.get('session.data.authenticated.token');
            if (authToken) {
                headers['authorization'] = 'Bearer ' + authToken;
            }
            return headers;
        }
    })
});
