require './money'
require 'test/unit'

# DollarTests
class DollarTests < Test::Unit::TestCase
  def test_multiplication
    five = Money.dollar(5)
    assert_equal(Money.dollar(10).amount, five.times(2).amount)
    assert_equal(Money.dollar(15).amount, five.times(3).amount)
  end

#   def test_differenct_class_equality
#     assert_true(Money.new(10,"CHF").equals(Franc.new(10,"CHF")))
#   end

  def test_simple_addition
    five = Money.dollar(5)
    sum = five.plus(five)
    bank = Bank.new
    reduced = bank.reduce(sum, :USD)
    assert_equal(Money.dollar(10).amount, reduced.amount)
  end

  def test_plus_returns_sum
    five = Money.dollar(5)
    result = five.plus(five)
    sum = result
    assert_equal(five, sum.augend)
    assert_equal(five, sum.addend)
  end

  def test_reduce_money
    bank = Bank.new()
    result = bank.reduce(Money.dollar(1), :USD)
    assert_equal(Money.dollar(1).amount, result.amount)
  end

  def test_reduce_sum
    sum = Sum.new(Money.dollar(3), Money.dollar(4))
    bank = Bank.new()
    result = bank.reduce(sum,:USD)
    assert_equal(Money.dollar(7).amount, result.amount)
  end

  def test_fran_multiplication
    five = Money.franc(5)
    assert_equal(Money.franc(10).amount, five.times(2).amount)
    assert_equal(Money.franc(15).amount, five.times(3).amount)
  end

  def test_equality
    assert_true(Money.dollar(5).equals(Money.dollar(5)))
    assert_false(Money.franc(5).equals(Money.franc(8)))
    assert_false(Money.franc(5).equals(Money.dollar(8)))
  end

  def test_currency
    assert_equal(:USD, Money.dollar(1).currency)
    assert_equal(:CHF, Money.franc(1).currency)
  end
end
