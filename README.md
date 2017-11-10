# A ColdBox Platform Bundle v0.1.0 for Visual Studio Code

Get the latest Visual Studio Code from https://code.visualstudio.com/.

## Target Platforms
- ColdBox 4.X.X

## Currently supported features

This bundle includes functionality not only for ColdBox MVC, but also for WireBox, CacheBox and LogBox.

### Code Insight
Code completion for all major ColdBox + TestBox functions and scopes:

- `binder ➝` : "coldbox.system.ioc.config.Binder",
- `cachebox ➝` : "coldbox.system.cache.CacheFactory"
- `controller ➝` : "coldbox.system.web.Controller",
- `event ➝` : "coldbox.system.web.context.RequestContext",
- `flash ➝` : "coldbox.system.web.flash.AbstractFlashScope",
- `html ➝` : "coldbox.system.core.dynamic.HTMLHelper"
- `log ➝` : "coldbox.system.logging.Logger",
- `logbox ➝` : "coldbox.system.logging.LogBox",
- `wirebox ➝` : "coldbox.system.ioc.Injector",

### Code Skeleton Snippets

- `cachebox-config ➝` : Creates a new CacheBox.cfc configuration file
- `config ➝` : Creates a new ColdBox.cfc configuration file
- `box ➝` : Creates a `box.json` template
- `handler ➝` : Creates a ColdBox Event Handler
- `interceptor ➝` : Creates a ColdBox Interceptor
- `model ➝` : Creates a model object
- `routes ➝` : Creates a new routing file
- `point ➝` : Creates a new interception point method
- `cfc ➝` : Creates a new ColdFusion script CFC
- `function ➝` : Creates a new ColdFusion script function
- `inject ➝` : Creates a new property with an `inject` annotation for WireBox
- `property ➝` : Creates a new ColdFusion script property

### Handler Code Snippets

- `action ➝` : Creates a handler action
- `around` : Creates an *aroundHandler()* implicit action
- `onerror ➝` : Creates an *onError()* implicit action 
- `onhttp ➝` : Creates an *onInvalidHTTPMethod()* implict action
- `onma ➝` : Creates an *onMissingAction()* implicit action 
- `postaction ➝` : Creates a *postXXX()* implicit action 
- `post ➝` : Creates a *postHandler()* implicit action 
- `preaction ➝` : Creates a *preXXX()* implicit action 
- `pre ➝` : Creates a *preHandler()* implicit action 

### ORM Code Snippets

- `active ➝` : Creates a ColdBox Active Entity
- `entity ➝` : Creates an ORM Entity
- `ormservice ➝` : Creates a Base ORM service
- `virtualservice ➝` : Creates a virtual entity service
- `o2m` : Creates a one-to-many property definition
- `m2o` : Creates a many-to-one property definition
- `m2m` : Creates a many-to-many property definition

### WireBox Code Snippets

- `aspect ➝` : Creates a WireBox AOP Aspect object
- `binder ➝` : Creates a basic WireBox configuration binder
- `inject ➝` : WireBox property injection
- `provider ➝` : Creates a WireBox provider method
- `setter ➝` : Creates a WireBox setter injection

## Installation instructions : 

### With Package Control ###

Install the latest *vscode-coldbox* package from https://marketplace.visualstudio.com/.

## References:

- A ColdBox Platform Bundle v2.0.0 for Sublime Text 2/3 - https://github.com/lmajano/cbox-coldbox-sublime
