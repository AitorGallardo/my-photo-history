# MyPhotoHistory

CRUD application to handle images with labels, description, dates.

<!-- - [Live Site](https://multi-step-form-gmaitor.vercel.app/) -->
<!-- - [Live Site](https://multi-step-form-gmaitor.vercel.app/) -->
<!-- - [Live Site](https://multi-step-form-gmaitor.vercel.app/) -->
<!-- - [Live Site](https://multi-step-form-gmaitor.vercel.app/) -->


### Built with

- [Tailwind](https://tailwindcss.com/) - CSS Framework
- [Flowbite](https://flowbite.com/) - UI Library built with the utility classes from Tailwind CSS
- [Angular Material](https://sonner.emilkowal.ski/) - UI Component Library
- [Angular](https://angular.io/) - Web Framework
- [Firebase Authentication](https://firebase.google.com/products/auth) - Multi-platform sign-in
- [Firestore Database](https://firebase.google.com/products/firestore) - NoSQL database
- [Cloudinary](https://cloudinary.com/) - Image hosting

### Issues

- Default Angular Material theme has some style conflicts with Tailwind. Cases:
  - Elements such as _h1,h2,h3,a..._ are not getting Tailwind styles.
  - Inputs have a blue border on focus

### Solutions

- To solve _h1,h2,h3,a_ are not getting Tailwind styles, I added the following to the `tailwind.config.js` file: _important: true_. This makes Tailwind prevail over default Angular Material theme.

- To solve the blue border on focus, I added **@layer** directive to add styles to Tailwind’s **base**, **components**, and **utilities** layers in `styles.css`.
  This overwrite or add styles. In this case i overwritted default styes for inputs and added a class that achieves the same in case that the former solution doesn't work.

`tailwind.config.js`

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // corePlugins: {
  //   preflight: false,
  // },
  // prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
    './projects/**/*.{html,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
```

`styles.css`

```css
@import "tailwindcss/base";
@layer base {
  input[type="text"]:focus,
  [type="email"]:focus,
  [type="url"]:focus,
  [type="password"]:focus,
  [type="number"]:focus,
  [type="date"]:focus,
  [type="datetime-local"]:focus,
  [type="month"]:focus,
  [type="search"]:focus,
  [type="tel"]:focus,
  [type="time"]:focus,
  [type="week"]:focus,
  [multiple]:focus,
  textarea:focus,
  select:focus {
    box-shadow: none;
  }
}
@import "tailwindcss/components";
@layer components {
  .tw-input:focus {
    box-shadow: none;
  }
}
@import "tailwindcss/utilities";
```
