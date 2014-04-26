pat-calendar
============

Patternslib plugin for [FullCalendar](http://arshaw.com/fullcalendar)

Usage
-----

To convert an HTML element (such as the block element <div>) into a calendar, just give it the class `pat-calendar`.
The following properties/values are supported in the `data-pat-calendar` data attribute:

| Property                  | Default value     | Values        | Description       | Type          |
| -----                     | --------          | --------      | -------           | -----------   |
| `calendar-controls`       |                   |               |
| `category-controls`       |   			    |               |
| `column-day`              | dddd M/d			|               |
| `column-month`            | ddd			    |               |
| `column-week`             | ddd M/d			|               |
| `default-view`            | month			    | month, basicWeek, basicDay, agendaWeek, agendaDay | The default view of the calendar.                     | Mutually Exclusive |
| `drag-and-drop`           | 			        | true, false   | Enable support for drag and drop or drag to resize of the events in the calendar.         | Mutually Exclusive |
| `drop-external-events`    | 			        | true, false   | Enable support for dragging and dropping events from outside of the calendar, into it.    | Mutually Exclusive |
| `external-event-selector` | 			        |               | A JQuery selector with which external events are identified. Used in conjunction with `drop-external-events`. | JQuery selector string|
| `first-day`               | 0			        |               |
| `first-hour`              | 6			        |               |
| `height`                  | auto			    |               |
| `ignore-url`              | 			        |               |
| `start-date`              | 			        |               |
| `store`                   | none			    | none, session, local|
| `time-format`             | h(:mm)t			|               |
| `title-day`               | dddd, MMM d, YYYY	|               |
| `title-month`             | MMMM YYYY			|               |
| `title-week`              | MMM D YYYY		|               |
