## Project running steps

- open a terminal window inside `simple-mortgage` folder
- `npm install -g @angular/cli` command via terminal
- `npm install` command via terminal
- for each user profile we have different commands for running
  - `ng serve --configuration=steve` for Steve broker as per example
  - `ng serve --configuration=william` for William
  - `ng serve --configuration=emma` for Emma
  - `ng serve` will default to Steve
- navigate to `http://localhost:4200/` (or whatever port the CLI may point to if 4200 is in use)
- the app will automatically reload if you change any of the source files

## Notable features

- customisation scalable for multiple profiles which include (user data, logo, background, styles,fonts)
- 3 flows which were mentioned in the specs (with field differences)
- field validation & input variety (validation is blocking the journey advance but that can be easily removed)
- on submit the form data will be outputted to the console

## Improvement list

- adding a small backend (node + firebase/json save) in order to retrieve/write data as well
- view page with update/remove options
- adding state management

## Technologies used

- [Angular framework](https://angular.io/)
- [Angular CLI](https://github.com/angular/angular-cli)
- [Angular Material](https://material.angular.io/)
- [Sass](https://sass-lang.com/)


# Thank you

