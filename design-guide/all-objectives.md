---
title: "All COGA Objectives"
permalink: "/objectives/"
ref: "/all/"
---

Objectives are used to group the <a href="{{ '/patterns' | relative_url }}">patterns</a>.

<ul class="list-of-sources">
{% for objective in site.objectives %}
  <li><a href="{{ objective.url | relative_url }}">{{ objective.title }}</a></li>
{% endfor %}
</ul>