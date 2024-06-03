# CosCalendar - Cosplay Planning App

This is my 5th and final project at Code Institute, implementing all skills learned so far and focusing on an output using React on the frontend and Django REST API on the backend.

----------

## CONTENTS

* [User Stories](#user-stories)

* [Design](#design)
	* [Accessibility](#accessibility)
  * [Wireframes](#wireframes)

* [Features](#features)

* [Technologies Used](#technologies-used)
	* [Languages Used](#languages-used)
	* [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Iteration over starting code](#iteration-over-starting-code)

* [Deployment & Local Development](#deployment--local-development)
	* [Deployment](#deployment)
	* [Local Development](#local-development)
	* [How to Fork](#how-to-fork)
	* [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Bug Fixes](#bug-fixes)

* [Credits](#credits)

* [Code Used](#code-used)

* [Content](#content)

* [Acknowledgments](#acknowledgments)

- - - 

## User Stories

| Epic | User Story  |
|--------------|---|
| All Users | As a User, I wish to view the landing page so I can see the available content  |  
|              | As a User, I wish to click on the nav bar links so I can navigate to the selected content   |
|              | As a User, I wish to navigate the selected content quickly so I can view content without page refresh |
|              | As a User, I wish to see my profile link in order to easily tell if I'm logged in or not |
|              | As a User, I wish to *** so I can *** |
|              | As a User, I wish to *** so I can *** |
|              | As a User, I wish to *** so I can *** |
|       (not MVP)    | As a User, I wish to browse the current list of user-added conventions so I can see if my desired convention already exists |
| Unauthenticated User | As an Unauthenticated User, I wish to register an account by clicking Register so I can make use of the authenticated user content | 
|              | As an Unauthenticated User, I wish to click login so I can access certain features  | 
|              | As an Unauthenticated User, I wish to *** so I can *** | 
| Authenticated User | As an Authenticated User I wish to Sign out of the website so that my profile can remain safe when I want it to | 
|              | As an Authenticated User, I wish to make a cosplay to-do item on the calendar so I can plan and mark off steps to complete my cosplay   |
|              | As an Authenticated User, I wish to view my cosplay to-do item so I have an overview of the task  |
|              |  As an Authenticated User, I wish to add notes to my cosplay plans so I can put down thoughts outside of the to-do checklist  |
|    (not MVP)   | As an Authenticated User, I wish to add a convention so I can enable other users to find it and/or add my own cosplay plans to the convention |
|    (not MVP)  | As an Authenticated User, I wish to save a convention to my profile so I can keep track of events I'm interested in  |  
|              | As an Authenticated User, I wish to mark tasks on my to-do list as complete, so I can track my progress   |
|              |  As an Authenticated User I wish to update my username and/or password in order to change my name if I wish and/or ensure my account is safe  |
|              | As an Authenticated User I wish to add a profile picture in order to customize my profile   |
|              | As an Authenticated User I wish to edit a profile picture in order to update my picture when I want to  |
|              | As an Authenticated User I wish to delete a profile picture in order to remove my cosplay from the internet if I wish  |
|              |  |
|              |  |
|   Site Admin  | As a Site Admin I wish to delete user's content if necessary so I can control the sort of content on the site  | 
|              | As a Site Admin I wish to *** so I can ***   |
|              | As a Site Admin I wish to *** so I can ***  |
|              | As a Site Admin I wish to *** so I can ***  |
  

- - -

## Design

The design is going to be simple to avoid too much time being spent on superficial things as I am still very keen on practicing my backend skills. The page will be clear and concise to keep the user's focus on the functionality, the planning part of the page.

I wanted some calming blue tones but came across a colour palette that has a mixture of purple and blue with turquoise and green. Purple is said to symbolize, among others, creativity and peace, which I felt fit in with my plan:

![coolors_palette](https://github.com/emmy-codes/CosCalendar-cosplay-planning-page/assets/70635859/57ea61ee-75b7-456e-97d4-466aa5016012)

### Accessibility

Any imagery will be addressed using alt tags, and the above colour palette has very minimal variation in Coolor's colour blindness comparison! Semantic HTML will be used wherever React components aren't being rendered, and those components will have clear names to specify their use (although I know they'll be converted into JS and HTML in the browser).

### Wireframes

Homepage/login: The homepage is going to go straight to offering to login/sign up

![login_wireframes](https://github.com/emmy-codes/CosCalendar-cosplay-planning-page/assets/70635859/85ef6063-e9f2-46df-9d29-47b9162fd551)

Register: 

![register_wireframes](https://github.com/emmy-codes/CosCalendar-cosplay-planning-page/assets/70635859/030b2f00-27b4-4347-815d-6243e86a6f33)

CosCalendar:

![calendar_wireframe](https://github.com/emmy-codes/CosCalendar-cosplay-planning-page/assets/70635859/ef2f850f-3cc3-4d85-8406-9bdc3e74433e)

Add cosplan popup: When the user edits one of their plans the same window will popup, so this serves both as add new and edit existing plans

![add_plan_popup_wireframe](https://github.com/emmy-codes/CosCalendar-cosplay-planning-page/assets/70635859/a0cd2ffc-bcb8-498a-9019-9d5a16f5aa16)

## Features

I am planning a cosplay planning page for cosplayers to help them stay accountable when con crunching (a phrase often used in the community for panicking to make your cosplay in time).

An unathenticated user will be encouraged to log in/sign up to access the content.

An authenticated user will have a profile of their basic information. Uncertain if there will be further functionaliy here yet.

The main page will be a calendar type app but with a larger list of events to the side of/underneath the calendar. This will be the cosplayers' plans to stay on top of and they won't have to click on a specific date to see the plans. This way the focus is more on the to-do list aspect of the planning than just looking like an imitation Google Calendar.

It would be nice to have them coloured in order of date - any within a week of the convention are red, from there and up to a month before the convention are yellow, then green or so. This would help the cosplayer at a glance to see how many items are left on their planning app.

On the overview cosplayers will be able to go delete the to-do action, as well as click on it for further information.

In the task overview page there an editable text pre-filled with the user's to-do information. The user can save the updated information (such as changing the date or adding/removing text details).

It will also be possible to click on a date to add a task which will bring the user to the same page as the edit task, but with no data pulled from the database.

- - - 

## Technologies Used

### Languages Used
 
HTML
CSS
JavaScript
Python
Tailwind CSS and components

### Frameworks, Libraries & Programs Used

[Github](https://github.com/) - For online storage of code and deployment.

[Picresize](https://picresize.com/) - Used to resize images for Readme/Testing docs.

[VS Code](https://code.visualstudio.com/) - For writing my code.

[Heroku](https://dashboard.heroku.com/apps) - For deploying my program.

[Grammarly](https://app.grammarly.com/) - For grammatical adjustments.

[Materialize](https://materializecss.com/) - Framework to make responsive front-end solutions.

[Django](https://www.djangoproject.com/) - To build my CRUD functionality.

[PostgreSQL](https://www.postgresql.org/) - For my Database.

[Cloudinary](https://cloudinary.com/) - For hosting blog images.

[Coolors](https://coolors.co/) - To create colour palettes.

[Tailwind CSS color generator](https://uicolors.app/) - To generate a CSS palette for Tailwind.

[React](https://react.dev/) - For organising/structuring the code.

- - -
  

## Iteration over starting code

The first iteration was done using 3 Tailwind UI React components which was quick to give the page a decent structure out of the box.

The calendar is the meat and veg of this page and much of the premade component data is static so will be needing a lot of refactoring. There's so much functionality involved in a calendar app that I decided to use the date-fn library to help me piece it all together.

Premade date-fn functions:

[startOfDay](https://date-fns.org/v3.6.0/docs/startOfDay) - Returns the start of a day.

[startOfWeek](https://date-fns.org/v3.6.0/docs/startOfWeek) - Returns the start of the week for the given date.

[endOfMonth](https://date-fns.org/v3.6.0/docs/endOfMonth) - Returns the end of a month for the given date.

[endOfWeek](https://date-fns.org/v3.6.0/docs/endOfWeek) - Returns the end of a week for the given date.

[eachDayOfInterval](https://date-fns.org/v3.6.0/docs/eachDayOfInterval) - Returns the array of dates within a specified time interval.


In my code these do the following:

1. The function getCalendarMonth uses the variable todaysDate which returns todays date using startOfDay
2. The firstCalendarDay variable calculates the start of the week from todaysDate
3. The lastDayOfMonth variable calculates the last day of the month (which isn’t the last date, as it could be that the beginning of the next month is in the middle of the week)
4. The lastCalendarDay variable calculates the final day in the calendar’s month overview by finding the endOfWeek of the lastDayOfMonth
5. Then returns eachDayOfInterval that receives the start and the end as the first and last days of the weeks in the monthly calendar view

That’s a lot of going backwards between the variables! But I was then able to replace the premade render with getCalendarMonth() which continued to map over the data as before.


- - -

## Deployment & Local Development

### Deployment

This project was deployed at [Heroku](https://heroku.com/)

The numbers on the screenshots represent the numbers on the steps of my deployment process.

To deploy this project after creating my account, I:

1. Went to my dashboard and clicked on the New App dropdown menu

2. Clicked Create new app from the options
  

![heroku_deployment_step_1-2](https://github.com/emmy-codes/cat-adventures-python/assets/70635859/f5810840-3399-48aa-8944-384850e2f6d9)


3. Named my app in the App name box

4. Chose a region from the dropdown menu (and accidentally chose the United States for this one)

5. Clicked Create app


![heroku_deployment_step_2-5](https://github.com/emmy-codes/cat-adventures-python/assets/70635859/be20a348-416c-446c-8876-2a33ccb883bb)

Once the app was made I went to my dashboard where I can see my apps.

6. Clicked on the relevant app

![deployment-step-6](https://github.com/emmy-codes/coscalendar/assets/70635859/44d2a777-fc16-43ea-8b73-4a731a7378be)

7. Under the Deploy tab, I connected my Github repo to the Deployment method

![deploy-step-7](https://github.com/emmy-codes/coscalendar/assets/70635859/479a87da-628b-44f9-80b9-8a192d007fdf)

8. Adding buildpacks: Click on the Add buildpack button, select nodejs from the supported buildpacks, and Add Buildpack. This will allow Heroku to deploy successfully.

![deploy-step-8](https://github.com/emmy-codes/coscalendar/assets/70635859/a2277585-e160-41e4-906c-fb0fca3e25f1)

9. Scrolling down the page, I chose which branch to deploy, and then manually deployed my project, but it's possible to set up automatic deployments if preferred.

![deploy-step-8](https://github.com/emmy-codes/coscalendar/assets/70635859/97582426-0d13-4c14-9570-0617ecf5efcb)

### Local Development


#### How to Fork


Should you wish to fork this repo, here is a guide on how to do that:


Firstly, go to https://github.com/emmy-codes/geekhaven-blog/


1. On the main repo page, click the Fork button near the top right corner
![fork_step_1](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/2ac24fa9-0403-49f5-92b1-f4e5160f5109)


2. On the create a fork page, check the Owner of the repo is set to the GitHub org you wish to use, and change the name of the repo if you wish.

	2a: Add a description if you want to.

3. Check the box here if you want to make a copy of the main branch or multiple branches (main is selected by default).

4. Create the fork. The screenshot is from an old project as I cannot fork my project due to not having any organizations connected to my account, and presumably because this repo is already a fork of the CI template.
 
 ![rsz_fork__steps](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/aa4dae7c-807d-4108-bb5b-f24c7010514b)


#### How to Clone
  

For cloning the repo you will need:

* The [repo](https://github.com/emmy-codes/geekhaven-blog) open
 

* Your IDE of choice

1. On the repo page, click on the green "Code" button

2. On the dropdown from the Code button, click on your chosen key (pictured here is SSH)

3. Click the copy button (shown as two squares on top of one another) 

![ssh_code_copy_gh](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/ea6bcd4d-40d1-4250-b3ea-eb3e6b804efd)


4. Open your IDE of choice and open the Terminal, or in my case, open the Terminal on your computer (I run Linux on Windows so may be slightly different for Mac/Windows users)

5. Check that you're in the right folder (shown here by checking my current folder by using the input: ls

6. Change as needed to reach your desired folder.

7. Type (without quotation marks): "git clone" followed by your copied link from GitHub.
  
  ![git_clone_on_ubuntu](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/bfa89623-5fc5-4c04-a526-f3dffabdd964)

8. You can now access the repo in your IDE if cloned directly there, or by typing (without quotation marks) "code ." in your Terminal.

9. Enjoy! 

- - -
  

## Testing

Please refer to the TESTING.md file for manual testing and screenshots.

## Bug Fixes

1. Once I added the functionality to correctly track the monthly calendar days/weeks, the render was a huge mess!

![calendar_visual_bug1](https://github.com/emmy-codes/CosCalendar-cosplay-planning-page/assets/70635859/14866dc4-0543-4fdb-aa84-11ca54cb411c)

I first inspected the calendar grid in Chrome dev tools and could see that it was rendering the dates I had just coded, so I added a console.log using the "day" parameter. This gave me a full log of the dates that I expected for this month, so at least the functionality was working but the render wasn't.

![calendar_visual_bug2](https://github.com/emmy-codes/CosCalendar-cosplay-planning-page/assets/70635859/b6c10991-10f4-47d3-9029-fd7088fdc904)

This looked like it was correct since the dates themselves were correctly rendering. It wasn't until 3 days later when I was discussing the problem with my partner and he asked to see the log, then pointed out that it's literally rendering from the date, the time, GMT timezone etc, all trying to squeeze into the tiny grid block for each date. All that text when I just wanted Day, Month, Date!

So back to the documentation, I went looking to complete my logic for accessing the right content. I looked over my date-fn functions and noticed I had endOfMonth, but I should need startOfMonth to get the beginning of the calendar, right? Currently my calendar was rendering from today's date and onwards.

After further research through the date-fn documentation I came across mention of Unicode Tokens and discovered that DD refers to the day of the year, whereas dd refers to the day of the month, which is why in the case of my calendar it's important to use lowercase letters. [source](https://github.com/date-fns/date-fns/blob/main/docs/unicodeTokens.md)

Seeing as the component is pre-built I had to do some research into its contents. I'd never come across the <time> tag before so upon reading up on [MDN documents](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) I learned that the dateTime attribute allows us to set specific day/time values inside of the tag, to me that seems somewhat like how we add attributes to forms!

I decided to pass my formatDates variable to both the dateTime attribute, and the render inside the time tag. Viola! I was no longer rendering a huge mess of data and my calendar was readable! The wrong month, but readable. I'm still not entirely certain why we provide the dateTime value inside if it's also being rendered within the tag itsself, but at least it was working. From what I've read, it is for the benefit of the machines and for search engines, but I'll leave it at that for now.

2. Tailwind CSS vs global CSS variables: I wanted to use global variables for readability, and ease of updating in the future. It worked well to have the variables under :root, and when I changed the background of a div it worked, but trying to use the Tailwind CSS component text-<colour>-<weight> with a variable didn't do anything.

Doing research on the matter, I discovered that, due to the way Tailwind processes the classes, and with having multiple classes with seimilar names (ie text-lg is for the size and text-black is for the colour) it struggles to define which is which on a global variable. If I, for example, tried to have a hexcode under the variable name --textColor and then used the className on my HTML for trying to style the text: text-[var(--textColor)] it doesn't know if that's a CSS for text COLOUR or SIZE, and thus does nothing.

There was [some documentation](https://tailwindcss.com/docs/adding-custom-styles#resolving-ambiguities) on workarounds but it would have been more work to maintain and less user friendly if someone else or future me should look at the code.

Solution:  I dug my way through to the [TailwindCSS documentation](https://tailwindcss.com/docs/customizing-colors) which shows how to use themes which act a lot like global variables, which seemed like the least invasive and easiest solution. There is an issue with this in that using cusom colours completely overrides all of the Tailwind CSS colours, but at the beginning of my project this is a workable solution. Once my colour palette has been tested on the site I may stick to the out of the box colours from Tailwind.

![bug2-tailwind-global-variables](https://github.com/emmy-codes/coscalendar/assets/70635859/9c2e01b3-e739-4e03-b14f-6610259eb0ee)

- - -

## Credits



### Code Used

Tailwind UI Components (Bootstrap replacement)

### Content

Currently no large detail of content needed.  

### Acknowledgments

I would like to acknowledge the following people:

As always, my partner for helping me
  

