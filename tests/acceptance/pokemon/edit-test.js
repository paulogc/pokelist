import { test } from 'qunit';
import moduleForAcceptance from 'pokelist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pokemon/edit');

test('visiting /pokemon/edit', function(assert) {
  visit('/pokemon/edit/2');

  andThen(function() {
    assert.equal(currentURL(), '/pokemon/edit/2');
  });
});
