require './dollar'
require './franc'
require 'test/unit'

# DollarTests
class DollarTests < Test::Unit::TestCase
  def test_multiplication
    five = Money.dollar(5)
    assert_equal(Money.dollar(10).amount, five.times(2).amount)
    assert_equal(Money.dollar(15).amount, five.times(3).amount)
  end

  def test_fran_multiplication
    five = Money.franc(5)
    assert_equal(Money.franc(10).amount, five.times(2).amount)
    assert_equal(Money.franc(15).amount, five.times(3).amount)
  end

  def test_equality
    assert_true(Money.dollar(5).equals(Dollar.new(5)))
    assert_false(Money.dollar(5).equals(Dollar.new(8)))
    assert_true(Money.franc(5).equals(Money.franc(5)))
    assert_false(Money.franc(5).equals(Money.franc(8)))
    assert_false(Money.franc(5).equals(Money.dollar(8)))
  end
end
