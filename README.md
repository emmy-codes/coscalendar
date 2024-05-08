# Cosplay Convention & Planning App
This is my 5th and final project at Code Institute, implementing all skills learned so far and focusing on an output using React on the frontend and Django REST API on the backend.

I am planning a convention locating and cosplay planning page for cosplayers, who can search for conventions or add ones that they know of. They can then attach a cosplay plan to that convention and on their profile page will create a checklist of things they need to complete on their cosplay before the deadline. Optional checkins week by week allows users to upload their progress.

All users can search and view conventions, and the connected cosplays to that convention.

----------

## CONTENTS

* [User Stories](#user-stories)

* [Design](#design)
	* [Accessibility](#accessibility)
  * [Imagery](#imagery)
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
|              | As a User, I wish to search conventions so I can see which events are happening |
|              | As a User, I wish to *** so I can *** |
|              | As a User, I wish to *** so I can *** |
|              | As a User, I wish to *** so I can *** |
|              | As a User, I wish to *** so I can *** |
|              | As a User, I wish to browse the current list of user-added conventions so I can see if my desired convention already exists |
| Unauthenticated User | As an Unauthenticated User, I wish to register an account by clicking Register so I can join the community | 
|              | As an Unauthenticated User, I wish to click login so I can access certain features  | 
|              | As an Unauthenticated User, I wish to *** so I can *** | 
| Authenticated User | As an Authenticated User I wish to Sign out of the website so that my profile can remain safe when I want it to | 
|              | As an Authenticated User, I wish to make a cosplay to-do list so I can plan and mark off steps to complete my cosplay   |
|              |  As an Authenticated User, I wish to add notes to my cosplay plans so I can put down thoughts outside of the to-do checklist  |
|              | As an Authenticated User, I wish to add a convention so I can enable other users to find it and/or add my own cosplay plans to the convention |
|              | As an Authenticated User, I wish to save a convention to my profile so I can keep track of events I'm interested in  |  
|              | As an Authenticated User, I wish to mark tasks on my to-do list as complete, so I can track my progress   |
|              |    |
|   Site Admin  | As a Site Admin I wish to *** so I can ***   | 
|              | As a Site Admin I wish to *** so I can ***   |
|              | As a Site Admin I wish to *** so I can ***  |
|              | As a Site Admin I wish to *** so I can ***  |
  

- - -

## Design


### Accessibility



### Imagery


### Wireframes
  

## Features

*(complete this thought later) when users choose to add a convention, add the same functionality for searching so if they type "comiccon" for example, it will show up any cons with that name. This way we can minmize duplicate conventions

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

- - -
  

## Iteration over starting code


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

![heroku_deployment_step_6](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/e6648e64-446c-4832-929f-3f7477c236b6)


7-8. From here, I went to settings, then to the Config Vars. I added the key of DISABLE_COLLECTSTATIC and gave it a value of 1.

![deployment_step_7-8](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/5e1a7d4f-3a96-42b5-bda3-464fbf8cd907)


9. I then had to prepare my code for deployment. Back in VSCode I installed the following gunicorn version and added it to my requirements.txt file:

![deployment step 9](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/55bf05d5-8451-4d27-95ef-f97b50d5b65b)

10. After that, I created a Procfile in the root directory and added my blogpage file directory to the Gunicorn WSGI:

![deployment_step_10](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/05cd3c9a-f252-4d98-a6c5-9400a6338c4b)

11. To keep my files safe when deployed, in my settings I changed DEBUG to False to prevent excessive information from being shown when errors occurred which could potentially give people unwanted access. I then updated my ALLOWED_HOSTS list to include my Heroku deployment links.
12. Back on Heroku I switched to the Deployment tab and connected Github as the Deployment method. I searched my repository name and connected it.

![deployment_step_12](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/aba54a9b-9436-4ad9-9e1c-6985be01cdce)

13. Scrolling down the page, I chose to manually deploy my project as needed, but it's possible to set up automatic deployments if preferred.
  
![heroku_deployment_step_13](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/fed29cb2-9af8-4d0d-a827-ef493390b716)

  

### Local Development


#### How to Fork


Should you wish to fork this repo, here is a guide on how to do that:


Firstly, go to https://github.com/emmy-codes/geekhaven-blog/


1. On the main repo page, click the Fork button near the top right corner
![fork_step_1](https://github.com/emmy-codes/geekhaven-blog/assets/70635859/2ac24fa9-0403-49f5-92b1-f4e5160f5109)


2. On the create a fork page, check the Owner of the repo is set to the GitHub org you wish to use, and change the name of the repo if you wish.

	2a: Add a description if you want to.

3. Check the box here if you want to make a copy of the main branch or multiple branches (main is selected by default).

4. Create the fork. The screenshot is from an old project as I cannot fork my Python project due to not having any organizations connected to my account, and presumably because this repo is already a fork of the CI template.
 
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



## Bug Fixes


- - -

## Credits
  

### Code Used

### Content

I have used [OpenAI](https://chat.openai.com/) to create most of the blog text content for me so I can focus my time on practising with the code.
  

### Acknowledgments

I would like to acknowledge the following people:
  

