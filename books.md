---
layout: page
title: Books
permalink: /books/
sitemap:
priority: 0.7
---

{% for tag in site.books %}
* [{{ books.name }}]({{ site.baseurl }}/books/{{ books.name }})
{% endfor %}