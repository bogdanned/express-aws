const supertest = require('supertest'); 
const app = require('../app.js');



describe('Tests app', function() {
  const request = supertest(app);
  it('verifies get', function(done) {
    request.get('/').expect(200).end(function(err, result) {
      expect(result.body).toHaveProperty("test","hello world!" );
      done(err);
    });
  });
});
