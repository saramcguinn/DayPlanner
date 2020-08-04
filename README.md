# DayPlanner

This is a one-day planner in which the user logs tasks/notes by hour.
Using the moment.js library, the planner displays the current date, and the time blocks dynamically change color based on whether the time is in the past, present, or future. The text that the user inputs into the time blocks is saved in local storage so that the content persists even after a page refresh.

URL: https://saramcguinn.github.io/DayPlanner/
Gitlab repository: https://github.com/saramcguinn/DayPlanner

<image src="Assets/DayPlannerScreenshot.jpg" width=600>

While the program logic of this application was not terribly complex, it was instructive in terms of how to use the moment.js library and how to effectively use local storage. I also added features, including making past rows' text areas and save buttons disabled - since it doesn't really make sense to add or save to-do items for the past. I made the header 'sticky' so that the date was always visible as the user scrolled down to later hours, and I reduced the padding in the header so it didn't take up so much screen space. I also incorporated more interesting uses of animation, including the header background and icons.
