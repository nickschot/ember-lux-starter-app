import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save(){
      return this.model.save();
    }
  }
});
