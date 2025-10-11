---
layout: base.njk
permalink: contact.html
title: Contact
description: More cool sites!
featured_image: favicon.png
relative_prefix: ./
---

<div class="contact-form">
    <div class="contact-info">
        <h3>I'd love to hear from you,<br/>
            leave your info to get in contact with me!
        </h3>
    </div>
    <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="333fd6ff-7aba-4747-a3e2-ef1262f2f526">
        <label for="first" class="form-label">First Name</label><br>
        <input type="text" name="first" required><br>
        <label for="last" class="form-label">Last Name</label><br>
        <input type="text" name="last" required><br>
        <label for="email" class="form-label">Email</label><br>
        <input type="email" name="email" required><br>
        <label for="message" class="form-label">Message</label><br>
        <textarea name="message" required></textarea><br>
        <input type="hidden" name="redirect" value="https://web3forms.com/success">
        <button type="submit">Submit</button>
    </form>
</div>