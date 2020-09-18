---
layout: default
title: Notes
---
<section>
{% for post in site.posts %}
{% include post-preview.html post=post %}
{% endfor %}
</section>