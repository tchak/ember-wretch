import Pretender from 'pretender';

export default function(hooks, ...maps) {
  hooks.beforeEach(function() {
    this.server = new Pretender(...maps);
  });

  hooks.afterEach(function() {
    this.server.shutdown();
    delete this.server;
  });
}
