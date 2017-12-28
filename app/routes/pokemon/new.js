import Route from '@ember/routing/route';

export default Route.extend({

  actions: {

    didTransition(){
      this.controllerFor('pokemon.new').set('isSaved', false);
    }
  }
});
