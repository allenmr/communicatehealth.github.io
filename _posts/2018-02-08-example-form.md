---
layout: post
title:  "Example Sign-up Form"
date:   2018-02-13 12:00:00
categories: accessibility
---
Considerations for coding accessible forms, with a focus on [sign-up forms](https://communicatehealth.github.io/examples/forms/).

## Accessibility
ARIA labels and more!

- **[Wrap related fields in a fieldset](https://www.w3.org/WAI/tutorials/forms/grouping/):** 
<blockquote>Grouping related form controls makes forms more understandable for all users, as related controls are easier to identify. It also makes it easier for people to focus on smaller and more manageable groups rather than try to grasp the entire form at once.</blockquote>
- **Required fields:** use both [required AND aria-required="true"](https://www.w3.org/WAI/tutorials/forms/validation/#validating-required-input):
<blockquote>The <code>aria-required</code> attribute informs assistive technologies about required controls so that they are appropriately announced to the users (as opposed to validating the input). Most current web browsers automatically set its value to <code>true</code> when the HTML5 <code>required</code> attribute is present. In this example, it is provided redundantly to support web browsers that don’t communicate the <code>required</code> attribute to assistive technology.</blockquote>
- **Datepicker:** see the bottom of the [accessible datepicker HTML](https://github.com/haltersweb/Accessibility/blob/gh-pages/date-picker.html) for accessibility considerations
- Label **hint text** with [aria-describedby](http://webaim.org/techniques/forms/advanced#describedby)
- **Radio button grid:**
  - Use [hidden labels](http://webaim.org/techniques/forms/advanced#hiddenlabel) to label inputs that visually fall into the grid headings &mdash; supports the [span input trick](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp)
  - **Alternative if hidden labels not needed:** use [aria-labelledby](http://webaim.org/techniques/forms/advanced#multiple) for multiple inputs that use a single, visible label

## Field Validation
The full form is validated on submit, based on `required` and `pattern` attributes.

### On focus-out Validation
- Fields that require a user to enter content that meets pre-defined requirements are validated on a field-by-field basis, as soon as a user enters content and then exits the field (e.g., password, confirm password).
- Field-by-field validation is not run on fields where a user has not yet entered content (or has erased all content).

### Zip codes
- Use `type="text"` for zip codes. [From the spec](https://www.w3.org/TR/html5/sec-forms.html#number-state-typenumber), `type="number"` is reserved: 
<blockquote>The <code>type=number</code> state is not appropriate for input that happens to only consist of numbers but isn’t strictly speaking a number. For example, it would be inappropriate for credit card numbers or US postal codes. A simple way of determining whether to use <code>type=number</code> is to consider whether it would make sense for the input control to have a spinbox interface (e.g., with "up" and "down" arrows).</blockquote>

- The [zip code pattern](http://html5pattern.com/Postal_Codes) is set for USA postal codes

### Email addresses
The [email pattern](https://html.spec.whatwg.org/#e-mail-state-(type=email)) is as permissive as possible, while still meeting spec requirements and allowing for validation.

### Phone numbers
[Masks can confuse users](http://www.uxbooth.com/articles/the-new-rules-of-form-design/) and filters require users to enter their numbers in a specific format (which falls into the [designing for the backend trap (#8)](https://www.nngroup.com/articles/web-form-design/)).

Instead, use a permissive format: the phone field will accept a variety telephone formats, including:
- 1.888.888.8888
- 888-888-8888
- 1 (888) 888-888

## Additonal UX Considerations
### Field length
[Use field length as an affordance](https://uxdesign.cc/design-better-forms-96fadca0f49c)
<blockquote>The length of the field affords the length the answer. Employ this for fields that have a defined character count like phone numbers, zip codes, etc.
</blockquote>

### Clearly styled primary and secondary buttons
[Action buttons](https://uxplanet.org/designing-more-efficient-forms-structure-inputs-labels-and-actions-e3a47007114f#3af0):
<blockquote><strong>Lack of visual distinction between primary and secondary actions can easily lead to failure.</strong> Reducing the visual prominence of secondary actions minimizes the risk for potential errors and further directs people toward a successful outcome.</blockquote>

### Partial form validation
To prevent users from unintentionally canceling an unfinished form, the form pops up a confirmation dialog when the user has started the form, then clicks the secondary `Cancel` button.

## Limitations and Next Steps
- The [accessible datepicker](http://haltersweb.github.io/Accessibility/date-picker.html) we've used doesn't allow for more than one datepicker on a page.
  - The datepicker returns 1 or 2 digits for day and month, but our field description indicates only 2 digits. Update datepicker to add leading 0's where appropriate.
- Patterns are limited to USA defaults. Improve matching for phone numbers and zip codes for international support.
- Partial form validation: add a confirmation popup when browsing away from or reloading an unfinished form
- Experiment with other form types. For example, a login page could dynamically add fields to become a signup page if the username isn't in the database.

## Further Reading
- [Design Better Forms](https://uxdesign.cc/design-better-forms-96fadca0f49c): great examples of what to do and not do when designing forms
- NNG: [Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/)
- [The New Rules of Form Design](http://www.uxbooth.com/articles/the-new-rules-of-form-design/)
- [Web Accessibility Tutorials
Guidance on how to create websites that meet WCAG](https://www.w3.org/WAI/tutorials/forms/)
- [Web Form Design, Filling in the blanks](http://www.luceit.com/sites/default/files/Web%20Form%20Design%20Filling%20in%20the%20Blanks.pdf) (from 2008, but by Luke Wroblewski and still relevant!)
- [Mobile Form Design Strategies](http://www.uxbooth.com/articles/mobile-form-design-strategies/)
- [Designing More Efficient Forms: Structure, Inputs, Labels and Actions](https://uxplanet.org/designing-more-efficient-forms-structure-inputs-labels-and-actions-e3a47007114f)
