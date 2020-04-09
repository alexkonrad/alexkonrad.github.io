---
layout: default
title: Notes
---

<h1>Notes</h1>

Notes on topics I'm interested in:
<section>
{% for post in site.posts %}
<article>
  <a href="{{ post.url }}">
    {{ post.title }}
  </a>
  <br/>
  <small>
    {{ post.excerpt }}
  </small>
</article>
{% endfor %}
</section>