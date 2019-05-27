# Money class
class Money
  attr_accessor :amount
  attr_accessor :currency

  def initialize(amount, currency)
    @amount = amount
    @currency = currency
  end

  def self.dollar(amount)
    Money.new(amount, :USD)
  end

  def self.franc(amount)
    Money.new(amount, :CHF)
  end

  def equals(money)
    amount == money.amount && currency == money.currency
  end

  def plus(other)
    Sum.new(self, other)
  end

  def times(multiplier)
    Money.new(amount * multiplier, currency)
  end

  def to_string
    @amount +  " " + currency
  end

  def reduce(to)
    self
  end
end

class Expression
end

class Bank
  def reduce(source, to)
    source.reduce(to)
  end
end

class Sum
  attr_accessor :augend, :addend
  def initialize(augend, addend)
    @augend = augend
    @addend = addend
  end

  def reduce(to)
    amount = @augend.amount + @addend.amount
    Money.new(amount, to)
  end
end

