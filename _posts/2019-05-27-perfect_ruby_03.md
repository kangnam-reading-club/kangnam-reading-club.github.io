---
layout: post
title: "Perfect Ruby - 03 제어 구조"
author: soomin
date: 2019-05-27 00:00
tags: [ruby, perfect ruby]
image: /files/covers/ruby.png
---

> 루비가 제공하는 제어 구문 관련 설명. 아래의 내용을 다룹니다

    연산자

# 연산자

루비에서 사용할 수 있는 연산자 목록. 위부터 가장 높은 순서이다. 

- `::`
- `[]`
- `+,-,!,~` 여기서의 + - 는 음수/양수 연산자
- `**`
- `-`
- `*,/,%`
- `+,-`
- `<<,>>`
- `&`
- `|,^`
- `>,>=,<,<=`
- `<=>,==,===,!=,=~,!~`
- `&&`
- `||`
- `..,...`
- `?:`
- `=`
- `not`
- `and,or`

우선순위를 명시하려면,  `()` 를 사용해 높일 수 있다.

## 메서드로 정의 된 연산자

아래는 메서드로 정의되어 있는 연산자이다.

`|, ^, &, <=>, ==, ===, =~, >, >=, <=, <, <<, >>, +@, -@, +, -, *, /, %, **, ~, [], []=, ``, !, !=, !~ `

```ruby
#example
1 + 1 # => 2
# == 
1. + (1)
```

메서드 정의 연산자는, 재 정의가 가능하다

```ruby
class MyObject
  def ==(other)
    self.class == other.class
  end
end
```

```console
> class MyObject
>   def ==(other)
>     self.class == other.class
>   end
> end
=> :==
irb(main):012:0> MyObject.new == MyObject.new
=> true
> quit
> class Myobj
> end
> Myobj.new == Myobj.new
=> false
```

단항 연산자 재정의 시에는 `+@` 로 뒤에 `@` 를 붙혀야 가능하다.

## == 연산자와 객체의 동치성

`==` 는 값을 비교하는 메서드. 다른 인스턴스라도 값이 같으면 `true` 를 반환한다. 같은 인스턴스 (메모리주소) 인지를 확인하려면, `equal?` 을 사용해야 한다.

비교시 형 변환이 자동으로 이루어지진 않으나, 실수 / 정수 비교시에는 형 변환이 이루어진다.

# 기본 제어 구조 

조건 분기 / 반복 / 점프 구문 

## if 문

조건식 기준으로 처리를 분기하고 싶은경우 `if` 를 사용한다. 위에서 부터 평가 후 제일 처음  `true` 가 나오는 경우 관련 조건을 처리한다. 

```ruby
n = 2

if n.zero?
  puts "0"
elsif n.even?
  puts "even!"
elsif n.odd?
  puts "odd!"
else
  puts "i dont know"
end
```

## unless

if 와 정 반대로 작동한다. 조건식이 `false` 일 경우 처리. 하지만 else 는 가능하나 `elsif`는 가능하지 않다! 

```ruby
n = 2

unless n.zero?
  puts "no zero"
else
  puts "yes zero"
end
```

`if,unless` 둘 다 마지막에 평가된 값을 반환한다. 

```ruby
platform =
  if /darwin/ =~ RUBY_PLATFORM
    'Mac'
  else
    'Others'
  end
puts platform
```

한 줄로 작성하고 싶다면 `then` 을 쓴다. 보통은 생략됨

```ruby 
if n.zero? then puts "0" else puts "no 0" end
```
`then` 을 사용해서 한줄로 사용하는 것 보다, 삼항 연산자를 사용하는게 더 좋다. else 가 없는 경우에는 후위 `if,unless` 를 사용할 수 있다.

```ruby
puts "0" if n.zero?
puts "no 0" unless n.zero?
```

## switch

조건이 여러개 중, 비교대상이 하나인 경우 `switch` 사용을 추천한다. 

제일 처음 참이 되는 값을 처리한다. 모든 비교가 false 일 경우, `else` 조건식이 실행된다. 

루비에서는 복수의 값을 `,` 로 지정해서 처리할 수 있고, 하나라도 `true` 이면 실행된다. 

`if/unless` 와 마찬가지로 마지막으로 평가된 값을 반환한다. 

```ruby
stone = 'ruby'
case stone
when 'ruby'
  puts '7'
when 'sardonyx', 'peridot'
  puts '8'
else
  puts "?"
end
```

 then 을 쓰면 한 줄로 기술 가능하다 

```ruby
case stone
when 'ruby' then puts '7'
when 'sardonyx', 'peridot' then puts '8'
else puts "?"
end
```

정규 표현식을 통해 문자열이 일치하는게 존재하는지도 가능하다.

```ruby
stone = 'ruby'
case stone
when /ruby/
  puts '7'
when /sardonyx|peridot/
  puts '8'
else
  puts "?"
end
```

`===` 연산자를 통해 구혀한 것인데, case 값을 `===` 로 비교한다. 

`===` 는 기본 설정에서 `==` 와 같은 동작을 하지만, 몇가지 클래스에서는 예외적으로 다른 동작을 한다. 클래스가 다른 객체를 비교할 때는 어느 쪽 리시버를 사용하느냐에 따라 결과가 달라진다.


## while

조건식이 참일 경우 안의 처리식을 반복 실행

```ruby
languages = %w(Perl Python Ruby)
i = 0

while i < languages.length
  puts "Hello #{languages[i]}."
  i += 1
end
```

## until

while 과 반대로 동작. 조건식이 거짓일 때 실행

## 후위 while / until

식 뒤에 반복문을 기술할 수 있다.

```ruby
# processing? 이 true 인 동안 1 반복 실행
sleep 1 while proessing?
```

여러 문장을 사용하고 싶을 경우 `begin ... end` 를 사용한다. __do while__ 과 비슷하다. 조건에 상관없이 최초 1회는 무조건 동작!

## for

배열 / 해시는 `each` 메서드를 가지고 있다. 이런 요소들은 `for`를 사용해서 각 요소에 대한 처리가 가능하다.

```ruby
for name in %w(Alice Bob Carol)
  puts name
end

puts name
```

__each__ 는 반복 처리를 블록으로 기술하나, `for` 에서 전달하는 식은 블록이 아니여서 for 안에서 사용한 변수는 밖에서도 참조가 가능하다. 

해시를 for 로 반복 실행하면, 키와 요소로 구성되는 배열이 대입 된다. 

```ruby
for val in {a: 1, b: 2}
  puts val[0]
  puts "***"
  puts val[1]
end
```

`key`,`value` 두개의 변수를 사용하고 싶으면 다중 대입 방식으로 변수를 쉼표로 구분한다.

```ruby
for key, val in {a:1, b:2}
  puts key
  puts val
end
```

다양한 반복 메서드가 존재하지만, 보통 each 를 사용하며, 무한 반복 메서드는 `loop` 를 사용한다


```ruby
loop do
 puts "infinitely loop"
end
```

n회 반복시에는 `.times` 를 사용한다.

```ruby
2.times do
  puts 'hi'
end
```

## __END__ 와 DATA

파일 끝에 `__END__` 키워드를 사용하면 이후 작성한 프로그램은 루비 프로그램으로 실행되지 않는다.
그 아래 써진 내용들이 있다면, DATA 라는 상수에 FILE 객체로 저장이 된다. 
파일 실행시 참조할 수 있다.