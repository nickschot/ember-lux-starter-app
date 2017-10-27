import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import $ from 'jquery';
import { assign as assignPolyfill, merge as mergePolyfill } from '@ember/polyfills';
import JWT from 'ember-simple-auth-token/authenticators/jwt';

const assign = assignPolyfill || mergePolyfill;

export default JWT.extend({
    getAuthenticateData(credentials) {
        return {
            [this.identificationField]: credentials.identification,
            [this.passwordField]:       credentials.password,
            ['rememberMe']:             credentials.rememberMe
        };
    },

    /**
     Accepts a `url` and `data` to be used in an ajax server request.
     @method makeRequest
     @private
     */
    makeRequest(url, data, headers) {
        return $.ajax({
            url: url,
            method: 'POST',
            data: JSON.stringify({
                "data": {
                    "type": "auth",
                    "attributes": data
                }
            }),
            dataType: 'json',
            contentType: 'application/vnd.api+json',
            headers: this.headers,
            beforeSend: (xhr, settings) => {
                if(this.headers['Accept'] === null || this.headers['Accept'] === undefined) {
                    xhr.setRequestHeader('Accept', settings.accepts.json);
                }

                if (headers) {
                    Object.keys(headers).forEach((key) => {
                        xhr.setRequestHeader(key, headers[key]);
                    });
                }
            }
        });
    },

    /**
     Handles authentication response from server, and returns session data
     @method handleAuthResponse
     @private
     */

    handleAuthResponse(response) {
        const token = get(response, this.tokenPropertyName);

        if (isEmpty(token)) {
            throw new Error('Token is empty. Please check your backend response.');
        }

        const tokenData       = this.getTokenData(token);
        const expiresAt       = get(tokenData, this.tokenExpireName);
        const userId          = get(tokenData, 'userId');
        const tokenExpireData = {};

        tokenExpireData[this.tokenExpireName] = expiresAt;
        tokenExpireData['userId']             = userId;

        this.scheduleAccessTokenRefresh(expiresAt, token);

        return assign(this.getResponseData(response), tokenExpireData);
    }
});
