---
layout: default
title: Blog
---
# Blog

<ul>
  {% for post in site.posts %}
    <li class="posts">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
