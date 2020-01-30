/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 1.3.1(1119ababe841a89731059c9bd9522fc59d70f6cb)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/sql/sql",["require","exports"],function(E,T){"use strict";Object.defineProperty(T,"__esModule",{value:!0}),T.conf={comments:{lineComment:"--",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},T.language={defaultToken:"",tokenPostfix:".sql",ignoreCase:!0,brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:["ABORT_AFTER_WAIT","ABSENT","ABSOLUTE","ACCENT_SENSITIVITY","ACTION","ACTIVATION","ACTIVE","ADD","ADDRESS","ADMIN","AES","AES_128","AES_192","AES_256","AFFINITY","AFTER","AGGREGATE","ALGORITHM","ALL_CONSTRAINTS","ALL_ERRORMSGS","ALL_INDEXES","ALL_LEVELS","ALL_SPARSE_COLUMNS","ALLOW_CONNECTIONS","ALLOW_MULTIPLE_EVENT_LOSS","ALLOW_PAGE_LOCKS","ALLOW_ROW_LOCKS","ALLOW_SINGLE_EVENT_LOSS","ALLOW_SNAPSHOT_ISOLATION","ALLOWED","ALTER","ANONYMOUS","ANSI_DEFAULTS","ANSI_NULL_DEFAULT","ANSI_NULL_DFLT_OFF","ANSI_NULL_DFLT_ON","ANSI_NULLS","ANSI_PADDING","ANSI_WARNINGS","APPEND","APPLICATION","APPLICATION_LOG","ARITHABORT","ARITHIGNORE","AS","ASC","ASSEMBLY","ASYMMETRIC","ASYNCHRONOUS_COMMIT","AT","ATOMIC","ATTACH","ATTACH_REBUILD_LOG","AUDIT","AUDIT_GUID","AUTHENTICATION","AUTHORIZATION","AUTO","AUTO_CLEANUP","AUTO_CLOSE","AUTO_CREATE_STATISTICS","AUTO_SHRINK","AUTO_UPDATE_STATISTICS","AUTO_UPDATE_STATISTICS_ASYNC","AUTOMATED_BACKUP_PREFERENCE","AUTOMATIC","AVAILABILITY","AVAILABILITY_MODE","BACKUP","BACKUP_PRIORITY","BASE64","BATCHSIZE","BEGIN","BEGIN_DIALOG","BIGINT","BINARY","BINDING","BIT","BLOCKERS","BLOCKSIZE","BOUNDING_BOX","BREAK","BROKER","BROKER_INSTANCE","BROWSE","BUCKET_COUNT","BUFFER","BUFFERCOUNT","BULK","BULK_LOGGED","BY","CACHE","CALL","CALLED","CALLER","CAP_CPU_PERCENT","CASCADE","CASE","CATALOG","CATCH","CELLS_PER_OBJECT","CERTIFICATE","CHANGE_RETENTION","CHANGE_TRACKING","CHANGES","CHAR","CHARACTER","CHECK","CHECK_CONSTRAINTS","CHECK_EXPIRATION","CHECK_POLICY","CHECKALLOC","CHECKCATALOG","CHECKCONSTRAINTS","CHECKDB","CHECKFILEGROUP","CHECKIDENT","CHECKPOINT","CHECKTABLE","CLASSIFIER_FUNCTION","CLEANTABLE","CLEANUP","CLEAR","CLOSE","CLUSTER","CLUSTERED","CODEPAGE","COLLATE","COLLECTION","COLUMN","COLUMN_SET","COLUMNS","COLUMNSTORE","COLUMNSTORE_ARCHIVE","COMMIT","COMMITTED","COMPATIBILITY_LEVEL","COMPRESSION","COMPUTE","CONCAT","CONCAT_NULL_YIELDS_NULL","CONFIGURATION","CONNECT","CONSTRAINT","CONTAINMENT","CONTENT","CONTEXT","CONTINUE","CONTINUE_AFTER_ERROR","CONTRACT","CONTRACT_NAME","CONTROL","CONVERSATION","COOKIE","COPY_ONLY","COUNTER","CPU","CREATE","CREATE_NEW","CREATION_DISPOSITION","CREDENTIAL","CRYPTOGRAPHIC","CUBE","CURRENT","CURRENT_DATE","CURSOR","CURSOR_CLOSE_ON_COMMIT","CURSOR_DEFAULT","CYCLE","DATA","DATA_COMPRESSION","DATA_PURITY","DATABASE","DATABASE_DEFAULT","DATABASE_MIRRORING","DATABASE_SNAPSHOT","DATAFILETYPE","DATE","DATE_CORRELATION_OPTIMIZATION","DATEFIRST","DATEFORMAT","DATETIME","DATETIME2","DATETIMEOFFSET","DAY","DAYOFYEAR","DAYS","DB_CHAINING","DBCC","DBREINDEX","DDL_DATABASE_LEVEL_EVENTS","DEADLOCK_PRIORITY","DEALLOCATE","DEC","DECIMAL","DECLARE","DECRYPTION","DEFAULT","DEFAULT_DATABASE","DEFAULT_FULLTEXT_LANGUAGE","DEFAULT_LANGUAGE","DEFAULT_SCHEMA","DEFINITION","DELAY","DELAYED_DURABILITY","DELETE","DELETED","DENSITY_VECTOR","DENY","DEPENDENTS","DES","DESC","DESCRIPTION","DESX","DHCP","DIAGNOSTICS","DIALOG","DIFFERENTIAL","DIRECTORY_NAME","DISABLE","DISABLE_BROKER","DISABLED","DISK","DISTINCT","DISTRIBUTED","DOCUMENT","DOUBLE","DROP","DROP_EXISTING","DROPCLEANBUFFERS","DUMP","DURABILITY","DYNAMIC","EDITION","ELEMENTS","ELSE","EMERGENCY","EMPTY","EMPTYFILE","ENABLE","ENABLE_BROKER","ENABLED","ENCRYPTION","END","ENDPOINT","ENDPOINT_URL","ERRLVL","ERROR","ERROR_BROKER_CONVERSATIONS","ERRORFILE","ESCAPE","ESTIMATEONLY","EVENT","EVENT_RETENTION_MODE","EXEC","EXECUTABLE","EXECUTE","EXIT","EXPAND","EXPIREDATE","EXPIRY_DATE","EXPLICIT","EXTENDED_LOGICAL_CHECKS","EXTENSION","EXTERNAL","EXTERNAL_ACCESS","FAIL_OPERATION","FAILOVER","FAILOVER_MODE","FAILURE_CONDITION_LEVEL","FALSE","FAN_IN","FAST","FAST_FORWARD","FETCH","FIELDTERMINATOR","FILE","FILEGROUP","FILEGROWTH","FILELISTONLY","FILENAME","FILEPATH","FILESTREAM","FILESTREAM_ON","FILETABLE_COLLATE_FILENAME","FILETABLE_DIRECTORY","FILETABLE_FULLPATH_UNIQUE_CONSTRAINT_NAME","FILETABLE_NAMESPACE","FILETABLE_PRIMARY_KEY_CONSTRAINT_NAME","FILETABLE_STREAMID_UNIQUE_CONSTRAINT_NAME","FILLFACTOR","FILTERING","FIRE_TRIGGERS","FIRST","FIRSTROW","FLOAT","FMTONLY","FOLLOWING","FOR","FORCE","FORCE_FAILOVER_ALLOW_DATA_LOSS","FORCE_SERVICE_ALLOW_DATA_LOSS","FORCED","FORCEPLAN","FORCESCAN","FORCESEEK","FOREIGN","FORMATFILE","FORMSOF","FORWARD_ONLY","FREE","FREEPROCCACHE","FREESESSIONCACHE","FREESYSTEMCACHE","FROM","FULL","FULLSCAN","FULLTEXT","FUNCTION","GB","GEOGRAPHY_AUTO_GRID","GEOGRAPHY_GRID","GEOMETRY_AUTO_GRID","GEOMETRY_GRID","GET","GLOBAL","GO","GOTO","GOVERNOR","GRANT","GRIDS","GROUP","GROUP_MAX_REQUESTS","HADR","HASH","HASHED","HAVING","HEADERONLY","HEALTH_CHECK_TIMEOUT","HELP","HIERARCHYID","HIGH","HINT","HISTOGRAM","HOLDLOCK","HONOR_BROKER_PRIORITY","HOUR","HOURS","IDENTITY","IDENTITY_INSERT","IDENTITY_VALUE","IDENTITYCOL","IF","IGNORE_CONSTRAINTS","IGNORE_DUP_KEY","IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX","IGNORE_TRIGGERS","IMAGE","IMMEDIATE","IMPERSONATE","IMPLICIT_TRANSACTIONS","IMPORTANCE","INCLUDE","INCREMENT","INCREMENTAL","INDEX","INDEXDEFRAG","INFINITE","INFLECTIONAL","INIT","INITIATOR","INPUT","INPUTBUFFER","INSENSITIVE","INSERT","INSERTED","INSTEAD","INT","INTEGER","INTO","IO","IP","ISABOUT","ISOLATION","JOB","KB","KEEP","KEEP_CDC","KEEP_NULLS","KEEP_REPLICATION","KEEPDEFAULTS","KEEPFIXED","KEEPIDENTITY","KEEPNULLS","KERBEROS","KEY","KEY_SOURCE","KEYS","KEYSET","KILL","KILOBYTES_PER_BATCH","LABELONLY","LANGUAGE","LAST","LASTROW","LEVEL","LEVEL_1","LEVEL_2","LEVEL_3","LEVEL_4","LIFETIME","LIMIT","LINENO","LIST","LISTENER","LISTENER_IP","LISTENER_PORT","LOAD","LOADHISTORY","LOB_COMPACTION","LOCAL","LOCAL_SERVICE_NAME","LOCK_ESCALATION","LOCK_TIMEOUT","LOGIN","LOGSPACE","LOOP","LOW","MANUAL","MARK","MARK_IN_USE_FOR_REMOVAL","MASTER","MAX_CPU_PERCENT","MAX_DISPATCH_LATENCY","MAX_DOP","MAX_DURATION","MAX_EVENT_SIZE","MAX_FILES","MAX_IOPS_PER_VOLUME","MAX_MEMORY","MAX_MEMORY_PERCENT","MAX_QUEUE_READERS","MAX_ROLLOVER_FILES","MAX_SIZE","MAXDOP","MAXERRORS","MAXLENGTH","MAXRECURSION","MAXSIZE","MAXTRANSFERSIZE","MAXVALUE","MB","MEDIADESCRIPTION","MEDIANAME","MEDIAPASSWORD","MEDIUM","MEMBER","MEMORY_OPTIMIZED","MEMORY_OPTIMIZED_DATA","MEMORY_OPTIMIZED_ELEVATE_TO_SNAPSHOT","MEMORY_PARTITION_MODE","MERGE","MESSAGE","MESSAGE_FORWARD_SIZE","MESSAGE_FORWARDING","MICROSECOND","MILLISECOND","MIN_CPU_PERCENT","MIN_IOPS_PER_VOLUME","MIN_MEMORY_PERCENT","MINUTE","MINUTES","MINVALUE","MIRROR","MIRROR_ADDRESS","MODIFY","MONEY","MONTH","MOVE","MULTI_USER","MUST_CHANGE","NAME","NANOSECOND","NATIONAL","NATIVE_COMPILATION","NCHAR","NEGOTIATE","NESTED_TRIGGERS","NEW_ACCOUNT","NEW_BROKER","NEW_PASSWORD","NEWNAME","NEXT","NO","NO_BROWSETABLE","NO_CHECKSUM","NO_COMPRESSION","NO_EVENT_LOSS","NO_INFOMSGS","NO_TRUNCATE","NO_WAIT","NOCHECK","NOCOUNT","NOEXEC","NOEXPAND","NOFORMAT","NOINDEX","NOINIT","NOLOCK","NON","NON_TRANSACTED_ACCESS","NONCLUSTERED","NONE","NORECOMPUTE","NORECOVERY","NORESEED","NORESET","NOREWIND","NORMAL","NOSKIP","NOTIFICATION","NOTRUNCATE","NOUNLOAD","NOWAIT","NTEXT","NTLM","NUMANODE","NUMERIC","NUMERIC_ROUNDABORT","NVARCHAR","OBJECT","OF","OFF","OFFLINE","OFFSET","OFFSETS","OLD_ACCOUNT","OLD_PASSWORD","ON","ON_FAILURE","ONLINE","ONLY","OPEN","OPEN_EXISTING","OPENTRAN","OPTIMISTIC","OPTIMIZE","OPTION","ORDER","OUT","OUTPUT","OUTPUTBUFFER","OVER","OVERRIDE","OWNER","OWNERSHIP","PAD_INDEX","PAGE","PAGE_VERIFY","PAGECOUNT","PAGLOCK","PARAMETERIZATION","PARSEONLY","PARTIAL","PARTITION","PARTITIONS","PARTNER","PASSWORD","PATH","PER_CPU","PER_NODE","PERCENT","PERMISSION_SET","PERSISTED","PHYSICAL_ONLY","PLAN","POISON_MESSAGE_HANDLING","POOL","POPULATION","PORT","PRECEDING","PRECISION","PRIMARY","PRIMARY_ROLE","PRINT","PRIOR","PRIORITY","PRIORITY_LEVEL","PRIVATE","PRIVILEGES","PROC","PROCCACHE","PROCEDURE","PROCEDURE_NAME","PROCESS","PROFILE","PROPERTY","PROPERTY_DESCRIPTION","PROPERTY_INT_ID","PROPERTY_SET_GUID","PROVIDER","PROVIDER_KEY_NAME","PUBLIC","PUT","QUARTER","QUERY","QUERY_GOVERNOR_COST_LIMIT","QUEUE","QUEUE_DELAY","QUOTED_IDENTIFIER","RAISERROR","RANGE","RAW","RC2","RC4","RC4_128","READ","READ_COMMITTED_SNAPSHOT","READ_ONLY","READ_ONLY_ROUTING_LIST","READ_ONLY_ROUTING_URL","READ_WRITE","READ_WRITE_FILEGROUPS","READCOMMITTED","READCOMMITTEDLOCK","READONLY","READPAST","READTEXT","READUNCOMMITTED","READWRITE","REAL","REBUILD","RECEIVE","RECOMPILE","RECONFIGURE","RECOVERY","RECURSIVE","RECURSIVE_TRIGGERS","REFERENCES","REGENERATE","RELATED_CONVERSATION","RELATED_CONVERSATION_GROUP","RELATIVE","REMOTE","REMOTE_PROC_TRANSACTIONS","REMOTE_SERVICE_NAME","REMOVE","REORGANIZE","REPAIR_ALLOW_DATA_LOSS","REPAIR_FAST","REPAIR_REBUILD","REPEATABLE","REPEATABLEREAD","REPLICA","REPLICATION","REQUEST_MAX_CPU_TIME_SEC","REQUEST_MAX_MEMORY_GRANT_PERCENT","REQUEST_MEMORY_GRANT_TIMEOUT_SEC","REQUIRED","RESAMPLE","RESEED","RESERVE_DISK_SPACE","RESET","RESOURCE","RESTART","RESTORE","RESTRICT","RESTRICTED_USER","RESULT","RESUME","RETAINDAYS","RETENTION","RETURN","RETURNS","REVERT","REVOKE","REWIND","REWINDONLY","ROBUST","ROLE","ROLLBACK","ROLLUP","ROOT","ROUTE","ROW","ROWCOUNT","ROWGUIDCOL","ROWLOCK","ROWS","ROWS_PER_BATCH","ROWTERMINATOR","ROWVERSION","RSA_1024","RSA_2048","RSA_512","RULE","SAFE","SAFETY","SAMPLE","SAVE","SCHEDULER","SCHEMA","SCHEMA_AND_DATA","SCHEMA_ONLY","SCHEMABINDING","SCHEME","SCROLL","SCROLL_LOCKS","SEARCH","SECOND","SECONDARY","SECONDARY_ONLY","SECONDARY_ROLE","SECONDS","SECRET","SECURITY_LOG","SECURITYAUDIT","SELECT","SELECTIVE","SELF","SEND","SENT","SEQUENCE","SERIALIZABLE","SERVER","SERVICE","SERVICE_BROKER","SERVICE_NAME","SESSION","SESSION_TIMEOUT","SET","SETS","SETUSER","SHOW_STATISTICS","SHOWCONTIG","SHOWPLAN","SHOWPLAN_ALL","SHOWPLAN_TEXT","SHOWPLAN_XML","SHRINKDATABASE","SHRINKFILE","SHUTDOWN","SID","SIGNATURE","SIMPLE","SINGLE_BLOB","SINGLE_CLOB","SINGLE_NCLOB","SINGLE_USER","SINGLETON","SIZE","SKIP","SMALLDATETIME","SMALLINT","SMALLMONEY","SNAPSHOT","SORT_IN_TEMPDB","SOURCE","SPARSE","SPATIAL","SPATIAL_WINDOW_MAX_CELLS","SPECIFICATION","SPLIT","SQL","SQL_VARIANT","SQLPERF","STANDBY","START","START_DATE","STARTED","STARTUP_STATE","STAT_HEADER","STATE","STATEMENT","STATIC","STATISTICAL_SEMANTICS","STATISTICS","STATISTICS_INCREMENTAL","STATISTICS_NORECOMPUTE","STATS","STATS_STREAM","STATUS","STATUSONLY","STOP","STOP_ON_ERROR","STOPAT","STOPATMARK","STOPBEFOREMARK","STOPLIST","STOPPED","SUBJECT","SUBSCRIPTION","SUPPORTED","SUSPEND","SWITCH","SYMMETRIC","SYNCHRONOUS_COMMIT","SYNONYM","SYSNAME","SYSTEM","TABLE","TABLERESULTS","TABLESAMPLE","TABLOCK","TABLOCKX","TAKE","TAPE","TARGET","TARGET_RECOVERY_TIME","TB","TCP","TEXT","TEXTIMAGE_ON","TEXTSIZE","THEN","THESAURUS","THROW","TIES","TIME","TIMEOUT","TIMER","TIMESTAMP","TINYINT","TO","TOP","TORN_PAGE_DETECTION","TRACEOFF","TRACEON","TRACESTATUS","TRACK_CAUSALITY","TRACK_COLUMNS_UPDATED","TRAN","TRANSACTION","TRANSFER","TRANSFORM_NOISE_WORDS","TRIGGER","TRIPLE_DES","TRIPLE_DES_3KEY","TRUE","TRUNCATE","TRUNCATEONLY","TRUSTWORTHY","TRY","TSQL","TWO_DIGIT_YEAR_CUTOFF","TYPE","TYPE_WARNING","UNBOUNDED","UNCHECKED","UNCOMMITTED","UNDEFINED","UNIQUE","UNIQUEIDENTIFIER","UNKNOWN","UNLIMITED","UNLOAD","UNSAFE","UPDATE","UPDATETEXT","UPDATEUSAGE","UPDLOCK","URL","USE","USED","USER","USEROPTIONS","USING","VALID_XML","VALIDATION","VALUE","VALUES","VARBINARY","VARCHAR","VARYING","VERIFYONLY","VERSION","VIEW","VIEW_METADATA","VIEWS","VISIBILITY","WAIT_AT_LOW_PRIORITY","WAITFOR","WEs t e m         ����nk  ޥ�G�    �3         ��������   p? Z  ����                 #   Windows.System.AppInitiatedDownload     ����vk   �D     _KSetting�����vk    �E     ��appType3����c : t o a s t , c : r i n g i n g , s : t i c k l e , s : t o a s t , s : a u d i o , s : b a d g e , s : l o c k : b a d g e , s : b a n n e r , s : l i s t e n e r E n a b l e d , s : l o c k : t i l e , s : t i l e , s : l o c k : t o a s t , s : v o i p   ����vk    P?       appType ����a p p : s y s t e m         �����9 0? �? ����vk    �?       wnsId   ����S y s t e m         ����vk   �@       Setting ����vk    �A       appType        ADL89x.�����lh �� �e ����nk  ���TL�   ��         ��������   �m H]  ����        L             MaxCofuncPaths������lh �� �c#3����lh 0� )��?�  �-J����vk "   ��       DeviceId����0 0 1 8 0 0 0 3 8 D F 7 B A 2 3     ����vk   �         ApplicationFlags���      Ќ����z �O�   ��<�+�zL�����ڷ         f         �0M���*�(�u��v���r���'���u�    �         0���[$����w?���$��
���lA��d  �o'-�v
�^A��Lxk��?F-H��-�"�,�B�����2/�Ըk@[�6�3�)�W���qy���FM~m�RI��2$�G��`�-�Ⳬ�.��U%�܇��]r��R���^��[�w�����G5(VK��
_������x��	m�#��5S��svD��L,��Q�#���c��谡��(��l���6�-�o2�lX��ܻ8�Hs��N�VnE0�ޢ;��\F�R����^
�f� x�̜�ŵY��#Xo��6~m�k�|�U衅�c
���m-e�Ƶӷ��-�X��	��wD�%NO� �"P Z�r5��#OǗU�x�[D(�{\;��6�Fb���© ��4`��`���`x*eLT�}�o?W�����EV�{o�q�L�!��r���2j� b~�ǳ9�H��y@��6���cO�%rG/v�^_��ѪL�)��W[}Q�0z��3nM�Hk�Nj�l�*R��~
z��s6q�mד?3�G�O��(�3M�~}+�`3��^�GT0�A��t��_����?:`'���Xv�e W���fi�J	(�&#�|¼3�
�M9Z�\3�>� $E6��S����Cgg1�*�:B��=7�U���9�Hy=fT��yW���Z�M��jiݓώ�4�M68�0k�,�[˾�����{�خ��!���=����ަp�{?j��?V�I��7յ۹��1�L���/�*�!�2d��ʿz�?�7�ؼ,,�m-�M����ߛ�NMci���n�����	��)F�I�1+�k���piOt��[d"Y��y�GN�g�I��)�vw��ʵ!bV���k� ���O6�:6|�5&�	����[��H�+7�Oz	�&���{�<_�.��}/7�����.�{�+��	[R��i���� �d	�}*?��m�}Z�O'~�.ի(]���ك�A�P+&a}���:� Q)vhP��m.�,��9�����RY�*����F��e=�dJ)�n)���+wV�=We�v�`��ֹ@   ��R�r�/��_�ܣ�iB�̰���y���#^\BvmQͰ-�,:!,uʦLݙ��$��?�����/����vk' 8   @�      @%systemroot%\system32\wkssvc.dll,-1008 ����D F S   N a m e s p a c e   C l i e n t   D r i v e r   xN ����vk3 >    �      @%SystemRoot%\system32\drivers\EhStorClass.sys,-100     � ����D e s k t o p   A c t i v i t y   M o d e r a t o r   D r i v e r   ����vk1    �      @%systemroot%\system32\drivers\filecrypt.sys,-100G G ����vk0 >   ��      @%SystemRoot%\system32\drivers\fileinfo.sys,-100����F i l e   I n f o r m a t i o n   F S   M i n i F i l t e r     � ����E n h a n c e d   S t o r a g e   F i l t e r   D r i v e r   p t e ����vk3     I      @%SystemRoot%\system32\drivers\filetrace.sys,-10001 G ����vk0    �      @%SystemRoot%\system32\drivers\fltmgr.sys,-10001����vk4 $   �      @%SystemRoot%\system32\drivers\gpuenergydrv.sys,-100G ����vk*    �      @%SystemRoot%\system32\drivers\http.sys,-1 8G ����vk0 T   ��      @%SystemRoot%\system32\drivers\hvservice.sys,-16����I R   B u s   E n u m e r a t o r      m   ����vk&   �         {2CE274AA-7335-11E9-8BDB-B983950E0086}  ����nk  ���3?��   ��         ��������   �n H]  ����                      AppProfiles     ����vk   �[         AplReloadCounterP���nk  �)���   �o        � ����    ����Z  ����                   Y   C:%5CWindows%5CSystemApps%5CMicrosoft.Windows.AppResolverUX_cw5n1h2txyewy%5Cresources.pri ?     X* �* x+ ����I+2  ����vk3 D   ػ      @%SystemRoot%\system32\drivers\fsdepends.sys,-10001 G ����F i l e   S y s t e m   D e p e n d e n c y   M i n i f i l t e r   ����vk. R   h�      @%SystemRoot%\system32\drivers\fvevol.sys,-100 ����B i t L o c k e r   D r i v e   E n c r y p t i o n   F i l t e r   D r i v e r   s-����H y p e r v i s o r / V i r t u a l   M a c h i n e   S u p p o r t   D r i v e r   ����vk0 .   �K      @%systemroot%\system32\drivers\hwpolicy.sys,-101����vk3 J   ��      @%SystemRoot%\system32\drivers\IndirectKmd.sys,-100 H� ����I n d i r e c t   D i s p l a y s   K e r n e l - M o d e   D r i v e r    ����vk. 8   H�      @%SystemRoot%\system32\drivers\iorate.sys,-101 ����D i s k   I / O   R a t e   F i l t e r   D r i v e r   � ����vk( 2    @      @%systemroot%\system32\mprmsg.dll,-32013       @���nk  ���D�   �o        x� ����    ����Z  ����                   n   C:%5CWindows%5CSystemApps%5CMicrosoft.Windows.AddSuggestedFoldersToLibraryDialog_cw5n1h2txyewy%5Cresources.pri  ����nk  ��GL�   о        �o ����    ����Z  ����                      1d44cc5b9bd46ea    p 0� �� hbin @                         ����I P   T r a f f i c   F i l t e r   D r i v e r    ����vk. $   ��      @%SystemRoot%\system32\drivers\irenum.sys,-100 ����vk' B   �@      @%systemroot%\system32\webclnt.dll,-104 ����W e b D a v   C l i e n t   R e d i r e c t o r   D r i v e r      ����S M B   2 . 0   M i n i R e d i r e c t o r    �L ����P a s s - t h r o u g h   H I D   t o   U M D F   D r i v e r   PG ����vk. P   �A      @%SystemRoot%\system32\drivers\mslldp.sys,-200 ����M i c r o s o f t   L i n k - L a y e r   D i s c o v e r y   P r o t o c o l    � ����vk1 ^    �      @%SystemRoot%\System32\Drivers\mssecflt.sys,-1001@ h�     �B ����vk' *   0�       @%SystemRoot%\system32\bridgeres.dll,-1 ����W I M M o u n t    ����nk  E�HL�   p�         ��������   @F Z  ����          X          4e749b27����vk X   xC     s LanguageListn k ����_ e n - U S ; t h _ s t a n d a r d _ 1 0 0 _ T H _ L T R _ l i g h t _ D e s k t o p _ stemX���vk�    �D     ,-@{C:\Windows\SystemApps\Microsoft.Windows.SecureAssessmentBrowser_cw5n1h2txyewy\resources.pri? ms-resource:///resources/PackageDisplayName}   ����T a k e   a   T e s t   rs\nX���vk� ,   HE     S @{C:\Windows\SystemApps\Microsoft.Windows.SecureAssessmentBrowser_cw5n1h2txyewy\resources.pri? ms-resource:///resources/PublisherDisplayName}   ����M i c r o s o f t   C o r p o r a t i o n   X���vk�     F     \p@{C:\Windows\SystemApps\Microsoft.Windows.SecureAssessmentBrowser_cw5n1h2txyewy\resources.pri? ms-resource:///resources/PackageDescription}