require './money'
# Franc.rb
class Franc < Money

  def initialize(amount)
    @amount = amount
  end

  def times(multiplier)
    Franc.new(amount * multiplier)
  end

  # def equals(object)
  #   money = object.amount()
  #   amount == money
  # end
end
