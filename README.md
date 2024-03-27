# Tags Finder

The task involves implementing a application with a single view. The application
utilizes an available API endpoint to display a paginated list of tags. In the
interface, users can filter and sort tags using the fields at the top of the
view. The list of tags is presented in a table, showing the name and posts count
of each tag. Pagination allows tags to be viewed in the number per page selected
by the user, with users navigating between pages using "next" and "previous"
arrows. Handling API errors is crucial - in case of an erroneous response, users
are notified of the issue.

<img src="/public/Screenshot.png"  />

## Technical Overview

The task was completed using React and TypeScript technologies along with
various libraries for state management, user interface styling and component
presentation. The application communicates with an external API to fetch and
display data.

The final application consists of two main parts: presentation components and
state management logic.

For the graphical development the Material-UI library was utilized, providing
ready-to-use UI components.

In terms of state management, the Zustand library was used, allowing for simple
and efficient state management. States were implemented for loading, downloading
and filtering of data.

A Storybook was prepared to present the isolated components of the application.

Additionally, the following libraries were used:

- React Loader Spinner: for displaying loading indicators during data fetching.
- React Toastify: for displaying toast messages of various types of operations
  in the user interface.

  The application communicates with an external API to fetch a paginated list of
  tags, filtering and sorting the results.
