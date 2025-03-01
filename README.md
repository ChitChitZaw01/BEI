# BrilliantEdu

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# I updated note
*********** Brilliant-Edu Project 
1. Install Node.js and npm

```bash
node -v
npm -v
```
- When not run 'npm command', we can check in Windows PowerShell (Admin) or Command Prompt (Admin) by typing this command 'Get-ExecutionPolicy
'. If 'Restricted ', type 'Set-ExecutionPolicy RemoteSigned
' and type 'y'.
2. Install Angular CLI
npm install -g @angular/cli
ng version
3. Create a New Angular Project
ng new my-angular-app
4. Navigate to the Project Directory
cd Brilliant-Edu
5. Run the Angular Development Server
ng serve
6. Start Coding
The default project will have a basic structure. You can start editing the components, services, and other files within the src/app folder.

## Git work flow
1. Navigate to your project folder:
cd path/to/your/project
2. Initialize the Git repository:
git init
3. Check the status of your project (to see untracked files):
git status
4. Add files to the staging area:
git add .
5. Commit the changes:
git commit -m "Initial commit"

****************Store my angular project on GitHub
1. Create a GitHub Repository
2. Initialize Git in Your Angular Project
1- Navigate to your Angular project folder in the terminal:
cd path/to/your/angular-project
2- Initialize a Git repository:
git init
3- Add GitHub Remote
git remote add origin https://github.com/ChitChitZaw01/Brilliant-Edu
4. Add Files to Git
git status
git add .
git commit -m "Initial commit for Angular project"
5. Push Your Code to GitHub
git push -u origin master
If you're using the newer naming convention (and have created a main branch instead of master), push to main:
git push -u origin main
6. Verify on GitHub
After pushing your code, go to your GitHub repository URL. You should now see all your Angular project files there!
7. Set Up .gitignore for Angular Projects
1-Create a .gitignore file in the root of your project folder.
2-Add the following typical Angular .gitignore contents:
# Node.js dependencies
node_modules/

## Logs
npm-debug.log
yarn-debug.log
yarn-error.log

## IDE files
.idea/
.vscode/

## Build output
dist/

3-Stage and commit the .gitignore:
git add .gitignore
git commit -m "Add .gitignore"
git push
8. Further Steps
Keep pushing your changes: Every time you make changes to your Angular project, you can continue adding, committing, and pushing them:
git add .
git commit -m "Description of the changes"
git push

To create new txt file
New-Item myfile.txt -ItemType File

For index -----"index": "src/app/brilliant-edu/brilliant-edu.component.html",
            "index": "src/index.html",

## For hosting the project
1. Build the Angular Project 
ng build --configuration production
Output location: D:\Projects\Brilliant-Edu\dist\brilliant-edu
2.  Install angular-cli-ghpages
Option 1:
ng add angular-cli-ghpages
Option 2:
npm install -g angular-cli-ghpages
3. Deploy your project:
ng deploy --base-href=/your-repo-name/        ***If your angular.json does not include like this ' "baseHref": "/Brilliant-Edu/", ', firstly you should add that.

## To change dist dir

```bash
cd dist/brilliant-edu/
```

## To force ignore file

```bash
git add -f dist/brilliant-edu/CNAME
```
## For custom domanin hosting
-From the dashboard, click on "My Products" in the top-right corner
-Find your domain in the list and click "DNS" (or "Manage DNS") next to the domain you want to configure.
-Scroll down to the DNS Records section.
-Click on the "Add" button to create a new record.