# Profile Creation Progress Widget

The Profile Creation Progress Widget is a React-based component designed to display and manage the progress of profile creation tasks.
It provides an `intuitive interface` for managing tasks within different areas, marking them as complete, and visualizing the overall progress.

![img.png](img.png)

# Features
- Displays the progress of profile creation.
- Organizes tasks into collapsible groups.
- Allows users to mark tasks as done or undone.
- Calculates progress based on the sum of the values of checked tasks.
- Highlights completed task groups in green.

# Technologies Used
- ReactJs
- Typescript
- Sass
 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install dependencies

`npm install`

## Available Scripts

In the project directory, start the development server:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Approach
In developing the Profile Creation Progress Widget, the structure involves the following:

### Component Hierarchy
- Created a component hierarchy that includes `Accordion`, `Checkbox`, and `ProgressBar` as `reusable` components.
- The `UserProfileCreationProgressWidget` component, which serves as the main component for the application.
  - This component utilizes the reusable components mentioned earlier and includes utility functions to calculate and manage the app's logic.
  - It manages the state of task groups, allows users to expand/collapse groups, mark tasks as complete, and calculates the overall progress.
- This modular structure allows for `easy maintenance` and future scalability.

### Data Fetching
- Implemented data fetching using a `custom hook` called `useFetchGroupTasksData`. This hook is responsible for fetching and managing profile creation task data from an external source.

### Styling
- For styling, used the `BEM (Block Element Modifier)` methodology, ensuring clear and maintainable class names. For more information see this [documentation](https://en.bem.info/methodology/quick-start/#introduction)
- Utilized `SCSS modules` for styling, which provide a modular and organized way to manage styles for each component separately.
- Created a `mixin` for fonts to maintain consistency in `typography` across the application.

### TypeScript
- TypeScript is integrated into the project to provide `type safety` and enhance code quality.
- This ensures that the code is robust and less prone to `runtime errors`.

### Testing
- Wrote `unit tests` for each component to ensure their `correctness` and `reliability`.
- These tests are part of `continuous integration` process to catch issues early in development.

### Commit Convention
- To ensure readability and consistency in `commit messages`, the conventional commit format is used for writing commit messages that are `clear, concise, and informative`. 
- Each commit message should adhere to the following pattern:

```
<type>(<scope>): <description>

[optional body]

[optional footer]

```

Where:

- `<type>` specifies the type of the commit (e.g., feat, fix, chore, docs, style).
- `<scope>` is optional and indicates the scope of the commit (e.g., component name, module).
- `<description>` is a short, concise description of the change.
- `[optional body]` provides additional context or details about the change.
- `[optional footer]` includes any relevant issue or breaking change references.

This convention helps in tracking and understanding the `purpose` of each commit.
See the section about [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) for more information.

## Live Demo

The application is deployed on Netlify and can be accessed here:
https://lodgify-fe-technical-challenge.netlify.app/