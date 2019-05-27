---
layout: post
title: "VSCode 생산성 높이기 (VSCode Recommended Extensions)"
author: irene
date: 2019-05-09 00:00
tags: [vscode]
image: /files/covers/vscode.jpg
---

> 에디터로 VS Code 를 사용중인데, 이런걸 쓰다보면 뭔가 예쁘고 재밌는 내용들을 찾게 된다. 유용한건 검색해도 많이 나오는데, 약간 폼나는 익스텐션들은 잘 안나오길래, 한번 소개를 해보고 싶어 글을 쓰게 되었다. 


# 1. indent-rainbow

<https://github.com/oderwat/vscode-indent-rainbow>

파일 들여쓰기시, 색을 넣어주는 유틸리티. 코드가 보기 좋아진다. 

![들여쓰기 sample](/files/vscode/extensions/indent.png)

# 2. Material Theme Kit

<https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme>

vscode editor 의 테마를 다양하게 제공해준다. vscode 도 예쁜게 정말 많지만, 훨신 더 예쁜 테마들이 많다. 


기본적으로 제공해주는 테마가 아래와 같다면,
![vscode default](/files/vscode/extensions/vscode_darker.png)
material darker 은 아래와 같다. 
![material default](/files/vscode/extensions/material_darker.png)
다양하고 예쁜 테마들을 제공한다. 


# 3. Material Icon Theme

[repo]:
vscode 탐색기에 나오는 아이콘을 매터리얼에서 제공해주는 아이콘으로 변경해준다. 예쁘다. 




# 4. FiraCode

<https://github.com/tonsky/FiraCode>

코드에서 많이 쓰이는 심볼 `==` `=>` 이런 내용들을 귀엽게 바꿔준다. 

![firacode](/files/vscode/extensions/firacode.png)

ruby에서 나오는 firacode example. `=>` , `->` 이 예쁘게 바뀐걸 볼 수 있다.. 코드계의 네일아트랄까!

# 5. Live2d

<https://github.com/summerscar/vscode-live2d>

![live2d](/files/vscode/extensions/live2d.png)

vscode 위에 캐릭터가 생성된다... 약간 집에서 해야할 것 같은 느낌(!) 고양이를 좋아해서 깔아봤는데, 애니 캐릭터가 많다. 애니를 좋아하는 개발자들은 정말 좋아할 것 같은 익스텐션!! 마우스 커서를 캐릭터가 따라다녀 보는 재미가 있지만,, 나는 고양이가 안 귀여워 지웠다..무튼 즐거운 익스텐션! 


# 6. Relative Path

`cmd + shift + h` 를 눌러서 원파는 파일을 검색후 엔터치면, 자동으로 상대 경로를 만들어준다. 마크다운 이미지 넣을때 짱 유용하게 사용중. 

# 7. command 창에서 자동으로 열기

<https://code.visualstudio.com/docs/setup/mac>

익스텐션은 아니지만, 편리해서 추가하는 팁. 터미널에서 `code .` 하면 현재 폴더에서 자동으로 vscode 가 열리게 할 수 있다. 아래 내용을 복사하해서 터미널로 붙힌 후 `code .` 를 해보자. 잘 동작하는걸 볼 수 있다.

```console
# mac osx
cat << EOF >> ~/.bash_profile
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```