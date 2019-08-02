---
layout: post
title: "Perfect Ruby - 02 루비 기초 - 기본 문법"
author: soomin
date: 2019-05-07 00:00
tags: [ruby, perfect ruby]
image: /files/covers/ruby.png
---

>  2019/05/07 - 변수 / 메서드 / 조건식 / 식 정리 
>
>  2019/05/09 - 클래스 
> 
>  2019/05/10 - 모듈



# 변수

변수는 종류에 따라 범위(스코프)가 달라진다. 또한 명명규칙이 다르다.

```ruby
variable_name = express
```

### 지역변수

명명규칙

`ruby` 와 같이 평범하게 또는 `_ruby` 와 같이 언더바를 사용한다.

### 스코프

스코프가 가장 좁은 종류의 변수이다. 아래의 스코프를 가진다.

- 블록
- 메서드 정의
- 클래스/모듈 정의
- 톱레벨

```ruby
# example - local variable scope
foo = 'foo in toplevel'

def display_foo
  puts foo # error. 스코프 밖 지역변수 사용 
end

puts foo # okay
```

블록의 경우 밖의 지역변수를 사용 가능하다. 

### 전역 변수

##### 명명규칙

`$` 로 시작한다. 

##### 스코프

매우 넓은 스코프를 가지는 변수. 어디에서든 참조가 가능하다. 전역변수가 많으면 프로그램 규모가 커질수록 해석이 어려워진다. 

```ruby
# sample - global variable scope
$foobar = 'bazbaz'
$undefined # => nil. 존재하지 않는 전역 변수를 참조하면 nil이 반환된다. 
```

### 상수

##### 명명규칙

영문 대문자로 시작해야 한다. 대입식을 사용해 정의한다. 대입은 한번만 한다. 재정의가 가능하나, _warning_  이 뜬다

##### 스코프

알아봐야할듯. 메서드에서는 상수 정의가 불가능하다. 한 클래스 또는 모듈이 아닐지..

```ruby
# example - constant variable
def example
 Foo = "constant" # error
end
```



# 메서드

### 메소드 정의 분법 

앞에 `def` 를 붙히고, `end` 로 막는다. 

```ruby
def method_name(args)
end
```

### 문자열 출력 메서드 _puts_ 

문자열 출력 내장 메서드. `""` 를 사용해 문자열을 지정한다. `#{}` 로 감싸면 문자열 안에 루비 문법을 저장할 수 있다. 


```ruby
# example - 전달 받은 인수의 각 요소를 출력 
def hello(names)
  names.each do |name|
    puts "HELLO, #{name.upcase}"
  end
end
rubies = ['MRI', 'Jruby', 'rubinius']

hello(rubies)

=> HELLO, MRI
=> HELLO, JRUBY
=> HELLO, RUBINIUS
```

### 메서드 호출 

메서드 호출은 `name.space` 처럼 다음과 같은 형식으로 기술한다.

```ruby
receiver.method_nmae
```

메서드 호출시 괄호는 생략 가능하다.

```ruby
# example - 반복 실행 메서드와 block 
names.each do |name|
  puts "Hello, #{name.upcase}"
end
```

`.each` 메서드를 출력하였다. 이후 `do...end` 를 통해 반복 실행 시 처리할 코드를 안에 정리하고있는데, 이 `do...end` 사이에 있는 내용을 __블록(block)__ 이라 부른다.  (`do..end` 대신 `{}` 도 사용가능하다. 하지만 우선순위에 차이가 있다.)

### 블록 (block)

어떠한 처리를 하나위 단위로 묶은 것 

```ruby
# example - file open
File.open 'README.md' do |file|
  puts "file.read"
end
# 루비는 File.open 시 알아서 닫는다 
```

`||` 로 감싸진 내용의 변수는, 블록이 실행될 때 전달받는 인수이다.

### 톱 레벨 

전역 메서드인 메서드를 톱 레벨이라고 하는 것 같다. 메소드의 정의된 위치에 따라 톱 레벨이 된다. 

_특징_

- 메서드 호출 시 리시버를 기술하지 않는다.
- 함수처럼 어디서든 호출할 수 있다. 

### 메서드 반환 값 

`return` 을 쓰지 않아도, 메서드 내에 마지막으로 평가되는 값이 반환된다. `return` 을 쓰면 `return ` 값이 반환되며, 그 밑 값은 출력되지 않는다. 

```ruby
# example - add return
def add(a, b)
  a+b
end

add(1,1) # => 2

def add(1,b)
  return a + b
  puts "2"
end 

add(1, 2) # => 3
```

### 줄

줄바꿈 시 식과 식을 구분한다 (보통 `c,java` 는 `;` 로 구분함) `;` 를 쓰지 않아도된다. 하지만 한줄에 여러식을 사용하고 싶은 경우 `;` 를 사용한다. 

```ruby
name ='ruby' ; puts(name.upcase) # 'RUBY. 한줄로 쓰고싶어 ; 로 구분
```

### 멀티바이트 

한글 등 멀티바이트 포함의 경우, 스크립트 인코딩을 지정할 수 있다. 최상단에 `#` 를 사용하면 가능하다.
이걸 매직 코멘트라고 하는데, 2.0 이후에는 utf-8 을 지원하기 때문에 사용하지 않아도 된다. 

```ruby
# coding: utf-8
```



## 조건 분기와 진리값

### if 

