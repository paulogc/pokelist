import { test } from 'qunit';
import moduleForAcceptance from 'pokelist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pokemon/view');

test('visiting /pokemon/view', function(assert) {
  visit('/pokemon/view');

  andThen(function() {
    assert.equal(currentURL(), '/pokemon/view');
  });
});
