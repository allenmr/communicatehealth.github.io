---
layout: post
title:  "Pivot Tables"
date:   2016-03-16 12:00:00
categories: performance
---

What are Pivot Tables?
----------------------

Spreadsheet features that allow you to summarize colums of data.

When can I use them?
--------------------

Pivot tables are available in Excel _not Excel online :-(_, Goolge Sheets, Libre Office, and OpenOffice.

How could I use them (i.e., a simple _Hello World_ example)?
------------------

Say you want to know how many Remote vs Rockville vs Northampton attendees there were at the 10/23/2015 Creative time.
Conveniently enough, there is a spreadsheet with this information on Box: **Creative-Time-Attendees_10.23.15.xlsx**.

At this point, there are only 28 rows -- you could count the rows under "Remote/Rockville/Northampton" manually, but that would waste valuable seconds that could be spent playing with Pivot Tables.

Click within the table of data, then (On my version of Excel), select **Insert**...**PivotTable** (Other versions of Excel, and other spreadsheet programs typically use something like **Data**...**PivotTable**.  Then press "OK" and a new mostly empty sheet appears, with some tools along the right side.

Along the right side, drag "Remote/Rockville/Northampton" from the top-right area into the "Values" box (lower-right) and the spreadsheet will show the count of entries in that column (28). Not very interesting. But drag it again from the top right to the "Rows" box, and the spreadsheet will organize the count by Remote, Rockville, and Northampton. Viola!

How do I use them every day (i.e., a semi-real example)?
--------------------

The following link is to a simulated time log, with a date entry, elapsed time, and task columns. [**sampleHours.xlsx**](/files/sampleHours.xlsx) &mdash; A useful document, but not necessarily easy to post into BillQuick.  A pivot table can make this easier.  

Once again, start the process of creating a pivot table.  But before pressing "OK" on the creation dialog, I like to extend the range of the input data so I can add more rows every day.  In this case, I change the range "Sheet1!$A$1:$C$68" to "Sheet1!$A$1:$C$68**00**".

After pressing "OK", an new blank spreadsheet appears.  Drag "Hours" to the "Values" box.  Notice that "Count of Hours" appears, when what is really needed is a "Sum of Hours". Click on that label to edit the "Value Field Settings" and change "Summarize value field by" to "**Sum**".  Then drag "Date" to "Columns" and "Category" to "Rows"... And a BillQuick-friendly table will appear.

If you have a lot of date columns, it's handy to lock the first column. In my version of Excel, that can be done via View... Freeze Panes... Freeze First Column.

Try dragging "Date" to "Rows" and "Category" to "Columns" to see other ways of visualizing and summarizing the data.
