# Assignment 04

# Web APIs: Personal Blog

## Description

The goal of this assignment was to create a landing page for my blog with a form to create blog entries and a dynamically add them to a blog page, displaying username, blog entry content and title of entry for each submission. The assignment also required buttons on both pages to toggle between light and dark mode.

I did this by:

- Creating a landing page with a header, subheader and button to toggle between light and dark mode. I used JavaScript to add an EventListener to the button that changed CSS styling to the page when clicked.
- Creating a submission form on the landing page that required users to complete the form or otherwise be alerted by the window. I used JavaScript to add an FormHandler which, upon submission, triggered a function to store the data in an object. The objects are pushed into an empty array, stringified then stored in local storage for later retrieval. The user is then automatically directed to the blog page once the form is submitted.
- Creating a blog entries page with a heading and button to toggle between light and dark mode. I used JavaScript to immediately retrieve the stored arrays of objects from local storage and traverse the array, dynamically creating HTML elements for each array elements and appending said elements to the container divs. I ensured to render blog entries on the page without replacing old ones.
- Creating a footer with my name and link to my portfolio.

## User Story

```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Acceptance Criteria

```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## Screenshots

![GIF of Assignment 4](./assets/Assignment%204%20GIF.gif)

## URLs

[GitHub repository URL](https://github.com/DalyaKablawi/my-blog)

[Deployed application URL](https://dalyakablawi.github.io/my-blog/)
