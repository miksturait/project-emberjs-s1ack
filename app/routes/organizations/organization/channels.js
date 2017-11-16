import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let org = this.modelFor('organizations.organization');
    return org.get('channels');  
  }
});
