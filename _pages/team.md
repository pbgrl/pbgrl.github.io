---
layout: page
permalink: /team/
title: team
description: lab members and collaborators
display_categories: [faculty]
# redirect: # external urls
nav: true
nav_order: 2
horizontal: false 

---

<!-- cv/cv.md -->
<div class="projects">
{% if page.display_categories %}
  <!-- Display categorized teams -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2> 
  </a>
  {% assign categorized_teams = site.cv | where: "category", category %}
  {% assign sorted_teams = categorized_teams | sort: "importance" %}
  <!-- Generate cards for each profile -->
  <div class="row row-cols-1 row-cols-md-3">
    {% for team in sorted_teams %}
      {% include team.liquid %}
    {% endfor %}
  </div>
  {% endfor %}

{% else %}

<!-- Display profiles without categories -->

{% assign sorted_teams = site.cv | sort: "importance" %}

  <!-- Generate cards for each profile -->

  <div class="row row-cols-1 row-cols-md-3">
    {% for team in sorted_teams %}
      {% include team.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>