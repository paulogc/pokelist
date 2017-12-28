import { test } from 'qunit';
import moduleForAcceptance from 'pokelist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pokemon/new');

test('visiting /pokemon/new', function(assert) {
  visit('/pokemon/new');

  andThen(function() {
    assert.equal(currentURL(), '/pokemon/new');
  });
});
