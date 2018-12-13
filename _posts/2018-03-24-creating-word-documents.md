---
layout: post
title:  "Creating Word Documents"
date: 2018-05-24 12:00:00
categories: howto
redirect_from:
  - /2018/05/creating-word-documents/
---

Often our clients ask for 508 compliant Word Documents, so we take the steps listed below, but many of these steps are a good practice to use in every Word Doc that you create. These changes will make it easier for you to create a consistent Word Doc and make it easier to complete making it 508 compliant. It's a win-win!

### 1. The Styles Panel

![Word Styles Panel]({{ "/img/word-styles-panel.png" | prepend: site.baseurl }})

The **Styles Panel** is part of the Home tab on the Word ribbon menu. You can also open a larger/more useful version of the panel by clicking on the `Styles Pane` button.

### 2. Creating & Editing styles

![Update Style to Match Selection]({{ "/img/word-match-selection.png" | prepend: site.baseurl }})

The fastest way to create styles in Word is to modify some text to match the font styles that you would like and then select `Update to Match Selection` in the **Styles pane.**

You can also edit existing styles the same way or you can click the drop-down arrow in the **Styles Pane** and select `modify style` to access the modify style context menu. From there you can edit the style directly, just like you would any other text in a Word document (but it's saved to the style for use later).

![Modify Styles Context Menu]({{ "/img/word-modify-styles-context-menu.gif" | prepend: site.baseurl }})

### 3. Applying styles

![Apply Style to Selection]({{ "/img/word-apply-styles.gif" | prepend: site.baseurl }})

Select the text that you want to adjust and then select the style from the **Styles Pane.**

Note: Make sure that no other modifications are added to the style in the `Current Style` preview.

![Current Style Preview]({{ "/img/word-styles-plus.png" | prepend: site.baseurl }})

### 4. All Images In Line with Text

In order for Images to be read by a screen reader they need to be Formatted as `In Line with Text`. You can set this from the **Picture Format** ribbon, in the `Wrap Text` dropdown.

![Image In Line with Text]({{ "/img/word-image-in-line.png" | prepend: site.baseurl }})

### 5. Images need alt Text

You can add alt text to your images in Word by right-clicking on the image and selecting `Format picture` or through the `Format Pane` in the **Picture Format** ribbon. Alt text is under the **Layout & Properties** tab and you only need to fill out **Description** (Title isn't used)

**Note**: limit alt text to 125 characters or less

![Image Alt Text field]({{ "/img/word-alt-text-pane.png" | prepend: site.baseurl }})

### 6. Tables
In order for tables to make sense when read by a screen reader, each table needs to have a header row, which is repeated if the table goes across multiple pages, and alt text that briefly summarizes what's in the table.

#### Every table needs a header row
To set the table header row, select `Header Row` in the  **Table Design** ribbon

![Table header row]({{ "/img/word-Table_header_rows.png" | prepend: site.baseurl }})

For tables that span multiple pages, put your cursor in the the header row select `Repeat Header Rows` from the  **Layout** ribbon (you can do this for every table, just in case it grows to more than one page!)

![Table header row repeat]({{ "/img/word-Layout_repeat_header_rows.png" | prepend: site.baseurl }})

#### All tables need alt Text
To add alt text to a table, right click in the table and select **Table properties**, then go to the **Alt text** tab and fill in the **Description**

**Note**: as with images, limit alt text to 125 characters or less

![Table Alt Text field]({{ "/img/word-table_alt_text.gif" | prepend: site.baseurl }})
