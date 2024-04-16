## Getting Started - Backend

**Backend of this project bootstrapped with `ExpressJS`**

First, download backend folder and install dependencies

```bash
yarn
```

Second, run the development server (make sure port 3000 is free)

```bash
npm run start:dev
```

## Getting Started - Frontend

**Frontend of this project bootstrapped with `NextJS`**

First, download frontend folder and install dependencies

```bash
npm i
```

Second, run the development server (make sure port 3001 is free)

```bash
npm run dev
```

## Documentation

### Project Structure Overview

In this section, we'll delve into the architecture of our project, focusing on the organization of various directories and their specific roles. Understanding this structure will facilitate both navigation and development within the project.

#### common

The common directory serves as a crucial component of our project, housing the small, reusable components that form the building blocks of larger components throughout the application. This directory is often where you'll find our UI kit, which includes a collection of UI elements designed for consistency and reusability across the project.

#### components

The components directory is a foundational aspect of our project's structure, playing a pivotal role in organizing the React components that define the behavior and presentation of our application. Unlike the common directory, which focuses on smaller, reusable UI elements, the components directory is home to the larger, more complex components that constitute significant sections of our pages or even entire pages themselves.

#### hooks

This directory contains custom hooks that we've created to encapsulate and reuse logic across different components in our application.

#### layouts

The layouts directory is a key structural element within our project, focusing on the overall page structures that wrap around our content. Layout components are used to define common page structures that are shared across multiple pages, such as headers, footers, and sidebars.

#### models

The models directory plays a crucial role in our application's architecture, specifically dedicated to defining functions that interact with the server for data retrieval or submission. This directory acts as a centralized hub for all server-related logic, encapsulating the API calls and any related data manipulation. The purpose of organizing these functions within the models directory is to abstract the complexities of data fetching and updating away from the UI components,

For instance, within the models directory, we might have a sub-directory named posts for all functions related to blog posts. This could include fetching a list of posts, submitting a new post, and other related functionalities:

```typescript
// In models/posts/index.ts

export const fetchPostsList = async () => {
  const url = "/posts";

  const response = await api.get<FetchPostsListResponse>(url);

  return response.data;
};
```

```typescript
// In models/posts/types.d.ts

 export type FetchPostsListResponse = {
   data: Post[];
 }
};
```

#### providers

In the providers directory, we set up things that our whole app can use anywhere. It's like giving every page and component access to some common tools without having to pass them around manually.

#### utils

The utils (utilities) directory is where we keep simple functions that help us do common tasks throughout our project. Think of it as a toolbox where each tool makes a specific job easier without being tied to a particular part of the app.

### validations

In the validations directory, we store functions that check if the information users enter into forms is correct. These functions help make sure that the data we collect or process follows the rules we set, like making sure a field isn't left empty or that an email address looks like it should.

Here’s a basic example of how we structure these functions:

```typescript
export const requiredValidation = (value: string, message?: string) => {
  const requiredRules = Joi.string()
    .required()
    .messages({
      "string.empty": message ?? "پرکردن این فیلد الزامیست",
      "string.required": message ?? "پرکردن این فیلد الزامیست",
    });

  const validation = requiredRules.validate(value);

  if (!!validation?.error) {
    return validation?.error?.message;
  }
};
```

and finally we use these functions like bellow:

```jsx
<Formik
  validateOnBlur={false}
  validateOnChange={false}
  initialValues={{
    title: "",
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
>
  {({ errors }) => (
    <Form>
      <Field
        as={Input}
        name="title"
        label="عنوان"
        error={errors?.title}
        validate={requiredValidation}
      />
      <Button type="submit" aria-label="ایجاد پست">
        ایجاد پست
      </Button>
    </Form>
  )}
</Formik>
```

### Styling

In this project, we use Tailwind CSS for styling to keep our design consistent and to speed up the development process. Tailwind lets us use utility classes to style our components directly within the markup, making it easier to see the design directly in the code. Here's how we approach styling:

#### 1. Avoiding Duplicate Styles

We aim to minimize repetition by grouping common styles. Instead of writing the same style rules over and over, we gather them in one place: the app/globals.scss file. Here, we can use Tailwind's @apply directive to create custom utility classes. This method lets us maintain a cleaner codebase and ensures that our styling is consistent across the project. For example:

```scss
@layer utilities {
  body {
    @apply bg-gray-100 text-black; // Setting default body background and text color
  }

  a:hover {
    @apply text-primary; // Custom hover state for all links
  }

  p,
  span,
  a {
    @apply text-xs sm:text-sm; // Responsive text size for basic elements
  }

  .box {
    @apply bg-white border border-gray-300 p-3.5 sm:p-5 rounded-lg; // A custom box style
  }

  .skeleton {
    @apply bg-gray-300 animate-pulse; // Style for loading placeholders
  }
}
```

By using the @layer utilities directive, we ensure these styles are considered utilities by Tailwind and can be overridden by other utility classes in the markup if needed. This approach helps us keep our base styles organized and reusable.

#### 2. Unique Component Styles

For unique styles that don't fit well into our global utilities file — perhaps because they are too specific or only relevant to a single component — we apply Tailwind classes directly within the component's markup.
