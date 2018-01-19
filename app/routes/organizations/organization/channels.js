import Route from '@ember/routing/route';
import { get } from '@ember/object';
export default Route.extend({
  model() {
    let org = this.modelFor('organizations.organization');
    return get(org,'channels');
  }
});
