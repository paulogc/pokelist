import Route from '@ember/routing/route';

export default Route.extend({

  action: {
    actions: {
      didTransition(){
        this.controllerFor('pokemon.edit').set('isSaved', false);
      }
    }
  }
});
