export interface CompletionInfo { trigger: string;
 doc?: string;
 snippet: string;
 }

export class CompletionDataStore { static completions: { [key: string]: CompletionInfo[] } = {
	"all" : [
		{
			"doc"     : "(ColdBox:Interceptor)",
			"trigger" : "cbLoadInterceptorHelpers",
			"snippet" : "cbLoadInterceptorHelpers( event=${1:any}, interceptData=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:Interceptor)",
			"trigger" : "getProperties",
			"snippet" : "getProperties( )"
		},
		{
			"doc"     : "(ColdBox:Interceptor)",
			"trigger" : "getProperty",
			"snippet" : "getProperty( property=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:Interceptor)",
			"trigger" : "propertyExists",
			"snippet" : "propertyExists( property=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:Interceptor)",
			"trigger" : "setProperties",
			"snippet" : "setProperties( properties=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:Interceptor)",
			"trigger" : "setProperty",
			"snippet" : "setProperty( property=${1:any}, value=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:Interceptor)",
			"trigger" : "unregister",
			"snippet" : "unregister( state=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "announce",
			"snippet" : "announce( state=${1:any}, data=${2:{}}, async=${3:true,false}, asyncAll=${4:true,false}, asyncAllJoin=${5:true,false}, asyncPriority=${6:any}, asyncJoinTimeout=${7:numeric} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "announceInterception",
			"snippet" : "announceInterception( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "async",
			"snippet" : "async( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "back",
			"snippet" : "back( fallback=${1:any}, persist=${2:any}, persistStruct=${3:{}} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "externalView",
			"snippet" : "externalView( view=${1:any}, args=${2:{}}, cache=${3:true,false}, cacheTimeout=${4:any}, cacheLastAccessTimeout=${5:any}, cacheSuffix=${6:any}, cacheProvider=${7:any}, viewVariables=${8:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "forAttribute",
			"snippet" : "forAttribute( data=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getCache",
			"snippet" : "getCache( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getCachebox",
			"snippet" : "getCachebox( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getColdBoxSetting",
			"snippet" : "getColdBoxSetting( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getController",
			"snippet" : "getController( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getDateTimeHelper",
			"snippet" : "getDateTimeHelper( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getEnv",
			"snippet" : "getEnv( key=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getFlash",
			"snippet" : "getFlash( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getFlow",
			"snippet" : "getFlow( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getInstance",
			"snippet" : "getInstance( name=${1:any}, initArguments=${2:{}}, dsl=${3:any}, targetObject=${4:any}, injector=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getIsoTime",
			"snippet" : "getIsoTime( dateTime=${1:any}, toUTC=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getJsonUtil",
			"snippet" : "getJsonUtil( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getLog",
			"snippet" : "getLog( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getLogBox",
			"snippet" : "getLogBox( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getModuleConfig",
			"snippet" : "getModuleConfig( module=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getModuleSettings",
			"snippet" : "getModuleSettings( module=${1:any}, setting=${2:any}, defaultValue=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getRenderer",
			"snippet" : "getRenderer( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getRequestCollection",
			"snippet" : "getRequestCollection( private=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getRequestContext",
			"snippet" : "getRequestContext( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getRootWireBox",
			"snippet" : "getRootWireBox( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getSetting",
			"snippet" : "getSetting( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getSystemProperty",
			"snippet" : "getSystemProperty( key=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getSystemSetting",
			"snippet" : "getSystemSetting( key=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getUserSessionIdentifier",
			"snippet" : "getUserSessionIdentifier( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "getWirebox",
			"snippet" : "getWirebox( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "ifNull",
			"snippet" : "ifNull( target=${1:any}, success=${2:any}, failure=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "ifPresent",
			"snippet" : "ifPresent( target=${1:any}, success=${2:any}, failure=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "inDebugMode",
			"snippet" : "inDebugMode( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "includeUDF",
			"snippet" : "includeUDF( udflibrary=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "isDevelopment",
			"snippet" : "isDevelopment( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "isProduction",
			"snippet" : "isProduction( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "isTesting",
			"snippet" : "isTesting( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "layout",
			"snippet" : "layout( layout=${1:any}, module=${2:any}, view=${3:any}, args=${4:{}}, viewModule=${5:any}, prePostExempt=${6:true,false}, viewVariables=${7:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "listen",
			"snippet" : "listen( target=${1:any}, point=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "loadApplicationHelpers",
			"snippet" : "loadApplicationHelpers( force=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "locateDirectoryPath",
			"snippet" : "locateDirectoryPath( pathToCheck=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "locateFilePath",
			"snippet" : "locateFilePath( pathToCheck=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "persistVariables",
			"snippet" : "persistVariables( persist=${1:any}, persistStruct=${2:{}} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "populate",
			"snippet" : "populate( model=${1:any}, scope=${2:any}, trustedSetter=${3:true,false}, include=${4:any}, exclude=${5:any}, ignoreEmpty=${6:true,false}, nullEmptyInclude=${7:any}, nullEmptyExclude=${8:any}, composeRelationships=${9:true,false}, memento=${10:{}}, jsonstring=\"${11:}\", xml=\"${12:}\", qry=${13:query}, ignoreTargetLists=${14:true,false} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "populateModel",
			"snippet" : "populateModel( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "relocate",
			"snippet" : "relocate( event=${1:any}, URL=${2:any}, URI=${3:any}, queryString=${4:any}, persist=${5:any}, persistStruct=${6:{}}, addToken=${7:true,false}, ssl=${8:true,false}, baseURL=${9:any}, postProcessExempt=${10:true,false}, statusCode=${11:numeric} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "renderExternalView",
			"snippet" : "renderExternalView( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "renderLayout",
			"snippet" : "renderLayout( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "renderview",
			"snippet" : "renderview( )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "runEvent",
			"snippet" : "runEvent( event=${1:any}, prePostExempt=${2:true,false}, private=${3:true,false}, defaultEvent=${4:true,false}, eventArguments=${5:{}}, cache=${6:true,false}, cacheTimeout=${7:any}, cacheLastAccessTimeout=${8:any}, cacheSuffix=${9:any}, cacheProvider=${10:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "runRoute",
			"snippet" : "runRoute( name=${1:any}, params=${2:{}}, cache=${3:true,false}, cacheTimeout=${4:any}, cacheLastAccessTimeout=${5:any}, cacheSuffix=${6:any}, cacheProvider=${7:any}, prePostExempt=${8:true,false} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setCachebox",
			"snippet" : "setCachebox( cachebox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setController",
			"snippet" : "setController( controller=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setEnv",
			"snippet" : "setEnv( env=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setFlash",
			"snippet" : "setFlash( flash=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setFlow",
			"snippet" : "setFlow( flow=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setJsonUtil",
			"snippet" : "setJsonUtil( jsonUtil=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setLog",
			"snippet" : "setLog( log=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setLogBox",
			"snippet" : "setLogBox( logBox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setSetting",
			"snippet" : "setSetting( name=${1:any}, value=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "setWirebox",
			"snippet" : "setWirebox( wirebox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "settingExists",
			"snippet" : "settingExists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "throwIf",
			"snippet" : "throwIf( target=${1:true,false}, type=${2:any}, message=${3:any}, detail=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "throwUnless",
			"snippet" : "throwUnless( target=${1:true,false}, type=${2:any}, message=${3:any}, detail=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "toJson",
			"snippet" : "toJson( obj=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "unless",
			"snippet" : "unless( target=${1:true,false}, success=${2:any}, failure=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "view",
			"snippet" : "view( view=${1:any}, args=${2:{}}, module=${3:any}, cache=${4:true,false}, cacheTimeout=${5:any}, cacheLastAccessTimeout=${6:any}, cacheSuffix=${7:any}, cacheProvider=${8:any}, collection=${9:any}, collectionAs=${10:any}, collectionStartRow=${11:numeric}, collectionMaxRows=${12:numeric}, collectionDelim=${13:any}, prePostExempt=${14:true,false}, name=${15:any}, viewVariables=${16:any} )"
		},
		{
			"doc"     : "(ColdBox:FrameworkSuperType)",
			"trigger" : "when",
			"snippet" : "when( target=${1:true,false}, success=${2:any}, failure=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "aroundHandler",
			"snippet" : "aroundHandler( event=${1:any}, rc=${2:any}, prc=${3:any}, targetAction=${4:any}, eventArguments=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onAnyOtherException",
			"snippet" : "onAnyOtherException( event=${1:any}, rc=${2:any}, prc=${3:any}, eventArguments=${4:any}, exception=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onAuthenticationFailure",
			"snippet" : "onAuthenticationFailure( event=${1:any}, rc=${2:any}, prc=${3:any}, abort=${4:any}, exception=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onAuthorizationFailure",
			"snippet" : "onAuthorizationFailure( event=${1:any}, rc=${2:any}, prc=${3:any}, abort=${4:any}, exception=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onEntityNotFoundException",
			"snippet" : "onEntityNotFoundException( event=${1:any}, rc=${2:any}, prc=${3:any}, eventArguments=${4:any}, exception=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onError",
			"snippet" : "onError( event=${1:any}, rc=${2:any}, prc=${3:any}, faultAction=${4:any}, exception=${5:any}, eventArguments=${6:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onExpectationFailed",
			"snippet" : "onExpectationFailed( event=${1:any}, rc=${2:any}, prc=${3:any}, message=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onInvalidHTTPMethod",
			"snippet" : "onInvalidHTTPMethod( event=${1:any}, rc=${2:any}, prc=${3:any}, faultAction=${4:any}, eventArguments=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onInvalidRoute",
			"snippet" : "onInvalidRoute( event=${1:any}, rc=${2:any}, prc=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onMissingAction",
			"snippet" : "onMissingAction( event=${1:any}, rc=${2:any}, prc=${3:any}, missingAction=${4:any}, eventArguments=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:RestHandler)",
			"trigger" : "onValidationException",
			"snippet" : "onValidationException( event=${1:any}, rc=${2:any}, prc=${3:any}, eventArguments=${4:any}, exception=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:EventHandler)",
			"trigger" : "_actionExists",
			"snippet" : "_actionExists( action=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:EventHandler)",
			"trigger" : "_actionMetadata",
			"snippet" : "_actionMetadata( action=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:EventHandler)",
			"trigger" : "_privateInvoker",
			"snippet" : "_privateInvoker( method=${1:any}, argCollection=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:EventHandler)",
			"trigger" : "onHandlerDIComplete",
			"snippet" : "onHandlerDIComplete( )"
		}
	],
	"cachebox" : [
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "addCache",
			"snippet" : "cachebox.addCache( cache=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "addDefaultCache",
			"snippet" : "cachebox.addDefaultCache( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "cacheExists",
			"snippet" : "cachebox.cacheExists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "clearAll",
			"snippet" : "cachebox.clearAll( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "configureEventManager",
			"snippet" : "cachebox.configureEventManager( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "configureLogBox",
			"snippet" : "cachebox.configureLogBox( configPath=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "createCache",
			"snippet" : "cachebox.createCache( name=${1:any}, provider=${2:any}, properties=${3:{}} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "doScopeRegistration",
			"snippet" : "cachebox.doScopeRegistration( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "expireAll",
			"snippet" : "cachebox.expireAll( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getAsyncManager",
			"snippet" : "cachebox.getAsyncManager( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getCache",
			"snippet" : "cachebox.getCache( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getCacheNames",
			"snippet" : "cachebox.getCacheNames( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getCaches",
			"snippet" : "cachebox.getCaches( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getColdbox",
			"snippet" : "cachebox.getColdbox( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getConfig",
			"snippet" : "cachebox.getConfig( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getDefaultCache",
			"snippet" : "cachebox.getDefaultCache( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getEventManager",
			"snippet" : "cachebox.getEventManager( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getEventStates",
			"snippet" : "cachebox.getEventStates( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getFactoryId",
			"snippet" : "cachebox.getFactoryId( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getLog",
			"snippet" : "cachebox.getLog( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getLogbox",
			"snippet" : "cachebox.getLogbox( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getScopeRegistration",
			"snippet" : "cachebox.getScopeRegistration( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getTaskScheduler",
			"snippet" : "cachebox.getTaskScheduler( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getUtil",
			"snippet" : "cachebox.getUtil( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getVersion",
			"snippet" : "cachebox.getVersion( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "getWirebox",
			"snippet" : "cachebox.getWirebox( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "isColdBoxLinked",
			"snippet" : "cachebox.isColdBoxLinked( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "reapAll",
			"snippet" : "cachebox.reapAll( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "registerCache",
			"snippet" : "cachebox.registerCache( cache=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "registerListeners",
			"snippet" : "cachebox.registerListeners( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "removeAll",
			"snippet" : "cachebox.removeAll( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "removeCache",
			"snippet" : "cachebox.removeCache( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "removeFromScope",
			"snippet" : "cachebox.removeFromScope( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "replaceCache",
			"snippet" : "cachebox.replaceCache( cache=${1:any}, decoratedCache=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setAsyncManager",
			"snippet" : "cachebox.setAsyncManager( asyncManager=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setCaches",
			"snippet" : "cachebox.setCaches( caches=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setColdbox",
			"snippet" : "cachebox.setColdbox( coldbox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setConfig",
			"snippet" : "cachebox.setConfig( config=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setEventManager",
			"snippet" : "cachebox.setEventManager( eventManager=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setEventStates",
			"snippet" : "cachebox.setEventStates( eventStates=${1:[]} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setFactoryId",
			"snippet" : "cachebox.setFactoryId( factoryId=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setLog",
			"snippet" : "cachebox.setLog( log=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setLogbox",
			"snippet" : "cachebox.setLogbox( logbox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setTaskScheduler",
			"snippet" : "cachebox.setTaskScheduler( taskScheduler=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setVersion",
			"snippet" : "cachebox.setVersion( version=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "setWirebox",
			"snippet" : "cachebox.setWirebox( wirebox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "shutdown",
			"snippet" : "cachebox.shutdown( )"
		},
		{
			"doc"     : "(ColdBox:cachebox)",
			"trigger" : "shutdownCache",
			"snippet" : "cachebox.shutdownCache( name=${1:any} )"
		}
	],
	"logbox" : [
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getAppenderRegistry",
			"snippet" : "logbox.getAppenderRegistry( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getAppendersMap",
			"snippet" : "logbox.getAppendersMap( appenders=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getAsyncManager",
			"snippet" : "logbox.getAsyncManager( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getCategoryAppenders",
			"snippet" : "logbox.getCategoryAppenders( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getColdbox",
			"snippet" : "logbox.getColdbox( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getConfig",
			"snippet" : "logbox.getConfig( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getCurrentAppenders",
			"snippet" : "logbox.getCurrentAppenders( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getCurrentLoggers",
			"snippet" : "logbox.getCurrentLoggers( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getLogBoxID",
			"snippet" : "logbox.getLogBoxID( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getLogger",
			"snippet" : "logbox.getLogger( category=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getLoggerClass",
			"snippet" : "logbox.getLoggerClass( class=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getLoggerRegistry",
			"snippet" : "logbox.getLoggerRegistry( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getRootLogger",
			"snippet" : "logbox.getRootLogger( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getTaskScheduler",
			"snippet" : "logbox.getTaskScheduler( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getUtil",
			"snippet" : "logbox.getUtil( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getVersion",
			"snippet" : "logbox.getVersion( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "getWirebox",
			"snippet" : "logbox.getWirebox( )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "locateCategoryParentLogger",
			"snippet" : "logbox.locateCategoryParentLogger( category=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "registerAppender",
			"snippet" : "logbox.registerAppender( name=${1:any}, class=${2:any}, properties=${3:{}}, layout=${4:any}, levelMin=${5:numeric}, levelMax=${6:numeric} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setAppenderRegistry",
			"snippet" : "logbox.setAppenderRegistry( appenderRegistry=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setAsyncManager",
			"snippet" : "logbox.setAsyncManager( asyncManager=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setCategoryAppenders",
			"snippet" : "logbox.setCategoryAppenders( categoryAppenders=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setColdbox",
			"snippet" : "logbox.setColdbox( coldbox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setConfig",
			"snippet" : "logbox.setConfig( config=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setLogBoxID",
			"snippet" : "logbox.setLogBoxID( logBoxID=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setLoggerRegistry",
			"snippet" : "logbox.setLoggerRegistry( loggerRegistry=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setTaskScheduler",
			"snippet" : "logbox.setTaskScheduler( taskScheduler=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setVersion",
			"snippet" : "logbox.setVersion( version=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "setWirebox",
			"snippet" : "logbox.setWirebox( wirebox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:logbox)",
			"trigger" : "shutdown",
			"snippet" : "logbox.shutdown( )"
		}
	],
	"binder" : [
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "asEagerInit",
			"snippet" : "binder.asEagerInit( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "asSingleton",
			"snippet" : "binder.asSingleton( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "bindAspect",
			"snippet" : "binder.bindAspect( classes=${1:any}, methods=${2:any}, aspects=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "cachebox",
			"snippet" : "binder.cachebox( configFile=${1:any}, cacheFactory=${2:any}, enabled=${3:true,false}, classNamespace=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "constructor",
			"snippet" : "binder.constructor( constructor=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "delegates",
			"snippet" : "binder.delegates( expression=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "extraAttributes",
			"snippet" : "binder.extraAttributes( data=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "forceMap",
			"snippet" : "binder.forceMap( alias=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getAStopRecursions",
			"snippet" : "binder.getAStopRecursions( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getAppMapping",
			"snippet" : "binder.getAppMapping( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getAspectBindings",
			"snippet" : "binder.getAspectBindings( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getAutoProcessMappings",
			"snippet" : "binder.getAutoProcessMappings( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getCacheBoxConfig",
			"snippet" : "binder.getCacheBoxConfig( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getCachebox",
			"snippet" : "binder.getCachebox( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getColdbox",
			"snippet" : "binder.getColdbox( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getConfig",
			"snippet" : "binder.getConfig( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getCurrentMapping",
			"snippet" : "binder.getCurrentMapping( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getCustomDSL",
			"snippet" : "binder.getCustomDSL( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getCustomScopes",
			"snippet" : "binder.getCustomScopes( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getDEFAULTS",
			"snippet" : "binder.getDEFAULTS( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getInjector",
			"snippet" : "binder.getInjector( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getListeners",
			"snippet" : "binder.getListeners( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getLogBoxConfig",
			"snippet" : "binder.getLogBoxConfig( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getMapping",
			"snippet" : "binder.getMapping( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getMappings",
			"snippet" : "binder.getMappings( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getMemento",
			"snippet" : "binder.getMemento( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getMetadataCache",
			"snippet" : "binder.getMetadataCache( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getOParentInjector",
			"snippet" : "binder.getOParentInjector( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getParentInjector",
			"snippet" : "binder.getParentInjector( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getProperties",
			"snippet" : "binder.getProperties( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getProperty",
			"snippet" : "binder.getProperty( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getScanLocations",
			"snippet" : "binder.getScanLocations( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getScopeRegistration",
			"snippet" : "binder.getScopeRegistration( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getStopRecursions",
			"snippet" : "binder.getStopRecursions( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getTransientInjectionCache",
			"snippet" : "binder.getTransientInjectionCache( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "getWirebox",
			"snippet" : "binder.getWirebox( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "inCacheBox",
			"snippet" : "binder.inCacheBox( key=${1:any}, timeout=${2:any}, lastAccessTimeout=${3:any}, provider=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "initArg",
			"snippet" : "binder.initArg( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any}, required=${6:any}, type=${7:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "initWith",
			"snippet" : "binder.initWith( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "into",
			"snippet" : "binder.into( scope=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "listener",
			"snippet" : "binder.listener( class=${1:any}, properties=${2:{}}, name=${3:any}, register=${4:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "loadDataDSL",
			"snippet" : "binder.loadDataDSL( rawDSL=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "logBoxConfig",
			"snippet" : "binder.logBoxConfig( config=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "map",
			"snippet" : "binder.map( alias=${1:any}, force=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "mapAspect",
			"snippet" : "binder.mapAspect( aspect=${1:any}, autoBinding=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "mapDSL",
			"snippet" : "binder.mapDSL( namespace=${1:any}, path=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "mapDirectory",
			"snippet" : "binder.mapDirectory( packagePath=${1:any}, include=${2:any}, exclude=${3:any}, influence=${4:any}, filter=${5:any}, namespace=${6:any}, prepend=${7:true,false}, process=${8:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "mapPath",
			"snippet" : "binder.mapPath( path=${1:any}, namespace=${2:any}, prepend=${3:true,false}, force=${4:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "mapScope",
			"snippet" : "binder.mapScope( annotation=${1:any}, path=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "mappingExists",
			"snippet" : "binder.mappingExists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "match",
			"snippet" : "binder.match( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "methodArg",
			"snippet" : "binder.methodArg( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any}, required=${6:any}, type=${7:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "mixins",
			"snippet" : "binder.mixins( mixins=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "noAutowire",
			"snippet" : "binder.noAutowire( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "noInit",
			"snippet" : "binder.noInit( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "notThreadSafe",
			"snippet" : "binder.notThreadSafe( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "onDIComplete",
			"snippet" : "binder.onDIComplete( methods=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "parent",
			"snippet" : "binder.parent( alias=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "parentInjector",
			"snippet" : "binder.parentInjector( injector=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "process",
			"snippet" : "binder.process( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "processEagerInits",
			"snippet" : "binder.processEagerInits( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "processMappings",
			"snippet" : "binder.processMappings( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "property",
			"snippet" : "binder.property( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any}, scope=${6:any}, required=${7:any}, type=${8:any}, delegate=${9:true,false}, delegatePrefix=${10:any}, delegateSuffix=${11:any}, delegateExcludes=${12:any}, delegateIncludes=${13:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "propertyExists",
			"snippet" : "binder.propertyExists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "providerMethod",
			"snippet" : "binder.providerMethod( method=${1:any}, mapping=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "removeScanLocations",
			"snippet" : "binder.removeScanLocations( locations=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "reset",
			"snippet" : "binder.reset( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "scanLocations",
			"snippet" : "binder.scanLocations( locations=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "scopeRegistration",
			"snippet" : "binder.scopeRegistration( enabled=${1:true,false}, scope=${2:any}, key=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setAStopRecursions",
			"snippet" : "binder.setAStopRecursions( aStopRecursions=${1:[]} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setAppMapping",
			"snippet" : "binder.setAppMapping( appMapping=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setAspectBindings",
			"snippet" : "binder.setAspectBindings( aspectBindings=${1:[]} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setAutoProcessMappings",
			"snippet" : "binder.setAutoProcessMappings( autoProcessMappings=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setCachebox",
			"snippet" : "binder.setCachebox( cachebox=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setColdbox",
			"snippet" : "binder.setColdbox( coldbox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setConfig",
			"snippet" : "binder.setConfig( config=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setCurrentMapping",
			"snippet" : "binder.setCurrentMapping( currentMapping=${1:[]} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setCustomDSL",
			"snippet" : "binder.setCustomDSL( customDSL=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setCustomScopes",
			"snippet" : "binder.setCustomScopes( customScopes=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setInjector",
			"snippet" : "binder.setInjector( injector=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setListeners",
			"snippet" : "binder.setListeners( listeners=${1:[]} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setLogBoxConfig",
			"snippet" : "binder.setLogBoxConfig( logBoxConfig=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setMapping",
			"snippet" : "binder.setMapping( name=${1:any}, mapping=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setMappings",
			"snippet" : "binder.setMappings( mappings=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setMetadataCache",
			"snippet" : "binder.setMetadataCache( metadataCache=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setOParentInjector",
			"snippet" : "binder.setOParentInjector( oParentInjector=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setProperties",
			"snippet" : "binder.setProperties( properties=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setProperty",
			"snippet" : "binder.setProperty( name=${1:any}, value=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setScanLocations",
			"snippet" : "binder.setScanLocations( scanLocations=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setScopeRegistration",
			"snippet" : "binder.setScopeRegistration( scopeRegistration=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setTransientInjectionCache",
			"snippet" : "binder.setTransientInjectionCache( transientInjectionCache=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setWirebox",
			"snippet" : "binder.setWirebox( wirebox=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "setter",
			"snippet" : "binder.setter( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any}, argName=${6:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "stopRecursions",
			"snippet" : "binder.stopRecursions( classes=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "threadSafe",
			"snippet" : "binder.threadSafe( )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "to",
			"snippet" : "binder.to( path=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "toDSL",
			"snippet" : "binder.toDSL( dsl=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "toFactoryMethod",
			"snippet" : "binder.toFactoryMethod( factory=${1:any}, method=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "toJava",
			"snippet" : "binder.toJava( path=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "toProvider",
			"snippet" : "binder.toProvider( provider=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "toRSS",
			"snippet" : "binder.toRSS( path=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "toValue",
			"snippet" : "binder.toValue( value=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "toWebservice",
			"snippet" : "binder.toWebservice( path=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "transientInjectionCache",
			"snippet" : "binder.transientInjectionCache( enabled=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "unMap",
			"snippet" : "binder.unMap( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "virtualInheritance",
			"snippet" : "binder.virtualInheritance( mapping=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "with",
			"snippet" : "binder.with( alias=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:binder)",
			"trigger" : "withInfluence",
			"snippet" : "binder.withInfluence( influenceClosure=${1:any} )"
		}
	],
	"log" : [
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "addAppender",
			"snippet" : "log.addAppender( newAppender=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "appenderExists",
			"snippet" : "log.appenderExists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "canDebug",
			"snippet" : "log.canDebug( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "canError",
			"snippet" : "log.canError( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "canFatal",
			"snippet" : "log.canFatal( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "canInfo",
			"snippet" : "log.canInfo( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "canLog",
			"snippet" : "log.canLog( level=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "canWarn",
			"snippet" : "log.canWarn( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "debug",
			"snippet" : "log.debug( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "error",
			"snippet" : "log.error( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "fatal",
			"snippet" : "log.fatal( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "getAppender",
			"snippet" : "log.getAppender( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "getAppenders",
			"snippet" : "log.getAppenders( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "getCategory",
			"snippet" : "log.getCategory( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "getLevelMax",
			"snippet" : "log.getLevelMax( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "getLevelMin",
			"snippet" : "log.getLevelMin( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "getRootLogger",
			"snippet" : "log.getRootLogger( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "hasAppenders",
			"snippet" : "log.hasAppenders( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "info",
			"snippet" : "log.info( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "logMessage",
			"snippet" : "log.logMessage( message=${1:any}, severity=${2:any}, extraInfo=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "removeAllAppenders",
			"snippet" : "log.removeAllAppenders( )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "removeAppender",
			"snippet" : "log.removeAppender( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "setAppenders",
			"snippet" : "log.setAppenders( appenders=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "setCategory",
			"snippet" : "log.setCategory( category=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "setLevelMax",
			"snippet" : "log.setLevelMax( levelMax=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "setLevelMin",
			"snippet" : "log.setLevelMin( levelMin=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "setRootLogger",
			"snippet" : "log.setRootLogger( rootLogger=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:log)",
			"trigger" : "warn",
			"snippet" : "log.warn( message=${1:any}, extraInfo=${2:any} )"
		}
	],
	"assert" : [
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "assert",
			"snippet" : "assert.assert( expression=${1:true,false}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "between",
			"snippet" : "assert.between( actual=${1:any}, min=${2:any}, max=${3:any}, message=${4:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "closeTo",
			"snippet" : "assert.closeTo( expected=${1:any}, actual=${2:any}, delta=${3:any}, datePart=${4:any}, message=${5:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "deepKey",
			"snippet" : "assert.deepKey( target=${1:{}}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "equalize",
			"snippet" : "assert.equalize( expected=${1:any}, actual=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "fail",
			"snippet" : "assert.fail( message=${1:any}, detail=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "getIdentityHashCode",
			"snippet" : "assert.getIdentityHashCode( target=${1:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "getStringName",
			"snippet" : "assert.getStringName( obj=${1:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "getTargetLength",
			"snippet" : "assert.getTargetLength( target=${1:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "includes",
			"snippet" : "assert.includes( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "includesWithCase",
			"snippet" : "assert.includesWithCase( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "instanceOf",
			"snippet" : "assert.instanceOf( actual=${1:any}, typeName=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isEmpty",
			"snippet" : "assert.isEmpty( target=${1:any}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isEqual",
			"snippet" : "assert.isEqual( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isEqualWithCase",
			"snippet" : "assert.isEqualWithCase( expected=\"${1:}\", actual=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isFalse",
			"snippet" : "assert.isFalse( actual=${1:true,false}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isGT",
			"snippet" : "assert.isGT( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isGTE",
			"snippet" : "assert.isGTE( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isJSON",
			"snippet" : "assert.isJSON( actual=${1:any}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isLT",
			"snippet" : "assert.isLT( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isLTE",
			"snippet" : "assert.isLTE( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isNotEmpty",
			"snippet" : "assert.isNotEmpty( target=${1:any}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isNotEqual",
			"snippet" : "assert.isNotEqual( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isNotSameInstance",
			"snippet" : "assert.isNotSameInstance( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isSameInstance",
			"snippet" : "assert.isSameInstance( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "isTrue",
			"snippet" : "assert.isTrue( actual=${1:true,false}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "key",
			"snippet" : "assert.key( target=${1:any}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "lengthOf",
			"snippet" : "assert.lengthOf( target=${1:any}, length=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "match",
			"snippet" : "assert.match( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "matchWithCase",
			"snippet" : "assert.matchWithCase( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notDeepKey",
			"snippet" : "assert.notDeepKey( target=${1:{}}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notIncludes",
			"snippet" : "assert.notIncludes( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notIncludesWithCase",
			"snippet" : "assert.notIncludesWithCase( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notInstanceOf",
			"snippet" : "assert.notInstanceOf( actual=${1:any}, typeName=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notKey",
			"snippet" : "assert.notKey( target=${1:any}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notLengthOf",
			"snippet" : "assert.notLengthOf( target=${1:any}, length=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notMatch",
			"snippet" : "assert.notMatch( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notMatchWithCase",
			"snippet" : "assert.notMatchWithCase( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notNull",
			"snippet" : "assert.notNull( actual=${1:any}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notThrows",
			"snippet" : "assert.notThrows( target=${1:any}, type=${2:any}, regex=${3:any}, message=${4:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "notTypeOf",
			"snippet" : "assert.notTypeOf( type=\"${1:}\", actual=${2:any}, message=${3:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "null",
			"snippet" : "assert.null( actual=${1:any}, message=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "skip",
			"snippet" : "assert.skip( message=${1:any}, detail=${2:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "throws",
			"snippet" : "assert.throws( target=${1:any}, type=${2:any}, regex=${3:any}, message=${4:any} )"
		},
		{
			"doc"     : "(TestBox:assert)",
			"trigger" : "typeOf",
			"snippet" : "assert.typeOf( type=\"${1:}\", actual=${2:any}, message=${3:any} )"
		}
	],
	"wirebox" : [
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "autowire",
			"snippet" : "wirebox.autowire( target=${1:any}, mapping=${2:any}, targetID=${3:any}, annotationCheck=${4:true,false} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "buildBinder",
			"snippet" : "wirebox.buildBinder( binder=${1:any}, properties=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "buildInstance",
			"snippet" : "wirebox.buildInstance( mapping=${1:any}, initArguments=${2:{}} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "clearSingletons",
			"snippet" : "wirebox.clearSingletons( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "configureCacheBox",
			"snippet" : "wirebox.configureCacheBox( config=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "configureEventManager",
			"snippet" : "wirebox.configureEventManager( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "configureLogBox",
			"snippet" : "wirebox.configureLogBox( configPath=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "containsInstance",
			"snippet" : "wirebox.containsInstance( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "doScopeRegistration",
			"snippet" : "wirebox.doScopeRegistration( scopeInfo=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getAsyncManager",
			"snippet" : "wirebox.getAsyncManager( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getBinder",
			"snippet" : "wirebox.getBinder( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getCacheBox",
			"snippet" : "wirebox.getCacheBox( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getChildInjector",
			"snippet" : "wirebox.getChildInjector( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getChildInjectorNames",
			"snippet" : "wirebox.getChildInjectorNames( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getChildInjectors",
			"snippet" : "wirebox.getChildInjectors( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getColdbox",
			"snippet" : "wirebox.getColdbox( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getEventManager",
			"snippet" : "wirebox.getEventManager( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getEventStates",
			"snippet" : "wirebox.getEventStates( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getInjectorID",
			"snippet" : "wirebox.getInjectorID( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getInjectorReference",
			"snippet" : "wirebox.getInjectorReference( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getInjectorReferenceNames",
			"snippet" : "wirebox.getInjectorReferenceNames( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getInstance",
			"snippet" : "wirebox.getInstance( name=${1:any}, initArguments=${2:{}}, dsl=${3:any}, targetObject=${4:any}, injector=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getLog",
			"snippet" : "wirebox.getLog( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getLogBox",
			"snippet" : "wirebox.getLogBox( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getName",
			"snippet" : "wirebox.getName( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getObjectBuilder",
			"snippet" : "wirebox.getObjectBuilder( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getObjectPopulator",
			"snippet" : "wirebox.getObjectPopulator( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getParent",
			"snippet" : "wirebox.getParent( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getRoot",
			"snippet" : "wirebox.getRoot( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getScope",
			"snippet" : "wirebox.getScope( scope=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getScopeRegistration",
			"snippet" : "wirebox.getScopeRegistration( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getScopeStorage",
			"snippet" : "wirebox.getScopeStorage( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getScopes",
			"snippet" : "wirebox.getScopes( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getTaskScheduler",
			"snippet" : "wirebox.getTaskScheduler( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getUtility",
			"snippet" : "wirebox.getUtility( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "getVersion",
			"snippet" : "wirebox.getVersion( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "hasChildInjector",
			"snippet" : "wirebox.hasChildInjector( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "hasParent",
			"snippet" : "wirebox.hasParent( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "hasRoot",
			"snippet" : "wirebox.hasRoot( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "injectTarget",
			"snippet" : "wirebox.injectTarget( target=${1:any}, propertyName=${2:any}, propertyObject=${3:any}, scope=${4:any}, argName=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "isCacheBoxLinked",
			"snippet" : "wirebox.isCacheBoxLinked( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "isColdBoxLinked",
			"snippet" : "wirebox.isColdBoxLinked( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "locateInstance",
			"snippet" : "wirebox.locateInstance( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "locateScopedSelf",
			"snippet" : "wirebox.locateScopedSelf( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "processAfterCompleteDI",
			"snippet" : "wirebox.processAfterCompleteDI( targetObject=${1:any}, DICompleteMethods=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "processDelegation",
			"snippet" : "wirebox.processDelegation( target=${1:any}, targetID=\"${2:}\", delegate=${3:any}, DIData=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "processInjection",
			"snippet" : "wirebox.processInjection( targetObject=${1:any}, DIData=${2:[]}, targetID=\"${3:}\", mapping=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "processLazyProperties",
			"snippet" : "wirebox.processLazyProperties( targetObject=${1:any}, mapping=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "processMixins",
			"snippet" : "wirebox.processMixins( targetObject=${1:any}, mapping=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "processObservedProperties",
			"snippet" : "wirebox.processObservedProperties( targetObject=${1:any}, mapping=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "processProviderMethods",
			"snippet" : "wirebox.processProviderMethods( targetObject=${1:any}, mapping=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "registerChildInjector",
			"snippet" : "wirebox.registerChildInjector( name=${1:any}, child=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "registerDSL",
			"snippet" : "wirebox.registerDSL( namespace=${1:any}, path=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "registerInjectorReference",
			"snippet" : "wirebox.registerInjectorReference( injector=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "registerListener",
			"snippet" : "wirebox.registerListener( listener=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "registerListeners",
			"snippet" : "wirebox.registerListeners( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "registerNewInstance",
			"snippet" : "wirebox.registerNewInstance( name=${1:any}, instancePath=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "registerScopes",
			"snippet" : "wirebox.registerScopes( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "removeChildInjector",
			"snippet" : "wirebox.removeChildInjector( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "removeFromScope",
			"snippet" : "wirebox.removeFromScope( )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setAsyncManager",
			"snippet" : "wirebox.setAsyncManager( asyncManager=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setBinder",
			"snippet" : "wirebox.setBinder( binder=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setCacheBox",
			"snippet" : "wirebox.setCacheBox( cacheBox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setChildInjectors",
			"snippet" : "wirebox.setChildInjectors( childInjectors=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setColdbox",
			"snippet" : "wirebox.setColdbox( coldbox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setEventManager",
			"snippet" : "wirebox.setEventManager( eventManager=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setEventStates",
			"snippet" : "wirebox.setEventStates( eventStates=${1:[]} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setInjectorID",
			"snippet" : "wirebox.setInjectorID( injectorID=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setLog",
			"snippet" : "wirebox.setLog( log=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setLogBox",
			"snippet" : "wirebox.setLogBox( logBox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setName",
			"snippet" : "wirebox.setName( name=\"${1:}\" )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setObjectBuilder",
			"snippet" : "wirebox.setObjectBuilder( objectBuilder=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setParent",
			"snippet" : "wirebox.setParent( injector=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setRoot",
			"snippet" : "wirebox.setRoot( root=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setScopeStorage",
			"snippet" : "wirebox.setScopeStorage( scopeStorage=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setScopes",
			"snippet" : "wirebox.setScopes( scopes=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setTaskScheduler",
			"snippet" : "wirebox.setTaskScheduler( taskScheduler=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setUtility",
			"snippet" : "wirebox.setUtility( utility=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "setVersion",
			"snippet" : "wirebox.setVersion( version=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:wirebox)",
			"trigger" : "shutdown",
			"snippet" : "wirebox.shutdown( )"
		}
	],
	"flash" : [
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "clear",
			"snippet" : "flash.clear( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "clearFlash",
			"snippet" : "flash.clearFlash( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "discard",
			"snippet" : "flash.discard( keys=\"${1:}\" )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "exists",
			"snippet" : "flash.exists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "flashExists",
			"snippet" : "flash.flashExists( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "get",
			"snippet" : "flash.get( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getAll",
			"snippet" : "flash.getAll( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getController",
			"snippet" : "flash.getController( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getDefaults",
			"snippet" : "flash.getDefaults( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getFlash",
			"snippet" : "flash.getFlash( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getKeys",
			"snippet" : "flash.getKeys( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getProperties",
			"snippet" : "flash.getProperties( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getProperty",
			"snippet" : "flash.getProperty( property=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getScope",
			"snippet" : "flash.getScope( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "getUtil",
			"snippet" : "flash.getUtil( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "inflateFlash",
			"snippet" : "flash.inflateFlash( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "isEmpty",
			"snippet" : "flash.isEmpty( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "keep",
			"snippet" : "flash.keep( keys=\"${1:}\" )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "persistRC",
			"snippet" : "flash.persistRC( include=${1:any}, exclude=${2:any}, saveNow=${3:true,false} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "propertyExists",
			"snippet" : "flash.propertyExists( property=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "put",
			"snippet" : "flash.put( name=\"${1:}\", value=${2:any}, saveNow=${3:true,false}, keep=${4:true,false}, inflateToRC=${5:true,false}, inflateToPRC=${6:true,false}, autoPurge=${7:true,false} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "putAll",
			"snippet" : "flash.putAll( map=${1:{}}, saveNow=${2:true,false}, keep=${3:true,false}, inflateToRC=${4:true,false}, inflateToPRC=${5:true,false}, autoPurge=${6:true,false} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "remove",
			"snippet" : "flash.remove( name=${1:any}, saveNow=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "removeFlash",
			"snippet" : "flash.removeFlash( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "saveFlash",
			"snippet" : "flash.saveFlash( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "setController",
			"snippet" : "flash.setController( controller=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "setDefaults",
			"snippet" : "flash.setDefaults( defaults=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "setProperties",
			"snippet" : "flash.setProperties( properties=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "setProperty",
			"snippet" : "flash.setProperty( property=${1:any}, value=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "size",
			"snippet" : "flash.size( )"
		},
		{
			"doc"     : "(ColdBox:flash)",
			"trigger" : "statusMarks",
			"snippet" : "flash.statusMarks( keys=\"${1:}\", keep=${2:true,false} )"
		}
	],
	"event" : [
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "buildLink",
			"snippet" : "event.buildLink( to=${1:any}, queryString=${2:any}, translate=${3:true,false}, ssl=${4:true,false}, baseURL=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "clearCollection",
			"snippet" : "event.clearCollection( private=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "clearPrivateCollection",
			"snippet" : "event.clearPrivateCollection( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "collectionAppend",
			"snippet" : "event.collectionAppend( collection=${1:{}}, overwrite=${2:true,false}, private=${3:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "discoverLayout",
			"snippet" : "event.discoverLayout( view=\"${1:}\" )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCollection",
			"snippet" : "event.getCollection( deepCopy=${1:true,false}, private=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getContext",
			"snippet" : "event.getContext( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getController",
			"snippet" : "event.getController( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentAction",
			"snippet" : "event.getCurrentAction( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentEvent",
			"snippet" : "event.getCurrentEvent( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentHandler",
			"snippet" : "event.getCurrentHandler( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentLayout",
			"snippet" : "event.getCurrentLayout( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentLayoutModule",
			"snippet" : "event.getCurrentLayoutModule( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentModule",
			"snippet" : "event.getCurrentModule( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentRoute",
			"snippet" : "event.getCurrentRoute( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentRouteMeta",
			"snippet" : "event.getCurrentRouteMeta( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentRouteName",
			"snippet" : "event.getCurrentRouteName( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentRouteRecord",
			"snippet" : "event.getCurrentRouteRecord( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentRoutedModule",
			"snippet" : "event.getCurrentRoutedModule( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentRoutedNamespace",
			"snippet" : "event.getCurrentRoutedNamespace( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentRoutedURL",
			"snippet" : "event.getCurrentRoutedURL( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentView",
			"snippet" : "event.getCurrentView( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentViewArgs",
			"snippet" : "event.getCurrentViewArgs( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getCurrentViewModule",
			"snippet" : "event.getCurrentViewModule( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getDefaultLayout",
			"snippet" : "event.getDefaultLayout( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getDefaultView",
			"snippet" : "event.getDefaultView( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getEventCacheableEntry",
			"snippet" : "event.getEventCacheableEntry( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getEventName",
			"snippet" : "event.getEventName( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getExcept",
			"snippet" : "event.getExcept( keys=${1:any}, private=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getFileMimeType",
			"snippet" : "event.getFileMimeType( extension=\"${1:}\" )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getFolderLayouts",
			"snippet" : "event.getFolderLayouts( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getFullPath",
			"snippet" : "event.getFullPath( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getFullUrl",
			"snippet" : "event.getFullUrl( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getHTMLBasePath",
			"snippet" : "event.getHTMLBasePath( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getHTMLBaseURL",
			"snippet" : "event.getHTMLBaseURL( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getHTTPBasicCredentials",
			"snippet" : "event.getHTTPBasicCredentials( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getHTTPContent",
			"snippet" : "event.getHTTPContent( json=${1:true,false}, xml=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getHTTPHeader",
			"snippet" : "event.getHTTPHeader( header=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getHTTPMethod",
			"snippet" : "event.getHTTPMethod( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getIsNoExecution",
			"snippet" : "event.getIsNoExecution( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getMemento",
			"snippet" : "event.getMemento( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getModuleEntryPoint",
			"snippet" : "event.getModuleEntryPoint( module=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getModuleRoot",
			"snippet" : "event.getModuleRoot( module=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getOnly",
			"snippet" : "event.getOnly( keys=${1:any}, private=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPath",
			"snippet" : "event.getPath( withQuery=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPathSegment",
			"snippet" : "event.getPathSegment( index=${1:numeric}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPathSegments",
			"snippet" : "event.getPathSegments( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPrivateCollection",
			"snippet" : "event.getPrivateCollection( deepCopy=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPrivateContext",
			"snippet" : "event.getPrivateContext( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPrivateExcept",
			"snippet" : "event.getPrivateExcept( keys=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPrivateOnly",
			"snippet" : "event.getPrivateOnly( keys=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPrivateSize",
			"snippet" : "event.getPrivateSize( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPrivateTrimValue",
			"snippet" : "event.getPrivateTrimValue( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getPrivateValue",
			"snippet" : "event.getPrivateValue( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getProperties",
			"snippet" : "event.getProperties( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getRegisteredLayouts",
			"snippet" : "event.getRegisteredLayouts( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getRenderData",
			"snippet" : "event.getRenderData( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getRenderingRegions",
			"snippet" : "event.getRenderingRegions( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getRequestTimeout",
			"snippet" : "event.getRequestTimeout( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getResponse",
			"snippet" : "event.getResponse( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getResponseHeaders",
			"snippet" : "event.getResponseHeaders( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getRoutedStruct",
			"snippet" : "event.getRoutedStruct( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getSESBasePath",
			"snippet" : "event.getSESBasePath( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getSESBaseURL",
			"snippet" : "event.getSESBaseURL( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getSelf",
			"snippet" : "event.getSelf( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getSize",
			"snippet" : "event.getSize( private=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getTrimValue",
			"snippet" : "event.getTrimValue( name=${1:any}, defaultValue=${2:any}, private=${3:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getUrl",
			"snippet" : "event.getUrl( withQuery=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getValue",
			"snippet" : "event.getValue( name=${1:any}, defaultValue=${2:any}, private=${3:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getViewCacheableEntry",
			"snippet" : "event.getViewCacheableEntry( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "getViewLayouts",
			"snippet" : "event.getViewLayouts( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isAjax",
			"snippet" : "event.isAjax( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isEventCacheable",
			"snippet" : "event.isEventCacheable( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isInvalidHTTPMethod",
			"snippet" : "event.isInvalidHTTPMethod( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isNoRender",
			"snippet" : "event.isNoRender( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isProxyRequest",
			"snippet" : "event.isProxyRequest( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isSES",
			"snippet" : "event.isSES( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isSSL",
			"snippet" : "event.isSSL( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "isViewCacheable",
			"snippet" : "event.isViewCacheable( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "noExecution",
			"snippet" : "event.noExecution( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "noLayout",
			"snippet" : "event.noLayout( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "noRender",
			"snippet" : "event.noRender( remove=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "overrideEvent",
			"snippet" : "event.overrideEvent( event=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "paramPrivateValue",
			"snippet" : "event.paramPrivateValue( name=${1:any}, value=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "paramValue",
			"snippet" : "event.paramValue( name=${1:any}, value=${2:any}, private=${3:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "privateCollectionAppend",
			"snippet" : "event.privateCollectionAppend( collection=${1:{}}, overwrite=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "privateValueExists",
			"snippet" : "event.privateValueExists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "removeEventCacheableEntry",
			"snippet" : "event.removeEventCacheableEntry( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "removePrivateValue",
			"snippet" : "event.removePrivateValue( name=${1:any}, private=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "removeValue",
			"snippet" : "event.removeValue( name=${1:any}, private=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "renderData",
			"snippet" : "event.renderData( type=${1:any}, data=${2:any}, contentType=${3:any}, encoding=${4:any}, statusCode=${5:numeric}, statusText=${6:any}, location=${7:any}, jsonCallback=${8:any}, jsonAsText=${9:true,false}, xmlColumnList=${10:any}, xmlUseCDATA=${11:true,false}, xmlListDelimiter=${12:any}, xmlRootName=${13:any}, pdfArgs=${14:{}}, formats=${15:any}, formatsView=${16:any}, formatsRedirect=${17:any}, isBinary=${18:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "renderWithFormats",
			"snippet" : "event.renderWithFormats( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "route",
			"snippet" : "event.route( name=${1:any}, params=${2:{}}, ssl=${3:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "routeIs",
			"snippet" : "event.routeIs( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "sendFile",
			"snippet" : "event.sendFile( file=${1:any}, name=${2:any}, mimeType=${3:any}, disposition=${4:any}, abortAtEnd=${5:true,false}, extension=${6:any}, deleteFile=${7:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setContext",
			"snippet" : "event.setContext( context=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setController",
			"snippet" : "event.setController( controller=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setDefaultLayout",
			"snippet" : "event.setDefaultLayout( defaultLayout=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setDefaultView",
			"snippet" : "event.setDefaultView( defaultView=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setEventCacheableEntry",
			"snippet" : "event.setEventCacheableEntry( cacheEntry=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setEventName",
			"snippet" : "event.setEventName( eventName=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setFolderLayouts",
			"snippet" : "event.setFolderLayouts( folderLayouts=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setHTTPHeader",
			"snippet" : "event.setHTTPHeader( statusCode=${1:any}, statusText=${2:any}, name=${3:any}, value=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setIsInvalidHTTPMethod",
			"snippet" : "event.setIsInvalidHTTPMethod( target=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setIsNoExecution",
			"snippet" : "event.setIsNoExecution( isNoExecution=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setLayout",
			"snippet" : "event.setLayout( name=${1:any}, module=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setMemento",
			"snippet" : "event.setMemento( memento=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setPrivateContext",
			"snippet" : "event.setPrivateContext( privateContext=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setPrivateValue",
			"snippet" : "event.setPrivateValue( name=${1:any}, value=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setProperties",
			"snippet" : "event.setProperties( properties=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setProxyRequest",
			"snippet" : "event.setProxyRequest( )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setRegisteredLayouts",
			"snippet" : "event.setRegisteredLayouts( registeredLayouts=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setRenderingRegions",
			"snippet" : "event.setRenderingRegions( renderingRegions=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setRequestTimeout",
			"snippet" : "event.setRequestTimeout( seconds=${1:numeric} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setResponseHeaders",
			"snippet" : "event.setResponseHeaders( responseHeaders=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setRoutedStruct",
			"snippet" : "event.setRoutedStruct( routedStruct=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setSESBaseURL",
			"snippet" : "event.setSESBaseURL( sesBaseURL=\"${1:}\" )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setSESEnabled",
			"snippet" : "event.setSESEnabled( flag=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setValue",
			"snippet" : "event.setValue( name=${1:any}, value=${2:any}, private=${3:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setView",
			"snippet" : "event.setView( view=${1:any}, args=${2:{}}, layout=${3:any}, module=${4:any}, noLayout=${5:true,false}, cache=${6:true,false}, cacheTimeout=${7:any}, cacheLastAccessTimeout=${8:any}, cacheSuffix=${9:any}, cacheProvider=${10:any}, name=${11:any} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setViewCacheableEntry",
			"snippet" : "event.setViewCacheableEntry( cacheEntry=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "setViewLayouts",
			"snippet" : "event.setViewLayouts( viewLayouts=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "urlMatches",
			"snippet" : "event.urlMatches( path=\"${1:}\", exact=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "urlMatchesExact",
			"snippet" : "event.urlMatchesExact( path=\"${1:}\" )"
		},
		{
			"doc"     : "(ColdBox:event)",
			"trigger" : "valueExists",
			"snippet" : "event.valueExists( name=${1:any}, private=${2:true,false} )"
		}
	],
	"html" : [
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "$htmlHead",
			"snippet" : "html.$htmlHead( content=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "addAsset",
			"snippet" : "html.addAsset( asset=${1:any}, sendToHeader=${2:true,false}, async=${3:true,false}, defer=${4:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "addJSContent",
			"snippet" : "html.addJSContent( content=${1:any}, sendToHeader=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "addStyleContent",
			"snippet" : "html.addStyleContent( content=${1:any}, sendToHeader=${2:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "anchor",
			"snippet" : "html.anchor( name=${1:any}, text=${2:any}, data=${3:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "arrayToTable",
			"snippet" : "html.arrayToTable( data=${1:any}, includes=\"${2:}\", excludes=\"${3:}\", buffer=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "audio",
			"snippet" : "html.audio( src=${1:any}, autoplay=${2:true,false}, controls=${3:true,false}, loop=${4:true,false}, preload=${5:true,false}, noBaseURL=${6:true,false}, name=${7:any}, data=${8:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "autoDiscoveryLink",
			"snippet" : "html.autoDiscoveryLink( type=${1:any}, href=${2:any}, rel=${3:any}, title=${4:any}, data=${5:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "bindValue",
			"snippet" : "html.bindValue( args=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "br",
			"snippet" : "html.br( count=${1:numeric} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "button",
			"snippet" : "html.button( name=${1:any}, value=${2:any}, disabled=${3:true,false}, type=${4:any}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "canvas",
			"snippet" : "html.canvas( id=${1:any}, width=${2:any}, height=${3:any}, data=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "checkbox",
			"snippet" : "html.checkbox( name=${1:any}, value=${2:any}, disabled=${3:true,false}, checked=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "discoverElixirManifest",
			"snippet" : "html.discoverElixirManifest( currentModule=\"${1:}\", useModuleRoot=${2:true,false}, version=${3:numeric}, manifestRoot=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "docType",
			"snippet" : "html.docType( type=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "elixir",
			"snippet" : "html.elixir( fileName=${1:any}, buildDirectory=${2:any}, sendToHeader=${3:true,false}, async=${4:true,false}, defer=${5:true,false}, version=${6:numeric}, manifestRoot=${7:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "elixirPath",
			"snippet" : "html.elixirPath( fileName=${1:any}, useModuleRoot=${2:true,false}, version=${3:numeric}, manifestRoot=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "emailField",
			"snippet" : "html.emailField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "endFieldSet",
			"snippet" : "html.endFieldSet( )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "endForm",
			"snippet" : "html.endForm( )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "entityFields",
			"snippet" : "html.entityFields( entity=${1:any}, groupWrapper=${2:any}, groupWrapperAttrs=${3:{}}, fieldwrapper=${4:any}, fieldWrapperAttrs=${5:{}}, labelAttrs=${6:{}}, labelwrapper=${7:any}, labelWrapperAttrs=${8:{}}, labelClass=${9:any}, textareas=${10:any}, booleanSelect=${11:true,false}, showRelations=${12:true,false}, manytoone=${13:{}}, manytomany=${14:{}}, inputInsideLabel=${15:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "fileField",
			"snippet" : "html.fileField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "flattenAttributes",
			"snippet" : "html.flattenAttributes( target=${1:{}}, excludes=${2:any}, buffer=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "getColumnArray",
			"snippet" : "html.getColumnArray( qry=${1:any}, columnName=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "getController",
			"snippet" : "html.getController( )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "getRequestService",
			"snippet" : "html.getRequestService( )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "getSettings",
			"snippet" : "html.getSettings( )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "heading",
			"snippet" : "html.heading( content=${1:any}, size=${2:numeric} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "hiddenField",
			"snippet" : "html.hiddenField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "href",
			"snippet" : "html.href( href=${1:any}, text=${2:any}, queryString=${3:any}, title=${4:any}, noBaseURL=${5:true,false}, data=${6:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "imageButton",
			"snippet" : "html.imageButton( src=${1:any}, name=${2:any}, disabled=${3:true,false}, wrapper=${4:any}, wrapperAttrs=${5:{}}, groupWrapper=${6:any}, groupWrapperAttrs=${7:{}}, label=${8:any}, labelAttrs=${9:{}}, labelWrapper=${10:any}, labelWrapperAttrs=${11:{}}, labelClass=${12:any}, bind=${13:any}, bindProperty=${14:any}, data=${15:{}}, inputInsideLabel=${16:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "img",
			"snippet" : "html.img( src=${1:any}, alt=${2:any}, class=${3:any}, width=${4:any}, height=${5:any}, title=${6:any}, rel=${7:any}, name=${8:any}, noBaseURL=${9:true,false}, data=${10:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "inputField",
			"snippet" : "html.inputField( type=${1:any}, name=${2:any}, value=${3:any}, disabled=${4:true,false}, checked=${5:true,false}, readonly=${6:true,false}, wrapper=${7:any}, wrapperAttrs=${8:{}}, groupWrapper=${9:any}, groupWrapperAttrs=${10:{}}, label=${11:any}, labelAttrs=${12:{}}, labelWrapper=${13:any}, labelWrapperAttrs=${14:{}}, labelClass=${15:any}, bind=${16:any}, bindProperty=${17:any}, data=${18:{}}, inputInsideLabel=${19:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "label",
			"snippet" : "html.label( field=${1:any}, content=${2:any}, labelAttrs=${3:{}}, wrapper=${4:any}, wrapperAttrs=${5:{}}, data=${6:{}}, class=${7:any}, labelMode=${8:numeric} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "link",
			"snippet" : "html.link( href=${1:any}, rel=${2:any}, type=${3:any}, title=${4:any}, media=${5:any}, noBaseURL=${6:true,false}, charset=${7:any}, sendToHeader=${8:true,false}, data=${9:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "makePretty",
			"snippet" : "html.makePretty( text=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "meta",
			"snippet" : "html.meta( name=${1:any}, content=${2:any}, type=${3:any}, sendToHeader=${4:true,false}, property=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "nbs",
			"snippet" : "html.nbs( count=${1:numeric} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "normalizeID",
			"snippet" : "html.normalizeID( args=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "objectsToTable",
			"snippet" : "html.objectsToTable( data=${1:any}, includes=\"${2:}\", excludes=\"${3:}\", buffer=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "ol",
			"snippet" : "html.ol( values=${1:any}, column=\"${2:}\" )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "onMissingMethod",
			"snippet" : "html.onMissingMethod( missingMethodName=${1:any}, missingMethodArguments=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "options",
			"snippet" : "html.options( values=${1:any}, column=${2:any}, nameColumn=${3:any}, selectedIndex=${4:any}, selectedValue=${5:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "passIncludeExclude",
			"snippet" : "html.passIncludeExclude( value=${1:any}, includes=${2:any}, excludes=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "passwordField",
			"snippet" : "html.passwordField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "prepareBaseLink",
			"snippet" : "html.prepareBaseLink( noBaseURL=${1:true,false}, src=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "queryToTable",
			"snippet" : "html.queryToTable( data=${1:any}, includes=\"${2:}\", excludes=\"${3:}\", buffer=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "radioButton",
			"snippet" : "html.radioButton( name=${1:any}, value=${2:any}, disabled=${3:true,false}, checked=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "resetButton",
			"snippet" : "html.resetButton( name=${1:any}, value=${2:any}, disabled=${3:true,false}, wrapper=${4:any}, wrapperAttrs=${5:{}}, groupWrapper=${6:any}, groupWrapperAttrs=${7:{}}, label=${8:any}, labelAttrs=${9:{}}, labelWrapper=${10:any}, labelWrapperAttrs=${11:{}}, labelClass=${12:any}, bind=${13:any}, bindProperty=${14:any}, data=${15:{}}, inputInsideLabel=${16:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "select",
			"snippet" : "html.select( name=${1:any}, options=${2:any}, column=${3:any}, nameColumn=${4:any}, selectedIndex=${5:any}, selectedValue=${6:any}, bind=${7:any}, bindProperty=${8:any}, disabled=${9:true,false}, multiple=${10:true,false}, wrapper=${11:any}, wrapperAttrs=${12:{}}, groupWrapper=${13:any}, groupWrapperAttrs=${14:{}}, label=${15:any}, labelAttrs=${16:{}}, labelwrapper=${17:any}, labelWrapperAttrs=${18:{}}, data=${19:{}}, labelClass=${20:any}, inputInsideLabel=${21:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "setController",
			"snippet" : "html.setController( controller=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "setRequestService",
			"snippet" : "html.setRequestService( requestService=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "setSettings",
			"snippet" : "html.setSettings( settings=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "startFieldSet",
			"snippet" : "html.startFieldSet( legend=${1:any}, data=${2:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "startForm",
			"snippet" : "html.startForm( action=\"${1:}\", name=\"${2:}\", method=\"${3:}\", multipart=${4:true,false}, ssl=${5:true,false}, noBaseURL=${6:true,false}, data=${7:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "submitButton",
			"snippet" : "html.submitButton( name=${1:any}, value=${2:any}, disabled=${3:true,false}, wrapper=${4:any}, wrapperAttrs=${5:{}}, groupWrapper=${6:any}, groupWrapperAttrs=${7:{}}, label=${8:any}, labelAttrs=${9:{}}, labelWrapper=${10:any}, labelWrapperAttrs=${11:{}}, labelClass=${12:any}, bind=${13:any}, bindProperty=${14:any}, data=${15:{}}, inputInsideLabel=${16:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "table",
			"snippet" : "html.table( data=${1:any}, includes=${2:any}, excludes=${3:any}, name=${4:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "tag",
			"snippet" : "html.tag( tag=${1:any}, content=${2:any}, data=${3:{}}, excludes=\"${4:}\" )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "textArea",
			"snippet" : "html.textArea( name=${1:any}, cols=${2:numeric}, rows=${3:numeric}, value=${4:any}, disabled=${5:true,false}, readonly=${6:true,false}, wrapper=${7:any}, wrapperAttrs=${8:{}}, groupWrapper=${9:any}, groupWrapperAttrs=${10:{}}, label=${11:any}, labelAttrs=${12:{}}, labelWrapper=${13:any}, labelWrapperAttrs=${14:{}}, labelClass=${15:any}, bind=${16:any}, bindProperty=${17:any}, data=${18:{}}, inputInsideLabel=${19:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "textField",
			"snippet" : "html.textField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "toHtmlList",
			"snippet" : "html.toHtmlList( tag=${1:any}, values=${2:any}, column=${3:any}, data=${4:{}} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "ul",
			"snippet" : "html.ul( values=${1:any}, column=\"${2:}\" )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "urlField",
			"snippet" : "html.urlField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "video",
			"snippet" : "html.video( src=${1:any}, width=${2:any}, height=${3:any}, poster=${4:any}, autoplay=${5:true,false}, controls=${6:true,false}, loop=${7:true,false}, preload=${8:true,false}, noBaseURL=${9:true,false}, name=${10:any}, data=${11:any} )"
		},
		{
			"doc"     : "(ColdBox:html)",
			"trigger" : "wrapTag",
			"snippet" : "html.wrapTag( buffer=${1:any}, tag=${2:any}, end=${3:true,false}, attrs=${4:{}} )"
		}
	],
	"controller" : [
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "_runEvent",
			"snippet" : "controller._runEvent( event=${1:any}, prePostExempt=${2:true,false}, private=${3:true,false}, defaultEvent=${4:true,false}, eventArguments=${5:{}} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getAppHash",
			"snippet" : "controller.getAppHash( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getAppKey",
			"snippet" : "controller.getAppKey( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getAppName",
			"snippet" : "controller.getAppName( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getAppRootPath",
			"snippet" : "controller.getAppRootPath( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getAsyncManager",
			"snippet" : "controller.getAsyncManager( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getCFMLEngine",
			"snippet" : "controller.getCFMLEngine( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getCache",
			"snippet" : "controller.getCache( cacheName=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getCachebox",
			"snippet" : "controller.getCachebox( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getColdBoxSetting",
			"snippet" : "controller.getColdBoxSetting( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getColdboxInitiated",
			"snippet" : "controller.getColdboxInitiated( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getColdboxSettings",
			"snippet" : "controller.getColdboxSettings( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getConfigSettings",
			"snippet" : "controller.getConfigSettings( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getDataMarshaller",
			"snippet" : "controller.getDataMarshaller( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getHandlerService",
			"snippet" : "controller.getHandlerService( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getInterceptorService",
			"snippet" : "controller.getInterceptorService( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getLoaderService",
			"snippet" : "controller.getLoaderService( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getLog",
			"snippet" : "controller.getLog( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getLogbox",
			"snippet" : "controller.getLogbox( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getMemento",
			"snippet" : "controller.getMemento( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getModuleConfig",
			"snippet" : "controller.getModuleConfig( module=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getModuleService",
			"snippet" : "controller.getModuleService( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getModuleSettings",
			"snippet" : "controller.getModuleSettings( module=${1:any}, setting=${2:any}, defaultValue=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getRenderer",
			"snippet" : "controller.getRenderer( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getRequestService",
			"snippet" : "controller.getRequestService( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getRoutingService",
			"snippet" : "controller.getRoutingService( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getSchedulerService",
			"snippet" : "controller.getSchedulerService( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getServices",
			"snippet" : "controller.getServices( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getSetting",
			"snippet" : "controller.getSetting( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getUserSessionIdentifier",
			"snippet" : "controller.getUserSessionIdentifier( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getUtil",
			"snippet" : "controller.getUtil( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "getWirebox",
			"snippet" : "controller.getWirebox( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "inDebugMode",
			"snippet" : "controller.inDebugMode( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "invoker",
			"snippet" : "controller.invoker( target=${1:any}, method=${2:any}, argCollection=${3:{}}, private=${4:true,false} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "isDevelopment",
			"snippet" : "controller.isDevelopment( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "isProduction",
			"snippet" : "controller.isProduction( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "isTesting",
			"snippet" : "controller.isTesting( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "loadColdBoxSettings",
			"snippet" : "controller.loadColdBoxSettings( )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "locateDirectoryPath",
			"snippet" : "controller.locateDirectoryPath( pathToCheck=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "locateFilePath",
			"snippet" : "controller.locateFilePath( pathToCheck=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "persistVariables",
			"snippet" : "controller.persistVariables( persist=${1:any}, persistStruct=${2:{}} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "relocate",
			"snippet" : "controller.relocate( event=${1:any}, queryString=${2:any}, addToken=${3:true,false}, persist=${4:any}, persistStruct=${5:{}}, baseURL=${6:any}, postProcessExempt=${7:true,false}, URL=${8:any}, URI=${9:any}, statusCode=${10:numeric} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "runEvent",
			"snippet" : "controller.runEvent( event=${1:any}, prePostExempt=${2:true,false}, private=${3:true,false}, defaultEvent=${4:true,false}, eventArguments=${5:{}}, cache=${6:true,false}, cacheTimeout=${7:any}, cacheLastAccessTimeout=${8:any}, cacheSuffix=${9:any}, cacheProvider=${10:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "runRoute",
			"snippet" : "controller.runRoute( name=${1:any}, params=${2:{}}, cache=${3:true,false}, cacheTimeout=${4:any}, cacheLastAccessTimeout=${5:any}, cacheSuffix=${6:any}, cacheProvider=${7:any}, prePostExempt=${8:true,false} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "sendRelocation",
			"snippet" : "controller.sendRelocation( URL=${1:any}, addToken=${2:true,false}, statusCode=${3:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setAppHash",
			"snippet" : "controller.setAppHash( appHash=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setAppKey",
			"snippet" : "controller.setAppKey( appKey=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setAppName",
			"snippet" : "controller.setAppName( appName=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setAppRootPath",
			"snippet" : "controller.setAppRootPath( appRootPath=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setAsyncManager",
			"snippet" : "controller.setAsyncManager( asyncManager=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setCFMLEngine",
			"snippet" : "controller.setCFMLEngine( CFMLEngine=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setCachebox",
			"snippet" : "controller.setCachebox( cachebox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setColdboxInitiated",
			"snippet" : "controller.setColdboxInitiated( coldboxInitiated=${1:true,false} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setColdboxSettings",
			"snippet" : "controller.setColdboxSettings( coldboxSettings=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setConfigSettings",
			"snippet" : "controller.setConfigSettings( configSettings=${1:{}} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setLog",
			"snippet" : "controller.setLog( log=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setLogbox",
			"snippet" : "controller.setLogbox( logbox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setRenderer",
			"snippet" : "controller.setRenderer( renderer=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setServices",
			"snippet" : "controller.setServices( services=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setSetting",
			"snippet" : "controller.setSetting( name=${1:any}, value=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setUtil",
			"snippet" : "controller.setUtil( util=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "setWirebox",
			"snippet" : "controller.setWirebox( wirebox=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "settingExists",
			"snippet" : "controller.settingExists( name=${1:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "updateSSL",
			"snippet" : "controller.updateSSL( inURL=${1:any}, ssl=${2:any} )"
		},
		{
			"doc"     : "(ColdBox:controller)",
			"trigger" : "validateAction",
			"snippet" : "controller.validateAction( action=${1:any}, inclusion=${2:any}, exclusion=${3:any} )"
		}
	]
}; }