조건 식이 참일 경우 안에 있는 스코프의 처리를 실행한다. `false` 나 `nil` 이외의 값은 모두 참으로 처리한다.

```ruby
if true
  puts 'ping'
end
```

### else

조건식이 거짓일 경우 `else` 아래의 있는 스코프를 실행한다.

```ruby
if false
else
  puts "출력"
end
```

### elsif

여러 조건식을 걸고 싶을경우 사용한다. 해당하는 조건식의 스코프를 출력한다.

```ruby
n = 2
if n
elsif n.zero?
  puts "출력"
elsif n.odd?
else
end
```



# 식

루비는 어떤 값을 반환한다. `puts` 의 경우 출력값을, `변수`는 값을 반환하고,` if` 의 경우 마지막으로 평가한 값을 반환한다. 





# 클래스

루비는 클래스 기반 객체지향 프로그래밍이며, 모든 값은 객체로 취급된다. 

### 클래스 정의

클래스는 객체의 동작을 정의한다. 모든 객체는 클래스의 인스턴스이다. 

```ruby
class ClassName
end
```

루비에서는 클래스 명 정의시 `class` 메서드를 사용한다. 클래스명은 영문 대문자로 시작해야한다.

```ruby
# example
class MyClass
  def hello
    puts 'Hello, My Object'
  end
end
```

### 클래스로부터 인스턴스 생성하기

```ruby
ClassName.new
```

`new`  키워드를 통해 객체를 생성할 수 있다.

```ruby
# example
my_object = Myclass.new
my_object.hello # print "hello, My Object!"
```

### 인스턴스 변수

인스턴스 내에서만 참조할 수 있는 변수. 변수 지정시 `@` 를 사용한다. 

```ruby
# example 
class Ruler
  def length=(val)
    @length = val
  end
  
  def name=(val)
    @name = val
  end

  def name
    @name
  end

  def length
    @length
  end
end   
  
ruler = Ruler.new   
ruler.length = 30
ruler.length # => 30
```

## 대입 메서드 

```ruby
def method_name=
end
```

루비에서는 setter 메서드를 만들 때, 메서드 이름 끝에 `=` 를 붙힌다. 
위 예시에서 `length=` 메서드는 붙어있지만, `name` 메서드의 경우는 안붙어 있는데, `ruler.name = "hi"` 를 하게되면 에러가 난다.

```irb
=> class Ruler
=>   # 대입 메서드 사용 
=>   def length=(val); @length = val; end;
=>   # 대입 메서드 미 사용  
=>   # getter
=>   def name(val); @name = val; end;
=>   def name; @name; end;    
=>   def length; @length; end;  
=> end     
> r = Ruler.new
=> #<Ruler:0x00007fd2ec24ace0>
> r.name = "h"
NoMethodError: undefined method `name=' for #<Ruler:0x00007fd2ec24ace0>
Did you mean?  name
from (pry):20:in `__pry__'
r.length = 30
=> 30
```

대입 메서드를 사용해도 되나, 실제로 인스턴스 변수에 접근자를 만들때는 `attr_accessor` 를 이용한다. 

### attr_accessor

```ruby
class Ruler
  attr_accessor :instance_name1, :instance_name2 
end
```
이렇게 사용하면, 위에 setter,getter 를 줄여 사용할 수 있다. 

### 초기화

인스턴스 생성시 초기화가 필요할 때, `initialize` 메서드를 사용한다. 

```ruby
class Ruler
  attr_accessor :length
  def initialize(length)
    @length = length
  end
end
```

### 클래스 메서드

클래스를 대상으로 호출할 수 있는 메서드. `.new` 도 클래스 메서드이다. 해당 메서드는 `.self` 를 붙혀 정의한다.

```ruby
class Ruler
  attr_accessor :length
  def self.pair
    [Ruler.new, Ruler.new]
  end
end
```

### 클래스 변수

클래스와 해당 인스턴스를 스코프로 하는 변수를 클래스 변수라고 한다. 변수 앞에 `@@` 를 붙혀 표기한다.

```ruby
@@cvar = 'Hello, Class Variable!'
```

### 상속

루비는 단일 상속을 지원한다.

```ruby
# example 
class Parent
  def hello
    puts "hello, Parent Class"
  end
end
class Child < Parent
  def hi
    puts 'Hello, Child class!'
  end
end

c = Child.new
c.hello # =>  "hello, Parent Class"
c.hi # => puts 'Hello, Child class!'
```

### 오버라이드

슈퍼클래스에 정의된 메서드를 재정의 하는 것. 메서드 앞에 `super` 를 붙혀준다. 

```ruby
# example
class Child < Parent
  def hello
    super
    puts "hello, Child class!"
  end 
  def hi
    puts 'Hello, Child class!'
  end
end
```

# 모듈

인스턴스화할 수 없는 클래스 같은 것. 

```ruby
module ModuleName
end
```
모듈 안에서 다른 모듈이나 클래스 정의를 기술할 수 있어, 네임 스페이스로 이용 가능하다. 같은 이름 클래스를, 다른 모듈에 정의시 `::` 를 이용해 참조할 수 있다.

```ruby
# example
module A
  class SameName
  end
end
module B
  class SameName
  end
end

A::SameName
B::SameName
```
### 목적

- 특정 메소드를 인스턴스 메서드로 포함
- 특정 객체의 메서드로 포함
- 모듈 함수로 사용

