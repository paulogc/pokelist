import { test } from 'qunit';
import moduleForAcceptance from 'pokelist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pokemon/index');

test('visiting /pokemon/index', function(assert) {
  visit('/pokemon/index');

  andThen(function() {
    assert.equal(currentURL(), '/pokemon/index');
  });
});
