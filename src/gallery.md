---
layout: base.njk
permalink: "{{ page.fileSlug }}.html"
title: Gallery
description: My photography projects!
featured_image: favicon.png
---

<div class="grid gallery">
{% for image in collections.gallery %}
<div>
    <img src="{{ image.src }}" alt="{{ image.name}}" />
</div>
{% endfor %}
</div>
<div class="overlay"></div>
<script src="./scripts/lightbox.js"></script>