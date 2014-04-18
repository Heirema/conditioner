var ModuleRegistry = {

    _options:{},
    _redirects:{},

	/**
	 * Register a module
	 * @param {String} path - path to module
	 * @param {Object} options - configuration to setup for module
	 * @param {String} alias - alias name for module
	 * @static
	 */
	registerModule:function(path,options,alias) {

        // remember options for absolute path
        this._options[_options.loader.toUrl(path)] = options;

        // setup redirect from alias
        if (alias) {
            this._redirects[alias] = path;
        }

        // pass configuration to loader
        _options.loader.config(path,options);
	},

    /**
     * Returns the actual path if the path turns out to be a redirect
     * @param path
     * @returns {*}
     */
    getRedirect:function(path) {
        return this._redirects[path] || path;
    },

	/**
	 * Get a registered module by path
	 * @param {String} path - path to module
	 * @return {Object} - module specification object
	 * @static
	 */
	getModule:function(path) {

		// if no id supplied throw error
		if (!path) {
			throw new Error('ModuleRegistry.getModule(path): "path" is a required parameter.');
		}

        return this._options[path] || this._options[_options.loader.toUrl(path)];

	}

};