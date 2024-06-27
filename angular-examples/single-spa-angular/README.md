
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
   
serve
so now the application will be served on
Port 4200
and we can continue with the creation of
the second angular application again
using the same method

let's make some changes within the
index.egs
so first we need to enable Zone JS since
it is an angular application
and here we can remove the template
that's a default application which is
defined within the import map
and here
we can give our angular application name
so since the application is running on
4200 we can give that and we can give
the main.js as well
so the same thing we can copy and
give it as angular 2 and the port number
four to zero
so now we are ready within the
indus.e.js
now we need to create a mapping in the
layout.html so here again I am removing
the
default one
and I am giving the angular 1
application as the default
so here I am giving the
mod as hash
so that we will make use of the hash
location
we can also add the
route for our other application that's
the second application
and I have given a test angular 2 for
the route and given the name of the
application and by default it will be
the angular one which will be loaded so
once we do this we can start our main
application
so we can use the npm start command
to serve the application on Port 9000.
so our application is up and running so
by default the angular app one will be
loaded and I have made some slight
modification in the HTML so that when we
click on this particular button it will
be redirected to the second application
so I'm going to click it so now you can
see that the second angular application
has been loaded
and you can see two main dot JS files
have been downloaded
now again when I click on the app to it
will navigate back to the app font and
you can see the
route location changing here now let's
Standalone Angular 15 with Single-spa
get to the main point that is we will be
converting the second angular
application into a standalone
application so how can we do that so we
can go to the angular 2 application
and within the main single Spa dot TS
we need to make some changes so by
default you can see that the single Spa
angular helper
it accepts or it makes use of the
platform browser dynamic which needs an
app module but in the case of Standalone
applications
we won't have any modules so first what
we need to do is we need to go to our
app component
and we need to make the
component as a standalone
and then we need to add the Imports
which are needed by the component so
since we are making use of the NG switch
here
we can import the common module
or even we can import the necessary
directives alone but in this case I am
making use of the cone module itself
and here we have the router Outlet also
so we can import the
router Outlet directive which is also
Standalone so now we no longer need the
app module so we can remove that
and
now we can go to our
single Spa Main single Spar dot TS you
can remove the import
and here we can replace the
platform browser Dynamic with
a function called bootstrap application
where we can provide the app component
as the parameter
so
we can import that as of now let's
comment these statements
now the bootstrap application will
accept a second parameter that is the
providers
so here we can Define the environment
providers which are negated
so this is a array
so first we need to import this
particular
providers so these are a set of
providers which are imported by the
single spy itself so first we can give
that
next we will be needing our routing so
we can copy
this provider
you can import
the references and next we can
copy the path
so in angular 15 there is a
new method called provide router
so we inside that we can provide the
routes
so that is a
array
so once we do that
we no longer need our
app routing module so we can safely
remove that as well
so
now
let's see whether our application
actually works
let us refresh our application
so this is the angular 1 application now
when we click on the angular 2
application
you can see that the angular 2
application is also loading and it is
working as previously so let us make
sure that the updates have reached
within our
application
so we can search for our
single Spa angular so here you can see
that within the single Square angular
we are making use of the new
bootstrap application and all the routes
are available here itself so
ideally we have converted our second
angular application into a application
consuming only Standalone components so
this is how we can integrate Standalone
components in angular within a single
Spa application hope you found this
video useful see you soon thank you
