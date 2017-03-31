import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Ember from 'ember';

//This should match up with the lux default pagination amount
const MAX_PER_PAGE = 25;

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    session:      Ember.inject.service(),

    authorizer:   config['ember-simple-auth'].authorizer,
    host:         config.host,

    coalesceFindRequests: true,

    groupRecordsForFindMany(...args) {
        //Make sure snapshots are grouped by base URL
        const defaultGroups = this._super(...args);

        const groups = [];

        //Split each base URL group into groups of MAX_PER_PAGE
        defaultGroups.forEach(function(group){
            const roundTotal = Math.ceil(group.length / MAX_PER_PAGE) * MAX_PER_PAGE;

            for (let offset = 0; offset < roundTotal; offset += MAX_PER_PAGE) {
                groups.push(group.slice(offset, offset + MAX_PER_PAGE));
            }
        });

        return groups;
    }
});
