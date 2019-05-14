class Money
  attr_accessor :amount

  def equals(money)
    (amount == money.amount()) && (self.class.equal?(money.class))
  end
end