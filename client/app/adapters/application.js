import { inject as service } from '@ember/service';
import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  session:      service(),

  authorizer:   config['ember-simple-auth'].authorizer,
  host:         config.host,

  coalesceFindRequests: true,

  groupRecordsForFindMany(...args) {
    //Make sure snapshots are grouped by base URL
    const defaultGroups = this._super(...args);

    const groups = [];

    //Split each base URL group into groups of MAX_PER_PAGE
    defaultGroups.forEach(function(group){
      const roundTotal =
        Math.ceil(group.length / config.APP.MAX_RESOURCES_PER_PAGE)
        * config.APP.MAX_RESOURCES_PER_PAGE;

      for (
        let offset = 0;
        offset < roundTotal;
        offset += config.APP.MAX_RESOURCES_PER_PAGE
      ) {
        groups.push(
          group.slice(offset, offset + config.APP.MAX_RESOURCES_PER_PAGE)
        );
      }
    });

    return groups;
  }
});
