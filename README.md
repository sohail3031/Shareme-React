# Shareme-React

## About 
> **ShareMe** is a photo sharing application created using **"React"**.
> Users can share photos in ***JPG, SVG, PNG, GIF & TIFF*** format less than 20 MB.
> They can save publish images, save, delete and comment on them.

## Deployed Application Link
The deployed application is hosted on netlify and you can find it here:
https://deluxe-moxie-78ddb0.netlify.app

## Run locally
> To run locally, open two terminals one for front-end and one for back-end.
> Before running the following commands, in each folder run **npm install** to install the dependencies.
> In the front-end folder, type **npm start**.
> In the back-end folder, type **npm run dev** to open sanity studio.

## Missing files
A **.env** file is missing in the **"sanity_frontend"** folder. Create it in the root folder.
After creating it, add the following three environment variables:
1) REACT_APP_GOOGLE_API_TOKEN -> To get this token, you have to create a project in **"https://console.cloud.google.com/"**. After creating the project, navigate to ***APIs & Services -> OAuth 2.0 Client IDs***, copy the **"Client ID"**.
2) REACT_APP_SANITY_PROJECT_ID -> To get the sanity project id, first create a project in sanity studio, then navigate to ***Project -> PROJECT ID***. Again "**Sanity manage"** is the command to open the sanity studio.
3) REACT_APP_SANITY_TOKEN -> To get this token, in sanity studio, naviagte to ***API -> Tokens -> click on "Add API token" and add a token***. The permissions for this token should be **EDITOR**. Again "**Sanity manage"** is the command to open the sanity studio.

## Missing Permissions
After following the above steps, you might face some starnge errors. It's because you don't have right permissions. To get the right permissions, follow the below steps:
1) In **"https://console.cloud.google.com/"** under ***APIs & Services -> OAuth 2.0 Client IDs***, click on the project name and add the url's ***"http://localhost"*** and ***"http://localhost:3000"*** in **Authorized JavaScript origins**. You should add those two in two separate url fields.
2) In the **"Sanity Studio"**, under ***API -> CORS origins -> click on "Add CORS Origin"*** and add the url ***"http://localhost:3000"***.
