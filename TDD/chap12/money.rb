# Money class
class Money
  attr_accessor :amount
  attr_accessor :currency

  def initialize(amount, currency)
    @amount = amount
    @currency = currency
  end

  def times(multiplier)
    Money.new(amount * multiplier, currency)
  end

  def to_string
    @amount +  " " + currency
  end

  def equals(money)
    amount == money.amount && currency == money.currency
  end

  def self.dollar(amount)
    Money.new(amount,:USD)
  end

  def self.franc(amount)
    Money.new(amount, :CHF)
  end
  
  def plus(other)
    Sum.new(self, other)
  end
end

class Expression
end

class Bank
  def reduce(source, to)
    Money.dollar(10)
  end
end
