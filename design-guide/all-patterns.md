---
title: "All COGA Patterns"
permalink: "/patterns/"
ref: "/patterns/"
---

The patterns are grouped by <a href="{{ '/objectives' | relative_url }}">Objectives</a>.

{% for objective in site.objectives %}
  <h2>{{ objective.title }}</h2>
  <ul class="list-of-sources">
  {% for pattern in site.patterns %}
    {% if pattern.objective == objective.ref %}
    <li><a href="{{ pattern.url | relative_url }}">{{ pattern.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}