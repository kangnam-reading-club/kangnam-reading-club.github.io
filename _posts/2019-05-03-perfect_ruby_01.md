---
layout: post
title: "Perfect Ruby - 01 루비 개요"
author: soomin
date: 2019-05-03 00:00
tags: [ruby, perfect ruby]
image: /files/covers/ruby.png
---

> 아는분이 TDD(Test Driven Development) 스터디를 하자고해서 시작했다. 기본서인 Perfect Ruby On Rails 를 하루에 10쪽씩이라도 읽으려고한다! 그에 대한 간단한 정리! 



## about ruby

- _동적 프로그래밍_ / 스크립트 언어
- 1996년 탄생
- __모든것이 객체이다__
- RubyGems 
- Rake 내장 



#### 모든것이 객체이다

루비만의 가장 큰 특징은 모든것이 객체라는점. 그래서 모든 값에 `.class` 를 쓰면 값이 나온다!`1`, `true/false` 와 같은 일반 값 조차 객체이기 때문에, 메서드를 사용할 수 있다! `nil` 또한 객체이다! 신기하네

```ruby
# 메서드 사용해보기 
true.class
=> TrueClass
true.to_s
=> "true"
nil.class
=> NilClass
```



#### ruby 명령어 

루비를 설치하면 `ruby ~ ` 로 실행하는 명령어를 사용할 수 있다. 대표적으로 `ruby -v` 는 버전 확인이다. 여러 명령어를 알고싶으면 아래를 참고하자. 필요할 때 참고하면 된다. 

```console
~$ruby -v
ruby 2.4.3p205 (2017-12-14 revision 61247) [x86_64-darwin17]
~$ruby -help
Usage: ruby [switches] [--] [programfile] [arguments]
  -0[octal]       specify record separator (\0, if no argument)
  -a              autosplit mode with -n or -p (splits $_ into $F)
  -c              check syntax only
  -Cdirectory     cd to directory before executing your script
  -d              set debugging flags (set $DEBUG to true)
  -e 'command'    one line of script. Several -e's allowed. Omit [programfile]
  -Eex[:in]       specify the default external and internal character encodings
  -Fpattern       split() pattern for autosplit (-a)
  -i[extension]   edit ARGV files in place (make backup if extension supplied)
  -Idirectory     specify $LOAD_PATH directory (may be used more than once)
  -l              enable line ending processing
  -n              assume 'while gets(); ... end' loop around your script
  -p              assume loop like -n but print line also like sed
  -rlibrary       require the library before executing your script
  -s              enable some switch parsing for switches after script name
  -S              look for the script using PATH environment variable
  -T[level=1]     turn on tainting checks
  -v              print version number, then turn on verbose mode
  -w              turn warnings on for your script
  -W[level=2]     set warning level; 0=silence, 1=medium, 2=verbose
  -x[directory]   strip off text before #!ruby line and perhaps cd to directory
  -h              show this message, --help for more info
```



#### 스크립트 실행 

스크립트를 실행하고싶다면 `$ ruby 파일명`  을 사용하면 된다!

##### example

hello.rb 파일 생성

```console
$ vi hello.rb
# puts 'Hello, world' 입력
$ ruby hello.rb
=> Hello, world!
```



#### 매직 코멘트

ruby 1.9 vession 에서는 `utf-8` 외의 문자를 사용할 때 에러가 나는 경우가 있다. 이를 위해 루비는 매직 코멘트를 제공하는데, 소스파일 상단에 주석을 치고 인코딩 설정을 명시할 수 있다. 

##### example

```
# encoding: utf-8
puts '안녕하세요'
```



#### irb

루비를 설치하면 REPL 이라는 대화 형식으로 루비 동작이 확인 가능한 `irb` 가 설치된다. 말이 어려운데 그냥 루비 명령어 확인 가능한 툴!  실행값과 반환값을 출력해준다. 종료는 `ctrl + d`



#### 코딩스타일

- 구분자를 쓸때 `_` 스네이크 케이스를 쓴다. 
- 진리값 여부 메소드는 뒤에 `?` 를 써서 끝낸다. 다른 언어는 `is_xxx` 식으로 표기하는데, 아주 좋은 표기인듯
- 코드 블록을 사용하는 방법이 두가지다. `do..end` , `{}` 를 쓰는데, __우선순위가 달라지는 경우가 있어서 구별해서 사용해야 한다.__ 보통 한줄 쓸때 `{}` , 여러줄 쓸 때 `do..end` 를 사용한다.

세부 코딩 스타일은 아래 참고

https://github.com/airbnb/ruby



#### 여러 종류의 루비

루비는 개발 언어별로 다양한 종류가 있다고 한다. 중요하지 않으니 패스



#### 루비 커뮤니티

루비를 주제로 하는 메일링 리스트. 전반 질의와 라이브러리 정보들이 공유된다. 

- <https://www.ruby-lang.org/en/community/mailing-lists/>