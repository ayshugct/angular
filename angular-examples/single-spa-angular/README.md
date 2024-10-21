
This lets you have multiple Angular microfrontends coexists within the same page

**Prerequisites**

Install VS Code and Node js

**Getting Started**

Setting up Angular 18 with Single-spa Application using both Standalone and non-stanalone components

1. Let's create a single Spa root-config using the below:

npx create-single-spa --moduleType root-config

It will ask for the Directory for new project (e.g., spa-main). I am creating the root config using npm and typescript with Single-spa layout engine
and the organization name I am giving as app.

So the root config has been created and all the dependencies have been installed. You can see the source folder which consists of the root config.

2. Let's go ahead and create two angular applications using the below:
   
   ng new main --standalone=false
   
   ng new navbar
   
3. We need to install the single-spa and custom-webpacks using below in both the applications:

   ng add single-spa-angular
   
   npm install @angular-builders/custom-webpack

4. You can see that there is no environments folder here but the single Spa template which is created it actually consists of a reference to the environment so we need to create the environment using the cli command:
   
   ng g environments

The environments have been added. So here within the folder we can just add the key production and set it as true for the production file and for the development we can make it as false 

6. To get single-spa working, you'll need to manually modify a few files.

Add providers: [{ provide: APP_BASE_HREF, useValue: '/' }] to app-routing.module.ts.
Add { path: '**', component: EmptyRouteComponent } to your app-routing.module.ts routes. The EmptyRouteComponent is part of the single-spa-angular schematics. Add a declaration for EmptyRouteComponent in app.module.ts. 

7. We can run the applications using the start command:
   npm start

8. Register the application

Return to the root-config and add your application to the import map in src/index.ejs

The application's package.json name field is recommended to Register as a single-spa application if not using single-spa Layout Engine

Open src/microfrontend-layout.html

For the tag single-spa-router, add mode as hash.

Remove the code for registering @single-spa/welcome as an application
Uncomment the sample registerApplication code and update it with the module name of your application
if using single-spa Layout Engine

Remove the existing <application name="@single-spa/welcome"></application> element
Add your own <application name=""></application> element using the name the module name used in the import map from the previous step

e.g.; 
   <nav>
      <application name="@app/navbar"></application>
    </nav>
    <redirect from="/" to="main"></redirect>
    <route default>
      <application name="@app/main"></application>
    </route>