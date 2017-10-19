import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  db: service(),
  model() {
    return this.get('db').all('messages');
  }
});
