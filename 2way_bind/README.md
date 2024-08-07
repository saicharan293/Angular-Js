# 2wayBind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

        header.component.ts
                @Output() custEvent=new EventEmitter();
                messageToParent:string='Passed to parent';
                passToParent(){
                        this.custEvent.emit(this.messageToParent)
                }
        
        header.component.html
                <button (click)="passToParent()">Pass to Parent</button>
        app.component.html              
                <h3>{{cdata}}</h3>
                <app-header (custEvent)="cdata=$event"></app-header>

## updating from child to parent
        header.component.ts
                updateMessage(e:any){
                        this.messageToParent=e.target.value;
                }
        header.component.html
                <input type="text" (input)="updateMessage($event)">

## Using View child
        header.component.ts
                childdata:string='pass this to parent component via view child';
                passToParent(){
                        return this.childdata;
                }

        app.component.ts
                @ViewChild(HeaderComponent)
                header: HeaderComponent = new HeaderComponent; // Added type annotation

                test() {
                        console.log(this.header.passToParent());// (or)
                        console.log(this.header.childdata);
                }
        app.component.html
                 <button (click)="test()">Click</button>

## Routing
        routerModule, routerLink (instead of href for routing), routerLinkActive, router-outlet, path, routes are the key terms used in routing

# Services
        Service is a class that has data(properties) or methods
## syntax of creating service
        ng g s --service-name

# Query params
        <a routerLink='/prod' [queryParams]='{'category':'men'}'>Men</a>
        
# Load different component in other component
-> can be done using child routing

# Route Guards

        CanActivate => permit the route to go for required destination
        CanDeactivate
        Resolve
        CanLoad
        CanActivateChild