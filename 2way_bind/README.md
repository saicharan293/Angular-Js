# 2wayBind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Directives
## Structural directives:
    DOM manipulation

        ngIf
                ngIf,else
                ngIf,then,else
        ngFor => variables: index, first, last, even, odd
                *ngFor='let ele of arr;index as i'
        ngSwitch
                ngSwitch
                *ngSwitchCase
                *ngSwitchDefault

## Attribute directives:
    Manipulate appearance or behavior of element, component

        ngClass
        ngStyle => styling directive
        ngModel => two way binding directive

## Component directives

# Pipes
        to transform data before displaying it
                    (pipe)
        i/p data -----------> o/p form

        =>expression|pipe-name[:parameters]

        pipes
        -----
        uppercase => total capital letters
        titlecase => Camel case letters
        lowercase
        currency => default: dollars
        currency:'INR' => Indian rupees
        json
        date
        date: 'dd/MM/yyyy'
        percent
        slice:start:end+1
        
## Custom PIPE
        ng g p -pipe-name

## Parent to child communication
        @input()

        app.component.ts
                Parenttochild:string='parent to child';
        header.component.ts
                @Input() child:string:string='';
        header.component.html
                {{child}}
        app.component.html
                <app-header [child]='Parenttochild'>
                
## Child to Parent communication
        @output()

        
        
