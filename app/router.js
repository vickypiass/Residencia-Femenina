import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('nosotros');
  this.route('servicios');
  this.route('ubicacion');
  this.route('fotos');
  this.route('tarifas');
  this.route('contacto');
});
