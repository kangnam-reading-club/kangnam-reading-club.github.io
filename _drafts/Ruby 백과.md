> Ruby 관련 내용들을 정리해둔 짧은 메모. Rails 내용을 포함합니다. `Ctrl + f ` 로 찾아보세요.



#### RubyGems (Gem)

루비 내장 라이브러리 

#### Rake



#### Magic comment (매직 코멘트)

ruby 1.9 vession 에서는 `utf-8` 외의 문자를 사용할 때 에러가 나는 경우가 있다. 이를 위해 루비는 매직 코멘트를 제공하는데, 소스파일 상단에 주석을 치고 인코딩 설정을 명시할 수 있다. 

##### example

```ruby
# encoding: utf-8
puts '안녕하세요'
```

