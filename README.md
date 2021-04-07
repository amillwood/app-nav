# app-nav
This repo contains an innovative way of app navigation for apps that may have many pages.  When using tabs, one is limited to about 4-5 tabs before things get too busy.  This method allows for many pages and provides a great user experience.

The home page contains a slider with cards corresponding to each page.  The card allows the developer to add a short description to each page, offering the user more insight into what each page contains before clicking on it (opposed to a tab method where the icons can be non-descriptive).  

The home page is also presented as a modal when clicking the "home" button when on any page other than the home page.  This allows quick access to the app's pages and keeps the user's content on the current page.  An additional benefit to that is less calls to a third party API (such as google maps) if the user simply pulls up the home page as a modal - as opposed to navigating away from the page completely.

To run, clone the repo, npm install the dependencies, and use the "ionic serve" command
