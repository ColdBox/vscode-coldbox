export interface CompletionInfo { trigger: string;
 doc?: string;
 snippet: string;
 }

export class CompletionDataStore { static completions: { [key: string]: CompletionInfo[] } = {
	"all": [
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "appendToBuffer",
			"snippet": "appendToBuffer( str=${1:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "clearBuffer",
			"snippet": "clearBuffer( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getBufferObject",
			"snippet": "getBufferObject( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getBufferString",
			"snippet": "getBufferString( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getCachebox",
			"snippet": "getCachebox( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getFlash",
			"snippet": "getFlash( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getInterceptorService",
			"snippet": "getInterceptorService( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getLog",
			"snippet": "getLog( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getLogBox",
			"snippet": "getLogBox( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getProperties",
			"snippet": "getProperties( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getProperty",
			"snippet": "getProperty( property=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "getWirebox",
			"snippet": "getWirebox( )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "propertyExists",
			"snippet": "propertyExists( property=${1:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setCachebox",
			"snippet": "setCachebox( cachebox=${1:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setFlash",
			"snippet": "setFlash( flash=${1:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setInterceptorService",
			"snippet": "setInterceptorService( interceptorService=${1:coldbox.system.services.InterceptorService} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setLog",
			"snippet": "setLog( log=${1:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setLogBox",
			"snippet": "setLogBox( logBox=${1:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setProperties",
			"snippet": "setProperties( properties=${1:{}} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setProperty",
			"snippet": "setProperty( property=${1:any}, value=${2:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "setWirebox",
			"snippet": "setWirebox( wirebox=${1:any} )"
		},
		{
			"doc": "(ColdBox Interceptor)",
			"trigger": "unregister",
			"snippet": "unregister( state=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "addAsset",
			"snippet": "addAsset( asset=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "announceInterception",
			"snippet": "announceInterception( state=${1:any}, interceptData=${2:{}}, async=${3:true,false}, asyncAll=${4:true,false}, asyncAllJoin=${5:true,false}, asyncPriority=${6:any}, asyncJoinTimeout=${7:numeric} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "async",
			"snippet": "async( )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getCache",
			"snippet": "getCache( name=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getController",
			"snippet": "getController( )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getEnv",
			"snippet": "getEnv( key=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getInstance",
			"snippet": "getInstance( name=${1:any}, dsl=${2:any}, initArguments=${3:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getInterceptor",
			"snippet": "getInterceptor( interceptorName=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getModel",
			"snippet": "getModel( name=${1:any}, dsl=${2:any}, initArguments=${3:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getModuleConfig",
			"snippet": "getModuleConfig( module=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getModuleSettings",
			"snippet": "getModuleSettings( module=${1:any}, setting=${2:any}, defaultValue=${3:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getRenderer",
			"snippet": "getRenderer( )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getRequestCollection",
			"snippet": "getRequestCollection( private=${1:true,false} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getRequestContext",
			"snippet": "getRequestContext( )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getSetting",
			"snippet": "getSetting( name=${1:any}, fwSetting=${2:true,false}, defaultValue=${3:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getSettingStructure",
			"snippet": "getSettingStructure( fwSetting=${1:true,false}, deepCopy=${2:true,false} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getSystemProperty",
			"snippet": "getSystemProperty( key=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "getSystemSetting",
			"snippet": "getSystemSetting( key=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "includeUDF",
			"snippet": "includeUDF( udflibrary=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "loadApplicationHelpers",
			"snippet": "loadApplicationHelpers( )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "locateDirectoryPath",
			"snippet": "locateDirectoryPath( pathToCheck=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "locateFilePath",
			"snippet": "locateFilePath( pathToCheck=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "persistVariables",
			"snippet": "persistVariables( persist=${1:any}, persistStruct=${2:{}} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "populateModel",
			"snippet": "populateModel( model=${1:any}, scope=${2:any}, trustedSetter=${3:true,false}, include=${4:any}, exclude=${5:any}, ignoreEmpty=${6:true,false}, nullEmptyInclude=${7:any}, nullEmptyExclude=${8:any}, composeRelationships=${9:true,false}, memento=${10:{}}, jsonstring=\"${11:}\", xml=\"${12:}\", qry=${13:query} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "relocate",
			"snippet": "relocate( event=${1:any}, URL=${2:any}, URI=${3:any}, queryString=${4:any}, persist=${5:any}, persistStruct=${6:{}}, addToken=${7:true,false}, ssl=${8:true,false}, baseURL=${9:any}, postProcessExempt=${10:true,false}, statusCode=${11:numeric} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "renderExternalView",
			"snippet": "renderExternalView( view=${1:any}, args=${2:{}}, cache=${3:true,false}, cacheTimeout=${4:any}, cacheLastAccessTimeout=${5:any}, cacheSuffix=${6:any}, cacheProvider=${7:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "renderLayout",
			"snippet": "renderLayout( layout=${1:any}, module=${2:any}, view=${3:any}, args=${4:{}}, viewModule=${5:any}, prePostExempt=${6:true,false} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "renderView",
			"snippet": "renderView( view=${1:any}, args=${2:{}}, module=${3:any}, cache=${4:true,false}, cacheTimeout=${5:any}, cacheLastAccessTimeout=${6:any}, cacheSuffix=${7:any}, cacheProvider=${8:any}, collection=${9:any}, collectionAs=${10:any}, collectionStartRow=${11:numeric}, collectionMaxRows=${12:numeric}, collectionDelim=${13:any}, prePostExempt=${14:true,false}, name=${15:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "runEvent",
			"snippet": "runEvent( event=${1:any}, prePostExempt=${2:true,false}, private=${3:true,false}, defaultEvent=${4:true,false}, eventArguments=${5:{}}, cache=${6:true,false}, cacheTimeout=${7:any}, cacheLastAccessTimeout=${8:any}, cacheSuffix=${9:any}, cacheProvider=${10:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "runRoute",
			"snippet": "runRoute( name=${1:any}, params=${2:{}}, cache=${3:true,false}, cacheTimeout=${4:any}, cacheLastAccessTimeout=${5:any}, cacheSuffix=${6:any}, cacheProvider=${7:any}, prePostExempt=${8:true,false} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "setController",
			"snippet": "setController( controller=${1:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "setNextEvent",
			"snippet": "setNextEvent( event=${1:any}, URL=${2:any}, URI=${3:any}, queryString=${4:any}, persist=${5:any}, persistStruct=${6:{}}, addToken=${7:true,false}, ssl=${8:true,false}, baseURL=${9:any}, postProcessExempt=${10:true,false}, statusCode=${11:numeric} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "setSetting",
			"snippet": "setSetting( name=${1:any}, value=${2:any} )"
		},
		{
			"doc": "(ColdBox FrameworkSuperType)",
			"trigger": "settingExists",
			"snippet": "settingExists( name=${1:any}, fwSetting=${2:true,false} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "_actionExists",
			"snippet": "_actionExists( action=${1:any} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "_actionMetadata",
			"snippet": "_actionMetadata( action=${1:any} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "_privateInvoker",
			"snippet": "_privateInvoker( method=${1:any}, argCollection=${2:any} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "getCachebox",
			"snippet": "getCachebox( )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "getFlash",
			"snippet": "getFlash( )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "getLog",
			"snippet": "getLog( )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "getLogBox",
			"snippet": "getLogBox( )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "getWirebox",
			"snippet": "getWirebox( )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "setCachebox",
			"snippet": "setCachebox( cachebox=${1:any} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "setFlash",
			"snippet": "setFlash( flash=${1:any} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "setLog",
			"snippet": "setLog( log=${1:any} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "setLogBox",
			"snippet": "setLogBox( logBox=${1:any} )"
		},
		{
			"doc": "(ColdBox EventHandler)",
			"trigger": "setWirebox",
			"snippet": "setWirebox( wirebox=${1:any} )"
		}
	],
	"cachebox": [
		{
			"doc": "(TestBox cachebox)",
			"trigger": "addCache",
			"snippet": "cachebox.addCache( cache=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "addDefaultCache",
			"snippet": "cachebox.addDefaultCache( name=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "cacheExists",
			"snippet": "cachebox.cacheExists( name=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "clearAll",
			"snippet": "cachebox.clearAll( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "configureEventManager",
			"snippet": "cachebox.configureEventManager( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "configureLogBox",
			"snippet": "cachebox.configureLogBox( configPath=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "createCache",
			"snippet": "cachebox.createCache( name=${1:any}, provider=${2:any}, properties=${3:{}} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "doScopeRegistration",
			"snippet": "cachebox.doScopeRegistration( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "expireAll",
			"snippet": "cachebox.expireAll( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getCache",
			"snippet": "cachebox.getCache( name=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getCacheNames",
			"snippet": "cachebox.getCacheNames( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getCaches",
			"snippet": "cachebox.getCaches( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getColdbox",
			"snippet": "cachebox.getColdbox( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getConfig",
			"snippet": "cachebox.getConfig( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getDefaultCache",
			"snippet": "cachebox.getDefaultCache( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getEventManager",
			"snippet": "cachebox.getEventManager( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getEventStates",
			"snippet": "cachebox.getEventStates( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getFactoryId",
			"snippet": "cachebox.getFactoryId( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getLog",
			"snippet": "cachebox.getLog( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getLogbox",
			"snippet": "cachebox.getLogbox( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getScopeRegistration",
			"snippet": "cachebox.getScopeRegistration( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getUtil",
			"snippet": "cachebox.getUtil( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "getVersion",
			"snippet": "cachebox.getVersion( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "isColdBoxLinked",
			"snippet": "cachebox.isColdBoxLinked( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "reapAll",
			"snippet": "cachebox.reapAll( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "registerCache",
			"snippet": "cachebox.registerCache( cache=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "registerListeners",
			"snippet": "cachebox.registerListeners( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "removeAll",
			"snippet": "cachebox.removeAll( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "removeCache",
			"snippet": "cachebox.removeCache( name=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "removeFromScope",
			"snippet": "cachebox.removeFromScope( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "replaceCache",
			"snippet": "cachebox.replaceCache( cache=${1:any}, decoratedCache=${2:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setCaches",
			"snippet": "cachebox.setCaches( caches=${1:{}} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setColdbox",
			"snippet": "cachebox.setColdbox( coldbox=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setConfig",
			"snippet": "cachebox.setConfig( config=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setEventManager",
			"snippet": "cachebox.setEventManager( eventManager=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setEventStates",
			"snippet": "cachebox.setEventStates( eventStates=${1:[]} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setFactoryId",
			"snippet": "cachebox.setFactoryId( factoryId=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setLog",
			"snippet": "cachebox.setLog( log=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setLogbox",
			"snippet": "cachebox.setLogbox( logbox=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "setVersion",
			"snippet": "cachebox.setVersion( version=${1:any} )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "shutdown",
			"snippet": "cachebox.shutdown( )"
		},
		{
			"doc": "(TestBox cachebox)",
			"trigger": "shutdownCache",
			"snippet": "cachebox.shutdownCache( name=${1:any} )"
		}
	],
	"logbox": [
		{
			"doc": "(TestBox logbox)",
			"trigger": "getAppenderRegistry",
			"snippet": "logbox.getAppenderRegistry( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getAppendersMap",
			"snippet": "logbox.getAppendersMap( appenders=${1:any} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getCategoryAppenders",
			"snippet": "logbox.getCategoryAppenders( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getColdbox",
			"snippet": "logbox.getColdbox( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getConfig",
			"snippet": "logbox.getConfig( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getCurrentAppenders",
			"snippet": "logbox.getCurrentAppenders( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getCurrentLoggers",
			"snippet": "logbox.getCurrentLoggers( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getLogBoxID",
			"snippet": "logbox.getLogBoxID( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getLogger",
			"snippet": "logbox.getLogger( category=${1:any} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getLoggerRegistry",
			"snippet": "logbox.getLoggerRegistry( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getRootLogger",
			"snippet": "logbox.getRootLogger( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getUtil",
			"snippet": "logbox.getUtil( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "getVersion",
			"snippet": "logbox.getVersion( )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "locateCategoryParentLogger",
			"snippet": "logbox.locateCategoryParentLogger( category=${1:any} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "registerAppender",
			"snippet": "logbox.registerAppender( name=${1:any}, class=${2:any}, properties=${3:{}}, layout=${4:any}, levelMin=${5:numeric}, levelMax=${6:numeric} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "setAppenderRegistry",
			"snippet": "logbox.setAppenderRegistry( appenderRegistry=${1:{}} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "setCategoryAppenders",
			"snippet": "logbox.setCategoryAppenders( categoryAppenders=${1:any} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "setColdbox",
			"snippet": "logbox.setColdbox( coldbox=${1:any} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "setConfig",
			"snippet": "logbox.setConfig( config=${1:any} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "setLogBoxID",
			"snippet": "logbox.setLogBoxID( logBoxID=${1:any} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "setLoggerRegistry",
			"snippet": "logbox.setLoggerRegistry( loggerRegistry=${1:{}} )"
		},
		{
			"doc": "(TestBox logbox)",
			"trigger": "setVersion",
			"snippet": "logbox.setVersion( version=${1:any} )"
		}
	],
	"binder": [
		{
			"doc": "(TestBox binder)",
			"trigger": "asEagerInit",
			"snippet": "binder.asEagerInit( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "asSingleton",
			"snippet": "binder.asSingleton( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "bindAspect",
			"snippet": "binder.bindAspect( classes=${1:coldbox.system.aop.Matcher}, methods=${2:coldbox.system.aop.Matcher}, aspects=${3:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "cacheBox",
			"snippet": "binder.cacheBox( configFile=${1:any}, cacheFactory=${2:any}, enabled=${3:any}, classNamespace=${4:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "constructor",
			"snippet": "binder.constructor( constructor=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "extraAttributes",
			"snippet": "binder.extraAttributes( data=${1:{}} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getAppMapping",
			"snippet": "binder.getAppMapping( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getAspectBindings",
			"snippet": "binder.getAspectBindings( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getCacheBoxConfig",
			"snippet": "binder.getCacheBoxConfig( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getColdBox",
			"snippet": "binder.getColdBox( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getCurrentMapping",
			"snippet": "binder.getCurrentMapping( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getCustomDSL",
			"snippet": "binder.getCustomDSL( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getCustomScopes",
			"snippet": "binder.getCustomScopes( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getDefaults",
			"snippet": "binder.getDefaults( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getInjector",
			"snippet": "binder.getInjector( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getListeners",
			"snippet": "binder.getListeners( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getLogBoxConfig",
			"snippet": "binder.getLogBoxConfig( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getMapping",
			"snippet": "binder.getMapping( name=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getMappings",
			"snippet": "binder.getMappings( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getMemento",
			"snippet": "binder.getMemento( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getMetadataCache",
			"snippet": "binder.getMetadataCache( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getParentInjector",
			"snippet": "binder.getParentInjector( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getProperties",
			"snippet": "binder.getProperties( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getProperty",
			"snippet": "binder.getProperty( name=${1:any}, default=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getScanLocations",
			"snippet": "binder.getScanLocations( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getScopeRegistration",
			"snippet": "binder.getScopeRegistration( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "getStopRecursions",
			"snippet": "binder.getStopRecursions( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "inCacheBox",
			"snippet": "binder.inCacheBox( key=${1:any}, timeout=${2:any}, lastAccessTimeout=${3:any}, provider=${4:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "initArg",
			"snippet": "binder.initArg( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any}, required=${6:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "initWith",
			"snippet": "binder.initWith( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "into",
			"snippet": "binder.into( scope=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "listener",
			"snippet": "binder.listener( class=${1:any}, properties=${2:any}, name=${3:any}, register=${4:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "loadDataDSL",
			"snippet": "binder.loadDataDSL( rawDSL=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "logBoxConfig",
			"snippet": "binder.logBoxConfig( config=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "map",
			"snippet": "binder.map( alias=${1:any}, force=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "mapAspect",
			"snippet": "binder.mapAspect( aspect=${1:any}, autoBinding=${2:true,false} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "mapDSL",
			"snippet": "binder.mapDSL( namespace=${1:any}, path=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "mapDirectory",
			"snippet": "binder.mapDirectory( packagePath=${1:any}, include=${2:any}, exclude=${3:any}, influence=${4:any}, filter=${5:any}, namespace=${6:any}, prepend=${7:any}, process=${8:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "mapPath",
			"snippet": "binder.mapPath( path=${1:any}, namespace=${2:any}, prepend=${3:any}, force=${4:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "mapScope",
			"snippet": "binder.mapScope( annotation=${1:any}, path=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "mappingExists",
			"snippet": "binder.mappingExists( name=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "match",
			"snippet": "binder.match( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "methodArg",
			"snippet": "binder.methodArg( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "mixins",
			"snippet": "binder.mixins( mixins=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "noAutowire",
			"snippet": "binder.noAutowire( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "noInit",
			"snippet": "binder.noInit( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "notThreadSafe",
			"snippet": "binder.notThreadSafe( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "onDIComplete",
			"snippet": "binder.onDIComplete( methods=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "parent",
			"snippet": "binder.parent( alias=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "parentInjector",
			"snippet": "binder.parentInjector( injector=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "process",
			"snippet": "binder.process( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "processMappings",
			"snippet": "binder.processMappings( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "property",
			"snippet": "binder.property( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any}, scope=${6:any}, required=${7:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "propertyExists",
			"snippet": "binder.propertyExists( name=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "providerMethod",
			"snippet": "binder.providerMethod( method=${1:any}, mapping=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "removeScanLocations",
			"snippet": "binder.removeScanLocations( locations=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "reset",
			"snippet": "binder.reset( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "scanLocations",
			"snippet": "binder.scanLocations( locations=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "scopeRegistration",
			"snippet": "binder.scopeRegistration( enabled=${1:any}, scope=${2:any}, key=${3:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "setMapping",
			"snippet": "binder.setMapping( name=${1:any}, mapping=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "setMetadataCache",
			"snippet": "binder.setMetadataCache( metadataCache=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "setProperties",
			"snippet": "binder.setProperties( properties=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "setProperty",
			"snippet": "binder.setProperty( name=${1:any}, value=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "setter",
			"snippet": "binder.setter( name=${1:any}, ref=${2:any}, dsl=${3:any}, value=${4:any}, javaCast=${5:any}, argName=${6:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "stopRecursions",
			"snippet": "binder.stopRecursions( classes=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "threadSafe",
			"snippet": "binder.threadSafe( )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "to",
			"snippet": "binder.to( path=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "toDSL",
			"snippet": "binder.toDSL( dsl=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "toFactoryMethod",
			"snippet": "binder.toFactoryMethod( factory=${1:any}, method=${2:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "toJava",
			"snippet": "binder.toJava( path=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "toProvider",
			"snippet": "binder.toProvider( provider=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "toRSS",
			"snippet": "binder.toRSS( path=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "toValue",
			"snippet": "binder.toValue( value=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "toWebservice",
			"snippet": "binder.toWebservice( path=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "unMap",
			"snippet": "binder.unMap( name=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "virtualInheritance",
			"snippet": "binder.virtualInheritance( mapping=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "with",
			"snippet": "binder.with( alias=${1:any} )"
		},
		{
			"doc": "(TestBox binder)",
			"trigger": "withInfluence",
			"snippet": "binder.withInfluence( influenceClosure=${1:any} )"
		}
	],
	"log": [
		{
			"doc": "(TestBox log)",
			"trigger": "addAppender",
			"snippet": "log.addAppender( newAppender=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "appenderExists",
			"snippet": "log.appenderExists( name=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "canDebug",
			"snippet": "log.canDebug( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "canError",
			"snippet": "log.canError( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "canFatal",
			"snippet": "log.canFatal( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "canInfo",
			"snippet": "log.canInfo( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "canLog",
			"snippet": "log.canLog( level=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "canWarn",
			"snippet": "log.canWarn( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "debug",
			"snippet": "log.debug( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "error",
			"snippet": "log.error( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "fatal",
			"snippet": "log.fatal( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "getAppender",
			"snippet": "log.getAppender( name=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "getAppenders",
			"snippet": "log.getAppenders( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "getCategory",
			"snippet": "log.getCategory( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "getLevelMax",
			"snippet": "log.getLevelMax( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "getLevelMin",
			"snippet": "log.getLevelMin( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "getRootLogger",
			"snippet": "log.getRootLogger( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "hasAppenders",
			"snippet": "log.hasAppenders( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "info",
			"snippet": "log.info( message=${1:any}, extraInfo=${2:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "logMessage",
			"snippet": "log.logMessage( message=${1:any}, severity=${2:any}, extraInfo=${3:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "removeAllAppenders",
			"snippet": "log.removeAllAppenders( )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "removeAppender",
			"snippet": "log.removeAppender( name=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "setAppenders",
			"snippet": "log.setAppenders( appenders=${1:{}} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "setCategory",
			"snippet": "log.setCategory( category=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "setLevelMax",
			"snippet": "log.setLevelMax( levelMax=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "setLevelMin",
			"snippet": "log.setLevelMin( levelMin=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "setRootLogger",
			"snippet": "log.setRootLogger( rootLogger=${1:any} )"
		},
		{
			"doc": "(TestBox log)",
			"trigger": "warn",
			"snippet": "log.warn( message=${1:any}, extraInfo=${2:any} )"
		}
	],
	"assert": [
		{
			"doc": "(ColdBox assert)",
			"trigger": "assert",
			"snippet": "assert.assert( expression=${1:true,false}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "between",
			"snippet": "assert.between( actual=${1:any}, min=${2:any}, max=${3:any}, message=${4:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "closeTo",
			"snippet": "assert.closeTo( expected=${1:any}, actual=${2:any}, delta=${3:any}, datePart=${4:any}, message=${5:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "deepKey",
			"snippet": "assert.deepKey( target=${1:{}}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "equalize",
			"snippet": "assert.equalize( expected=${1:any}, actual=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "fail",
			"snippet": "assert.fail( message=${1:any}, detail=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "getIdentityHashCode",
			"snippet": "assert.getIdentityHashCode( target=${1:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "getStringName",
			"snippet": "assert.getStringName( obj=${1:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "getTargetLength",
			"snippet": "assert.getTargetLength( target=${1:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "includes",
			"snippet": "assert.includes( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "includesWithCase",
			"snippet": "assert.includesWithCase( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "instanceOf",
			"snippet": "assert.instanceOf( actual=${1:any}, typeName=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isEmpty",
			"snippet": "assert.isEmpty( target=${1:any}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isEqual",
			"snippet": "assert.isEqual( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isEqualWithCase",
			"snippet": "assert.isEqualWithCase( expected=\"${1:}\", actual=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isFalse",
			"snippet": "assert.isFalse( actual=${1:true,false}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isGT",
			"snippet": "assert.isGT( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isGTE",
			"snippet": "assert.isGTE( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isJSON",
			"snippet": "assert.isJSON( actual=${1:any}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isLT",
			"snippet": "assert.isLT( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isLTE",
			"snippet": "assert.isLTE( actual=${1:any}, target=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isNotEmpty",
			"snippet": "assert.isNotEmpty( target=${1:any}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isNotEqual",
			"snippet": "assert.isNotEqual( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isNotSameInstance",
			"snippet": "assert.isNotSameInstance( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isSameInstance",
			"snippet": "assert.isSameInstance( expected=${1:any}, actual=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "isTrue",
			"snippet": "assert.isTrue( actual=${1:true,false}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "key",
			"snippet": "assert.key( target=${1:any}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "lengthOf",
			"snippet": "assert.lengthOf( target=${1:any}, length=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "match",
			"snippet": "assert.match( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "matchWithCase",
			"snippet": "assert.matchWithCase( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notDeepKey",
			"snippet": "assert.notDeepKey( target=${1:{}}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notIncludes",
			"snippet": "assert.notIncludes( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notIncludesWithCase",
			"snippet": "assert.notIncludesWithCase( target=${1:any}, needle=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notInstanceOf",
			"snippet": "assert.notInstanceOf( actual=${1:any}, typeName=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notKey",
			"snippet": "assert.notKey( target=${1:any}, key=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notLengthOf",
			"snippet": "assert.notLengthOf( target=${1:any}, length=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notMatch",
			"snippet": "assert.notMatch( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notMatchWithCase",
			"snippet": "assert.notMatchWithCase( actual=\"${1:}\", regex=\"${2:}\", message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notNull",
			"snippet": "assert.notNull( actual=${1:any}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notThrows",
			"snippet": "assert.notThrows( target=${1:any}, type=${2:any}, regex=${3:any}, message=${4:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "notTypeOf",
			"snippet": "assert.notTypeOf( type=\"${1:}\", actual=${2:any}, message=${3:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "null",
			"snippet": "assert.null( actual=${1:any}, message=${2:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "throws",
			"snippet": "assert.throws( target=${1:any}, type=${2:any}, regex=${3:any}, message=${4:any} )"
		},
		{
			"doc": "(ColdBox assert)",
			"trigger": "typeOf",
			"snippet": "assert.typeOf( type=\"${1:}\", actual=${2:any}, message=${3:any} )"
		}
	],
	"wirebox": [
		{
			"doc": "(TestBox wirebox)",
			"trigger": "autowire",
			"snippet": "wirebox.autowire( target=${1:any}, mapping=${2:any}, targetID=${3:any}, annotationCheck=${4:true,false} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "buildBinder",
			"snippet": "wirebox.buildBinder( binder=${1:any}, properties=${2:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "buildInstance",
			"snippet": "wirebox.buildInstance( mapping=${1:any}, initArguments=${2:{}} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "clearSingletons",
			"snippet": "wirebox.clearSingletons( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "configureCacheBox",
			"snippet": "wirebox.configureCacheBox( config=${1:{}} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "configureEventManager",
			"snippet": "wirebox.configureEventManager( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "configureLogBox",
			"snippet": "wirebox.configureLogBox( configPath=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "containsInstance",
			"snippet": "wirebox.containsInstance( name=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "doScopeRegistration",
			"snippet": "wirebox.doScopeRegistration( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getBinder",
			"snippet": "wirebox.getBinder( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getCacheBox",
			"snippet": "wirebox.getCacheBox( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getColdbox",
			"snippet": "wirebox.getColdbox( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getEventManager",
			"snippet": "wirebox.getEventManager( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getEventStates",
			"snippet": "wirebox.getEventStates( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getInjectorID",
			"snippet": "wirebox.getInjectorID( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getInstance",
			"snippet": "wirebox.getInstance( name=${1:any}, dsl=${2:any}, initArguments=${3:{}}, targetObject=${4:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getJavaSystem",
			"snippet": "wirebox.getJavaSystem( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getLog",
			"snippet": "wirebox.getLog( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getLogBox",
			"snippet": "wirebox.getLogBox( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getObjectPopulator",
			"snippet": "wirebox.getObjectPopulator( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getParent",
			"snippet": "wirebox.getParent( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getScope",
			"snippet": "wirebox.getScope( scope=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getScopeRegistration",
			"snippet": "wirebox.getScopeRegistration( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getScopeStorage",
			"snippet": "wirebox.getScopeStorage( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getScopes",
			"snippet": "wirebox.getScopes( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getUtil",
			"snippet": "wirebox.getUtil( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getUtility",
			"snippet": "wirebox.getUtility( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "getVersion",
			"snippet": "wirebox.getVersion( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "injectTarget",
			"snippet": "wirebox.injectTarget( target=${1:any}, propertyName=${2:any}, propertyObject=${3:any}, scope=${4:any}, argName=${5:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "isCacheBoxLinked",
			"snippet": "wirebox.isCacheBoxLinked( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "isColdBoxLinked",
			"snippet": "wirebox.isColdBoxLinked( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "locateInstance",
			"snippet": "wirebox.locateInstance( name=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "locateScopedSelf",
			"snippet": "wirebox.locateScopedSelf( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "processAfterCompleteDI",
			"snippet": "wirebox.processAfterCompleteDI( targetObject=${1:any}, DICompleteMethods=${2:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "processInjection",
			"snippet": "wirebox.processInjection( targetObject=${1:any}, DIData=${2:any}, targetID=${3:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "processMixins",
			"snippet": "wirebox.processMixins( targetObject=${1:any}, mapping=${2:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "processProviderMethods",
			"snippet": "wirebox.processProviderMethods( targetObject=${1:any}, mapping=${2:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "registerDSL",
			"snippet": "wirebox.registerDSL( namespace=${1:any}, path=${2:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "registerListener",
			"snippet": "wirebox.registerListener( listener=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "registerListeners",
			"snippet": "wirebox.registerListeners( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "registerNewInstance",
			"snippet": "wirebox.registerNewInstance( name=${1:any}, instancePath=${2:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "registerScopes",
			"snippet": "wirebox.registerScopes( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "removeFromScope",
			"snippet": "wirebox.removeFromScope( )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setBinder",
			"snippet": "wirebox.setBinder( binder=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setCacheBox",
			"snippet": "wirebox.setCacheBox( cacheBox=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setColdbox",
			"snippet": "wirebox.setColdbox( coldbox=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setEventManager",
			"snippet": "wirebox.setEventManager( eventManager=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setEventStates",
			"snippet": "wirebox.setEventStates( eventStates=${1:[]} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setInjectorID",
			"snippet": "wirebox.setInjectorID( injectorID=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setJavaSystem",
			"snippet": "wirebox.setJavaSystem( javaSystem=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setLog",
			"snippet": "wirebox.setLog( log=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setLogBox",
			"snippet": "wirebox.setLogBox( logBox=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setParent",
			"snippet": "wirebox.setParent( injector=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setScopeStorage",
			"snippet": "wirebox.setScopeStorage( scopeStorage=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setScopes",
			"snippet": "wirebox.setScopes( scopes=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setUtility",
			"snippet": "wirebox.setUtility( utility=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "setVersion",
			"snippet": "wirebox.setVersion( version=${1:any} )"
		},
		{
			"doc": "(TestBox wirebox)",
			"trigger": "shutdown",
			"snippet": "wirebox.shutdown( )"
		}
	],
	"flash": [
		{
			"doc": "(TestBox flash)",
			"trigger": "clear",
			"snippet": "flash.clear( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "clearFlash",
			"snippet": "flash.clearFlash( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "discard",
			"snippet": "flash.discard( keys=\"${1:}\" )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "exists",
			"snippet": "flash.exists( name=${1:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "flashExists",
			"snippet": "flash.flashExists( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "get",
			"snippet": "flash.get( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getAll",
			"snippet": "flash.getAll( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getController",
			"snippet": "flash.getController( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getDefaults",
			"snippet": "flash.getDefaults( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getFlash",
			"snippet": "flash.getFlash( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getKeys",
			"snippet": "flash.getKeys( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getProperties",
			"snippet": "flash.getProperties( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getProperty",
			"snippet": "flash.getProperty( property=${1:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getScope",
			"snippet": "flash.getScope( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "getUtil",
			"snippet": "flash.getUtil( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "inflateFlash",
			"snippet": "flash.inflateFlash( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "isEmpty",
			"snippet": "flash.isEmpty( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "keep",
			"snippet": "flash.keep( keys=\"${1:}\" )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "persistRC",
			"snippet": "flash.persistRC( include=${1:any}, exclude=${2:any}, saveNow=${3:true,false} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "propertyExists",
			"snippet": "flash.propertyExists( property=${1:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "put",
			"snippet": "flash.put( name=\"${1:}\", value=${2:any}, saveNow=${3:true,false}, keep=${4:true,false}, inflateToRC=${5:true,false}, inflateToPRC=${6:true,false}, autoPurge=${7:true,false} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "putAll",
			"snippet": "flash.putAll( map=${1:{}}, saveNow=${2:true,false}, keep=${3:true,false}, inflateToRC=${4:true,false}, inflateToPRC=${5:true,false}, autoPurge=${6:true,false} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "remove",
			"snippet": "flash.remove( name=${1:any}, saveNow=${2:true,false} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "removeFlash",
			"snippet": "flash.removeFlash( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "saveFlash",
			"snippet": "flash.saveFlash( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "setController",
			"snippet": "flash.setController( controller=${1:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "setDefaults",
			"snippet": "flash.setDefaults( defaults=${1:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "setProperties",
			"snippet": "flash.setProperties( properties=${1:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "setProperty",
			"snippet": "flash.setProperty( property=${1:any}, value=${2:any} )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "size",
			"snippet": "flash.size( )"
		},
		{
			"doc": "(TestBox flash)",
			"trigger": "statusMarks",
			"snippet": "flash.statusMarks( keys=\"${1:}\", keep=${2:true,false} )"
		}
	],
	"event": [
		{
			"doc": "(TestBox event)",
			"trigger": "buildLink",
			"snippet": "event.buildLink( to=${1:any}, translate=${2:true,false}, ssl=${3:true,false}, baseURL=${4:any}, queryString=${5:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "clearCollection",
			"snippet": "event.clearCollection( private=${1:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "clearPrivateCollection",
			"snippet": "event.clearPrivateCollection( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "collectionAppend",
			"snippet": "event.collectionAppend( collection=${1:{}}, overwrite=${2:true,false}, private=${3:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCollection",
			"snippet": "event.getCollection( deepCopy=${1:true,false}, private=${2:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getContext",
			"snippet": "event.getContext( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getController",
			"snippet": "event.getController( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentAction",
			"snippet": "event.getCurrentAction( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentEvent",
			"snippet": "event.getCurrentEvent( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentHandler",
			"snippet": "event.getCurrentHandler( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentLayout",
			"snippet": "event.getCurrentLayout( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentLayoutModule",
			"snippet": "event.getCurrentLayoutModule( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentModule",
			"snippet": "event.getCurrentModule( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentRoute",
			"snippet": "event.getCurrentRoute( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentRouteName",
			"snippet": "event.getCurrentRouteName( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentRoutedModule",
			"snippet": "event.getCurrentRoutedModule( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentRoutedNamespace",
			"snippet": "event.getCurrentRoutedNamespace( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentRoutedURL",
			"snippet": "event.getCurrentRoutedURL( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentView",
			"snippet": "event.getCurrentView( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentViewArgs",
			"snippet": "event.getCurrentViewArgs( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getCurrentViewModule",
			"snippet": "event.getCurrentViewModule( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getDefaultLayout",
			"snippet": "event.getDefaultLayout( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getDefaultView",
			"snippet": "event.getDefaultView( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getEventCacheableEntry",
			"snippet": "event.getEventCacheableEntry( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getEventName",
			"snippet": "event.getEventName( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getExcept",
			"snippet": "event.getExcept( keys=${1:any}, private=${2:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getFileMimeType",
			"snippet": "event.getFileMimeType( extension=\"${1:}\" )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getFolderLayouts",
			"snippet": "event.getFolderLayouts( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getFullURL",
			"snippet": "event.getFullURL( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getHTMLBaseURL",
			"snippet": "event.getHTMLBaseURL( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getHTTPBasicCredentials",
			"snippet": "event.getHTTPBasicCredentials( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getHTTPContent",
			"snippet": "event.getHTTPContent( json=${1:true,false}, xml=${2:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getHTTPHeader",
			"snippet": "event.getHTTPHeader( header=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getHTTPMethod",
			"snippet": "event.getHTTPMethod( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getIsNoExecution",
			"snippet": "event.getIsNoExecution( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getMemento",
			"snippet": "event.getMemento( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getModuleEntryPoint",
			"snippet": "event.getModuleEntryPoint( module=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getModuleRoot",
			"snippet": "event.getModuleRoot( module=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getOnly",
			"snippet": "event.getOnly( keys=${1:any}, private=${2:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getPrivateCollection",
			"snippet": "event.getPrivateCollection( deepCopy=${1:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getPrivateContext",
			"snippet": "event.getPrivateContext( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getPrivateExcept",
			"snippet": "event.getPrivateExcept( keys=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getPrivateOnly",
			"snippet": "event.getPrivateOnly( keys=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getPrivateSize",
			"snippet": "event.getPrivateSize( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getPrivateTrimValue",
			"snippet": "event.getPrivateTrimValue( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getPrivateValue",
			"snippet": "event.getPrivateValue( name=${1:any}, defaultValue=${2:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getProperties",
			"snippet": "event.getProperties( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getRegisteredLayouts",
			"snippet": "event.getRegisteredLayouts( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getRenderData",
			"snippet": "event.getRenderData( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getRenderingRegions",
			"snippet": "event.getRenderingRegions( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getResponseHeaders",
			"snippet": "event.getResponseHeaders( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getRoutedStruct",
			"snippet": "event.getRoutedStruct( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getSESBaseURL",
			"snippet": "event.getSESBaseURL( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getSESEnabled",
			"snippet": "event.getSESEnabled( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getSelf",
			"snippet": "event.getSelf( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getSize",
			"snippet": "event.getSize( private=${1:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getTrimValue",
			"snippet": "event.getTrimValue( name=${1:any}, defaultValue=${2:any}, private=${3:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getValue",
			"snippet": "event.getValue( name=${1:any}, defaultValue=${2:any}, private=${3:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getViewCacheableEntry",
			"snippet": "event.getViewCacheableEntry( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "getViewLayouts",
			"snippet": "event.getViewLayouts( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isAjax",
			"snippet": "event.isAjax( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isEventCacheable",
			"snippet": "event.isEventCacheable( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isInvalidHTTPMethod",
			"snippet": "event.isInvalidHTTPMethod( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isNoRender",
			"snippet": "event.isNoRender( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isProxyRequest",
			"snippet": "event.isProxyRequest( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isSES",
			"snippet": "event.isSES( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isSSL",
			"snippet": "event.isSSL( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "isViewCacheable",
			"snippet": "event.isViewCacheable( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "noExecution",
			"snippet": "event.noExecution( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "noLayout",
			"snippet": "event.noLayout( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "noRender",
			"snippet": "event.noRender( remove=${1:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "overrideEvent",
			"snippet": "event.overrideEvent( event=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "paramPrivateValue",
			"snippet": "event.paramPrivateValue( name=${1:any}, value=${2:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "paramValue",
			"snippet": "event.paramValue( name=${1:any}, value=${2:any}, private=${3:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "privateCollectionAppend",
			"snippet": "event.privateCollectionAppend( collection=${1:{}}, overwrite=${2:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "privateValueExists",
			"snippet": "event.privateValueExists( name=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "removeEventCacheableEntry",
			"snippet": "event.removeEventCacheableEntry( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "removePrivateValue",
			"snippet": "event.removePrivateValue( name=${1:any}, private=${2:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "removeValue",
			"snippet": "event.removeValue( name=${1:any}, private=${2:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "renderData",
			"snippet": "event.renderData( type=${1:any}, data=${2:any}, contentType=${3:any}, encoding=${4:any}, statusCode=${5:numeric}, statusText=${6:any}, location=${7:any}, jsonCallback=${8:any}, jsonQueryFormat=${9:any}, jsonAsText=${10:true,false}, xmlColumnList=${11:any}, xmlUseCDATA=${12:true,false}, xmlListDelimiter=${13:any}, xmlRootName=${14:any}, pdfArgs=${15:{}}, formats=${16:any}, formatsView=${17:any}, formatsRedirect=${18:any}, isBinary=${19:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "renderWithFormats",
			"snippet": "event.renderWithFormats( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "route",
			"snippet": "event.route( name=${1:any}, params=${2:{}}, ssl=${3:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "sendFile",
			"snippet": "event.sendFile( file=${1:any}, name=${2:any}, mimeType=${3:any}, disposition=${4:any}, abortAtEnd=${5:true,false}, extension=${6:any}, deleteFile=${7:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setContext",
			"snippet": "event.setContext( context=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setController",
			"snippet": "event.setController( controller=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setDefaultLayout",
			"snippet": "event.setDefaultLayout( defaultLayout=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setDefaultView",
			"snippet": "event.setDefaultView( defaultView=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setEventCacheableEntry",
			"snippet": "event.setEventCacheableEntry( cacheEntry=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setEventName",
			"snippet": "event.setEventName( eventName=${1:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setFolderLayouts",
			"snippet": "event.setFolderLayouts( folderLayouts=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setHTTPHeader",
			"snippet": "event.setHTTPHeader( statusCode=${1:any}, statusText=${2:any}, name=${3:any}, value=${4:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setIsInvalidHTTPMethod",
			"snippet": "event.setIsInvalidHTTPMethod( target=${1:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setIsNoExecution",
			"snippet": "event.setIsNoExecution( isNoExecution=${1:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setLayout",
			"snippet": "event.setLayout( name=${1:any}, module=${2:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setMemento",
			"snippet": "event.setMemento( memento=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setPrivateContext",
			"snippet": "event.setPrivateContext( privateContext=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setPrivateValue",
			"snippet": "event.setPrivateValue( name=${1:any}, value=${2:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setProperties",
			"snippet": "event.setProperties( properties=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setProxyRequest",
			"snippet": "event.setProxyRequest( )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setRegisteredLayouts",
			"snippet": "event.setRegisteredLayouts( registeredLayouts=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setRenderingRegions",
			"snippet": "event.setRenderingRegions( renderingRegions=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setResponseHeaders",
			"snippet": "event.setResponseHeaders( responseHeaders=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setRoutedStruct",
			"snippet": "event.setRoutedStruct( routedStruct=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setSESBaseURL",
			"snippet": "event.setSESBaseURL( sesBaseURL=\"${1:}\" )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setSESEnabled",
			"snippet": "event.setSESEnabled( flag=${1:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setValue",
			"snippet": "event.setValue( name=${1:any}, value=${2:any}, private=${3:true,false} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setView",
			"snippet": "event.setView( view=${1:any}, args=${2:{}}, layout=${3:any}, module=${4:any}, noLayout=${5:true,false}, cache=${6:true,false}, cacheTimeout=${7:any}, cacheLastAccessTimeout=${8:any}, cacheSuffix=${9:any}, cacheProvider=${10:any}, name=${11:any} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setViewCacheableEntry",
			"snippet": "event.setViewCacheableEntry( cacheEntry=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "setViewLayouts",
			"snippet": "event.setViewLayouts( viewLayouts=${1:{}} )"
		},
		{
			"doc": "(TestBox event)",
			"trigger": "valueExists",
			"snippet": "event.valueExists( name=${1:any}, private=${2:true,false} )"
		}
	],
	"html": [
		{
			"doc": "(TestBox html)",
			"trigger": "$htmlHead",
			"snippet": "html.$htmlHead( content=${1:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "addAsset",
			"snippet": "html.addAsset( asset=${1:any}, sendToHeader=${2:true,false}, async=${3:true,false}, defer=${4:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "addJSContent",
			"snippet": "html.addJSContent( content=${1:any}, sendToHeader=${2:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "addStyleContent",
			"snippet": "html.addStyleContent( content=${1:any}, sendToHeader=${2:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "anchor",
			"snippet": "html.anchor( name=${1:any}, text=${2:any}, data=${3:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "arrayToTable",
			"snippet": "html.arrayToTable( data=${1:any}, includes=\"${2:}\", excludes=\"${3:}\", buffer=${4:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "audio",
			"snippet": "html.audio( src=${1:any}, autoplay=${2:true,false}, controls=${3:true,false}, loop=${4:true,false}, preload=${5:true,false}, noBaseURL=${6:true,false}, name=${7:any}, data=${8:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "autoDiscoveryLink",
			"snippet": "html.autoDiscoveryLink( type=${1:any}, href=${2:any}, rel=${3:any}, title=${4:any}, data=${5:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "bindValue",
			"snippet": "html.bindValue( args=${1:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "br",
			"snippet": "html.br( count=${1:numeric} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "button",
			"snippet": "html.button( name=${1:any}, value=${2:any}, disabled=${3:true,false}, type=${4:any}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "canvas",
			"snippet": "html.canvas( id=${1:any}, width=${2:any}, height=${3:any}, data=${4:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "checkbox",
			"snippet": "html.checkbox( name=${1:any}, value=${2:any}, disabled=${3:true,false}, checked=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "docType",
			"snippet": "html.docType( type=${1:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "elixir",
			"snippet": "html.elixir( fileName=${1:any}, buildDirectory=${2:any}, sendToHeader=${3:true,false}, async=${4:true,false}, defer=${5:true,false}, version=${6:numeric}, manifestRoot=${7:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "elixirPath",
			"snippet": "html.elixirPath( fileName=${1:any}, buildDirectory=${2:any}, useModuleRoot=${3:true,false}, version=${4:numeric}, manifestRoot=${5:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "emailField",
			"snippet": "html.emailField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "endFieldSet",
			"snippet": "html.endFieldSet( )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "endForm",
			"snippet": "html.endForm( )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "entityFields",
			"snippet": "html.entityFields( entity=${1:any}, groupWrapper=${2:any}, groupWrapperAttrs=${3:{}}, fieldwrapper=${4:any}, fieldWrapperAttrs=${5:{}}, labelAttrs=${6:{}}, labelwrapper=${7:any}, labelWrapperAttrs=${8:{}}, labelClass=${9:any}, textareas=${10:any}, booleanSelect=${11:true,false}, showRelations=${12:true,false}, manytoone=${13:{}}, manytomany=${14:{}}, inputInsideLabel=${15:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "fileField",
			"snippet": "html.fileField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "flattenAttributes",
			"snippet": "html.flattenAttributes( target=${1:{}}, excludes=${2:any}, buffer=${3:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "getColumnArray",
			"snippet": "html.getColumnArray( qry=${1:any}, columnName=${2:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "getSettings",
			"snippet": "html.getSettings( )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "heading",
			"snippet": "html.heading( content=${1:any}, size=${2:numeric} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "hiddenField",
			"snippet": "html.hiddenField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "href",
			"snippet": "html.href( href=${1:any}, text=${2:any}, queryString=${3:any}, title=${4:any}, noBaseURL=${5:true,false}, data=${6:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "imageButton",
			"snippet": "html.imageButton( src=${1:any}, name=${2:any}, disabled=${3:true,false}, wrapper=${4:any}, wrapperAttrs=${5:{}}, groupWrapper=${6:any}, groupWrapperAttrs=${7:{}}, label=${8:any}, labelAttrs=${9:{}}, labelWrapper=${10:any}, labelWrapperAttrs=${11:{}}, labelClass=${12:any}, bind=${13:any}, bindProperty=${14:any}, data=${15:{}}, inputInsideLabel=${16:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "img",
			"snippet": "html.img( src=${1:any}, alt=${2:any}, class=${3:any}, width=${4:any}, height=${5:any}, title=${6:any}, rel=${7:any}, name=${8:any}, noBaseURL=${9:true,false}, data=${10:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "inputField",
			"snippet": "html.inputField( type=${1:any}, name=${2:any}, value=${3:any}, disabled=${4:true,false}, checked=${5:true,false}, readonly=${6:true,false}, wrapper=${7:any}, wrapperAttrs=${8:{}}, groupWrapper=${9:any}, groupWrapperAttrs=${10:{}}, label=${11:any}, labelAttrs=${12:{}}, labelWrapper=${13:any}, labelWrapperAttrs=${14:{}}, labelClass=${15:any}, bind=${16:any}, bindProperty=${17:any}, data=${18:{}}, inputInsideLabel=${19:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "label",
			"snippet": "html.label( field=${1:any}, content=${2:any}, labelAttrs=${3:{}}, wrapper=${4:any}, wrapperAttrs=${5:{}}, data=${6:{}}, class=${7:any}, labelMode=${8:numeric} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "link",
			"snippet": "html.link( href=${1:any}, rel=${2:any}, type=${3:any}, title=${4:any}, media=${5:any}, noBaseURL=${6:true,false}, charset=${7:any}, sendToHeader=${8:true,false}, data=${9:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "makePretty",
			"snippet": "html.makePretty( text=${1:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "meta",
			"snippet": "html.meta( name=${1:any}, content=${2:any}, type=${3:any}, sendToHeader=${4:true,false}, property=${5:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "nbs",
			"snippet": "html.nbs( count=${1:numeric} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "normalizeID",
			"snippet": "html.normalizeID( args=${1:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "objectsToTable",
			"snippet": "html.objectsToTable( data=${1:any}, includes=\"${2:}\", excludes=\"${3:}\", buffer=${4:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "ol",
			"snippet": "html.ol( values=${1:any}, column=\"${2:}\" )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "onMissingMethod",
			"snippet": "html.onMissingMethod( missingMethodName=${1:any}, missingMethodArguments=${2:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "options",
			"snippet": "html.options( values=${1:any}, column=${2:any}, nameColumn=${3:any}, selectedIndex=${4:any}, selectedValue=${5:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "passIncludeExclude",
			"snippet": "html.passIncludeExclude( value=${1:any}, includes=${2:any}, excludes=${3:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "passwordField",
			"snippet": "html.passwordField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "prepareBaseLink",
			"snippet": "html.prepareBaseLink( noBaseURL=${1:true,false}, src=${2:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "queryToTable",
			"snippet": "html.queryToTable( data=${1:any}, includes=\"${2:}\", excludes=\"${3:}\", buffer=${4:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "radioButton",
			"snippet": "html.radioButton( name=${1:any}, value=${2:any}, disabled=${3:true,false}, checked=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "resetButton",
			"snippet": "html.resetButton( name=${1:any}, value=${2:any}, disabled=${3:true,false}, wrapper=${4:any}, wrapperAttrs=${5:{}}, groupWrapper=${6:any}, groupWrapperAttrs=${7:{}}, label=${8:any}, labelAttrs=${9:{}}, labelWrapper=${10:any}, labelWrapperAttrs=${11:{}}, labelClass=${12:any}, bind=${13:any}, bindProperty=${14:any}, data=${15:{}}, inputInsideLabel=${16:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "select",
			"snippet": "html.select( name=${1:any}, options=${2:any}, column=${3:any}, nameColumn=${4:any}, selectedIndex=${5:any}, selectedValue=${6:any}, bind=${7:any}, bindProperty=${8:any}, disabled=${9:true,false}, multiple=${10:true,false}, wrapper=${11:any}, wrapperAttrs=${12:{}}, groupWrapper=${13:any}, groupWrapperAttrs=${14:{}}, label=${15:any}, labelAttrs=${16:{}}, labelwrapper=${17:any}, labelWrapperAttrs=${18:{}}, data=${19:{}}, labelClass=${20:any}, inputInsideLabel=${21:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "setSettings",
			"snippet": "html.setSettings( settings=${1:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "slugify",
			"snippet": "html.slugify( str=${1:any}, maxLength=${2:numeric}, allow=${3:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "startFieldSet",
			"snippet": "html.startFieldSet( legend=${1:any}, data=${2:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "startForm",
			"snippet": "html.startForm( action=\"${1:}\", name=\"${2:}\", method=\"${3:}\", multipart=${4:true,false}, ssl=${5:true,false}, noBaseURL=${6:true,false}, data=${7:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "submitButton",
			"snippet": "html.submitButton( name=${1:any}, value=${2:any}, disabled=${3:true,false}, wrapper=${4:any}, wrapperAttrs=${5:{}}, groupWrapper=${6:any}, groupWrapperAttrs=${7:{}}, label=${8:any}, labelAttrs=${9:{}}, labelWrapper=${10:any}, labelWrapperAttrs=${11:{}}, labelClass=${12:any}, bind=${13:any}, bindProperty=${14:any}, data=${15:{}}, inputInsideLabel=${16:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "table",
			"snippet": "html.table( data=${1:any}, includes=${2:any}, excludes=${3:any}, name=${4:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "tag",
			"snippet": "html.tag( tag=${1:any}, content=${2:any}, data=${3:{}}, excludes=\"${4:}\" )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "textArea",
			"snippet": "html.textArea( name=${1:any}, cols=${2:numeric}, rows=${3:numeric}, value=${4:any}, disabled=${5:true,false}, readonly=${6:true,false}, wrapper=${7:any}, wrapperAttrs=${8:{}}, groupWrapper=${9:any}, groupWrapperAttrs=${10:{}}, label=${11:any}, labelAttrs=${12:{}}, labelWrapper=${13:any}, labelWrapperAttrs=${14:{}}, labelClass=${15:any}, bind=${16:any}, bindProperty=${17:any}, data=${18:{}}, inputInsideLabel=${19:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "textField",
			"snippet": "html.textField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "toHtmlList",
			"snippet": "html.toHtmlList( tag=${1:any}, values=${2:any}, column=${3:any}, data=${4:{}} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "ul",
			"snippet": "html.ul( values=${1:any}, column=\"${2:}\" )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "urlField",
			"snippet": "html.urlField( name=${1:any}, value=${2:any}, disabled=${3:true,false}, readonly=${4:true,false}, wrapper=${5:any}, wrapperAttrs=${6:{}}, groupWrapper=${7:any}, groupWrapperAttrs=${8:{}}, label=${9:any}, labelAttrs=${10:{}}, labelWrapper=${11:any}, labelWrapperAttrs=${12:{}}, labelClass=${13:any}, bind=${14:any}, bindProperty=${15:any}, data=${16:{}}, inputInsideLabel=${17:true,false} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "video",
			"snippet": "html.video( src=${1:any}, width=${2:any}, height=${3:any}, poster=${4:any}, autoplay=${5:true,false}, controls=${6:true,false}, loop=${7:true,false}, preload=${8:true,false}, noBaseURL=${9:true,false}, name=${10:any}, data=${11:any} )"
		},
		{
			"doc": "(TestBox html)",
			"trigger": "wrapTag",
			"snippet": "html.wrapTag( buffer=${1:any}, tag=${2:any}, end=${3:true,false}, attrs=${4:{}} )"
		}
	],
	"controller": [
		{
			"doc": "(TestBox controller)",
			"trigger": "_runEvent",
			"snippet": "controller._runEvent( event=${1:any}, prePostExempt=${2:true,false}, private=${3:true,false}, defaultEvent=${4:true,false}, eventArguments=${5:{}} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getAppHash",
			"snippet": "controller.getAppHash( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getAppKey",
			"snippet": "controller.getAppKey( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getAppRootPath",
			"snippet": "controller.getAppRootPath( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getCFMLEngine",
			"snippet": "controller.getCFMLEngine( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getCache",
			"snippet": "controller.getCache( cacheName=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getCachebox",
			"snippet": "controller.getCachebox( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getColdboxInitiated",
			"snippet": "controller.getColdboxInitiated( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getColdboxSettings",
			"snippet": "controller.getColdboxSettings( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getConfigSettings",
			"snippet": "controller.getConfigSettings( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getDataMarshaller",
			"snippet": "controller.getDataMarshaller( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getHandlerService",
			"snippet": "controller.getHandlerService( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getInterceptorService",
			"snippet": "controller.getInterceptorService( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getLoaderService",
			"snippet": "controller.getLoaderService( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getLog",
			"snippet": "controller.getLog( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getLogbox",
			"snippet": "controller.getLogbox( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getMemento",
			"snippet": "controller.getMemento( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getModuleService",
			"snippet": "controller.getModuleService( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getPlugin",
			"snippet": "controller.getPlugin( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getRenderer",
			"snippet": "controller.getRenderer( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getRequestService",
			"snippet": "controller.getRequestService( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getRoutingService",
			"snippet": "controller.getRoutingService( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getServices",
			"snippet": "controller.getServices( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getSetting",
			"snippet": "controller.getSetting( name=${1:any}, fwSetting=${2:true,false}, defaultValue=${3:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getSettingStructure",
			"snippet": "controller.getSettingStructure( fwSetting=${1:true,false}, deepCopyFlag=${2:true,false} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getUtil",
			"snippet": "controller.getUtil( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "getWirebox",
			"snippet": "controller.getWirebox( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "invoker",
			"snippet": "controller.invoker( target=${1:any}, method=${2:any}, argCollection=${3:{}}, private=${4:true,false} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "loadColdBoxSettings",
			"snippet": "controller.loadColdBoxSettings( )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "locateDirectoryPath",
			"snippet": "controller.locateDirectoryPath( pathToCheck=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "locateFilePath",
			"snippet": "controller.locateFilePath( pathToCheck=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "persistVariables",
			"snippet": "controller.persistVariables( persist=${1:any}, persistStruct=${2:{}} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "relocate",
			"snippet": "controller.relocate( event=${1:any}, queryString=${2:any}, addToken=${3:true,false}, persist=${4:any}, persistStruct=${5:{}}, baseURL=${6:any}, postProcessExempt=${7:true,false}, URL=${8:any}, URI=${9:any}, statusCode=${10:numeric} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "runEvent",
			"snippet": "controller.runEvent( event=${1:any}, prePostExempt=${2:true,false}, private=${3:true,false}, defaultEvent=${4:true,false}, eventArguments=${5:{}}, cache=${6:true,false}, cacheTimeout=${7:any}, cacheLastAccessTimeout=${8:any}, cacheSuffix=${9:any}, cacheProvider=${10:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "runRoute",
			"snippet": "controller.runRoute( name=${1:any}, params=${2:{}}, cache=${3:true,false}, cacheTimeout=${4:any}, cacheLastAccessTimeout=${5:any}, cacheSuffix=${6:any}, cacheProvider=${7:any}, prePostExempt=${8:true,false} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "sendRelocation",
			"snippet": "controller.sendRelocation( URL=${1:any}, addToken=${2:true,false}, statusCode=${3:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setAppHash",
			"snippet": "controller.setAppHash( appHash=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setAppKey",
			"snippet": "controller.setAppKey( appKey=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setAppRootPath",
			"snippet": "controller.setAppRootPath( appRootPath=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setCFMLEngine",
			"snippet": "controller.setCFMLEngine( CFMLEngine=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setCachebox",
			"snippet": "controller.setCachebox( cachebox=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setColdboxInitiated",
			"snippet": "controller.setColdboxInitiated( coldboxInitiated=${1:true,false} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setColdboxSettings",
			"snippet": "controller.setColdboxSettings( coldboxSettings=${1:{}} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setConfigSettings",
			"snippet": "controller.setConfigSettings( configSettings=${1:{}} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setLog",
			"snippet": "controller.setLog( log=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setLogbox",
			"snippet": "controller.setLogbox( logbox=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setNextEvent",
			"snippet": "controller.setNextEvent( event=${1:any}, URL=${2:any}, URI=${3:any}, queryString=${4:any}, persist=${5:any}, persistStruct=${6:{}}, addToken=${7:true,false}, ssl=${8:true,false}, baseURL=${9:any}, postProcessExempt=${10:true,false}, statusCode=${11:numeric} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setRenderer",
			"snippet": "controller.setRenderer( renderer=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setServices",
			"snippet": "controller.setServices( services=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setSetting",
			"snippet": "controller.setSetting( name=${1:any}, value=${2:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setUtil",
			"snippet": "controller.setUtil( util=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "setWirebox",
			"snippet": "controller.setWirebox( wirebox=${1:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "settingExists",
			"snippet": "controller.settingExists( name=${1:any}, fwSetting=${2:true,false} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "updateSSL",
			"snippet": "controller.updateSSL( inURL=${1:any}, ssl=${2:any} )"
		},
		{
			"doc": "(TestBox controller)",
			"trigger": "validateAction",
			"snippet": "controller.validateAction( action=${1:any}, inclusion=${2:any}, exclusion=${3:any} )"
		}
	]
}; }