initSidebarItems({"constant":[["SDK_USER_AGENT","SDK Version"]],"enum":[["Level","Sentry levels for events and breadcrumbs."],["UserConsent","The state of user consent."],["ValueType","Type of a Sentry value."]],"fn":[["add_breadcrumb","Adds the breadcrumb to be sent in case of an event."],["capture_event","Sends a Sentry event."],["clear_modulecache","Clears the internal module cache."],["end_session","Ends a session."],["envelope_free","Frees an envelope."],["envelope_get_event","Given an envelope returns the embedded event if there is one."],["envelope_serialize","Serializes the envelope."],["event_value_add_stacktrace","Adds a stacktrace to an event."],["free","Releases memory allocated from the underlying allocator."],["get_modules_list","This will lazily load and cache a list of all the loaded libraries."],["init","Initializes the Sentry SDK with the specified options."],["options_add_attachment","Adds a new attachment to be sent along."],["options_add_attachmentw","Wide char version of `sentry_options_add_attachment`."],["options_free","Deallocates previously allocated Sentry options."],["options_get_auto_session_tracking","Returns true if automatic session tracking is enabled."],["options_get_ca_certs","Returns the configured path for ca certificates."],["options_get_debug","Returns the current value of the debug flag."],["options_get_dist","Gets the dist."],["options_get_dsn","Gets the DSN."],["options_get_environment","Gets the environment."],["options_get_http_proxy","Returns the configured http proxy."],["options_get_max_breadcrumbs","Gets the number of breadcrumbs being tracked and attached to events."],["options_get_release","Gets the release."],["options_get_require_user_consent","Returns true if user consent is required."],["options_get_sample_rate","Gets the sample rate."],["options_get_symbolize_stacktraces","Returns true if on-device symbolication of stack traces is enabled."],["options_get_transport_thread_name","Returns the configured http transport thread name."],["options_new","Creates a new options struct. Can be freed with `sentry_options_free`."],["options_set_auto_session_tracking","Enables or disables automatic session tracking."],["options_set_before_send","Sets the `before_send` callback."],["options_set_ca_certs","Configures the path to a file containing ssl certificates for verification."],["options_set_database_path","Sets the path to the Sentry Database Directory."],["options_set_database_pathw","Wide char version of `sentry_options_set_database_path`"],["options_set_debug","Enables or disables debug printing mode."],["options_set_dist","Sets the dist."],["options_set_dsn","Sets the DSN."],["options_set_environment","Sets the environment."],["options_set_handler_path","Sets the path to the crashpad handler if the crashpad backend is used."],["options_set_handler_pathw","Wide char version of `sentry_options_set_handler_path`."],["options_set_http_proxy","Configures the http proxy."],["options_set_logger","Sets the sentry-native logger function."],["options_set_max_breadcrumbs","Sets the number of breadcrumbs being tracked and attached to events."],["options_set_release","Sets the release."],["options_set_require_user_consent","Enables or disabled user consent requirements for uploads."],["options_set_sample_rate","Sets the sample rate, which should be a double between `0.0` and `1.0`. Sentry will randomly discard any event that is captured using `sentry_capture_event` when a sample rate < 1 is set."],["options_set_symbolize_stacktraces","Enables or disables on-device symbolication of stack traces."],["options_set_system_crash_reporter_enabled","Enables forwarding to the system crash reporter. Disabled by default."],["options_set_transport","Sets a transport."],["options_set_transport_thread_name","Configures the name of the http transport thread."],["reinstall_backend","Re-initializes the Sentry backend."],["remove_context","Removes the context object with the specified key."],["remove_extra","Removes the extra with the specified key."],["remove_fingerprint","Removes the fingerprint."],["remove_tag","Removes the tag with the specified key."],["remove_transaction","Removes the transaction."],["remove_user","Removes a user."],["set_context","Sets a context object."],["set_extra","Sets extra information."],["set_fingerprint","Sets the event fingerprint."],["set_level","Sets the event level."],["set_tag","Sets a tag."],["set_transaction","Sets the transaction."],["set_user","Sets the specified user."],["shutdown","Shuts down the Sentry client and forces transports to flush out."],["start_session","Starts a new session."],["transport_free","Generic way to free a transport."],["transport_new","Creates a new transport with an initial `send_func`."],["transport_set_free_func","Sets the transport hook to free the transport `state`."],["transport_set_shutdown_func","Sets the transport shutdown hook."],["transport_set_startup_func","Sets the transport startup hook."],["transport_set_state","Sets the transport `state`."],["user_consent_get","Checks the current state of user consent."],["user_consent_give","Gives user consent."],["user_consent_reset","Resets the user consent (back to unknown)."],["user_consent_revoke","Revokes user consent."],["uuid_as_string","Formats the uuid into a string buffer."],["uuid_nil","Creates the nil uuid."],["value_append","Appends a value to a list. This moves the ownership of the value into the list.  The caller does not have to call `sentry_value_decref` on it."],["value_as_double","Converts a value into a double value."],["value_as_int32","Converts a value into a 32bit signed integer."],["value_as_string","Returns the value as c string."],["value_decref","Decrements the reference count on the value."],["value_get_by_index","Looks up a value in a list by index.  If missing a null value is returned. The returned value is borrowed."],["value_get_by_index_owned","Looks up a value in a list by index.  If missing a null value is returned. The returned value is owned."],["value_get_by_key","Looks up a value in a map by key.  If missing a null value is returned.\"] The returned value is borrowed.\"]"],["value_get_by_key_owned","Looks up a value in a map by key.  If missing a null value is returned. The returned value is owned."],["value_get_length","Returns the length of the given map or list."],["value_get_type","Returns the type of the value passed."],["value_incref","Increments the reference count on the value."],["value_is_true","Returns `true` if the value is boolean true."],["value_new_bool","Creates a new boolen value."],["value_new_breadcrumb","Creates a new breadcrumb with a specific type and message."],["value_new_double","Creates a new double value."],["value_new_event","Creates a new empty event value."],["value_new_int32","Creates a new 32-bit signed integer value."],["value_new_list","Creates a new list value."],["value_new_message_event","Creates a new message event value."],["value_new_null","Creates a null value."],["value_new_object","Creates a new object."],["value_new_string","Creates a new null terminated string."],["value_remove_by_index","This removes a value from the list by index."],["value_remove_by_key","This removes a value from the map by key."],["value_set_by_index","Inserts a value into the list at a certain position."],["value_set_by_key","Sets a key to a value in the map."],["value_to_msgpack","Serialize a Sentry value to msgpack."]],"struct":[["Envelope","A Sentry Envelope."],["Options","The Sentry Client Options."],["Transport","This represents an interface for user-defined transports."],["Uuid","A UUID"]],"type":[["EventFunction","Type of the `before_send` callback."],["LoggerFunction","Type of the callback for logger function."],["SendEnvelopeFunction","Type of callback for sending envelopes to a Sentry service"],["ShutdownFunction","Type of the callback for shutting down a custom transport"],["StartupFunction","Type of the callback for starting up a custom transport"],["c_wchar","Char type for Windows APIs."]],"union":[["Value","Represents a Sentry protocol value."]]});