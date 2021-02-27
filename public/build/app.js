(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/plugins/select2/dist/js sync recursive ^.*compat\\/inputData$":
/*!********************************************************************!*\
  !*** ./assets/plugins/select2/dist/js/ sync ^.*compat\/inputData$ ***!
  \********************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/plugins/select2/dist/js sync recursive ^.*compat\\/inputData$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_color_admin_js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/color-admin/js/app */ "./assets/vendor/color-admin/js/app.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_select2_dist_js_select2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/select2/dist/js/select2 */ "./assets/plugins/select2/dist/js/select2.js");
/* harmony import */ var _plugins_select2_dist_js_select2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_select2_dist_js_select2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins_select2_dist_css_select2_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/select2/dist/css/select2.css */ "./assets/plugins/select2/dist/css/select2.css");
/* harmony import */ var _select2entity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select2entity.js */ "./assets/js/select2entity.js");
/* harmony import */ var _select2entity_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_select2entity_js__WEBPACK_IMPORTED_MODULE_4__);






__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");

__webpack_require__(/*! ../css/app.min.css */ "./assets/css/app.min.css");

/***/ }),

/***/ "./assets/js/select2entity.js":
/*!************************************!*\
  !*** ./assets/js/select2entity.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  $.fn.select2entity = function (options) {
    this.each(function () {
      var request; // Keep a reference to the element so we can keep the cache local to this instance and so we can
      // fetch config settings since select2 doesn't expose its options to the transport method.

      var $s2 = $(this),
          limit = $s2.data('page-limit') || 0,
          scroll = $s2.data('scroll'),
          prefix = Date.now(),
          query_parameters = $s2.data('query-parameters'),
          render_html = $s2.data('render-html'),
          cache = [];
      var reqParams = $s2.data('req_params');

      if (reqParams) {
        $.each(reqParams, function (key, value) {
          $('*[name="' + value + '"]').on('change', function () {
            $s2.val(null);
            $s2.trigger('change');
          });
        });
      } // Deep-merge the options


      var mergedOptions = $.extend(true, {
        // Tags support
        createTag: function createTag(data) {
          if ($s2.data('tags') && data.term.length > 0) {
            var text = data.term + $s2.data('tags-text');
            return {
              id: $s2.data('new-tag-prefix') + data.term,
              text: text
            };
          }
        },
        ajax: {
          url: $s2.data('ajax--url') || null,
          transport: function transport(params, success, failure) {
            // is caching enabled?
            if ($s2.data('ajax--cache')) {
              // try to make the key unique to make it less likely for a page+q to match a real query
              var key = prefix + ' page:' + (params.data.page || 1) + ' ' + params.data.q,
                  cacheTimeout = $s2.data('ajax--cacheTimeout'); // no cache entry for 'term' or the cache has timed out?

              if (typeof cache[key] === 'undefined' || cacheTimeout && Date.now() >= cache[key].time) {
                return $.ajax(params).fail(failure).done(function (data) {
                  cache[key] = {
                    data: data,
                    time: cacheTimeout ? Date.now() + cacheTimeout : null
                  };
                  success(data);
                });
              } else {
                // return cached data with no ajax request
                success(cache[key].data);
              }
            } else {
              // no caching enabled. just do the ajax request
              if (request) {
                request.abort();
              }

              request = $.ajax(params).fail(failure).done(success).always(function () {
                request = undefined;
              });
              return request;
            }
          },
          data: function data(params) {
            var ret = {
              'q': params.term,
              'field_name': $s2.data('name'),
              'class_type': $s2.data('classtype')
            };
            var reqParams = $s2.data('req_params');

            if (reqParams) {
              $.each(reqParams, function (key, value) {
                ret[key] = $('*[name="' + value + '"]').val();
              });
            } // only send the 'page' parameter if scrolling is enabled


            if (scroll) {
              ret['page'] = params.page || 1;
            }

            if (Array.isArray(query_parameters) || _typeof(query_parameters) === 'object') {
              for (var key in query_parameters) {
                // prevent overriding required parameters
                if (!ret[key]) {
                  ret[key] = query_parameters[key];
                }
              }
            }

            return ret;
          },
          processResults: function processResults(data, params) {
            var results,
                more = false,
                response = {};
            params.page = params.page || 1;

            if ($.isArray(data)) {
              results = data;
            } else if (_typeof(data) === 'object') {
              // assume remote result was proper object
              results = data.results;
              more = data.more;
            } else {
              // failsafe
              results = [];
            }

            if (scroll) {
              response.pagination = {
                more: more
              };
            }

            response.results = results;
            return response;
          }
        }
      }, options || {});

      if (render_html) {
        mergedOptions = $.extend({
          escapeMarkup: function escapeMarkup(text) {
            return text;
          },
          templateResult: function templateResult(option) {
            return option.html ? option.html : option.text;
          },
          templateSelection: function templateSelection(option) {
            return option.text;
          }
        }, mergedOptions);
      }

      $s2.select2(mergedOptions);
    });
    return this;
  };
})(jQuery);

(function ($) {
  $(document).ready(function () {
    $('.select2entity[data-autostart="true"]').select2entity();
  });
})(jQuery);

/***/ }),

/***/ "./assets/plugins/select2/dist/js/select2.js":
/*!***************************************************!*\
  !*** ./assets/plugins/select2/dist/js/select2.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Select2 4.0.0-rc.2
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 = function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }

    var S2;

    (function () {
      if (!S2 || !S2.requirejs) {
        if (!S2) {
          S2 = {};
        } else {
          require = S2;
        }
        /**
         * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
         * Available via the MIT or new BSD license.
         * see: http://github.com/jrburke/almond for details
         */
        //Going sloppy to avoid 'use strict' string cost, but strict practices should
        //be followed.

        /*jslint sloppy: true */

        /*global setTimeout: false */


        var requirejs, require, define;

        (function (undef) {
          var main,
              _req,
              makeMap,
              handlers,
              defined = {},
              waiting = {},
              config = {},
              defining = {},
              hasOwn = Object.prototype.hasOwnProperty,
              aps = [].slice,
              jsSuffixRegExp = /\.js$/;

          function hasProp(obj, prop) {
            return hasOwn.call(obj, prop);
          }
          /**
           * Given a relative module name, like ./something, normalize it to
           * a real name that can be mapped to a path.
           * @param {String} name the relative name
           * @param {String} baseName a real name that the name arg is relative
           * to.
           * @returns {String} normalized name
           */


          function normalize(name, baseName) {
            var nameParts,
                nameSegment,
                mapValue,
                foundMap,
                lastIndex,
                foundI,
                foundStarMap,
                starI,
                i,
                j,
                part,
                baseParts = baseName && baseName.split("/"),
                map = config.map,
                starMap = map && map['*'] || {}; //Adjust any relative paths.

            if (name && name.charAt(0) === ".") {
              //If have a base name, try to normalize against it,
              //otherwise, assume it is a top-level require that will
              //be relative to baseUrl in the end.
              if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);
                name = name.split('/');
                lastIndex = name.length - 1; // Node .js allowance:

                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                  name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                name = baseParts.concat(name); //start trimDots

                for (i = 0; i < name.length; i += 1) {
                  part = name[i];

                  if (part === ".") {
                    name.splice(i, 1);
                    i -= 1;
                  } else if (part === "..") {
                    if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                      //End of the line. Keep at least one non-dot
                      //path segment at the front so it can be mapped
                      //correctly to disk. Otherwise, there is likely
                      //no path mapping for a path starting with '..'.
                      //This can still fail, but catches the most reasonable
                      //uses of ..
                      break;
                    } else if (i > 0) {
                      name.splice(i - 1, 2);
                      i -= 2;
                    }
                  }
                } //end trimDots


                name = name.join("/");
              } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
              }
            } //Apply map config if available.


            if ((baseParts || starMap) && map) {
              nameParts = name.split('/');

              for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                  //Find the longest baseName segment match in the config.
                  //So, do joins on the biggest to smallest lengths of baseParts.
                  for (j = baseParts.length; j > 0; j -= 1) {
                    mapValue = map[baseParts.slice(0, j).join('/')]; //baseName segment has  config, find if it has one for
                    //this name.

                    if (mapValue) {
                      mapValue = mapValue[nameSegment];

                      if (mapValue) {
                        //Match, update name to the new value.
                        foundMap = mapValue;
                        foundI = i;
                        break;
                      }
                    }
                  }
                }

                if (foundMap) {
                  break;
                } //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.


                if (!foundStarMap && starMap && starMap[nameSegment]) {
                  foundStarMap = starMap[nameSegment];
                  starI = i;
                }
              }

              if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
              }

              if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
              }
            }

            return name;
          }

          function makeRequire(relName, forceSync) {
            return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              return _req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
            };
          }

          function makeNormalize(relName) {
            return function (name) {
              return normalize(name, relName);
            };
          }

          function makeLoad(depName) {
            return function (value) {
              defined[depName] = value;
            };
          }

          function callDep(name) {
            if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
            }

            if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
            }

            return defined[name];
          } //Turns a plugin!resource to [plugin, resource]
          //with the plugin being undefined if the name
          //did not have a plugin prefix.


          function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;

            if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
            }

            return [prefix, name];
          }
          /**
           * Makes a name map, normalizing the name, and using a plugin
           * for normalization if necessary. Grabs a ref to plugin
           * too, as an optimization.
           */


          makeMap = function makeMap(name, relName) {
            var plugin,
                parts = splitPrefix(name),
                prefix = parts[0];
            name = parts[1];

            if (prefix) {
              prefix = normalize(prefix, relName);
              plugin = callDep(prefix);
            } //Normalize according


            if (prefix) {
              if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
              } else {
                name = normalize(name, relName);
              }
            } else {
              name = normalize(name, relName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];

              if (prefix) {
                plugin = callDep(prefix);
              }
            } //Using ridiculous property names for space reasons


            return {
              f: prefix ? prefix + '!' + name : name,
              //fullName
              n: name,
              pr: prefix,
              p: plugin
            };
          };

          function makeConfig(name) {
            return function () {
              return config && config.config && config.config[name] || {};
            };
          }

          handlers = {
            require: function require(name) {
              return makeRequire(name);
            },
            exports: function exports(name) {
              var e = defined[name];

              if (typeof e !== 'undefined') {
                return e;
              } else {
                return defined[name] = {};
              }
            },
            module: function module(name) {
              return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
              };
            }
          };

          main = function main(name, deps, callback, relName) {
            var cjsModule,
                depName,
                ret,
                map,
                i,
                args = [],
                callbackType = _typeof(callback),
                usingExports; //Use name if no relName


            relName = relName || name; //Call the callback to define the module, if necessary.

            if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;

              for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f; //Fast path CommonJS standard dependencies.

                if (depName === "require") {
                  args[i] = handlers.require(name);
                } else if (depName === "exports") {
                  //CommonJS module spec 1.1
                  args[i] = handlers.exports(name);
                  usingExports = true;
                } else if (depName === "module") {
                  //CommonJS module spec 1.1
                  cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                  args[i] = callDep(depName);
                } else if (map.p) {
                  map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                  args[i] = defined[depName];
                } else {
                  throw new Error(name + ' missing ' + depName);
                }
              }

              ret = callback ? callback.apply(defined[name], args) : undefined;

              if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                  defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                  //Use the return value from the function.
                  defined[name] = ret;
                }
              }
            } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
            }
          };

          requirejs = require = _req = function req(deps, callback, relName, forceSync, alt) {
            if (typeof deps === "string") {
              if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
              } //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..


              return callDep(makeMap(deps, callback).f);
            } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;

              if (config.deps) {
                _req(config.deps, config.callback);
              }

              if (!callback) {
                return;
              }

              if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
              } else {
                deps = undef;
              }
            } //Support require(['a'])


            callback = callback || function () {}; //If relName is a function, it is an errback handler,
            //so remove it.


            if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
            } //Simulate async callback;


            if (forceSync) {
              main(undef, deps, callback, relName);
            } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                main(undef, deps, callback, relName);
              }, 4);
            }

            return _req;
          };
          /**
           * Just drops the config on the floor, but returns req in case
           * the config return value is used.
           */


          _req.config = function (cfg) {
            return _req(cfg);
          };
          /**
           * Expose module registry for debugging and tooling
           */


          requirejs._defined = defined;

          define = function define(name, deps, callback) {
            //This module may not have dependencies
            if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
            }

            if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
            }
          };

          define.amd = {
            jQuery: true
          };
        })();

        S2.requirejs = requirejs;
        S2.require = require;
        S2.define = define;
      }
    })();

    S2.define("almond", function () {});
    /* global jQuery:false, $:false */

    S2.define('jquery', [], function () {
      var _$ = jQuery || $;

      if (_$ == null && console && console.error) {
        console.error('Select2: An instance of jQuery or a jQuery-compatible library was not ' + 'found. Make sure that you are including jQuery before Select2 on your ' + 'web page.');
      }

      return _$;
    });
    S2.define('select2/utils', ['jquery'], function ($) {
      var Utils = {};

      Utils.Extend = function (ChildClass, SuperClass) {
        var __hasProp = {}.hasOwnProperty;

        function BaseConstructor() {
          this.constructor = ChildClass;
        }

        for (var key in SuperClass) {
          if (__hasProp.call(SuperClass, key)) {
            ChildClass[key] = SuperClass[key];
          }
        }

        BaseConstructor.prototype = SuperClass.prototype;
        ChildClass.prototype = new BaseConstructor();
        ChildClass.__super__ = SuperClass.prototype;
        return ChildClass;
      };

      function getMethods(theClass) {
        var proto = theClass.prototype;
        var methods = [];

        for (var methodName in proto) {
          var m = proto[methodName];

          if (typeof m !== 'function') {
            continue;
          }

          if (methodName === 'constructor') {
            continue;
          }

          methods.push(methodName);
        }

        return methods;
      }

      Utils.Decorate = function (SuperClass, DecoratorClass) {
        var decoratedMethods = getMethods(DecoratorClass);
        var superMethods = getMethods(SuperClass);

        function DecoratedClass() {
          var unshift = Array.prototype.unshift;
          var argCount = DecoratorClass.prototype.constructor.length;
          var calledConstructor = SuperClass.prototype.constructor;

          if (argCount > 0) {
            unshift.call(arguments, SuperClass.prototype.constructor);
            calledConstructor = DecoratorClass.prototype.constructor;
          }

          calledConstructor.apply(this, arguments);
        }

        DecoratorClass.displayName = SuperClass.displayName;

        function ctr() {
          this.constructor = DecoratedClass;
        }

        DecoratedClass.prototype = new ctr();

        for (var m = 0; m < superMethods.length; m++) {
          var superMethod = superMethods[m];
          DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
        }

        var calledMethod = function calledMethod(methodName) {
          // Stub out the original method if it's not decorating an actual method
          var originalMethod = function originalMethod() {};

          if (methodName in DecoratedClass.prototype) {
            originalMethod = DecoratedClass.prototype[methodName];
          }

          var decoratedMethod = DecoratorClass.prototype[methodName];
          return function () {
            var unshift = Array.prototype.unshift;
            unshift.call(arguments, originalMethod);
            return decoratedMethod.apply(this, arguments);
          };
        };

        for (var d = 0; d < decoratedMethods.length; d++) {
          var decoratedMethod = decoratedMethods[d];
          DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
        }

        return DecoratedClass;
      };

      var Observable = function Observable() {
        this.listeners = {};
      };

      Observable.prototype.on = function (event, callback) {
        this.listeners = this.listeners || {};

        if (event in this.listeners) {
          this.listeners[event].push(callback);
        } else {
          this.listeners[event] = [callback];
        }
      };

      Observable.prototype.trigger = function (event) {
        var slice = Array.prototype.slice;
        this.listeners = this.listeners || {};

        if (event in this.listeners) {
          this.invoke(this.listeners[event], slice.call(arguments, 1));
        }

        if ('*' in this.listeners) {
          this.invoke(this.listeners['*'], arguments);
        }
      };

      Observable.prototype.invoke = function (listeners, params) {
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i].apply(this, params);
        }
      };

      Utils.Observable = Observable;

      Utils.generateChars = function (length) {
        var chars = '';

        for (var i = 0; i < length; i++) {
          var randomChar = Math.floor(Math.random() * 36);
          chars += randomChar.toString(36);
        }

        return chars;
      };

      Utils.bind = function (func, context) {
        return function () {
          func.apply(context, arguments);
        };
      };

      Utils._convertData = function (data) {
        for (var originalKey in data) {
          var keys = originalKey.split('-');
          var dataLevel = data;

          if (keys.length === 1) {
            continue;
          }

          for (var k = 0; k < keys.length; k++) {
            var key = keys[k]; // Lowercase the first letter
            // By default, dash-separated becomes camelCase

            key = key.substring(0, 1).toLowerCase() + key.substring(1);

            if (!(key in dataLevel)) {
              dataLevel[key] = {};
            }

            if (k == keys.length - 1) {
              dataLevel[key] = data[originalKey];
            }

            dataLevel = dataLevel[key];
          }

          delete data[originalKey];
        }

        return data;
      };

      Utils.hasScroll = function (index, el) {
        // Adapted from the function created by @ShadowScripter
        // and adapted by @BillBarry on the Stack Exchange Code Review website.
        // The original code can be found at
        // http://codereview.stackexchange.com/q/13338
        // and was designed to be used with the Sizzle selector engine.
        var $el = $(el);
        var overflowX = el.style.overflowX;
        var overflowY = el.style.overflowY; //Check both x and y declarations

        if (overflowX === overflowY && (overflowY === 'hidden' || overflowY === 'visible')) {
          return false;
        }

        if (overflowX === 'scroll' || overflowY === 'scroll') {
          return true;
        }

        return $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth;
      };

      Utils.escapeMarkup = function (markup) {
        var replaceMap = {
          '\\': '&#92;',
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;',
          '/': '&#47;'
        }; // Do not try to escape the markup if it's not a string

        if (typeof markup !== 'string') {
          return markup;
        }

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
          return replaceMap[match];
        });
      };

      return Utils;
    });
    S2.define('select2/results', ['jquery', './utils'], function ($, Utils) {
      function Results($element, options, dataAdapter) {
        this.$element = $element;
        this.data = dataAdapter;
        this.options = options;

        Results.__super__.constructor.call(this);
      }

      Utils.Extend(Results, Utils.Observable);

      Results.prototype.render = function () {
        var $results = $('<ul class="select2-results__options" role="tree"></ul>');

        if (this.options.get('multiple')) {
          $results.attr('aria-multiselectable', 'true');
        }

        this.$results = $results;
        return $results;
      };

      Results.prototype.clear = function () {
        this.$results.empty();
      };

      Results.prototype.displayMessage = function (params) {
        var escapeMarkup = this.options.get('escapeMarkup');
        this.clear();
        this.hideLoading();
        var $message = $('<li role="treeitem" class="select2-results__option"></li>');
        var message = this.options.get('translations').get(params.message);
        $message.append(escapeMarkup(message(params.args)));
        this.$results.append($message);
      };

      Results.prototype.append = function (data) {
        this.hideLoading();
        var $options = [];

        if (data.results == null || data.results.length === 0) {
          if (this.$results.children().length === 0) {
            this.trigger('results:message', {
              message: 'noResults'
            });
          }

          return;
        }

        data.results = this.sort(data.results);

        for (var d = 0; d < data.results.length; d++) {
          var item = data.results[d];
          var $option = this.option(item);
          $options.push($option);
        }

        this.$results.append($options);
      };

      Results.prototype.position = function ($results, $dropdown) {
        var $resultsContainer = $dropdown.find('.select2-results');
        $resultsContainer.append($results);
      };

      Results.prototype.sort = function (data) {
        var sorter = this.options.get('sorter');
        return sorter(data);
      };

      Results.prototype.setClasses = function () {
        var self = this;
        this.data.current(function (selected) {
          var selectedIds = $.map(selected, function (s) {
            return s.id.toString();
          });
          var $options = self.$results.find('.select2-results__option[aria-selected]');
          $options.each(function () {
            var $option = $(this);
            var item = $.data(this, 'data'); // id needs to be converted to a string when comparing

            var id = '' + item.id;

            if ($.inArray(id, selectedIds) > -1) {
              $option.attr('aria-selected', 'true');
            } else {
              $option.attr('aria-selected', 'false');
            }
          });
          var $selected = $options.filter('[aria-selected=true]'); // Check if there are any selected options

          if ($selected.length > 0) {
            // If there are selected options, highlight the first
            $selected.first().trigger('mouseenter');
          } else {
            // If there are no selected options, highlight the first option
            // in the dropdown
            $options.first().trigger('mouseenter');
          }
        });
      };

      Results.prototype.showLoading = function (params) {
        this.hideLoading();
        var loadingMore = this.options.get('translations').get('searching');
        var loading = {
          disabled: true,
          loading: true,
          text: loadingMore(params)
        };
        var $loading = this.option(loading);
        $loading.className += ' loading-results';
        this.$results.prepend($loading);
      };

      Results.prototype.hideLoading = function () {
        this.$results.find('.loading-results').remove();
      };

      Results.prototype.option = function (data) {
        var option = document.createElement('li');
        option.className = 'select2-results__option';
        var attrs = {
          'role': 'treeitem',
          'aria-selected': 'false'
        };

        if (data.disabled) {
          delete attrs['aria-selected'];
          attrs['aria-disabled'] = 'true';
        }

        if (data.id == null) {
          delete attrs['aria-selected'];
        }

        if (data._resultId != null) {
          option.id = data._resultId;
        }

        if (data.title) {
          option.title = data.title;
        }

        if (data.children) {
          attrs.role = 'group';
          attrs['aria-label'] = data.text;
          delete attrs['aria-selected'];
        }

        for (var attr in attrs) {
          var val = attrs[attr];
          option.setAttribute(attr, val);
        }

        if (data.children) {
          var $option = $(option);
          var label = document.createElement('strong');
          label.className = 'select2-results__group';
          var $label = $(label);
          this.template(data, label);
          var $children = [];

          for (var c = 0; c < data.children.length; c++) {
            var child = data.children[c];
            var $child = this.option(child);
            $children.push($child);
          }

          var $childrenContainer = $('<ul></ul>', {
            'class': 'select2-results__options select2-results__options--nested'
          });
          $childrenContainer.append($children);
          $option.append(label);
          $option.append($childrenContainer);
        } else {
          this.template(data, option);
        }

        $.data(option, 'data', data);
        return option;
      };

      Results.prototype.bind = function (container, $container) {
        var self = this;
        var id = container.id + '-results';
        this.$results.attr('id', id);
        container.on('results:all', function (params) {
          self.clear();
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
          }
        });
        container.on('results:append', function (params) {
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
          }
        });
        container.on('query', function (params) {
          self.showLoading(params);
        });
        container.on('select', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();
        });
        container.on('unselect', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expended="true"
          self.$results.attr('aria-expanded', 'true');
          self.$results.attr('aria-hidden', 'false');
          self.setClasses();
          self.ensureHighlightVisible();
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expended="false"
          self.$results.attr('aria-expanded', 'false');
          self.$results.attr('aria-hidden', 'true');
          self.$results.removeAttr('aria-activedescendant');
        });
        container.on('results:toggle', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          $highlighted.trigger('mouseup');
        });
        container.on('results:select', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          var data = $highlighted.data('data');

          if ($highlighted.attr('aria-selected') == 'true') {
            self.trigger('close');
          } else {
            self.trigger('select', {
              data: data
            });
          }
        });
        container.on('results:previous', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('[aria-selected]');
          var currentIndex = $options.index($highlighted); // If we are already at te top, don't move further

          if (currentIndex === 0) {
            return;
          }

          var nextIndex = currentIndex - 1; // If none are highlighted, highlight the first

          if ($highlighted.length === 0) {
            nextIndex = 0;
          }

          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top;
          var nextTop = $next.offset().top;
          var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextTop - currentOffset < 0) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:next', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('[aria-selected]');
          var currentIndex = $options.index($highlighted);
          var nextIndex = currentIndex + 1; // If we are at the last option, stay there

          if (nextIndex >= $options.length) {
            return;
          }

          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var nextBottom = $next.offset().top + $next.outerHeight(false);
          var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextBottom > currentOffset) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:focus', function (params) {
          params.element.addClass('select2-results__option--highlighted');
        });
        container.on('results:message', function (params) {
          self.displayMessage(params);
        });

        if ($.fn.mousewheel) {
          this.$results.on('mousewheel', function (e) {
            var top = self.$results.scrollTop();
            var bottom = self.$results.get(0).scrollHeight - self.$results.scrollTop() + e.deltaY;
            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

            if (isAtTop) {
              self.$results.scrollTop(0);
              e.preventDefault();
              e.stopPropagation();
            } else if (isAtBottom) {
              self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());
              e.preventDefault();
              e.stopPropagation();
            }
          });
        }

        this.$results.on('mouseup', '.select2-results__option[aria-selected]', function (evt) {
          var $this = $(this);
          var data = $this.data('data');

          if ($this.attr('aria-selected') === 'true') {
            if (self.options.get('multiple')) {
              self.trigger('unselect', {
                originalEvent: evt,
                data: data
              });
            } else {
              self.trigger('close');
            }

            return;
          }

          self.trigger('select', {
            originalEvent: evt,
            data: data
          });
        });
        this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function (evt) {
          var data = $(this).data('data');
          self.getHighlightedResults().removeClass('select2-results__option--highlighted');
          self.trigger('results:focus', {
            data: data,
            element: $(this)
          });
        });
      };

      Results.prototype.getHighlightedResults = function () {
        var $highlighted = this.$results.find('.select2-results__option--highlighted');
        return $highlighted;
      };

      Results.prototype.destroy = function () {
        this.$results.remove();
      };

      Results.prototype.ensureHighlightVisible = function () {
        var $highlighted = this.getHighlightedResults();

        if ($highlighted.length === 0) {
          return;
        }

        var $options = this.$results.find('[aria-selected]');
        var currentIndex = $options.index($highlighted);
        var currentOffset = this.$results.offset().top;
        var nextTop = $highlighted.offset().top;
        var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
        var offsetDelta = nextTop - currentOffset;
        nextOffset -= $highlighted.outerHeight(false) * 2;

        if (currentIndex <= 2) {
          this.$results.scrollTop(0);
        } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
          this.$results.scrollTop(nextOffset);
        }
      };

      Results.prototype.template = function (result, container) {
        var template = this.options.get('templateResult');
        var escapeMarkup = this.options.get('escapeMarkup');
        var content = template(result);

        if (content == null) {
          container.style.display = 'none';
        } else if (typeof content === 'string') {
          container.innerHTML = escapeMarkup(content);
        } else {
          $(container).append(content);
        }
      };

      return Results;
    });
    S2.define('select2/keys', [], function () {
      var KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
      return KEYS;
    });
    S2.define('select2/selection/base', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function BaseSelection($element, options) {
        this.$element = $element;
        this.options = options;

        BaseSelection.__super__.constructor.call(this);
      }

      Utils.Extend(BaseSelection, Utils.Observable);

      BaseSelection.prototype.render = function () {
        var $selection = $('<span class="select2-selection" role="combobox" ' + 'aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">' + '</span>');
        this._tabindex = 0;

        if (this.$element.data('old-tabindex') != null) {
          this._tabindex = this.$element.data('old-tabindex');
        } else if (this.$element.attr('tabindex') != null) {
          this._tabindex = this.$element.attr('tabindex');
        }

        $selection.attr('title', this.$element.attr('title'));
        $selection.attr('tabindex', this._tabindex);
        this.$selection = $selection;
        return $selection;
      };

      BaseSelection.prototype.bind = function (container, $container) {
        var self = this;
        var id = container.id + '-container';
        var resultsId = container.id + '-results';
        this.container = container;
        this.$selection.on('focus', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('blur', function (evt) {
          self.trigger('blur', evt);
        });
        this.$selection.on('keydown', function (evt) {
          self.trigger('keypress', evt);

          if (evt.which === KEYS.SPACE) {
            evt.preventDefault();
          }
        });
        container.on('results:focus', function (params) {
          self.$selection.attr('aria-activedescendant', params.data._resultId);
        });
        container.on('selection:update', function (params) {
          self.update(params.data);
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expanded="true"
          self.$selection.attr('aria-expanded', 'true');
          self.$selection.attr('aria-owns', resultsId);

          self._attachCloseHandler(container);
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expanded="false"
          self.$selection.attr('aria-expanded', 'false');
          self.$selection.removeAttr('aria-activedescendant');
          self.$selection.removeAttr('aria-owns');
          self.$selection.focus();

          self._detachCloseHandler(container);
        });
        container.on('enable', function () {
          self.$selection.attr('tabindex', self._tabindex);
        });
        container.on('disable', function () {
          self.$selection.attr('tabindex', '-1');
        });
      };

      BaseSelection.prototype._attachCloseHandler = function (container) {
        var self = this;
        $(document.body).on('mousedown.select2.' + container.id, function (e) {
          var $target = $(e.target);
          var $select = $target.closest('.select2');
          var $all = $('.select2.select2-container--open');
          $all.each(function () {
            var $this = $(this);

            if (this == $select[0]) {
              return;
            }

            var $element = $this.data('element');
            $element.select2('close');
          });
        });
      };

      BaseSelection.prototype._detachCloseHandler = function (container) {
        $(document.body).off('mousedown.select2.' + container.id);
      };

      BaseSelection.prototype.position = function ($selection, $container) {
        var $selectionContainer = $container.find('.selection');
        $selectionContainer.append($selection);
      };

      BaseSelection.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      };

      BaseSelection.prototype.update = function (data) {
        throw new Error('The `update` method must be defined in child classes.');
      };

      return BaseSelection;
    });
    S2.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function ($, BaseSelection, Utils, KEYS) {
      function SingleSelection() {
        SingleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(SingleSelection, BaseSelection);

      SingleSelection.prototype.render = function () {
        var $selection = SingleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--single');
        $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + '</span>');
        return $selection;
      };

      SingleSelection.prototype.bind = function (container, $container) {
        var self = this;

        SingleSelection.__super__.bind.apply(this, arguments);

        var id = container.id + '-container';
        this.$selection.find('.select2-selection__rendered').attr('id', id);
        this.$selection.attr('aria-labelledby', id);
        this.$selection.on('mousedown', function (evt) {
          // Only respond to left clicks
          if (evt.which !== 1) {
            return;
          }

          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('focus', function (evt) {// User focuses on the container
        });
        this.$selection.on('blur', function (evt) {// User exits the container
        });
        container.on('selection:update', function (params) {
          self.update(params.data);
        });
      };

      SingleSelection.prototype.clear = function () {
        this.$selection.find('.select2-selection__rendered').empty();
      };

      SingleSelection.prototype.display = function (data) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data));
      };

      SingleSelection.prototype.selectionContainer = function () {
        return $('<span></span>');
      };

      SingleSelection.prototype.update = function (data) {
        if (data.length === 0) {
          this.clear();
          return;
        }

        var selection = data[0];
        var formatted = this.display(selection);
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.empty().append(formatted);
        $rendered.prop('title', selection.title || selection.text);
      };

      return SingleSelection;
    });
    S2.define('select2/selection/multiple', ['jquery', './base', '../utils'], function ($, BaseSelection, Utils) {
      function MultipleSelection($element, options) {
        MultipleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(MultipleSelection, BaseSelection);

      MultipleSelection.prototype.render = function () {
        var $selection = MultipleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--multiple');
        $selection.html('<ul class="select2-selection__rendered"></ul>');
        return $selection;
      };

      MultipleSelection.prototype.bind = function (container, $container) {
        var self = this;

        MultipleSelection.__super__.bind.apply(this, arguments);

        this.$selection.on('click', function (evt) {
          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('click', '.select2-selection__choice__remove', function (evt) {
          var $remove = $(this);
          var $selection = $remove.parent();
          var data = $selection.data('data');
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        });
      };

      MultipleSelection.prototype.clear = function () {
        this.$selection.find('.select2-selection__rendered').empty();
      };

      MultipleSelection.prototype.display = function (data) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data));
      };

      MultipleSelection.prototype.selectionContainer = function () {
        var $container = $('<li class="select2-selection__choice">' + '<span class="select2-selection__choice__remove" role="presentation">' + '&times;' + '</span>' + '</li>');
        return $container;
      };

      MultipleSelection.prototype.update = function (data) {
        this.clear();

        if (data.length === 0) {
          return;
        }

        var $selections = $();

        for (var d = 0; d < data.length; d++) {
          var selection = data[d];
          var formatted = this.display(selection);
          var $selection = this.selectionContainer();
          $selection.append(formatted);
          $selection.prop('title', selection.title || selection.text);
          $selection.data('data', selection);
          $selections = $selections.add($selection);
        }

        this.$selection.find('.select2-selection__rendered').append($selections);
      };

      return MultipleSelection;
    });
    S2.define('select2/selection/placeholder', ['../utils'], function (Utils) {
      function Placeholder(decorated, $element, options) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options);
      }

      Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
        var $placeholder = this.selectionContainer();
        $placeholder.html(this.display(placeholder));
        $placeholder.addClass('select2-selection__placeholder').removeClass('select2-selection__choice');
        return $placeholder;
      };

      Placeholder.prototype.update = function (decorated, data) {
        var singlePlaceholder = data.length == 1 && data[0].id != this.placeholder.id;
        var multipleSelections = data.length > 1;

        if (multipleSelections || singlePlaceholder) {
          return decorated.call(this, data);
        }

        this.clear();
        var $placeholder = this.createPlaceholder(this.placeholder);
        this.$selection.find('.select2-selection__rendered').append($placeholder);
      };

      return Placeholder;
    });
    S2.define('select2/selection/allowClear', ['jquery'], function ($) {
      function AllowClear() {}

      AllowClear.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);

        if (self.placeholder == null) {
          if (self.options.get('debug') && window.console && console.error) {
            console.error('Select2: The `allowClear` option should be used in combination ' + 'with the `placeholder` option.');
          }
        }

        this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
          // Ignore the event if it is disabled
          if (self.options.get('disabled')) {
            return;
          }

          evt.stopPropagation();
          var data = $(this).data('data');

          for (var d = 0; d < data.length; d++) {
            var unselectData = {
              data: data[d]
            }; // Trigger the `unselect` event, so people can prevent it from being
            // cleared.

            self.trigger('unselect', unselectData); // If the event was prevented, don't clear it out.

            if (unselectData.prevented) {
              return;
            }
          }

          self.$element.val(self.placeholder.id).trigger('change');
          self.trigger('toggle');
        });
      };

      AllowClear.prototype.update = function (decorated, data) {
        decorated.call(this, data);

        if (this.$selection.find('.select2-selection__placeholder').length > 0 || data.length === 0) {
          return;
        }

        var $remove = $('<span class="select2-selection__clear">' + '&times;' + '</span>');
        $remove.data('data', data);
        this.$selection.find('.select2-selection__rendered').prepend($remove);
      };

      return AllowClear;
    });
    S2.define('select2/selection/search', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function Search(decorated, $element, options) {
        decorated.call(this, $element, options);
      }

      Search.prototype.render = function (decorated) {
        var $search = $('<li class="select2-search select2-search--inline">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="off"' + ' spellcheck="false" role="textbox" />' + '</li>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        var $rendered = decorated.call(this);
        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('open', function () {
          self.$search.attr('tabindex', 0);
          self.$search.focus();
        });
        container.on('close', function () {
          self.$search.attr('tabindex', -1);
          self.$search.val('');
          self.$search.focus();
        });
        container.on('enable', function () {
          self.$search.prop('disabled', false);
        });
        container.on('disable', function () {
          self.$search.prop('disabled', true);
        });
        this.$selection.on('focusin', '.select2-search--inline', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('focusout', '.select2-search--inline', function (evt) {
          self.trigger('blur', evt);
        });
        this.$selection.on('keydown', '.select2-search--inline', function (evt) {
          evt.stopPropagation();
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
          var key = evt.which;

          if (key === KEYS.BACKSPACE && self.$search.val() === '') {
            var $previousChoice = self.$searchContainer.prev('.select2-selection__choice');

            if ($previousChoice.length > 0) {
              var item = $previousChoice.data('data');
              self.searchRemoveChoice(item);
            }
          }
        }); // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.

        this.$selection.on('input', '.select2-search--inline', function (evt) {
          // Unbind the duplicated `keyup` event
          self.$selection.off('keyup.search');
        });
        this.$selection.on('keyup.search input', '.select2-search--inline', function (evt) {
          self.handleSearch(evt);
        });
      };

      Search.prototype.createPlaceholder = function (decorated, placeholder) {
        this.$search.attr('placeholder', placeholder.text);
      };

      Search.prototype.update = function (decorated, data) {
        this.$search.attr('placeholder', '');
        decorated.call(this, data);
        this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);
        this.resizeSearch();
      };

      Search.prototype.handleSearch = function () {
        this.resizeSearch();

        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.searchRemoveChoice = function (decorated, item) {
        this.trigger('unselect', {
          data: item
        });
        this.trigger('open');
        this.$search.val(item.text + ' ');
      };

      Search.prototype.resizeSearch = function () {
        this.$search.css('width', '25px');
        var width = '';

        if (this.$search.attr('placeholder') !== '') {
          width = this.$selection.find('.select2-selection__rendered').innerWidth();
        } else {
          var minimumWidth = this.$search.val().length + 1;
          width = minimumWidth * 0.75 + 'em';
        }

        this.$search.css('width', width);
      };

      return Search;
    });
    S2.define('select2/selection/eventRelay', ['jquery'], function ($) {
      function EventRelay() {}

      EventRelay.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var relayEvents = ['open', 'opening', 'close', 'closing', 'select', 'selecting', 'unselect', 'unselecting'];
        var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];
        decorated.call(this, container, $container);
        container.on('*', function (name, params) {
          // Ignore events that should not be relayed
          if ($.inArray(name, relayEvents) === -1) {
            return;
          } // The parameters should always be an object


          params = params || {}; // Generate the jQuery event for the Select2 event

          var evt = $.Event('select2:' + name, {
            params: params
          });
          self.$element.trigger(evt); // Only handle preventable events if it was one

          if ($.inArray(name, preventableEvents) === -1) {
            return;
          }

          params.prevented = evt.isDefaultPrevented();
        });
      };

      return EventRelay;
    });
    S2.define('select2/translation', ['jquery', 'require'], function ($, require) {
      function Translation(dict) {
        this.dict = dict || {};
      }

      Translation.prototype.all = function () {
        return this.dict;
      };

      Translation.prototype.get = function (key) {
        return this.dict[key];
      };

      Translation.prototype.extend = function (translation) {
        this.dict = $.extend({}, translation.all(), this.dict);
      }; // Static functions


      Translation._cache = {};

      Translation.loadPath = function (path) {
        if (!(path in Translation._cache)) {
          var translations = require(path);

          Translation._cache[path] = translations;
        }

        return new Translation(Translation._cache[path]);
      };

      return Translation;
    });
    S2.define('select2/diacritics', [], function () {
      var diacritics = {
        "\u24B6": 'A',
        "\uFF21": 'A',
        "\xC0": 'A',
        "\xC1": 'A',
        "\xC2": 'A',
        "\u1EA6": 'A',
        "\u1EA4": 'A',
        "\u1EAA": 'A',
        "\u1EA8": 'A',
        "\xC3": 'A',
        "\u0100": 'A',
        "\u0102": 'A',
        "\u1EB0": 'A',
        "\u1EAE": 'A',
        "\u1EB4": 'A',
        "\u1EB2": 'A',
        "\u0226": 'A',
        "\u01E0": 'A',
        "\xC4": 'A',
        "\u01DE": 'A',
        "\u1EA2": 'A',
        "\xC5": 'A',
        "\u01FA": 'A',
        "\u01CD": 'A',
        "\u0200": 'A',
        "\u0202": 'A',
        "\u1EA0": 'A',
        "\u1EAC": 'A',
        "\u1EB6": 'A',
        "\u1E00": 'A',
        "\u0104": 'A',
        "\u023A": 'A',
        "\u2C6F": 'A',
        "\uA732": 'AA',
        "\xC6": 'AE',
        "\u01FC": 'AE',
        "\u01E2": 'AE',
        "\uA734": 'AO',
        "\uA736": 'AU',
        "\uA738": 'AV',
        "\uA73A": 'AV',
        "\uA73C": 'AY',
        "\u24B7": 'B',
        "\uFF22": 'B',
        "\u1E02": 'B',
        "\u1E04": 'B',
        "\u1E06": 'B',
        "\u0243": 'B',
        "\u0182": 'B',
        "\u0181": 'B',
        "\u24B8": 'C',
        "\uFF23": 'C',
        "\u0106": 'C',
        "\u0108": 'C',
        "\u010A": 'C',
        "\u010C": 'C',
        "\xC7": 'C',
        "\u1E08": 'C',
        "\u0187": 'C',
        "\u023B": 'C',
        "\uA73E": 'C',
        "\u24B9": 'D',
        "\uFF24": 'D',
        "\u1E0A": 'D',
        "\u010E": 'D',
        "\u1E0C": 'D',
        "\u1E10": 'D',
        "\u1E12": 'D',
        "\u1E0E": 'D',
        "\u0110": 'D',
        "\u018B": 'D',
        "\u018A": 'D',
        "\u0189": 'D',
        "\uA779": 'D',
        "\u01F1": 'DZ',
        "\u01C4": 'DZ',
        "\u01F2": 'Dz',
        "\u01C5": 'Dz',
        "\u24BA": 'E',
        "\uFF25": 'E',
        "\xC8": 'E',
        "\xC9": 'E',
        "\xCA": 'E',
        "\u1EC0": 'E',
        "\u1EBE": 'E',
        "\u1EC4": 'E',
        "\u1EC2": 'E',
        "\u1EBC": 'E',
        "\u0112": 'E',
        "\u1E14": 'E',
        "\u1E16": 'E',
        "\u0114": 'E',
        "\u0116": 'E',
        "\xCB": 'E',
        "\u1EBA": 'E',
        "\u011A": 'E',
        "\u0204": 'E',
        "\u0206": 'E',
        "\u1EB8": 'E',
        "\u1EC6": 'E',
        "\u0228": 'E',
        "\u1E1C": 'E',
        "\u0118": 'E',
        "\u1E18": 'E',
        "\u1E1A": 'E',
        "\u0190": 'E',
        "\u018E": 'E',
        "\u24BB": 'F',
        "\uFF26": 'F',
        "\u1E1E": 'F',
        "\u0191": 'F',
        "\uA77B": 'F',
        "\u24BC": 'G',
        "\uFF27": 'G',
        "\u01F4": 'G',
        "\u011C": 'G',
        "\u1E20": 'G',
        "\u011E": 'G',
        "\u0120": 'G',
        "\u01E6": 'G',
        "\u0122": 'G',
        "\u01E4": 'G',
        "\u0193": 'G',
        "\uA7A0": 'G',
        "\uA77D": 'G',
        "\uA77E": 'G',
        "\u24BD": 'H',
        "\uFF28": 'H',
        "\u0124": 'H',
        "\u1E22": 'H',
        "\u1E26": 'H',
        "\u021E": 'H',
        "\u1E24": 'H',
        "\u1E28": 'H',
        "\u1E2A": 'H',
        "\u0126": 'H',
        "\u2C67": 'H',
        "\u2C75": 'H',
        "\uA78D": 'H',
        "\u24BE": 'I',
        "\uFF29": 'I',
        "\xCC": 'I',
        "\xCD": 'I',
        "\xCE": 'I',
        "\u0128": 'I',
        "\u012A": 'I',
        "\u012C": 'I',
        "\u0130": 'I',
        "\xCF": 'I',
        "\u1E2E": 'I',
        "\u1EC8": 'I',
        "\u01CF": 'I',
        "\u0208": 'I',
        "\u020A": 'I',
        "\u1ECA": 'I',
        "\u012E": 'I',
        "\u1E2C": 'I',
        "\u0197": 'I',
        "\u24BF": 'J',
        "\uFF2A": 'J',
        "\u0134": 'J',
        "\u0248": 'J',
        "\u24C0": 'K',
        "\uFF2B": 'K',
        "\u1E30": 'K',
        "\u01E8": 'K',
        "\u1E32": 'K',
        "\u0136": 'K',
        "\u1E34": 'K',
        "\u0198": 'K',
        "\u2C69": 'K',
        "\uA740": 'K',
        "\uA742": 'K',
        "\uA744": 'K',
        "\uA7A2": 'K',
        "\u24C1": 'L',
        "\uFF2C": 'L',
        "\u013F": 'L',
        "\u0139": 'L',
        "\u013D": 'L',
        "\u1E36": 'L',
        "\u1E38": 'L',
        "\u013B": 'L',
        "\u1E3C": 'L',
        "\u1E3A": 'L',
        "\u0141": 'L',
        "\u023D": 'L',
        "\u2C62": 'L',
        "\u2C60": 'L',
        "\uA748": 'L',
        "\uA746": 'L',
        "\uA780": 'L',
        "\u01C7": 'LJ',
        "\u01C8": 'Lj',
        "\u24C2": 'M',
        "\uFF2D": 'M',
        "\u1E3E": 'M',
        "\u1E40": 'M',
        "\u1E42": 'M',
        "\u2C6E": 'M',
        "\u019C": 'M',
        "\u24C3": 'N',
        "\uFF2E": 'N',
        "\u01F8": 'N',
        "\u0143": 'N',
        "\xD1": 'N',
        "\u1E44": 'N',
        "\u0147": 'N',
        "\u1E46": 'N',
        "\u0145": 'N',
        "\u1E4A": 'N',
        "\u1E48": 'N',
        "\u0220": 'N',
        "\u019D": 'N',
        "\uA790": 'N',
        "\uA7A4": 'N',
        "\u01CA": 'NJ',
        "\u01CB": 'Nj',
        "\u24C4": 'O',
        "\uFF2F": 'O',
        "\xD2": 'O',
        "\xD3": 'O',
        "\xD4": 'O',
        "\u1ED2": 'O',
        "\u1ED0": 'O',
        "\u1ED6": 'O',
        "\u1ED4": 'O',
        "\xD5": 'O',
        "\u1E4C": 'O',
        "\u022C": 'O',
        "\u1E4E": 'O',
        "\u014C": 'O',
        "\u1E50": 'O',
        "\u1E52": 'O',
        "\u014E": 'O',
        "\u022E": 'O',
        "\u0230": 'O',
        "\xD6": 'O',
        "\u022A": 'O',
        "\u1ECE": 'O',
        "\u0150": 'O',
        "\u01D1": 'O',
        "\u020C": 'O',
        "\u020E": 'O',
        "\u01A0": 'O',
        "\u1EDC": 'O',
        "\u1EDA": 'O',
        "\u1EE0": 'O',
        "\u1EDE": 'O',
        "\u1EE2": 'O',
        "\u1ECC": 'O',
        "\u1ED8": 'O',
        "\u01EA": 'O',
        "\u01EC": 'O',
        "\xD8": 'O',
        "\u01FE": 'O',
        "\u0186": 'O',
        "\u019F": 'O',
        "\uA74A": 'O',
        "\uA74C": 'O',
        "\u01A2": 'OI',
        "\uA74E": 'OO',
        "\u0222": 'OU',
        "\u24C5": 'P',
        "\uFF30": 'P',
        "\u1E54": 'P',
        "\u1E56": 'P',
        "\u01A4": 'P',
        "\u2C63": 'P',
        "\uA750": 'P',
        "\uA752": 'P',
        "\uA754": 'P',
        "\u24C6": 'Q',
        "\uFF31": 'Q',
        "\uA756": 'Q',
        "\uA758": 'Q',
        "\u024A": 'Q',
        "\u24C7": 'R',
        "\uFF32": 'R',
        "\u0154": 'R',
        "\u1E58": 'R',
        "\u0158": 'R',
        "\u0210": 'R',
        "\u0212": 'R',
        "\u1E5A": 'R',
        "\u1E5C": 'R',
        "\u0156": 'R',
        "\u1E5E": 'R',
        "\u024C": 'R',
        "\u2C64": 'R',
        "\uA75A": 'R',
        "\uA7A6": 'R',
        "\uA782": 'R',
        "\u24C8": 'S',
        "\uFF33": 'S',
        "\u1E9E": 'S',
        "\u015A": 'S',
        "\u1E64": 'S',
        "\u015C": 'S',
        "\u1E60": 'S',
        "\u0160": 'S',
        "\u1E66": 'S',
        "\u1E62": 'S',
        "\u1E68": 'S',
        "\u0218": 'S',
        "\u015E": 'S',
        "\u2C7E": 'S',
        "\uA7A8": 'S',
        "\uA784": 'S',
        "\u24C9": 'T',
        "\uFF34": 'T',
        "\u1E6A": 'T',
        "\u0164": 'T',
        "\u1E6C": 'T',
        "\u021A": 'T',
        "\u0162": 'T',
        "\u1E70": 'T',
        "\u1E6E": 'T',
        "\u0166": 'T',
        "\u01AC": 'T',
        "\u01AE": 'T',
        "\u023E": 'T',
        "\uA786": 'T',
        "\uA728": 'TZ',
        "\u24CA": 'U',
        "\uFF35": 'U',
        "\xD9": 'U',
        "\xDA": 'U',
        "\xDB": 'U',
        "\u0168": 'U',
        "\u1E78": 'U',
        "\u016A": 'U',
        "\u1E7A": 'U',
        "\u016C": 'U',
        "\xDC": 'U',
        "\u01DB": 'U',
        "\u01D7": 'U',
        "\u01D5": 'U',
        "\u01D9": 'U',
        "\u1EE6": 'U',
        "\u016E": 'U',
        "\u0170": 'U',
        "\u01D3": 'U',
        "\u0214": 'U',
        "\u0216": 'U',
        "\u01AF": 'U',
        "\u1EEA": 'U',
        "\u1EE8": 'U',
        "\u1EEE": 'U',
        "\u1EEC": 'U',
        "\u1EF0": 'U',
        "\u1EE4": 'U',
        "\u1E72": 'U',
        "\u0172": 'U',
        "\u1E76": 'U',
        "\u1E74": 'U',
        "\u0244": 'U',
        "\u24CB": 'V',
        "\uFF36": 'V',
        "\u1E7C": 'V',
        "\u1E7E": 'V',
        "\u01B2": 'V',
        "\uA75E": 'V',
        "\u0245": 'V',
        "\uA760": 'VY',
        "\u24CC": 'W',
        "\uFF37": 'W',
        "\u1E80": 'W',
        "\u1E82": 'W',
        "\u0174": 'W',
        "\u1E86": 'W',
        "\u1E84": 'W',
        "\u1E88": 'W',
        "\u2C72": 'W',
        "\u24CD": 'X',
        "\uFF38": 'X',
        "\u1E8A": 'X',
        "\u1E8C": 'X',
        "\u24CE": 'Y',
        "\uFF39": 'Y',
        "\u1EF2": 'Y',
        "\xDD": 'Y',
        "\u0176": 'Y',
        "\u1EF8": 'Y',
        "\u0232": 'Y',
        "\u1E8E": 'Y',
        "\u0178": 'Y',
        "\u1EF6": 'Y',
        "\u1EF4": 'Y',
        "\u01B3": 'Y',
        "\u024E": 'Y',
        "\u1EFE": 'Y',
        "\u24CF": 'Z',
        "\uFF3A": 'Z',
        "\u0179": 'Z',
        "\u1E90": 'Z',
        "\u017B": 'Z',
        "\u017D": 'Z',
        "\u1E92": 'Z',
        "\u1E94": 'Z',
        "\u01B5": 'Z',
        "\u0224": 'Z',
        "\u2C7F": 'Z',
        "\u2C6B": 'Z',
        "\uA762": 'Z',
        "\u24D0": 'a',
        "\uFF41": 'a',
        "\u1E9A": 'a',
        "\xE0": 'a',
        "\xE1": 'a',
        "\xE2": 'a',
        "\u1EA7": 'a',
        "\u1EA5": 'a',
        "\u1EAB": 'a',
        "\u1EA9": 'a',
        "\xE3": 'a',
        "\u0101": 'a',
        "\u0103": 'a',
        "\u1EB1": 'a',
        "\u1EAF": 'a',
        "\u1EB5": 'a',
        "\u1EB3": 'a',
        "\u0227": 'a',
        "\u01E1": 'a',
        "\xE4": 'a',
        "\u01DF": 'a',
        "\u1EA3": 'a',
        "\xE5": 'a',
        "\u01FB": 'a',
        "\u01CE": 'a',
        "\u0201": 'a',
        "\u0203": 'a',
        "\u1EA1": 'a',
        "\u1EAD": 'a',
        "\u1EB7": 'a',
        "\u1E01": 'a',
        "\u0105": 'a',
        "\u2C65": 'a',
        "\u0250": 'a',
        "\uA733": 'aa',
        "\xE6": 'ae',
        "\u01FD": 'ae',
        "\u01E3": 'ae',
        "\uA735": 'ao',
        "\uA737": 'au',
        "\uA739": 'av',
        "\uA73B": 'av',
        "\uA73D": 'ay',
        "\u24D1": 'b',
        "\uFF42": 'b',
        "\u1E03": 'b',
        "\u1E05": 'b',
        "\u1E07": 'b',
        "\u0180": 'b',
        "\u0183": 'b',
        "\u0253": 'b',
        "\u24D2": 'c',
        "\uFF43": 'c',
        "\u0107": 'c',
        "\u0109": 'c',
        "\u010B": 'c',
        "\u010D": 'c',
        "\xE7": 'c',
        "\u1E09": 'c',
        "\u0188": 'c',
        "\u023C": 'c',
        "\uA73F": 'c',
        "\u2184": 'c',
        "\u24D3": 'd',
        "\uFF44": 'd',
        "\u1E0B": 'd',
        "\u010F": 'd',
        "\u1E0D": 'd',
        "\u1E11": 'd',
        "\u1E13": 'd',
        "\u1E0F": 'd',
        "\u0111": 'd',
        "\u018C": 'd',
        "\u0256": 'd',
        "\u0257": 'd',
        "\uA77A": 'd',
        "\u01F3": 'dz',
        "\u01C6": 'dz',
        "\u24D4": 'e',
        "\uFF45": 'e',
        "\xE8": 'e',
        "\xE9": 'e',
        "\xEA": 'e',
        "\u1EC1": 'e',
        "\u1EBF": 'e',
        "\u1EC5": 'e',
        "\u1EC3": 'e',
        "\u1EBD": 'e',
        "\u0113": 'e',
        "\u1E15": 'e',
        "\u1E17": 'e',
        "\u0115": 'e',
        "\u0117": 'e',
        "\xEB": 'e',
        "\u1EBB": 'e',
        "\u011B": 'e',
        "\u0205": 'e',
        "\u0207": 'e',
        "\u1EB9": 'e',
        "\u1EC7": 'e',
        "\u0229": 'e',
        "\u1E1D": 'e',
        "\u0119": 'e',
        "\u1E19": 'e',
        "\u1E1B": 'e',
        "\u0247": 'e',
        "\u025B": 'e',
        "\u01DD": 'e',
        "\u24D5": 'f',
        "\uFF46": 'f',
        "\u1E1F": 'f',
        "\u0192": 'f',
        "\uA77C": 'f',
        "\u24D6": 'g',
        "\uFF47": 'g',
        "\u01F5": 'g',
        "\u011D": 'g',
        "\u1E21": 'g',
        "\u011F": 'g',
        "\u0121": 'g',
        "\u01E7": 'g',
        "\u0123": 'g',
        "\u01E5": 'g',
        "\u0260": 'g',
        "\uA7A1": 'g',
        "\u1D79": 'g',
        "\uA77F": 'g',
        "\u24D7": 'h',
        "\uFF48": 'h',
        "\u0125": 'h',
        "\u1E23": 'h',
        "\u1E27": 'h',
        "\u021F": 'h',
        "\u1E25": 'h',
        "\u1E29": 'h',
        "\u1E2B": 'h',
        "\u1E96": 'h',
        "\u0127": 'h',
        "\u2C68": 'h',
        "\u2C76": 'h',
        "\u0265": 'h',
        "\u0195": 'hv',
        "\u24D8": 'i',
        "\uFF49": 'i',
        "\xEC": 'i',
        "\xED": 'i',
        "\xEE": 'i',
        "\u0129": 'i',
        "\u012B": 'i',
        "\u012D": 'i',
        "\xEF": 'i',
        "\u1E2F": 'i',
        "\u1EC9": 'i',
        "\u01D0": 'i',
        "\u0209": 'i',
        "\u020B": 'i',
        "\u1ECB": 'i',
        "\u012F": 'i',
        "\u1E2D": 'i',
        "\u0268": 'i',
        "\u0131": 'i',
        "\u24D9": 'j',
        "\uFF4A": 'j',
        "\u0135": 'j',
        "\u01F0": 'j',
        "\u0249": 'j',
        "\u24DA": 'k',
        "\uFF4B": 'k',
        "\u1E31": 'k',
        "\u01E9": 'k',
        "\u1E33": 'k',
        "\u0137": 'k',
        "\u1E35": 'k',
        "\u0199": 'k',
        "\u2C6A": 'k',
        "\uA741": 'k',
        "\uA743": 'k',
        "\uA745": 'k',
        "\uA7A3": 'k',
        "\u24DB": 'l',
        "\uFF4C": 'l',
        "\u0140": 'l',
        "\u013A": 'l',
        "\u013E": 'l',
        "\u1E37": 'l',
        "\u1E39": 'l',
        "\u013C": 'l',
        "\u1E3D": 'l',
        "\u1E3B": 'l',
        "\u017F": 'l',
        "\u0142": 'l',
        "\u019A": 'l',
        "\u026B": 'l',
        "\u2C61": 'l',
        "\uA749": 'l',
        "\uA781": 'l',
        "\uA747": 'l',
        "\u01C9": 'lj',
        "\u24DC": 'm',
        "\uFF4D": 'm',
        "\u1E3F": 'm',
        "\u1E41": 'm',
        "\u1E43": 'm',
        "\u0271": 'm',
        "\u026F": 'm',
        "\u24DD": 'n',
        "\uFF4E": 'n',
        "\u01F9": 'n',
        "\u0144": 'n',
        "\xF1": 'n',
        "\u1E45": 'n',
        "\u0148": 'n',
        "\u1E47": 'n',
        "\u0146": 'n',
        "\u1E4B": 'n',
        "\u1E49": 'n',
        "\u019E": 'n',
        "\u0272": 'n',
        "\u0149": 'n',
        "\uA791": 'n',
        "\uA7A5": 'n',
        "\u01CC": 'nj',
        "\u24DE": 'o',
        "\uFF4F": 'o',
        "\xF2": 'o',
        "\xF3": 'o',
        "\xF4": 'o',
        "\u1ED3": 'o',
        "\u1ED1": 'o',
        "\u1ED7": 'o',
        "\u1ED5": 'o',
        "\xF5": 'o',
        "\u1E4D": 'o',
        "\u022D": 'o',
        "\u1E4F": 'o',
        "\u014D": 'o',
        "\u1E51": 'o',
        "\u1E53": 'o',
        "\u014F": 'o',
        "\u022F": 'o',
        "\u0231": 'o',
        "\xF6": 'o',
        "\u022B": 'o',
        "\u1ECF": 'o',
        "\u0151": 'o',
        "\u01D2": 'o',
        "\u020D": 'o',
        "\u020F": 'o',
        "\u01A1": 'o',
        "\u1EDD": 'o',
        "\u1EDB": 'o',
        "\u1EE1": 'o',
        "\u1EDF": 'o',
        "\u1EE3": 'o',
        "\u1ECD": 'o',
        "\u1ED9": 'o',
        "\u01EB": 'o',
        "\u01ED": 'o',
        "\xF8": 'o',
        "\u01FF": 'o',
        "\u0254": 'o',
        "\uA74B": 'o',
        "\uA74D": 'o',
        "\u0275": 'o',
        "\u01A3": 'oi',
        "\u0223": 'ou',
        "\uA74F": 'oo',
        "\u24DF": 'p',
        "\uFF50": 'p',
        "\u1E55": 'p',
        "\u1E57": 'p',
        "\u01A5": 'p',
        "\u1D7D": 'p',
        "\uA751": 'p',
        "\uA753": 'p',
        "\uA755": 'p',
        "\u24E0": 'q',
        "\uFF51": 'q',
        "\u024B": 'q',
        "\uA757": 'q',
        "\uA759": 'q',
        "\u24E1": 'r',
        "\uFF52": 'r',
        "\u0155": 'r',
        "\u1E59": 'r',
        "\u0159": 'r',
        "\u0211": 'r',
        "\u0213": 'r',
        "\u1E5B": 'r',
        "\u1E5D": 'r',
        "\u0157": 'r',
        "\u1E5F": 'r',
        "\u024D": 'r',
        "\u027D": 'r',
        "\uA75B": 'r',
        "\uA7A7": 'r',
        "\uA783": 'r',
        "\u24E2": 's',
        "\uFF53": 's',
        "\xDF": 's',
        "\u015B": 's',
        "\u1E65": 's',
        "\u015D": 's',
        "\u1E61": 's',
        "\u0161": 's',
        "\u1E67": 's',
        "\u1E63": 's',
        "\u1E69": 's',
        "\u0219": 's',
        "\u015F": 's',
        "\u023F": 's',
        "\uA7A9": 's',
        "\uA785": 's',
        "\u1E9B": 's',
        "\u24E3": 't',
        "\uFF54": 't',
        "\u1E6B": 't',
        "\u1E97": 't',
        "\u0165": 't',
        "\u1E6D": 't',
        "\u021B": 't',
        "\u0163": 't',
        "\u1E71": 't',
        "\u1E6F": 't',
        "\u0167": 't',
        "\u01AD": 't',
        "\u0288": 't',
        "\u2C66": 't',
        "\uA787": 't',
        "\uA729": 'tz',
        "\u24E4": 'u',
        "\uFF55": 'u',
        "\xF9": 'u',
        "\xFA": 'u',
        "\xFB": 'u',
        "\u0169": 'u',
        "\u1E79": 'u',
        "\u016B": 'u',
        "\u1E7B": 'u',
        "\u016D": 'u',
        "\xFC": 'u',
        "\u01DC": 'u',
        "\u01D8": 'u',
        "\u01D6": 'u',
        "\u01DA": 'u',
        "\u1EE7": 'u',
        "\u016F": 'u',
        "\u0171": 'u',
        "\u01D4": 'u',
        "\u0215": 'u',
        "\u0217": 'u',
        "\u01B0": 'u',
        "\u1EEB": 'u',
        "\u1EE9": 'u',
        "\u1EEF": 'u',
        "\u1EED": 'u',
        "\u1EF1": 'u',
        "\u1EE5": 'u',
        "\u1E73": 'u',
        "\u0173": 'u',
        "\u1E77": 'u',
        "\u1E75": 'u',
        "\u0289": 'u',
        "\u24E5": 'v',
        "\uFF56": 'v',
        "\u1E7D": 'v',
        "\u1E7F": 'v',
        "\u028B": 'v',
        "\uA75F": 'v',
        "\u028C": 'v',
        "\uA761": 'vy',
        "\u24E6": 'w',
        "\uFF57": 'w',
        "\u1E81": 'w',
        "\u1E83": 'w',
        "\u0175": 'w',
        "\u1E87": 'w',
        "\u1E85": 'w',
        "\u1E98": 'w',
        "\u1E89": 'w',
        "\u2C73": 'w',
        "\u24E7": 'x',
        "\uFF58": 'x',
        "\u1E8B": 'x',
        "\u1E8D": 'x',
        "\u24E8": 'y',
        "\uFF59": 'y',
        "\u1EF3": 'y',
        "\xFD": 'y',
        "\u0177": 'y',
        "\u1EF9": 'y',
        "\u0233": 'y',
        "\u1E8F": 'y',
        "\xFF": 'y',
        "\u1EF7": 'y',
        "\u1E99": 'y',
        "\u1EF5": 'y',
        "\u01B4": 'y',
        "\u024F": 'y',
        "\u1EFF": 'y',
        "\u24E9": 'z',
        "\uFF5A": 'z',
        "\u017A": 'z',
        "\u1E91": 'z',
        "\u017C": 'z',
        "\u017E": 'z',
        "\u1E93": 'z',
        "\u1E95": 'z',
        "\u01B6": 'z',
        "\u0225": 'z',
        "\u0240": 'z',
        "\u2C6C": 'z',
        "\uA763": 'z',
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03C9": "\u03C9",
        "\u03C2": "\u03C3"
      };
      return diacritics;
    });
    S2.define('select2/data/base', ['../utils'], function (Utils) {
      function BaseAdapter($element, options) {
        BaseAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(BaseAdapter, Utils.Observable);

      BaseAdapter.prototype.current = function (callback) {
        throw new Error('The `current` method must be defined in child classes.');
      };

      BaseAdapter.prototype.query = function (params, callback) {
        throw new Error('The `query` method must be defined in child classes.');
      };

      BaseAdapter.prototype.bind = function (container, $container) {// Can be implemented in subclasses
      };

      BaseAdapter.prototype.destroy = function () {// Can be implemented in subclasses
      };

      BaseAdapter.prototype.generateResultId = function (container, data) {
        var id = container.id + '-result-';
        id += Utils.generateChars(4);

        if (data.id != null) {
          id += '-' + data.id.toString();
        } else {
          id += '-' + Utils.generateChars(4);
        }

        return id;
      };

      return BaseAdapter;
    });
    S2.define('select2/data/select', ['./base', '../utils', 'jquery'], function (BaseAdapter, Utils, $) {
      function SelectAdapter($element, options) {
        this.$element = $element;
        this.options = options;

        SelectAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(SelectAdapter, BaseAdapter);

      SelectAdapter.prototype.current = function (callback) {
        var data = [];
        var self = this;
        this.$element.find(':selected').each(function () {
          var $option = $(this);
          var option = self.item($option);
          data.push(option);
        });
        callback(data);
      };

      SelectAdapter.prototype.select = function (data) {
        var self = this; // If data.element is a DOM nose, use it instead

        if ($(data.element).is('option')) {
          data.element.selected = true;
          this.$element.trigger('change');
          return;
        }

        if (this.$element.prop('multiple')) {
          this.current(function (currentData) {
            var val = [];
            data = [data];
            data.push.apply(data, currentData);

            for (var d = 0; d < data.length; d++) {
              var id = data[d].id;

              if ($.inArray(id, val) === -1) {
                val.push(id);
              }
            }

            self.$element.val(val);
            self.$element.trigger('change');
          });
        } else {
          var val = data.id;
          this.$element.val(val);
          this.$element.trigger('change');
        }
      };

      SelectAdapter.prototype.unselect = function (data) {
        var self = this;

        if (!this.$element.prop('multiple')) {
          return;
        }

        if ($(data.element).is('option')) {
          data.element.selected = false;
          this.$element.trigger('change');
          return;
        }

        this.current(function (currentData) {
          var val = [];

          for (var d = 0; d < currentData.length; d++) {
            var id = currentData[d].id;

            if (id !== data.id && $.inArray(id, val) === -1) {
              val.push(id);
            }
          }

          self.$element.val(val);
          self.$element.trigger('change');
        });
      };

      SelectAdapter.prototype.bind = function (container, $container) {
        var self = this;
        this.container = container;
        container.on('select', function (params) {
          self.select(params.data);
        });
        container.on('unselect', function (params) {
          self.unselect(params.data);
        });
      };

      SelectAdapter.prototype.destroy = function () {
        // Remove anything added to child elements
        this.$element.find('*').each(function () {
          // Remove any custom data set by Select2
          $.removeData(this, 'data');
        });
      };

      SelectAdapter.prototype.query = function (params, callback) {
        var data = [];
        var self = this;
        var $options = this.$element.children();
        $options.each(function () {
          var $option = $(this);

          if (!$option.is('option') && !$option.is('optgroup')) {
            return;
          }

          var option = self.item($option);
          var matches = self.matches(params, option);

          if (matches !== null) {
            data.push(matches);
          }
        });
        callback({
          results: data
        });
      };

      SelectAdapter.prototype.addOptions = function ($options) {
        this.$element.append($options);
      };

      SelectAdapter.prototype.option = function (data) {
        var option;

        if (data.children) {
          option = document.createElement('optgroup');
          option.label = data.text;
        } else {
          option = document.createElement('option');

          if (option.textContent !== undefined) {
            option.textContent = data.text;
          } else {
            option.innerText = data.text;
          }
        }

        if (data.id) {
          option.value = data.id;
        }

        if (data.disabled) {
          option.disabled = true;
        }

        if (data.selected) {
          option.selected = true;
        }

        if (data.title) {
          option.title = data.title;
        }

        var $option = $(option);

        var normalizedData = this._normalizeItem(data);

        normalizedData.element = option; // Override the option's data with the combined data

        $.data(option, 'data', normalizedData);
        return $option;
      };

      SelectAdapter.prototype.item = function ($option) {
        var data = {};
        data = $.data($option[0], 'data');

        if (data != null) {
          return data;
        }

        if ($option.is('option')) {
          data = {
            id: $option.val(),
            text: $option.text(),
            disabled: $option.prop('disabled'),
            selected: $option.prop('selected'),
            title: $option.prop('title')
          };
        } else if ($option.is('optgroup')) {
          data = {
            text: $option.prop('label'),
            children: [],
            title: $option.prop('title')
          };
          var $children = $option.children('option');
          var children = [];

          for (var c = 0; c < $children.length; c++) {
            var $child = $($children[c]);
            var child = this.item($child);
            children.push(child);
          }

          data.children = children;
        }

        data = this._normalizeItem(data);
        data.element = $option[0];
        $.data($option[0], 'data', data);
        return data;
      };

      SelectAdapter.prototype._normalizeItem = function (item) {
        if (!$.isPlainObject(item)) {
          item = {
            id: item,
            text: item
          };
        }

        item = $.extend({}, {
          text: ''
        }, item);
        var defaults = {
          selected: false,
          disabled: false
        };

        if (item.id != null) {
          item.id = item.id.toString();
        }

        if (item.text != null) {
          item.text = item.text.toString();
        }

        if (item._resultId == null && item.id && this.container != null) {
          item._resultId = this.generateResultId(this.container, item);
        }

        return $.extend({}, defaults, item);
      };

      SelectAdapter.prototype.matches = function (params, data) {
        var matcher = this.options.get('matcher');
        return matcher(params, data);
      };

      return SelectAdapter;
    });
    S2.define('select2/data/array', ['./select', '../utils', 'jquery'], function (SelectAdapter, Utils, $) {
      function ArrayAdapter($element, options) {
        var data = options.get('data') || [];

        ArrayAdapter.__super__.constructor.call(this, $element, options);

        this.addOptions(this.convertToOptions(data));
      }

      Utils.Extend(ArrayAdapter, SelectAdapter);

      ArrayAdapter.prototype.select = function (data) {
        var $option = this.$element.find('option[value="' + data.id + '"]');

        if ($option.length === 0) {
          $option = this.option(data);
          this.addOptions($option);
        }

        ArrayAdapter.__super__.select.call(this, data);
      };

      ArrayAdapter.prototype.convertToOptions = function (data) {
        var self = this;
        var $existing = this.$element.find('option');
        var existingIds = $existing.map(function () {
          return self.item($(this)).id;
        }).get();
        var $options = $(); // Filter out all items except for the one passed in the argument

        function onlyItem(item) {
          return function () {
            return $(this).val() == item.id;
          };
        }

        for (var d = 0; d < data.length; d++) {
          var item = this._normalizeItem(data[d]); // Skip items which were pre-loaded, only merge the data


          if ($.inArray(item.id, existingIds) >= 0) {
            var $existingOption = $existing.filter(onlyItem(item));
            var existingData = this.item($existingOption);
            var newData = $.extend(true, {}, existingData, item);
            var $newOption = this.option(existingData);
            $existingOption.replaceWith($newOption);
            continue;
          }

          var $option = this.option(item);

          if (item.children) {
            var $children = this.convertToOptions(item.children);
            $option.append($children);
          }

          $options = $options.add($option);
        }

        return $options;
      };

      return ArrayAdapter;
    });
    S2.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function (ArrayAdapter, Utils, $) {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = this._applyDefaults(options.get('ajax'));

        if (this.ajaxOptions.processResults != null) {
          this.processResults = this.ajaxOptions.processResults;
        }

        ArrayAdapter.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(AjaxAdapter, ArrayAdapter);

      AjaxAdapter.prototype._applyDefaults = function (options) {
        var defaults = {
          data: function data(params) {
            return {
              q: params.term
            };
          },
          transport: function transport(params, success, failure) {
            var $request = $.ajax(params);
            $request.then(success);
            $request.fail(failure);
            return $request;
          }
        };
        return $.extend({}, defaults, options, true);
      };

      AjaxAdapter.prototype.processResults = function (results) {
        return results;
      };

      AjaxAdapter.prototype.query = function (params, callback) {
        var matches = [];
        var self = this;

        if (this._request) {
          this._request.abort();

          this._request = null;
        }

        var options = $.extend({
          type: 'GET'
        }, this.ajaxOptions);

        if (typeof options.url === 'function') {
          options.url = options.url(params);
        }

        if (typeof options.data === 'function') {
          options.data = options.data(params);
        }

        function request() {
          var $request = options.transport(options, function (data) {
            var results = self.processResults(data, params);

            if (self.options.get('debug') && window.console && console.error) {
              // Check to make sure that the response included a `results` key.
              if (!results || !results.results || !$.isArray(results.results)) {
                console.error('Select2: The AJAX results did not return an array in the ' + '`results` key of the response.');
              }
            }

            callback(results);
          }, function () {// TODO: Handle AJAX errors
          });
          self._request = $request;
        }

        if (this.ajaxOptions.delay && params.term !== '') {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }

          this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
        } else {
          request();
        }
      };

      return AjaxAdapter;
    });
    S2.define('select2/data/tags', ['jquery'], function ($) {
      function Tags(decorated, $element, options) {
        var tags = options.get('tags');
        var createTag = options.get('createTag');

        if (createTag !== undefined) {
          this.createTag = createTag;
        }

        decorated.call(this, $element, options);

        if ($.isArray(tags)) {
          for (var t = 0; t < tags.length; t++) {
            var tag = tags[t];

            var item = this._normalizeItem(tag);

            var $option = this.option(item);
            this.$element.append($option);
          }
        }
      }

      Tags.prototype.query = function (decorated, params, callback) {
        var self = this;

        this._removeOldTags();

        if (params.term == null || params.page != null) {
          decorated.call(this, params, callback);
          return;
        }

        function wrapper(obj, child) {
          var data = obj.results;

          for (var i = 0; i < data.length; i++) {
            var option = data[i];
            var checkChildren = option.children != null && !wrapper({
              results: option.children
            }, true);
            var checkText = option.text === params.term;

            if (checkText || checkChildren) {
              if (child) {
                return false;
              }

              obj.data = data;
              callback(obj);
              return;
            }
          }

          if (child) {
            return true;
          }

          var tag = self.createTag(params);

          if (tag != null) {
            var $option = self.option(tag);
            $option.attr('data-select2-tag', true);
            self.addOptions($option);
            self.insertTag(data, tag);
          }

          obj.results = data;
          callback(obj);
        }

        decorated.call(this, params, wrapper);
      };

      Tags.prototype.createTag = function (decorated, params) {
        var term = $.trim(params.term);

        if (term === '') {
          return null;
        }

        return {
          id: term,
          text: term
        };
      };

      Tags.prototype.insertTag = function (_, data, tag) {
        data.unshift(tag);
      };

      Tags.prototype._removeOldTags = function (_) {
        var tag = this._lastTag;
        var $options = this.$element.find('option[data-select2-tag]');
        $options.each(function () {
          if (this.selected) {
            return;
          }

          $(this).remove();
        });
      };

      return Tags;
    });
    S2.define('select2/data/tokenizer', ['jquery'], function ($) {
      function Tokenizer(decorated, $element, options) {
        var tokenizer = options.get('tokenizer');

        if (tokenizer !== undefined) {
          this.tokenizer = tokenizer;
        }

        decorated.call(this, $element, options);
      }

      Tokenizer.prototype.bind = function (decorated, container, $container) {
        decorated.call(this, container, $container);
        this.$search = container.dropdown.$search || container.selection.$search || $container.find('.select2-search__field');
      };

      Tokenizer.prototype.query = function (decorated, params, callback) {
        var self = this;

        function select(data) {
          self.select(data);
        }

        params.term = params.term || '';
        var tokenData = this.tokenizer(params, this.options, select);

        if (tokenData.term !== params.term) {
          // Replace the search term if we have the search box
          if (this.$search.length) {
            this.$search.val(tokenData.term);
            this.$search.focus();
          }

          params.term = tokenData.term;
        }

        decorated.call(this, params, callback);
      };

      Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
        var separators = options.get('tokenSeparators') || [];
        var term = params.term;
        var i = 0;

        var createTag = this.createTag || function (params) {
          return {
            id: params.term,
            text: params.term
          };
        };

        while (i < term.length) {
          var termChar = term[i];

          if ($.inArray(termChar, separators) === -1) {
            i++;
            continue;
          }

          var part = term.substr(0, i);
          var partParams = $.extend({}, params, {
            term: part
          });
          var data = createTag(partParams);
          callback(data); // Reset the term to not include the tokenized portion

          term = term.substr(i + 1) || '';
          i = 0;
        }

        return {
          term: term
        };
      };

      return Tokenizer;
    });
    S2.define('select2/data/minimumInputLength', [], function () {
      function MinimumInputLength(decorated, $e, options) {
        this.minimumInputLength = options.get('minimumInputLength');
        decorated.call(this, $e, options);
      }

      MinimumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (params.term.length < this.minimumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooShort',
            args: {
              minimum: this.minimumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }

        decorated.call(this, params, callback);
      };

      return MinimumInputLength;
    });
    S2.define('select2/data/maximumInputLength', [], function () {
      function MaximumInputLength(decorated, $e, options) {
        this.maximumInputLength = options.get('maximumInputLength');
        decorated.call(this, $e, options);
      }

      MaximumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooLong',
            args: {
              maximum: this.maximumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }

        decorated.call(this, params, callback);
      };

      return MaximumInputLength;
    });
    S2.define('select2/data/maximumSelectionLength', [], function () {
      function MaximumSelectionLength(decorated, $e, options) {
        this.maximumSelectionLength = options.get('maximumSelectionLength');
        decorated.call(this, $e, options);
      }

      MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
        var self = this;
        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;

          if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }

          decorated.call(self, params, callback);
        });
      };

      return MaximumSelectionLength;
    });
    S2.define('select2/dropdown', ['jquery', './utils'], function ($, Utils) {
      function Dropdown($element, options) {
        this.$element = $element;
        this.options = options;

        Dropdown.__super__.constructor.call(this);
      }

      Utils.Extend(Dropdown, Utils.Observable);

      Dropdown.prototype.render = function () {
        var $dropdown = $('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + '</span>');
        $dropdown.attr('dir', this.options.get('dir'));
        this.$dropdown = $dropdown;
        return $dropdown;
      };

      Dropdown.prototype.position = function ($dropdown, $container) {// Should be implmented in subclasses
      };

      Dropdown.prototype.destroy = function () {
        // Remove the dropdown from the DOM
        this.$dropdown.remove();
      };

      return Dropdown;
    });
    S2.define('select2/dropdown/search', ['jquery', '../utils'], function ($, Utils) {
      function Search() {}

      Search.prototype.render = function (decorated) {
        var $rendered = decorated.call(this);
        var $search = $('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="off"' + ' spellcheck="false" role="textbox" />' + '</span>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        $rendered.prepend($search);
        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        this.$search.on('keydown', function (evt) {
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
        }); // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.

        this.$search.on('input', function (evt) {
          // Unbind the duplicated `keyup` event
          $(this).off('keyup');
        });
        this.$search.on('keyup input', function (evt) {
          self.handleSearch(evt);
        });
        container.on('open', function () {
          self.$search.attr('tabindex', 0);
          self.$search.focus();
          window.setTimeout(function () {
            self.$search.focus();
          }, 0);
        });
        container.on('close', function () {
          self.$search.attr('tabindex', -1);
          self.$search.val('');
        });
        container.on('results:all', function (params) {
          if (params.query.term == null || params.query.term === '') {
            var showSearch = self.showSearch(params);

            if (showSearch) {
              self.$searchContainer.removeClass('select2-search--hide');
            } else {
              self.$searchContainer.addClass('select2-search--hide');
            }
          }
        });
      };

      Search.prototype.handleSearch = function (evt) {
        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.showSearch = function (_, params) {
        return true;
      };

      return Search;
    });
    S2.define('select2/dropdown/hidePlaceholder', [], function () {
      function HidePlaceholder(decorated, $element, options, dataAdapter) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options, dataAdapter);
      }

      HidePlaceholder.prototype.append = function (decorated, data) {
        data.results = this.removePlaceholder(data.results);
        decorated.call(this, data);
      };

      HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      HidePlaceholder.prototype.removePlaceholder = function (_, data) {
        var modifiedData = data.slice(0);

        for (var d = data.length - 1; d >= 0; d--) {
          var item = data[d];

          if (this.placeholder.id === item.id) {
            modifiedData.splice(d, 1);
          }
        }

        return modifiedData;
      };

      return HidePlaceholder;
    });
    S2.define('select2/dropdown/infiniteScroll', ['jquery'], function ($) {
      function InfiniteScroll(decorated, $element, options, dataAdapter) {
        this.lastParams = {};
        decorated.call(this, $element, options, dataAdapter);
        this.$loadingMore = this.createLoadingMore();
        this.loading = false;
      }

      InfiniteScroll.prototype.append = function (decorated, data) {
        this.$loadingMore.remove();
        this.loading = false;
        decorated.call(this, data);

        if (this.showLoadingMore(data)) {
          this.$results.append(this.$loadingMore);
        }
      };

      InfiniteScroll.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('query', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        container.on('query:append', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        this.$results.on('scroll', function () {
          var isLoadMoreVisible = $.contains(document.documentElement, self.$loadingMore[0]);

          if (self.loading || !isLoadMoreVisible) {
            return;
          }

          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var loadingMoreOffset = self.$loadingMore.offset().top + self.$loadingMore.outerHeight(false);

          if (currentOffset + 50 >= loadingMoreOffset) {
            self.loadMore();
          }
        });
      };

      InfiniteScroll.prototype.loadMore = function () {
        this.loading = true;
        var params = $.extend({}, {
          page: 1
        }, this.lastParams);
        params.page++;
        this.trigger('query:append', params);
      };

      InfiniteScroll.prototype.showLoadingMore = function (_, data) {
        return data.pagination && data.pagination.more;
      };

      InfiniteScroll.prototype.createLoadingMore = function () {
        var $option = $('<li class="option load-more" role="treeitem"></li>');
        var message = this.options.get('translations').get('loadingMore');
        $option.html(message(this.lastParams));
        return $option;
      };

      return InfiniteScroll;
    });
    S2.define('select2/dropdown/attachBody', ['jquery', '../utils'], function ($, Utils) {
      function AttachBody(decorated, $element, options) {
        this.$dropdownParent = options.get('dropdownParent') || document.body;
        decorated.call(this, $element, options);
      }

      AttachBody.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var setupResultsEvents = false;
        decorated.call(this, container, $container);
        container.on('open', function () {
          self._showDropdown();

          self._attachPositioningHandler(container);

          if (!setupResultsEvents) {
            setupResultsEvents = true;
            container.on('results:all', function () {
              self._positionDropdown();

              self._resizeDropdown();
            });
            container.on('results:append', function () {
              self._positionDropdown();

              self._resizeDropdown();
            });
          }
        });
        container.on('close', function () {
          self._hideDropdown();

          self._detachPositioningHandler(container);
        });
        this.$dropdownContainer.on('mousedown', function (evt) {
          evt.stopPropagation();
        });
      };

      AttachBody.prototype.position = function (decorated, $dropdown, $container) {
        // Clone all of the container classes
        $dropdown.attr('class', $container.attr('class'));
        $dropdown.removeClass('select2');
        $dropdown.addClass('select2-container--open');
        $dropdown.css({
          position: 'absolute',
          top: -999999
        });
        this.$container = $container;
      };

      AttachBody.prototype.render = function (decorated) {
        var $container = $('<span></span>');
        var $dropdown = decorated.call(this);
        $container.append($dropdown);
        this.$dropdownContainer = $container;
        return $container;
      };

      AttachBody.prototype._hideDropdown = function (decorated) {
        this.$dropdownContainer.detach();
      };

      AttachBody.prototype._attachPositioningHandler = function (container) {
        var self = this;
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.each(function () {
          $(this).data('select2-scroll-position', {
            x: $(this).scrollLeft(),
            y: $(this).scrollTop()
          });
        });
        $watchers.on(scrollEvent, function (ev) {
          var position = $(this).data('select2-scroll-position');
          $(this).scrollTop(position.y);
        });
        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e) {
          self._positionDropdown();

          self._resizeDropdown();
        });
      };

      AttachBody.prototype._detachPositioningHandler = function (container) {
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.off(scrollEvent);
        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
      };

      AttachBody.prototype._positionDropdown = function () {
        var $window = $(window);
        var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
        var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
        var newDirection = null;
        var position = this.$container.position();
        var offset = this.$container.offset();
        offset.bottom = offset.top + this.$container.outerHeight(false);
        var container = {
          height: this.$container.outerHeight(false)
        };
        container.top = offset.top;
        container.bottom = offset.top + container.height;
        var dropdown = {
          height: this.$dropdown.outerHeight(false)
        };
        var viewport = {
          top: $window.scrollTop(),
          bottom: $window.scrollTop() + $window.height()
        };
        var enoughRoomAbove = viewport.top < offset.top - dropdown.height;
        var enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height;
        var css = {
          left: offset.left,
          top: container.bottom
        };

        if (!isCurrentlyAbove && !isCurrentlyBelow) {
          newDirection = 'below';
        }

        if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
          newDirection = 'above';
        } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
          newDirection = 'below';
        }

        if (newDirection == 'above' || isCurrentlyAbove && newDirection !== 'below') {
          css.top = container.top - dropdown.height;
        }

        if (newDirection != null) {
          this.$dropdown.removeClass('select2-dropdown--below select2-dropdown--above').addClass('select2-dropdown--' + newDirection);
          this.$container.removeClass('select2-container--below select2-container--above').addClass('select2-container--' + newDirection);
        }

        this.$dropdownContainer.css(css);
      };

      AttachBody.prototype._resizeDropdown = function () {
        this.$dropdownContainer.width();
        this.$dropdown.css({
          width: this.$container.outerWidth(false) + 'px'
        });
      };

      AttachBody.prototype._showDropdown = function (decorated) {
        this.$dropdownContainer.appendTo(this.$dropdownParent);

        this._positionDropdown();

        this._resizeDropdown();
      };

      return AttachBody;
    });
    S2.define('select2/dropdown/minimumResultsForSearch', [], function () {
      function countResults(data) {
        var count = 0;

        for (var d = 0; d < data.length; d++) {
          var item = data[d];

          if (item.children) {
            count += countResults(item.children);
          } else {
            count++;
          }
        }

        return count;
      }

      function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
        this.minimumResultsForSearch = options.get('minimumResultsForSearch');

        if (this.minimumResultsForSearch < 0) {
          this.minimumResultsForSearch = Infinity;
        }

        decorated.call(this, $element, options, dataAdapter);
      }

      MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
        if (countResults(params.data.results) < this.minimumResultsForSearch) {
          return false;
        }

        return decorated.call(this, params);
      };

      return MinimumResultsForSearch;
    });
    S2.define('select2/dropdown/selectOnClose', [], function () {
      function SelectOnClose() {}

      SelectOnClose.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('close', function () {
          self._handleSelectOnClose();
        });
      };

      SelectOnClose.prototype._handleSelectOnClose = function () {
        var $highlightedResults = this.getHighlightedResults();

        if ($highlightedResults.length < 1) {
          return;
        }

        $highlightedResults.trigger('mouseup');
      };

      return SelectOnClose;
    });
    S2.define('select2/dropdown/closeOnSelect', [], function () {
      function CloseOnSelect() {}

      CloseOnSelect.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('select', function (evt) {
          self._selectTriggered(evt);
        });
        container.on('unselect', function (evt) {
          self._selectTriggered(evt);
        });
      };

      CloseOnSelect.prototype._selectTriggered = function (_, evt) {
        var originalEvent = evt.originalEvent; // Don't close if the control key is being held

        if (originalEvent && originalEvent.ctrlKey) {
          return;
        }

        this.trigger('close');
      };

      return CloseOnSelect;
    });
    S2.define('select2/i18n/en', [], function () {
      // English
      return {
        errorLoading: function errorLoading() {
          return 'The results could not be loaded.';
        },
        inputTooLong: function inputTooLong(args) {
          var overChars = args.input.length - args.maximum;
          var message = 'Please delete ' + overChars + ' character';

          if (overChars != 1) {
            message += 's';
          }

          return message;
        },
        inputTooShort: function inputTooShort(args) {
          var remainingChars = args.minimum - args.input.length;
          var message = 'Please enter ' + remainingChars + ' or more characters';
          return message;
        },
        loadingMore: function loadingMore() {
          return 'Loading more results…';
        },
        maximumSelected: function maximumSelected(args) {
          var message = 'You can only select ' + args.maximum + ' item';

          if (args.maximum != 1) {
            message += 's';
          }

          return message;
        },
        noResults: function noResults() {
          return 'No results found';
        },
        searching: function searching() {
          return 'Searching…';
        }
      };
    });
    S2.define('select2/defaults', ['jquery', 'require', './results', './selection/single', './selection/multiple', './selection/placeholder', './selection/allowClear', './selection/search', './selection/eventRelay', './utils', './translation', './diacritics', './data/select', './data/array', './data/ajax', './data/tags', './data/tokenizer', './data/minimumInputLength', './data/maximumInputLength', './data/maximumSelectionLength', './dropdown', './dropdown/search', './dropdown/hidePlaceholder', './dropdown/infiniteScroll', './dropdown/attachBody', './dropdown/minimumResultsForSearch', './dropdown/selectOnClose', './dropdown/closeOnSelect', './i18n/en'], function ($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
      function Defaults() {
        this.reset();
      }

      Defaults.prototype.apply = function (options) {
        options = $.extend({}, this.defaults, options);

        if (options.dataAdapter == null) {
          if (options.ajax != null) {
            options.dataAdapter = AjaxData;
          } else if (options.data != null) {
            options.dataAdapter = ArrayData;
          } else {
            options.dataAdapter = SelectData;
          }

          if (options.minimumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
          }

          if (options.maximumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
          }

          if (options.maximumSelectionLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
          }

          if (options.tags) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
          }

          if (options.tokenSeparators != null || options.tokenizer != null) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
          }

          if (options.query != null) {
            var Query = require(options.amdBase + 'compat/query');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, Query);
          }

          if (options.initSelection != null) {
            var InitSelection = require(options.amdBase + 'compat/initSelection');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection);
          }
        }

        if (options.resultsAdapter == null) {
          options.resultsAdapter = ResultsList;

          if (options.ajax != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
          }

          if (options.placeholder != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
          }

          if (options.selectOnClose) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
          }
        }

        if (options.dropdownAdapter == null) {
          if (options.multiple) {
            options.dropdownAdapter = Dropdown;
          } else {
            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
            options.dropdownAdapter = SearchableDropdown;
          }

          if (options.minimumResultsForSearch !== 0) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
          }

          if (options.closeOnSelect) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
          }

          options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
        }

        if (options.selectionAdapter == null) {
          if (options.multiple) {
            options.selectionAdapter = MultipleSelection;
          } else {
            options.selectionAdapter = SingleSelection;
          } // Add the placeholder mixin if a placeholder was specified


          if (options.placeholder != null) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
          }

          if (options.allowClear) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
          }

          if (options.multiple) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
          }

          options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
        }

        if (typeof options.language === 'string') {
          // Check if the language is specified with a region
          if (options.language.indexOf('-') > 0) {
            // Extract the region information if it is included
            var languageParts = options.language.split('-');
            var baseLanguage = languageParts[0];
            options.language = [options.language, baseLanguage];
          } else {
            options.language = [options.language];
          }
        }

        if ($.isArray(options.language)) {
          var languages = new Translation();
          options.language.push('en');
          var languageNames = options.language;

          for (var l = 0; l < languageNames.length; l++) {
            var name = languageNames[l];
            var language = {};

            try {
              // Try to load it with the original name
              language = Translation.loadPath(name);
            } catch (e) {
              try {
                // If we couldn't load it, check if it wasn't the full path
                name = this.defaults.amdLanguageBase + name;
                language = Translation.loadPath(name);
              } catch (ex) {
                // The translation could not be loaded at all. Sometimes this is
                // because of a configuration problem, other times this can be
                // because of how Select2 helps load all possible translation files.
                if (options.debug && window.console && console.warn) {
                  console.warn('Select2: The language file for "' + name + '" could not be ' + 'automatically loaded. A fallback will be used instead.');
                }

                continue;
              }
            }

            languages.extend(language);
          }

          options.translations = languages;
        } else {
          options.translations = new Translation(options.language);
        }

        return options;
      };

      Defaults.prototype.reset = function () {
        function stripDiacritics(text) {
          // Used 'uni range + named function' from http://jsperf.com/diacritics/18
          function match(a) {
            return DIACRITICS[a] || a;
          }

          return text.replace(/[^\u0000-\u007E]/g, match);
        }

        function matcher(params, data) {
          // Always return the object if there is nothing to compare
          if ($.trim(params.term) === '') {
            return data;
          } // Do a recursive check for options with children


          if (data.children && data.children.length > 0) {
            // Clone the data object if there are children
            // This is required as we modify the object to remove any non-matches
            var match = $.extend(true, {}, data); // Check each child of the option

            for (var c = data.children.length - 1; c >= 0; c--) {
              var child = data.children[c];
              var matches = matcher(params, child); // If there wasn't a match, remove the object in the array

              if (matches == null) {
                match.children.splice(c, 1);
              }
            } // If any children matched, return the new object


            if (match.children.length > 0) {
              return match;
            } // If there were no matching children, check just the plain object


            return matcher(params, match);
          }

          var original = stripDiacritics(data.text).toUpperCase();
          var term = stripDiacritics(params.term).toUpperCase(); // Check if the text contains the term

          if (original.indexOf(term) > -1) {
            return data;
          } // If it doesn't contain the term, don't return anything


          return null;
        }

        this.defaults = {
          amdBase: './',
          amdLanguageBase: './i18n/',
          closeOnSelect: true,
          debug: false,
          escapeMarkup: Utils.escapeMarkup,
          language: EnglishTranslation,
          matcher: matcher,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: false,
          sorter: function sorter(data) {
            return data;
          },
          templateResult: function templateResult(result) {
            return result.text;
          },
          templateSelection: function templateSelection(selection) {
            return selection.text;
          },
          theme: 'default',
          width: 'resolve'
        };
      };

      Defaults.prototype.set = function (key, value) {
        var camelKey = $.camelCase(key);
        var data = {};
        data[camelKey] = value;

        var convertedData = Utils._convertData(data);

        $.extend(this.defaults, convertedData);
      };

      var defaults = new Defaults();
      return defaults;
    });
    S2.define('select2/options', ['jquery', './defaults', './utils'], function ($, Defaults, Utils) {
      function Options(options, $element) {
        this.options = options;

        if ($element != null) {
          this.fromElement($element);
        }

        this.options = Defaults.apply(this.options);

        if ($element && $element.is('input')) {
          var InputCompat = __webpack_require__("./assets/plugins/select2/dist/js sync recursive ^.*compat\\/inputData$")(this.get('amdBase') + "compat/inputData");

          this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat);
        }
      }

      Options.prototype.fromElement = function ($e) {
        var excludedData = ['select2'];

        if (this.options.multiple == null) {
          this.options.multiple = $e.prop('multiple');
        }

        if (this.options.disabled == null) {
          this.options.disabled = $e.prop('disabled');
        }

        if (this.options.language == null) {
          if ($e.prop('lang')) {
            this.options.language = $e.prop('lang').toLowerCase();
          } else if ($e.closest('[lang]').prop('lang')) {
            this.options.language = $e.closest('[lang]').prop('lang');
          }
        }

        if (this.options.dir == null) {
          if ($e.prop('dir')) {
            this.options.dir = $e.prop('dir');
          } else if ($e.closest('[dir]').prop('dir')) {
            this.options.dir = $e.closest('[dir]').prop('dir');
          } else {
            this.options.dir = 'ltr';
          }
        }

        $e.prop('disabled', this.options.disabled);
        $e.prop('multiple', this.options.multiple);

        if ($e.data('select2Tags')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-select2-tags` attribute has been changed to ' + 'use the `data-data` and `data-tags="true"` attributes and will be ' + 'removed in future versions of Select2.');
          }

          $e.data('data', $e.data('select2Tags'));
          $e.data('tags', true);
        }

        if ($e.data('ajaxUrl')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-ajax-url` attribute has been changed to ' + '`data-ajax--url` and support for the old attribute will be removed' + ' in future versions of Select2.');
          }

          $e.attr('ajax--url', $e.data('ajaxUrl'));
          $e.data('ajax--url', $e.data('ajaxUrl'));
        }

        var dataset = {}; // Prefer the element's `dataset` attribute if it exists
        // jQuery 1.x does not correctly handle data attributes with multiple dashes

        if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
          dataset = $.extend(true, {}, $e[0].dataset, $e.data());
        } else {
          dataset = $e.data();
        }

        var data = $.extend(true, {}, dataset);
        data = Utils._convertData(data);

        for (var key in data) {
          if ($.inArray(key, excludedData) > -1) {
            continue;
          }

          if ($.isPlainObject(this.options[key])) {
            $.extend(this.options[key], data[key]);
          } else {
            this.options[key] = data[key];
          }
        }

        return this;
      };

      Options.prototype.get = function (key) {
        return this.options[key];
      };

      Options.prototype.set = function (key, val) {
        this.options[key] = val;
      };

      return Options;
    });
    S2.define('select2/core', ['jquery', './options', './utils', './keys'], function ($, Options, Utils, KEYS) {
      var Select2 = function Select2($element, options) {
        if ($element.data('select2') != null) {
          $element.data('select2').destroy();
        }

        this.$element = $element;
        this.id = this._generateId($element);
        options = options || {};
        this.options = new Options(options, $element);

        Select2.__super__.constructor.call(this); // Set up the tabindex


        var tabindex = $element.attr('tabindex') || 0;
        $element.data('old-tabindex', tabindex);
        $element.attr('tabindex', '-1'); // Set up containers and adapters

        var DataAdapter = this.options.get('dataAdapter');
        this.dataAdapter = new DataAdapter($element, this.options);
        var $container = this.render();

        this._placeContainer($container);

        var SelectionAdapter = this.options.get('selectionAdapter');
        this.selection = new SelectionAdapter($element, this.options);
        this.$selection = this.selection.render();
        this.selection.position(this.$selection, $container);
        var DropdownAdapter = this.options.get('dropdownAdapter');
        this.dropdown = new DropdownAdapter($element, this.options);
        this.$dropdown = this.dropdown.render();
        this.dropdown.position(this.$dropdown, $container);
        var ResultsAdapter = this.options.get('resultsAdapter');
        this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
        this.$results = this.results.render();
        this.results.position(this.$results, this.$dropdown); // Bind events

        var self = this; // Bind the container to all of the adapters

        this._bindAdapters(); // Register any DOM event handlers


        this._registerDomEvents(); // Register any internal event handlers


        this._registerDataEvents();

        this._registerSelectionEvents();

        this._registerDropdownEvents();

        this._registerResultsEvents();

        this._registerEvents(); // Set the initial state


        this.dataAdapter.current(function (initialData) {
          self.trigger('selection:update', {
            data: initialData
          });
        }); // Hide the original select

        $element.hide(); // Synchronize any monitored attributes

        this._syncAttributes();

        $element.data('select2', this);
      };

      Utils.Extend(Select2, Utils.Observable);

      Select2.prototype._generateId = function ($element) {
        var id = '';

        if ($element.attr('id') != null) {
          id = $element.attr('id');
        } else if ($element.attr('name') != null) {
          id = $element.attr('name') + '-' + Utils.generateChars(2);
        } else {
          id = Utils.generateChars(4);
        }

        id = 'select2-' + id;
        return id;
      };

      Select2.prototype._placeContainer = function ($container) {
        $container.insertAfter(this.$element);

        var width = this._resolveWidth(this.$element, this.options.get('width'));

        if (width != null) {
          $container.css('width', width);
        }
      };

      Select2.prototype._resolveWidth = function ($element, method) {
        var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if (method == 'resolve') {
          var styleWidth = this._resolveWidth($element, 'style');

          if (styleWidth != null) {
            return styleWidth;
          }

          return this._resolveWidth($element, 'element');
        }

        if (method == 'element') {
          var elementWidth = $element.outerWidth(false);

          if (elementWidth <= 0) {
            return 'auto';
          }

          return elementWidth + 'px';
        }

        if (method == 'style') {
          var style = $element.attr('style');

          if (typeof style !== 'string') {
            return null;
          }

          var attrs = style.split(';');

          for (var i = 0, l = attrs.length; i < l; i = i + 1) {
            var attr = attrs[i].replace(/\s/g, '');
            var matches = attr.match(WIDTH);

            if (matches !== null && matches.length >= 1) {
              return matches[1];
            }
          }

          return null;
        }

        return method;
      };

      Select2.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container);
        this.selection.bind(this, this.$container);
        this.dropdown.bind(this, this.$container);
        this.results.bind(this, this.$container);
      };

      Select2.prototype._registerDomEvents = function () {
        var self = this;
        this.$element.on('change.select2', function () {
          self.dataAdapter.current(function (data) {
            self.trigger('selection:update', {
              data: data
            });
          });
        });
        this._sync = Utils.bind(this._syncAttributes, this);

        if (this.$element[0].attachEvent) {
          this.$element[0].attachEvent('onpropertychange', this._sync);
        }

        var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        if (observer != null) {
          this._observer = new observer(function (mutations) {
            $.each(mutations, self._sync);
          });

          this._observer.observe(this.$element[0], {
            attributes: true,
            subtree: false
          });
        } else if (this.$element[0].addEventListener) {
          this.$element[0].addEventListener('DOMAttrModified', self._sync, false);
        }
      };

      Select2.prototype._registerDataEvents = function () {
        var self = this;
        this.dataAdapter.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerSelectionEvents = function () {
        var self = this;
        var nonRelayEvents = ['toggle'];
        this.selection.on('toggle', function () {
          self.toggleDropdown();
        });
        this.selection.on('*', function (name, params) {
          if ($.inArray(name, nonRelayEvents) !== -1) {
            return;
          }

          self.trigger(name, params);
        });
      };

      Select2.prototype._registerDropdownEvents = function () {
        var self = this;
        this.dropdown.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerResultsEvents = function () {
        var self = this;
        this.results.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerEvents = function () {
        var self = this;
        this.on('open', function () {
          self.$container.addClass('select2-container--open');
        });
        this.on('close', function () {
          self.$container.removeClass('select2-container--open');
        });
        this.on('enable', function () {
          self.$container.removeClass('select2-container--disabled');
        });
        this.on('disable', function () {
          self.$container.addClass('select2-container--disabled');
        });
        this.on('focus', function () {
          self.$container.addClass('select2-container--focus');
        });
        this.on('blur', function () {
          self.$container.removeClass('select2-container--focus');
        });
        this.on('query', function (params) {
          if (!self.isOpen()) {
            self.trigger('open');
          }

          this.dataAdapter.query(params, function (data) {
            self.trigger('results:all', {
              data: data,
              query: params
            });
          });
        });
        this.on('query:append', function (params) {
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:append', {
              data: data,
              query: params
            });
          });
        });
        this.on('keypress', function (evt) {
          var key = evt.which;

          if (self.isOpen()) {
            if (key === KEYS.ENTER) {
              self.trigger('results:select');
              evt.preventDefault();
            } else if (key === KEYS.SPACE && evt.ctrlKey) {
              self.trigger('results:toggle');
              evt.preventDefault();
            } else if (key === KEYS.UP) {
              self.trigger('results:previous');
              evt.preventDefault();
            } else if (key === KEYS.DOWN) {
              self.trigger('results:next');
              evt.preventDefault();
            } else if (key === KEYS.ESC || key === KEYS.TAB) {
              self.close();
              evt.preventDefault();
            }
          } else {
            if (key === KEYS.ENTER || key === KEYS.SPACE || (key === KEYS.DOWN || key === KEYS.UP) && evt.altKey) {
              self.open();
              evt.preventDefault();
            }
          }
        });
      };

      Select2.prototype._syncAttributes = function () {
        this.options.set('disabled', this.$element.prop('disabled'));

        if (this.options.get('disabled')) {
          if (this.isOpen()) {
            this.close();
          }

          this.trigger('disable');
        } else {
          this.trigger('enable');
        }
      };
      /**
       * Override the trigger method to automatically trigger pre-events when
       * there are events that can be prevented.
       */


      Select2.prototype.trigger = function (name, args) {
        var actualTrigger = Select2.__super__.trigger;
        var preTriggerMap = {
          'open': 'opening',
          'close': 'closing',
          'select': 'selecting',
          'unselect': 'unselecting'
        };

        if (name in preTriggerMap) {
          var preTriggerName = preTriggerMap[name];
          var preTriggerArgs = {
            prevented: false,
            name: name,
            args: args
          };
          actualTrigger.call(this, preTriggerName, preTriggerArgs);

          if (preTriggerArgs.prevented) {
            args.prevented = true;
            return;
          }
        }

        actualTrigger.call(this, name, args);
      };

      Select2.prototype.toggleDropdown = function () {
        if (this.options.get('disabled')) {
          return;
        }

        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      };

      Select2.prototype.open = function () {
        if (this.isOpen()) {
          return;
        }

        this.trigger('query', {});
        this.trigger('open');
      };

      Select2.prototype.close = function () {
        if (!this.isOpen()) {
          return;
        }

        this.trigger('close');
      };

      Select2.prototype.isOpen = function () {
        return this.$container.hasClass('select2-container--open');
      };

      Select2.prototype.enable = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + ' instead.');
        }

        if (args == null || args.length === 0) {
          args = [true];
        }

        var disabled = !args[0];
        this.$element.prop('disabled', disabled);
      };

      Select2.prototype.data = function () {
        if (this.options.get('debug') && arguments.length > 0 && window.console && console.warn) {
          console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + 'should consider setting the value instead using `$element.val()`.');
        }

        var data = [];
        this.dataAdapter.current(function (currentData) {
          data = currentData;
        });
        return data;
      };

      Select2.prototype.val = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("val")` method has been deprecated and will be' + ' removed in later Select2 versions. Use $element.val() instead.');
        }

        if (args == null || args.length === 0) {
          return this.$element.val();
        }

        var newVal = args[0];

        if ($.isArray(newVal)) {
          newVal = $.map(newVal, function (obj) {
            return obj.toString();
          });
        }

        this.$element.val(newVal).trigger('change');
      };

      Select2.prototype.destroy = function () {
        this.$container.remove();

        if (this.$element[0].detachEvent) {
          this.$element[0].detachEvent('onpropertychange', this._sync);
        }

        if (this._observer != null) {
          this._observer.disconnect();

          this._observer = null;
        } else if (this.$element[0].removeEventListener) {
          this.$element[0].removeEventListener('DOMAttrModified', this._sync, false);
        }

        this._sync = null;
        this.$element.off('.select2');
        this.$element.attr('tabindex', this.$element.data('old-tabindex'));
        this.$element.show();
        this.$element.removeData('select2');
        this.dataAdapter.destroy();
        this.selection.destroy();
        this.dropdown.destroy();
        this.results.destroy();
        this.dataAdapter = null;
        this.selection = null;
        this.dropdown = null;
        this.results = null;
      };

      Select2.prototype.render = function () {
        var $container = $('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + '</span>');
        $container.attr('dir', this.options.get('dir'));
        this.$container = $container;
        this.$container.addClass('select2-container--' + this.options.get('theme'));
        $container.data('element', this.$element);
        return $container;
      };

      return Select2;
    });
    S2.define('jquery.select2', ['jquery', './select2/core', './select2/defaults'], function ($, Select2, Defaults) {
      // Force jQuery.mousewheel to be loaded if it hasn't already
      if ($.fn.select2 == null) {
        $.fn.select2 = function (options) {
          options = options || {};

          if (_typeof(options) === 'object') {
            this.each(function () {
              var instanceOptions = $.extend({}, options, true);
              var instance = new Select2($(this), instanceOptions);
            });
            return this;
          } else if (typeof options === 'string') {
            var instance = this.data('select2');
            var args = Array.prototype.slice.call(arguments, 1);
            return instance[options](args);
          } else {
            throw new Error('Invalid arguments for Select2: ' + options);
          }
        };
      }

      if ($.fn.select2.defaults == null) {
        $.fn.select2.defaults = Defaults;
      }

      return Select2;
    }); // Return the AMD loader configuration so it can be used outside of this file

    return {
      define: S2.define,
      require: S2.require
    };
  }(); // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe


  var select2 = S2.require('jquery.select2'); // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.


  $.fn.select2.amd = S2; // Return the Select2 instance for anyone who is importing it.

  return select2;
});

/***/ }),

/***/ "./assets/vendor/color-admin/js/app.js":
/*!*********************************************!*\
  !*** ./assets/vendor/color-admin/js/app.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);















/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.6.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/admin/
	----------------------------
	APPS CONTENT TABLE
	----------------------------

	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
	01. Handle Scrollbar
	02. Handle Sidebar - Menu
	03. Handle Sidebar - Mobile View Toggle
	04. Handle Sidebar - Minify / Expand
	05. Handle Page Load - Fade in
	06. Handle Panel - Remove / Reload / Collapse / Expand
	07. Handle Panel - Draggable
	08. Handle Tooltip & Popover Activation
	09. Handle Scroll to Top Button Activation

	<!-- ======== Added in V1.2 ======== -->
	10. Handle Theme & Page Structure Configuration - added in V1.2
	11. Handle Theme Panel Expand - added in V1.2
	12. Handle After Page Load Add Class Function - added in V1.2

	<!-- ======== Added in V1.5 ======== -->
	13. Handle Save Panel Position Function - added in V1.5
	14. Handle Draggable Panel Local Storage Function - added in V1.5
	15. Handle Reset Local Storage - added in V1.5

	<!-- ======== Added in V1.6 ======== -->
	16. Handle IE Full Height Page Compatibility - added in V1.6
	17. Handle Unlimited Nav Tabs - added in V1.6

	<!-- ======== Added in V1.9 ======== -->
	18. Handle Top Menu - Unlimited Top Menu Render - added in V1.9
	19. Handle Top Menu - Sub Menu Toggle - added in V1.9
	20. Handle Top Menu - Mobile Sub Menu Toggle - added in V1.9
	21. Handle Top Menu - Mobile Top Menu Toggle - added in V1.9
	22. Handle Clear Sidebar Selection & Hide Mobile Menu - added in V1.9

	<!-- ======== Added in V4.0 ======== -->
	23. Handle Check Bootstrap Version - added in V4.0
	24. Handle Page Scroll Class - added in V4.0
	25. Handle Toggle Navbar Profile - added in V4.0
	26. Handle Sidebar Scroll Memory - added in V4.0
	27. Handle Sidebar Minify Sub Menu - added in V4.0
	28. Handle Ajax Mode - added in V4.0
	29. Handle Float Navbar Search - added in V4.0

	<!-- ======== APPLICATION SETTING ======== -->
	Application Controller
*/

/* 01. Handle Scrollbar
------------------------------------------------ */

var handleSlimScroll = function handleSlimScroll() {
  "use strict";

  jquery__WEBPACK_IMPORTED_MODULE_14___default().when(jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-scrollbar=true]').each(function () {
    generateSlimScroll(jquery__WEBPACK_IMPORTED_MODULE_14___default()(this));
  })).done(function () {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-scrollbar="true"]').mouseover();
  });
};

var generateSlimScroll = function generateSlimScroll(element) {
  if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).attr('data-init')) {
    return;
  }

  var dataHeight = jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).attr('data-height');
  dataHeight = !dataHeight ? jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).height() : dataHeight;
  var scrollBarOption = {
    height: dataHeight
  };

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).css('height', dataHeight);
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).css('overflow-x', 'scroll');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).slimScroll(scrollBarOption);
  }

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).attr('data-init', true);
  jquery__WEBPACK_IMPORTED_MODULE_14___default()('.slimScrollBar').hide();
};
/* 02. Handle Sidebar - Menu
------------------------------------------------ */


var handleSidebarMenu = function handleSidebarMenu() {
  "use strict";

  var expandTime = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar').attr('data-disable-slide-animation') ? 0 : 250;
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '.sidebar .nav > .has-sub > a', function () {
    var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).next('.sub-menu');
    var otherMenu = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar .nav > li.has-sub > .sub-menu').not(target);

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('.page-sidebar-minified').length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(otherMenu).closest('li').addClass('closing');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(otherMenu).slideUp(expandTime, function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(otherMenu).closest('li').addClass('closed').removeClass('expand closing');
      });

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).is(':visible')) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).closest('li').addClass('closing').removeClass('expand');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).closest('li').addClass('expanding').removeClass('closed');
      }

      jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).slideToggle(expandTime, function () {
        var targetLi = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li');

        if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).is(':visible')) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('closed');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('expand');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('expand');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('closed');
        }

        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('expanding closing');
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '.sidebar .nav > .has-sub .sub-menu li.has-sub > a', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('.page-sidebar-minified').length === 0) {
      var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).next('.sub-menu');

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).is(':visible')) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).closest('li').addClass('closing').removeClass('expand');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).closest('li').addClass('expanding').removeClass('closed');
      }

      jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).slideToggle(expandTime, function () {
        var targetLi = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li');

        if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).is(':visible')) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('closed');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('expand');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('expand');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('closed');
        }

        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('expanding closing');
      });
    }
  });
};
/* 03. Handle Sidebar - Mobile View Toggle
------------------------------------------------ */


var handleMobileSidebarToggle = function handleMobileSidebarToggle() {
  var sidebarProgress = false;
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click touchstart', '.sidebar', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(e.target).closest('.sidebar').length !== 0) {
      sidebarProgress = true;
    } else {
      sidebarProgress = false;
      e.stopPropagation();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click touchstart', function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(e.target).closest('.sidebar').length === 0) {
      sidebarProgress = false;
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(e.target).closest('#float-sub-menu').length !== 0) {
      sidebarProgress = true;
    }

    if (!e.isPropagationStopped() && sidebarProgress !== true) {
      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-sidebar-toggled')) {
        sidebarProgress = true;
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-sidebar-toggled');
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() <= 767) {
        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-right-sidebar-toggled')) {
          sidebarProgress = true;
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-right-sidebar-toggled');
        }
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=right-sidebar-toggled]', function (e) {
    e.stopPropagation();
    var targetContainer = '#page-container';
    var targetClass = 'page-right-sidebar-collapsed';
    targetClass = jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() < 768 ? 'page-right-sidebar-toggled' : targetClass;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).hasClass(targetClass)) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).removeClass(targetClass);
    } else if (sidebarProgress !== true) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).addClass(targetClass);
    } else {
      sidebarProgress = false;
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() < 480) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-sidebar-toggled');
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).trigger('resize');
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=sidebar-toggled]', function (e) {
    e.stopPropagation();
    var sidebarClass = 'page-sidebar-toggled';
    var targetContainer = '#page-container';

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).hasClass(sidebarClass)) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).removeClass(sidebarClass);
    } else if (sidebarProgress !== true) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).addClass(sidebarClass);
    } else {
      sidebarProgress = false;
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() < 480) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-right-sidebar-toggled');
    }
  });
};
/* 04. Handle Sidebar - Minify / Expand
------------------------------------------------ */


var handleSidebarMinify = function handleSidebarMinify() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click="sidebar-minify"]', function (e) {
    e.preventDefault();
    var sidebarClass = 'page-sidebar-minified';
    var targetContainer = '#page-container';
    var sidebarMinified = false;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).hasClass(sidebarClass)) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).removeClass(sidebarClass);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).addClass(sidebarClass);

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar [data-scrollbar="true"]').css('margin-top', '0');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar [data-scrollbar="true"]').css('overflow-x', 'scroll');
      }

      sidebarMinified = true;
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).trigger('resize');

    if (Cookies) {
      Cookies.set('sidebar-minified', sidebarMinified);
    }
  });
  /*if (Cookies) {
  	var sidebarMinified = Cookies.get('sidebar-minified');
  		if (sidebarMinified === 'true') {
  		$('#page-container').addClass('page-sidebar-minified');
  	}
  }*/
};
/* 05. Handle Page Load - Fade in
------------------------------------------------ */


var handlePageContentView = function handlePageContentView() {
  "use strict";

  var hideClass = '';
  var showClass = '';
  var removeClass = '';
  var bootstrapVersion = handleCheckBootstrapVersion();

  if (bootstrapVersion >= 3 && bootstrapVersion < 4) {
    hideClass = 'hide';
    showClass = 'in';
  } else if (bootstrapVersion >= 4 && bootstrapVersion < 5) {
    hideClass = 'd-none';
    showClass = 'show';
  }

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).on('load', function () {
    jquery__WEBPACK_IMPORTED_MODULE_14___default().when(jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-loader').addClass(hideClass)).done(function () {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass(showClass);
    });
  });
};
/* 06. Handle Panel - Remove / Reload / Collapse / Expand
------------------------------------------------ */


var panelActionRunning = false;

var handlePanelAction = function handlePanelAction() {
  "use strict";

  if (panelActionRunning) {
    return false;
  }

  panelActionRunning = true; // remove

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('hover', '[data-click=panel-remove]', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip({
        title: 'Remove',
        placement: 'bottom',
        trigger: 'hover',
        container: 'body'
      });
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip('show');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init', true);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=panel-remove]', function (e) {
    e.preventDefault();
    var bootstrapVersion = handleCheckBootstrapVersion();

    if (bootstrapVersion >= 4 && bootstrapVersion < 5) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip('dispose');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip('destroy');
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.panel').remove();
  }); // collapse

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('hover', '[data-click=panel-collapse]', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip({
        title: 'Collapse / Expand',
        placement: 'bottom',
        trigger: 'hover',
        container: 'body'
      });
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip('show');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init', true);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=panel-collapse]', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.panel').find('.panel-body').slideToggle();
  }); // reload

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('hover', '[data-click=panel-reload]', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip({
        title: 'Reload',
        placement: 'bottom',
        trigger: 'hover',
        container: 'body'
      });
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip('show');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init', true);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=panel-reload]', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.panel');

    if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).hasClass('panel-loading')) {
      var targetBody = jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).find('.panel-body');
      var spinnerHtml = '<div class="panel-loader"><span class="spinner-small"></span></div>';
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).addClass('panel-loading');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetBody).prepend(spinnerHtml);
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).removeClass('panel-loading');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).find('.panel-loader').remove();
      }, 2000);
    }
  }); // expand

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('hover', '[data-click=panel-expand]', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip({
        title: 'Expand / Compress',
        placement: 'bottom',
        trigger: 'hover',
        container: 'body'
      });
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).tooltip('show');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-init', true);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=panel-expand]', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.panel');
    var targetBody = jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).find('.panel-body');
    var targetTop = 40;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetBody).length !== 0) {
      var targetOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).offset().top;
      var targetBodyOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetBody).offset().top;
      targetTop = targetBodyOffsetTop - targetOffsetTop;
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').hasClass('panel-expand') && jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).hasClass('panel-expand')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('body, .panel').removeClass('panel-expand');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.panel').removeAttr('style');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetBody).removeAttr('style');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('panel-expand');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.panel').addClass('panel-expand');

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetBody).length !== 0 && targetTop != 40) {
        var finalHeight = 40;
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).find(' > *').each(function () {
          var targetClass = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('class');

          if (targetClass != 'panel-heading' && targetClass != 'panel-body') {
            finalHeight += jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).height() + 30;
          }
        });

        if (finalHeight != 40) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetBody).css('top', finalHeight + 'px');
        }
      }
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).trigger('resize');
  });
};
/* 07. Handle Panel - Draggable
------------------------------------------------ */


var handleDraggablePanel = function handleDraggablePanel() {
  "use strict";

  var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.panel:not([data-sortable="false"])').parent('[class*=col]');
  var targetHandle = '.panel-heading';
  var connectedTarget = '.row > [class*=col]';
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).sortable({
    handle: targetHandle,
    connectWith: connectedTarget,
    stop: function stop(event, ui) {
      ui.item.find('.panel-title').append('<i class="fa fa-refresh fa-spin m-l-5" data-id="title-spinner"></i>');
      handleSavePanelPosition(ui.item);
    }
  });
};
/* 08. Handle Tooltip & Popover Activation
------------------------------------------------ */


var handelTooltipPopoverActivation = function handelTooltipPopoverActivation() {
  "use strict";

  if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-toggle="tooltip"]').length !== 0) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-toggle=tooltip]').tooltip();
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-toggle="popover"]').length !== 0) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-toggle=popover]').popover();
  }
};
/* 09. Handle Scroll to Top Button Activation
------------------------------------------------ */


var handleScrollToTopButton = function handleScrollToTopButton() {
  "use strict";

  var bootstrapVersion = handleCheckBootstrapVersion();
  var showClass = '';

  if (bootstrapVersion >= 3 && bootstrapVersion < 4) {
    showClass = 'in';
  } else if (bootstrapVersion >= 4 && bootstrapVersion < 5) {
    showClass = 'show';
  }

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).scroll(function () {
    var totalScroll = jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).scrollTop();

    if (totalScroll >= 200) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click=scroll-top]').addClass(showClass);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click=scroll-top]').removeClass(showClass);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click=scroll-top]').click(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('html, body').animate({
      scrollTop: jquery__WEBPACK_IMPORTED_MODULE_14___default()("body").offset().top
    }, 500);
  });
};
/* 10. Handle Theme & Page Structure Configuration - added in V1.2
------------------------------------------------ */


var handleThemePageStructureControl = function handleThemePageStructureControl() {
  // THEME - color selection
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '.theme-panel [data-click="theme-selector"]', function () {
    var targetFile = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-theme-file');
    var targetTheme = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-theme');

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#theme-css-link').length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('head').append('<link href="' + targetFile + '" rel="stylesheet" id="theme-css-link" />');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#theme-css-link').attr('href', targetFile);
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [data-click="theme-selector"]').not(this).closest('li').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').addClass('active');

    if (Cookies) {
      Cookies.set('page-theme', targetTheme);
    }
  }); // HEADER - header styling selection

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('change', '.theme-panel [name="header-inverse"]', function () {
    var targetValue = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).is(':checked');
    var targetClassAdd = !targetValue ? 'navbar-default' : 'navbar-inverse';
    var targetClassRemove = !targetValue ? 'navbar-inverse' : 'navbar-default';
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#header').removeClass(targetClassRemove).addClass(targetClassAdd);

    if (Cookies) {
      Cookies.set('header-theme', targetClassAdd);
    }
  }); // SIDEBAR - sidebar grid selection

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('change', '.theme-panel [name="sidebar-grid"]', function () {
    var sidebarGrid = false;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar').addClass('sidebar-grid');
      sidebarGrid = true;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar').removeClass('sidebar-grid');
    }

    if (Cookies) {
      Cookies.set('sidebar-grid', sidebarGrid);
    }
  }); // SIDEBAR - sidebar gradient selection

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('change', '.theme-panel [name="sidebar-gradient"]', function () {
    var sidebarGradient = false;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('gradient-enabled');
      sidebarGradient = true;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('gradient-enabled');
    }

    if (Cookies) {
      Cookies.set('sidebar-gradient', sidebarGradient);
    }
  }); // SIDEBAR - sidebar fixed selection

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('change', '.theme-panel [name="sidebar-fixed"]', function () {
    var sidebarFixed = false;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).is(':checked')) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="header-fixed"]').is(':checked')) {
        alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="header-fixed"]').prop('checked', true);
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-header-fixed');
      }

      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-sidebar-fixed');

      if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-sidebar-minified')) {
        generateSlimScroll(jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar [data-scrollbar="true"]'));
      }

      sidebarFixed = true;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-sidebar-fixed');

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar .slimScrollDiv').length !== 0) {
        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() <= 979) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar').each(function () {
            if (!(jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-with-two-sidebar') && jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hasClass('sidebar-right'))) {
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('.slimScrollBar').remove();
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('.slimScrollRail').remove();
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('[data-scrollbar="true"]').removeAttr('style');
              var targetElement = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('[data-scrollbar="true"]').parent();
              var targetHtml = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetElement).html();
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetElement).replaceWith(targetHtml);
            }
          });
        } else if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() > 979) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar [data-scrollbar="true"]').slimScroll({
            destroy: true
          });
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar [data-scrollbar="true"]').removeAttr('style');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar [data-scrollbar="true"]').removeAttr('data-init');
        }
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container .sidebar-bg').length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').append('<div class="sidebar-bg"></div>');
      }
    }

    if (Cookies) {
      Cookies.set('sidebar-fixed', sidebarFixed);
    }
  }); // HEADER - fixed or default

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('change', '.theme-panel [name="header-fixed"]', function () {
    var headerFixed = false;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#header').addClass('navbar-fixed-top');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-header-fixed');
      headerFixed = true;
    } else {
      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="sidebar-fixed"]').is(':checked')) {
        alert('Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar.');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="sidebar-fixed"]').prop('checked', false);
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="sidebar-fixed"]').trigger('change');

        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container .sidebar-bg').length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').append('<div class="sidebar-bg"></div>');
        }
      }

      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#header').removeClass('navbar-fixed-top');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-header-fixed');
    }

    if (Cookies) {
      Cookies.set('header-fixed', headerFixed);
    }
  });

  if (Cookies) {
    var pageTheme = Cookies.get('page-theme');
    var headerTheme = Cookies.get('header-theme');
    var sidebarGrid = Cookies.get('sidebar-grid');
    var sidebarGradient = Cookies.get('sidebar-gradient');
    var sidebarFixed = Cookies.get('sidebar-fixed');
    var headerFixed = Cookies.get('header-fixed');

    if (pageTheme) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [data-click="theme-selector"][data-theme="' + pageTheme + '"]').trigger('click');
    }

    if (headerTheme && headerTheme == 'navbar-inverse') {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="header-inverse"]').prop('checked', true).trigger('change');
    }

    if (sidebarGrid == 'true') {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="sidebar-grid"]').prop('checked', true).trigger('change');
    }

    if (sidebarGradient == 'true') {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="sidebar-gradient"]').prop('checked', true).trigger('change');
    }

    if (sidebarFixed == 'false') {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="sidebar-fixed"]').prop('checked', false).trigger('change');
    }

    if (headerFixed == 'false') {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.theme-panel [name="header-fixed"]').prop('checked', false).trigger('change');
    }
  }
};
/* 11. Handle Theme Panel Expand - added in V1.2
------------------------------------------------ */


var handleThemePanelExpand = function handleThemePanelExpand() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click="theme-panel-expand"]', function () {
    var targetContainer = '.theme-panel';
    var targetClass = 'active';
    var targetExpand = false;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).hasClass(targetClass)) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).removeClass(targetClass);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).addClass(targetClass);
      targetExpand = true;
    }

    if (Cookies) {
      Cookies.set('theme-panel-expand', targetExpand);
    }
  });

  if (Cookies) {
    var themePanelExpand = Cookies.get('theme-panel-expand');

    if (themePanelExpand == 'true') {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click="theme-panel-expand"]').trigger('click');
    }
  }
};
/* 12. Handle After Page Load Add Class Function - added in V1.2
------------------------------------------------ */


var handleAfterPageLoadAddClass = function handleAfterPageLoadAddClass() {
  if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-pageload-addclass]').length !== 0) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).on('load', function () {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-pageload-addclass]').each(function () {
        var targetClass = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-pageload-addclass');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).addClass(targetClass);
      });
    });
  }
};
/* 13. Handle Save Panel Position Function - added in V1.5
------------------------------------------------ */


var handleSavePanelPosition = function handleSavePanelPosition(element) {
  "use strict";

  if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('.ui-sortable').length !== 0) {
    var newValue = [];
    var index = 0;
    jquery__WEBPACK_IMPORTED_MODULE_14___default().when(jquery__WEBPACK_IMPORTED_MODULE_14___default()('.ui-sortable').each(function () {
      var panelSortableElement = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).find('[data-sortable-id]');

      if (panelSortableElement.length !== 0) {
        var columnValue = [];
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(panelSortableElement).each(function () {
          var targetSortId = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-sortable-id');
          columnValue.push({
            id: targetSortId
          });
        });
        newValue.push(columnValue);
      } else {
        newValue.push([]);
      }

      index++;
    })).done(function () {
      var targetPage = window.location.href;
      targetPage = targetPage.split('?');
      targetPage = targetPage[0];
      localStorage.setItem(targetPage, JSON.stringify(newValue));
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).find('[data-id="title-spinner"]').delay(500).fadeOut(500, function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).remove();
      });
    });
  }
};
/* 14. Handle Draggable Panel Local Storage Function - added in V1.5
------------------------------------------------ */


var handleLocalStorage = function handleLocalStorage() {
  "use strict";

  try {
    if (typeof Storage !== 'undefined' && typeof localStorage !== 'undefined') {
      var targetPage = window.location.href;
      targetPage = targetPage.split('?');
      targetPage = targetPage[0];
      var panelPositionData = localStorage.getItem(targetPage);

      if (panelPositionData) {
        panelPositionData = JSON.parse(panelPositionData);
        var i = 0;
        jquery__WEBPACK_IMPORTED_MODULE_14___default().when(jquery__WEBPACK_IMPORTED_MODULE_14___default()('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function () {
          var storageData = panelPositionData[i];
          var targetColumn = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this);

          if (storageData) {
            jquery__WEBPACK_IMPORTED_MODULE_14___default().each(storageData, function (index, data) {
              var targetId = jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-sortable-id="' + data.id + '"]').not('[data-init="true"]');

              if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetId).length !== 0) {
                var targetHtml = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetId).clone();
                jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetId).remove();
                jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetColumn).append(targetHtml);
                jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-sortable-id="' + data.id + '"]').attr('data-init', 'true');
              }
            });
          }

          i++;
        })).done(function () {
          window.dispatchEvent(new CustomEvent('localstorage-position-loaded'));
        });
      }
    } else {
      alert('Your browser is not supported with the local storage');
    }
  } catch (error) {
    console.log(error);
  }
};
/* 15. Handle Reset Local Storage - added in V1.5
------------------------------------------------ */


var handleResetLocalStorage = function handleResetLocalStorage() {
  "use strict";

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=reset-local-storage]', function (e) {
    e.preventDefault();
    var targetModalHtml = '' + '<div class="modal fade" data-modal-id="reset-local-storage-confirmation">' + '    <div class="modal-dialog">' + '        <div class="modal-content">' + '            <div class="modal-header">' + '                <h4 class="modal-title"><i class="fa fa-redo m-r-5"></i> Reset Local Storage Confirmation</h4>' + '                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '            </div>' + '            <div class="modal-body">' + '                <div class="alert alert-info m-b-0">Would you like to RESET all your saved widgets and clear Local Storage?</div>' + '            </div>' + '            <div class="modal-footer">' + '                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal"><i class="fa fa-times"></i> No</a>' + '                <a href="javascript:;" class="btn btn-sm btn-inverse" data-click="confirm-reset-local-storage"><i class="fa fa-check"></i> Yes</a>' + '            </div>' + '        </div>' + '    </div>' + '</div>';
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').append(targetModalHtml);
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-modal-id="reset-local-storage-confirmation"]').modal('show');
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('hidden.bs.modal', '[data-modal-id="reset-local-storage-confirmation"]', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-modal-id="reset-local-storage-confirmation"]').remove();
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click=confirm-reset-local-storage]', function (e) {
    e.preventDefault();
    var localStorageName = window.location.href;
    localStorageName = localStorageName.split('?');
    localStorageName = localStorageName[0];
    localStorage.removeItem(localStorageName);
    location.reload();
  });
};
/* 16. Handle IE Full Height Page Compatibility - added in V1.6
------------------------------------------------ */


var handleIEFullHeightContent = function handleIEFullHeightContent() {
  var userAgent = window.navigator.userAgent;
  var msie = userAgent.indexOf("MSIE ");

  if (msie > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.vertical-box-row [data-scrollbar="true"][data-height="100%"]').each(function () {
      var targetRow = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.vertical-box-row');
      var targetHeight = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetRow).height();
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetRow).find('.vertical-box-cell').height(targetHeight);
    });
  }
};
/* 17. Handle Unlimited Nav Tabs - added in V1.6
------------------------------------------------ */


var handleUnlimitedTabsRender = function handleUnlimitedTabsRender() {
  // function handle tab overflow scroll width
  function handleTabOverflowScrollWidth(obj, animationSpeed) {
    var targetElm = 'li.active';

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('li').first().hasClass('nav-item')) {
      targetElm = jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav-item .active').closest('li');
    }

    var targetCss = jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') == 'rtl' ? 'margin-right' : 'margin-left';
    var marginLeft = parseInt(jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).css(targetCss));
    var viewWidth = jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).width();
    var prevWidth = jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find(targetElm).width();
    var speed = animationSpeed > -1 ? animationSpeed : 150;
    var fullWidth = 0;
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find(targetElm).prevAll().each(function () {
      prevWidth += jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).width();
    });
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('li').each(function () {
      fullWidth += jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).width();
    });

    if (prevWidth >= viewWidth) {
      var finalScrollWidth = prevWidth - viewWidth;

      if (fullWidth != prevWidth) {
        finalScrollWidth += 40;
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') == 'rtl') {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav.nav-tabs').animate({
          marginRight: '-' + finalScrollWidth + 'px'
        }, speed);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav.nav-tabs').animate({
          marginLeft: '-' + finalScrollWidth + 'px'
        }, speed);
      }
    }

    if (prevWidth != fullWidth && fullWidth >= viewWidth) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).addClass('overflow-right');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).removeClass('overflow-right');
    }

    if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).addClass('overflow-left');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).removeClass('overflow-left');
    }
  } // function handle tab button action - next / prev


  function handleTabButtonAction(element, direction) {
    var obj = jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).closest('.tab-overflow');
    var targetCss = jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') == 'rtl' ? 'margin-right' : 'margin-left';
    var marginLeft = parseInt(jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav.nav-tabs').css(targetCss));
    var containerWidth = jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).width();
    var totalWidth = 0;
    var finalScrollWidth = 0;
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('li').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hasClass('next-button') && !jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hasClass('prev-button')) {
        totalWidth += jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).width();
      }
    });

    switch (direction) {
      case 'next':
        var widthLeft = totalWidth + marginLeft - containerWidth;

        if (widthLeft <= containerWidth) {
          finalScrollWidth = widthLeft - marginLeft;
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).removeClass('overflow-right');
          }, 150);
        } else {
          finalScrollWidth = containerWidth - marginLeft - 80;
        }

        if (finalScrollWidth !== 0) {
          if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl') {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav.nav-tabs').animate({
              marginLeft: '-' + finalScrollWidth + 'px'
            }, 150, function () {
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).addClass('overflow-left');
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav.nav-tabs').animate({
              marginRight: '-' + finalScrollWidth + 'px'
            }, 150, function () {
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).addClass('overflow-left');
            });
          }
        }

        break;

      case 'prev':
        var widthLeft = -marginLeft;

        if (widthLeft <= containerWidth) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).removeClass('overflow-left');
          finalScrollWidth = 0;
        } else {
          finalScrollWidth = widthLeft - containerWidth + 80;
        }

        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl') {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav.nav-tabs').animate({
            marginLeft: '-' + finalScrollWidth + 'px'
          }, 150, function () {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).addClass('overflow-right');
          });
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.nav.nav-tabs').animate({
            marginRight: '-' + finalScrollWidth + 'px'
          }, 150, function () {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).addClass('overflow-right');
          });
        }

        break;
    }
  } // handle page load active tab focus


  function handlePageLoadTabFocus() {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.tab-overflow').each(function () {
      handleTabOverflowScrollWidth(this, 0);
    });
  } // handle tab next button click action


  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click="next-tab"]').click(function (e) {
    e.preventDefault();
    handleTabButtonAction(this, 'next');
  }); // handle tab prev button click action

  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click="prev-tab"]').click(function (e) {
    e.preventDefault();
    handleTabButtonAction(this, 'prev');
  }); // handle unlimited tabs responsive setting

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).resize(function () {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.tab-overflow .nav.nav-tabs').removeAttr('style');
    handlePageLoadTabFocus();
  });
  handlePageLoadTabFocus();
};
/* 18. Handle Top Menu - Unlimited Top Menu Render - added in V1.9
------------------------------------------------ */


var handleUnlimitedTopMenuRender = function handleUnlimitedTopMenuRender() {
  "use strict"; // function handle menu button action - next / prev

  function handleMenuButtonAction(element, direction) {
    var obj = jquery__WEBPACK_IMPORTED_MODULE_14___default()(element).closest('.nav');
    var targetCss = jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') == 'rtl' ? 'margin-right' : 'margin-left';
    var marginLeft = parseInt(jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).css(targetCss));
    var containerWidth = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu').width() - 88;
    var totalWidth = 0;
    var finalScrollWidth = 0;
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('li').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hasClass('menu-control')) {
        totalWidth += jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).width();
      }
    });

    switch (direction) {
      case 'next':
        var widthLeft = totalWidth + marginLeft - containerWidth;

        if (widthLeft <= containerWidth) {
          finalScrollWidth = widthLeft - marginLeft + 128;
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.menu-control.menu-control-right').removeClass('show');
          }, 150);
        } else {
          finalScrollWidth = containerWidth - marginLeft - 128;
        }

        if (finalScrollWidth !== 0) {
          if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl') {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).animate({
              marginLeft: '-' + finalScrollWidth + 'px'
            }, 150, function () {
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.menu-control.menu-control-left').addClass('show');
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).animate({
              marginRight: '-' + finalScrollWidth + 'px'
            }, 150, function () {
              jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.menu-control.menu-control-left').addClass('show');
            });
          }
        }

        break;

      case 'prev':
        var widthLeft = -marginLeft;

        if (widthLeft <= containerWidth) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.menu-control.menu-control-left').removeClass('show');
          finalScrollWidth = 0;
        } else {
          finalScrollWidth = widthLeft - containerWidth + 88;
        }

        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl') {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).animate({
            marginLeft: '-' + finalScrollWidth + 'px'
          }, 150, function () {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.menu-control.menu-control-right').addClass('show');
          });
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).animate({
            marginRight: '-' + finalScrollWidth + 'px'
          }, 150, function () {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(obj).find('.menu-control.menu-control-right').addClass('show');
          });
        }

        break;
    }
  } // handle page load active menu focus


  function handlePageLoadMenuFocus() {
    var targetMenu = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu .nav');
    var targetList = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu .nav > li');
    var targetActiveList = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu .nav > li.active');
    var targetContainer = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu');
    var targetCss = jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') == 'rtl' ? 'margin-right' : 'margin-left';
    var marginLeft = parseInt(jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).css(targetCss));
    var viewWidth = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).width() - 128;
    var prevWidth = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu .nav > li.active').width();
    var speed = 0;
    var fullWidth = 0;
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetActiveList).prevAll().each(function () {
      prevWidth += jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).width();
    });
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetList).each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).hasClass('menu-control')) {
        fullWidth += jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).width();
      }
    });

    if (prevWidth >= viewWidth) {
      var finalScrollWidth = prevWidth - viewWidth + 128;

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl') {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).animate({
          marginLeft: '-' + finalScrollWidth + 'px'
        }, speed);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).animate({
          marginRight: '-' + finalScrollWidth + 'px'
        }, speed);
      }
    }

    if (prevWidth != fullWidth && fullWidth >= viewWidth) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).find('.menu-control.menu-control-right').addClass('show');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).find('.menu-control.menu-control-right').removeClass('show');
    }

    if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).find('.menu-control.menu-control-left').addClass('show');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).find('.menu-control.menu-control-left').removeClass('show');
    }
  } // handle menu next button click action


  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click="next-menu"]').click(function (e) {
    e.preventDefault();
    handleMenuButtonAction(this, 'next');
  }); // handle menu prev button click action

  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-click="prev-menu"]').click(function (e) {
    e.preventDefault();
    handleMenuButtonAction(this, 'prev');
  }); // handle unlimited menu responsive setting

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).resize(function () {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu .nav').removeAttr('style');
    handlePageLoadMenuFocus();
  });
  handlePageLoadMenuFocus();
};
/* 19. Handle Top Menu - Sub Menu Toggle - added in V1.9
------------------------------------------------ */


var handleTopMenuSubMenu = function handleTopMenuSubMenu() {
  "use strict";

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '.top-menu .sub-menu .has-sub > a', function () {
    var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').find('.sub-menu').first();
    var otherMenu = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('ul').find('.sub-menu').not(target);
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(otherMenu).not(target).slideUp(250, function () {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').removeClass('expand');
    });
    jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).slideToggle(250, function () {
      var targetLi = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li');

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).hasClass('expand')) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('expand');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('expand');
      }
    });
  });
};
/* 20. Handle Top Menu - Mobile Sub Menu Toggle - added in V1.9
------------------------------------------------ */


var handleMobileTopMenuSubMenu = function handleMobileTopMenuSubMenu() {
  "use strict";

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '.top-menu .nav > li.has-sub > a', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() <= 767) {
      var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').find('.sub-menu').first();
      var otherMenu = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('ul').find('.sub-menu').not(target);
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(otherMenu).not(target).slideUp(250, function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').removeClass('expand');
      });
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).slideToggle(250, function () {
        var targetLi = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li');

        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).hasClass('expand')) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('expand');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('expand');
        }
      });
    }
  });
};
/* 21. Handle Top Menu - Mobile Top Menu Toggle - added in V1.9
------------------------------------------------ */


var handleTopMenuMobileToggle = function handleTopMenuMobileToggle() {
  "use strict";

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-click="top-menu-toggled"]', function () {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.top-menu').slideToggle(250);
  });
};
/* 22. Handle Clear Sidebar Selection & Hide Mobile Menu - added in V1.9
------------------------------------------------ */


var handleClearSidebarSelection = function handleClearSidebarSelection() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar .nav > li, .sidebar .nav .sub-menu').removeClass('expand').removeAttr('style');
};

var handleClearSidebarMobileSelection = function handleClearSidebarMobileSelection() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-sidebar-toggled');
};
/* 23. Handle Check Bootstrap Version - added in V4.0
------------------------------------------------ */


var handleCheckBootstrapVersion = function handleCheckBootstrapVersion() {
  return parseInt((jquery__WEBPACK_IMPORTED_MODULE_14___default().fn.tooltip.Constructor.VERSION));
};
/* 24. Handle Page Scroll Class - added in V4.0
------------------------------------------------ */


var handleCheckScrollClass = function handleCheckScrollClass() {
  if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).scrollTop() > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('has-scroll');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('has-scroll');
  }
};

var handlePageScrollClass = function handlePageScrollClass() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).on('scroll', function () {
    handleCheckScrollClass();
  });
  handleCheckScrollClass();
};
/* 25. Handle Toggle Navbar Profile - added in V4.0
------------------------------------------------ */


var handleToggleNavProfile = function handleToggleNavProfile() {
  var expandTime = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar').attr('data-disable-slide-animation') ? 0 : 250;
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-toggle="nav-profile"]', function (e) {
    e.preventDefault();
    var targetLi = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li');
    var targetProfile = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar .nav.nav-profile');
    var targetClass = 'active';
    var targetExpandingClass = 'expanding';
    var targetExpandClass = 'expand';
    var targetClosingClass = 'closing';
    var targetClosedClass = 'closed';

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).is(':visible')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass(targetClass);
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).removeClass(targetClosingClass);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass(targetClass);
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).addClass(targetExpandingClass);
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).slideToggle(expandTime, function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).is(':visible')) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).addClass(targetClosedClass);
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).removeClass(targetExpandClass);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).addClass(targetExpandClass);
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).removeClass(targetClosedClass);
      }

      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetProfile).removeClass(targetExpandingClass + ' ' + targetClosingClass);
    });
  });
};
/* 26. Handle Sidebar Scroll Memory - added in V4.0
------------------------------------------------ */


var handleSidebarScrollMemory = function handleSidebarScrollMemory() {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    try {
      if (typeof Storage !== 'undefined' && typeof localStorage !== 'undefined') {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar [data-scrollbar="true"]').slimScroll().bind('slimscrolling', function (e, pos) {
          localStorage.setItem('sidebarScrollPosition', pos + 'px');
        });
        var defaultScroll = localStorage.getItem('sidebarScrollPosition');

        if (defaultScroll) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar [data-scrollbar="true"]').slimScroll({
            scrollTo: defaultScroll
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};
/* 27. Handle Sidebar Minify Sub Menu - added in V4.0
------------------------------------------------ */


var floatSubMenuTimeout;
var targetFloatMenu;

var handleMouseoverFloatSubMenu = function handleMouseoverFloatSubMenu(elm) {
  clearTimeout(floatSubMenuTimeout);
};

var handleMouseoutFloatSubMenu = function handleMouseoutFloatSubMenu(elm) {
  floatSubMenuTimeout = setTimeout(function () {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').remove();
  }, 150);
};

var handleSidebarMinifyFloatMenu = function handleSidebarMinifyFloatMenu() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '#float-sub-menu li.has-sub > a', function (e) {
    var target = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).next('.sub-menu');
    var targetLi = jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).closest('li');
    var close = false;
    var expand = false;

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).is(':visible')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('closing');
      close = true;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('expanding');
      expand = true;
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).slideToggle({
      duration: 250,
      progress: function progress() {
        var targetMenu = jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu');
        var targetHeight = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).height();
        var targetOffset = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).offset();
        var targetOriTop = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).attr('data-offset-top');
        var targetMenuTop = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).attr('data-menu-offset-top');
        var targetTop = targetOffset.top - jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).scrollTop();
        var windowHeight = jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).height();

        if (close) {
          if (targetTop > targetOriTop) {
            targetTop = targetTop > targetOriTop ? targetOriTop : targetTop;
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').css({
              'top': targetTop + 'px',
              'bottom': 'auto'
            });
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-arrow').css({
              'top': '20px',
              'bottom': 'auto'
            });
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-line').css({
              'top': '20px',
              'bottom': 'auto'
            });
          }
        }

        if (expand) {
          if (windowHeight - targetTop < targetHeight) {
            var arrowBottom = windowHeight - targetMenuTop - 22;
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').css({
              'top': 'auto',
              'bottom': 0
            });
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-arrow').css({
              'top': 'auto',
              'bottom': arrowBottom + 'px'
            });
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-line').css({
              'top': '20px',
              'bottom': arrowBottom + 'px'
            });
          }
        }
      },
      complete: function complete() {
        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(target).is(':visible')) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('expand');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('closed');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).addClass('closed');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('expand');
        }

        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetLi).removeClass('closing expanding');
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on({
    mouseenter: function mouseenter() {
      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-sidebar-minified')) {
        clearTimeout(floatSubMenuTimeout);
        var targetMenu = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').find('.sub-menu').first();

        if (targetFloatMenu == this && jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').length !== 0) {
          return;
        } else {
          targetFloatMenu = this;
        }

        var targetMenuHtml = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).html();

        if (targetMenuHtml) {
          var sidebarOffset = jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar').offset();
          var sidebarWidth = parseInt(jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar').width());
          var sidebarX = !jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-with-right-sidebar') && jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl' ? sidebarOffset.left + sidebarWidth : jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).width() - sidebarOffset.left;
          var targetHeight = jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetMenu).height();
          var targetOffset = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).offset();
          var targetTop = targetOffset.top - jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).scrollTop();
          var targetLeft = !jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-with-right-sidebar') && jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl' ? sidebarX : 'auto';
          var targetRight = !jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-with-right-sidebar') && jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').css('direction') != 'rtl' ? 'auto' : sidebarX;
          var windowHeight = jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).height();

          if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').length === 0) {
            targetMenuHtml = '' + '<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="' + targetTop + '" data-menu-offset-top="' + targetTop + '" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">' + '	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>' + '	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>' + '	<ul class="float-sub-menu">' + targetMenuHtml + '</ul>' + '</div>';
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').append(targetMenuHtml);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').attr('data-offset-top', targetTop);
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').attr('data-menu-offset-top', targetTop);
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('.float-sub-menu').html(targetMenuHtml);
          }

          var targetHeight = jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').height();

          if (windowHeight - targetTop > targetHeight) {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').css({
              'top': targetTop,
              'left': targetLeft,
              'bottom': 'auto',
              'right': targetRight
            });
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-arrow').css({
              'top': '20px',
              'bottom': 'auto'
            });
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-line').css({
              'top': '20px',
              'bottom': 'auto'
            });
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').css({
              'bottom': 0,
              'top': 'auto',
              'left': targetLeft,
              'right': targetRight
            });
            var arrowBottom = windowHeight - targetTop - 21;
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-arrow').css({
              'top': 'auto',
              'bottom': arrowBottom + 'px'
            });
            jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu-line').css({
              'top': '20px',
              'bottom': arrowBottom + 'px'
            });
          }
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').remove();
          targetFloatMenu = '';
        }
      }
    },
    mouseleave: function mouseleave() {
      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-sidebar-minified')) {
        floatSubMenuTimeout = setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()('#float-sub-menu').remove();
          targetFloatMenu = '';
        }, 250);
      }
    }
  }, '.sidebar .nav > li.has-sub > a');
};
/* 28. Handle Ajax Mode - added in V4.0
------------------------------------------------ */


var CLEAR_OPTION = '';

var handleAjaxMode = function handleAjaxMode(setting) {
  var emptyHtml = setting.emptyHtml ? setting.emptyHtml : '<div class="p-t-40 p-b-40 text-center f-s-20 content"><i class="fa fa-warning fa-lg text-muted m-r-5"></i> <span class="f-w-600 text-inverse">Error 404! Page not found.</span></div>';
  var defaultUrl = setting.ajaxDefaultUrl ? setting.ajaxDefaultUrl : '';
  defaultUrl = window.location.hash ? window.location.hash : defaultUrl;

  if (defaultUrl === '') {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#content').html(emptyHtml);
  } else {
    renderAjax(defaultUrl, '', true);
  }

  function clearElement() {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.jvectormap-label, .jvector-label, .AutoFill_border ,#gritter-notice-wrapper, .ui-autocomplete, .colorpicker, .FixedHeader_Header, .FixedHeader_Cloned .lightboxOverlay, .lightbox, .introjs-hints, .nvtooltip, #float-sub-menu').remove();

    if ((jquery__WEBPACK_IMPORTED_MODULE_14___default().fn.DataTable)) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.dataTable').DataTable().destroy();
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').hasClass('page-sidebar-toggled')) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-sidebar-toggled');
    }
  }

  function checkSidebarActive(url) {
    var targetElm = '#sidebar [data-toggle="ajax"][href="' + url + '"]';

    if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetElm).length !== 0) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar li').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetElm).closest('li').addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetElm).parents().addClass('active');
    }
  }

  function checkPushState(url) {
    var targetUrl = url.replace('#', '');
    var targetUserAgent = window.navigator.userAgent;
    var isIE = targetUserAgent.indexOf('MSIE ');

    if (isIE && isIE > 0 && isIE < 9) {
      window.location.href = targetUrl;
    } else {
      history.pushState('', '', '#' + targetUrl);
    }
  }

  function checkClearOption() {
    if (CLEAR_OPTION) {
      App.clearPageOption(CLEAR_OPTION);
      CLEAR_OPTION = '';
    }
  }

  function checkLoading(load) {
    if (!load) {
      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-content-loader').length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('page-content-loading');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#content').append('<div id="page-content-loader"><span class="spinner"></span></div>');
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-content-loader').remove();
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').removeClass('page-content-loading');
    }
  }

  function renderAjax(url, elm, disablePushState) {
    Pace.restart();
    checkLoading(false);
    clearElement();
    checkSidebarActive(url);
    checkClearOption();

    if (!disablePushState) {
      checkPushState(url);
    }

    var targetContainer = '#content';
    var targetUrl = url.replace('#', '');
    var targetType = setting.ajaxType ? setting.ajaxType : 'GET';
    var targetDataType = setting.ajaxDataType ? setting.ajaxDataType : 'html';

    if (elm) {
      targetDataType = jquery__WEBPACK_IMPORTED_MODULE_14___default()(elm).attr('data-type') ? jquery__WEBPACK_IMPORTED_MODULE_14___default()(elm).attr('data-type') : targetDataType;
      targetDataDataType = jquery__WEBPACK_IMPORTED_MODULE_14___default()(elm).attr('data-data-type') ? jquery__WEBPACK_IMPORTED_MODULE_14___default()(elm).attr('data-data-type') : targetDataType;
    }

    jquery__WEBPACK_IMPORTED_MODULE_14___default().ajax({
      url: targetUrl,
      type: targetType,
      dataType: targetDataType,
      success: function success(data) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).html(data);
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetContainer).html(emptyHtml);
      }
    }).done(function () {
      checkLoading(true);
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('html, body').animate({
        scrollTop: 0
      }, 0);
      App.initComponent();
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).on('hashchange', function () {
    if (window.location.hash) {
      renderAjax(window.location.hash, '', true);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '[data-toggle="ajax"]', function (e) {
    e.preventDefault();
    renderAjax(jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('href'), this);
  });
};

var handleSetPageOption = function handleSetPageOption(option) {
  if (option.pageContentFullHeight) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-content-full-height');
  }

  if (option.pageSidebarLight) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-with-light-sidebar');
  }

  if (option.pageSidebarRight) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-with-right-sidebar');
  }

  if (option.pageSidebarWide) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-with-wide-sidebar');
  }

  if (option.pageSidebarMinified) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').addClass('page-sidebar-minified');
  }

  if (option.pageSidebarTransparent) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar').addClass('sidebar-transparent');
  }

  if (option.pageContentFullWidth) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#content').addClass('content-full-width');
  }

  if (option.pageContentInverseMode) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#content').addClass('content-inverse-mode');
  }

  if (option.pageBoxedLayout) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').addClass('boxed-layout');
  }

  if (option.clearOptionOnLeave) {
    CLEAR_OPTION = option;
  }
};

var handleClearPageOption = function handleClearPageOption(option) {
  if (option.pageContentFullHeight) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-content-full-height');
  }

  if (option.pageSidebarLight) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-with-light-sidebar');
  }

  if (option.pageSidebarRight) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-with-right-sidebar');
  }

  if (option.pageSidebarWide) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-with-wide-sidebar');
  }

  if (option.pageSidebarMinified) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#page-container').removeClass('page-sidebar-minified');
  }

  if (option.pageSidebarTransparent) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#sidebar').removeClass('sidebar-transparent');
  }

  if (option.pageContentFullWidth) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#content').removeClass('content-full-width');
  }

  if (option.pageContentInverseMode) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('#content').removeClass('content-inverse-mode');
  }

  if (option.pageBoxedLayout) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').removeClass('boxed-layout');
  }
};
/* 29. Handle Float Navbar Search - added in V4.0
------------------------------------------------ */


var handleToggleNavbarSearch = function handleToggleNavbarSearch() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-toggle="navbar-search"]').click(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.header').addClass('header-search-toggled');
  });
  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-dismiss="navbar-search"]').click(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_14___default()('.header').removeClass('header-search-toggled');
  });
};

var convertNumberWithCommas = function convertNumberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var checkIsFloat = function checkIsFloat(x) {
  return Number(x) === x && x % 1 !== 0;
};

var checkIsInt = function checkIsInt(x) {
  return Number(x) === x && x % 1 === 0;
};

var countDecimals = function countDecimals(x) {
  var split = x.toString().split('.');
  return split[1] ? split[1].length : 0;
};

var handleAnimation = function handleAnimation() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-animation]').each(function () {
    var targetAnimate = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-animation');
    var targetValue = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-value');

    switch (targetAnimate) {
      case 'width':
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).css('width', targetValue);
        break;

      case 'height':
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).css('height', targetValue);
        break;

      case 'number':
        var targetElm = this;
        var decimal = countDecimals(targetValue);
        var divide = 1;
        var x = decimal;

        while (x > 0) {
          divide *= 10;
          x--;
        }

        jquery__WEBPACK_IMPORTED_MODULE_14___default()({
          animateNumber: 0
        }).animate({
          animateNumber: targetValue
        }, {
          duration: 1000,
          easing: 'swing',
          step: function step() {
            var number = (Math.ceil(this.animateNumber * divide) / divide).toFixed(decimal);
            var number = convertNumberWithCommas(number);
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetElm).text(number);
          },
          done: function done() {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(targetElm).text(convertNumberWithCommas(targetValue));
          }
        });
        break;

      case 'class':
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).addClass(targetValue);
        break;

      default:
        break;
    }
  });
};

var handleSidebarSearch = function handleSidebarSearch() {
  jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('keyup', '[data-sidebar-search="true"]', function () {
    var targetValue = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).val();
    targetValue = targetValue.toLowerCase();

    if (targetValue) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar:not(.sidebar-right) .nav > li:not(.nav-profile):not(.nav-header):not(.nav-search), .sidebar:not(.sidebar-right) .sub-menu > li').addClass('d-none');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar:not(.sidebar-right) .has-text').removeClass('has-text');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar:not(.sidebar-right) .expand').removeClass('expand');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar:not(.sidebar-right) .nav > li:not(.nav-profile):not(.nav-header):not(.nav-search) > a, .sidebar .sub-menu > li > a').each(function () {
        var targetText = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).text();
        targetText = targetText.toLowerCase();

        if (targetText.search(targetValue) > -1) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').removeClass('d-none');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li').addClass('has-text');

          if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li.has-sub').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('li.has-sub').find('.sub-menu li.d-none').removeClass('d-none');
          }

          if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.sub-menu').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.sub-menu').css('display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.has-sub').removeClass('d-none').addClass('expand');
            jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).closest('.sub-menu').find('li:not(.has-text)').addClass('d-none');
          }
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar:not(.sidebar-right) .nav > li:not(.nav-profile):not(.nav-header):not(.nav-search).has-sub .sub-menu').removeAttr('style');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar:not(.sidebar-right) .nav > li:not(.nav-profile):not(.nav-header):not(.nav-search), .sidebar:not(.sidebar-right) .sub-menu > li').removeClass('d-none');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.sidebar:not(.sidebar-right) .expand').removeClass('expand');
    }
  });
};
/* Application Controller
------------------------------------------------ */


var App = function () {
  "use strict";

  var setting;
  return {
    //main function
    init: function init(option) {
      if (option) {
        setting = option;
      }

      this.initLocalStorage();
      this.initSidebar();
      this.initTopMenu();
      this.initComponent(); //this.initThemePanel();

      this.initPageLoad();
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(window).trigger('load');

      if (setting && setting.ajaxMode) {
        this.initAjax();
      }
    },
    settings: function settings(option) {
      if (option) {
        setting = option;
      }
    },
    initSidebar: function initSidebar() {
      handleSidebarMenu();
      handleMobileSidebarToggle();
      handleSidebarMinify();
      handleSidebarMinifyFloatMenu();
      handleToggleNavProfile();
      handleToggleNavbarSearch();
      handleSidebarSearch();

      if (!setting || setting && !setting.disableSidebarScrollMemory) {
        handleSidebarScrollMemory();
      }
    },
    initSidebarSelection: function initSidebarSelection() {
      handleClearSidebarSelection();
    },
    initSidebarMobileSelection: function initSidebarMobileSelection() {
      handleClearSidebarMobileSelection();
    },
    initTopMenu: function initTopMenu() {
      handleUnlimitedTopMenuRender();
      handleTopMenuSubMenu();
      handleMobileTopMenuSubMenu();
      handleTopMenuMobileToggle();
    },
    initPageLoad: function initPageLoad() {
      handlePageContentView();
    },
    initComponent: function initComponent() {
      /*if (!setting || (setting && !setting.disableDraggablePanel)) {
      	handleDraggablePanel();
      }*/
      handleIEFullHeightContent(); //handleSlimScroll();

      /*handleUnlimitedTabsRender();*/

      handlePanelAction();
      /*handleScrollToTopButton();
      handleAfterPageLoadAddClass();
      handlePageScrollClass();
      handleAnimation();*/

      /*if ($(window).width() > 767) {
      	handelTooltipPopoverActivation();
      }*/
    },
    initLocalStorage: function initLocalStorage() {
      if (!setting || setting && !setting.disableLocalStorage) {
        handleLocalStorage();
      }
    },
    initThemePanel: function initThemePanel() {
      handleThemePageStructureControl();
      handleThemePanelExpand();
      handleResetLocalStorage();
    },
    initAjax: function initAjax() {
      handleAjaxMode(setting);
      jquery__WEBPACK_IMPORTED_MODULE_14___default().ajaxSetup({
        cache: true
      });
    },
    setPageTitle: function setPageTitle(pageTitle) {
      document.title = pageTitle;
    },
    setPageOption: function setPageOption(option) {
      handleSetPageOption(option);
    },
    clearPageOption: function clearPageOption(option) {
      handleClearPageOption(option);
    },
    restartGlobalFunction: function restartGlobalFunction() {
      this.initLocalStorage();
      this.initTopMenu();
      this.initComponent();
    },
    scrollTop: function scrollTop() {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('html, body').animate({
        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').offset().top
      }, 0);
    }
  };
}();

jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).ready(function () {
  App.init();
});

/***/ }),

/***/ "./assets/css/app.min.css":
/*!********************************!*\
  !*** ./assets/css/app.min.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/plugins/select2/dist/css/select2.css":
/*!*****************************************************!*\
  !*** ./assets/plugins/select2/dist/css/select2.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/js/app.js","runtime","vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_core-js_modules_es_array_con-bfa9dc"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvcGF1bHVzYWsvY2FyZF9zeXN0ZW0vY2FyZF9zeXN0ZW0vYXNzZXRzL3BsdWdpbnMvc2VsZWN0Mi9kaXN0L2pzfHN5bmN8L14uKmNvbXBhdFxcL2lucHV0RGF0YSQvIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlbGVjdDJlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BsdWdpbnMvc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9jb2xvci1hZG1pbi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAubWluLmNzcz85MzZjIiwid2VicGFjazovLy8uL2Fzc2V0cy9wbHVnaW5zL3NlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5jc3M/YzAwYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImZuIiwic2VsZWN0MmVudGl0eSIsIm9wdGlvbnMiLCJlYWNoIiwicmVxdWVzdCIsIiRzMiIsImxpbWl0IiwiZGF0YSIsInNjcm9sbCIsInByZWZpeCIsIkRhdGUiLCJub3ciLCJxdWVyeV9wYXJhbWV0ZXJzIiwicmVuZGVyX2h0bWwiLCJjYWNoZSIsInJlcVBhcmFtcyIsImtleSIsInZhbHVlIiwib24iLCJ2YWwiLCJ0cmlnZ2VyIiwibWVyZ2VkT3B0aW9ucyIsImV4dGVuZCIsImNyZWF0ZVRhZyIsInRlcm0iLCJsZW5ndGgiLCJ0ZXh0IiwiaWQiLCJhamF4IiwidXJsIiwidHJhbnNwb3J0IiwicGFyYW1zIiwic3VjY2VzcyIsImZhaWx1cmUiLCJwYWdlIiwicSIsImNhY2hlVGltZW91dCIsInRpbWUiLCJmYWlsIiwiZG9uZSIsImFib3J0IiwiYWx3YXlzIiwidW5kZWZpbmVkIiwicmV0IiwiQXJyYXkiLCJpc0FycmF5IiwicHJvY2Vzc1Jlc3VsdHMiLCJyZXN1bHRzIiwibW9yZSIsInJlc3BvbnNlIiwicGFnaW5hdGlvbiIsImVzY2FwZU1hcmt1cCIsInRlbXBsYXRlUmVzdWx0Iiwib3B0aW9uIiwiaHRtbCIsInRlbXBsYXRlU2VsZWN0aW9uIiwic2VsZWN0MiIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJmYWN0b3J5IiwiZGVmaW5lIiwiUzIiLCJhbWQiLCJyZXF1aXJlanMiLCJ1bmRlZiIsIm1haW4iLCJyZXEiLCJtYWtlTWFwIiwiaGFuZGxlcnMiLCJkZWZpbmVkIiwid2FpdGluZyIsImNvbmZpZyIsImRlZmluaW5nIiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJhcHMiLCJzbGljZSIsImpzU3VmZml4UmVnRXhwIiwiaGFzUHJvcCIsIm9iaiIsInByb3AiLCJjYWxsIiwibm9ybWFsaXplIiwibmFtZSIsImJhc2VOYW1lIiwibmFtZVBhcnRzIiwibmFtZVNlZ21lbnQiLCJtYXBWYWx1ZSIsImZvdW5kTWFwIiwibGFzdEluZGV4IiwiZm91bmRJIiwiZm91bmRTdGFyTWFwIiwic3RhckkiLCJpIiwiaiIsInBhcnQiLCJiYXNlUGFydHMiLCJzcGxpdCIsIm1hcCIsInN0YXJNYXAiLCJjaGFyQXQiLCJub2RlSWRDb21wYXQiLCJ0ZXN0IiwicmVwbGFjZSIsImNvbmNhdCIsInNwbGljZSIsImpvaW4iLCJpbmRleE9mIiwic3Vic3RyaW5nIiwibWFrZVJlcXVpcmUiLCJyZWxOYW1lIiwiZm9yY2VTeW5jIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJtYWtlTm9ybWFsaXplIiwibWFrZUxvYWQiLCJkZXBOYW1lIiwiY2FsbERlcCIsImFyZ3MiLCJFcnJvciIsInNwbGl0UHJlZml4IiwiaW5kZXgiLCJwbHVnaW4iLCJwYXJ0cyIsImYiLCJuIiwicHIiLCJwIiwibWFrZUNvbmZpZyIsImV4cG9ydHMiLCJlIiwibW9kdWxlIiwidXJpIiwiZGVwcyIsImNhbGxiYWNrIiwiY2pzTW9kdWxlIiwiY2FsbGJhY2tUeXBlIiwidXNpbmdFeHBvcnRzIiwibG9hZCIsImFsdCIsInNldFRpbWVvdXQiLCJjZmciLCJfZGVmaW5lZCIsIl8kIiwiY29uc29sZSIsImVycm9yIiwiVXRpbHMiLCJFeHRlbmQiLCJDaGlsZENsYXNzIiwiU3VwZXJDbGFzcyIsIl9faGFzUHJvcCIsIkJhc2VDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiX19zdXBlcl9fIiwiZ2V0TWV0aG9kcyIsInRoZUNsYXNzIiwicHJvdG8iLCJtZXRob2RzIiwibWV0aG9kTmFtZSIsIm0iLCJwdXNoIiwiRGVjb3JhdGUiLCJEZWNvcmF0b3JDbGFzcyIsImRlY29yYXRlZE1ldGhvZHMiLCJzdXBlck1ldGhvZHMiLCJEZWNvcmF0ZWRDbGFzcyIsInVuc2hpZnQiLCJhcmdDb3VudCIsImNhbGxlZENvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJjdHIiLCJzdXBlck1ldGhvZCIsImNhbGxlZE1ldGhvZCIsIm9yaWdpbmFsTWV0aG9kIiwiZGVjb3JhdGVkTWV0aG9kIiwiZCIsIk9ic2VydmFibGUiLCJsaXN0ZW5lcnMiLCJldmVudCIsImludm9rZSIsImxlbiIsImdlbmVyYXRlQ2hhcnMiLCJjaGFycyIsInJhbmRvbUNoYXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImJpbmQiLCJmdW5jIiwiY29udGV4dCIsIl9jb252ZXJ0RGF0YSIsIm9yaWdpbmFsS2V5Iiwia2V5cyIsImRhdGFMZXZlbCIsImsiLCJ0b0xvd2VyQ2FzZSIsImhhc1Njcm9sbCIsImVsIiwiJGVsIiwib3ZlcmZsb3dYIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzY3JvbGxXaWR0aCIsIm1hcmt1cCIsInJlcGxhY2VNYXAiLCJTdHJpbmciLCJtYXRjaCIsIlJlc3VsdHMiLCIkZWxlbWVudCIsImRhdGFBZGFwdGVyIiwicmVuZGVyIiwiJHJlc3VsdHMiLCJnZXQiLCJhdHRyIiwiY2xlYXIiLCJlbXB0eSIsImRpc3BsYXlNZXNzYWdlIiwiaGlkZUxvYWRpbmciLCIkbWVzc2FnZSIsIm1lc3NhZ2UiLCJhcHBlbmQiLCIkb3B0aW9ucyIsImNoaWxkcmVuIiwic29ydCIsIml0ZW0iLCIkb3B0aW9uIiwicG9zaXRpb24iLCIkZHJvcGRvd24iLCIkcmVzdWx0c0NvbnRhaW5lciIsImZpbmQiLCJzb3J0ZXIiLCJzZXRDbGFzc2VzIiwic2VsZiIsImN1cnJlbnQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSWRzIiwicyIsImluQXJyYXkiLCIkc2VsZWN0ZWQiLCJmaWx0ZXIiLCJmaXJzdCIsInNob3dMb2FkaW5nIiwibG9hZGluZ01vcmUiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCIkbG9hZGluZyIsImNsYXNzTmFtZSIsInByZXBlbmQiLCJyZW1vdmUiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJfcmVzdWx0SWQiLCJ0aXRsZSIsInJvbGUiLCJzZXRBdHRyaWJ1dGUiLCJsYWJlbCIsIiRsYWJlbCIsInRlbXBsYXRlIiwiJGNoaWxkcmVuIiwiYyIsImNoaWxkIiwiJGNoaWxkIiwiJGNoaWxkcmVuQ29udGFpbmVyIiwiY29udGFpbmVyIiwiJGNvbnRhaW5lciIsImlzT3BlbiIsImVuc3VyZUhpZ2hsaWdodFZpc2libGUiLCJyZW1vdmVBdHRyIiwiJGhpZ2hsaWdodGVkIiwiZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzIiwiY3VycmVudEluZGV4IiwibmV4dEluZGV4IiwiJG5leHQiLCJlcSIsImN1cnJlbnRPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJuZXh0VG9wIiwibmV4dE9mZnNldCIsInNjcm9sbFRvcCIsIm91dGVySGVpZ2h0IiwibmV4dEJvdHRvbSIsImVsZW1lbnQiLCJhZGRDbGFzcyIsIm1vdXNld2hlZWwiLCJib3R0b20iLCJkZWx0YVkiLCJpc0F0VG9wIiwiaXNBdEJvdHRvbSIsImhlaWdodCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXZ0IiwiJHRoaXMiLCJvcmlnaW5hbEV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJkZXN0cm95Iiwib2Zmc2V0RGVsdGEiLCJyZXN1bHQiLCJjb250ZW50IiwiZGlzcGxheSIsImlubmVySFRNTCIsIktFWVMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQyIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJERUxFVEUiLCJCYXNlU2VsZWN0aW9uIiwiJHNlbGVjdGlvbiIsIl90YWJpbmRleCIsInJlc3VsdHNJZCIsIndoaWNoIiwidXBkYXRlIiwiX2F0dGFjaENsb3NlSGFuZGxlciIsImZvY3VzIiwiX2RldGFjaENsb3NlSGFuZGxlciIsImJvZHkiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiJHNlbGVjdCIsImNsb3Nlc3QiLCIkYWxsIiwib2ZmIiwiJHNlbGVjdGlvbkNvbnRhaW5lciIsIlNpbmdsZVNlbGVjdGlvbiIsInNlbGVjdGlvbkNvbnRhaW5lciIsInNlbGVjdGlvbiIsImZvcm1hdHRlZCIsIiRyZW5kZXJlZCIsIk11bHRpcGxlU2VsZWN0aW9uIiwiJHJlbW92ZSIsInBhcmVudCIsIiRzZWxlY3Rpb25zIiwiYWRkIiwiUGxhY2Vob2xkZXIiLCJkZWNvcmF0ZWQiLCJwbGFjZWhvbGRlciIsIm5vcm1hbGl6ZVBsYWNlaG9sZGVyIiwiXyIsImNyZWF0ZVBsYWNlaG9sZGVyIiwiJHBsYWNlaG9sZGVyIiwic2luZ2xlUGxhY2Vob2xkZXIiLCJtdWx0aXBsZVNlbGVjdGlvbnMiLCJBbGxvd0NsZWFyIiwid2luZG93IiwidW5zZWxlY3REYXRhIiwicHJldmVudGVkIiwiU2VhcmNoIiwiJHNlYXJjaCIsIiRzZWFyY2hDb250YWluZXIiLCJfa2V5VXBQcmV2ZW50ZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCIkcHJldmlvdXNDaG9pY2UiLCJwcmV2Iiwic2VhcmNoUmVtb3ZlQ2hvaWNlIiwiaGFuZGxlU2VhcmNoIiwicmVzaXplU2VhcmNoIiwiaW5wdXQiLCJjc3MiLCJ3aWR0aCIsIm1pbmltdW1XaWR0aCIsIkV2ZW50UmVsYXkiLCJyZWxheUV2ZW50cyIsInByZXZlbnRhYmxlRXZlbnRzIiwiRXZlbnQiLCJUcmFuc2xhdGlvbiIsImRpY3QiLCJhbGwiLCJ0cmFuc2xhdGlvbiIsIl9jYWNoZSIsImxvYWRQYXRoIiwicGF0aCIsInRyYW5zbGF0aW9ucyIsImRpYWNyaXRpY3MiLCJCYXNlQWRhcHRlciIsInF1ZXJ5IiwiZ2VuZXJhdGVSZXN1bHRJZCIsIlNlbGVjdEFkYXB0ZXIiLCJzZWxlY3QiLCJpcyIsImN1cnJlbnREYXRhIiwidW5zZWxlY3QiLCJyZW1vdmVEYXRhIiwibWF0Y2hlcyIsImFkZE9wdGlvbnMiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIm5vcm1hbGl6ZWREYXRhIiwiX25vcm1hbGl6ZUl0ZW0iLCJpc1BsYWluT2JqZWN0IiwiZGVmYXVsdHMiLCJtYXRjaGVyIiwiQXJyYXlBZGFwdGVyIiwiY29udmVydFRvT3B0aW9ucyIsIiRleGlzdGluZyIsImV4aXN0aW5nSWRzIiwib25seUl0ZW0iLCIkZXhpc3RpbmdPcHRpb24iLCJleGlzdGluZ0RhdGEiLCJuZXdEYXRhIiwiJG5ld09wdGlvbiIsInJlcGxhY2VXaXRoIiwiQWpheEFkYXB0ZXIiLCJhamF4T3B0aW9ucyIsIl9hcHBseURlZmF1bHRzIiwiJHJlcXVlc3QiLCJ0aGVuIiwiX3JlcXVlc3QiLCJ0eXBlIiwiZGVsYXkiLCJfcXVlcnlUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVGFncyIsInRhZ3MiLCJ0IiwidGFnIiwiX3JlbW92ZU9sZFRhZ3MiLCJ3cmFwcGVyIiwiY2hlY2tDaGlsZHJlbiIsImNoZWNrVGV4dCIsImluc2VydFRhZyIsInRyaW0iLCJfbGFzdFRhZyIsIlRva2VuaXplciIsInRva2VuaXplciIsImRyb3Bkb3duIiwidG9rZW5EYXRhIiwic2VwYXJhdG9ycyIsInRlcm1DaGFyIiwic3Vic3RyIiwicGFydFBhcmFtcyIsIk1pbmltdW1JbnB1dExlbmd0aCIsIiRlIiwibWluaW11bUlucHV0TGVuZ3RoIiwibWluaW11bSIsIk1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW0iLCJNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwibWF4aW11bVNlbGVjdGlvbkxlbmd0aCIsImNvdW50IiwiRHJvcGRvd24iLCJzaG93U2VhcmNoIiwiSGlkZVBsYWNlaG9sZGVyIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJtb2RpZmllZERhdGEiLCJJbmZpbml0ZVNjcm9sbCIsImxhc3RQYXJhbXMiLCIkbG9hZGluZ01vcmUiLCJjcmVhdGVMb2FkaW5nTW9yZSIsInNob3dMb2FkaW5nTW9yZSIsImlzTG9hZE1vcmVWaXNpYmxlIiwiY29udGFpbnMiLCJkb2N1bWVudEVsZW1lbnQiLCJsb2FkaW5nTW9yZU9mZnNldCIsImxvYWRNb3JlIiwiQXR0YWNoQm9keSIsIiRkcm9wZG93blBhcmVudCIsInNldHVwUmVzdWx0c0V2ZW50cyIsIl9zaG93RHJvcGRvd24iLCJfYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiX3Bvc2l0aW9uRHJvcGRvd24iLCJfcmVzaXplRHJvcGRvd24iLCJfaGlkZURyb3Bkb3duIiwiX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlciIsIiRkcm9wZG93bkNvbnRhaW5lciIsImRldGFjaCIsInNjcm9sbEV2ZW50IiwicmVzaXplRXZlbnQiLCJvcmllbnRhdGlvbkV2ZW50IiwiJHdhdGNoZXJzIiwicGFyZW50cyIsIngiLCJzY3JvbGxMZWZ0IiwieSIsImV2IiwiJHdpbmRvdyIsImlzQ3VycmVudGx5QWJvdmUiLCJoYXNDbGFzcyIsImlzQ3VycmVudGx5QmVsb3ciLCJuZXdEaXJlY3Rpb24iLCJ2aWV3cG9ydCIsImVub3VnaFJvb21BYm92ZSIsImVub3VnaFJvb21CZWxvdyIsImxlZnQiLCJvdXRlcldpZHRoIiwiYXBwZW5kVG8iLCJjb3VudFJlc3VsdHMiLCJNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCJTZWxlY3RPbkNsb3NlIiwiX2hhbmRsZVNlbGVjdE9uQ2xvc2UiLCIkaGlnaGxpZ2h0ZWRSZXN1bHRzIiwiQ2xvc2VPblNlbGVjdCIsIl9zZWxlY3RUcmlnZ2VyZWQiLCJjdHJsS2V5IiwiZXJyb3JMb2FkaW5nIiwiaW5wdXRUb29Mb25nIiwib3ZlckNoYXJzIiwiaW5wdXRUb29TaG9ydCIsInJlbWFpbmluZ0NoYXJzIiwibWF4aW11bVNlbGVjdGVkIiwibm9SZXN1bHRzIiwic2VhcmNoaW5nIiwiUmVzdWx0c0xpc3QiLCJTZWxlY3Rpb25TZWFyY2giLCJESUFDUklUSUNTIiwiU2VsZWN0RGF0YSIsIkFycmF5RGF0YSIsIkFqYXhEYXRhIiwiRHJvcGRvd25TZWFyY2giLCJFbmdsaXNoVHJhbnNsYXRpb24iLCJEZWZhdWx0cyIsInJlc2V0IiwidG9rZW5TZXBhcmF0b3JzIiwiUXVlcnkiLCJhbWRCYXNlIiwiaW5pdFNlbGVjdGlvbiIsIkluaXRTZWxlY3Rpb24iLCJyZXN1bHRzQWRhcHRlciIsInNlbGVjdE9uQ2xvc2UiLCJkcm9wZG93bkFkYXB0ZXIiLCJtdWx0aXBsZSIsIlNlYXJjaGFibGVEcm9wZG93biIsImNsb3NlT25TZWxlY3QiLCJzZWxlY3Rpb25BZGFwdGVyIiwiYWxsb3dDbGVhciIsImxhbmd1YWdlIiwibGFuZ3VhZ2VQYXJ0cyIsImJhc2VMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlTmFtZXMiLCJsIiwiYW1kTGFuZ3VhZ2VCYXNlIiwiZXgiLCJkZWJ1ZyIsIndhcm4iLCJzdHJpcERpYWNyaXRpY3MiLCJhIiwib3JpZ2luYWwiLCJ0b1VwcGVyQ2FzZSIsInRoZW1lIiwic2V0IiwiY2FtZWxLZXkiLCJjYW1lbENhc2UiLCJjb252ZXJ0ZWREYXRhIiwiT3B0aW9ucyIsImZyb21FbGVtZW50IiwiSW5wdXRDb21wYXQiLCJleGNsdWRlZERhdGEiLCJkaXIiLCJkYXRhc2V0IiwianF1ZXJ5IiwiU2VsZWN0MiIsIl9nZW5lcmF0ZUlkIiwidGFiaW5kZXgiLCJEYXRhQWRhcHRlciIsIl9wbGFjZUNvbnRhaW5lciIsIlNlbGVjdGlvbkFkYXB0ZXIiLCJEcm9wZG93bkFkYXB0ZXIiLCJSZXN1bHRzQWRhcHRlciIsIl9iaW5kQWRhcHRlcnMiLCJfcmVnaXN0ZXJEb21FdmVudHMiLCJfcmVnaXN0ZXJEYXRhRXZlbnRzIiwiX3JlZ2lzdGVyU2VsZWN0aW9uRXZlbnRzIiwiX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMiLCJfcmVnaXN0ZXJSZXN1bHRzRXZlbnRzIiwiX3JlZ2lzdGVyRXZlbnRzIiwiaW5pdGlhbERhdGEiLCJoaWRlIiwiX3N5bmNBdHRyaWJ1dGVzIiwiaW5zZXJ0QWZ0ZXIiLCJfcmVzb2x2ZVdpZHRoIiwibWV0aG9kIiwiV0lEVEgiLCJzdHlsZVdpZHRoIiwiZWxlbWVudFdpZHRoIiwiX3N5bmMiLCJhdHRhY2hFdmVudCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwiX29ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJzdWJ0cmVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vblJlbGF5RXZlbnRzIiwidG9nZ2xlRHJvcGRvd24iLCJjbG9zZSIsImFsdEtleSIsIm9wZW4iLCJhY3R1YWxUcmlnZ2VyIiwicHJlVHJpZ2dlck1hcCIsInByZVRyaWdnZXJOYW1lIiwicHJlVHJpZ2dlckFyZ3MiLCJlbmFibGUiLCJuZXdWYWwiLCJkZXRhY2hFdmVudCIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdyIsImluc3RhbmNlT3B0aW9ucyIsImluc3RhbmNlIiwiaGFuZGxlU2xpbVNjcm9sbCIsImdlbmVyYXRlU2xpbVNjcm9sbCIsIm1vdXNlb3ZlciIsImRhdGFIZWlnaHQiLCJzY3JvbGxCYXJPcHRpb24iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzbGltU2Nyb2xsIiwiaGFuZGxlU2lkZWJhck1lbnUiLCJleHBhbmRUaW1lIiwibmV4dCIsIm90aGVyTWVudSIsIm5vdCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsInRhcmdldExpIiwiaGFuZGxlTW9iaWxlU2lkZWJhclRvZ2dsZSIsInNpZGViYXJQcm9ncmVzcyIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwidGFyZ2V0Q29udGFpbmVyIiwidGFyZ2V0Q2xhc3MiLCJzaWRlYmFyQ2xhc3MiLCJoYW5kbGVTaWRlYmFyTWluaWZ5Iiwic2lkZWJhck1pbmlmaWVkIiwiQ29va2llcyIsImhhbmRsZVBhZ2VDb250ZW50VmlldyIsImhpZGVDbGFzcyIsInNob3dDbGFzcyIsImJvb3RzdHJhcFZlcnNpb24iLCJoYW5kbGVDaGVja0Jvb3RzdHJhcFZlcnNpb24iLCJwYW5lbEFjdGlvblJ1bm5pbmciLCJoYW5kbGVQYW5lbEFjdGlvbiIsInRvb2x0aXAiLCJwbGFjZW1lbnQiLCJ0YXJnZXRCb2R5Iiwic3Bpbm5lckh0bWwiLCJ0YXJnZXRUb3AiLCJ0YXJnZXRPZmZzZXRUb3AiLCJ0YXJnZXRCb2R5T2Zmc2V0VG9wIiwiZmluYWxIZWlnaHQiLCJoYW5kbGVEcmFnZ2FibGVQYW5lbCIsInRhcmdldEhhbmRsZSIsImNvbm5lY3RlZFRhcmdldCIsInNvcnRhYmxlIiwiaGFuZGxlIiwiY29ubmVjdFdpdGgiLCJzdG9wIiwidWkiLCJoYW5kbGVTYXZlUGFuZWxQb3NpdGlvbiIsImhhbmRlbFRvb2x0aXBQb3BvdmVyQWN0aXZhdGlvbiIsInBvcG92ZXIiLCJoYW5kbGVTY3JvbGxUb1RvcEJ1dHRvbiIsInRvdGFsU2Nyb2xsIiwiY2xpY2siLCJhbmltYXRlIiwiaGFuZGxlVGhlbWVQYWdlU3RydWN0dXJlQ29udHJvbCIsInRhcmdldEZpbGUiLCJ0YXJnZXRUaGVtZSIsInRhcmdldFZhbHVlIiwidGFyZ2V0Q2xhc3NBZGQiLCJ0YXJnZXRDbGFzc1JlbW92ZSIsInNpZGViYXJHcmlkIiwic2lkZWJhckdyYWRpZW50Iiwic2lkZWJhckZpeGVkIiwiYWxlcnQiLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0SHRtbCIsImhlYWRlckZpeGVkIiwicGFnZVRoZW1lIiwiaGVhZGVyVGhlbWUiLCJoYW5kbGVUaGVtZVBhbmVsRXhwYW5kIiwidGFyZ2V0RXhwYW5kIiwidGhlbWVQYW5lbEV4cGFuZCIsImhhbmRsZUFmdGVyUGFnZUxvYWRBZGRDbGFzcyIsIm5ld1ZhbHVlIiwicGFuZWxTb3J0YWJsZUVsZW1lbnQiLCJjb2x1bW5WYWx1ZSIsInRhcmdldFNvcnRJZCIsInRhcmdldFBhZ2UiLCJsb2NhdGlvbiIsImhyZWYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhZGVPdXQiLCJoYW5kbGVMb2NhbFN0b3JhZ2UiLCJTdG9yYWdlIiwicGFuZWxQb3NpdGlvbkRhdGEiLCJnZXRJdGVtIiwicGFyc2UiLCJzdG9yYWdlRGF0YSIsInRhcmdldENvbHVtbiIsInRhcmdldElkIiwiY2xvbmUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJsb2ciLCJoYW5kbGVSZXNldExvY2FsU3RvcmFnZSIsInRhcmdldE1vZGFsSHRtbCIsIm1vZGFsIiwibG9jYWxTdG9yYWdlTmFtZSIsInJlbW92ZUl0ZW0iLCJyZWxvYWQiLCJoYW5kbGVJRUZ1bGxIZWlnaHRDb250ZW50IiwibXNpZSIsInRhcmdldFJvdyIsInRhcmdldEhlaWdodCIsImhhbmRsZVVubGltaXRlZFRhYnNSZW5kZXIiLCJoYW5kbGVUYWJPdmVyZmxvd1Njcm9sbFdpZHRoIiwiYW5pbWF0aW9uU3BlZWQiLCJ0YXJnZXRFbG0iLCJ0YXJnZXRDc3MiLCJtYXJnaW5MZWZ0IiwicGFyc2VJbnQiLCJ2aWV3V2lkdGgiLCJwcmV2V2lkdGgiLCJzcGVlZCIsImZ1bGxXaWR0aCIsInByZXZBbGwiLCJmaW5hbFNjcm9sbFdpZHRoIiwibWFyZ2luUmlnaHQiLCJoYW5kbGVUYWJCdXR0b25BY3Rpb24iLCJkaXJlY3Rpb24iLCJjb250YWluZXJXaWR0aCIsInRvdGFsV2lkdGgiLCJ3aWR0aExlZnQiLCJoYW5kbGVQYWdlTG9hZFRhYkZvY3VzIiwicmVzaXplIiwiaGFuZGxlVW5saW1pdGVkVG9wTWVudVJlbmRlciIsImhhbmRsZU1lbnVCdXR0b25BY3Rpb24iLCJoYW5kbGVQYWdlTG9hZE1lbnVGb2N1cyIsInRhcmdldE1lbnUiLCJ0YXJnZXRMaXN0IiwidGFyZ2V0QWN0aXZlTGlzdCIsImhhbmRsZVRvcE1lbnVTdWJNZW51IiwiaGFuZGxlTW9iaWxlVG9wTWVudVN1Yk1lbnUiLCJoYW5kbGVUb3BNZW51TW9iaWxlVG9nZ2xlIiwiaGFuZGxlQ2xlYXJTaWRlYmFyU2VsZWN0aW9uIiwiaGFuZGxlQ2xlYXJTaWRlYmFyTW9iaWxlU2VsZWN0aW9uIiwiaGFuZGxlQ2hlY2tTY3JvbGxDbGFzcyIsImhhbmRsZVBhZ2VTY3JvbGxDbGFzcyIsImhhbmRsZVRvZ2dsZU5hdlByb2ZpbGUiLCJ0YXJnZXRQcm9maWxlIiwidGFyZ2V0RXhwYW5kaW5nQ2xhc3MiLCJ0YXJnZXRFeHBhbmRDbGFzcyIsInRhcmdldENsb3NpbmdDbGFzcyIsInRhcmdldENsb3NlZENsYXNzIiwiaGFuZGxlU2lkZWJhclNjcm9sbE1lbW9yeSIsInBvcyIsImRlZmF1bHRTY3JvbGwiLCJzY3JvbGxUbyIsImZsb2F0U3ViTWVudVRpbWVvdXQiLCJ0YXJnZXRGbG9hdE1lbnUiLCJoYW5kbGVNb3VzZW92ZXJGbG9hdFN1Yk1lbnUiLCJlbG0iLCJoYW5kbGVNb3VzZW91dEZsb2F0U3ViTWVudSIsImhhbmRsZVNpZGViYXJNaW5pZnlGbG9hdE1lbnUiLCJleHBhbmQiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwidGFyZ2V0T2Zmc2V0IiwidGFyZ2V0T3JpVG9wIiwidGFyZ2V0TWVudVRvcCIsIndpbmRvd0hlaWdodCIsImFycm93Qm90dG9tIiwiY29tcGxldGUiLCJtb3VzZWVudGVyIiwidGFyZ2V0TWVudUh0bWwiLCJzaWRlYmFyT2Zmc2V0Iiwic2lkZWJhcldpZHRoIiwic2lkZWJhclgiLCJ0YXJnZXRMZWZ0IiwidGFyZ2V0UmlnaHQiLCJtb3VzZWxlYXZlIiwiQ0xFQVJfT1BUSU9OIiwiaGFuZGxlQWpheE1vZGUiLCJzZXR0aW5nIiwiZW1wdHlIdG1sIiwiZGVmYXVsdFVybCIsImFqYXhEZWZhdWx0VXJsIiwiaGFzaCIsInJlbmRlckFqYXgiLCJjbGVhckVsZW1lbnQiLCJEYXRhVGFibGUiLCJjaGVja1NpZGViYXJBY3RpdmUiLCJjaGVja1B1c2hTdGF0ZSIsInRhcmdldFVybCIsInRhcmdldFVzZXJBZ2VudCIsImlzSUUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY2hlY2tDbGVhck9wdGlvbiIsIkFwcCIsImNsZWFyUGFnZU9wdGlvbiIsImNoZWNrTG9hZGluZyIsImRpc2FibGVQdXNoU3RhdGUiLCJQYWNlIiwicmVzdGFydCIsInRhcmdldFR5cGUiLCJhamF4VHlwZSIsInRhcmdldERhdGFUeXBlIiwiYWpheERhdGFUeXBlIiwidGFyZ2V0RGF0YURhdGFUeXBlIiwiZGF0YVR5cGUiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImluaXRDb21wb25lbnQiLCJoYW5kbGVTZXRQYWdlT3B0aW9uIiwicGFnZUNvbnRlbnRGdWxsSGVpZ2h0IiwicGFnZVNpZGViYXJMaWdodCIsInBhZ2VTaWRlYmFyUmlnaHQiLCJwYWdlU2lkZWJhcldpZGUiLCJwYWdlU2lkZWJhck1pbmlmaWVkIiwicGFnZVNpZGViYXJUcmFuc3BhcmVudCIsInBhZ2VDb250ZW50RnVsbFdpZHRoIiwicGFnZUNvbnRlbnRJbnZlcnNlTW9kZSIsInBhZ2VCb3hlZExheW91dCIsImNsZWFyT3B0aW9uT25MZWF2ZSIsImhhbmRsZUNsZWFyUGFnZU9wdGlvbiIsImhhbmRsZVRvZ2dsZU5hdmJhclNlYXJjaCIsImNvbnZlcnROdW1iZXJXaXRoQ29tbWFzIiwiY2hlY2tJc0Zsb2F0IiwiTnVtYmVyIiwiY2hlY2tJc0ludCIsImNvdW50RGVjaW1hbHMiLCJoYW5kbGVBbmltYXRpb24iLCJ0YXJnZXRBbmltYXRlIiwiZGVjaW1hbCIsImRpdmlkZSIsImFuaW1hdGVOdW1iZXIiLCJlYXNpbmciLCJzdGVwIiwibnVtYmVyIiwiY2VpbCIsInRvRml4ZWQiLCJoYW5kbGVTaWRlYmFyU2VhcmNoIiwidGFyZ2V0VGV4dCIsInNlYXJjaCIsImluaXQiLCJpbml0TG9jYWxTdG9yYWdlIiwiaW5pdFNpZGViYXIiLCJpbml0VG9wTWVudSIsImluaXRQYWdlTG9hZCIsImFqYXhNb2RlIiwiaW5pdEFqYXgiLCJzZXR0aW5ncyIsImRpc2FibGVTaWRlYmFyU2Nyb2xsTWVtb3J5IiwiaW5pdFNpZGViYXJTZWxlY3Rpb24iLCJpbml0U2lkZWJhck1vYmlsZVNlbGVjdGlvbiIsImRpc2FibGVMb2NhbFN0b3JhZ2UiLCJpbml0VGhlbWVQYW5lbCIsInNldFBhZ2VUaXRsZSIsInBhZ2VUaXRsZSIsInNldFBhZ2VPcHRpb24iLCJyZXN0YXJ0R2xvYmFsRnVuY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUFBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLG9EQUFELENBQVAsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsQ0FBQyxVQUFVQyxDQUFWLEVBQWE7QUFDVkEsR0FBQyxDQUFDQyxFQUFGLENBQUtDLGFBQUwsR0FBcUIsVUFBVUMsT0FBVixFQUFtQjtBQUNwQyxTQUFLQyxJQUFMLENBQVUsWUFBWTtBQUNsQixVQUFJQyxPQUFKLENBRGtCLENBR2xCO0FBQ0E7O0FBQ0EsVUFBSUMsR0FBRyxHQUFHTixDQUFDLENBQUMsSUFBRCxDQUFYO0FBQUEsVUFDSU8sS0FBSyxHQUFHRCxHQUFHLENBQUNFLElBQUosQ0FBUyxZQUFULEtBQTBCLENBRHRDO0FBQUEsVUFFSUMsTUFBTSxHQUFHSCxHQUFHLENBQUNFLElBQUosQ0FBUyxR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QUEwQmYsa0JBQVUsR0ExQks7QUEyQmYsa0JBQVUsR0EzQks7QUE0QmYsa0JBQVUsR0E1Qks7QUE2QmYsa0JBQVUsR0E3Qks7QUE4QmYsa0JBQVUsR0E5Qks7QUErQmYsa0JBQVUsR0EvQks7QUFnQ2Ysa0JBQVUsR0FoQ0s7QUFpQ2Ysa0JBQVUsR0FqQ0s7QUFrQ2Ysa0JBQVUsSUFsQ0s7QUFtQ2YsZ0JBQVUsSUFuQ0s7QUFvQ2Ysa0JBQVUsSUFwQ0s7QUFxQ2Ysa0JBQVUsSUFyQ0s7QUFzQ2Ysa0JBQVUsSUF0Q0s7QUF1Q2Ysa0JBQVUsSUF2Q0s7QUF3Q2Ysa0JBQVUsSUF4Q0s7QUF5Q2Ysa0JBQVUsSUF6Q0s7QUEwQ2Ysa0JBQVUsSUExQ0s7QUEyQ2Ysa0JBQVUsR0EzQ0s7QUE0Q2Ysa0JBQVUsR0E1Q0s7QUE2Q2Ysa0JBQVUsR0E3Q0s7QUE4Q2Ysa0JBQVUsR0E5Q0s7QUErQ2Ysa0JBQVUsR0EvQ0s7QUFnRGYsa0JBQVUsR0FoREs7QUFpRGYsa0JBQVUsR0FqREs7QUFrRGYsa0JBQVUsR0FsREs7QUFtRGYsa0JBQVUsR0FuREs7QUFvRGYsa0JBQVUsR0FwREs7QUFxRGYsa0JBQVUsR0FyREs7QUFzRGYsa0JBQVUsR0F0REs7QUF1RGYsa0JBQVUsR0F2REs7QUF3RGYsa0JBQVUsR0F4REs7QUF5RGYsZ0JBQVUsR0F6REs7QUEwRGYsa0JBQVUsR0ExREs7QUEyRGYsa0JBQVUsR0EzREs7QUE0RGYsa0JBQVUsR0E1REs7QUE2RGYsa0JBQVUsR0E3REs7QUE4RGYsa0JBQVUsR0E5REs7QUErRGYsa0JBQVUsR0EvREs7QUFnRWYsa0JBQVUsR0FoRUs7QUFpRWYsa0JBQVUsR0FqRUs7QUFrRWYsa0JBQVUsR0FsRUs7QUFtRWYsa0JBQVUsR0FuRUs7QUFvRWYsa0JBQVUsR0FwRUs7QUFxRWYsa0JBQVUsR0FyRUs7QUFzRWYsa0JBQVUsR0F0RUs7QUF1RWYsa0JBQVUsR0F2RUs7QUF3RWYsa0JBQVUsR0F4RUs7QUF5RWYsa0JBQVUsR0F6RUs7QUEwRWYsa0JBQVUsR0ExRUs7QUEyRWYsa0JBQVUsSUEzRUs7QUE0RWYsa0JBQVUsSUE1RUs7QUE2RWYsa0JBQVUsSUE3RUs7QUE4RWYsa0JBQVUsSUE5RUs7QUErRWYsa0JBQVUsR0EvRUs7QUFnRmYsa0JBQVUsR0FoRks7QUFpRmYsZ0JBQVUsR0FqRks7QUFrRmYsZ0JBQVUsR0FsRks7QUFtRmYsZ0JBQVUsR0FuRks7QUFvRmYsa0JBQVUsR0FwRks7QUFxRmYsa0JBQVUsR0FyRks7QUFzRmYsa0JBQVUsR0F0Rks7QUF1RmYsa0JBQVUsR0F2Rks7QUF3RmYsa0JBQVUsR0F4Rks7QUF5RmYsa0JBQVUsR0F6Rks7QUEwRmYsa0JBQVUsR0ExRks7QUEyRmYsa0JBQVUsR0EzRks7QUE0RmYsa0JBQVUsR0E1Rks7QUE2RmYsa0JBQVUsR0E3Rks7QUE4RmYsZ0JBQVUsR0E5Rks7QUErRmYsa0JBQVUsR0EvRks7QUFnR2Ysa0JBQVUsR0FoR0s7QUFpR2Ysa0JBQVUsR0FqR0s7QUFrR2Ysa0JBQVUsR0FsR0s7QUFtR2Ysa0JBQVUsR0FuR0s7QUFvR2Ysa0JBQVUsR0FwR0s7QUFxR2Ysa0JBQVUsR0FyR0s7QUFzR2Ysa0JBQVUsR0F0R0s7QUF1R2Ysa0JBQVUsR0F2R0s7QUF3R2Ysa0JBQVUsR0F4R0s7QUF5R2Ysa0JBQVUsR0F6R0s7QUEwR2Ysa0JBQVUsR0ExR0s7QUEyR2Ysa0JBQVUsR0EzR0s7QUE0R2Ysa0JBQVUsR0E1R0s7QUE2R2Ysa0JBQVUsR0E3R0s7QUE4R2Ysa0JBQVUsR0E5R0s7QUErR2Ysa0JBQVUsR0EvR0s7QUFnSGYsa0JBQVUsR0FoSEs7QUFpSGYsa0JBQVUsR0FqSEs7QUFrSGYsa0JBQVUsR0FsSEs7QUFtSGYsa0JBQVUsR0FuSEs7QUFvSGYsa0JBQVUsR0FwSEs7QUFxSGYsa0JBQVUsR0FySEs7QUFzSGYsa0JBQVUsR0F0SEs7QUF1SGYsa0JBQVUsR0F2SEs7QUF3SGYsa0JBQVUsR0F4SEs7QUF5SGYsa0JBQVUsR0F6SEs7QUEwSGYsa0JBQVUsR0ExSEs7QUEySGYsa0JBQVUsR0EzSEs7QUE0SGYsa0JBQVUsR0E1SEs7QUE2SGYsa0JBQVUsR0E3SEs7QUE4SGYsa0JBQVUsR0E5SEs7QUErSGYsa0JBQVUsR0EvSEs7QUFnSWYsa0JBQVUsR0FoSUs7QUFpSWYsa0JBQVUsR0FqSUs7QUFrSWYsa0JBQVUsR0FsSUs7QUFtSWYsa0JBQVUsR0FuSUs7QUFvSWYsa0JBQVUsR0FwSUs7QUFxSWYsa0JBQVUsR0FySUs7QUFzSWYsa0JBQVUsR0F0SUs7QUF1SWYsa0JBQVUsR0F2SUs7QUF3SWYsa0JBQVUsR0F4SUs7QUF5SWYsa0JBQVUsR0F6SUs7QUEwSWYsa0JBQVUsR0ExSUs7QUEySWYsa0JBQVUsR0EzSUs7QUE0SWYsa0JBQVUsR0E1SUs7QUE2SWYsa0JBQVUsR0E3SUs7QUE4SWYsZ0JBQVUsR0E5SUs7QUErSWYsZ0JBQVUsR0EvSUs7QUFnSmYsZ0JBQVUsR0FoSks7QUFpSmYsa0JBQVUsR0FqSks7QUFrSmYsa0JBQVUsR0FsSks7QUFtSmYsa0JBQVUsR0FuSks7QUFvSmYsa0JBQVUsR0FwSks7QUFxSmYsZ0JBQVUsR0FySks7QUFzSmYsa0JBQVUsR0F0Sks7QUF1SmYsa0JBQVUsR0F2Sks7QUF3SmYsa0JBQVUsR0F4Sks7QUF5SmYsa0JBQVUsR0F6Sks7QUEwSmYsa0JBQVUsR0ExSks7QUEySmYsa0JBQVUsR0EzSks7QUE0SmYsa0JBQVUsR0E1Sks7QUE2SmYsa0JBQVUsR0E3Sks7QUE4SmYsa0JBQVUsR0E5Sks7QUErSmYsa0JBQVUsR0EvSks7QUFnS2Ysa0JBQVUsR0FoS0s7QUFpS2Ysa0JBQVUsR0FqS0s7QUFrS2Ysa0JBQVUsR0FsS0s7QUFtS2Ysa0JBQVUsR0FuS0s7QUFvS2Ysa0JBQVUsR0FwS0s7QUFxS2Ysa0JBQVUsR0FyS0s7QUFzS2Ysa0JBQVUsR0F0S0s7QUF1S2Ysa0JBQVUsR0F2S0s7QUF3S2Ysa0JBQVUsR0F4S0s7QUF5S2Ysa0JBQVUsR0F6S0s7QUEwS2Ysa0JBQVUsR0ExS0s7QUEyS2Ysa0JBQVUsR0EzS0s7QUE0S2Ysa0JBQVUsR0E1S0s7QUE2S2Ysa0JBQVUsR0E3S0s7QUE4S2Ysa0JBQVUsR0E5S0s7QUErS2Ysa0JBQVUsR0EvS0s7QUFnTGYsa0JBQVUsR0FoTEs7QUFpTGYsa0JBQVUsR0FqTEs7QUFrTGYsa0JBQVUsR0FsTEs7QUFtTGYsa0JBQVUsR0FuTEs7QUFvTGYsa0JBQVUsR0FwTEs7QUFxTGYsa0JBQVUsR0FyTEs7QUFzTGYsa0JBQVUsR0F0TEs7QUF1TGYsa0JBQVUsR0F2TEs7QUF3TGYsa0JBQVUsR0F4TEs7QUF5TGYsa0JBQVUsR0F6TEs7QUEwTGYsa0JBQVUsR0ExTEs7QUEyTGYsa0JBQVUsR0EzTEs7QUE0TGYsa0JBQVUsR0E1TEs7QUE2TGYsa0JBQVUsR0E3TEs7QUE4TGYsa0JBQVUsR0E5TEs7QUErTGYsa0JBQVUsR0EvTEs7QUFnTWYsa0JBQVUsR0FoTUs7QUFpTWYsa0JBQVUsSUFqTUs7QUFrTWYsa0JBQVUsSUFsTUs7QUFtTWYsa0JBQVUsR0FuTUs7QUFvTWYsa0JBQVUsR0FwTUs7QUFxTWYsa0JBQVUsR0FyTUs7QUFzTWYsa0JBQVUsR0F0TUs7QUF1TWYsa0JBQVUsR0F2TUs7QUF3TWYsa0JBQVUsR0F4TUs7QUF5TWYsa0JBQVUsR0F6TUs7QUEwTWYsa0JBQVUsR0ExTUs7QUEyTWYsa0JBQVUsR0EzTUs7QUE0TWYsa0JBQVUsR0E1TUs7QUE2TWYsa0JBQVUsR0E3TUs7QUE4TWYsZ0JBQVUsR0E5TUs7QUErTWYsa0JBQVUsR0EvTUs7QUFnTmYsa0JBQVUsR0FoTks7QUFpTmYsa0JBQVUsR0FqTks7QUFrTmYsa0JBQVUsR0FsTks7QUFtTmYsa0JBQVUsR0FuTks7QUFvTmYsa0JBQVUsR0FwTks7QUFxTmYsa0JBQVUsR0FyTks7QUFzTmYsa0JBQVUsR0F0Tks7QUF1TmYsa0JBQVUsR0F2Tks7QUF3TmYsa0JBQVUsR0F4Tks7QUF5TmYsa0JBQVUsSUF6Tks7QUEwTmYsa0JBQVUsSUExTks7QUEyTmYsa0JBQVUsR0EzTks7QUE0TmYsa0JBQVUsR0E1Tks7QUE2TmYsZ0JBQVUsR0E3Tks7QUE4TmYsZ0JBQVUsR0E5Tks7QUErTmYsZ0JBQVUsR0EvTks7QUFnT2Ysa0JBQVUsR0FoT0s7QUFpT2Ysa0JBQVUsR0FqT0s7QUFrT2Ysa0JBQVUsR0FsT0s7QUFtT2Ysa0JBQVUsR0FuT0s7QUFvT2YsZ0JBQVUsR0FwT0s7QUFxT2Ysa0JBQVUsR0FyT0s7QUFzT2Ysa0JBQVUsR0F0T0s7QUF1T2Ysa0JBQVUsR0F2T0s7QUF3T2Ysa0JBQVUsR0F4T0s7QUF5T2Ysa0JBQVUsR0F6T0s7QUEwT2Ysa0JBQVUsR0ExT0s7QUEyT2Ysa0JBQVUsR0EzT0s7QUE0T2Ysa0JBQVUsR0E1T0s7QUE2T2Ysa0JBQVUsR0E3T0s7QUE4T2YsZ0JBQVUsR0E5T0s7QUErT2Ysa0JBQVUsR0EvT0s7QUFnUGYsa0JBQVUsR0FoUEs7QUFpUGYsa0JBQVUsR0FqUEs7QUFrUGYsa0JBQVUsR0FsUEs7QUFtUGYsa0JBQVUsR0FuUEs7QUFvUGYsa0JBQVUsR0FwUEs7QUFxUGYsa0JBQVUsR0FyUEs7QUFzUGYsa0JBQVUsR0F0UEs7QUF1UGYsa0JBQVUsR0F2UEs7QUF3UGYsa0JBQVUsR0F4UEs7QUF5UGYsa0JBQVUsR0F6UEs7QUEwUGYsa0JBQVUsR0ExUEs7QUEyUGYsa0JBQVUsR0EzUEs7QUE0UGYsa0JBQVUsR0E1UEs7QUE2UGYsa0JBQVUsR0E3UEs7QUE4UGYsa0JBQVUsR0E5UEs7QUErUGYsZ0JBQVUsR0EvUEs7QUFnUWYsa0JBQVUsR0FoUUs7QUFpUWYsa0JBQVUsR0FqUUs7QUFrUWYsa0JBQVUsR0FsUUs7QUFtUWYsa0JBQVUsR0FuUUs7QUFvUWYsa0JBQVUsR0FwUUs7QUFxUWYsa0JBQVUsSUFyUUs7QUFzUWYsa0JBQVUsSUF0UUs7QUF1UWYsa0JBQVUsSUF2UUs7QUF3UWYsa0JBQVUsR0F4UUs7QUF5UWYsa0JBQVUsR0F6UUs7QUEwUWYsa0JBQVUsR0ExUUs7QUEyUWYsa0JBQVUsR0EzUUs7QUE0UWYsa0JBQVUsR0E1UUs7QUE2UWYsa0JBQVUsR0E3UUs7QUE4UWYsa0JBQVUsR0E5UUs7QUErUWYsa0JBQVUsR0EvUUs7QUFnUmYsa0JBQVUsR0FoUks7QUFpUmYsa0JBQVUsR0FqUks7QUFrUmYsa0JBQVUsR0FsUks7QUFtUmYsa0JBQVUsR0FuUks7QUFvUmYsa0JBQVUsR0FwUks7QUFxUmYsa0JBQVUsR0FyUks7QUFzUmYsa0JBQVUsR0F0Uks7QUF1UmYsa0JBQVUsR0F2Uks7QUF3UmYsa0JBQVUsR0F4Uks7QUF5UmYsa0JBQVUsR0F6Uks7QUEwUmYsa0JBQVUsR0ExUks7QUEyUmYsa0JBQVUsR0EzUks7QUE0UmYsa0JBQVUsR0E1Uks7QUE2UmYsa0JBQVUsR0E3Uks7QUE4UmYsa0JBQVUsR0E5Uks7QUErUmYsa0JBQVUsR0EvUks7QUFnU2Ysa0JBQVUsR0FoU0s7QUFpU2Ysa0JBQVUsR0FqU0s7QUFrU2Ysa0JBQVUsR0FsU0s7QUFtU2Ysa0JBQVUsR0FuU0s7QUFvU2Ysa0JBQVUsR0FwU0s7QUFxU2Ysa0JBQVUsR0FyU0s7QUFzU2Ysa0JBQVUsR0F0U0s7QUF1U2Ysa0JBQVUsR0F2U0s7QUF3U2Ysa0JBQVUsR0F4U0s7QUF5U2Ysa0JBQVUsR0F6U0s7QUEwU2Ysa0JBQVUsR0ExU0s7QUEyU2Ysa0JBQVUsR0EzU0s7QUE0U2Ysa0JBQVUsR0E1U0s7QUE2U2Ysa0JBQVUsR0E3U0s7QUE4U2Ysa0JBQVUsR0E5U0s7QUErU2Ysa0JBQVUsR0EvU0s7QUFnVGYsa0JBQVUsR0FoVEs7QUFpVGYsa0JBQVUsR0FqVEs7QUFrVGYsa0JBQVUsR0FsVEs7QUFtVGYsa0JBQVUsR0FuVEs7QUFvVGYsa0JBQVUsR0FwVEs7QUFxVGYsa0JBQVUsR0FyVEs7QUFzVGYsa0JBQVUsR0F0VEs7QUF1VGYsa0JBQVUsR0F2VEs7QUF3VGYsa0JBQVUsR0F4VEs7QUF5VGYsa0JBQVUsR0F6VEs7QUEwVGYsa0JBQVUsR0ExVEs7QUEyVGYsa0JBQVUsR0EzVEs7QUE0VGYsa0JBQVUsR0E1VEs7QUE2VGYsa0JBQVUsR0E3VEs7QUE4VGYsa0JBQVUsR0E5VEs7QUErVGYsa0JBQVUsR0EvVEs7QUFnVWYsa0JBQVUsR0FoVUs7QUFpVWYsa0JBQVUsR0FqVUs7QUFrVWYsa0JBQVUsR0FsVUs7QUFtVWYsa0JBQVUsR0FuVUs7QUFvVWYsa0JBQVUsSUFwVUs7QUFxVWYsa0JBQVUsR0FyVUs7QUFzVWYsa0JBQVUsR0F0VUs7QUF1VWYsZ0JBQVUsR0F2VUs7QUF3VWYsZ0JBQVUsR0F4VUs7QUF5VWYsZ0JBQVUsR0F6VUs7QUEwVWYsa0JBQVUsR0ExVUs7QUEyVWYsa0JBQVUsR0EzVUs7QUE0VWYsa0JBQVUsR0E1VUs7QUE2VWYsa0JBQVUsR0E3VUs7QUE4VWYsa0JBQVUsR0E5VUs7QUErVWYsZ0JBQVUsR0EvVUs7QUFnVmYsa0JBQVUsR0FoVks7QUFpVmYsa0JBQVUsR0FqVks7QUFrVmYsa0JBQVUsR0FsVks7QUFtVmYsa0JBQVUsR0FuVks7QUFvVmYsa0JBQVUsR0FwVks7QUFxVmYsa0JBQVUsR0FyVks7QUFzVmYsa0JBQVUsR0F0Vks7QUF1VmYsa0JBQVUsR0F2Vks7QUF3VmYsa0JBQVUsR0F4Vks7QUF5VmYsa0JBQVUsR0F6Vks7QUEwVmYsa0JBQVUsR0ExVks7QUEyVmYsa0JBQVUsR0EzVks7QUE0VmYsa0JBQVUsR0E1Vks7QUE2VmYsa0JBQVUsR0E3Vks7QUE4VmYsa0JBQVUsR0E5Vks7QUErVmYsa0JBQVUsR0EvVks7QUFnV2Ysa0JBQVUsR0FoV0s7QUFpV2Ysa0JBQVUsR0FqV0s7QUFrV2Ysa0JBQVUsR0FsV0s7QUFtV2Ysa0JBQVUsR0FuV0s7QUFvV2Ysa0JBQVUsR0FwV0s7QUFxV2Ysa0JBQVUsR0FyV0s7QUFzV2Ysa0JBQVUsR0F0V0s7QUF1V2Ysa0JBQVUsR0F2V0s7QUF3V2Ysa0JBQVUsR0F4V0s7QUF5V2Ysa0JBQVUsR0F6V0s7QUEwV2Ysa0JBQVUsR0ExV0s7QUEyV2Ysa0JBQVUsR0EzV0s7QUE0V2Ysa0JBQVUsR0E1V0s7QUE2V2Ysa0JBQVUsSUE3V0s7QUE4V2Ysa0JBQVUsR0E5V0s7QUErV2Ysa0JBQVUsR0EvV0s7QUFnWGYsa0JBQVUsR0FoWEs7QUFpWGYsa0JBQVUsR0FqWEs7QUFrWGYsa0JBQVUsR0FsWEs7QUFtWGYsa0JBQVUsR0FuWEs7QUFvWGYsa0JBQVUsR0FwWEs7QUFxWGYsa0JBQVUsR0FyWEs7QUFzWGYsa0JBQVUsR0F0WEs7QUF1WGYsa0JBQVUsR0F2WEs7QUF3WGYsa0JBQVUsR0F4WEs7QUF5WGYsa0JBQVUsR0F6WEs7QUEwWGYsa0JBQVUsR0ExWEs7QUEyWGYsa0JBQVUsR0EzWEs7QUE0WGYsa0JBQVUsR0E1WEs7QUE2WGYsa0JBQVUsR0E3WEs7QUE4WGYsZ0JBQVUsR0E5WEs7QUErWGYsa0JBQVUsR0EvWEs7QUFnWWYsa0JBQVUsR0FoWUs7QUFpWWYsa0JBQVUsR0FqWUs7QUFrWWYsa0JBQVUsR0FsWUs7QUFtWWYsa0JBQVUsR0FuWUs7QUFvWWYsa0JBQVUsR0FwWUs7QUFxWWYsa0JBQVUsR0FyWUs7QUFzWWYsa0JBQVUsR0F0WUs7QUF1WWYsa0JBQVUsR0F2WUs7QUF3WWYsa0JBQVUsR0F4WUs7QUF5WWYsa0JBQVUsR0F6WUs7QUEwWWYsa0JBQVUsR0ExWUs7QUEyWWYsa0JBQVUsR0EzWUs7QUE0WWYsa0JBQVUsR0E1WUs7QUE2WWYsa0JBQVUsR0E3WUs7QUE4WWYsa0JBQVUsR0E5WUs7QUErWWYsa0JBQVUsR0EvWUs7QUFnWmYsa0JBQVUsR0FoWks7QUFpWmYsa0JBQVUsR0FqWks7QUFrWmYsa0JBQVUsR0FsWks7QUFtWmYsa0JBQVUsR0FuWks7QUFvWmYsa0JBQVUsR0FwWks7QUFxWmYsa0JBQVUsR0FyWks7QUFzWmYsa0JBQVUsR0F0Wks7QUF1WmYsa0JBQVUsR0F2Wks7QUF3WmYsa0JBQVUsR0F4Wks7QUF5WmYsZ0JBQVUsR0F6Wks7QUEwWmYsZ0JBQVUsR0ExWks7QUEyWmYsZ0JBQVUsR0EzWks7QUE0WmYsa0JBQVUsR0E1Wks7QUE2WmYsa0JBQVUsR0E3Wks7QUE4WmYsa0JBQVUsR0E5Wks7QUErWmYsa0JBQVUsR0EvWks7QUFnYWYsZ0JBQVUsR0FoYUs7QUFpYWYsa0JBQVUsR0FqYUs7QUFrYWYsa0JBQVUsR0FsYUs7QUFtYWYsa0JBQVUsR0FuYUs7QUFvYWYsa0JBQVUsR0FwYUs7QUFxYWYsa0JBQVUsR0FyYUs7QUFzYWYsa0JBQVUsR0F0YUs7QUF1YWYsa0JBQVUsR0F2YUs7QUF3YWYsa0JBQVUsR0F4YUs7QUF5YWYsZ0JBQVUsR0F6YUs7QUEwYWYsa0JBQVUsR0ExYUs7QUEyYWYsa0JBQVUsR0EzYUs7QUE0YWYsZ0JBQVUsR0E1YUs7QUE2YWYsa0JBQVUsR0E3YUs7QUE4YWYsa0JBQVUsR0E5YUs7QUErYWYsa0JBQVUsR0EvYUs7QUFnYmYsa0JBQVUsR0FoYks7QUFpYmYsa0JBQVUsR0FqYks7QUFrYmYsa0JBQVUsR0FsYks7QUFtYmYsa0JBQVUsR0FuYks7QUFvYmYsa0JBQVUsR0FwYks7QUFxYmYsa0JBQVUsR0FyYks7QUFzYmYsa0JBQVUsR0F0Yks7QUF1YmYsa0JBQVUsR0F2Yks7QUF3YmYsa0JBQVUsSUF4Yks7QUF5YmYsZ0JBQVUsSUF6Yks7QUEwYmYsa0JBQVUsSUExYks7QUEyYmYsa0JBQVUsSUEzYks7QUE0YmYsa0JBQVUsSUE1Yks7QUE2YmYsa0JBQVUsSUE3Yks7QUE4YmYsa0JBQVUsSUE5Yks7QUErYmYsa0JBQVUsSUEvYks7QUFnY2Ysa0JBQVUsSUFoY0s7QUFpY2Ysa0JBQVUsR0FqY0s7QUFrY2Ysa0JBQVUsR0FsY0s7QUFtY2Ysa0JBQVUsR0FuY0s7QUFvY2Ysa0JBQVUsR0FwY0s7QUFxY2Ysa0JBQVUsR0FyY0s7QUFzY2Ysa0JBQVUsR0F0Y0s7QUF1Y2Ysa0JBQVUsR0F2Y0s7QUF3Y2Ysa0JBQVUsR0F4Y0s7QUF5Y2Ysa0JBQVUsR0F6Y0s7QUEwY2Ysa0JBQVUsR0ExY0s7QUEyY2Ysa0JBQVUsR0EzY0s7QUE0Y2Ysa0JBQVUsR0E1Y0s7QUE2Y2Ysa0JBQVUsR0E3Y0s7QUE4Y2Ysa0JBQVUsR0E5Y0s7QUErY2YsZ0JBQVUsR0EvY0s7QUFnZGYsa0JBQVUsR0FoZEs7QUFpZGYsa0JBQVUsR0FqZEs7QUFrZGYsa0JBQVUsR0FsZEs7QUFtZGYsa0JBQVUsR0FuZEs7QUFvZGYsa0JBQVUsR0FwZEs7QUFxZGYsa0JBQVUsR0FyZEs7QUFzZGYsa0JBQVUsR0F0ZEs7QUF1ZGYsa0JBQVUsR0F2ZEs7QUF3ZGYsa0JBQVUsR0F4ZEs7QUF5ZGYsa0JBQVUsR0F6ZEs7QUEwZGYsa0JBQVUsR0ExZEs7QUEyZGYsa0JBQVUsR0EzZEs7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Qit3Qix5QkFBbUIsQ0FBQy93QixNQUFELENBQW5CO0FBQ0EsS0ExRks7QUEyRk5nd0IsbUJBQWUsRUFBRSx5QkFBU2h3QixNQUFULEVBQWlCO0FBQ2pDMHhCLDJCQUFxQixDQUFDMXhCLE1BQUQsQ0FBckI7QUFDQSxLQTdGSztBQThGTjh6Qix5QkFBcUIsRUFBRSxpQ0FBVztBQUNqQyxXQUFLZixnQkFBTDtBQUNBLFdBQUtFLFdBQUw7QUFDQSxXQUFLbkMsYUFBTDtBQUNBLEtBbEdLO0FBbUdOcmlCLGFBQVMsRUFBRSxxQkFBVztBQUNyQi9SLG9EQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMHFCLE9BQWhCLENBQXdCO0FBQ3ZCM1ksaUJBQVMsRUFBRS9SLDhDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyUixNQUFWLEdBQW1CQztBQURQLE9BQXhCLEVBRUcsQ0FGSDtBQUdBO0FBdkdLLEdBQVA7QUF5R0EsQ0E5R1MsRUFBVjs7QUFnSEE1Uiw4Q0FBQyxDQUFDMkQsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUM1Qnl2QixLQUFHLENBQUMrQyxJQUFKO0FBQ0EsQ0FGRCxFOzs7Ozs7Ozs7Ozs7QUNodkRBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9hc3NldHMvcGx1Z2lucy9zZWxlY3QyL2Rpc3QvanMgc3luYyByZWN1cnNpdmUgXi4qY29tcGF0XFxcXC9pbnB1dERhdGEkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiaW1wb3J0ICcuLi92ZW5kb3IvY29sb3ItYWRtaW4vanMvYXBwJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi4vcGx1Z2lucy9zZWxlY3QyL2Rpc3QvanMvc2VsZWN0MidcbmltcG9ydCAnLi4vcGx1Z2lucy9zZWxlY3QyL2Rpc3QvY3NzL3NlbGVjdDIuY3NzJ1xuXG5pbXBvcnQgJy4vc2VsZWN0MmVudGl0eS5qcyc7XG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnLi4vc2Nzcy9hcHAuc2NzcycpO1xucmVxdWlyZSgnLi4vY3NzL2FwcC5taW4uY3NzJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgJC5mbi5zZWxlY3QyZW50aXR5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0O1xuXG4gICAgICAgICAgICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHNvIHdlIGNhbiBrZWVwIHRoZSBjYWNoZSBsb2NhbCB0byB0aGlzIGluc3RhbmNlIGFuZCBzbyB3ZSBjYW5cbiAgICAgICAgICAgIC8vIGZldGNoIGNvbmZpZyBzZXR0aW5ncyBzaW5jZSBzZWxlY3QyIGRvZXNuJ3QgZXhwb3NlIGl0cyBvcHRpb25zIHRvIHRoZSB0cmFuc3BvcnQgbWV0aG9kLlxuICAgICAgICAgICAgbGV0ICRzMiA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgbGltaXQgPSAkczIuZGF0YSgncGFnZS1saW1pdCcpIHx8IDAsXG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gJHMyLmRhdGEoJ3Njcm9sbCcpLFxuICAgICAgICAgICAgICAgIHByZWZpeCA9IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgcXVlcnlfcGFyYW1ldGVycyA9ICRzMi5kYXRhKCdxdWVyeS1wYXJhbWV0ZXJzJyksXG4gICAgICAgICAgICAgICAgcmVuZGVyX2h0bWwgPSAkczIuZGF0YSgncmVuZGVyLWh0bWwnKSxcbiAgICAgICAgICAgICAgICBjYWNoZSA9IFtdO1xuXG4gICAgICAgICAgICBsZXQgcmVxUGFyYW1zID0gJHMyLmRhdGEoJ3JlcV9wYXJhbXMnKTtcbiAgICAgICAgICAgIGlmIChyZXFQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2gocmVxUGFyYW1zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcqW25hbWU9XCInICsgdmFsdWUgKyAnXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzMi52YWwobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkczIudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWVwLW1lcmdlIHRoZSBvcHRpb25zXG4gICAgICAgICAgICBsZXQgbWVyZ2VkT3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHtcbiAgICAgICAgICAgICAgICAvLyBUYWdzIHN1cHBvcnRcbiAgICAgICAgICAgICAgICBjcmVhdGVUYWc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkczIuZGF0YSgndGFncycpICYmIGRhdGEudGVybS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGRhdGEudGVybSArICRzMi5kYXRhKCd0YWdzLXRleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiAkczIuZGF0YSgnbmV3LXRhZy1wcmVmaXgnKSArIGRhdGEudGVybSwgdGV4dDogdGV4dCB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhamF4OiB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJHMyLmRhdGEoJ2FqYXgtLXVybCcpIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogZnVuY3Rpb24gKHBhcmFtcywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgY2FjaGluZyBlbmFibGVkP1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzMi5kYXRhKCdhamF4LS1jYWNoZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHRvIG1ha2UgdGhlIGtleSB1bmlxdWUgdG8gbWFrZSBpdCBsZXNzIGxpa2VseSBmb3IgYSBwYWdlK3EgdG8gbWF0Y2ggYSByZWFsIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHByZWZpeCArICcgcGFnZTonICsgKHBhcmFtcy5kYXRhLnBhZ2UgfHwgMSkgKyAnICcgKyBwYXJhbXMuZGF0YS5xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVRpbWVvdXQgPSAkczIuZGF0YSgnYWpheC0tY2FjaGVUaW1lb3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gY2FjaGUgZW50cnkgZm9yICd0ZXJtJyBvciB0aGUgY2FjaGUgaGFzIHRpbWVkIG91dD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhY2hlW2tleV0gPT09ICd1bmRlZmluZWQnIHx8IChjYWNoZVRpbWVvdXQgJiYgRGF0ZS5ub3coKSA+PSBjYWNoZVtrZXldLnRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmFqYXgocGFyYW1zKS5mYWlsKGZhaWx1cmUpLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBjYWNoZVRpbWVvdXQgPyBEYXRlLm5vdygpICsgY2FjaGVUaW1lb3V0IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBjYWNoZWQgZGF0YSB3aXRoIG5vIGFqYXggcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGNhY2hlW2tleV0uZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBubyBjYWNoaW5nIGVuYWJsZWQuIGp1c3QgZG8gdGhlIGFqYXggcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCA9ICQuYWpheChwYXJhbXMpLmZhaWwoZmFpbHVyZSkuZG9uZShzdWNjZXNzKS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3EnOiBwYXJhbXMudGVybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmllbGRfbmFtZSc6ICRzMi5kYXRhKCduYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzX3R5cGUnOiAkczIuZGF0YSgnY2xhc3N0eXBlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXFQYXJhbXMgPSAkczIuZGF0YSgncmVxX3BhcmFtcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcVBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChyZXFQYXJhbXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldFtrZXldID0gJCgnKltuYW1lPVwiJyArIHZhbHVlICsgJ1wiXScpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHNlbmQgdGhlICdwYWdlJyBwYXJhbWV0ZXIgaWYgc2Nyb2xsaW5nIGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRbJ3BhZ2UnXSA9IHBhcmFtcy5wYWdlIHx8IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5X3BhcmFtZXRlcnMpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIChxdWVyeV9wYXJhbWV0ZXJzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcXVlcnlfcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IG92ZXJyaWRpbmcgcmVxdWlyZWQgcGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRba2V5XSA9IHF1ZXJ5X3BhcmFtZXRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzLCBtb3JlID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wYWdlID0gcGFyYW1zLnBhZ2UgfHwgMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhc3N1bWUgcmVtb3RlIHJlc3VsdCB3YXMgcHJvcGVyIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZSA9IGRhdGEubW9yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbHNhZmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wYWdpbmF0aW9uID0geyBtb3JlOiBtb3JlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHRzID0gcmVzdWx0cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICBpZiAocmVuZGVyX2h0bWwpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRPcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgICAgICAgICBlc2NhcGVNYXJrdXA6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSZXN1bHQ6IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaHRtbCA/IG9wdGlvbi5odG1sIDogb3B0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlU2VsZWN0aW9uOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtZXJnZWRPcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHMyLnNlbGVjdDIobWVyZ2VkT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufSkoalF1ZXJ5KTtcblxuKGZ1bmN0aW9uICgkKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc2VsZWN0MmVudGl0eVtkYXRhLWF1dG9zdGFydD1cInRydWVcIl0nKS5zZWxlY3QyZW50aXR5KCk7XG4gICAgfSk7XG59KShqUXVlcnkpO1xuIiwiLyohXG4gKiBTZWxlY3QyIDQuMC4wLXJjLjJcbiAqIGh0dHBzOi8vc2VsZWN0Mi5naXRodWIuaW9cbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS9Db21tb25KU1xuICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufShmdW5jdGlvbiAoalF1ZXJ5KSB7XG4gIC8vIFRoaXMgaXMgbmVlZGVkIHNvIHdlIGNhbiBjYXRjaCB0aGUgQU1EIGxvYWRlciBjb25maWd1cmF0aW9uIGFuZCB1c2UgaXRcbiAgLy8gVGhlIGlubmVyIGZpbGUgc2hvdWxkIGJlIHdyYXBwZWQgKGJ5IGBiYW5uZXIuc3RhcnQuanNgKSBpbiBhIGZ1bmN0aW9uIHRoYXRcbiAgLy8gcmV0dXJucyB0aGUgQU1EIGxvYWRlciByZWZlcmVuY2VzLlxuICB2YXIgUzIgPVxuKGZ1bmN0aW9uICgpIHtcbiAgLy8gUmVzdG9yZSB0aGUgU2VsZWN0MiBBTUQgbG9hZGVyIHNvIGl0IGNhbiBiZSB1c2VkXG4gIC8vIE5lZWRlZCBtb3N0bHkgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLCB3aGVyZSB0aGUgbG9hZGVyIGlzIG5vdCBpbnNlcnRlZFxuICBpZiAoalF1ZXJ5ICYmIGpRdWVyeS5mbiAmJiBqUXVlcnkuZm4uc2VsZWN0MiAmJiBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpIHtcbiAgICB2YXIgUzIgPSBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7XG4gIH1cbnZhciBTMjsoZnVuY3Rpb24gKCkgeyBpZiAoIVMyIHx8ICFTMi5yZXF1aXJlanMpIHtcbmlmICghUzIpIHsgUzIgPSB7fTsgfSBlbHNlIHsgcmVxdWlyZSA9IFMyOyB9XG4vKipcbiAqIEBsaWNlbnNlIGFsbW9uZCAwLjIuOSBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNCwgVGhlIERvam8gRm91bmRhdGlvbiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogQXZhaWxhYmxlIHZpYSB0aGUgTUlUIG9yIG5ldyBCU0QgbGljZW5zZS5cbiAqIHNlZTogaHR0cDovL2dpdGh1Yi5jb20vanJidXJrZS9hbG1vbmQgZm9yIGRldGFpbHNcbiAqL1xuLy9Hb2luZyBzbG9wcHkgdG8gYXZvaWQgJ3VzZSBzdHJpY3QnIHN0cmluZyBjb3N0LCBidXQgc3RyaWN0IHByYWN0aWNlcyBzaG91bGRcbi8vYmUgZm9sbG93ZWQuXG4vKmpzbGludCBzbG9wcHk6IHRydWUgKi9cbi8qZ2xvYmFsIHNldFRpbWVvdXQ6IGZhbHNlICovXG5cbnZhciByZXF1aXJlanMsIHJlcXVpcmUsIGRlZmluZTtcbihmdW5jdGlvbiAodW5kZWYpIHtcbiAgICB2YXIgbWFpbiwgcmVxLCBtYWtlTWFwLCBoYW5kbGVycyxcbiAgICAgICAgZGVmaW5lZCA9IHt9LFxuICAgICAgICB3YWl0aW5nID0ge30sXG4gICAgICAgIGNvbmZpZyA9IHt9LFxuICAgICAgICBkZWZpbmluZyA9IHt9LFxuICAgICAgICBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICBhcHMgPSBbXS5zbGljZSxcbiAgICAgICAganNTdWZmaXhSZWdFeHAgPSAvXFwuanMkLztcblxuICAgIGZ1bmN0aW9uIGhhc1Byb3Aob2JqLCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBoYXNPd24uY2FsbChvYmosIHByb3ApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgcmVsYXRpdmUgbW9kdWxlIG5hbWUsIGxpa2UgLi9zb21ldGhpbmcsIG5vcm1hbGl6ZSBpdCB0b1xuICAgICAqIGEgcmVhbCBuYW1lIHRoYXQgY2FuIGJlIG1hcHBlZCB0byBhIHBhdGguXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIHJlbGF0aXZlIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYmFzZU5hbWUgYSByZWFsIG5hbWUgdGhhdCB0aGUgbmFtZSBhcmcgaXMgcmVsYXRpdmVcbiAgICAgKiB0by5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBub3JtYWxpemVkIG5hbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub3JtYWxpemUobmFtZSwgYmFzZU5hbWUpIHtcbiAgICAgICAgdmFyIG5hbWVQYXJ0cywgbmFtZVNlZ21lbnQsIG1hcFZhbHVlLCBmb3VuZE1hcCwgbGFzdEluZGV4LFxuICAgICAgICAgICAgZm91bmRJLCBmb3VuZFN0YXJNYXAsIHN0YXJJLCBpLCBqLCBwYXJ0LFxuICAgICAgICAgICAgYmFzZVBhcnRzID0gYmFzZU5hbWUgJiYgYmFzZU5hbWUuc3BsaXQoXCIvXCIpLFxuICAgICAgICAgICAgbWFwID0gY29uZmlnLm1hcCxcbiAgICAgICAgICAgIHN0YXJNYXAgPSAobWFwICYmIG1hcFsnKiddKSB8fCB7fTtcblxuICAgICAgICAvL0FkanVzdCBhbnkgcmVsYXRpdmUgcGF0aHMuXG4gICAgICAgIGlmIChuYW1lICYmIG5hbWUuY2hhckF0KDApID09PSBcIi5cIikge1xuICAgICAgICAgICAgLy9JZiBoYXZlIGEgYmFzZSBuYW1lLCB0cnkgdG8gbm9ybWFsaXplIGFnYWluc3QgaXQsXG4gICAgICAgICAgICAvL290aGVyd2lzZSwgYXNzdW1lIGl0IGlzIGEgdG9wLWxldmVsIHJlcXVpcmUgdGhhdCB3aWxsXG4gICAgICAgICAgICAvL2JlIHJlbGF0aXZlIHRvIGJhc2VVcmwgaW4gdGhlIGVuZC5cbiAgICAgICAgICAgIGlmIChiYXNlTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vQ29udmVydCBiYXNlTmFtZSB0byBhcnJheSwgYW5kIGxvcCBvZmYgdGhlIGxhc3QgcGFydCxcbiAgICAgICAgICAgICAgICAvL3NvIHRoYXQgLiBtYXRjaGVzIHRoYXQgXCJkaXJlY3RvcnlcIiBhbmQgbm90IG5hbWUgb2YgdGhlIGJhc2VOYW1lJ3NcbiAgICAgICAgICAgICAgICAvL21vZHVsZS4gRm9yIGluc3RhbmNlLCBiYXNlTmFtZSBvZiBcIm9uZS90d28vdGhyZWVcIiwgbWFwcyB0b1xuICAgICAgICAgICAgICAgIC8vXCJvbmUvdHdvL3RocmVlLmpzXCIsIGJ1dCB3ZSB3YW50IHRoZSBkaXJlY3RvcnksIFwib25lL3R3b1wiIGZvclxuICAgICAgICAgICAgICAgIC8vdGhpcyBub3JtYWxpemF0aW9uLlxuICAgICAgICAgICAgICAgIGJhc2VQYXJ0cyA9IGJhc2VQYXJ0cy5zbGljZSgwLCBiYXNlUGFydHMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBuYW1lLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAvLyBOb2RlIC5qcyBhbGxvd2FuY2U6XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5ub2RlSWRDb21wYXQgJiYganNTdWZmaXhSZWdFeHAudGVzdChuYW1lW2xhc3RJbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVbbGFzdEluZGV4XSA9IG5hbWVbbGFzdEluZGV4XS5yZXBsYWNlKGpzU3VmZml4UmVnRXhwLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmFtZSA9IGJhc2VQYXJ0cy5jb25jYXQobmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvL3N0YXJ0IHRyaW1Eb3RzXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5hbWVbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0ID09PSBcIi5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gXCIuLlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMSAmJiAobmFtZVsyXSA9PT0gJy4uJyB8fCBuYW1lWzBdID09PSAnLi4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRW5kIG9mIHRoZSBsaW5lLiBLZWVwIGF0IGxlYXN0IG9uZSBub24tZG90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYXRoIHNlZ21lbnQgYXQgdGhlIGZyb250IHNvIGl0IGNhbiBiZSBtYXBwZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvcnJlY3RseSB0byBkaXNrLiBPdGhlcndpc2UsIHRoZXJlIGlzIGxpa2VseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbm8gcGF0aCBtYXBwaW5nIGZvciBhIHBhdGggc3RhcnRpbmcgd2l0aCAnLi4nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhpcyBjYW4gc3RpbGwgZmFpbCwgYnV0IGNhdGNoZXMgdGhlIG1vc3QgcmVhc29uYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXNlcyBvZiAuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGkgLSAxLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIC09IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9lbmQgdHJpbURvdHNcblxuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJy4vJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBObyBiYXNlTmFtZSwgc28gdGhpcyBpcyBJRCBpcyByZXNvbHZlZCByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIC8vIHRvIGJhc2VVcmwsIHB1bGwgb2ZmIHRoZSBsZWFkaW5nIGRvdC5cbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0FwcGx5IG1hcCBjb25maWcgaWYgYXZhaWxhYmxlLlxuICAgICAgICBpZiAoKGJhc2VQYXJ0cyB8fCBzdGFyTWFwKSAmJiBtYXApIHtcbiAgICAgICAgICAgIG5hbWVQYXJ0cyA9IG5hbWUuc3BsaXQoJy8nKTtcblxuICAgICAgICAgICAgZm9yIChpID0gbmFtZVBhcnRzLmxlbmd0aDsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgIG5hbWVTZWdtZW50ID0gbmFtZVBhcnRzLnNsaWNlKDAsIGkpLmpvaW4oXCIvXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJhc2VQYXJ0cykge1xuICAgICAgICAgICAgICAgICAgICAvL0ZpbmQgdGhlIGxvbmdlc3QgYmFzZU5hbWUgc2VnbWVudCBtYXRjaCBpbiB0aGUgY29uZmlnLlxuICAgICAgICAgICAgICAgICAgICAvL1NvLCBkbyBqb2lucyBvbiB0aGUgYmlnZ2VzdCB0byBzbWFsbGVzdCBsZW5ndGhzIG9mIGJhc2VQYXJ0cy5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYmFzZVBhcnRzLmxlbmd0aDsgaiA+IDA7IGogLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwVmFsdWUgPSBtYXBbYmFzZVBhcnRzLnNsaWNlKDAsIGopLmpvaW4oJy8nKV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFzZU5hbWUgc2VnbWVudCBoYXMgIGNvbmZpZywgZmluZCBpZiBpdCBoYXMgb25lIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBWYWx1ZSA9IG1hcFZhbHVlW25hbWVTZWdtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9NYXRjaCwgdXBkYXRlIG5hbWUgdG8gdGhlIG5ldyB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRNYXAgPSBtYXBWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRJID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vQ2hlY2sgZm9yIGEgc3RhciBtYXAgbWF0Y2gsIGJ1dCBqdXN0IGhvbGQgb24gdG8gaXQsXG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNob3J0ZXIgc2VnbWVudCBtYXRjaCBsYXRlciBpbiBhIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgLy9jb25maWcsIHRoZW4gZmF2b3Igb3ZlciB0aGlzIHN0YXIgbWFwLlxuICAgICAgICAgICAgICAgIGlmICghZm91bmRTdGFyTWFwICYmIHN0YXJNYXAgJiYgc3Rhck1hcFtuYW1lU2VnbWVudF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRTdGFyTWFwID0gc3Rhck1hcFtuYW1lU2VnbWVudF07XG4gICAgICAgICAgICAgICAgICAgIHN0YXJJID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZm91bmRNYXAgJiYgZm91bmRTdGFyTWFwKSB7XG4gICAgICAgICAgICAgICAgZm91bmRNYXAgPSBmb3VuZFN0YXJNYXA7XG4gICAgICAgICAgICAgICAgZm91bmRJID0gc3Rhckk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZE1hcCkge1xuICAgICAgICAgICAgICAgIG5hbWVQYXJ0cy5zcGxpY2UoMCwgZm91bmRJLCBmb3VuZE1hcCk7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVQYXJ0cy5qb2luKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlUmVxdWlyZShyZWxOYW1lLCBmb3JjZVN5bmMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vQSB2ZXJzaW9uIG9mIGEgcmVxdWlyZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyBhIG1vZHVsZU5hbWVcbiAgICAgICAgICAgIC8vdmFsdWUgZm9yIGl0ZW1zIHRoYXQgbWF5IG5lZWQgdG9cbiAgICAgICAgICAgIC8vbG9vayB1cCBwYXRocyByZWxhdGl2ZSB0byB0aGUgbW9kdWxlTmFtZVxuICAgICAgICAgICAgcmV0dXJuIHJlcS5hcHBseSh1bmRlZiwgYXBzLmNhbGwoYXJndW1lbnRzLCAwKS5jb25jYXQoW3JlbE5hbWUsIGZvcmNlU3luY10pKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTm9ybWFsaXplKHJlbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKG5hbWUsIHJlbE5hbWUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMb2FkKGRlcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgZGVmaW5lZFtkZXBOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxEZXAobmFtZSkge1xuICAgICAgICBpZiAoaGFzUHJvcCh3YWl0aW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSB3YWl0aW5nW25hbWVdO1xuICAgICAgICAgICAgZGVsZXRlIHdhaXRpbmdbbmFtZV07XG4gICAgICAgICAgICBkZWZpbmluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICBtYWluLmFwcGx5KHVuZGVmLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcChkZWZpbmluZywgbmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gJyArIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZpbmVkW25hbWVdO1xuICAgIH1cblxuICAgIC8vVHVybnMgYSBwbHVnaW4hcmVzb3VyY2UgdG8gW3BsdWdpbiwgcmVzb3VyY2VdXG4gICAgLy93aXRoIHRoZSBwbHVnaW4gYmVpbmcgdW5kZWZpbmVkIGlmIHRoZSBuYW1lXG4gICAgLy9kaWQgbm90IGhhdmUgYSBwbHVnaW4gcHJlZml4LlxuICAgIGZ1bmN0aW9uIHNwbGl0UHJlZml4KG5hbWUpIHtcbiAgICAgICAgdmFyIHByZWZpeCxcbiAgICAgICAgICAgIGluZGV4ID0gbmFtZSA/IG5hbWUuaW5kZXhPZignIScpIDogLTE7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBuYW1lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoaW5kZXggKyAxLCBuYW1lLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtwcmVmaXgsIG5hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgbmFtZSBtYXAsIG5vcm1hbGl6aW5nIHRoZSBuYW1lLCBhbmQgdXNpbmcgYSBwbHVnaW5cbiAgICAgKiBmb3Igbm9ybWFsaXphdGlvbiBpZiBuZWNlc3NhcnkuIEdyYWJzIGEgcmVmIHRvIHBsdWdpblxuICAgICAqIHRvbywgYXMgYW4gb3B0aW1pemF0aW9uLlxuICAgICAqL1xuICAgIG1ha2VNYXAgPSBmdW5jdGlvbiAobmFtZSwgcmVsTmFtZSkge1xuICAgICAgICB2YXIgcGx1Z2luLFxuICAgICAgICAgICAgcGFydHMgPSBzcGxpdFByZWZpeChuYW1lKSxcbiAgICAgICAgICAgIHByZWZpeCA9IHBhcnRzWzBdO1xuXG4gICAgICAgIG5hbWUgPSBwYXJ0c1sxXTtcblxuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBwcmVmaXggPSBub3JtYWxpemUocHJlZml4LCByZWxOYW1lKTtcbiAgICAgICAgICAgIHBsdWdpbiA9IGNhbGxEZXAocHJlZml4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTm9ybWFsaXplIGFjY29yZGluZ1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luICYmIHBsdWdpbi5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gcGx1Z2luLm5vcm1hbGl6ZShuYW1lLCBtYWtlTm9ybWFsaXplKHJlbE5hbWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5vcm1hbGl6ZShuYW1lLCByZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWUgPSBub3JtYWxpemUobmFtZSwgcmVsTmFtZSk7XG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpO1xuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF07XG4gICAgICAgICAgICBuYW1lID0gcGFydHNbMV07XG4gICAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Vc2luZyByaWRpY3Vsb3VzIHByb3BlcnR5IG5hbWVzIGZvciBzcGFjZSByZWFzb25zXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmOiBwcmVmaXggPyBwcmVmaXggKyAnIScgKyBuYW1lIDogbmFtZSwgLy9mdWxsTmFtZVxuICAgICAgICAgICAgbjogbmFtZSxcbiAgICAgICAgICAgIHByOiBwcmVmaXgsXG4gICAgICAgICAgICBwOiBwbHVnaW5cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUNvbmZpZyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbmZpZyAmJiBjb25maWcuY29uZmlnICYmIGNvbmZpZy5jb25maWdbbmFtZV0pIHx8IHt9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZXJzID0ge1xuICAgICAgICByZXF1aXJlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VSZXF1aXJlKG5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBkZWZpbmVkW25hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRlZmluZWRbbmFtZV0gPSB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBkZWZpbmVkW25hbWVdLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogbWFrZUNvbmZpZyhuYW1lKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYWluID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKSB7XG4gICAgICAgIHZhciBjanNNb2R1bGUsIGRlcE5hbWUsIHJldCwgbWFwLCBpLFxuICAgICAgICAgICAgYXJncyA9IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tUeXBlID0gdHlwZW9mIGNhbGxiYWNrLFxuICAgICAgICAgICAgdXNpbmdFeHBvcnRzO1xuXG4gICAgICAgIC8vVXNlIG5hbWUgaWYgbm8gcmVsTmFtZVxuICAgICAgICByZWxOYW1lID0gcmVsTmFtZSB8fCBuYW1lO1xuXG4gICAgICAgIC8vQ2FsbCB0aGUgY2FsbGJhY2sgdG8gZGVmaW5lIHRoZSBtb2R1bGUsIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgaWYgKGNhbGxiYWNrVHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgY2FsbGJhY2tUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvL1B1bGwgb3V0IHRoZSBkZWZpbmVkIGRlcGVuZGVuY2llcyBhbmQgcGFzcyB0aGUgb3JkZXJlZFxuICAgICAgICAgICAgLy92YWx1ZXMgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgLy9EZWZhdWx0IHRvIFtyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGVdIGlmIG5vIGRlcHNcbiAgICAgICAgICAgIGRlcHMgPSAhZGVwcy5sZW5ndGggJiYgY2FsbGJhY2subGVuZ3RoID8gWydyZXF1aXJlJywgJ2V4cG9ydHMnLCAnbW9kdWxlJ10gOiBkZXBzO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtYXAgPSBtYWtlTWFwKGRlcHNbaV0sIHJlbE5hbWUpO1xuICAgICAgICAgICAgICAgIGRlcE5hbWUgPSBtYXAuZjtcblxuICAgICAgICAgICAgICAgIC8vRmFzdCBwYXRoIENvbW1vbkpTIHN0YW5kYXJkIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICAgICBpZiAoZGVwTmFtZSA9PT0gXCJyZXF1aXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGhhbmRsZXJzLnJlcXVpcmUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXBOYW1lID09PSBcImV4cG9ydHNcIikge1xuICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMuZXhwb3J0cyhuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdXNpbmdFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwibW9kdWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25KUyBtb2R1bGUgc3BlYyAxLjFcbiAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlID0gYXJnc1tpXSA9IGhhbmRsZXJzLm1vZHVsZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1Byb3AoZGVmaW5lZCwgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3Aod2FpdGluZywgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3AoZGVmaW5pbmcsIGRlcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBjYWxsRGVwKGRlcE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwLnApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnAubG9hZChtYXAubiwgbWFrZVJlcXVpcmUocmVsTmFtZSwgdHJ1ZSksIG1ha2VMb2FkKGRlcE5hbWUpLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBkZWZpbmVkW2RlcE5hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJyBtaXNzaW5nICcgKyBkZXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IGNhbGxiYWNrID8gY2FsbGJhY2suYXBwbHkoZGVmaW5lZFtuYW1lXSwgYXJncykgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBzZXR0aW5nIGV4cG9ydHMgdmlhIFwibW9kdWxlXCIgaXMgaW4gcGxheSxcbiAgICAgICAgICAgICAgICAvL2Zhdm9yIHRoYXQgb3ZlciByZXR1cm4gdmFsdWUgYW5kIGV4cG9ydHMuIEFmdGVyIHRoYXQsXG4gICAgICAgICAgICAgICAgLy9mYXZvciBhIG5vbi11bmRlZmluZWQgcmV0dXJuIHZhbHVlIG92ZXIgZXhwb3J0cyB1c2UuXG4gICAgICAgICAgICAgICAgaWYgKGNqc01vZHVsZSAmJiBjanNNb2R1bGUuZXhwb3J0cyAhPT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNqc01vZHVsZS5leHBvcnRzICE9PSBkZWZpbmVkW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjanNNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJldCAhPT0gdW5kZWYgfHwgIXVzaW5nRXhwb3J0cykge1xuICAgICAgICAgICAgICAgICAgICAvL1VzZSB0aGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAvL01heSBqdXN0IGJlIGFuIG9iamVjdCBkZWZpbml0aW9uIGZvciB0aGUgbW9kdWxlLiBPbmx5XG4gICAgICAgICAgICAvL3dvcnJ5IGFib3V0IGRlZmluaW5nIGlmIGhhdmUgYSBtb2R1bGUgbmFtZS5cbiAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1aXJlanMgPSByZXF1aXJlID0gcmVxID0gZnVuY3Rpb24gKGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lLCBmb3JjZVN5bmMsIGFsdCkge1xuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tkZXBzXSkge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaW4gdGhpcyBjYXNlIGlzIHJlYWxseSByZWxOYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJzW2RlcHNdKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSnVzdCByZXR1cm4gdGhlIG1vZHVsZSB3YW50ZWQuIEluIHRoaXMgc2NlbmFyaW8sIHRoZVxuICAgICAgICAgICAgLy9kZXBzIGFyZyBpcyB0aGUgbW9kdWxlIG5hbWUsIGFuZCBzZWNvbmQgYXJnIChpZiBwYXNzZWQpXG4gICAgICAgICAgICAvL2lzIGp1c3QgdGhlIHJlbE5hbWUuXG4gICAgICAgICAgICAvL05vcm1hbGl6ZSBtb2R1bGUgbmFtZSwgaWYgaXQgY29udGFpbnMgLiBvciAuLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxEZXAobWFrZU1hcChkZXBzLCBjYWxsYmFjaykuZik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRlcHMuc3BsaWNlKSB7XG4gICAgICAgICAgICAvL2RlcHMgaXMgYSBjb25maWcgb2JqZWN0LCBub3QgYW4gYXJyYXkuXG4gICAgICAgICAgICBjb25maWcgPSBkZXBzO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5kZXBzKSB7XG4gICAgICAgICAgICAgICAgcmVxKGNvbmZpZy5kZXBzLCBjb25maWcuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLnNwbGljZSkge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaXMgYW4gYXJyYXksIHdoaWNoIG1lYW5zIGl0IGlzIGEgZGVwZW5kZW5jeSBsaXN0LlxuICAgICAgICAgICAgICAgIC8vQWRqdXN0IGFyZ3MgaWYgdGhlcmUgYXJlIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgIGRlcHMgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHJlbE5hbWU7XG4gICAgICAgICAgICAgICAgcmVsTmFtZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlcHMgPSB1bmRlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vU3VwcG9ydCByZXF1aXJlKFsnYSddKVxuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICAgIC8vSWYgcmVsTmFtZSBpcyBhIGZ1bmN0aW9uLCBpdCBpcyBhbiBlcnJiYWNrIGhhbmRsZXIsXG4gICAgICAgIC8vc28gcmVtb3ZlIGl0LlxuICAgICAgICBpZiAodHlwZW9mIHJlbE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlbE5hbWUgPSBmb3JjZVN5bmM7XG4gICAgICAgICAgICBmb3JjZVN5bmMgPSBhbHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL1NpbXVsYXRlIGFzeW5jIGNhbGxiYWNrO1xuICAgICAgICBpZiAoZm9yY2VTeW5jKSB7XG4gICAgICAgICAgICBtYWluKHVuZGVmLCBkZXBzLCBjYWxsYmFjaywgcmVsTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1VzaW5nIGEgbm9uLXplcm8gdmFsdWUgYmVjYXVzZSBvZiBjb25jZXJuIGZvciB3aGF0IG9sZCBicm93c2Vyc1xuICAgICAgICAgICAgLy9kbywgYW5kIGxhdGVzdCBicm93c2VycyBcInVwZ3JhZGVcIiB0byA0IGlmIGxvd2VyIHZhbHVlIGlzIHVzZWQ6XG4gICAgICAgICAgICAvL2h0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL3RpbWVycy5odG1sI2RvbS13aW5kb3d0aW1lcnMtc2V0dGltZW91dDpcbiAgICAgICAgICAgIC8vSWYgd2FudCBhIHZhbHVlIGltbWVkaWF0ZWx5LCB1c2UgcmVxdWlyZSgnaWQnKSBpbnN0ZWFkIC0tIHNvbWV0aGluZ1xuICAgICAgICAgICAgLy90aGF0IHdvcmtzIGluIGFsbW9uZCBvbiB0aGUgZ2xvYmFsIGxldmVsLCBidXQgbm90IGd1YXJhbnRlZWQgYW5kXG4gICAgICAgICAgICAvL3VubGlrZWx5IHRvIHdvcmsgaW4gb3RoZXIgQU1EIGltcGxlbWVudGF0aW9ucy5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1haW4odW5kZWYsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKTtcbiAgICAgICAgICAgIH0sIDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSnVzdCBkcm9wcyB0aGUgY29uZmlnIG9uIHRoZSBmbG9vciwgYnV0IHJldHVybnMgcmVxIGluIGNhc2VcbiAgICAgKiB0aGUgY29uZmlnIHJldHVybiB2YWx1ZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIHJlcS5jb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgICAgIHJldHVybiByZXEoY2ZnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXhwb3NlIG1vZHVsZSByZWdpc3RyeSBmb3IgZGVidWdnaW5nIGFuZCB0b29saW5nXG4gICAgICovXG4gICAgcmVxdWlyZWpzLl9kZWZpbmVkID0gZGVmaW5lZDtcblxuICAgIGRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBkZXBzLCBjYWxsYmFjaykge1xuXG4gICAgICAgIC8vVGhpcyBtb2R1bGUgbWF5IG5vdCBoYXZlIGRlcGVuZGVuY2llc1xuICAgICAgICBpZiAoIWRlcHMuc3BsaWNlKSB7XG4gICAgICAgICAgICAvL2RlcHMgaXMgbm90IGFuIGFycmF5LCBzbyBwcm9iYWJseSBtZWFuc1xuICAgICAgICAgICAgLy9hbiBvYmplY3QgbGl0ZXJhbCBvciBmYWN0b3J5IGZ1bmN0aW9uIGZvclxuICAgICAgICAgICAgLy90aGUgdmFsdWUuIEFkanVzdCBhcmdzLlxuICAgICAgICAgICAgY2FsbGJhY2sgPSBkZXBzO1xuICAgICAgICAgICAgZGVwcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIG5hbWUpICYmICFoYXNQcm9wKHdhaXRpbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB3YWl0aW5nW25hbWVdID0gW25hbWUsIGRlcHMsIGNhbGxiYWNrXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkZWZpbmUuYW1kID0ge1xuICAgICAgICBqUXVlcnk6IHRydWVcbiAgICB9O1xufSgpKTtcblxuUzIucmVxdWlyZWpzID0gcmVxdWlyZWpzO1MyLnJlcXVpcmUgPSByZXF1aXJlO1MyLmRlZmluZSA9IGRlZmluZTtcbn1cbn0oKSk7XG5TMi5kZWZpbmUoXCJhbG1vbmRcIiwgZnVuY3Rpb24oKXt9KTtcblxuLyogZ2xvYmFsIGpRdWVyeTpmYWxzZSwgJDpmYWxzZSAqL1xuUzIuZGVmaW5lKCdqcXVlcnknLFtdLGZ1bmN0aW9uICgpIHtcbiAgdmFyIF8kID0galF1ZXJ5IHx8ICQ7XG5cbiAgaWYgKF8kID09IG51bGwgJiYgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdTZWxlY3QyOiBBbiBpbnN0YW5jZSBvZiBqUXVlcnkgb3IgYSBqUXVlcnktY29tcGF0aWJsZSBsaWJyYXJ5IHdhcyBub3QgJyArXG4gICAgICAnZm91bmQuIE1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgaW5jbHVkaW5nIGpRdWVyeSBiZWZvcmUgU2VsZWN0MiBvbiB5b3VyICcgK1xuICAgICAgJ3dlYiBwYWdlLidcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIF8kO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi91dGlscycsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgdmFyIFV0aWxzID0ge307XG5cbiAgVXRpbHMuRXh0ZW5kID0gZnVuY3Rpb24gKENoaWxkQ2xhc3MsIFN1cGVyQ2xhc3MpIHtcbiAgICB2YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBCYXNlQ29uc3RydWN0b3IgKCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IENoaWxkQ2xhc3M7XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIFN1cGVyQ2xhc3MpIHtcbiAgICAgIGlmIChfX2hhc1Byb3AuY2FsbChTdXBlckNsYXNzLCBrZXkpKSB7XG4gICAgICAgIENoaWxkQ2xhc3Nba2V5XSA9IFN1cGVyQ2xhc3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXNlQ29uc3RydWN0b3IucHJvdG90eXBlID0gU3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgQ2hpbGRDbGFzcy5wcm90b3R5cGUgPSBuZXcgQmFzZUNvbnN0cnVjdG9yKCk7XG4gICAgQ2hpbGRDbGFzcy5fX3N1cGVyX18gPSBTdXBlckNsYXNzLnByb3RvdHlwZTtcblxuICAgIHJldHVybiBDaGlsZENsYXNzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE1ldGhvZHMgKHRoZUNsYXNzKSB7XG4gICAgdmFyIHByb3RvID0gdGhlQ2xhc3MucHJvdG90eXBlO1xuXG4gICAgdmFyIG1ldGhvZHMgPSBbXTtcblxuICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gcHJvdG8pIHtcbiAgICAgIHZhciBtID0gcHJvdG9bbWV0aG9kTmFtZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG1ldGhvZHMucHVzaChtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfVxuXG4gIFV0aWxzLkRlY29yYXRlID0gZnVuY3Rpb24gKFN1cGVyQ2xhc3MsIERlY29yYXRvckNsYXNzKSB7XG4gICAgdmFyIGRlY29yYXRlZE1ldGhvZHMgPSBnZXRNZXRob2RzKERlY29yYXRvckNsYXNzKTtcbiAgICB2YXIgc3VwZXJNZXRob2RzID0gZ2V0TWV0aG9kcyhTdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIERlY29yYXRlZENsYXNzICgpIHtcbiAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XG5cbiAgICAgIHZhciBhcmdDb3VudCA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cbiAgICAgIHZhciBjYWxsZWRDb25zdHJ1Y3RvciA9IFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoYXJnQ291bnQgPiAwKSB7XG4gICAgICAgIHVuc2hpZnQuY2FsbChhcmd1bWVudHMsIFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICBjYWxsZWRDb25zdHJ1Y3RvciA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgIH1cblxuICAgICAgY2FsbGVkQ29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBEZWNvcmF0b3JDbGFzcy5kaXNwbGF5TmFtZSA9IFN1cGVyQ2xhc3MuZGlzcGxheU5hbWU7XG5cbiAgICBmdW5jdGlvbiBjdHIgKCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IERlY29yYXRlZENsYXNzO1xuICAgIH1cblxuICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZSA9IG5ldyBjdHIoKTtcblxuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgc3VwZXJNZXRob2RzLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgIHZhciBzdXBlck1ldGhvZCA9IHN1cGVyTWV0aG9kc1ttXTtcblxuICAgICAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdID1cbiAgICAgICAgICBTdXBlckNsYXNzLnByb3RvdHlwZVtzdXBlck1ldGhvZF07XG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZE1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAvLyBTdHViIG91dCB0aGUgb3JpZ2luYWwgbWV0aG9kIGlmIGl0J3Mgbm90IGRlY29yYXRpbmcgYW4gYWN0dWFsIG1ldGhvZFxuICAgICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgIGlmIChtZXRob2ROYW1lIGluIERlY29yYXRlZENsYXNzLnByb3RvdHlwZSkge1xuICAgICAgICBvcmlnaW5hbE1ldGhvZCA9IERlY29yYXRlZENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZCA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVuc2hpZnQgPSBBcnJheS5wcm90b3R5cGUudW5zaGlmdDtcblxuICAgICAgICB1bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBvcmlnaW5hbE1ldGhvZCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY29yYXRlZE1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkZWNvcmF0ZWRNZXRob2RzLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgZGVjb3JhdGVkTWV0aG9kID0gZGVjb3JhdGVkTWV0aG9kc1tkXTtcblxuICAgICAgRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlW2RlY29yYXRlZE1ldGhvZF0gPSBjYWxsZWRNZXRob2QoZGVjb3JhdGVkTWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRGVjb3JhdGVkQ2xhc3M7XG4gIH07XG5cbiAgdmFyIE9ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IFtjYWxsYmFja107XG4gICAgfVxuICB9O1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmludm9rZSh0aGlzLmxpc3RlbmVyc1tldmVudF0sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfVxuXG4gICAgaWYgKCcqJyBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5pbnZva2UodGhpcy5saXN0ZW5lcnNbJyonXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGxpc3RlbmVycywgcGFyYW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuXG4gIFV0aWxzLmdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIGNoYXJzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZG9tQ2hhciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2KTtcbiAgICAgIGNoYXJzICs9IHJhbmRvbUNoYXIudG9TdHJpbmcoMzYpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFycztcbiAgfTtcblxuICBVdGlscy5iaW5kID0gZnVuY3Rpb24gKGZ1bmMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgVXRpbHMuX2NvbnZlcnREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKHZhciBvcmlnaW5hbEtleSBpbiBkYXRhKSB7XG4gICAgICB2YXIga2V5cyA9IG9yaWdpbmFsS2V5LnNwbGl0KCctJyk7XG5cbiAgICAgIHZhciBkYXRhTGV2ZWwgPSBkYXRhO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcblxuICAgICAgICAvLyBMb3dlcmNhc2UgdGhlIGZpcnN0IGxldHRlclxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBkYXNoLXNlcGFyYXRlZCBiZWNvbWVzIGNhbWVsQ2FzZVxuICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gICAgICAgIGlmICghKGtleSBpbiBkYXRhTGV2ZWwpKSB7XG4gICAgICAgICAgZGF0YUxldmVsW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGRhdGFMZXZlbFtrZXldID0gZGF0YVtvcmlnaW5hbEtleV07XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhTGV2ZWwgPSBkYXRhTGV2ZWxba2V5XTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIGRhdGFbb3JpZ2luYWxLZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFV0aWxzLmhhc1Njcm9sbCA9IGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAvLyBBZGFwdGVkIGZyb20gdGhlIGZ1bmN0aW9uIGNyZWF0ZWQgYnkgQFNoYWRvd1NjcmlwdGVyXG4gICAgLy8gYW5kIGFkYXB0ZWQgYnkgQEJpbGxCYXJyeSBvbiB0aGUgU3RhY2sgRXhjaGFuZ2UgQ29kZSBSZXZpZXcgd2Vic2l0ZS5cbiAgICAvLyBUaGUgb3JpZ2luYWwgY29kZSBjYW4gYmUgZm91bmQgYXRcbiAgICAvLyBodHRwOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9xLzEzMzM4XG4gICAgLy8gYW5kIHdhcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggdGhlIFNpenpsZSBzZWxlY3RvciBlbmdpbmUuXG5cbiAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgdmFyIG92ZXJmbG93WCA9IGVsLnN0eWxlLm92ZXJmbG93WDtcbiAgICB2YXIgb3ZlcmZsb3dZID0gZWwuc3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgLy9DaGVjayBib3RoIHggYW5kIHkgZGVjbGFyYXRpb25zXG4gICAgaWYgKG92ZXJmbG93WCA9PT0gb3ZlcmZsb3dZICYmXG4gICAgICAgIChvdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IG92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoJGVsLmlubmVySGVpZ2h0KCkgPCBlbC5zY3JvbGxIZWlnaHQgfHxcbiAgICAgICRlbC5pbm5lcldpZHRoKCkgPCBlbC5zY3JvbGxXaWR0aCk7XG4gIH07XG5cbiAgVXRpbHMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24gKG1hcmt1cCkge1xuICAgIHZhciByZXBsYWNlTWFwID0ge1xuICAgICAgJ1xcXFwnOiAnJiM5MjsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJ1xcJyc6ICcmIzM5OycsXG4gICAgICAnLyc6ICcmIzQ3OydcbiAgICB9O1xuXG4gICAgLy8gRG8gbm90IHRyeSB0byBlc2NhcGUgdGhlIG1hcmt1cCBpZiBpdCdzIG5vdCBhIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgbWFya3VwICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKG1hcmt1cCkucmVwbGFjZSgvWyY8PlwiJ1xcL1xcXFxdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBVdGlscztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvcmVzdWx0cycsW1xuICAnanF1ZXJ5JyxcbiAgJy4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gUmVzdWx0cyAoJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMuZGF0YSA9IGRhdGFBZGFwdGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBSZXN1bHRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKFJlc3VsdHMsIFV0aWxzLk9ic2VydmFibGUpO1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHJlc3VsdHMgPSAkKFxuICAgICAgJzx1bCBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uc1wiIHJvbGU9XCJ0cmVlXCI+PC91bD4nXG4gICAgKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdtdWx0aXBsZScpKSB7XG4gICAgICAkcmVzdWx0cy5hdHRyKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cyA9ICRyZXN1bHRzO1xuXG4gICAgcmV0dXJuICRyZXN1bHRzO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJHJlc3VsdHMuZW1wdHkoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5kaXNwbGF5TWVzc2FnZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgdmFyICRtZXNzYWdlID0gJChcbiAgICAgICc8bGkgcm9sZT1cInRyZWVpdGVtXCIgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvblwiPjwvbGk+J1xuICAgICk7XG5cbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldChwYXJhbXMubWVzc2FnZSk7XG5cbiAgICAkbWVzc2FnZS5hcHBlbmQoXG4gICAgICBlc2NhcGVNYXJrdXAoXG4gICAgICAgIG1lc3NhZ2UocGFyYW1zLmFyZ3MpXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRtZXNzYWdlKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgaWYgKGRhdGEucmVzdWx0cyA9PSBudWxsIHx8IGRhdGEucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLiRyZXN1bHRzLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgIG1lc3NhZ2U6ICdub1Jlc3VsdHMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5yZXN1bHRzID0gdGhpcy5zb3J0KGRhdGEucmVzdWx0cyk7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhLnJlc3VsdHNbZF07XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICRvcHRpb25zLnB1c2goJG9wdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG9wdGlvbnMpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRyZXN1bHRzLCAkZHJvcGRvd24pIHtcbiAgICB2YXIgJHJlc3VsdHNDb250YWluZXIgPSAkZHJvcGRvd24uZmluZCgnLnNlbGVjdDItcmVzdWx0cycpO1xuICAgICRyZXN1bHRzQ29udGFpbmVyLmFwcGVuZCgkcmVzdWx0cyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNvcnRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3NvcnRlcicpO1xuXG4gICAgcmV0dXJuIHNvcnRlcihkYXRhKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zZXRDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YS5jdXJyZW50KGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgdmFyIHNlbGVjdGVkSWRzID0gJC5tYXAoc2VsZWN0ZWQsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzLmlkLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0c1xuICAgICAgICAuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgdmFyIGl0ZW0gPSAkLmRhdGEodGhpcywgJ2RhdGEnKTtcblxuICAgICAgICAvLyBpZCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgd2hlbiBjb21wYXJpbmdcbiAgICAgICAgdmFyIGlkID0gJycgKyBpdGVtLmlkO1xuXG4gICAgICAgIGlmICgkLmluQXJyYXkoaWQsIHNlbGVjdGVkSWRzKSA+IC0xKSB7XG4gICAgICAgICAgJG9wdGlvbi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciAkc2VsZWN0ZWQgPSAkb3B0aW9ucy5maWx0ZXIoJ1thcmlhLXNlbGVjdGVkPXRydWVdJyk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgc2VsZWN0ZWQgb3B0aW9uc1xuICAgICAgaWYgKCRzZWxlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0XG4gICAgICAgICRzZWxlY3RlZC5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBzZWxlY3RlZCBvcHRpb25zLCBoaWdobGlnaHQgdGhlIGZpcnN0IG9wdGlvblxuICAgICAgICAvLyBpbiB0aGUgZHJvcGRvd25cbiAgICAgICAgJG9wdGlvbnMuZmlyc3QoKS50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgdmFyIGxvYWRpbmdNb3JlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdzZWFyY2hpbmcnKTtcblxuICAgIHZhciBsb2FkaW5nID0ge1xuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgdGV4dDogbG9hZGluZ01vcmUocGFyYW1zKVxuICAgIH07XG4gICAgdmFyICRsb2FkaW5nID0gdGhpcy5vcHRpb24obG9hZGluZyk7XG4gICAgJGxvYWRpbmcuY2xhc3NOYW1lICs9ICcgbG9hZGluZy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMucHJlcGVuZCgkbG9hZGluZyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5maW5kKCcubG9hZGluZy1yZXN1bHRzJykucmVtb3ZlKCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUub3B0aW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBvcHRpb24uY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uJztcblxuICAgIHZhciBhdHRycyA9IHtcbiAgICAgICdyb2xlJzogJ3RyZWVpdGVtJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJ1xuICAgIH07XG5cbiAgICBpZiAoZGF0YS5kaXNhYmxlZCkge1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgICBhdHRyc1snYXJpYS1kaXNhYmxlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmlkID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBhdHRyc1snYXJpYS1zZWxlY3RlZCddO1xuICAgIH1cblxuICAgIGlmIChkYXRhLl9yZXN1bHRJZCAhPSBudWxsKSB7XG4gICAgICBvcHRpb24uaWQgPSBkYXRhLl9yZXN1bHRJZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgYXR0cnMucm9sZSA9ICdncm91cCc7XG4gICAgICBhdHRyc1snYXJpYS1sYWJlbCddID0gZGF0YS50ZXh0O1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgdmFyIHZhbCA9IGF0dHJzW2F0dHJdO1xuXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICAgIHZhciAkb3B0aW9uID0gJChvcHRpb24pO1xuXG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzZWxlY3QyLXJlc3VsdHNfX2dyb3VwJztcblxuICAgICAgdmFyICRsYWJlbCA9ICQobGFiZWwpO1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBsYWJlbCk7XG5cbiAgICAgIHZhciAkY2hpbGRyZW4gPSBbXTtcblxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBkYXRhLmNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGRhdGEuY2hpbGRyZW5bY107XG5cbiAgICAgICAgdmFyICRjaGlsZCA9IHRoaXMub3B0aW9uKGNoaWxkKTtcblxuICAgICAgICAkY2hpbGRyZW4ucHVzaCgkY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGNoaWxkcmVuQ29udGFpbmVyID0gJCgnPHVsPjwvdWw+Jywge1xuICAgICAgICAnY2xhc3MnOiAnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHNlbGVjdDItcmVzdWx0c19fb3B0aW9ucy0tbmVzdGVkJ1xuICAgICAgfSk7XG5cbiAgICAgICRjaGlsZHJlbkNvbnRhaW5lci5hcHBlbmQoJGNoaWxkcmVuKTtcblxuICAgICAgJG9wdGlvbi5hcHBlbmQobGFiZWwpO1xuICAgICAgJG9wdGlvbi5hcHBlbmQoJGNoaWxkcmVuQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBvcHRpb24pO1xuICAgIH1cblxuICAgICQuZGF0YShvcHRpb24sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1yZXN1bHRzJztcblxuICAgIHRoaXMuJHJlc3VsdHMuYXR0cignaWQnLCBpZCk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5jbGVhcigpO1xuICAgICAgc2VsZi5hcHBlbmQocGFyYW1zLmRhdGEpO1xuXG4gICAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuYXBwZW5kKHBhcmFtcy5kYXRhKTtcblxuICAgICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnNob3dMb2FkaW5nKHBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnNldENsYXNzZXMoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW4sIGFyaWEtZXhwZW5kZWQ9XCJ0cnVlXCJcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgc2VsZi5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkLCBhcmlhLWV4cGVuZGVkPVwiZmFsc2VcIlxuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHJlc3VsdHMucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6dG9nZ2xlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJGhpZ2hsaWdodGVkLnRyaWdnZXIoJ21vdXNldXAnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9ICRoaWdobGlnaHRlZC5kYXRhKCdkYXRhJyk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQuYXR0cignYXJpYS1zZWxlY3RlZCcpID09ICd0cnVlJykge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnByZXZpb3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRoaWdobGlnaHRlZCA9IHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICAgIHZhciAkb3B0aW9ucyA9IHNlbGYuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSAkb3B0aW9ucy5pbmRleCgkaGlnaGxpZ2h0ZWQpO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBhdCB0ZSB0b3AsIGRvbid0IG1vdmUgZnVydGhlclxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuXG4gICAgICAvLyBJZiBub25lIGFyZSBoaWdobGlnaHRlZCwgaGlnaGxpZ2h0IHRoZSBmaXJzdFxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyICRuZXh0ID0gJG9wdGlvbnMuZXEobmV4dEluZGV4KTtcblxuICAgICAgJG5leHQudHJpZ2dlcignbW91c2VlbnRlcicpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHNlbGYuJHJlc3VsdHMub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG5leHRUb3AgPSAkbmV4dC5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgICBpZiAobmV4dEluZGV4ID09PSAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuICAgICAgfSBlbHNlIGlmIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCA8IDApIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bmV4dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgICAgdmFyIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG5cbiAgICAgIC8vIElmIHdlIGFyZSBhdCB0aGUgbGFzdCBvcHRpb24sIHN0YXkgdGhlcmVcbiAgICAgIGlmIChuZXh0SW5kZXggPj0gJG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyICRuZXh0ID0gJG9wdGlvbnMuZXEobmV4dEluZGV4KTtcblxuICAgICAgJG5leHQudHJpZ2dlcignbW91c2VlbnRlcicpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHNlbGYuJHJlc3VsdHMub2Zmc2V0KCkudG9wICtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICB2YXIgbmV4dEJvdHRvbSA9ICRuZXh0Lm9mZnNldCgpLnRvcCArICRuZXh0Lm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICAgIHZhciBuZXh0T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIG5leHRCb3R0b20gLSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICBpZiAobmV4dEluZGV4ID09PSAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xuICAgICAgfSBlbHNlIGlmIChuZXh0Qm90dG9tID4gY3VycmVudE9mZnNldCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChuZXh0T2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5lbGVtZW50LmFkZENsYXNzKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czptZXNzYWdlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5kaXNwbGF5TWVzc2FnZShwYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKCQuZm4ubW91c2V3aGVlbCkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0b3AgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIHZhciBib3R0b20gPSAoXG4gICAgICAgICAgc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpICtcbiAgICAgICAgICBlLmRlbHRhWVxuICAgICAgICApO1xuXG4gICAgICAgIHZhciBpc0F0VG9wID0gZS5kZWx0YVkgPiAwICYmIHRvcCAtIGUuZGVsdGFZIDw9IDA7XG4gICAgICAgIHZhciBpc0F0Qm90dG9tID0gZS5kZWx0YVkgPCAwICYmIGJvdHRvbSA8PSBzZWxmLiRyZXN1bHRzLmhlaWdodCgpO1xuXG4gICAgICAgIGlmIChpc0F0VG9wKSB7XG4gICAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0F0Qm90dG9tKSB7XG4gICAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoXG4gICAgICAgICAgICBzZWxmLiRyZXN1bHRzLmdldCgwKS5zY3JvbGxIZWlnaHQgLSBzZWxmLiRyZXN1bHRzLmhlaWdodCgpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiRyZXN1bHRzLm9uKCdtb3VzZXVwJywgJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICB2YXIgZGF0YSA9ICR0aGlzLmRhdGEoJ2RhdGEnKTtcblxuICAgICAgaWYgKCR0aGlzLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCd1bnNlbGVjdCcsIHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2VlbnRlcicsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoJ2RhdGEnKTtcblxuICAgICAgc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG5cbiAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpmb2N1cycsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZWxlbWVudDogJCh0aGlzKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLiRyZXN1bHRzXG4gICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcblxuICAgIHJldHVybiAkaGlnaGxpZ2h0ZWQ7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLnJlbW92ZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRoaWdobGlnaHRlZCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCk7XG5cbiAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJHJlc3VsdHMuZmluZCgnW2FyaWEtc2VsZWN0ZWRdJyk7XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5vZmZzZXQoKS50b3A7XG4gICAgdmFyIG5leHRUb3AgPSAkaGlnaGxpZ2h0ZWQub2Zmc2V0KCkudG9wO1xuICAgIHZhciBuZXh0T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCk7XG5cbiAgICB2YXIgb2Zmc2V0RGVsdGEgPSBuZXh0VG9wIC0gY3VycmVudE9mZnNldDtcbiAgICBuZXh0T2Zmc2V0IC09ICRoaWdobGlnaHRlZC5vdXRlckhlaWdodChmYWxzZSkgKiAyO1xuXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8PSAyKSB7XG4gICAgICB0aGlzLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICB9IGVsc2UgaWYgKG9mZnNldERlbHRhID4gdGhpcy4kcmVzdWx0cy5vdXRlckhlaWdodCgpIHx8IG9mZnNldERlbHRhIDwgMCkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgfVxuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24gKHJlc3VsdCwgY29udGFpbmVyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLmdldCgndGVtcGxhdGVSZXN1bHQnKTtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICB2YXIgY29udGVudCA9IHRlbXBsYXRlKHJlc3VsdCk7XG5cbiAgICBpZiAoY29udGVudCA9PSBudWxsKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGVzY2FwZU1hcmt1cChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChjb250YWluZXIpLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlc3VsdHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2tleXMnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICB2YXIgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBQQUdFX1VQOiAzMyxcbiAgICBQQUdFX0RPV046IDM0LFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBERUxFVEU6IDQ2XG4gIH07XG5cbiAgcmV0dXJuIEtFWVM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9iYXNlJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBCYXNlU2VsZWN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgQmFzZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlU2VsZWN0aW9uLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25cIiByb2xlPVwiY29tYm9ib3hcIiAnICtcbiAgICAgICdhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHRoaXMuX3RhYmluZGV4ID0gMDtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50LmRhdGEoJ29sZC10YWJpbmRleCcpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3RhYmluZGV4ID0gdGhpcy4kZWxlbWVudC5kYXRhKCdvbGQtdGFiaW5kZXgnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl90YWJpbmRleCA9IHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RpdGxlJywgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpKTtcbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgdGhpcy5fdGFiaW5kZXgpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uID0gJHNlbGVjdGlvbjtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1jb250YWluZXInO1xuICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2JsdXInLCBldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XG5cbiAgICAgIGlmIChldnQud2hpY2ggPT09IEtFWVMuU1BBQ0UpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgcGFyYW1zLmRhdGEuX3Jlc3VsdElkKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0aW9uOnVwZGF0ZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYudXBkYXRlKHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIG9wZW4sIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLW93bnMnLCByZXN1bHRzSWQpO1xuXG4gICAgICBzZWxmLl9hdHRhY2hDbG9zZUhhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBjbG9zZWQsIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoJ2FyaWEtb3ducycpO1xuXG4gICAgICBzZWxmLiRzZWxlY3Rpb24uZm9jdXMoKTtcblxuICAgICAgc2VsZi5fZGV0YWNoQ2xvc2VIYW5kbGVyKGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsIHNlbGYuX3RhYmluZGV4KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZGlzYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgIH0pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9hdHRhY2hDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cbiAgICAgIHZhciAkc2VsZWN0ID0gJHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0MicpO1xuXG4gICAgICB2YXIgJGFsbCA9ICQoJy5zZWxlY3QyLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAgICRhbGwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMgPT0gJHNlbGVjdFswXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkZWxlbWVudCA9ICR0aGlzLmRhdGEoJ2VsZW1lbnQnKTtcblxuICAgICAgICAkZWxlbWVudC5zZWxlY3QyKCdjbG9zZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2RldGFjaENsb3NlSGFuZGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAkKGRvY3VtZW50LmJvZHkpLm9mZignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoJHNlbGVjdGlvbiwgJGNvbnRhaW5lcikge1xuICAgIHZhciAkc2VsZWN0aW9uQ29udGFpbmVyID0gJGNvbnRhaW5lci5maW5kKCcuc2VsZWN0aW9uJyk7XG4gICAgJHNlbGVjdGlvbkNvbnRhaW5lci5hcHBlbmQoJHNlbGVjdGlvbik7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9kZXRhY2hDbG9zZUhhbmRsZXIodGhpcy5jb250YWluZXIpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHVwZGF0ZWAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIHJldHVybiBCYXNlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJyxbXG4gICdqcXVlcnknLFxuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJyxcbiAgJy4uL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgQmFzZVNlbGVjdGlvbiwgVXRpbHMsIEtFWVMpIHtcbiAgZnVuY3Rpb24gU2luZ2xlU2VsZWN0aW9uICgpIHtcbiAgICBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoU2luZ2xlU2VsZWN0aW9uLCBCYXNlU2VsZWN0aW9uKTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHNlbGVjdGlvbiA9IFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7XG5cbiAgICAkc2VsZWN0aW9uLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlJyk7XG5cbiAgICAkc2VsZWN0aW9uLmh0bWwoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3NwYW4+JyArXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3dcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JyArXG4gICAgICAgICc8YiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9iPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctY29udGFpbmVyJztcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykuYXR0cignaWQnLCBpZCk7XG4gICAgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIGlkKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gT25seSByZXNwb25kIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZ0LndoaWNoICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCd0b2dnbGUnLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVXNlciBmb2N1c2VzIG9uIHRoZSBjb250YWluZXJcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3Rpb246dXBkYXRlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi51cGRhdGUocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5lbXB0eSgpO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLmdldCgndGVtcGxhdGVTZWxlY3Rpb24nKTtcbiAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XG5cbiAgICByZXR1cm4gZXNjYXBlTWFya3VwKHRlbXBsYXRlKGRhdGEpKTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJCgnPHNwYW4+PC9zcGFuPicpO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uID0gZGF0YVswXTtcblxuICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uKTtcblxuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgICRyZW5kZXJlZC5lbXB0eSgpLmFwcGVuZChmb3JtYXR0ZWQpO1xuICAgICRyZW5kZXJlZC5wcm9wKCd0aXRsZScsIHNlbGVjdGlvbi50aXRsZSB8fCBzZWxlY3Rpb24udGV4dCk7XG4gIH07XG5cbiAgcmV0dXJuIFNpbmdsZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL211bHRpcGxlJyxbXG4gICdqcXVlcnknLFxuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIEJhc2VTZWxlY3Rpb24sIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIE11bHRpcGxlU2VsZWN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIE11bHRpcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKE11bHRpcGxlU2VsZWN0aW9uLCBCYXNlU2VsZWN0aW9uKTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkc2VsZWN0aW9uID0gTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLnJlbmRlci5jYWxsKHRoaXMpO1xuXG4gICAgJHNlbGVjdGlvbi5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlJyk7XG5cbiAgICAkc2VsZWN0aW9uLmh0bWwoXG4gICAgICAnPHVsIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+PC91bD4nXG4gICAgKTtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIE11bHRpcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCd0b2dnbGUnLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2NsaWNrJywgJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUnLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyICRyZW1vdmUgPSAkKHRoaXMpO1xuICAgICAgdmFyICRzZWxlY3Rpb24gPSAkcmVtb3ZlLnBhcmVudCgpO1xuXG4gICAgICB2YXIgZGF0YSA9ICRzZWxlY3Rpb24uZGF0YSgnZGF0YScpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLmVtcHR5KCk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhKSk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZVwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JyArXG4gICAgICAgICAgJyZ0aW1lczsnICtcbiAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICc8L2xpPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRzZWxlY3Rpb25zID0gJCgpO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gZGF0YVtkXTtcblxuICAgICAgdmFyIGZvcm1hdHRlZCA9IHRoaXMuZGlzcGxheShzZWxlY3Rpb24pO1xuICAgICAgdmFyICRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbkNvbnRhaW5lcigpO1xuXG4gICAgICAkc2VsZWN0aW9uLmFwcGVuZChmb3JtYXR0ZWQpO1xuICAgICAgJHNlbGVjdGlvbi5wcm9wKCd0aXRsZScsIHNlbGVjdGlvbi50aXRsZSB8fCBzZWxlY3Rpb24udGV4dCk7XG5cbiAgICAgICRzZWxlY3Rpb24uZGF0YSgnZGF0YScsIHNlbGVjdGlvbik7XG5cbiAgICAgICRzZWxlY3Rpb25zID0gJHNlbGVjdGlvbnMuYWRkKCRzZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykuYXBwZW5kKCRzZWxlY3Rpb25zKTtcbiAgfTtcblxuICByZXR1cm4gTXVsdGlwbGVTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9wbGFjZWhvbGRlcicsW1xuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoVXRpbHMpIHtcbiAgZnVuY3Rpb24gUGxhY2Vob2xkZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5ub3JtYWxpemVQbGFjZWhvbGRlcihvcHRpb25zLmdldCgncGxhY2Vob2xkZXInKSk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgdmFyICRwbGFjZWhvbGRlciA9IHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7XG5cbiAgICAkcGxhY2Vob2xkZXIuaHRtbCh0aGlzLmRpc3BsYXkocGxhY2Vob2xkZXIpKTtcbiAgICAkcGxhY2Vob2xkZXIuYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlJyk7XG5cbiAgICByZXR1cm4gJHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdmFyIHNpbmdsZVBsYWNlaG9sZGVyID0gKFxuICAgICAgZGF0YS5sZW5ndGggPT0gMSAmJiBkYXRhWzBdLmlkICE9IHRoaXMucGxhY2Vob2xkZXIuaWRcbiAgICApO1xuICAgIHZhciBtdWx0aXBsZVNlbGVjdGlvbnMgPSBkYXRhLmxlbmd0aCA+IDE7XG5cbiAgICBpZiAobXVsdGlwbGVTZWxlY3Rpb25zIHx8IHNpbmdsZVBsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdmFyICRwbGFjZWhvbGRlciA9IHRoaXMuY3JlYXRlUGxhY2Vob2xkZXIodGhpcy5wbGFjZWhvbGRlcik7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLmFwcGVuZCgkcGxhY2Vob2xkZXIpO1xuICB9O1xuXG4gIHJldHVybiBQbGFjZWhvbGRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2FsbG93Q2xlYXInLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIEFsbG93Q2xlYXIgKCkgeyB9XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBpZiAoc2VsZi5wbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgYWxsb3dDbGVhcmAgb3B0aW9uIHNob3VsZCBiZSB1c2VkIGluIGNvbWJpbmF0aW9uICcgK1xuICAgICAgICAgICd3aXRoIHRoZSBgcGxhY2Vob2xkZXJgIG9wdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdtb3VzZWRvd24nLCAnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoJ2RhdGEnKTtcblxuICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgICB2YXIgdW5zZWxlY3REYXRhID0ge1xuICAgICAgICAgICAgZGF0YTogZGF0YVtkXVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBgdW5zZWxlY3RgIGV2ZW50LCBzbyBwZW9wbGUgY2FuIHByZXZlbnQgaXQgZnJvbSBiZWluZ1xuICAgICAgICAgIC8vIGNsZWFyZWQuXG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCd1bnNlbGVjdCcsIHVuc2VsZWN0RGF0YSk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgd2FzIHByZXZlbnRlZCwgZG9uJ3QgY2xlYXIgaXQgb3V0LlxuICAgICAgICAgIGlmICh1bnNlbGVjdERhdGEucHJldmVudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi4kZWxlbWVudC52YWwoc2VsZi5wbGFjZWhvbGRlci5pZCkudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgc2VsZi50cmlnZ2VyKCd0b2dnbGUnKTtcbiAgICB9KTtcbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICBpZiAodGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXInKS5sZW5ndGggPiAwIHx8XG4gICAgICAgIGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRyZW1vdmUgPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyXCI+JyArXG4gICAgICAgICcmdGltZXM7JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuICAgICRyZW1vdmUuZGF0YSgnZGF0YScsIGRhdGEpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5wcmVwZW5kKCRyZW1vdmUpO1xuICB9O1xuXG4gIHJldHVybiBBbGxvd0NsZWFyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vc2VhcmNoJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBTZWFyY2ggKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBTZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJHNlYXJjaCA9ICQoXG4gICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWlubGluZVwiPicgK1xuICAgICAgICAnPGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiLTFcIicgK1xuICAgICAgICAnIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz4nICtcbiAgICAgICc8L2xpPidcbiAgICApO1xuXG4gICAgdGhpcy4kc2VhcmNoQ29udGFpbmVyID0gJHNlYXJjaDtcbiAgICB0aGlzLiRzZWFyY2ggPSAkc2VhcmNoLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICB2YXIgJHJlbmRlcmVkID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XG5cbiAgICByZXR1cm4gJHJlbmRlcmVkO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCAwKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgLTEpO1xuXG4gICAgICBzZWxmLiRzZWFyY2gudmFsKCcnKTtcbiAgICAgIHNlbGYuJHNlYXJjaC5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXNpbicsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1c291dCcsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignYmx1cicsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2tleWRvd24nLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHNlbGYudHJpZ2dlcigna2V5cHJlc3MnLCBldnQpO1xuXG4gICAgICBzZWxmLl9rZXlVcFByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcblxuICAgICAgdmFyIGtleSA9IGV2dC53aGljaDtcblxuICAgICAgaWYgKGtleSA9PT0gS0VZUy5CQUNLU1BBQ0UgJiYgc2VsZi4kc2VhcmNoLnZhbCgpID09PSAnJykge1xuICAgICAgICB2YXIgJHByZXZpb3VzQ2hvaWNlID0gc2VsZi4kc2VhcmNoQ29udGFpbmVyXG4gICAgICAgICAgLnByZXYoJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlJyk7XG5cbiAgICAgICAgaWYgKCRwcmV2aW91c0Nob2ljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSAkcHJldmlvdXNDaG9pY2UuZGF0YSgnZGF0YScpO1xuXG4gICAgICAgICAgc2VsZi5zZWFyY2hSZW1vdmVDaG9pY2UoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdvcmthcm91bmQgZm9yIGJyb3dzZXJzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IHRoZSBgaW5wdXRgIGV2ZW50XG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZG91YmxlLXRyaWdnZXJpbmcgb2YgZXZlbnRzIGZvciBicm93c2VycyB3aGljaCBzdXBwb3J0XG4gICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdpbnB1dCcsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVuYmluZCB0aGUgZHVwbGljYXRlZCBga2V5dXBgIGV2ZW50XG4gICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdrZXl1cC5zZWFyY2gnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbigna2V5dXAuc2VhcmNoIGlucHV0JywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5oYW5kbGVTZWFyY2goZXZ0KTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmNyZWF0ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGxhY2Vob2xkZXIpIHtcbiAgICB0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlci50ZXh0KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICB0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInLCAnJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJylcbiAgICAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuJHNlYXJjaENvbnRhaW5lcik7XG5cbiAgICB0aGlzLnJlc2l6ZVNlYXJjaCgpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzaXplU2VhcmNoKCk7XG5cbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2VhcmNoUmVtb3ZlQ2hvaWNlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgaXRlbSkge1xuICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB7XG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ29wZW4nKTtcblxuICAgIHRoaXMuJHNlYXJjaC52YWwoaXRlbS50ZXh0ICsgJyAnKTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnJlc2l6ZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRzZWFyY2guY3NzKCd3aWR0aCcsICcyNXB4Jyk7XG5cbiAgICB2YXIgd2lkdGggPSAnJztcblxuICAgIGlmICh0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInKSAhPT0gJycpIHtcbiAgICAgIHdpZHRoID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5pbm5lcldpZHRoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtaW5pbXVtV2lkdGggPSB0aGlzLiRzZWFyY2gudmFsKCkubGVuZ3RoICsgMTtcblxuICAgICAgd2lkdGggPSAobWluaW11bVdpZHRoICogMC43NSkgKyAnZW0nO1xuICAgIH1cblxuICAgIHRoaXMuJHNlYXJjaC5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICB9O1xuXG4gIHJldHVybiBTZWFyY2g7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9ldmVudFJlbGF5JyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBFdmVudFJlbGF5ICgpIHsgfVxuXG4gIEV2ZW50UmVsYXkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHJlbGF5RXZlbnRzID0gW1xuICAgICAgJ29wZW4nLCAnb3BlbmluZycsXG4gICAgICAnY2xvc2UnLCAnY2xvc2luZycsXG4gICAgICAnc2VsZWN0JywgJ3NlbGVjdGluZycsXG4gICAgICAndW5zZWxlY3QnLCAndW5zZWxlY3RpbmcnXG4gICAgXTtcblxuICAgIHZhciBwcmV2ZW50YWJsZUV2ZW50cyA9IFsnb3BlbmluZycsICdjbG9zaW5nJywgJ3NlbGVjdGluZycsICd1bnNlbGVjdGluZyddO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIC8vIElnbm9yZSBldmVudHMgdGhhdCBzaG91bGQgbm90IGJlIHJlbGF5ZWRcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgcmVsYXlFdmVudHMpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBwYXJhbWV0ZXJzIHNob3VsZCBhbHdheXMgYmUgYW4gb2JqZWN0XG4gICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICAgIC8vIEdlbmVyYXRlIHRoZSBqUXVlcnkgZXZlbnQgZm9yIHRoZSBTZWxlY3QyIGV2ZW50XG4gICAgICB2YXIgZXZ0ID0gJC5FdmVudCgnc2VsZWN0MjonICsgbmFtZSwge1xuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcihldnQpO1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSBwcmV2ZW50YWJsZSBldmVudHMgaWYgaXQgd2FzIG9uZVxuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCBwcmV2ZW50YWJsZUV2ZW50cykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRXZlbnRSZWxheTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvdHJhbnNsYXRpb24nLFtcbiAgJ2pxdWVyeScsXG4gICdyZXF1aXJlJ1xuXSwgZnVuY3Rpb24gKCQsIHJlcXVpcmUpIHtcbiAgZnVuY3Rpb24gVHJhbnNsYXRpb24gKGRpY3QpIHtcbiAgICB0aGlzLmRpY3QgPSBkaWN0IHx8IHt9O1xuICB9XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaWN0O1xuICB9O1xuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdFtrZXldO1xuICB9O1xuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAodHJhbnNsYXRpb24pIHtcbiAgICB0aGlzLmRpY3QgPSAkLmV4dGVuZCh7fSwgdHJhbnNsYXRpb24uYWxsKCksIHRoaXMuZGljdCk7XG4gIH07XG5cbiAgLy8gU3RhdGljIGZ1bmN0aW9uc1xuXG4gIFRyYW5zbGF0aW9uLl9jYWNoZSA9IHt9O1xuXG4gIFRyYW5zbGF0aW9uLmxvYWRQYXRoID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBpZiAoIShwYXRoIGluIFRyYW5zbGF0aW9uLl9jYWNoZSkpIHtcbiAgICAgIHZhciB0cmFuc2xhdGlvbnMgPSByZXF1aXJlKHBhdGgpO1xuXG4gICAgICBUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0gPSB0cmFuc2xhdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbihUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2xhdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGlhY3JpdGljcycsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBkaWFjcml0aWNzID0ge1xuICAgICdcXHUyNEI2JzogJ0EnLFxuICAgICdcXHVGRjIxJzogJ0EnLFxuICAgICdcXHUwMEMwJzogJ0EnLFxuICAgICdcXHUwMEMxJzogJ0EnLFxuICAgICdcXHUwMEMyJzogJ0EnLFxuICAgICdcXHUxRUE2JzogJ0EnLFxuICAgICdcXHUxRUE0JzogJ0EnLFxuICAgICdcXHUxRUFBJzogJ0EnLFxuICAgICdcXHUxRUE4JzogJ0EnLFxuICAgICdcXHUwMEMzJzogJ0EnLFxuICAgICdcXHUwMTAwJzogJ0EnLFxuICAgICdcXHUwMTAyJzogJ0EnLFxuICAgICdcXHUxRUIwJzogJ0EnLFxuICAgICdcXHUxRUFFJzogJ0EnLFxuICAgICdcXHUxRUI0JzogJ0EnLFxuICAgICdcXHUxRUIyJzogJ0EnLFxuICAgICdcXHUwMjI2JzogJ0EnLFxuICAgICdcXHUwMUUwJzogJ0EnLFxuICAgICdcXHUwMEM0JzogJ0EnLFxuICAgICdcXHUwMURFJzogJ0EnLFxuICAgICdcXHUxRUEyJzogJ0EnLFxuICAgICdcXHUwMEM1JzogJ0EnLFxuICAgICdcXHUwMUZBJzogJ0EnLFxuICAgICdcXHUwMUNEJzogJ0EnLFxuICAgICdcXHUwMjAwJzogJ0EnLFxuICAgICdcXHUwMjAyJzogJ0EnLFxuICAgICdcXHUxRUEwJzogJ0EnLFxuICAgICdcXHUxRUFDJzogJ0EnLFxuICAgICdcXHUxRUI2JzogJ0EnLFxuICAgICdcXHUxRTAwJzogJ0EnLFxuICAgICdcXHUwMTA0JzogJ0EnLFxuICAgICdcXHUwMjNBJzogJ0EnLFxuICAgICdcXHUyQzZGJzogJ0EnLFxuICAgICdcXHVBNzMyJzogJ0FBJyxcbiAgICAnXFx1MDBDNic6ICdBRScsXG4gICAgJ1xcdTAxRkMnOiAnQUUnLFxuICAgICdcXHUwMUUyJzogJ0FFJyxcbiAgICAnXFx1QTczNCc6ICdBTycsXG4gICAgJ1xcdUE3MzYnOiAnQVUnLFxuICAgICdcXHVBNzM4JzogJ0FWJyxcbiAgICAnXFx1QTczQSc6ICdBVicsXG4gICAgJ1xcdUE3M0MnOiAnQVknLFxuICAgICdcXHUyNEI3JzogJ0InLFxuICAgICdcXHVGRjIyJzogJ0InLFxuICAgICdcXHUxRTAyJzogJ0InLFxuICAgICdcXHUxRTA0JzogJ0InLFxuICAgICdcXHUxRTA2JzogJ0InLFxuICAgICdcXHUwMjQzJzogJ0InLFxuICAgICdcXHUwMTgyJzogJ0InLFxuICAgICdcXHUwMTgxJzogJ0InLFxuICAgICdcXHUyNEI4JzogJ0MnLFxuICAgICdcXHVGRjIzJzogJ0MnLFxuICAgICdcXHUwMTA2JzogJ0MnLFxuICAgICdcXHUwMTA4JzogJ0MnLFxuICAgICdcXHUwMTBBJzogJ0MnLFxuICAgICdcXHUwMTBDJzogJ0MnLFxuICAgICdcXHUwMEM3JzogJ0MnLFxuICAgICdcXHUxRTA4JzogJ0MnLFxuICAgICdcXHUwMTg3JzogJ0MnLFxuICAgICdcXHUwMjNCJzogJ0MnLFxuICAgICdcXHVBNzNFJzogJ0MnLFxuICAgICdcXHUyNEI5JzogJ0QnLFxuICAgICdcXHVGRjI0JzogJ0QnLFxuICAgICdcXHUxRTBBJzogJ0QnLFxuICAgICdcXHUwMTBFJzogJ0QnLFxuICAgICdcXHUxRTBDJzogJ0QnLFxuICAgICdcXHUxRTEwJzogJ0QnLFxuICAgICdcXHUxRTEyJzogJ0QnLFxuICAgICdcXHUxRTBFJzogJ0QnLFxuICAgICdcXHUwMTEwJzogJ0QnLFxuICAgICdcXHUwMThCJzogJ0QnLFxuICAgICdcXHUwMThBJzogJ0QnLFxuICAgICdcXHUwMTg5JzogJ0QnLFxuICAgICdcXHVBNzc5JzogJ0QnLFxuICAgICdcXHUwMUYxJzogJ0RaJyxcbiAgICAnXFx1MDFDNCc6ICdEWicsXG4gICAgJ1xcdTAxRjInOiAnRHonLFxuICAgICdcXHUwMUM1JzogJ0R6JyxcbiAgICAnXFx1MjRCQSc6ICdFJyxcbiAgICAnXFx1RkYyNSc6ICdFJyxcbiAgICAnXFx1MDBDOCc6ICdFJyxcbiAgICAnXFx1MDBDOSc6ICdFJyxcbiAgICAnXFx1MDBDQSc6ICdFJyxcbiAgICAnXFx1MUVDMCc6ICdFJyxcbiAgICAnXFx1MUVCRSc6ICdFJyxcbiAgICAnXFx1MUVDNCc6ICdFJyxcbiAgICAnXFx1MUVDMic6ICdFJyxcbiAgICAnXFx1MUVCQyc6ICdFJyxcbiAgICAnXFx1MDExMic6ICdFJyxcbiAgICAnXFx1MUUxNCc6ICdFJyxcbiAgICAnXFx1MUUxNic6ICdFJyxcbiAgICAnXFx1MDExNCc6ICdFJyxcbiAgICAnXFx1MDExNic6ICdFJyxcbiAgICAnXFx1MDBDQic6ICdFJyxcbiAgICAnXFx1MUVCQSc6ICdFJyxcbiAgICAnXFx1MDExQSc6ICdFJyxcbiAgICAnXFx1MDIwNCc6ICdFJyxcbiAgICAnXFx1MDIwNic6ICdFJyxcbiAgICAnXFx1MUVCOCc6ICdFJyxcbiAgICAnXFx1MUVDNic6ICdFJyxcbiAgICAnXFx1MDIyOCc6ICdFJyxcbiAgICAnXFx1MUUxQyc6ICdFJyxcbiAgICAnXFx1MDExOCc6ICdFJyxcbiAgICAnXFx1MUUxOCc6ICdFJyxcbiAgICAnXFx1MUUxQSc6ICdFJyxcbiAgICAnXFx1MDE5MCc6ICdFJyxcbiAgICAnXFx1MDE4RSc6ICdFJyxcbiAgICAnXFx1MjRCQic6ICdGJyxcbiAgICAnXFx1RkYyNic6ICdGJyxcbiAgICAnXFx1MUUxRSc6ICdGJyxcbiAgICAnXFx1MDE5MSc6ICdGJyxcbiAgICAnXFx1QTc3Qic6ICdGJyxcbiAgICAnXFx1MjRCQyc6ICdHJyxcbiAgICAnXFx1RkYyNyc6ICdHJyxcbiAgICAnXFx1MDFGNCc6ICdHJyxcbiAgICAnXFx1MDExQyc6ICdHJyxcbiAgICAnXFx1MUUyMCc6ICdHJyxcbiAgICAnXFx1MDExRSc6ICdHJyxcbiAgICAnXFx1MDEyMCc6ICdHJyxcbiAgICAnXFx1MDFFNic6ICdHJyxcbiAgICAnXFx1MDEyMic6ICdHJyxcbiAgICAnXFx1MDFFNCc6ICdHJyxcbiAgICAnXFx1MDE5Myc6ICdHJyxcbiAgICAnXFx1QTdBMCc6ICdHJyxcbiAgICAnXFx1QTc3RCc6ICdHJyxcbiAgICAnXFx1QTc3RSc6ICdHJyxcbiAgICAnXFx1MjRCRCc6ICdIJyxcbiAgICAnXFx1RkYyOCc6ICdIJyxcbiAgICAnXFx1MDEyNCc6ICdIJyxcbiAgICAnXFx1MUUyMic6ICdIJyxcbiAgICAnXFx1MUUyNic6ICdIJyxcbiAgICAnXFx1MDIxRSc6ICdIJyxcbiAgICAnXFx1MUUyNCc6ICdIJyxcbiAgICAnXFx1MUUyOCc6ICdIJyxcbiAgICAnXFx1MUUyQSc6ICdIJyxcbiAgICAnXFx1MDEyNic6ICdIJyxcbiAgICAnXFx1MkM2Nyc6ICdIJyxcbiAgICAnXFx1MkM3NSc6ICdIJyxcbiAgICAnXFx1QTc4RCc6ICdIJyxcbiAgICAnXFx1MjRCRSc6ICdJJyxcbiAgICAnXFx1RkYyOSc6ICdJJyxcbiAgICAnXFx1MDBDQyc6ICdJJyxcbiAgICAnXFx1MDBDRCc6ICdJJyxcbiAgICAnXFx1MDBDRSc6ICdJJyxcbiAgICAnXFx1MDEyOCc6ICdJJyxcbiAgICAnXFx1MDEyQSc6ICdJJyxcbiAgICAnXFx1MDEyQyc6ICdJJyxcbiAgICAnXFx1MDEzMCc6ICdJJyxcbiAgICAnXFx1MDBDRic6ICdJJyxcbiAgICAnXFx1MUUyRSc6ICdJJyxcbiAgICAnXFx1MUVDOCc6ICdJJyxcbiAgICAnXFx1MDFDRic6ICdJJyxcbiAgICAnXFx1MDIwOCc6ICdJJyxcbiAgICAnXFx1MDIwQSc6ICdJJyxcbiAgICAnXFx1MUVDQSc6ICdJJyxcbiAgICAnXFx1MDEyRSc6ICdJJyxcbiAgICAnXFx1MUUyQyc6ICdJJyxcbiAgICAnXFx1MDE5Nyc6ICdJJyxcbiAgICAnXFx1MjRCRic6ICdKJyxcbiAgICAnXFx1RkYyQSc6ICdKJyxcbiAgICAnXFx1MDEzNCc6ICdKJyxcbiAgICAnXFx1MDI0OCc6ICdKJyxcbiAgICAnXFx1MjRDMCc6ICdLJyxcbiAgICAnXFx1RkYyQic6ICdLJyxcbiAgICAnXFx1MUUzMCc6ICdLJyxcbiAgICAnXFx1MDFFOCc6ICdLJyxcbiAgICAnXFx1MUUzMic6ICdLJyxcbiAgICAnXFx1MDEzNic6ICdLJyxcbiAgICAnXFx1MUUzNCc6ICdLJyxcbiAgICAnXFx1MDE5OCc6ICdLJyxcbiAgICAnXFx1MkM2OSc6ICdLJyxcbiAgICAnXFx1QTc0MCc6ICdLJyxcbiAgICAnXFx1QTc0Mic6ICdLJyxcbiAgICAnXFx1QTc0NCc6ICdLJyxcbiAgICAnXFx1QTdBMic6ICdLJyxcbiAgICAnXFx1MjRDMSc6ICdMJyxcbiAgICAnXFx1RkYyQyc6ICdMJyxcbiAgICAnXFx1MDEzRic6ICdMJyxcbiAgICAnXFx1MDEzOSc6ICdMJyxcbiAgICAnXFx1MDEzRCc6ICdMJyxcbiAgICAnXFx1MUUzNic6ICdMJyxcbiAgICAnXFx1MUUzOCc6ICdMJyxcbiAgICAnXFx1MDEzQic6ICdMJyxcbiAgICAnXFx1MUUzQyc6ICdMJyxcbiAgICAnXFx1MUUzQSc6ICdMJyxcbiAgICAnXFx1MDE0MSc6ICdMJyxcbiAgICAnXFx1MDIzRCc6ICdMJyxcbiAgICAnXFx1MkM2Mic6ICdMJyxcbiAgICAnXFx1MkM2MCc6ICdMJyxcbiAgICAnXFx1QTc0OCc6ICdMJyxcbiAgICAnXFx1QTc0Nic6ICdMJyxcbiAgICAnXFx1QTc4MCc6ICdMJyxcbiAgICAnXFx1MDFDNyc6ICdMSicsXG4gICAgJ1xcdTAxQzgnOiAnTGonLFxuICAgICdcXHUyNEMyJzogJ00nLFxuICAgICdcXHVGRjJEJzogJ00nLFxuICAgICdcXHUxRTNFJzogJ00nLFxuICAgICdcXHUxRTQwJzogJ00nLFxuICAgICdcXHUxRTQyJzogJ00nLFxuICAgICdcXHUyQzZFJzogJ00nLFxuICAgICdcXHUwMTlDJzogJ00nLFxuICAgICdcXHUyNEMzJzogJ04nLFxuICAgICdcXHVGRjJFJzogJ04nLFxuICAgICdcXHUwMUY4JzogJ04nLFxuICAgICdcXHUwMTQzJzogJ04nLFxuICAgICdcXHUwMEQxJzogJ04nLFxuICAgICdcXHUxRTQ0JzogJ04nLFxuICAgICdcXHUwMTQ3JzogJ04nLFxuICAgICdcXHUxRTQ2JzogJ04nLFxuICAgICdcXHUwMTQ1JzogJ04nLFxuICAgICdcXHUxRTRBJzogJ04nLFxuICAgICdcXHUxRTQ4JzogJ04nLFxuICAgICdcXHUwMjIwJzogJ04nLFxuICAgICdcXHUwMTlEJzogJ04nLFxuICAgICdcXHVBNzkwJzogJ04nLFxuICAgICdcXHVBN0E0JzogJ04nLFxuICAgICdcXHUwMUNBJzogJ05KJyxcbiAgICAnXFx1MDFDQic6ICdOaicsXG4gICAgJ1xcdTI0QzQnOiAnTycsXG4gICAgJ1xcdUZGMkYnOiAnTycsXG4gICAgJ1xcdTAwRDInOiAnTycsXG4gICAgJ1xcdTAwRDMnOiAnTycsXG4gICAgJ1xcdTAwRDQnOiAnTycsXG4gICAgJ1xcdTFFRDInOiAnTycsXG4gICAgJ1xcdTFFRDAnOiAnTycsXG4gICAgJ1xcdTFFRDYnOiAnTycsXG4gICAgJ1xcdTFFRDQnOiAnTycsXG4gICAgJ1xcdTAwRDUnOiAnTycsXG4gICAgJ1xcdTFFNEMnOiAnTycsXG4gICAgJ1xcdTAyMkMnOiAnTycsXG4gICAgJ1xcdTFFNEUnOiAnTycsXG4gICAgJ1xcdTAxNEMnOiAnTycsXG4gICAgJ1xcdTFFNTAnOiAnTycsXG4gICAgJ1xcdTFFNTInOiAnTycsXG4gICAgJ1xcdTAxNEUnOiAnTycsXG4gICAgJ1xcdTAyMkUnOiAnTycsXG4gICAgJ1xcdTAyMzAnOiAnTycsXG4gICAgJ1xcdTAwRDYnOiAnTycsXG4gICAgJ1xcdTAyMkEnOiAnTycsXG4gICAgJ1xcdTFFQ0UnOiAnTycsXG4gICAgJ1xcdTAxNTAnOiAnTycsXG4gICAgJ1xcdTAxRDEnOiAnTycsXG4gICAgJ1xcdTAyMEMnOiAnTycsXG4gICAgJ1xcdTAyMEUnOiAnTycsXG4gICAgJ1xcdTAxQTAnOiAnTycsXG4gICAgJ1xcdTFFREMnOiAnTycsXG4gICAgJ1xcdTFFREEnOiAnTycsXG4gICAgJ1xcdTFFRTAnOiAnTycsXG4gICAgJ1xcdTFFREUnOiAnTycsXG4gICAgJ1xcdTFFRTInOiAnTycsXG4gICAgJ1xcdTFFQ0MnOiAnTycsXG4gICAgJ1xcdTFFRDgnOiAnTycsXG4gICAgJ1xcdTAxRUEnOiAnTycsXG4gICAgJ1xcdTAxRUMnOiAnTycsXG4gICAgJ1xcdTAwRDgnOiAnTycsXG4gICAgJ1xcdTAxRkUnOiAnTycsXG4gICAgJ1xcdTAxODYnOiAnTycsXG4gICAgJ1xcdTAxOUYnOiAnTycsXG4gICAgJ1xcdUE3NEEnOiAnTycsXG4gICAgJ1xcdUE3NEMnOiAnTycsXG4gICAgJ1xcdTAxQTInOiAnT0knLFxuICAgICdcXHVBNzRFJzogJ09PJyxcbiAgICAnXFx1MDIyMic6ICdPVScsXG4gICAgJ1xcdTI0QzUnOiAnUCcsXG4gICAgJ1xcdUZGMzAnOiAnUCcsXG4gICAgJ1xcdTFFNTQnOiAnUCcsXG4gICAgJ1xcdTFFNTYnOiAnUCcsXG4gICAgJ1xcdTAxQTQnOiAnUCcsXG4gICAgJ1xcdTJDNjMnOiAnUCcsXG4gICAgJ1xcdUE3NTAnOiAnUCcsXG4gICAgJ1xcdUE3NTInOiAnUCcsXG4gICAgJ1xcdUE3NTQnOiAnUCcsXG4gICAgJ1xcdTI0QzYnOiAnUScsXG4gICAgJ1xcdUZGMzEnOiAnUScsXG4gICAgJ1xcdUE3NTYnOiAnUScsXG4gICAgJ1xcdUE3NTgnOiAnUScsXG4gICAgJ1xcdTAyNEEnOiAnUScsXG4gICAgJ1xcdTI0QzcnOiAnUicsXG4gICAgJ1xcdUZGMzInOiAnUicsXG4gICAgJ1xcdTAxNTQnOiAnUicsXG4gICAgJ1xcdTFFNTgnOiAnUicsXG4gICAgJ1xcdTAxNTgnOiAnUicsXG4gICAgJ1xcdTAyMTAnOiAnUicsXG4gICAgJ1xcdTAyMTInOiAnUicsXG4gICAgJ1xcdTFFNUEnOiAnUicsXG4gICAgJ1xcdTFFNUMnOiAnUicsXG4gICAgJ1xcdTAxNTYnOiAnUicsXG4gICAgJ1xcdTFFNUUnOiAnUicsXG4gICAgJ1xcdTAyNEMnOiAnUicsXG4gICAgJ1xcdTJDNjQnOiAnUicsXG4gICAgJ1xcdUE3NUEnOiAnUicsXG4gICAgJ1xcdUE3QTYnOiAnUicsXG4gICAgJ1xcdUE3ODInOiAnUicsXG4gICAgJ1xcdTI0QzgnOiAnUycsXG4gICAgJ1xcdUZGMzMnOiAnUycsXG4gICAgJ1xcdTFFOUUnOiAnUycsXG4gICAgJ1xcdTAxNUEnOiAnUycsXG4gICAgJ1xcdTFFNjQnOiAnUycsXG4gICAgJ1xcdTAxNUMnOiAnUycsXG4gICAgJ1xcdTFFNjAnOiAnUycsXG4gICAgJ1xcdTAxNjAnOiAnUycsXG4gICAgJ1xcdTFFNjYnOiAnUycsXG4gICAgJ1xcdTFFNjInOiAnUycsXG4gICAgJ1xcdTFFNjgnOiAnUycsXG4gICAgJ1xcdTAyMTgnOiAnUycsXG4gICAgJ1xcdTAxNUUnOiAnUycsXG4gICAgJ1xcdTJDN0UnOiAnUycsXG4gICAgJ1xcdUE3QTgnOiAnUycsXG4gICAgJ1xcdUE3ODQnOiAnUycsXG4gICAgJ1xcdTI0QzknOiAnVCcsXG4gICAgJ1xcdUZGMzQnOiAnVCcsXG4gICAgJ1xcdTFFNkEnOiAnVCcsXG4gICAgJ1xcdTAxNjQnOiAnVCcsXG4gICAgJ1xcdTFFNkMnOiAnVCcsXG4gICAgJ1xcdTAyMUEnOiAnVCcsXG4gICAgJ1xcdTAxNjInOiAnVCcsXG4gICAgJ1xcdTFFNzAnOiAnVCcsXG4gICAgJ1xcdTFFNkUnOiAnVCcsXG4gICAgJ1xcdTAxNjYnOiAnVCcsXG4gICAgJ1xcdTAxQUMnOiAnVCcsXG4gICAgJ1xcdTAxQUUnOiAnVCcsXG4gICAgJ1xcdTAyM0UnOiAnVCcsXG4gICAgJ1xcdUE3ODYnOiAnVCcsXG4gICAgJ1xcdUE3MjgnOiAnVFonLFxuICAgICdcXHUyNENBJzogJ1UnLFxuICAgICdcXHVGRjM1JzogJ1UnLFxuICAgICdcXHUwMEQ5JzogJ1UnLFxuICAgICdcXHUwMERBJzogJ1UnLFxuICAgICdcXHUwMERCJzogJ1UnLFxuICAgICdcXHUwMTY4JzogJ1UnLFxuICAgICdcXHUxRTc4JzogJ1UnLFxuICAgICdcXHUwMTZBJzogJ1UnLFxuICAgICdcXHUxRTdBJzogJ1UnLFxuICAgICdcXHUwMTZDJzogJ1UnLFxuICAgICdcXHUwMERDJzogJ1UnLFxuICAgICdcXHUwMURCJzogJ1UnLFxuICAgICdcXHUwMUQ3JzogJ1UnLFxuICAgICdcXHUwMUQ1JzogJ1UnLFxuICAgICdcXHUwMUQ5JzogJ1UnLFxuICAgICdcXHUxRUU2JzogJ1UnLFxuICAgICdcXHUwMTZFJzogJ1UnLFxuICAgICdcXHUwMTcwJzogJ1UnLFxuICAgICdcXHUwMUQzJzogJ1UnLFxuICAgICdcXHUwMjE0JzogJ1UnLFxuICAgICdcXHUwMjE2JzogJ1UnLFxuICAgICdcXHUwMUFGJzogJ1UnLFxuICAgICdcXHUxRUVBJzogJ1UnLFxuICAgICdcXHUxRUU4JzogJ1UnLFxuICAgICdcXHUxRUVFJzogJ1UnLFxuICAgICdcXHUxRUVDJzogJ1UnLFxuICAgICdcXHUxRUYwJzogJ1UnLFxuICAgICdcXHUxRUU0JzogJ1UnLFxuICAgICdcXHUxRTcyJzogJ1UnLFxuICAgICdcXHUwMTcyJzogJ1UnLFxuICAgICdcXHUxRTc2JzogJ1UnLFxuICAgICdcXHUxRTc0JzogJ1UnLFxuICAgICdcXHUwMjQ0JzogJ1UnLFxuICAgICdcXHUyNENCJzogJ1YnLFxuICAgICdcXHVGRjM2JzogJ1YnLFxuICAgICdcXHUxRTdDJzogJ1YnLFxuICAgICdcXHUxRTdFJzogJ1YnLFxuICAgICdcXHUwMUIyJzogJ1YnLFxuICAgICdcXHVBNzVFJzogJ1YnLFxuICAgICdcXHUwMjQ1JzogJ1YnLFxuICAgICdcXHVBNzYwJzogJ1ZZJyxcbiAgICAnXFx1MjRDQyc6ICdXJyxcbiAgICAnXFx1RkYzNyc6ICdXJyxcbiAgICAnXFx1MUU4MCc6ICdXJyxcbiAgICAnXFx1MUU4Mic6ICdXJyxcbiAgICAnXFx1MDE3NCc6ICdXJyxcbiAgICAnXFx1MUU4Nic6ICdXJyxcbiAgICAnXFx1MUU4NCc6ICdXJyxcbiAgICAnXFx1MUU4OCc6ICdXJyxcbiAgICAnXFx1MkM3Mic6ICdXJyxcbiAgICAnXFx1MjRDRCc6ICdYJyxcbiAgICAnXFx1RkYzOCc6ICdYJyxcbiAgICAnXFx1MUU4QSc6ICdYJyxcbiAgICAnXFx1MUU4Qyc6ICdYJyxcbiAgICAnXFx1MjRDRSc6ICdZJyxcbiAgICAnXFx1RkYzOSc6ICdZJyxcbiAgICAnXFx1MUVGMic6ICdZJyxcbiAgICAnXFx1MDBERCc6ICdZJyxcbiAgICAnXFx1MDE3Nic6ICdZJyxcbiAgICAnXFx1MUVGOCc6ICdZJyxcbiAgICAnXFx1MDIzMic6ICdZJyxcbiAgICAnXFx1MUU4RSc6ICdZJyxcbiAgICAnXFx1MDE3OCc6ICdZJyxcbiAgICAnXFx1MUVGNic6ICdZJyxcbiAgICAnXFx1MUVGNCc6ICdZJyxcbiAgICAnXFx1MDFCMyc6ICdZJyxcbiAgICAnXFx1MDI0RSc6ICdZJyxcbiAgICAnXFx1MUVGRSc6ICdZJyxcbiAgICAnXFx1MjRDRic6ICdaJyxcbiAgICAnXFx1RkYzQSc6ICdaJyxcbiAgICAnXFx1MDE3OSc6ICdaJyxcbiAgICAnXFx1MUU5MCc6ICdaJyxcbiAgICAnXFx1MDE3Qic6ICdaJyxcbiAgICAnXFx1MDE3RCc6ICdaJyxcbiAgICAnXFx1MUU5Mic6ICdaJyxcbiAgICAnXFx1MUU5NCc6ICdaJyxcbiAgICAnXFx1MDFCNSc6ICdaJyxcbiAgICAnXFx1MDIyNCc6ICdaJyxcbiAgICAnXFx1MkM3Ric6ICdaJyxcbiAgICAnXFx1MkM2Qic6ICdaJyxcbiAgICAnXFx1QTc2Mic6ICdaJyxcbiAgICAnXFx1MjREMCc6ICdhJyxcbiAgICAnXFx1RkY0MSc6ICdhJyxcbiAgICAnXFx1MUU5QSc6ICdhJyxcbiAgICAnXFx1MDBFMCc6ICdhJyxcbiAgICAnXFx1MDBFMSc6ICdhJyxcbiAgICAnXFx1MDBFMic6ICdhJyxcbiAgICAnXFx1MUVBNyc6ICdhJyxcbiAgICAnXFx1MUVBNSc6ICdhJyxcbiAgICAnXFx1MUVBQic6ICdhJyxcbiAgICAnXFx1MUVBOSc6ICdhJyxcbiAgICAnXFx1MDBFMyc6ICdhJyxcbiAgICAnXFx1MDEwMSc6ICdhJyxcbiAgICAnXFx1MDEwMyc6ICdhJyxcbiAgICAnXFx1MUVCMSc6ICdhJyxcbiAgICAnXFx1MUVBRic6ICdhJyxcbiAgICAnXFx1MUVCNSc6ICdhJyxcbiAgICAnXFx1MUVCMyc6ICdhJyxcbiAgICAnXFx1MDIyNyc6ICdhJyxcbiAgICAnXFx1MDFFMSc6ICdhJyxcbiAgICAnXFx1MDBFNCc6ICdhJyxcbiAgICAnXFx1MDFERic6ICdhJyxcbiAgICAnXFx1MUVBMyc6ICdhJyxcbiAgICAnXFx1MDBFNSc6ICdhJyxcbiAgICAnXFx1MDFGQic6ICdhJyxcbiAgICAnXFx1MDFDRSc6ICdhJyxcbiAgICAnXFx1MDIwMSc6ICdhJyxcbiAgICAnXFx1MDIwMyc6ICdhJyxcbiAgICAnXFx1MUVBMSc6ICdhJyxcbiAgICAnXFx1MUVBRCc6ICdhJyxcbiAgICAnXFx1MUVCNyc6ICdhJyxcbiAgICAnXFx1MUUwMSc6ICdhJyxcbiAgICAnXFx1MDEwNSc6ICdhJyxcbiAgICAnXFx1MkM2NSc6ICdhJyxcbiAgICAnXFx1MDI1MCc6ICdhJyxcbiAgICAnXFx1QTczMyc6ICdhYScsXG4gICAgJ1xcdTAwRTYnOiAnYWUnLFxuICAgICdcXHUwMUZEJzogJ2FlJyxcbiAgICAnXFx1MDFFMyc6ICdhZScsXG4gICAgJ1xcdUE3MzUnOiAnYW8nLFxuICAgICdcXHVBNzM3JzogJ2F1JyxcbiAgICAnXFx1QTczOSc6ICdhdicsXG4gICAgJ1xcdUE3M0InOiAnYXYnLFxuICAgICdcXHVBNzNEJzogJ2F5JyxcbiAgICAnXFx1MjREMSc6ICdiJyxcbiAgICAnXFx1RkY0Mic6ICdiJyxcbiAgICAnXFx1MUUwMyc6ICdiJyxcbiAgICAnXFx1MUUwNSc6ICdiJyxcbiAgICAnXFx1MUUwNyc6ICdiJyxcbiAgICAnXFx1MDE4MCc6ICdiJyxcbiAgICAnXFx1MDE4Myc6ICdiJyxcbiAgICAnXFx1MDI1Myc6ICdiJyxcbiAgICAnXFx1MjREMic6ICdjJyxcbiAgICAnXFx1RkY0Myc6ICdjJyxcbiAgICAnXFx1MDEwNyc6ICdjJyxcbiAgICAnXFx1MDEwOSc6ICdjJyxcbiAgICAnXFx1MDEwQic6ICdjJyxcbiAgICAnXFx1MDEwRCc6ICdjJyxcbiAgICAnXFx1MDBFNyc6ICdjJyxcbiAgICAnXFx1MUUwOSc6ICdjJyxcbiAgICAnXFx1MDE4OCc6ICdjJyxcbiAgICAnXFx1MDIzQyc6ICdjJyxcbiAgICAnXFx1QTczRic6ICdjJyxcbiAgICAnXFx1MjE4NCc6ICdjJyxcbiAgICAnXFx1MjREMyc6ICdkJyxcbiAgICAnXFx1RkY0NCc6ICdkJyxcbiAgICAnXFx1MUUwQic6ICdkJyxcbiAgICAnXFx1MDEwRic6ICdkJyxcbiAgICAnXFx1MUUwRCc6ICdkJyxcbiAgICAnXFx1MUUxMSc6ICdkJyxcbiAgICAnXFx1MUUxMyc6ICdkJyxcbiAgICAnXFx1MUUwRic6ICdkJyxcbiAgICAnXFx1MDExMSc6ICdkJyxcbiAgICAnXFx1MDE4Qyc6ICdkJyxcbiAgICAnXFx1MDI1Nic6ICdkJyxcbiAgICAnXFx1MDI1Nyc6ICdkJyxcbiAgICAnXFx1QTc3QSc6ICdkJyxcbiAgICAnXFx1MDFGMyc6ICdkeicsXG4gICAgJ1xcdTAxQzYnOiAnZHonLFxuICAgICdcXHUyNEQ0JzogJ2UnLFxuICAgICdcXHVGRjQ1JzogJ2UnLFxuICAgICdcXHUwMEU4JzogJ2UnLFxuICAgICdcXHUwMEU5JzogJ2UnLFxuICAgICdcXHUwMEVBJzogJ2UnLFxuICAgICdcXHUxRUMxJzogJ2UnLFxuICAgICdcXHUxRUJGJzogJ2UnLFxuICAgICdcXHUxRUM1JzogJ2UnLFxuICAgICdcXHUxRUMzJzogJ2UnLFxuICAgICdcXHUxRUJEJzogJ2UnLFxuICAgICdcXHUwMTEzJzogJ2UnLFxuICAgICdcXHUxRTE1JzogJ2UnLFxuICAgICdcXHUxRTE3JzogJ2UnLFxuICAgICdcXHUwMTE1JzogJ2UnLFxuICAgICdcXHUwMTE3JzogJ2UnLFxuICAgICdcXHUwMEVCJzogJ2UnLFxuICAgICdcXHUxRUJCJzogJ2UnLFxuICAgICdcXHUwMTFCJzogJ2UnLFxuICAgICdcXHUwMjA1JzogJ2UnLFxuICAgICdcXHUwMjA3JzogJ2UnLFxuICAgICdcXHUxRUI5JzogJ2UnLFxuICAgICdcXHUxRUM3JzogJ2UnLFxuICAgICdcXHUwMjI5JzogJ2UnLFxuICAgICdcXHUxRTFEJzogJ2UnLFxuICAgICdcXHUwMTE5JzogJ2UnLFxuICAgICdcXHUxRTE5JzogJ2UnLFxuICAgICdcXHUxRTFCJzogJ2UnLFxuICAgICdcXHUwMjQ3JzogJ2UnLFxuICAgICdcXHUwMjVCJzogJ2UnLFxuICAgICdcXHUwMUREJzogJ2UnLFxuICAgICdcXHUyNEQ1JzogJ2YnLFxuICAgICdcXHVGRjQ2JzogJ2YnLFxuICAgICdcXHUxRTFGJzogJ2YnLFxuICAgICdcXHUwMTkyJzogJ2YnLFxuICAgICdcXHVBNzdDJzogJ2YnLFxuICAgICdcXHUyNEQ2JzogJ2cnLFxuICAgICdcXHVGRjQ3JzogJ2cnLFxuICAgICdcXHUwMUY1JzogJ2cnLFxuICAgICdcXHUwMTFEJzogJ2cnLFxuICAgICdcXHUxRTIxJzogJ2cnLFxuICAgICdcXHUwMTFGJzogJ2cnLFxuICAgICdcXHUwMTIxJzogJ2cnLFxuICAgICdcXHUwMUU3JzogJ2cnLFxuICAgICdcXHUwMTIzJzogJ2cnLFxuICAgICdcXHUwMUU1JzogJ2cnLFxuICAgICdcXHUwMjYwJzogJ2cnLFxuICAgICdcXHVBN0ExJzogJ2cnLFxuICAgICdcXHUxRDc5JzogJ2cnLFxuICAgICdcXHVBNzdGJzogJ2cnLFxuICAgICdcXHUyNEQ3JzogJ2gnLFxuICAgICdcXHVGRjQ4JzogJ2gnLFxuICAgICdcXHUwMTI1JzogJ2gnLFxuICAgICdcXHUxRTIzJzogJ2gnLFxuICAgICdcXHUxRTI3JzogJ2gnLFxuICAgICdcXHUwMjFGJzogJ2gnLFxuICAgICdcXHUxRTI1JzogJ2gnLFxuICAgICdcXHUxRTI5JzogJ2gnLFxuICAgICdcXHUxRTJCJzogJ2gnLFxuICAgICdcXHUxRTk2JzogJ2gnLFxuICAgICdcXHUwMTI3JzogJ2gnLFxuICAgICdcXHUyQzY4JzogJ2gnLFxuICAgICdcXHUyQzc2JzogJ2gnLFxuICAgICdcXHUwMjY1JzogJ2gnLFxuICAgICdcXHUwMTk1JzogJ2h2JyxcbiAgICAnXFx1MjREOCc6ICdpJyxcbiAgICAnXFx1RkY0OSc6ICdpJyxcbiAgICAnXFx1MDBFQyc6ICdpJyxcbiAgICAnXFx1MDBFRCc6ICdpJyxcbiAgICAnXFx1MDBFRSc6ICdpJyxcbiAgICAnXFx1MDEyOSc6ICdpJyxcbiAgICAnXFx1MDEyQic6ICdpJyxcbiAgICAnXFx1MDEyRCc6ICdpJyxcbiAgICAnXFx1MDBFRic6ICdpJyxcbiAgICAnXFx1MUUyRic6ICdpJyxcbiAgICAnXFx1MUVDOSc6ICdpJyxcbiAgICAnXFx1MDFEMCc6ICdpJyxcbiAgICAnXFx1MDIwOSc6ICdpJyxcbiAgICAnXFx1MDIwQic6ICdpJyxcbiAgICAnXFx1MUVDQic6ICdpJyxcbiAgICAnXFx1MDEyRic6ICdpJyxcbiAgICAnXFx1MUUyRCc6ICdpJyxcbiAgICAnXFx1MDI2OCc6ICdpJyxcbiAgICAnXFx1MDEzMSc6ICdpJyxcbiAgICAnXFx1MjREOSc6ICdqJyxcbiAgICAnXFx1RkY0QSc6ICdqJyxcbiAgICAnXFx1MDEzNSc6ICdqJyxcbiAgICAnXFx1MDFGMCc6ICdqJyxcbiAgICAnXFx1MDI0OSc6ICdqJyxcbiAgICAnXFx1MjREQSc6ICdrJyxcbiAgICAnXFx1RkY0Qic6ICdrJyxcbiAgICAnXFx1MUUzMSc6ICdrJyxcbiAgICAnXFx1MDFFOSc6ICdrJyxcbiAgICAnXFx1MUUzMyc6ICdrJyxcbiAgICAnXFx1MDEzNyc6ICdrJyxcbiAgICAnXFx1MUUzNSc6ICdrJyxcbiAgICAnXFx1MDE5OSc6ICdrJyxcbiAgICAnXFx1MkM2QSc6ICdrJyxcbiAgICAnXFx1QTc0MSc6ICdrJyxcbiAgICAnXFx1QTc0Myc6ICdrJyxcbiAgICAnXFx1QTc0NSc6ICdrJyxcbiAgICAnXFx1QTdBMyc6ICdrJyxcbiAgICAnXFx1MjREQic6ICdsJyxcbiAgICAnXFx1RkY0Qyc6ICdsJyxcbiAgICAnXFx1MDE0MCc6ICdsJyxcbiAgICAnXFx1MDEzQSc6ICdsJyxcbiAgICAnXFx1MDEzRSc6ICdsJyxcbiAgICAnXFx1MUUzNyc6ICdsJyxcbiAgICAnXFx1MUUzOSc6ICdsJyxcbiAgICAnXFx1MDEzQyc6ICdsJyxcbiAgICAnXFx1MUUzRCc6ICdsJyxcbiAgICAnXFx1MUUzQic6ICdsJyxcbiAgICAnXFx1MDE3Ric6ICdsJyxcbiAgICAnXFx1MDE0Mic6ICdsJyxcbiAgICAnXFx1MDE5QSc6ICdsJyxcbiAgICAnXFx1MDI2Qic6ICdsJyxcbiAgICAnXFx1MkM2MSc6ICdsJyxcbiAgICAnXFx1QTc0OSc6ICdsJyxcbiAgICAnXFx1QTc4MSc6ICdsJyxcbiAgICAnXFx1QTc0Nyc6ICdsJyxcbiAgICAnXFx1MDFDOSc6ICdsaicsXG4gICAgJ1xcdTI0REMnOiAnbScsXG4gICAgJ1xcdUZGNEQnOiAnbScsXG4gICAgJ1xcdTFFM0YnOiAnbScsXG4gICAgJ1xcdTFFNDEnOiAnbScsXG4gICAgJ1xcdTFFNDMnOiAnbScsXG4gICAgJ1xcdTAyNzEnOiAnbScsXG4gICAgJ1xcdTAyNkYnOiAnbScsXG4gICAgJ1xcdTI0REQnOiAnbicsXG4gICAgJ1xcdUZGNEUnOiAnbicsXG4gICAgJ1xcdTAxRjknOiAnbicsXG4gICAgJ1xcdTAxNDQnOiAnbicsXG4gICAgJ1xcdTAwRjEnOiAnbicsXG4gICAgJ1xcdTFFNDUnOiAnbicsXG4gICAgJ1xcdTAxNDgnOiAnbicsXG4gICAgJ1xcdTFFNDcnOiAnbicsXG4gICAgJ1xcdTAxNDYnOiAnbicsXG4gICAgJ1xcdTFFNEInOiAnbicsXG4gICAgJ1xcdTFFNDknOiAnbicsXG4gICAgJ1xcdTAxOUUnOiAnbicsXG4gICAgJ1xcdTAyNzInOiAnbicsXG4gICAgJ1xcdTAxNDknOiAnbicsXG4gICAgJ1xcdUE3OTEnOiAnbicsXG4gICAgJ1xcdUE3QTUnOiAnbicsXG4gICAgJ1xcdTAxQ0MnOiAnbmonLFxuICAgICdcXHUyNERFJzogJ28nLFxuICAgICdcXHVGRjRGJzogJ28nLFxuICAgICdcXHUwMEYyJzogJ28nLFxuICAgICdcXHUwMEYzJzogJ28nLFxuICAgICdcXHUwMEY0JzogJ28nLFxuICAgICdcXHUxRUQzJzogJ28nLFxuICAgICdcXHUxRUQxJzogJ28nLFxuICAgICdcXHUxRUQ3JzogJ28nLFxuICAgICdcXHUxRUQ1JzogJ28nLFxuICAgICdcXHUwMEY1JzogJ28nLFxuICAgICdcXHUxRTREJzogJ28nLFxuICAgICdcXHUwMjJEJzogJ28nLFxuICAgICdcXHUxRTRGJzogJ28nLFxuICAgICdcXHUwMTREJzogJ28nLFxuICAgICdcXHUxRTUxJzogJ28nLFxuICAgICdcXHUxRTUzJzogJ28nLFxuICAgICdcXHUwMTRGJzogJ28nLFxuICAgICdcXHUwMjJGJzogJ28nLFxuICAgICdcXHUwMjMxJzogJ28nLFxuICAgICdcXHUwMEY2JzogJ28nLFxuICAgICdcXHUwMjJCJzogJ28nLFxuICAgICdcXHUxRUNGJzogJ28nLFxuICAgICdcXHUwMTUxJzogJ28nLFxuICAgICdcXHUwMUQyJzogJ28nLFxuICAgICdcXHUwMjBEJzogJ28nLFxuICAgICdcXHUwMjBGJzogJ28nLFxuICAgICdcXHUwMUExJzogJ28nLFxuICAgICdcXHUxRUREJzogJ28nLFxuICAgICdcXHUxRURCJzogJ28nLFxuICAgICdcXHUxRUUxJzogJ28nLFxuICAgICdcXHUxRURGJzogJ28nLFxuICAgICdcXHUxRUUzJzogJ28nLFxuICAgICdcXHUxRUNEJzogJ28nLFxuICAgICdcXHUxRUQ5JzogJ28nLFxuICAgICdcXHUwMUVCJzogJ28nLFxuICAgICdcXHUwMUVEJzogJ28nLFxuICAgICdcXHUwMEY4JzogJ28nLFxuICAgICdcXHUwMUZGJzogJ28nLFxuICAgICdcXHUwMjU0JzogJ28nLFxuICAgICdcXHVBNzRCJzogJ28nLFxuICAgICdcXHVBNzREJzogJ28nLFxuICAgICdcXHUwMjc1JzogJ28nLFxuICAgICdcXHUwMUEzJzogJ29pJyxcbiAgICAnXFx1MDIyMyc6ICdvdScsXG4gICAgJ1xcdUE3NEYnOiAnb28nLFxuICAgICdcXHUyNERGJzogJ3AnLFxuICAgICdcXHVGRjUwJzogJ3AnLFxuICAgICdcXHUxRTU1JzogJ3AnLFxuICAgICdcXHUxRTU3JzogJ3AnLFxuICAgICdcXHUwMUE1JzogJ3AnLFxuICAgICdcXHUxRDdEJzogJ3AnLFxuICAgICdcXHVBNzUxJzogJ3AnLFxuICAgICdcXHVBNzUzJzogJ3AnLFxuICAgICdcXHVBNzU1JzogJ3AnLFxuICAgICdcXHUyNEUwJzogJ3EnLFxuICAgICdcXHVGRjUxJzogJ3EnLFxuICAgICdcXHUwMjRCJzogJ3EnLFxuICAgICdcXHVBNzU3JzogJ3EnLFxuICAgICdcXHVBNzU5JzogJ3EnLFxuICAgICdcXHUyNEUxJzogJ3InLFxuICAgICdcXHVGRjUyJzogJ3InLFxuICAgICdcXHUwMTU1JzogJ3InLFxuICAgICdcXHUxRTU5JzogJ3InLFxuICAgICdcXHUwMTU5JzogJ3InLFxuICAgICdcXHUwMjExJzogJ3InLFxuICAgICdcXHUwMjEzJzogJ3InLFxuICAgICdcXHUxRTVCJzogJ3InLFxuICAgICdcXHUxRTVEJzogJ3InLFxuICAgICdcXHUwMTU3JzogJ3InLFxuICAgICdcXHUxRTVGJzogJ3InLFxuICAgICdcXHUwMjREJzogJ3InLFxuICAgICdcXHUwMjdEJzogJ3InLFxuICAgICdcXHVBNzVCJzogJ3InLFxuICAgICdcXHVBN0E3JzogJ3InLFxuICAgICdcXHVBNzgzJzogJ3InLFxuICAgICdcXHUyNEUyJzogJ3MnLFxuICAgICdcXHVGRjUzJzogJ3MnLFxuICAgICdcXHUwMERGJzogJ3MnLFxuICAgICdcXHUwMTVCJzogJ3MnLFxuICAgICdcXHUxRTY1JzogJ3MnLFxuICAgICdcXHUwMTVEJzogJ3MnLFxuICAgICdcXHUxRTYxJzogJ3MnLFxuICAgICdcXHUwMTYxJzogJ3MnLFxuICAgICdcXHUxRTY3JzogJ3MnLFxuICAgICdcXHUxRTYzJzogJ3MnLFxuICAgICdcXHUxRTY5JzogJ3MnLFxuICAgICdcXHUwMjE5JzogJ3MnLFxuICAgICdcXHUwMTVGJzogJ3MnLFxuICAgICdcXHUwMjNGJzogJ3MnLFxuICAgICdcXHVBN0E5JzogJ3MnLFxuICAgICdcXHVBNzg1JzogJ3MnLFxuICAgICdcXHUxRTlCJzogJ3MnLFxuICAgICdcXHUyNEUzJzogJ3QnLFxuICAgICdcXHVGRjU0JzogJ3QnLFxuICAgICdcXHUxRTZCJzogJ3QnLFxuICAgICdcXHUxRTk3JzogJ3QnLFxuICAgICdcXHUwMTY1JzogJ3QnLFxuICAgICdcXHUxRTZEJzogJ3QnLFxuICAgICdcXHUwMjFCJzogJ3QnLFxuICAgICdcXHUwMTYzJzogJ3QnLFxuICAgICdcXHUxRTcxJzogJ3QnLFxuICAgICdcXHUxRTZGJzogJ3QnLFxuICAgICdcXHUwMTY3JzogJ3QnLFxuICAgICdcXHUwMUFEJzogJ3QnLFxuICAgICdcXHUwMjg4JzogJ3QnLFxuICAgICdcXHUyQzY2JzogJ3QnLFxuICAgICdcXHVBNzg3JzogJ3QnLFxuICAgICdcXHVBNzI5JzogJ3R6JyxcbiAgICAnXFx1MjRFNCc6ICd1JyxcbiAgICAnXFx1RkY1NSc6ICd1JyxcbiAgICAnXFx1MDBGOSc6ICd1JyxcbiAgICAnXFx1MDBGQSc6ICd1JyxcbiAgICAnXFx1MDBGQic6ICd1JyxcbiAgICAnXFx1MDE2OSc6ICd1JyxcbiAgICAnXFx1MUU3OSc6ICd1JyxcbiAgICAnXFx1MDE2Qic6ICd1JyxcbiAgICAnXFx1MUU3Qic6ICd1JyxcbiAgICAnXFx1MDE2RCc6ICd1JyxcbiAgICAnXFx1MDBGQyc6ICd1JyxcbiAgICAnXFx1MDFEQyc6ICd1JyxcbiAgICAnXFx1MDFEOCc6ICd1JyxcbiAgICAnXFx1MDFENic6ICd1JyxcbiAgICAnXFx1MDFEQSc6ICd1JyxcbiAgICAnXFx1MUVFNyc6ICd1JyxcbiAgICAnXFx1MDE2Ric6ICd1JyxcbiAgICAnXFx1MDE3MSc6ICd1JyxcbiAgICAnXFx1MDFENCc6ICd1JyxcbiAgICAnXFx1MDIxNSc6ICd1JyxcbiAgICAnXFx1MDIxNyc6ICd1JyxcbiAgICAnXFx1MDFCMCc6ICd1JyxcbiAgICAnXFx1MUVFQic6ICd1JyxcbiAgICAnXFx1MUVFOSc6ICd1JyxcbiAgICAnXFx1MUVFRic6ICd1JyxcbiAgICAnXFx1MUVFRCc6ICd1JyxcbiAgICAnXFx1MUVGMSc6ICd1JyxcbiAgICAnXFx1MUVFNSc6ICd1JyxcbiAgICAnXFx1MUU3Myc6ICd1JyxcbiAgICAnXFx1MDE3Myc6ICd1JyxcbiAgICAnXFx1MUU3Nyc6ICd1JyxcbiAgICAnXFx1MUU3NSc6ICd1JyxcbiAgICAnXFx1MDI4OSc6ICd1JyxcbiAgICAnXFx1MjRFNSc6ICd2JyxcbiAgICAnXFx1RkY1Nic6ICd2JyxcbiAgICAnXFx1MUU3RCc6ICd2JyxcbiAgICAnXFx1MUU3Ric6ICd2JyxcbiAgICAnXFx1MDI4Qic6ICd2JyxcbiAgICAnXFx1QTc1Ric6ICd2JyxcbiAgICAnXFx1MDI4Qyc6ICd2JyxcbiAgICAnXFx1QTc2MSc6ICd2eScsXG4gICAgJ1xcdTI0RTYnOiAndycsXG4gICAgJ1xcdUZGNTcnOiAndycsXG4gICAgJ1xcdTFFODEnOiAndycsXG4gICAgJ1xcdTFFODMnOiAndycsXG4gICAgJ1xcdTAxNzUnOiAndycsXG4gICAgJ1xcdTFFODcnOiAndycsXG4gICAgJ1xcdTFFODUnOiAndycsXG4gICAgJ1xcdTFFOTgnOiAndycsXG4gICAgJ1xcdTFFODknOiAndycsXG4gICAgJ1xcdTJDNzMnOiAndycsXG4gICAgJ1xcdTI0RTcnOiAneCcsXG4gICAgJ1xcdUZGNTgnOiAneCcsXG4gICAgJ1xcdTFFOEInOiAneCcsXG4gICAgJ1xcdTFFOEQnOiAneCcsXG4gICAgJ1xcdTI0RTgnOiAneScsXG4gICAgJ1xcdUZGNTknOiAneScsXG4gICAgJ1xcdTFFRjMnOiAneScsXG4gICAgJ1xcdTAwRkQnOiAneScsXG4gICAgJ1xcdTAxNzcnOiAneScsXG4gICAgJ1xcdTFFRjknOiAneScsXG4gICAgJ1xcdTAyMzMnOiAneScsXG4gICAgJ1xcdTFFOEYnOiAneScsXG4gICAgJ1xcdTAwRkYnOiAneScsXG4gICAgJ1xcdTFFRjcnOiAneScsXG4gICAgJ1xcdTFFOTknOiAneScsXG4gICAgJ1xcdTFFRjUnOiAneScsXG4gICAgJ1xcdTAxQjQnOiAneScsXG4gICAgJ1xcdTAyNEYnOiAneScsXG4gICAgJ1xcdTFFRkYnOiAneScsXG4gICAgJ1xcdTI0RTknOiAneicsXG4gICAgJ1xcdUZGNUEnOiAneicsXG4gICAgJ1xcdTAxN0EnOiAneicsXG4gICAgJ1xcdTFFOTEnOiAneicsXG4gICAgJ1xcdTAxN0MnOiAneicsXG4gICAgJ1xcdTAxN0UnOiAneicsXG4gICAgJ1xcdTFFOTMnOiAneicsXG4gICAgJ1xcdTFFOTUnOiAneicsXG4gICAgJ1xcdTAxQjYnOiAneicsXG4gICAgJ1xcdTAyMjUnOiAneicsXG4gICAgJ1xcdTAyNDAnOiAneicsXG4gICAgJ1xcdTJDNkMnOiAneicsXG4gICAgJ1xcdUE3NjMnOiAneicsXG4gICAgJ1xcdTAzODYnOiAnXFx1MDM5MScsXG4gICAgJ1xcdTAzODgnOiAnXFx1MDM5NScsXG4gICAgJ1xcdTAzODknOiAnXFx1MDM5NycsXG4gICAgJ1xcdTAzOEEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzQUEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzOEMnOiAnXFx1MDM5RicsXG4gICAgJ1xcdTAzOEUnOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzQUInOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzOEYnOiAnXFx1MDNBOScsXG4gICAgJ1xcdTAzQUMnOiAnXFx1MDNCMScsXG4gICAgJ1xcdTAzQUQnOiAnXFx1MDNCNScsXG4gICAgJ1xcdTAzQUUnOiAnXFx1MDNCNycsXG4gICAgJ1xcdTAzQUYnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0EnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzOTAnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0MnOiAnXFx1MDNCRicsXG4gICAgJ1xcdTAzQ0QnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQ0InOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQjAnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQzknOiAnXFx1MDNDOScsXG4gICAgJ1xcdTAzQzInOiAnXFx1MDNDMydcbiAgfTtcblxuICByZXR1cm4gZGlhY3JpdGljcztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9iYXNlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBCYXNlQWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBCYXNlQWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlQWRhcHRlciwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3VycmVudGAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHF1ZXJ5YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2FuIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5nZW5lcmF0ZVJlc3VsdElkID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0LSc7XG5cbiAgICBpZCArPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuXG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgaWQgKz0gJy0nICsgZGF0YS5pZC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLScgKyBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3NlbGVjdCcsW1xuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChCYXNlQWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gU2VsZWN0QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFNlbGVjdEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoU2VsZWN0QWRhcHRlciwgQmFzZUFkYXB0ZXIpO1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIGRhdGEucHVzaChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soZGF0YSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBJZiBkYXRhLmVsZW1lbnQgaXMgYSBET00gbm9zZSwgdXNlIGl0IGluc3RlYWRcbiAgICBpZiAoJChkYXRhLmVsZW1lbnQpLmlzKCdvcHRpb24nKSkge1xuICAgICAgZGF0YS5lbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiRlbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcbiAgICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgdmFyIHZhbCA9IFtdO1xuXG4gICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICAgIGRhdGEucHVzaC5hcHBseShkYXRhLCBjdXJyZW50RGF0YSk7XG5cbiAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gZGF0YVtkXS5pZDtcblxuICAgICAgICAgIGlmICgkLmluQXJyYXkoaWQsIHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICB2YWwucHVzaChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi4kZWxlbWVudC52YWwodmFsKTtcbiAgICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsID0gZGF0YS5pZDtcblxuICAgICAgdGhpcy4kZWxlbWVudC52YWwodmFsKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLnVuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuJGVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgkKGRhdGEuZWxlbWVudCkuaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgIHZhciB2YWwgPSBbXTtcblxuICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBjdXJyZW50RGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgICB2YXIgaWQgPSBjdXJyZW50RGF0YVtkXS5pZDtcblxuICAgICAgICBpZiAoaWQgIT09IGRhdGEuaWQgJiYgJC5pbkFycmF5KGlkLCB2YWwpID09PSAtMSkge1xuICAgICAgICAgIHZhbC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLiRlbGVtZW50LnZhbCh2YWwpO1xuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLnVuc2VsZWN0KHBhcmFtcy5kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSBhbnl0aGluZyBhZGRlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnKicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBjdXN0b20gZGF0YSBzZXQgYnkgU2VsZWN0MlxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMsICdkYXRhJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHZhciBkYXRhID0gW107XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbigpO1xuXG4gICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIGlmICghJG9wdGlvbi5pcygnb3B0aW9uJykgJiYgISRvcHRpb24uaXMoJ29wdGdyb3VwJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9uID0gc2VsZi5pdGVtKCRvcHRpb24pO1xuXG4gICAgICB2YXIgbWF0Y2hlcyA9IHNlbGYubWF0Y2hlcyhwYXJhbXMsIG9wdGlvbik7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaChtYXRjaGVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKHtcbiAgICAgIHJlc3VsdHM6IGRhdGFcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5hZGRPcHRpb25zID0gZnVuY3Rpb24gKCRvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJG9wdGlvbnMpO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIG9wdGlvbjtcblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuICAgICAgb3B0aW9uLmxhYmVsID0gZGF0YS50ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRhLnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGRhdGEuaWQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZGlzYWJsZWQpIHtcbiAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VsZWN0ZWQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudGl0bGUpIHtcbiAgICAgIG9wdGlvbi50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgdmFyICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICB2YXIgbm9ybWFsaXplZERhdGEgPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuICAgIG5vcm1hbGl6ZWREYXRhLmVsZW1lbnQgPSBvcHRpb247XG5cbiAgICAvLyBPdmVycmlkZSB0aGUgb3B0aW9uJ3MgZGF0YSB3aXRoIHRoZSBjb21iaW5lZCBkYXRhXG4gICAgJC5kYXRhKG9wdGlvbiwgJ2RhdGEnLCBub3JtYWxpemVkRGF0YSk7XG5cbiAgICByZXR1cm4gJG9wdGlvbjtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24gKCRvcHRpb24pIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZGF0YSA9ICQuZGF0YSgkb3B0aW9uWzBdLCAnZGF0YScpO1xuXG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCRvcHRpb24uaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogJG9wdGlvbi52YWwoKSxcbiAgICAgICAgdGV4dDogJG9wdGlvbi50ZXh0KCksXG4gICAgICAgIGRpc2FibGVkOiAkb3B0aW9uLnByb3AoJ2Rpc2FibGVkJyksXG4gICAgICAgIHNlbGVjdGVkOiAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJyksXG4gICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgkb3B0aW9uLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0ZXh0OiAkb3B0aW9uLnByb3AoJ2xhYmVsJyksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgdGl0bGU6ICRvcHRpb24ucHJvcCgndGl0bGUnKVxuICAgICAgfTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9ICRvcHRpb24uY2hpbGRyZW4oJ29wdGlvbicpO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgJGNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciAkY2hpbGQgPSAkKCRjaGlsZHJlbltjXSk7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5pdGVtKCRjaGlsZCk7XG5cbiAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICBkYXRhID0gdGhpcy5fbm9ybWFsaXplSXRlbShkYXRhKTtcbiAgICBkYXRhLmVsZW1lbnQgPSAkb3B0aW9uWzBdO1xuXG4gICAgJC5kYXRhKCRvcHRpb25bMF0sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5fbm9ybWFsaXplSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKCEkLmlzUGxhaW5PYmplY3QoaXRlbSkpIHtcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIGlkOiBpdGVtLFxuICAgICAgICB0ZXh0OiBpdGVtXG4gICAgICB9O1xuICAgIH1cblxuICAgIGl0ZW0gPSAkLmV4dGVuZCh7fSwge1xuICAgICAgdGV4dDogJydcbiAgICB9LCBpdGVtKTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAoaXRlbS5pZCAhPSBudWxsKSB7XG4gICAgICBpdGVtLmlkID0gaXRlbS5pZC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChpdGVtLnRleHQgIT0gbnVsbCkge1xuICAgICAgaXRlbS50ZXh0ID0gaXRlbS50ZXh0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0uX3Jlc3VsdElkID09IG51bGwgJiYgaXRlbS5pZCAmJiB0aGlzLmNvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBpdGVtLl9yZXN1bHRJZCA9IHRoaXMuZ2VuZXJhdGVSZXN1bHRJZCh0aGlzLmNvbnRhaW5lciwgaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgaXRlbSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChwYXJhbXMsIGRhdGEpIHtcbiAgICB2YXIgbWF0Y2hlciA9IHRoaXMub3B0aW9ucy5nZXQoJ21hdGNoZXInKTtcblxuICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdEFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYXJyYXknLFtcbiAgJy4vc2VsZWN0JyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChTZWxlY3RBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBBcnJheUFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGRhdGEgPSBvcHRpb25zLmdldCgnZGF0YScpIHx8IFtdO1xuXG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcblxuICAgIHRoaXMuYWRkT3B0aW9ucyh0aGlzLmNvbnZlcnRUb09wdGlvbnMoZGF0YSkpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKEFycmF5QWRhcHRlciwgU2VsZWN0QWRhcHRlcik7XG5cbiAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciAkb3B0aW9uID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb25bdmFsdWU9XCInICsgZGF0YS5pZCArICdcIl0nKTtcblxuICAgIGlmICgkb3B0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGRhdGEpO1xuXG4gICAgICB0aGlzLmFkZE9wdGlvbnMoJG9wdGlvbik7XG4gICAgfVxuXG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5zZWxlY3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLmNvbnZlcnRUb09wdGlvbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkZXhpc3RpbmcgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpO1xuICAgIHZhciBleGlzdGluZ0lkcyA9ICRleGlzdGluZy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlbGYuaXRlbSgkKHRoaXMpKS5pZDtcbiAgICB9KS5nZXQoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9ICQoKTtcblxuICAgIC8vIEZpbHRlciBvdXQgYWxsIGl0ZW1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFyZ3VtZW50XG4gICAgZnVuY3Rpb24gb25seUl0ZW0gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLnZhbCgpID09IGl0ZW0uaWQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGFbZF0pO1xuXG4gICAgICAvLyBTa2lwIGl0ZW1zIHdoaWNoIHdlcmUgcHJlLWxvYWRlZCwgb25seSBtZXJnZSB0aGUgZGF0YVxuICAgICAgaWYgKCQuaW5BcnJheShpdGVtLmlkLCBleGlzdGluZ0lkcykgPj0gMCkge1xuICAgICAgICB2YXIgJGV4aXN0aW5nT3B0aW9uID0gJGV4aXN0aW5nLmZpbHRlcihvbmx5SXRlbShpdGVtKSk7XG5cbiAgICAgICAgdmFyIGV4aXN0aW5nRGF0YSA9IHRoaXMuaXRlbSgkZXhpc3RpbmdPcHRpb24pO1xuICAgICAgICB2YXIgbmV3RGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCBleGlzdGluZ0RhdGEsIGl0ZW0pO1xuXG4gICAgICAgIHZhciAkbmV3T3B0aW9uID0gdGhpcy5vcHRpb24oZXhpc3RpbmdEYXRhKTtcblxuICAgICAgICAkZXhpc3RpbmdPcHRpb24ucmVwbGFjZVdpdGgoJG5ld09wdGlvbik7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIHZhciAkY2hpbGRyZW4gPSB0aGlzLmNvbnZlcnRUb09wdGlvbnMoaXRlbS5jaGlsZHJlbik7XG5cbiAgICAgICAgJG9wdGlvbi5hcHBlbmQoJGNoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgJG9wdGlvbnMgPSAkb3B0aW9ucy5hZGQoJG9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuICRvcHRpb25zO1xuICB9O1xuXG4gIHJldHVybiBBcnJheUFkYXB0ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvYWpheCcsW1xuICAnLi9hcnJheScsXG4gICcuLi91dGlscycsXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoQXJyYXlBZGFwdGVyLCBVdGlscywgJCkge1xuICBmdW5jdGlvbiBBamF4QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmFqYXhPcHRpb25zID0gdGhpcy5fYXBwbHlEZWZhdWx0cyhvcHRpb25zLmdldCgnYWpheCcpKTtcblxuICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMucHJvY2Vzc1Jlc3VsdHMgPSB0aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzO1xuICAgIH1cblxuICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLl9hcHBseURlZmF1bHRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcTogcGFyYW1zLnRlcm1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB0cmFuc3BvcnQ6IGZ1bmN0aW9uIChwYXJhbXMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICAgICAgdmFyICRyZXF1ZXN0ID0gJC5hamF4KHBhcmFtcyk7XG5cbiAgICAgICAgJHJlcXVlc3QudGhlbihzdWNjZXNzKTtcbiAgICAgICAgJHJlcXVlc3QuZmFpbChmYWlsdXJlKTtcblxuICAgICAgICByZXR1cm4gJHJlcXVlc3Q7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHRydWUpO1xuICB9O1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5wcm9jZXNzUmVzdWx0cyA9IGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9yZXF1ZXN0KSB7XG4gICAgICB0aGlzLl9yZXF1ZXN0LmFib3J0KCk7XG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIHR5cGU6ICdHRVQnXG4gICAgfSwgdGhpcy5hamF4T3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IG9wdGlvbnMuZGF0YShwYXJhbXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3QgKCkge1xuICAgICAgdmFyICRyZXF1ZXN0ID0gb3B0aW9ucy50cmFuc3BvcnQob3B0aW9ucywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBzZWxmLnByb2Nlc3NSZXN1bHRzKGRhdGEsIHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSByZXNwb25zZSBpbmNsdWRlZCBhIGByZXN1bHRzYCBrZXkuXG4gICAgICAgICAgaWYgKCFyZXN1bHRzIHx8ICFyZXN1bHRzLnJlc3VsdHMgfHwgISQuaXNBcnJheShyZXN1bHRzLnJlc3VsdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIEFKQVggcmVzdWx0cyBkaWQgbm90IHJldHVybiBhbiBhcnJheSBpbiB0aGUgJyArXG4gICAgICAgICAgICAgICdgcmVzdWx0c2Aga2V5IG9mIHRoZSByZXNwb25zZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgQUpBWCBlcnJvcnNcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLl9yZXF1ZXN0ID0gJHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgJiYgcGFyYW1zLnRlcm0gIT09ICcnKSB7XG4gICAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVxdWVzdCwgdGhpcy5hamF4T3B0aW9ucy5kZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEFqYXhBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3RhZ3MnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIGZ1bmN0aW9uIFRhZ3MgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGFncyA9IG9wdGlvbnMuZ2V0KCd0YWdzJyk7XG5cbiAgICB2YXIgY3JlYXRlVGFnID0gb3B0aW9ucy5nZXQoJ2NyZWF0ZVRhZycpO1xuXG4gICAgaWYgKGNyZWF0ZVRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNyZWF0ZVRhZyA9IGNyZWF0ZVRhZztcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBpZiAoJC5pc0FycmF5KHRhZ3MpKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRhZ3MubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgdmFyIHRhZyA9IHRhZ3NbdF07XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbSh0YWcpO1xuXG4gICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgVGFncy5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5fcmVtb3ZlT2xkVGFncygpO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwgfHwgcGFyYW1zLnBhZ2UgIT0gbnVsbCkge1xuICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JhcHBlciAob2JqLCBjaGlsZCkge1xuICAgICAgdmFyIGRhdGEgPSBvYmoucmVzdWx0cztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkYXRhW2ldO1xuXG4gICAgICAgIHZhciBjaGVja0NoaWxkcmVuID0gKFxuICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbiAhPSBudWxsICYmXG4gICAgICAgICAgIXdyYXBwZXIoe1xuICAgICAgICAgICAgcmVzdWx0czogb3B0aW9uLmNoaWxkcmVuXG4gICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgKTtcblxuICAgICAgICB2YXIgY2hlY2tUZXh0ID0gb3B0aW9uLnRleHQgPT09IHBhcmFtcy50ZXJtO1xuXG4gICAgICAgIGlmIChjaGVja1RleHQgfHwgY2hlY2tDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9iai5kYXRhID0gZGF0YTtcbiAgICAgICAgICBjYWxsYmFjayhvYmopO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZyA9IHNlbGYuY3JlYXRlVGFnKHBhcmFtcyk7XG5cbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xuICAgICAgICB2YXIgJG9wdGlvbiA9IHNlbGYub3B0aW9uKHRhZyk7XG4gICAgICAgICRvcHRpb24uYXR0cignZGF0YS1zZWxlY3QyLXRhZycsIHRydWUpO1xuXG4gICAgICAgIHNlbGYuYWRkT3B0aW9ucygkb3B0aW9uKTtcblxuICAgICAgICBzZWxmLmluc2VydFRhZyhkYXRhLCB0YWcpO1xuICAgICAgfVxuXG4gICAgICBvYmoucmVzdWx0cyA9IGRhdGE7XG5cbiAgICAgIGNhbGxiYWNrKG9iaik7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCB3cmFwcGVyKTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5jcmVhdGVUYWcgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMpIHtcbiAgICB2YXIgdGVybSA9ICQudHJpbShwYXJhbXMudGVybSk7XG5cbiAgICBpZiAodGVybSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogdGVybSxcbiAgICAgIHRleHQ6IHRlcm1cbiAgICB9O1xuICB9O1xuXG4gIFRhZ3MucHJvdG90eXBlLmluc2VydFRhZyA9IGZ1bmN0aW9uIChfLCBkYXRhLCB0YWcpIHtcbiAgICBkYXRhLnVuc2hpZnQodGFnKTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5fcmVtb3ZlT2xkVGFncyA9IGZ1bmN0aW9uIChfKSB7XG4gICAgdmFyIHRhZyA9IHRoaXMuX2xhc3RUYWc7XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbltkYXRhLXNlbGVjdDItdGFnXScpO1xuXG4gICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFRhZ3M7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvdG9rZW5pemVyJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBUb2tlbml6ZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdG9rZW5pemVyID0gb3B0aW9ucy5nZXQoJ3Rva2VuaXplcicpO1xuXG4gICAgaWYgKHRva2VuaXplciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBUb2tlbml6ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgdGhpcy4kc2VhcmNoID0gIGNvbnRhaW5lci5kcm9wZG93bi4kc2VhcmNoIHx8IGNvbnRhaW5lci5zZWxlY3Rpb24uJHNlYXJjaCB8fFxuICAgICAgJGNvbnRhaW5lci5maW5kKCcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJyk7XG4gIH07XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBzZWxlY3QgKGRhdGEpIHtcbiAgICAgIHNlbGYuc2VsZWN0KGRhdGEpO1xuICAgIH1cblxuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICB2YXIgdG9rZW5EYXRhID0gdGhpcy50b2tlbml6ZXIocGFyYW1zLCB0aGlzLm9wdGlvbnMsIHNlbGVjdCk7XG5cbiAgICBpZiAodG9rZW5EYXRhLnRlcm0gIT09IHBhcmFtcy50ZXJtKSB7XG4gICAgICAvLyBSZXBsYWNlIHRoZSBzZWFyY2ggdGVybSBpZiB3ZSBoYXZlIHRoZSBzZWFyY2ggYm94XG4gICAgICBpZiAodGhpcy4kc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICB0aGlzLiRzZWFyY2gudmFsKHRva2VuRGF0YS50ZXJtKTtcbiAgICAgICAgdGhpcy4kc2VhcmNoLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy50ZXJtID0gdG9rZW5EYXRhLnRlcm07XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS50b2tlbml6ZXIgPSBmdW5jdGlvbiAoXywgcGFyYW1zLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZXBhcmF0b3JzID0gb3B0aW9ucy5nZXQoJ3Rva2VuU2VwYXJhdG9ycycpIHx8IFtdO1xuICAgIHZhciB0ZXJtID0gcGFyYW1zLnRlcm07XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IHRoaXMuY3JlYXRlVGFnIHx8IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwYXJhbXMudGVybSxcbiAgICAgICAgdGV4dDogcGFyYW1zLnRlcm1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHdoaWxlIChpIDwgdGVybS5sZW5ndGgpIHtcbiAgICAgIHZhciB0ZXJtQ2hhciA9IHRlcm1baV07XG5cbiAgICAgIGlmICgkLmluQXJyYXkodGVybUNoYXIsIHNlcGFyYXRvcnMpID09PSAtMSkge1xuICAgICAgICBpKys7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJ0ID0gdGVybS5zdWJzdHIoMCwgaSk7XG4gICAgICB2YXIgcGFydFBhcmFtcyA9ICQuZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgdGVybTogcGFydFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBkYXRhID0gY3JlYXRlVGFnKHBhcnRQYXJhbXMpO1xuXG4gICAgICBjYWxsYmFjayhkYXRhKTtcblxuICAgICAgLy8gUmVzZXQgdGhlIHRlcm0gdG8gbm90IGluY2x1ZGUgdGhlIHRva2VuaXplZCBwb3J0aW9uXG4gICAgICB0ZXJtID0gdGVybS5zdWJzdHIoaSArIDEpIHx8ICcnO1xuICAgICAgaSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRlcm06IHRlcm1cbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBUb2tlbml6ZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaW11bUlucHV0TGVuZ3RoIChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5taW5pbXVtSW5wdXRMZW5ndGggPSBvcHRpb25zLmdldCgnbWluaW11bUlucHV0TGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNaW5pbXVtSW5wdXRMZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgIHBhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm0gfHwgJyc7XG5cbiAgICBpZiAocGFyYW1zLnRlcm0ubGVuZ3RoIDwgdGhpcy5taW5pbXVtSW5wdXRMZW5ndGgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICBtZXNzYWdlOiAnaW5wdXRUb29TaG9ydCcsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBtaW5pbXVtOiB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCxcbiAgICAgICAgICBpbnB1dDogcGFyYW1zLnRlcm0sXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICByZXR1cm4gTWluaW11bUlucHV0TGVuZ3RoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21heGltdW1JbnB1dExlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1heGltdW1JbnB1dExlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWF4aW11bUlucHV0TGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21heGltdW1JbnB1dExlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWF4aW11bUlucHV0TGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICBwYXJhbXMudGVybSA9IHBhcmFtcy50ZXJtIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMubWF4aW11bUlucHV0TGVuZ3RoID4gMCAmJlxuICAgICAgICBwYXJhbXMudGVybS5sZW5ndGggPiB0aGlzLm1heGltdW1JbnB1dExlbmd0aCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgIG1lc3NhZ2U6ICdpbnB1dFRvb0xvbmcnLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgbWF4aW11bTogdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGgsXG4gICAgICAgICAgaW5wdXQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgcmV0dXJuIE1heGltdW1JbnB1dExlbmd0aDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJyxbXG5cbl0sIGZ1bmN0aW9uICgpe1xuICBmdW5jdGlvbiBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21heGltdW1TZWxlY3Rpb25MZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1heGltdW1TZWxlY3Rpb25MZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID1cbiAgICBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gY3VycmVudERhdGEgIT0gbnVsbCA/IGN1cnJlbnREYXRhLmxlbmd0aCA6IDA7XG4gICAgICAgIGlmIChzZWxmLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPiAwICYmXG4gICAgICAgICAgY291bnQgPj0gc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnbWF4aW11bVNlbGVjdGVkJyxcbiAgICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICAgbWF4aW11bTogc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlY29yYXRlZC5jYWxsKHNlbGYsIHBhcmFtcywgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1heGltdW1TZWxlY3Rpb25MZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duJyxbXG4gICdqcXVlcnknLFxuICAnLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBEcm9wZG93biAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIERyb3Bkb3duLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKERyb3Bkb3duLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZHJvcGRvd24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1kcm9wZG93blwiPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNcIj48L3NwYW4+JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuXG4gICAgJGRyb3Bkb3duLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duID0gJGRyb3Bkb3duO1xuXG4gICAgcmV0dXJuICRkcm9wZG93bjtcbiAgfTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoJGRyb3Bkb3duLCAkY29udGFpbmVyKSB7XG4gICAgLy8gU2hvdWxkIGJlIGltcGxtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgZHJvcGRvd24gZnJvbSB0aGUgRE9NXG4gICAgdGhpcy4kZHJvcGRvd24ucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBTZWFyY2ggKCkgeyB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdmFyICRzZWFyY2ggPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiJyArXG4gICAgICAgICcgc3BlbGxjaGVjaz1cImZhbHNlXCIgcm9sZT1cInRleHRib3hcIiAvPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgIHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG4gICAgdGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXG4gICAgJHJlbmRlcmVkLnByZXBlbmQoJHNlYXJjaCk7XG5cbiAgICByZXR1cm4gJHJlbmRlcmVkO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICB0aGlzLiRzZWFyY2gub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgc2VsZi5fa2V5VXBQcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciBicm93c2VycyB3aGljaCBkbyBub3Qgc3VwcG9ydCB0aGUgYGlucHV0YCBldmVudFxuICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxuICAgIC8vIGJvdGggdGhlIGBrZXl1cGAgYW5kIGBpbnB1dGAgZXZlbnRzLlxuICAgIHRoaXMuJHNlYXJjaC5vbignaW5wdXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVbmJpbmQgdGhlIGR1cGxpY2F0ZWQgYGtleXVwYCBldmVudFxuICAgICAgJCh0aGlzKS5vZmYoJ2tleXVwJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWFyY2gub24oJ2tleXVwIGlucHV0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5oYW5kbGVTZWFyY2goZXZ0KTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCd0YWJpbmRleCcsIDApO1xuXG4gICAgICBzZWxmLiRzZWFyY2guZm9jdXMoKTtcblxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRzZWFyY2guZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCd0YWJpbmRleCcsIC0xKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKHBhcmFtcy5xdWVyeS50ZXJtID09IG51bGwgfHwgcGFyYW1zLnF1ZXJ5LnRlcm0gPT09ICcnKSB7XG4gICAgICAgIHZhciBzaG93U2VhcmNoID0gc2VsZi5zaG93U2VhcmNoKHBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHNob3dTZWFyY2gpIHtcbiAgICAgICAgICBzZWxmLiRzZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItc2VhcmNoLS1oaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi4kc2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLXNlYXJjaC0taGlkZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5oYW5kbGVTZWFyY2ggPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKCF0aGlzLl9rZXlVcFByZXZlbnRlZCkge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy4kc2VhcmNoLnZhbCgpO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge1xuICAgICAgICB0ZXJtOiBpbnB1dFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fa2V5VXBQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnNob3dTZWFyY2ggPSBmdW5jdGlvbiAoXywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vaGlkZVBsYWNlaG9sZGVyJyxbXG5cbl0sIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGlkZVBsYWNlaG9sZGVyIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm5vcm1hbGl6ZVBsYWNlaG9sZGVyKG9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlcicpKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG4gIH1cblxuICBIaWRlUGxhY2Vob2xkZXIucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGRhdGEpIHtcbiAgICBkYXRhLnJlc3VsdHMgPSB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKGRhdGEucmVzdWx0cyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICBIaWRlUGxhY2Vob2xkZXIucHJvdG90eXBlLm5vcm1hbGl6ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKF8sIHBsYWNlaG9sZGVyKSB7XG4gICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0ge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRleHQ6IHBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfTtcblxuICBIaWRlUGxhY2Vob2xkZXIucHJvdG90eXBlLnJlbW92ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKF8sIGRhdGEpIHtcbiAgICB2YXIgbW9kaWZpZWREYXRhID0gZGF0YS5zbGljZSgwKTtcblxuICAgIGZvciAodmFyIGQgPSBkYXRhLmxlbmd0aCAtIDE7IGQgPj0gMDsgZC0tKSB7XG4gICAgICB2YXIgaXRlbSA9IGRhdGFbZF07XG5cbiAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyLmlkID09PSBpdGVtLmlkKSB7XG4gICAgICAgIG1vZGlmaWVkRGF0YS5zcGxpY2UoZCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGlmaWVkRGF0YTtcbiAgfTtcblxuICByZXR1cm4gSGlkZVBsYWNlaG9sZGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9pbmZpbml0ZVNjcm9sbCcsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gSW5maW5pdGVTY3JvbGwgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5sYXN0UGFyYW1zID0ge307XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xuXG4gICAgdGhpcy4kbG9hZGluZ01vcmUgPSB0aGlzLmNyZWF0ZUxvYWRpbmdNb3JlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHRoaXMuJGxvYWRpbmdNb3JlLnJlbW92ZSgpO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICBpZiAodGhpcy5zaG93TG9hZGluZ01vcmUoZGF0YSkpIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKHRoaXMuJGxvYWRpbmdNb3JlKTtcbiAgICB9XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYubGFzdFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHNlbGYubG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3F1ZXJ5OmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYubGFzdFBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHNlbGYubG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRyZXN1bHRzLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNMb2FkTW9yZVZpc2libGUgPSAkLmNvbnRhaW5zKFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIHNlbGYuJGxvYWRpbmdNb3JlWzBdXG4gICAgICApO1xuXG4gICAgICBpZiAoc2VsZi5sb2FkaW5nIHx8ICFpc0xvYWRNb3JlVmlzaWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5vZmZzZXQoKS50b3AgK1xuICAgICAgICBzZWxmLiRyZXN1bHRzLm91dGVySGVpZ2h0KGZhbHNlKTtcbiAgICAgIHZhciBsb2FkaW5nTW9yZU9mZnNldCA9IHNlbGYuJGxvYWRpbmdNb3JlLm9mZnNldCgpLnRvcCArXG4gICAgICAgIHNlbGYuJGxvYWRpbmdNb3JlLm91dGVySGVpZ2h0KGZhbHNlKTtcblxuICAgICAgaWYgKGN1cnJlbnRPZmZzZXQgKyA1MCA+PSBsb2FkaW5nTW9yZU9mZnNldCkge1xuICAgICAgICBzZWxmLmxvYWRNb3JlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmxvYWRNb3JlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICB2YXIgcGFyYW1zID0gJC5leHRlbmQoe30sIHtwYWdlOiAxfSwgdGhpcy5sYXN0UGFyYW1zKTtcblxuICAgIHBhcmFtcy5wYWdlKys7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5OmFwcGVuZCcsIHBhcmFtcyk7XG4gIH07XG5cbiAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLnNob3dMb2FkaW5nTW9yZSA9IGZ1bmN0aW9uIChfLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucGFnaW5hdGlvbiAmJiBkYXRhLnBhZ2luYXRpb24ubW9yZTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuY3JlYXRlTG9hZGluZ01vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRvcHRpb24gPSAkKFxuICAgICAgJzxsaSBjbGFzcz1cIm9wdGlvbiBsb2FkLW1vcmVcIiByb2xlPVwidHJlZWl0ZW1cIj48L2xpPidcbiAgICApO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ2xvYWRpbmdNb3JlJyk7XG5cbiAgICAkb3B0aW9uLmh0bWwobWVzc2FnZSh0aGlzLmxhc3RQYXJhbXMpKTtcblxuICAgIHJldHVybiAkb3B0aW9uO1xuICB9O1xuXG4gIHJldHVybiBJbmZpbml0ZVNjcm9sbDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQm9keScsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIEF0dGFjaEJvZHkgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRkcm9wZG93blBhcmVudCA9IG9wdGlvbnMuZ2V0KCdkcm9wZG93blBhcmVudCcpIHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHNldHVwUmVzdWx0c0V2ZW50cyA9IGZhbHNlO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Nob3dEcm9wZG93bigpO1xuICAgICAgc2VsZi5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyKGNvbnRhaW5lcik7XG5cbiAgICAgIGlmICghc2V0dXBSZXN1bHRzRXZlbnRzKSB7XG4gICAgICAgIHNldHVwUmVzdWx0c0V2ZW50cyA9IHRydWU7XG5cbiAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5faGlkZURyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCAkZHJvcGRvd24sICRjb250YWluZXIpIHtcbiAgICAvLyBDbG9uZSBhbGwgb2YgdGhlIGNvbnRhaW5lciBjbGFzc2VzXG4gICAgJGRyb3Bkb3duLmF0dHIoJ2NsYXNzJywgJGNvbnRhaW5lci5hdHRyKCdjbGFzcycpKTtcblxuICAgICRkcm9wZG93bi5yZW1vdmVDbGFzcygnc2VsZWN0MicpO1xuICAgICRkcm9wZG93bi5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcblxuICAgICRkcm9wZG93bi5jc3Moe1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IC05OTk5OTlcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJCgnPHNwYW4+PC9zcGFuPicpO1xuXG4gICAgdmFyICRkcm9wZG93biA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuICAgICRjb250YWluZXIuYXBwZW5kKCRkcm9wZG93bik7XG5cbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lciA9ICRjb250YWluZXI7XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5faGlkZURyb3Bkb3duID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmRldGFjaCgpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHNjcm9sbEV2ZW50ID0gJ3Njcm9sbC5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIHJlc2l6ZUV2ZW50ID0gJ3Jlc2l6ZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG4gICAgdmFyIG9yaWVudGF0aW9uRXZlbnQgPSAnb3JpZW50YXRpb25jaGFuZ2Uuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuXG4gICAgdmFyICR3YXRjaGVycyA9IHRoaXMuJGNvbnRhaW5lci5wYXJlbnRzKCkuZmlsdGVyKFV0aWxzLmhhc1Njcm9sbCk7XG4gICAgJHdhdGNoZXJzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5kYXRhKCdzZWxlY3QyLXNjcm9sbC1wb3NpdGlvbicsIHtcbiAgICAgICAgeDogJCh0aGlzKS5zY3JvbGxMZWZ0KCksXG4gICAgICAgIHk6ICQodGhpcykuc2Nyb2xsVG9wKClcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJHdhdGNoZXJzLm9uKHNjcm9sbEV2ZW50LCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9ICQodGhpcykuZGF0YSgnc2VsZWN0Mi1zY3JvbGwtcG9zaXRpb24nKTtcbiAgICAgICQodGhpcykuc2Nyb2xsVG9wKHBvc2l0aW9uLnkpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKHNjcm9sbEV2ZW50ICsgJyAnICsgcmVzaXplRXZlbnQgKyAnICcgKyBvcmllbnRhdGlvbkV2ZW50LFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICB2YXIgc2Nyb2xsRXZlbnQgPSAnc2Nyb2xsLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcbiAgICB2YXIgcmVzaXplRXZlbnQgPSAncmVzaXplLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcbiAgICB2YXIgb3JpZW50YXRpb25FdmVudCA9ICdvcmllbnRhdGlvbmNoYW5nZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XG5cbiAgICB2YXIgJHdhdGNoZXJzID0gdGhpcy4kY29udGFpbmVyLnBhcmVudHMoKS5maWx0ZXIoVXRpbHMuaGFzU2Nyb2xsKTtcbiAgICAkd2F0Y2hlcnMub2ZmKHNjcm9sbEV2ZW50KTtcblxuICAgICQod2luZG93KS5vZmYoc2Nyb2xsRXZlbnQgKyAnICcgKyByZXNpemVFdmVudCArICcgJyArIG9yaWVudGF0aW9uRXZlbnQpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLl9wb3NpdGlvbkRyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xuXG4gICAgdmFyIGlzQ3VycmVudGx5QWJvdmUgPSB0aGlzLiRkcm9wZG93bi5oYXNDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tYWJvdmUnKTtcbiAgICB2YXIgaXNDdXJyZW50bHlCZWxvdyA9IHRoaXMuJGRyb3Bkb3duLmhhc0NsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1iZWxvdycpO1xuXG4gICAgdmFyIG5ld0RpcmVjdGlvbiA9IG51bGw7XG5cbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLiRjb250YWluZXIucG9zaXRpb24oKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy4kY29udGFpbmVyLm9mZnNldCgpO1xuXG4gICAgb2Zmc2V0LmJvdHRvbSA9IG9mZnNldC50b3AgKyB0aGlzLiRjb250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHtcbiAgICAgIGhlaWdodDogdGhpcy4kY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKVxuICAgIH07XG5cbiAgICBjb250YWluZXIudG9wID0gb2Zmc2V0LnRvcDtcbiAgICBjb250YWluZXIuYm90dG9tID0gb2Zmc2V0LnRvcCArIGNvbnRhaW5lci5oZWlnaHQ7XG5cbiAgICB2YXIgZHJvcGRvd24gPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuJGRyb3Bkb3duLm91dGVySGVpZ2h0KGZhbHNlKVxuICAgIH07XG5cbiAgICB2YXIgdmlld3BvcnQgPSB7XG4gICAgICB0b3A6ICR3aW5kb3cuc2Nyb2xsVG9wKCksXG4gICAgICBib3R0b206ICR3aW5kb3cuc2Nyb2xsVG9wKCkgKyAkd2luZG93LmhlaWdodCgpXG4gICAgfTtcblxuICAgIHZhciBlbm91Z2hSb29tQWJvdmUgPSB2aWV3cG9ydC50b3AgPCAob2Zmc2V0LnRvcCAtIGRyb3Bkb3duLmhlaWdodCk7XG4gICAgdmFyIGVub3VnaFJvb21CZWxvdyA9IHZpZXdwb3J0LmJvdHRvbSA+IChvZmZzZXQuYm90dG9tICsgZHJvcGRvd24uaGVpZ2h0KTtcblxuICAgIHZhciBjc3MgPSB7XG4gICAgICBsZWZ0OiBvZmZzZXQubGVmdCxcbiAgICAgIHRvcDogY29udGFpbmVyLmJvdHRvbVxuICAgIH07XG5cbiAgICBpZiAoIWlzQ3VycmVudGx5QWJvdmUgJiYgIWlzQ3VycmVudGx5QmVsb3cpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XG4gICAgfVxuXG4gICAgaWYgKCFlbm91Z2hSb29tQmVsb3cgJiYgZW5vdWdoUm9vbUFib3ZlICYmICFpc0N1cnJlbnRseUFib3ZlKSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYWJvdmUnO1xuICAgIH0gZWxzZSBpZiAoIWVub3VnaFJvb21BYm92ZSAmJiBlbm91Z2hSb29tQmVsb3cgJiYgaXNDdXJyZW50bHlBYm92ZSkge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2JlbG93JztcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uID09ICdhYm92ZScgfHxcbiAgICAgIChpc0N1cnJlbnRseUFib3ZlICYmIG5ld0RpcmVjdGlvbiAhPT0gJ2JlbG93JykpIHtcbiAgICAgIGNzcy50b3AgPSBjb250YWluZXIudG9wIC0gZHJvcGRvd24uaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgdGhpcy4kZHJvcGRvd25cbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1iZWxvdyBzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZScpXG4gICAgICAgIC5hZGRDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tJyArIG5ld0RpcmVjdGlvbik7XG4gICAgICB0aGlzLiRjb250YWluZXJcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tYmVsb3cgc2VsZWN0Mi1jb250YWluZXItLWFib3ZlJylcbiAgICAgICAgLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tJyArIG5ld0RpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIuY3NzKGNzcyk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Jlc2l6ZURyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLndpZHRoKCk7XG5cbiAgICB0aGlzLiRkcm9wZG93bi5jc3Moe1xuICAgICAgd2lkdGg6IHRoaXMuJGNvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKSArICdweCdcbiAgICB9KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGRyb3Bkb3duUGFyZW50KTtcblxuICAgIHRoaXMuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICB0aGlzLl9yZXNpemVEcm9wZG93bigpO1xuICB9O1xuXG4gIHJldHVybiBBdHRhY2hCb2R5O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGNvdW50UmVzdWx0cyAoZGF0YSkge1xuICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcblxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgY291bnQgKz0gY291bnRSZXN1bHRzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBmdW5jdGlvbiBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gb3B0aW9ucy5nZXQoJ21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyk7XG5cbiAgICBpZiAodGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA8IDApIHtcbiAgICAgIHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSBJbmZpbml0eTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xuICB9XG5cbiAgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gucHJvdG90eXBlLnNob3dTZWFyY2ggPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMpIHtcbiAgICBpZiAoY291bnRSZXN1bHRzKHBhcmFtcy5kYXRhLnJlc3VsdHMpIDwgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICB9O1xuXG4gIHJldHVybiBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vc2VsZWN0T25DbG9zZScsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlbGVjdE9uQ2xvc2UgKCkgeyB9XG5cbiAgU2VsZWN0T25DbG9zZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5faGFuZGxlU2VsZWN0T25DbG9zZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdE9uQ2xvc2UucHJvdG90eXBlLl9oYW5kbGVTZWxlY3RPbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWRSZXN1bHRzID0gdGhpcy5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgIGlmICgkaGlnaGxpZ2h0ZWRSZXN1bHRzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkaGlnaGxpZ2h0ZWRSZXN1bHRzLnRyaWdnZXIoJ21vdXNldXAnKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0T25DbG9zZTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vY2xvc2VPblNlbGVjdCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENsb3NlT25TZWxlY3QgKCkgeyB9XG5cbiAgQ2xvc2VPblNlbGVjdC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX3NlbGVjdFRyaWdnZXJlZChldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX3NlbGVjdFRyaWdnZXJlZChldnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIENsb3NlT25TZWxlY3QucHJvdG90eXBlLl9zZWxlY3RUcmlnZ2VyZWQgPSBmdW5jdGlvbiAoXywgZXZ0KSB7XG4gICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBldnQub3JpZ2luYWxFdmVudDtcblxuICAgIC8vIERvbid0IGNsb3NlIGlmIHRoZSBjb250cm9sIGtleSBpcyBiZWluZyBoZWxkXG4gICAgaWYgKG9yaWdpbmFsRXZlbnQgJiYgb3JpZ2luYWxFdmVudC5jdHJsS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScpO1xuICB9O1xuXG4gIHJldHVybiBDbG9zZU9uU2VsZWN0O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9pMThuL2VuJyxbXSxmdW5jdGlvbiAoKSB7XG4gIC8vIEVuZ2xpc2hcbiAgcmV0dXJuIHtcbiAgICBlcnJvckxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnVGhlIHJlc3VsdHMgY291bGQgbm90IGJlIGxvYWRlZC4nO1xuICAgIH0sXG4gICAgaW5wdXRUb29Mb25nOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIG92ZXJDaGFycyA9IGFyZ3MuaW5wdXQubGVuZ3RoIC0gYXJncy5tYXhpbXVtO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICdQbGVhc2UgZGVsZXRlICcgKyBvdmVyQ2hhcnMgKyAnIGNoYXJhY3Rlcic7XG5cbiAgICAgIGlmIChvdmVyQ2hhcnMgIT0gMSkge1xuICAgICAgICBtZXNzYWdlICs9ICdzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBpbnB1dFRvb1Nob3J0OiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gJ1BsZWFzZSBlbnRlciAnICsgcmVtYWluaW5nQ2hhcnMgKyAnIG9yIG1vcmUgY2hhcmFjdGVycyc7XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgbG9hZGluZ01vcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnTG9hZGluZyBtb3JlIHJlc3VsdHPigKYnO1xuICAgIH0sXG4gICAgbWF4aW11bVNlbGVjdGVkOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnWW91IGNhbiBvbmx5IHNlbGVjdCAnICsgYXJncy5tYXhpbXVtICsgJyBpdGVtJztcblxuICAgICAgaWYgKGFyZ3MubWF4aW11bSAhPSAxKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdObyByZXN1bHRzIGZvdW5kJztcbiAgICB9LFxuICAgIHNlYXJjaGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdTZWFyY2hpbmfigKYnO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGVmYXVsdHMnLFtcbiAgJ2pxdWVyeScsXG4gICdyZXF1aXJlJyxcblxuICAnLi9yZXN1bHRzJyxcblxuICAnLi9zZWxlY3Rpb24vc2luZ2xlJyxcbiAgJy4vc2VsZWN0aW9uL211bHRpcGxlJyxcbiAgJy4vc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxcbiAgJy4vc2VsZWN0aW9uL2FsbG93Q2xlYXInLFxuICAnLi9zZWxlY3Rpb24vc2VhcmNoJyxcbiAgJy4vc2VsZWN0aW9uL2V2ZW50UmVsYXknLFxuXG4gICcuL3V0aWxzJyxcbiAgJy4vdHJhbnNsYXRpb24nLFxuICAnLi9kaWFjcml0aWNzJyxcblxuICAnLi9kYXRhL3NlbGVjdCcsXG4gICcuL2RhdGEvYXJyYXknLFxuICAnLi9kYXRhL2FqYXgnLFxuICAnLi9kYXRhL3RhZ3MnLFxuICAnLi9kYXRhL3Rva2VuaXplcicsXG4gICcuL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoJyxcbiAgJy4vZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGgnLFxuICAnLi9kYXRhL21heGltdW1TZWxlY3Rpb25MZW5ndGgnLFxuXG4gICcuL2Ryb3Bkb3duJyxcbiAgJy4vZHJvcGRvd24vc2VhcmNoJyxcbiAgJy4vZHJvcGRvd24vaGlkZVBsYWNlaG9sZGVyJyxcbiAgJy4vZHJvcGRvd24vaW5maW5pdGVTY3JvbGwnLFxuICAnLi9kcm9wZG93bi9hdHRhY2hCb2R5JyxcbiAgJy4vZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnLFxuICAnLi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJyxcbiAgJy4vZHJvcGRvd24vY2xvc2VPblNlbGVjdCcsXG5cbiAgJy4vaTE4bi9lbidcbl0sIGZ1bmN0aW9uICgkLCByZXF1aXJlLFxuXG4gICAgICAgICAgICAgUmVzdWx0c0xpc3QsXG5cbiAgICAgICAgICAgICBTaW5nbGVTZWxlY3Rpb24sIE11bHRpcGxlU2VsZWN0aW9uLCBQbGFjZWhvbGRlciwgQWxsb3dDbGVhcixcbiAgICAgICAgICAgICBTZWxlY3Rpb25TZWFyY2gsIEV2ZW50UmVsYXksXG5cbiAgICAgICAgICAgICBVdGlscywgVHJhbnNsYXRpb24sIERJQUNSSVRJQ1MsXG5cbiAgICAgICAgICAgICBTZWxlY3REYXRhLCBBcnJheURhdGEsIEFqYXhEYXRhLCBUYWdzLCBUb2tlbml6ZXIsXG4gICAgICAgICAgICAgTWluaW11bUlucHV0TGVuZ3RoLCBNYXhpbXVtSW5wdXRMZW5ndGgsIE1heGltdW1TZWxlY3Rpb25MZW5ndGgsXG5cbiAgICAgICAgICAgICBEcm9wZG93biwgRHJvcGRvd25TZWFyY2gsIEhpZGVQbGFjZWhvbGRlciwgSW5maW5pdGVTY3JvbGwsXG4gICAgICAgICAgICAgQXR0YWNoQm9keSwgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gsIFNlbGVjdE9uQ2xvc2UsIENsb3NlT25TZWxlY3QsXG5cbiAgICAgICAgICAgICBFbmdsaXNoVHJhbnNsYXRpb24pIHtcbiAgZnVuY3Rpb24gRGVmYXVsdHMgKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmRhdGFBZGFwdGVyID09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gQWpheERhdGE7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBcnJheURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gU2VsZWN0RGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bUlucHV0TGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNYXhpbXVtSW5wdXRMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50YWdzKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShvcHRpb25zLmRhdGFBZGFwdGVyLCBUYWdzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudG9rZW5TZXBhcmF0b3JzICE9IG51bGwgfHwgb3B0aW9ucy50b2tlbml6ZXIgIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBUb2tlbml6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucXVlcnkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgUXVlcnkgPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvcXVlcnknKTtcblxuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBRdWVyeVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pbml0U2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgdmFyIEluaXRTZWxlY3Rpb24gPSByZXF1aXJlKG9wdGlvbnMuYW1kQmFzZSArICdjb21wYXQvaW5pdFNlbGVjdGlvbicpO1xuXG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIEluaXRTZWxlY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gUmVzdWx0c0xpc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlcixcbiAgICAgICAgICBJbmZpbml0ZVNjcm9sbFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIEhpZGVQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zZWxlY3RPbkNsb3NlKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIFNlbGVjdE9uQ2xvc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBEcm9wZG93bjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBTZWFyY2hhYmxlRHJvcGRvd24gPSBVdGlscy5EZWNvcmF0ZShEcm9wZG93biwgRHJvcGRvd25TZWFyY2gpO1xuXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gU2VhcmNoYWJsZURyb3Bkb3duO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCAhPT0gMCkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcbiAgICAgICAgICBDbG9zZU9uU2VsZWN0XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICBBdHRhY2hCb2R5XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gTXVsdGlwbGVTZWxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBTaW5nbGVTZWxlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgcGxhY2Vob2xkZXIgbWl4aW4gaWYgYSBwbGFjZWhvbGRlciB3YXMgc3BlY2lmaWVkXG4gICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBQbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbGxvd0NsZWFyKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBBbGxvd0NsZWFyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgICBTZWxlY3Rpb25TZWFyY2hcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcbiAgICAgICAgRXZlbnRSZWxheVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgbGFuZ3VhZ2UgaXMgc3BlY2lmaWVkIHdpdGggYSByZWdpb25cbiAgICAgIGlmIChvcHRpb25zLmxhbmd1YWdlLmluZGV4T2YoJy0nKSA+IDApIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgcmVnaW9uIGluZm9ybWF0aW9uIGlmIGl0IGlzIGluY2x1ZGVkXG4gICAgICAgIHZhciBsYW5ndWFnZVBhcnRzID0gb3B0aW9ucy5sYW5ndWFnZS5zcGxpdCgnLScpO1xuICAgICAgICB2YXIgYmFzZUxhbmd1YWdlID0gbGFuZ3VhZ2VQYXJ0c1swXTtcblxuICAgICAgICBvcHRpb25zLmxhbmd1YWdlID0gW29wdGlvbnMubGFuZ3VhZ2UsIGJhc2VMYW5ndWFnZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmxhbmd1YWdlID0gW29wdGlvbnMubGFuZ3VhZ2VdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkLmlzQXJyYXkob3B0aW9ucy5sYW5ndWFnZSkpIHtcbiAgICAgIHZhciBsYW5ndWFnZXMgPSBuZXcgVHJhbnNsYXRpb24oKTtcbiAgICAgIG9wdGlvbnMubGFuZ3VhZ2UucHVzaCgnZW4nKTtcblxuICAgICAgdmFyIGxhbmd1YWdlTmFtZXMgPSBvcHRpb25zLmxhbmd1YWdlO1xuXG4gICAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlTmFtZXMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgdmFyIG5hbWUgPSBsYW5ndWFnZU5hbWVzW2xdO1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSB7fTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRyeSB0byBsb2FkIGl0IHdpdGggdGhlIG9yaWdpbmFsIG5hbWVcbiAgICAgICAgICBsYW5ndWFnZSA9IFRyYW5zbGF0aW9uLmxvYWRQYXRoKG5hbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIElmIHdlIGNvdWxkbid0IGxvYWQgaXQsIGNoZWNrIGlmIGl0IHdhc24ndCB0aGUgZnVsbCBwYXRoXG4gICAgICAgICAgICBuYW1lID0gdGhpcy5kZWZhdWx0cy5hbWRMYW5ndWFnZUJhc2UgKyBuYW1lO1xuICAgICAgICAgICAgbGFuZ3VhZ2UgPSBUcmFuc2xhdGlvbi5sb2FkUGF0aChuYW1lKTtcbiAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgLy8gVGhlIHRyYW5zbGF0aW9uIGNvdWxkIG5vdCBiZSBsb2FkZWQgYXQgYWxsLiBTb21ldGltZXMgdGhpcyBpc1xuICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiBhIGNvbmZpZ3VyYXRpb24gcHJvYmxlbSwgb3RoZXIgdGltZXMgdGhpcyBjYW4gYmVcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgaG93IFNlbGVjdDIgaGVscHMgbG9hZCBhbGwgcG9zc2libGUgdHJhbnNsYXRpb24gZmlsZXMuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICdTZWxlY3QyOiBUaGUgbGFuZ3VhZ2UgZmlsZSBmb3IgXCInICsgbmFtZSArICdcIiBjb3VsZCBub3QgYmUgJyArXG4gICAgICAgICAgICAgICAgJ2F1dG9tYXRpY2FsbHkgbG9hZGVkLiBBIGZhbGxiYWNrIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGFuZ3VhZ2VzLmV4dGVuZChsYW5ndWFnZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMudHJhbnNsYXRpb25zID0gbGFuZ3VhZ2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbihvcHRpb25zLmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzICh0ZXh0KSB7XG4gICAgICAvLyBVc2VkICd1bmkgcmFuZ2UgKyBuYW1lZCBmdW5jdGlvbicgZnJvbSBodHRwOi8vanNwZXJmLmNvbS9kaWFjcml0aWNzLzE4XG4gICAgICBmdW5jdGlvbiBtYXRjaChhKSB7XG4gICAgICAgIHJldHVybiBESUFDUklUSUNTW2FdIHx8IGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLCBtYXRjaCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hlciAocGFyYW1zLCBkYXRhKSB7XG4gICAgICAvLyBBbHdheXMgcmV0dXJuIHRoZSBvYmplY3QgaWYgdGhlcmUgaXMgbm90aGluZyB0byBjb21wYXJlXG4gICAgICBpZiAoJC50cmltKHBhcmFtcy50ZXJtKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIC8vIERvIGEgcmVjdXJzaXZlIGNoZWNrIGZvciBvcHRpb25zIHdpdGggY2hpbGRyZW5cbiAgICAgIGlmIChkYXRhLmNoaWxkcmVuICYmIGRhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBDbG9uZSB0aGUgZGF0YSBvYmplY3QgaWYgdGhlcmUgYXJlIGNoaWxkcmVuXG4gICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgYXMgd2UgbW9kaWZ5IHRoZSBvYmplY3QgdG8gcmVtb3ZlIGFueSBub24tbWF0Y2hlc1xuICAgICAgICB2YXIgbWF0Y2ggPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGF0YSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBjaGlsZCBvZiB0aGUgb3B0aW9uXG4gICAgICAgIGZvciAodmFyIGMgPSBkYXRhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGMgPj0gMDsgYy0tKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gZGF0YS5jaGlsZHJlbltjXTtcblxuICAgICAgICAgIHZhciBtYXRjaGVzID0gbWF0Y2hlcihwYXJhbXMsIGNoaWxkKTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIHdhc24ndCBhIG1hdGNoLCByZW1vdmUgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICBpZiAobWF0Y2hlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBtYXRjaC5jaGlsZHJlbi5zcGxpY2UoYywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgYW55IGNoaWxkcmVuIG1hdGNoZWQsIHJldHVybiB0aGUgbmV3IG9iamVjdFxuICAgICAgICBpZiAobWF0Y2guY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIHdlcmUgbm8gbWF0Y2hpbmcgY2hpbGRyZW4sIGNoZWNrIGp1c3QgdGhlIHBsYWluIG9iamVjdFxuICAgICAgICByZXR1cm4gbWF0Y2hlcihwYXJhbXMsIG1hdGNoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWdpbmFsID0gc3RyaXBEaWFjcml0aWNzKGRhdGEudGV4dCkudG9VcHBlckNhc2UoKTtcbiAgICAgIHZhciB0ZXJtID0gc3RyaXBEaWFjcml0aWNzKHBhcmFtcy50ZXJtKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dCBjb250YWlucyB0aGUgdGVybVxuICAgICAgaWYgKG9yaWdpbmFsLmluZGV4T2YodGVybSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgZG9lc24ndCBjb250YWluIHRoZSB0ZXJtLCBkb24ndCByZXR1cm4gYW55dGhpbmdcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBhbWRCYXNlOiAnLi8nLFxuICAgICAgYW1kTGFuZ3VhZ2VCYXNlOiAnLi9pMThuLycsXG4gICAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgZXNjYXBlTWFya3VwOiBVdGlscy5lc2NhcGVNYXJrdXAsXG4gICAgICBsYW5ndWFnZTogRW5nbGlzaFRyYW5zbGF0aW9uLFxuICAgICAgbWF0Y2hlcjogbWF0Y2hlcixcbiAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMCxcbiAgICAgIG1heGltdW1JbnB1dExlbmd0aDogMCxcbiAgICAgIG1heGltdW1TZWxlY3Rpb25MZW5ndGg6IDAsXG4gICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogMCxcbiAgICAgIHNlbGVjdE9uQ2xvc2U6IGZhbHNlLFxuICAgICAgc29ydGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVJlc3VsdDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnRleHQ7XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi50ZXh0O1xuICAgICAgfSxcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gICAgICB3aWR0aDogJ3Jlc29sdmUnXG4gICAgfTtcbiAgfTtcblxuICBEZWZhdWx0cy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY2FtZWxLZXkgPSAkLmNhbWVsQ2FzZShrZXkpO1xuXG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBkYXRhW2NhbWVsS2V5XSA9IHZhbHVlO1xuXG4gICAgdmFyIGNvbnZlcnRlZERhdGEgPSBVdGlscy5fY29udmVydERhdGEoZGF0YSk7XG5cbiAgICAkLmV4dGVuZCh0aGlzLmRlZmF1bHRzLCBjb252ZXJ0ZWREYXRhKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdHMgPSBuZXcgRGVmYXVsdHMoKTtcblxuICByZXR1cm4gZGVmYXVsdHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL29wdGlvbnMnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2RlZmF1bHRzJyxcbiAgJy4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgRGVmYXVsdHMsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIE9wdGlvbnMgKG9wdGlvbnMsICRlbGVtZW50KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICgkZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmZyb21FbGVtZW50KCRlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBEZWZhdWx0cy5hcHBseSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKCRlbGVtZW50ICYmICRlbGVtZW50LmlzKCdpbnB1dCcpKSB7XG4gICAgICB2YXIgSW5wdXRDb21wYXQgPSByZXF1aXJlKHRoaXMuZ2V0KCdhbWRCYXNlJykgKyAnY29tcGF0L2lucHV0RGF0YScpO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgdGhpcy5vcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICBJbnB1dENvbXBhdFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBPcHRpb25zLnByb3RvdHlwZS5mcm9tRWxlbWVudCA9IGZ1bmN0aW9uICgkZSkge1xuICAgIHZhciBleGNsdWRlZERhdGEgPSBbJ3NlbGVjdDInXTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubXVsdGlwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxlID0gJGUucHJvcCgnbXVsdGlwbGUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9ICRlLnByb3AoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5sYW5ndWFnZSA9PSBudWxsKSB7XG4gICAgICBpZiAoJGUucHJvcCgnbGFuZycpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5sYW5ndWFnZSA9ICRlLnByb3AoJ2xhbmcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSBlbHNlIGlmICgkZS5jbG9zZXN0KCdbbGFuZ10nKS5wcm9wKCdsYW5nJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmxhbmd1YWdlID0gJGUuY2xvc2VzdCgnW2xhbmddJykucHJvcCgnbGFuZycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyID09IG51bGwpIHtcbiAgICAgIGlmICgkZS5wcm9wKCdkaXInKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJGUucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2UgaWYgKCRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICRlLmNsb3Nlc3QoJ1tkaXJdJykucHJvcCgnZGlyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJ2x0cic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGUucHJvcCgnZGlzYWJsZWQnLCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpO1xuICAgICRlLnByb3AoJ211bHRpcGxlJywgdGhpcy5vcHRpb25zLm11bHRpcGxlKTtcblxuICAgIGlmICgkZS5kYXRhKCdzZWxlY3QyVGFncycpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgZGF0YS1zZWxlY3QyLXRhZ3NgIGF0dHJpYnV0ZSBoYXMgYmVlbiBjaGFuZ2VkIHRvICcgK1xuICAgICAgICAgICd1c2UgdGhlIGBkYXRhLWRhdGFgIGFuZCBgZGF0YS10YWdzPVwidHJ1ZVwiYCBhdHRyaWJ1dGVzIGFuZCB3aWxsIGJlICcgK1xuICAgICAgICAgICdyZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgJGUuZGF0YSgnZGF0YScsICRlLmRhdGEoJ3NlbGVjdDJUYWdzJykpO1xuICAgICAgJGUuZGF0YSgndGFncycsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICgkZS5kYXRhKCdhamF4VXJsJykpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBkYXRhLWFqYXgtdXJsYCBhdHRyaWJ1dGUgaGFzIGJlZW4gY2hhbmdlZCB0byAnICtcbiAgICAgICAgICAnYGRhdGEtYWpheC0tdXJsYCBhbmQgc3VwcG9ydCBmb3IgdGhlIG9sZCBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkJyArXG4gICAgICAgICAgJyBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgICRlLmF0dHIoJ2FqYXgtLXVybCcsICRlLmRhdGEoJ2FqYXhVcmwnKSk7XG4gICAgICAkZS5kYXRhKCdhamF4LS11cmwnLCAkZS5kYXRhKCdhamF4VXJsJykpO1xuICAgIH1cblxuICAgIHZhciBkYXRhc2V0ID0ge307XG5cbiAgICAvLyBQcmVmZXIgdGhlIGVsZW1lbnQncyBgZGF0YXNldGAgYXR0cmlidXRlIGlmIGl0IGV4aXN0c1xuICAgIC8vIGpRdWVyeSAxLnggZG9lcyBub3QgY29ycmVjdGx5IGhhbmRsZSBkYXRhIGF0dHJpYnV0ZXMgd2l0aCBtdWx0aXBsZSBkYXNoZXNcbiAgICBpZiAoJC5mbi5qcXVlcnkgJiYgJC5mbi5qcXVlcnkuc3Vic3RyKDAsIDIpID09ICcxLicgJiYgJGVbMF0uZGF0YXNldCkge1xuICAgICAgZGF0YXNldCA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkZVswXS5kYXRhc2V0LCAkZS5kYXRhKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhc2V0ID0gJGUuZGF0YSgpO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIGRhdGFzZXQpO1xuXG4gICAgZGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoJC5pbkFycmF5KGtleSwgZXhjbHVkZWREYXRhKSA+IC0xKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRoaXMub3B0aW9uc1trZXldKSkge1xuICAgICAgICAkLmV4dGVuZCh0aGlzLm9wdGlvbnNba2V5XSwgZGF0YVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIE9wdGlvbnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zW2tleV07XG4gIH07XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgdGhpcy5vcHRpb25zW2tleV0gPSB2YWw7XG4gIH07XG5cbiAgcmV0dXJuIE9wdGlvbnM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2NvcmUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL29wdGlvbnMnLFxuICAnLi91dGlscycsXG4gICcuL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgT3B0aW9ucywgVXRpbHMsIEtFWVMpIHtcbiAgdmFyIFNlbGVjdDIgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoJGVsZW1lbnQuZGF0YSgnc2VsZWN0MicpICE9IG51bGwpIHtcbiAgICAgICRlbGVtZW50LmRhdGEoJ3NlbGVjdDInKS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgdGhpcy5pZCA9IHRoaXMuX2dlbmVyYXRlSWQoJGVsZW1lbnQpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zLCAkZWxlbWVudCk7XG5cbiAgICBTZWxlY3QyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSB0YWJpbmRleFxuXG4gICAgdmFyIHRhYmluZGV4ID0gJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSB8fCAwO1xuICAgICRlbGVtZW50LmRhdGEoJ29sZC10YWJpbmRleCcsIHRhYmluZGV4KTtcbiAgICAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgLy8gU2V0IHVwIGNvbnRhaW5lcnMgYW5kIGFkYXB0ZXJzXG5cbiAgICB2YXIgRGF0YUFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdkYXRhQWRhcHRlcicpO1xuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBuZXcgRGF0YUFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLl9wbGFjZUNvbnRhaW5lcigkY29udGFpbmVyKTtcblxuICAgIHZhciBTZWxlY3Rpb25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnc2VsZWN0aW9uQWRhcHRlcicpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbkFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy4kc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24ucmVuZGVyKCk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5wb3NpdGlvbih0aGlzLiRzZWxlY3Rpb24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIERyb3Bkb3duQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ2Ryb3Bkb3duQWRhcHRlcicpO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd25BZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuJGRyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5yZW5kZXIoKTtcblxuICAgIHRoaXMuZHJvcGRvd24ucG9zaXRpb24odGhpcy4kZHJvcGRvd24sICRjb250YWluZXIpO1xuXG4gICAgdmFyIFJlc3VsdHNBZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgncmVzdWx0c0FkYXB0ZXInKTtcbiAgICB0aGlzLnJlc3VsdHMgPSBuZXcgUmVzdWx0c0FkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucywgdGhpcy5kYXRhQWRhcHRlcik7XG4gICAgdGhpcy4kcmVzdWx0cyA9IHRoaXMucmVzdWx0cy5yZW5kZXIoKTtcblxuICAgIHRoaXMucmVzdWx0cy5wb3NpdGlvbih0aGlzLiRyZXN1bHRzLCB0aGlzLiRkcm9wZG93bik7XG5cbiAgICAvLyBCaW5kIGV2ZW50c1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQmluZCB0aGUgY29udGFpbmVyIHRvIGFsbCBvZiB0aGUgYWRhcHRlcnNcbiAgICB0aGlzLl9iaW5kQWRhcHRlcnMoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGFueSBET00gZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWdpc3RlckRvbUV2ZW50cygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgYW55IGludGVybmFsIGV2ZW50IGhhbmRsZXJzXG4gICAgdGhpcy5fcmVnaXN0ZXJEYXRhRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoaW5pdGlhbERhdGEpIHtcbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc2VsZWN0XG4gICAgJGVsZW1lbnQuaGlkZSgpO1xuXG4gICAgLy8gU3luY2hyb25pemUgYW55IG1vbml0b3JlZCBhdHRyaWJ1dGVzXG4gICAgdGhpcy5fc3luY0F0dHJpYnV0ZXMoKTtcblxuICAgICRlbGVtZW50LmRhdGEoJ3NlbGVjdDInLCB0aGlzKTtcbiAgfTtcblxuICBVdGlscy5FeHRlbmQoU2VsZWN0MiwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX2dlbmVyYXRlSWQgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICB2YXIgaWQgPSAnJztcblxuICAgIGlmICgkZWxlbWVudC5hdHRyKCdpZCcpICE9IG51bGwpIHtcbiAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignaWQnKTtcbiAgICB9IGVsc2UgaWYgKCRlbGVtZW50LmF0dHIoJ25hbWUnKSAhPSBudWxsKSB7XG4gICAgICBpZCA9ICRlbGVtZW50LmF0dHIoJ25hbWUnKSArICctJyArIFV0aWxzLmdlbmVyYXRlQ2hhcnMoMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcbiAgICB9XG5cbiAgICBpZCA9ICdzZWxlY3QyLScgKyBpZDtcblxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcGxhY2VDb250YWluZXIgPSBmdW5jdGlvbiAoJGNvbnRhaW5lcikge1xuICAgICRjb250YWluZXIuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7XG5cbiAgICB2YXIgd2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgodGhpcy4kZWxlbWVudCwgdGhpcy5vcHRpb25zLmdldCgnd2lkdGgnKSk7XG5cbiAgICBpZiAod2lkdGggIT0gbnVsbCkge1xuICAgICAgJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVzb2x2ZVdpZHRoID0gZnVuY3Rpb24gKCRlbGVtZW50LCBtZXRob2QpIHtcbiAgICB2YXIgV0lEVEggPSAvXndpZHRoOigoWy0rXT8oWzAtOV0qXFwuKT9bMC05XSspKHB4fGVtfGV4fCV8aW58Y218bW18cHR8cGMpKS9pO1xuXG4gICAgaWYgKG1ldGhvZCA9PSAncmVzb2x2ZScpIHtcbiAgICAgIHZhciBzdHlsZVdpZHRoID0gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnc3R5bGUnKTtcblxuICAgICAgaWYgKHN0eWxlV2lkdGggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gc3R5bGVXaWR0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVXaWR0aCgkZWxlbWVudCwgJ2VsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdlbGVtZW50Jykge1xuICAgICAgdmFyIGVsZW1lbnRXaWR0aCA9ICRlbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xuXG4gICAgICBpZiAoZWxlbWVudFdpZHRoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgc3R5bGUgPSAkZWxlbWVudC5hdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAodHlwZW9mKHN0eWxlKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRycyA9IHN0eWxlLnNwbGl0KCc7Jyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSA9IGkgKyAxKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnNbaV0ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBhdHRyLm1hdGNoKFdJRFRIKTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCAmJiBtYXRjaGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGhvZDtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fYmluZEFkYXB0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGF0YUFkYXB0ZXIuYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcblxuICAgIHRoaXMuZHJvcGRvd24uYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuICAgIHRoaXMucmVzdWx0cy5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRG9tRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NoYW5nZS5zZWxlY3QyJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zeW5jID0gVXRpbHMuYmluZCh0aGlzLl9zeW5jQXR0cmlidXRlcywgdGhpcyk7XG5cbiAgICBpZiAodGhpcy4kZWxlbWVudFswXS5hdHRhY2hFdmVudCkge1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hdHRhY2hFdmVudCgnb25wcm9wZXJ0eWNoYW5nZScsIHRoaXMuX3N5bmMpO1xuICAgIH1cblxuICAgIHZhciBvYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJcbiAgICA7XG5cbiAgICBpZiAob2JzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgb2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAkLmVhY2gobXV0YXRpb25zLCBzZWxmLl9zeW5jKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRlbGVtZW50WzBdLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKCdET01BdHRyTW9kaWZpZWQnLCBzZWxmLl9zeW5jLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRhdGFFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlci5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5vblJlbGF5RXZlbnRzID0gWyd0b2dnbGUnXTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLm9uKCd0b2dnbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgbm9uUmVsYXlFdmVudHMpICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZHJvcGRvd24ub24oJyonLCBmdW5jdGlvbiAobmFtZSwgcGFyYW1zKSB7XG4gICAgICBzZWxmLnRyaWdnZXIobmFtZSwgcGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMucmVzdWx0cy5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdlbmFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignZGlzYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3F1ZXJ5JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgaWYgKCFzZWxmLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignb3BlbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLnF1ZXJ5KHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOmFsbCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHF1ZXJ5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3F1ZXJ5OmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6YXBwZW5kJywge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcXVlcnk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICBpZiAoc2VsZi5pc09wZW4oKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnNlbGVjdCcpO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGtleSA9PT0gS0VZUy5TUEFDRSAmJiBldnQuY3RybEtleSkpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6dG9nZ2xlJyk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuVVApIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6cHJldmlvdXMnKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5ET1dOKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm5leHQnKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5FU0MgfHwga2V5ID09PSBLRVlTLlRBQikge1xuICAgICAgICAgIHNlbGYuY2xvc2UoKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVOVEVSIHx8IGtleSA9PT0gS0VZUy5TUEFDRSB8fFxuICAgICAgICAgICAgKChrZXkgPT09IEtFWVMuRE9XTiB8fCBrZXkgPT09IEtFWVMuVVApICYmIGV2dC5hbHRLZXkpKSB7XG4gICAgICAgICAgc2VsZi5vcGVuKCk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9zeW5jQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc2V0KCdkaXNhYmxlZCcsIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnKSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGlzYWJsZWQnKSkge1xuICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRyaWdnZXIoJ2Rpc2FibGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmlnZ2VyKCdlbmFibGUnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSB0cmlnZ2VyIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgcHJlLWV2ZW50cyB3aGVuXG4gICAqIHRoZXJlIGFyZSBldmVudHMgdGhhdCBjYW4gYmUgcHJldmVudGVkLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG4gICAgdmFyIGFjdHVhbFRyaWdnZXIgPSBTZWxlY3QyLl9fc3VwZXJfXy50cmlnZ2VyO1xuICAgIHZhciBwcmVUcmlnZ2VyTWFwID0ge1xuICAgICAgJ29wZW4nOiAnb3BlbmluZycsXG4gICAgICAnY2xvc2UnOiAnY2xvc2luZycsXG4gICAgICAnc2VsZWN0JzogJ3NlbGVjdGluZycsXG4gICAgICAndW5zZWxlY3QnOiAndW5zZWxlY3RpbmcnXG4gICAgfTtcblxuICAgIGlmIChuYW1lIGluIHByZVRyaWdnZXJNYXApIHtcbiAgICAgIHZhciBwcmVUcmlnZ2VyTmFtZSA9IHByZVRyaWdnZXJNYXBbbmFtZV07XG4gICAgICB2YXIgcHJlVHJpZ2dlckFyZ3MgPSB7XG4gICAgICAgIHByZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgIH07XG5cbiAgICAgIGFjdHVhbFRyaWdnZXIuY2FsbCh0aGlzLCBwcmVUcmlnZ2VyTmFtZSwgcHJlVHJpZ2dlckFyZ3MpO1xuXG4gICAgICBpZiAocHJlVHJpZ2dlckFyZ3MucHJldmVudGVkKSB7XG4gICAgICAgIGFyZ3MucHJldmVudGVkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0dWFsVHJpZ2dlci5jYWxsKHRoaXMsIG5hbWUsIGFyZ3MpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge30pO1xuXG4gICAgdGhpcy50cmlnZ2VyKCdvcGVuJyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGFpbmVyLmhhc0NsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTZWxlY3QyOiBUaGUgYHNlbGVjdDIoXCJlbmFibGVcIilgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsJyArXG4gICAgICAgICcgYmUgcmVtb3ZlZCBpbiBsYXRlciBTZWxlY3QyIHZlcnNpb25zLiBVc2UgJGVsZW1lbnQucHJvcChcImRpc2FibGVkXCIpJyArXG4gICAgICAgICcgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChhcmdzID09IG51bGwgfHwgYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIGFyZ3MgPSBbdHJ1ZV07XG4gICAgfVxuXG4gICAgdmFyIGRpc2FibGVkID0gIWFyZ3NbMF07XG5cbiAgICB0aGlzLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgZGlzYWJsZWQpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiZcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTZWxlY3QyOiBEYXRhIGNhbiBubyBsb25nZXIgYmUgc2V0IHVzaW5nIGBzZWxlY3QyKFwiZGF0YVwiKWAuIFlvdSAnICtcbiAgICAgICAgJ3Nob3VsZCBjb25zaWRlciBzZXR0aW5nIHRoZSB2YWx1ZSBpbnN0ZWFkIHVzaW5nIGAkZWxlbWVudC52YWwoKWAuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFtdO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgZGF0YSA9IGN1cnJlbnREYXRhO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NlbGVjdDI6IFRoZSBgc2VsZWN0MihcInZhbFwiKWAgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUnICtcbiAgICAgICAgJyByZW1vdmVkIGluIGxhdGVyIFNlbGVjdDIgdmVyc2lvbnMuIFVzZSAkZWxlbWVudC52YWwoKSBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQudmFsKCk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1ZhbCA9IGFyZ3NbMF07XG5cbiAgICBpZiAoJC5pc0FycmF5KG5ld1ZhbCkpIHtcbiAgICAgIG5ld1ZhbCA9ICQubWFwKG5ld1ZhbCwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LnZhbChuZXdWYWwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kY29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnRbMF0uZGV0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uZGV0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCB0aGlzLl9zeW5jKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudFswXS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01BdHRyTW9kaWZpZWQnLCB0aGlzLl9zeW5jLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3luYyA9IG51bGw7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnNlbGVjdDInKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgdGhpcy4kZWxlbWVudC5kYXRhKCdvbGQtdGFiaW5kZXgnKSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LnNob3coKTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZURhdGEoJ3NlbGVjdDInKTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRyb3Bkb3duLmRlc3Ryb3koKTtcbiAgICB0aGlzLnJlc3VsdHMuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5kYXRhQWRhcHRlciA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsO1xuICAgIHRoaXMuZHJvcGRvd24gPSBudWxsO1xuICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXJcIj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0aW9uXCI+PC9zcGFuPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJkcm9wZG93bi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgICRjb250YWluZXIuYXR0cignZGlyJywgdGhpcy5vcHRpb25zLmdldCgnZGlyJykpO1xuXG4gICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcblxuICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLScgKyB0aGlzLm9wdGlvbnMuZ2V0KCd0aGVtZScpKTtcblxuICAgICRjb250YWluZXIuZGF0YSgnZWxlbWVudCcsIHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdDI7XG59KTtcblxuUzIuZGVmaW5lKCdqcXVlcnkuc2VsZWN0MicsW1xuICAnanF1ZXJ5JyxcbiAgJy4vc2VsZWN0Mi9jb3JlJyxcbiAgJy4vc2VsZWN0Mi9kZWZhdWx0cydcbl0sIGZ1bmN0aW9uICgkLCBTZWxlY3QyLCBEZWZhdWx0cykge1xuICAvLyBGb3JjZSBqUXVlcnkubW91c2V3aGVlbCB0byBiZSBsb2FkZWQgaWYgaXQgaGFzbid0IGFscmVhZHlcblxuICBpZiAoJC5mbi5zZWxlY3QyID09IG51bGwpIHtcbiAgICAkLmZuLnNlbGVjdDIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2VPcHRpb25zID0gJC5leHRlbmQoe30sIG9wdGlvbnMsIHRydWUpO1xuXG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFNlbGVjdDIoJCh0aGlzKSwgaW5zdGFuY2VPcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmRhdGEoJ3NlbGVjdDInKTtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtvcHRpb25zXShhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMgZm9yIFNlbGVjdDI6ICcgKyBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKCQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9PSBudWxsKSB7XG4gICAgJC5mbi5zZWxlY3QyLmRlZmF1bHRzID0gRGVmYXVsdHM7XG4gIH1cblxuICByZXR1cm4gU2VsZWN0Mjtcbn0pO1xuXG4gIC8vIFJldHVybiB0aGUgQU1EIGxvYWRlciBjb25maWd1cmF0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIG91dHNpZGUgb2YgdGhpcyBmaWxlXG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiBTMi5kZWZpbmUsXG4gICAgcmVxdWlyZTogUzIucmVxdWlyZVxuICB9O1xufSgpKTtcblxuICAvLyBBdXRvbG9hZCB0aGUgalF1ZXJ5IGJpbmRpbmdzXG4gIC8vIFdlIGtub3cgdGhhdCBhbGwgb2YgdGhlIG1vZHVsZXMgZXhpc3QgYWJvdmUgdGhpcywgc28gd2UncmUgc2FmZVxuICB2YXIgc2VsZWN0MiA9IFMyLnJlcXVpcmUoJ2pxdWVyeS5zZWxlY3QyJyk7XG5cbiAgLy8gSG9sZCB0aGUgQU1EIG1vZHVsZSByZWZlcmVuY2VzIG9uIHRoZSBqUXVlcnkgZnVuY3Rpb24gdGhhdCB3YXMganVzdCBsb2FkZWRcbiAgLy8gVGhpcyBhbGxvd3MgU2VsZWN0MiB0byB1c2UgdGhlIGludGVybmFsIGxvYWRlciBvdXRzaWRlIG9mIHRoaXMgZmlsZSwgc3VjaFxuICAvLyBhcyBpbiB0aGUgbGFuZ3VhZ2UgZmlsZXMuXG4gICQuZm4uc2VsZWN0Mi5hbWQgPSBTMjtcblxuICAvLyBSZXR1cm4gdGhlIFNlbGVjdDIgaW5zdGFuY2UgZm9yIGFueW9uZSB3aG8gaXMgaW1wb3J0aW5nIGl0LlxuICByZXR1cm4gc2VsZWN0Mjtcbn0pKTtcbiIsIi8qXG5UZW1wbGF0ZSBOYW1lOiBDb2xvciBBZG1pbiAtIFJlc3BvbnNpdmUgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlIGJ1aWxkIHdpdGggVHdpdHRlciBCb290c3RyYXAgNFxuVmVyc2lvbjogNC42LjBcbkF1dGhvcjogU2VhbiBOZ3VcbldlYnNpdGU6IGh0dHA6Ly93d3cuc2VhbnRoZW1lLmNvbS9jb2xvci1hZG1pbi9hZG1pbi9cblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRBUFBTIENPTlRFTlQgVEFCTEVcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdDwhLS0gPT09PT09PT0gR0xPQkFMIFNDUklQVCBTRVRUSU5HID09PT09PT09IC0tPlxuXHQwMS4gSGFuZGxlIFNjcm9sbGJhclxuXHQwMi4gSGFuZGxlIFNpZGViYXIgLSBNZW51XG5cdDAzLiBIYW5kbGUgU2lkZWJhciAtIE1vYmlsZSBWaWV3IFRvZ2dsZVxuXHQwNC4gSGFuZGxlIFNpZGViYXIgLSBNaW5pZnkgLyBFeHBhbmRcblx0MDUuIEhhbmRsZSBQYWdlIExvYWQgLSBGYWRlIGluXG5cdDA2LiBIYW5kbGUgUGFuZWwgLSBSZW1vdmUgLyBSZWxvYWQgLyBDb2xsYXBzZSAvIEV4cGFuZFxuXHQwNy4gSGFuZGxlIFBhbmVsIC0gRHJhZ2dhYmxlXG5cdDA4LiBIYW5kbGUgVG9vbHRpcCAmIFBvcG92ZXIgQWN0aXZhdGlvblxuXHQwOS4gSGFuZGxlIFNjcm9sbCB0byBUb3AgQnV0dG9uIEFjdGl2YXRpb25cblxuXHQ8IS0tID09PT09PT09IEFkZGVkIGluIFYxLjIgPT09PT09PT0gLS0+XG5cdDEwLiBIYW5kbGUgVGhlbWUgJiBQYWdlIFN0cnVjdHVyZSBDb25maWd1cmF0aW9uIC0gYWRkZWQgaW4gVjEuMlxuXHQxMS4gSGFuZGxlIFRoZW1lIFBhbmVsIEV4cGFuZCAtIGFkZGVkIGluIFYxLjJcblx0MTIuIEhhbmRsZSBBZnRlciBQYWdlIExvYWQgQWRkIENsYXNzIEZ1bmN0aW9uIC0gYWRkZWQgaW4gVjEuMlxuXG5cdDwhLS0gPT09PT09PT0gQWRkZWQgaW4gVjEuNSA9PT09PT09PSAtLT5cblx0MTMuIEhhbmRsZSBTYXZlIFBhbmVsIFBvc2l0aW9uIEZ1bmN0aW9uIC0gYWRkZWQgaW4gVjEuNVxuXHQxNC4gSGFuZGxlIERyYWdnYWJsZSBQYW5lbCBMb2NhbCBTdG9yYWdlIEZ1bmN0aW9uIC0gYWRkZWQgaW4gVjEuNVxuXHQxNS4gSGFuZGxlIFJlc2V0IExvY2FsIFN0b3JhZ2UgLSBhZGRlZCBpbiBWMS41XG5cblx0PCEtLSA9PT09PT09PSBBZGRlZCBpbiBWMS42ID09PT09PT09IC0tPlxuXHQxNi4gSGFuZGxlIElFIEZ1bGwgSGVpZ2h0IFBhZ2UgQ29tcGF0aWJpbGl0eSAtIGFkZGVkIGluIFYxLjZcblx0MTcuIEhhbmRsZSBVbmxpbWl0ZWQgTmF2IFRhYnMgLSBhZGRlZCBpbiBWMS42XG5cblx0PCEtLSA9PT09PT09PSBBZGRlZCBpbiBWMS45ID09PT09PT09IC0tPlxuXHQxOC4gSGFuZGxlIFRvcCBNZW51IC0gVW5saW1pdGVkIFRvcCBNZW51IFJlbmRlciAtIGFkZGVkIGluIFYxLjlcblx0MTkuIEhhbmRsZSBUb3AgTWVudSAtIFN1YiBNZW51IFRvZ2dsZSAtIGFkZGVkIGluIFYxLjlcblx0MjAuIEhhbmRsZSBUb3AgTWVudSAtIE1vYmlsZSBTdWIgTWVudSBUb2dnbGUgLSBhZGRlZCBpbiBWMS45XG5cdDIxLiBIYW5kbGUgVG9wIE1lbnUgLSBNb2JpbGUgVG9wIE1lbnUgVG9nZ2xlIC0gYWRkZWQgaW4gVjEuOVxuXHQyMi4gSGFuZGxlIENsZWFyIFNpZGViYXIgU2VsZWN0aW9uICYgSGlkZSBNb2JpbGUgTWVudSAtIGFkZGVkIGluIFYxLjlcblxuXHQ8IS0tID09PT09PT09IEFkZGVkIGluIFY0LjAgPT09PT09PT0gLS0+XG5cdDIzLiBIYW5kbGUgQ2hlY2sgQm9vdHN0cmFwIFZlcnNpb24gLSBhZGRlZCBpbiBWNC4wXG5cdDI0LiBIYW5kbGUgUGFnZSBTY3JvbGwgQ2xhc3MgLSBhZGRlZCBpbiBWNC4wXG5cdDI1LiBIYW5kbGUgVG9nZ2xlIE5hdmJhciBQcm9maWxlIC0gYWRkZWQgaW4gVjQuMFxuXHQyNi4gSGFuZGxlIFNpZGViYXIgU2Nyb2xsIE1lbW9yeSAtIGFkZGVkIGluIFY0LjBcblx0MjcuIEhhbmRsZSBTaWRlYmFyIE1pbmlmeSBTdWIgTWVudSAtIGFkZGVkIGluIFY0LjBcblx0MjguIEhhbmRsZSBBamF4IE1vZGUgLSBhZGRlZCBpbiBWNC4wXG5cdDI5LiBIYW5kbGUgRmxvYXQgTmF2YmFyIFNlYXJjaCAtIGFkZGVkIGluIFY0LjBcblxuXHQ8IS0tID09PT09PT09IEFQUExJQ0FUSU9OIFNFVFRJTkcgPT09PT09PT0gLS0+XG5cdEFwcGxpY2F0aW9uIENvbnRyb2xsZXJcbiovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbi8qIDAxLiBIYW5kbGUgU2Nyb2xsYmFyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVTbGltU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQkLndoZW4oJCgnW2RhdGEtc2Nyb2xsYmFyPXRydWVdJykuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0Z2VuZXJhdGVTbGltU2Nyb2xsKCQodGhpcykpO1xuXHR9KSkuZG9uZShmdW5jdGlvbigpIHtcblx0XHQkKCdbZGF0YS1zY3JvbGxiYXI9XCJ0cnVlXCJdJykubW91c2VvdmVyKCk7XG5cdH0pO1xufTtcbnZhciBnZW5lcmF0ZVNsaW1TY3JvbGwgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cdGlmICgkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtaW5pdCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBkYXRhSGVpZ2h0ID0gJChlbGVtZW50KS5hdHRyKCdkYXRhLWhlaWdodCcpO1xuXHQgICAgZGF0YUhlaWdodCA9ICghZGF0YUhlaWdodCkgPyAkKGVsZW1lbnQpLmhlaWdodCgpIDogZGF0YUhlaWdodDtcblxuXHR2YXIgc2Nyb2xsQmFyT3B0aW9uID0ge1xuXHRcdGhlaWdodDogZGF0YUhlaWdodFxuXHR9O1xuXHRpZigvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHQkKGVsZW1lbnQpLmNzcygnaGVpZ2h0JywgZGF0YUhlaWdodCk7XG5cdFx0JChlbGVtZW50KS5jc3MoJ292ZXJmbG93LXgnLCdzY3JvbGwnKTtcblx0fSBlbHNlIHtcblx0XHQkKGVsZW1lbnQpLnNsaW1TY3JvbGwoc2Nyb2xsQmFyT3B0aW9uKTtcblx0fVxuXHQkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtaW5pdCcsIHRydWUpO1xuXHQkKCcuc2xpbVNjcm9sbEJhcicpLmhpZGUoKTtcbn07XG5cblxuLyogMDIuIEhhbmRsZSBTaWRlYmFyIC0gTWVudVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlU2lkZWJhck1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgZXhwYW5kVGltZSA9ICgkKCcuc2lkZWJhcicpLmF0dHIoJ2RhdGEtZGlzYWJsZS1zbGlkZS1hbmltYXRpb24nKSkgPyAwIDogMjUwO1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXIgLm5hdiA+IC5oYXMtc3ViID4gYScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0YXJnZXQgPSAkKHRoaXMpLm5leHQoJy5zdWItbWVudScpO1xuXHRcdHZhciBvdGhlck1lbnUgPSAkKCcuc2lkZWJhciAubmF2ID4gbGkuaGFzLXN1YiA+IC5zdWItbWVudScpLm5vdCh0YXJnZXQpO1xuXG5cdFx0aWYgKCQoJy5wYWdlLXNpZGViYXItbWluaWZpZWQnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQob3RoZXJNZW51KS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdjbG9zaW5nJyk7XG5cdFx0XHQkKG90aGVyTWVudSkuc2xpZGVVcChleHBhbmRUaW1lLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChvdGhlck1lbnUpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2Nsb3NlZCcpLnJlbW92ZUNsYXNzKCdleHBhbmQgY2xvc2luZycpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoJCh0YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRcdCQodGFyZ2V0KS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdjbG9zaW5nJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0YXJnZXQpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2V4cGFuZGluZycpLnJlbW92ZUNsYXNzKCdjbG9zZWQnKTtcblx0XHRcdH1cblx0XHRcdCQodGFyZ2V0KS5zbGlkZVRvZ2dsZShleHBhbmRUaW1lLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHRhcmdldExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xuXHRcdFx0XHRpZiAoISQodGFyZ2V0KS5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0XHRcdCQodGFyZ2V0TGkpLmFkZENsYXNzKCdjbG9zZWQnKTtcblx0XHRcdFx0XHQkKHRhcmdldExpKS5yZW1vdmVDbGFzcygnZXhwYW5kJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JCh0YXJnZXRMaSkuYWRkQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdFx0XHRcdCQodGFyZ2V0TGkpLnJlbW92ZUNsYXNzKCdjbG9zZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRhcmdldExpKS5yZW1vdmVDbGFzcygnZXhwYW5kaW5nIGNsb3NpbmcnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhciAubmF2ID4gLmhhcy1zdWIgLnN1Yi1tZW51IGxpLmhhcy1zdWIgPiBhJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCQoJy5wYWdlLXNpZGViYXItbWluaWZpZWQnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdHZhciB0YXJnZXQgPSAkKHRoaXMpLm5leHQoJy5zdWItbWVudScpO1xuXHRcdFx0aWYgKCQodGFyZ2V0KS5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0XHQkKHRhcmdldCkuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnY2xvc2luZycpLnJlbW92ZUNsYXNzKCdleHBhbmQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGFyZ2V0KS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdleHBhbmRpbmcnKS5yZW1vdmVDbGFzcygnY2xvc2VkJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRhcmdldCkuc2xpZGVUb2dnbGUoZXhwYW5kVGltZSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcblx0XHRcdFx0aWYgKCEkKHRhcmdldCkuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdFx0XHQkKHRhcmdldExpKS5hZGRDbGFzcygnY2xvc2VkJyk7XG5cdFx0XHRcdFx0JCh0YXJnZXRMaSkucmVtb3ZlQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGFyZ2V0TGkpLmFkZENsYXNzKCdleHBhbmQnKTtcblx0XHRcdFx0XHQkKHRhcmdldExpKS5yZW1vdmVDbGFzcygnY2xvc2VkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JCh0YXJnZXRMaSkucmVtb3ZlQ2xhc3MoJ2V4cGFuZGluZyBjbG9zaW5nJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuXG4vKiAwMy4gSGFuZGxlIFNpZGViYXIgLSBNb2JpbGUgVmlldyBUb2dnbGVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZU1vYmlsZVNpZGViYXJUb2dnbGUgPSBmdW5jdGlvbigpIHtcblx0dmFyIHNpZGViYXJQcm9ncmVzcyA9IGZhbHNlO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5zaWRlYmFyJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2lkZWJhcicpLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0c2lkZWJhclByb2dyZXNzID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2lkZWJhclByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zaWRlYmFyJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRzaWRlYmFyUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJyNmbG9hdC1zdWItbWVudScpLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0c2lkZWJhclByb2dyZXNzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSAmJiBzaWRlYmFyUHJvZ3Jlc3MgIT09IHRydWUpIHtcblx0XHRcdGlmICgkKCcjcGFnZS1jb250YWluZXInKS5oYXNDbGFzcygncGFnZS1zaWRlYmFyLXRvZ2dsZWQnKSkge1xuXHRcdFx0XHRzaWRlYmFyUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdFx0XHQkKCcjcGFnZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygncGFnZS1zaWRlYmFyLXRvZ2dsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA3NjcpIHtcblx0XHRcdFx0aWYgKCQoJyNwYWdlLWNvbnRhaW5lcicpLmhhc0NsYXNzKCdwYWdlLXJpZ2h0LXNpZGViYXItdG9nZ2xlZCcpKSB7XG5cdFx0XHRcdFx0c2lkZWJhclByb2dyZXNzID0gdHJ1ZTtcblx0XHRcdFx0XHQkKCcjcGFnZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygncGFnZS1yaWdodC1zaWRlYmFyLXRvZ2dsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPXJpZ2h0LXNpZGViYXItdG9nZ2xlZF0nLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR2YXIgdGFyZ2V0Q29udGFpbmVyID0gJyNwYWdlLWNvbnRhaW5lcic7XG5cdFx0dmFyIHRhcmdldENsYXNzID0gJ3BhZ2UtcmlnaHQtc2lkZWJhci1jb2xsYXBzZWQnO1xuXHRcdHRhcmdldENsYXNzID0gKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSA/ICdwYWdlLXJpZ2h0LXNpZGViYXItdG9nZ2xlZCcgOiB0YXJnZXRDbGFzcztcblx0XHRpZiAoJCh0YXJnZXRDb250YWluZXIpLmhhc0NsYXNzKHRhcmdldENsYXNzKSkge1xuXHRcdFx0JCh0YXJnZXRDb250YWluZXIpLnJlbW92ZUNsYXNzKHRhcmdldENsYXNzKTtcblx0XHR9IGVsc2UgaWYgKHNpZGViYXJQcm9ncmVzcyAhPT0gdHJ1ZSkge1xuXHRcdFx0JCh0YXJnZXRDb250YWluZXIpLmFkZENsYXNzKHRhcmdldENsYXNzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2lkZWJhclByb2dyZXNzID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDQ4MCkge1xuXHRcdFx0JCgnI3BhZ2UtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3BhZ2Utc2lkZWJhci10b2dnbGVkJyk7XG5cdFx0fVxuXHRcdCQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcblx0fSk7XG5cblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPXNpZGViYXItdG9nZ2xlZF0nLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR2YXIgc2lkZWJhckNsYXNzID0gJ3BhZ2Utc2lkZWJhci10b2dnbGVkJztcblx0XHR2YXIgdGFyZ2V0Q29udGFpbmVyID0gJyNwYWdlLWNvbnRhaW5lcic7XG5cblx0XHRpZiAoJCh0YXJnZXRDb250YWluZXIpLmhhc0NsYXNzKHNpZGViYXJDbGFzcykpIHtcblx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyhzaWRlYmFyQ2xhc3MpO1xuXHRcdH0gZWxzZSBpZiAoc2lkZWJhclByb2dyZXNzICE9PSB0cnVlKSB7XG5cdFx0XHQkKHRhcmdldENvbnRhaW5lcikuYWRkQ2xhc3Moc2lkZWJhckNsYXNzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2lkZWJhclByb2dyZXNzID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDQ4MCkge1xuXHRcdFx0JCgnI3BhZ2UtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3BhZ2UtcmlnaHQtc2lkZWJhci10b2dnbGVkJyk7XG5cdFx0fVxuXHR9KTtcbn07XG5cblxuLyogMDQuIEhhbmRsZSBTaWRlYmFyIC0gTWluaWZ5IC8gRXhwYW5kXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVTaWRlYmFyTWluaWZ5ID0gZnVuY3Rpb24oKSB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cInNpZGViYXItbWluaWZ5XCJdJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgc2lkZWJhckNsYXNzID0gJ3BhZ2Utc2lkZWJhci1taW5pZmllZCc7XG5cdFx0dmFyIHRhcmdldENvbnRhaW5lciA9ICcjcGFnZS1jb250YWluZXInO1xuXHRcdHZhciBzaWRlYmFyTWluaWZpZWQgPSBmYWxzZTtcblxuXHRcdGlmICgkKHRhcmdldENvbnRhaW5lcikuaGFzQ2xhc3Moc2lkZWJhckNsYXNzKSkge1xuXHRcdFx0JCh0YXJnZXRDb250YWluZXIpLnJlbW92ZUNsYXNzKHNpZGViYXJDbGFzcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5hZGRDbGFzcyhzaWRlYmFyQ2xhc3MpO1xuXG5cdFx0XHRpZigvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdFx0JCgnI3NpZGViYXIgW2RhdGEtc2Nyb2xsYmFyPVwidHJ1ZVwiXScpLmNzcygnbWFyZ2luLXRvcCcsJzAnKTtcblx0XHRcdFx0JCgnI3NpZGViYXIgW2RhdGEtc2Nyb2xsYmFyPVwidHJ1ZVwiXScpLmNzcygnb3ZlcmZsb3cteCcsICdzY3JvbGwnKTtcblx0XHRcdH1cblx0XHRcdHNpZGViYXJNaW5pZmllZCA9IHRydWU7XG5cdFx0fVxuXHRcdCQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcblxuXHRcdGlmIChDb29raWVzKSB7XG5cdFx0XHRDb29raWVzLnNldCgnc2lkZWJhci1taW5pZmllZCcsIHNpZGViYXJNaW5pZmllZCk7XG5cdFx0fVxuXHR9KTtcblx0LyppZiAoQ29va2llcykge1xuXHRcdHZhciBzaWRlYmFyTWluaWZpZWQgPSBDb29raWVzLmdldCgnc2lkZWJhci1taW5pZmllZCcpO1xuXG5cdFx0aWYgKHNpZGViYXJNaW5pZmllZCA9PT0gJ3RydWUnKSB7XG5cdFx0XHQkKCcjcGFnZS1jb250YWluZXInKS5hZGRDbGFzcygncGFnZS1zaWRlYmFyLW1pbmlmaWVkJyk7XG5cdFx0fVxuXHR9Ki9cbn07XG5cblxuLyogMDUuIEhhbmRsZSBQYWdlIExvYWQgLSBGYWRlIGluXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVQYWdlQ29udGVudFZpZXcgPSBmdW5jdGlvbigpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIGhpZGVDbGFzcyA9ICcnO1xuXHR2YXIgc2hvd0NsYXNzID0gJyc7XG5cdHZhciByZW1vdmVDbGFzcyA9ICcnO1xuXHR2YXIgYm9vdHN0cmFwVmVyc2lvbiA9IGhhbmRsZUNoZWNrQm9vdHN0cmFwVmVyc2lvbigpO1xuXG5cdGlmIChib290c3RyYXBWZXJzaW9uID49IDMgJiYgYm9vdHN0cmFwVmVyc2lvbiA8IDQpIHtcblx0XHRoaWRlQ2xhc3MgPSAnaGlkZSc7XG5cdFx0c2hvd0NsYXNzID0gJ2luJztcblx0fSBlbHNlIGlmIChib290c3RyYXBWZXJzaW9uID49IDQgJiYgYm9vdHN0cmFwVmVyc2lvbiA8IDUpIHtcblx0XHRoaWRlQ2xhc3MgPSAnZC1ub25lJztcblx0XHRzaG93Q2xhc3MgPSAnc2hvdyc7XG5cdH1cblx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0JC53aGVuKCQoJyNwYWdlLWxvYWRlcicpLmFkZENsYXNzKGhpZGVDbGFzcykpLmRvbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjcGFnZS1jb250YWluZXInKS5hZGRDbGFzcyhzaG93Q2xhc3MpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cblxuLyogMDYuIEhhbmRsZSBQYW5lbCAtIFJlbW92ZSAvIFJlbG9hZCAvIENvbGxhcHNlIC8gRXhwYW5kXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBwYW5lbEFjdGlvblJ1bm5pbmcgPSBmYWxzZTtcbnZhciBoYW5kbGVQYW5lbEFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAocGFuZWxBY3Rpb25SdW5uaW5nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHBhbmVsQWN0aW9uUnVubmluZyA9IHRydWU7XG5cblx0Ly8gcmVtb3ZlXG5cdCQoZG9jdW1lbnQpLm9uKCdob3ZlcicsICdbZGF0YS1jbGljaz1wYW5lbC1yZW1vdmVdJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmICghJCh0aGlzKS5hdHRyKCdkYXRhLWluaXQnKSkge1xuXHRcdFx0JCh0aGlzKS50b29sdGlwKHtcblx0XHRcdFx0dGl0bGU6ICdSZW1vdmUnLFxuXHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0XHR0cmlnZ2VyOiAnaG92ZXInLFxuXHRcdFx0XHRjb250YWluZXI6ICdib2R5J1xuXHRcdFx0fSk7XG5cdFx0XHQkKHRoaXMpLnRvb2x0aXAoJ3Nob3cnKTtcblx0XHRcdCQodGhpcykuYXR0cignZGF0YS1pbml0JywgdHJ1ZSk7XG5cdFx0fVxuXHR9KTtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPXBhbmVsLXJlbW92ZV0nLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBib290c3RyYXBWZXJzaW9uID0gaGFuZGxlQ2hlY2tCb290c3RyYXBWZXJzaW9uKCk7XG5cblx0XHRpZiAoYm9vdHN0cmFwVmVyc2lvbiA+PSA0ICYmIGJvb3RzdHJhcFZlcnNpb24gPCA1KSB7XG5cdFx0XHQkKHRoaXMpLnRvb2x0aXAoJ2Rpc3Bvc2UnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS50b29sdGlwKCdkZXN0cm95Jyk7XG5cdFx0fVxuXHRcdCQodGhpcykuY2xvc2VzdCgnLnBhbmVsJykucmVtb3ZlKCk7XG5cdH0pO1xuXG5cdC8vIGNvbGxhcHNlXG5cdCQoZG9jdW1lbnQpLm9uKCdob3ZlcicsICdbZGF0YS1jbGljaz1wYW5lbC1jb2xsYXBzZV0nLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKCEkKHRoaXMpLmF0dHIoJ2RhdGEtaW5pdCcpKSB7XG5cdFx0XHQkKHRoaXMpLnRvb2x0aXAoe1xuXHRcdFx0XHR0aXRsZTogJ0NvbGxhcHNlIC8gRXhwYW5kJyxcblx0XHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdFx0dHJpZ2dlcjogJ2hvdmVyJyxcblx0XHRcdFx0Y29udGFpbmVyOiAnYm9keSdcblx0XHRcdH0pO1xuXHRcdFx0JCh0aGlzKS50b29sdGlwKCdzaG93Jyk7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2RhdGEtaW5pdCcsIHRydWUpO1xuXHRcdH1cblx0fSk7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1wYW5lbC1jb2xsYXBzZV0nLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQodGhpcykuY2xvc2VzdCgnLnBhbmVsJykuZmluZCgnLnBhbmVsLWJvZHknKS5zbGlkZVRvZ2dsZSgpO1xuXHR9KTtcblxuXHQvLyByZWxvYWRcblx0JChkb2N1bWVudCkub24oJ2hvdmVyJywgJ1tkYXRhLWNsaWNrPXBhbmVsLXJlbG9hZF0nLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKCEkKHRoaXMpLmF0dHIoJ2RhdGEtaW5pdCcpKSB7XG5cdFx0XHQkKHRoaXMpLnRvb2x0aXAoe1xuXHRcdFx0XHR0aXRsZTogJ1JlbG9hZCcsXG5cdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdHRyaWdnZXI6ICdob3ZlcicsXG5cdFx0XHRcdGNvbnRhaW5lcjogJ2JvZHknXG5cdFx0XHR9KTtcblx0XHRcdCQodGhpcykudG9vbHRpcCgnc2hvdycpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdkYXRhLWluaXQnLCB0cnVlKTtcblx0XHR9XG5cdH0pO1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9cGFuZWwtcmVsb2FkXScsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIHRhcmdldCA9ICQodGhpcykuY2xvc2VzdCgnLnBhbmVsJyk7XG5cdFx0aWYgKCEkKHRhcmdldCkuaGFzQ2xhc3MoJ3BhbmVsLWxvYWRpbmcnKSkge1xuXHRcdFx0dmFyIHRhcmdldEJvZHkgPSAkKHRhcmdldCkuZmluZCgnLnBhbmVsLWJvZHknKTtcblx0XHRcdHZhciBzcGlubmVySHRtbCA9ICc8ZGl2IGNsYXNzPVwicGFuZWwtbG9hZGVyXCI+PHNwYW4gY2xhc3M9XCJzcGlubmVyLXNtYWxsXCI+PC9zcGFuPjwvZGl2Pic7XG5cdFx0XHQkKHRhcmdldCkuYWRkQ2xhc3MoJ3BhbmVsLWxvYWRpbmcnKTtcblx0XHRcdCQodGFyZ2V0Qm9keSkucHJlcGVuZChzcGlubmVySHRtbCk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BhbmVsLWxvYWRpbmcnKTtcblx0XHRcdFx0JCh0YXJnZXQpLmZpbmQoJy5wYW5lbC1sb2FkZXInKS5yZW1vdmUoKTtcblx0XHRcdH0sIDIwMDApO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gZXhwYW5kXG5cdCQoZG9jdW1lbnQpLm9uKCdob3ZlcicsICdbZGF0YS1jbGljaz1wYW5lbC1leHBhbmRdJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmICghJCh0aGlzKS5hdHRyKCdkYXRhLWluaXQnKSkge1xuXHRcdFx0JCh0aGlzKS50b29sdGlwKHtcblx0XHRcdFx0dGl0bGU6ICdFeHBhbmQgLyBDb21wcmVzcycsXG5cdFx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRcdHRyaWdnZXI6ICdob3ZlcicsXG5cdFx0XHRcdGNvbnRhaW5lcjogJ2JvZHknXG5cdFx0XHR9KTtcblx0XHRcdCQodGhpcykudG9vbHRpcCgnc2hvdycpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdkYXRhLWluaXQnLCB0cnVlKTtcblx0XHR9XG5cdH0pO1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9cGFuZWwtZXhwYW5kXScsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIHRhcmdldCA9ICQodGhpcykuY2xvc2VzdCgnLnBhbmVsJyk7XG5cdFx0dmFyIHRhcmdldEJvZHkgPSAkKHRhcmdldCkuZmluZCgnLnBhbmVsLWJvZHknKTtcblx0XHR2YXIgdGFyZ2V0VG9wID0gNDA7XG5cdFx0aWYgKCQodGFyZ2V0Qm9keSkubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHR2YXIgdGFyZ2V0T2Zmc2V0VG9wID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcblx0XHRcdHZhciB0YXJnZXRCb2R5T2Zmc2V0VG9wID0gJCh0YXJnZXRCb2R5KS5vZmZzZXQoKS50b3A7XG5cdFx0XHR0YXJnZXRUb3AgPSB0YXJnZXRCb2R5T2Zmc2V0VG9wIC0gdGFyZ2V0T2Zmc2V0VG9wO1xuXHRcdH1cblxuXHRcdGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3BhbmVsLWV4cGFuZCcpICYmICQodGFyZ2V0KS5oYXNDbGFzcygncGFuZWwtZXhwYW5kJykpIHtcblx0XHRcdCQoJ2JvZHksIC5wYW5lbCcpLnJlbW92ZUNsYXNzKCdwYW5lbC1leHBhbmQnKTtcblx0XHRcdCQoJy5wYW5lbCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0XHQkKHRhcmdldEJvZHkpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygncGFuZWwtZXhwYW5kJyk7XG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5wYW5lbCcpLmFkZENsYXNzKCdwYW5lbC1leHBhbmQnKTtcblxuXHRcdFx0aWYgKCQodGFyZ2V0Qm9keSkubGVuZ3RoICE9PSAwICYmIHRhcmdldFRvcCAhPSA0MCkge1xuXHRcdFx0XHR2YXIgZmluYWxIZWlnaHQgPSA0MDtcblx0XHRcdFx0JCh0YXJnZXQpLmZpbmQoJyA+IConKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0YXJnZXRDbGFzcyA9ICQodGhpcykuYXR0cignY2xhc3MnKTtcblxuXHRcdFx0XHRcdGlmICh0YXJnZXRDbGFzcyAhPSAncGFuZWwtaGVhZGluZycgJiYgdGFyZ2V0Q2xhc3MgIT0gJ3BhbmVsLWJvZHknKSB7XG5cdFx0XHRcdFx0XHRmaW5hbEhlaWdodCArPSAkKHRoaXMpLmhlaWdodCgpICsgMzA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGZpbmFsSGVpZ2h0ICE9IDQwKSB7XG5cdFx0XHRcdFx0JCh0YXJnZXRCb2R5KS5jc3MoJ3RvcCcsIGZpbmFsSGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0JCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuXHR9KTtcbn07XG5cblxuLyogMDcuIEhhbmRsZSBQYW5lbCAtIERyYWdnYWJsZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlRHJhZ2dhYmxlUGFuZWwgPSBmdW5jdGlvbigpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciB0YXJnZXQgPSAkKCcucGFuZWw6bm90KFtkYXRhLXNvcnRhYmxlPVwiZmFsc2VcIl0pJykucGFyZW50KCdbY2xhc3MqPWNvbF0nKTtcblx0dmFyIHRhcmdldEhhbmRsZSA9ICcucGFuZWwtaGVhZGluZyc7XG5cdHZhciBjb25uZWN0ZWRUYXJnZXQgPSAnLnJvdyA+IFtjbGFzcyo9Y29sXSc7XG5cblx0JCh0YXJnZXQpLnNvcnRhYmxlKHtcblx0XHRoYW5kbGU6IHRhcmdldEhhbmRsZSxcblx0XHRjb25uZWN0V2l0aDogY29ubmVjdGVkVGFyZ2V0LFxuXHRcdHN0b3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuXHRcdFx0dWkuaXRlbS5maW5kKCcucGFuZWwtdGl0bGUnKS5hcHBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaCBmYS1zcGluIG0tbC01XCIgZGF0YS1pZD1cInRpdGxlLXNwaW5uZXJcIj48L2k+Jyk7XG5cdFx0XHRoYW5kbGVTYXZlUGFuZWxQb3NpdGlvbih1aS5pdGVtKTtcblx0XHR9XG5cdH0pO1xufTtcblxuXG4vKiAwOC4gSGFuZGxlIFRvb2x0aXAgJiBQb3BvdmVyIEFjdGl2YXRpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRlbFRvb2x0aXBQb3BvdmVyQWN0aXZhdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0aWYgKCQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS5sZW5ndGggIT09IDApIHtcblx0XHQkKCdbZGF0YS10b2dnbGU9dG9vbHRpcF0nKS50b29sdGlwKCk7XG5cdH1cblx0aWYgKCQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5sZW5ndGggIT09IDApIHtcblx0XHQkKCdbZGF0YS10b2dnbGU9cG9wb3Zlcl0nKS5wb3BvdmVyKCk7XG5cdH1cbn07XG5cblxuLyogMDkuIEhhbmRsZSBTY3JvbGwgdG8gVG9wIEJ1dHRvbiBBY3RpdmF0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVTY3JvbGxUb1RvcEJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGJvb3RzdHJhcFZlcnNpb24gPSBoYW5kbGVDaGVja0Jvb3RzdHJhcFZlcnNpb24oKTtcblx0dmFyIHNob3dDbGFzcyA9ICcnO1xuXG5cdGlmIChib290c3RyYXBWZXJzaW9uID49IDMgJiYgYm9vdHN0cmFwVmVyc2lvbiA8IDQpIHtcblx0XHRzaG93Q2xhc3MgPSAnaW4nO1xuXHR9IGVsc2UgaWYgKGJvb3RzdHJhcFZlcnNpb24gPj0gNCAmJiBib290c3RyYXBWZXJzaW9uIDwgNSkge1xuXHRcdHNob3dDbGFzcyA9ICdzaG93Jztcblx0fVxuXHQkKGRvY3VtZW50KS5zY3JvbGwoIGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0b3RhbFNjcm9sbCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHRvdGFsU2Nyb2xsID49IDIwMCkge1xuXHRcdFx0JCgnW2RhdGEtY2xpY2s9c2Nyb2xsLXRvcF0nKS5hZGRDbGFzcyhzaG93Q2xhc3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCdbZGF0YS1jbGljaz1zY3JvbGwtdG9wXScpLnJlbW92ZUNsYXNzKHNob3dDbGFzcyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKCdbZGF0YS1jbGljaz1zY3JvbGwtdG9wXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHRcdFx0c2Nyb2xsVG9wOiAkKFwiYm9keVwiKS5vZmZzZXQoKS50b3Bcblx0XHR9LCA1MDApO1xuXHR9KTtcbn07XG5cblxuLyogMTAuIEhhbmRsZSBUaGVtZSAmIFBhZ2UgU3RydWN0dXJlIENvbmZpZ3VyYXRpb24gLSBhZGRlZCBpbiBWMS4yXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVUaGVtZVBhZ2VTdHJ1Y3R1cmVDb250cm9sID0gZnVuY3Rpb24oKSB7XG5cblx0Ly8gVEhFTUUgLSBjb2xvciBzZWxlY3Rpb25cblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aGVtZS1wYW5lbCBbZGF0YS1jbGljaz1cInRoZW1lLXNlbGVjdG9yXCJdJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRhcmdldEZpbGUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGhlbWUtZmlsZScpO1xuXHRcdHZhciB0YXJnZXRUaGVtZSA9ICQodGhpcykuYXR0cignZGF0YS10aGVtZScpO1xuXG5cdFx0aWYgKCQoJyN0aGVtZS1jc3MtbGluaycpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JCgnaGVhZCcpLmFwcGVuZCgnPGxpbmsgaHJlZj1cIicrIHRhcmdldEZpbGUgKydcIiByZWw9XCJzdHlsZXNoZWV0XCIgaWQ9XCJ0aGVtZS1jc3MtbGlua1wiIC8+Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJyN0aGVtZS1jc3MtbGluaycpLmF0dHIoJ2hyZWYnLCB0YXJnZXRGaWxlKTtcblx0XHR9XG5cdFx0JCgnLnRoZW1lLXBhbmVsIFtkYXRhLWNsaWNrPVwidGhlbWUtc2VsZWN0b3JcIl0nKS5ub3QodGhpcykuY2xvc2VzdCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdGlmIChDb29raWVzKSB7XG5cdFx0XHRDb29raWVzLnNldCgncGFnZS10aGVtZScsIHRhcmdldFRoZW1lKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIEhFQURFUiAtIGhlYWRlciBzdHlsaW5nIHNlbGVjdGlvblxuXHQkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy50aGVtZS1wYW5lbCBbbmFtZT1cImhlYWRlci1pbnZlcnNlXCJdJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRhcmdldFZhbHVlID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcblx0XHR2YXIgdGFyZ2V0Q2xhc3NBZGQgPSAoIXRhcmdldFZhbHVlKSA/ICduYXZiYXItZGVmYXVsdCcgOiAnbmF2YmFyLWludmVyc2UnO1xuXHRcdHZhciB0YXJnZXRDbGFzc1JlbW92ZSA9ICghdGFyZ2V0VmFsdWUpID8gJ25hdmJhci1pbnZlcnNlJyA6ICduYXZiYXItZGVmYXVsdCc7XG5cdFx0JCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKHRhcmdldENsYXNzUmVtb3ZlKS5hZGRDbGFzcyh0YXJnZXRDbGFzc0FkZCk7XG5cdFx0aWYgKENvb2tpZXMpIHtcblx0XHRcdENvb2tpZXMuc2V0KCdoZWFkZXItdGhlbWUnLCB0YXJnZXRDbGFzc0FkZCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTSURFQkFSIC0gc2lkZWJhciBncmlkIHNlbGVjdGlvblxuXHQkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy50aGVtZS1wYW5lbCBbbmFtZT1cInNpZGViYXItZ3JpZFwiXScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzaWRlYmFyR3JpZCA9IGZhbHNlO1xuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHQkKCcjc2lkZWJhcicpLmFkZENsYXNzKCdzaWRlYmFyLWdyaWQnKTtcblx0XHRcdHNpZGViYXJHcmlkID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnI3NpZGViYXInKS5yZW1vdmVDbGFzcygnc2lkZWJhci1ncmlkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKENvb2tpZXMpIHtcblx0XHRcdENvb2tpZXMuc2V0KCdzaWRlYmFyLWdyaWQnLCBzaWRlYmFyR3JpZCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTSURFQkFSIC0gc2lkZWJhciBncmFkaWVudCBzZWxlY3Rpb25cblx0JChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudGhlbWUtcGFuZWwgW25hbWU9XCJzaWRlYmFyLWdyYWRpZW50XCJdJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHNpZGViYXJHcmFkaWVudCA9IGZhbHNlO1xuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHQkKCcjcGFnZS1jb250YWluZXInKS5hZGRDbGFzcygnZ3JhZGllbnQtZW5hYmxlZCcpO1xuXHRcdFx0c2lkZWJhckdyYWRpZW50ID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnI3BhZ2UtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2dyYWRpZW50LWVuYWJsZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoQ29va2llcykge1xuXHRcdFx0Q29va2llcy5zZXQoJ3NpZGViYXItZ3JhZGllbnQnLCBzaWRlYmFyR3JhZGllbnQpO1xuXHRcdH1cblx0fSk7XG5cbiAgLy8gU0lERUJBUiAtIHNpZGViYXIgZml4ZWQgc2VsZWN0aW9uXG5cdCQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnRoZW1lLXBhbmVsIFtuYW1lPVwic2lkZWJhci1maXhlZFwiXScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzaWRlYmFyRml4ZWQgPSBmYWxzZTtcblxuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHRpZiAoISQoJy50aGVtZS1wYW5lbCBbbmFtZT1cImhlYWRlci1maXhlZFwiXScpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHRcdGFsZXJ0KCdEZWZhdWx0IEhlYWRlciB3aXRoIEZpeGVkIFNpZGViYXIgb3B0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuIFByb2NlZWQgd2l0aCBGaXhlZCBIZWFkZXIgd2l0aCBGaXhlZCBTaWRlYmFyLicpO1xuXHRcdFx0XHQkKCcudGhlbWUtcGFuZWwgW25hbWU9XCJoZWFkZXItZml4ZWRcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLmFkZENsYXNzKCdwYWdlLWhlYWRlci1maXhlZCcpO1xuXHRcdFx0fVxuXHRcdFx0JCgnI3BhZ2UtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3BhZ2Utc2lkZWJhci1maXhlZCcpO1xuXHRcdFx0aWYgKCEkKCcjcGFnZS1jb250YWluZXInKS5oYXNDbGFzcygncGFnZS1zaWRlYmFyLW1pbmlmaWVkJykpIHtcblx0XHRcdFx0Z2VuZXJhdGVTbGltU2Nyb2xsKCQoJy5zaWRlYmFyIFtkYXRhLXNjcm9sbGJhcj1cInRydWVcIl0nKSk7XG5cdFx0XHR9XG5cdFx0XHRzaWRlYmFyRml4ZWQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCcjcGFnZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygncGFnZS1zaWRlYmFyLWZpeGVkJyk7XG5cdFx0XHRpZiAoJCgnLnNpZGViYXIgLnNsaW1TY3JvbGxEaXYnKS5sZW5ndGggIT09IDApIHtcblx0XHRcdFx0aWYgKCQod2luZG93KS53aWR0aCgpIDw9IDk3OSkge1xuXHRcdFx0XHRcdCQoJy5zaWRlYmFyJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICghKCQoJyNwYWdlLWNvbnRhaW5lcicpLmhhc0NsYXNzKCdwYWdlLXdpdGgtdHdvLXNpZGViYXInKSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdzaWRlYmFyLXJpZ2h0JykpKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZmluZCgnLnNsaW1TY3JvbGxCYXInKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5maW5kKCcuc2xpbVNjcm9sbFJhaWwnKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5maW5kKCdbZGF0YS1zY3JvbGxiYXI9XCJ0cnVlXCJdJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHRcdFx0XHRcdFx0dmFyIHRhcmdldEVsZW1lbnQgPSAkKHRoaXMpLmZpbmQoJ1tkYXRhLXNjcm9sbGJhcj1cInRydWVcIl0nKS5wYXJlbnQoKTtcblx0XHRcdFx0XHRcdFx0dmFyIHRhcmdldEh0bWwgPSAkKHRhcmdldEVsZW1lbnQpLmh0bWwoKTtcblx0XHRcdFx0XHRcdFx0JCh0YXJnZXRFbGVtZW50KS5yZXBsYWNlV2l0aCh0YXJnZXRIdG1sKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk3OSkge1xuXHRcdFx0XHRcdCQoJy5zaWRlYmFyIFtkYXRhLXNjcm9sbGJhcj1cInRydWVcIl0nKS5zbGltU2Nyb2xsKHtkZXN0cm95OiB0cnVlfSk7XG5cdFx0XHRcdFx0JCgnLnNpZGViYXIgW2RhdGEtc2Nyb2xsYmFyPVwidHJ1ZVwiXScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0XHRcdFx0JCgnLnNpZGViYXIgW2RhdGEtc2Nyb2xsYmFyPVwidHJ1ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtaW5pdCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoJCgnI3BhZ2UtY29udGFpbmVyIC5zaWRlYmFyLWJnJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNpZGViYXItYmdcIj48L2Rpdj4nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoQ29va2llcykge1xuXHRcdFx0Q29va2llcy5zZXQoJ3NpZGViYXItZml4ZWQnLCBzaWRlYmFyRml4ZWQpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gSEVBREVSIC0gZml4ZWQgb3IgZGVmYXVsdFxuXHQkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy50aGVtZS1wYW5lbCBbbmFtZT1cImhlYWRlci1maXhlZFwiXScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoZWFkZXJGaXhlZCA9IGZhbHNlO1xuXG5cdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcblx0XHRcdCQoJyNoZWFkZXInKS5hZGRDbGFzcygnbmF2YmFyLWZpeGVkLXRvcCcpO1xuXHRcdFx0JCgnI3BhZ2UtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3BhZ2UtaGVhZGVyLWZpeGVkJyk7XG5cdFx0XHRoZWFkZXJGaXhlZCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICgkKCcudGhlbWUtcGFuZWwgW25hbWU9XCJzaWRlYmFyLWZpeGVkXCJdJykuaXMoJzpjaGVja2VkJykpIHtcblx0XHRcdFx0YWxlcnQoJ0RlZmF1bHQgSGVhZGVyIHdpdGggRml4ZWQgU2lkZWJhciBvcHRpb24gaXMgbm90IHN1cHBvcnRlZC4gUHJvY2VlZCB3aXRoIERlZmF1bHQgSGVhZGVyIHdpdGggRGVmYXVsdCBTaWRlYmFyLicpO1xuXHRcdFx0XHQkKCcudGhlbWUtcGFuZWwgW25hbWU9XCJzaWRlYmFyLWZpeGVkXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblx0XHRcdFx0JCgnLnRoZW1lLXBhbmVsIFtuYW1lPVwic2lkZWJhci1maXhlZFwiXScpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRpZiAoJCgnI3BhZ2UtY29udGFpbmVyIC5zaWRlYmFyLWJnJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0JCgnI3BhZ2UtY29udGFpbmVyJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic2lkZWJhci1iZ1wiPjwvZGl2PicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQkKCcjaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ25hdmJhci1maXhlZC10b3AnKTtcblx0XHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdwYWdlLWhlYWRlci1maXhlZCcpO1xuXHRcdH1cblx0XHRpZiAoQ29va2llcykge1xuXHRcdFx0Q29va2llcy5zZXQoJ2hlYWRlci1maXhlZCcsIGhlYWRlckZpeGVkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChDb29raWVzKSB7XG5cdFx0dmFyIHBhZ2VUaGVtZSA9IENvb2tpZXMuZ2V0KCdwYWdlLXRoZW1lJyk7XG5cdFx0dmFyIGhlYWRlclRoZW1lID0gQ29va2llcy5nZXQoJ2hlYWRlci10aGVtZScpO1xuXHRcdHZhciBzaWRlYmFyR3JpZCA9IENvb2tpZXMuZ2V0KCdzaWRlYmFyLWdyaWQnKTtcblx0XHR2YXIgc2lkZWJhckdyYWRpZW50ID0gQ29va2llcy5nZXQoJ3NpZGViYXItZ3JhZGllbnQnKTtcblx0XHR2YXIgc2lkZWJhckZpeGVkID0gQ29va2llcy5nZXQoJ3NpZGViYXItZml4ZWQnKTtcblx0XHR2YXIgaGVhZGVyRml4ZWQgPSBDb29raWVzLmdldCgnaGVhZGVyLWZpeGVkJyk7XG5cblx0XHRpZiAocGFnZVRoZW1lKSB7XG5cdFx0XHQkKCcudGhlbWUtcGFuZWwgW2RhdGEtY2xpY2s9XCJ0aGVtZS1zZWxlY3RvclwiXVtkYXRhLXRoZW1lPVwiJysgcGFnZVRoZW1lICsnXCJdJykudHJpZ2dlcignY2xpY2snKTtcblx0XHR9XG5cdFx0aWYgKGhlYWRlclRoZW1lICYmIGhlYWRlclRoZW1lID09ICduYXZiYXItaW52ZXJzZScpIHtcblx0XHRcdCQoJy50aGVtZS1wYW5lbCBbbmFtZT1cImhlYWRlci1pbnZlcnNlXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH1cblx0XHRpZiAoc2lkZWJhckdyaWQgPT0gJ3RydWUnKSB7XG5cdFx0XHQkKCcudGhlbWUtcGFuZWwgW25hbWU9XCJzaWRlYmFyLWdyaWRcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0fVxuXHRcdGlmIChzaWRlYmFyR3JhZGllbnQgPT0gJ3RydWUnKSB7XG5cdFx0XHQkKCcudGhlbWUtcGFuZWwgW25hbWU9XCJzaWRlYmFyLWdyYWRpZW50XCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH1cblx0XHRpZiAoc2lkZWJhckZpeGVkID09ICdmYWxzZScpIHtcblx0XHRcdCQoJy50aGVtZS1wYW5lbCBbbmFtZT1cInNpZGViYXItZml4ZWRcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH1cblx0XHRpZiAoaGVhZGVyRml4ZWQgPT0gJ2ZhbHNlJykge1xuXHRcdFx0JCgnLnRoZW1lLXBhbmVsIFtuYW1lPVwiaGVhZGVyLWZpeGVkXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHR9XG5cdH1cbn07XG5cblxuLyogMTEuIEhhbmRsZSBUaGVtZSBQYW5lbCBFeHBhbmQgLSBhZGRlZCBpbiBWMS4yXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVUaGVtZVBhbmVsRXhwYW5kID0gZnVuY3Rpb24oKSB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cInRoZW1lLXBhbmVsLWV4cGFuZFwiXScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0YXJnZXRDb250YWluZXIgPSAnLnRoZW1lLXBhbmVsJztcblx0XHR2YXIgdGFyZ2V0Q2xhc3MgPSAnYWN0aXZlJztcblx0XHR2YXIgdGFyZ2V0RXhwYW5kID0gZmFsc2U7XG5cdFx0aWYgKCQodGFyZ2V0Q29udGFpbmVyKS5oYXNDbGFzcyh0YXJnZXRDbGFzcykpIHtcblx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyh0YXJnZXRDbGFzcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5hZGRDbGFzcyh0YXJnZXRDbGFzcyk7XG5cdFx0XHR0YXJnZXRFeHBhbmQgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAoQ29va2llcykge1xuXHRcdFx0Q29va2llcy5zZXQoJ3RoZW1lLXBhbmVsLWV4cGFuZCcsIHRhcmdldEV4cGFuZCk7XG5cdFx0fVxuXHR9KTtcblx0aWYgKENvb2tpZXMpIHtcblx0XHR2YXIgdGhlbWVQYW5lbEV4cGFuZCA9IENvb2tpZXMuZ2V0KCd0aGVtZS1wYW5lbC1leHBhbmQnKTtcblxuXHRcdGlmICh0aGVtZVBhbmVsRXhwYW5kID09ICd0cnVlJykge1xuXHRcdFx0JCgnW2RhdGEtY2xpY2s9XCJ0aGVtZS1wYW5lbC1leHBhbmRcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKiAxMi4gSGFuZGxlIEFmdGVyIFBhZ2UgTG9hZCBBZGQgQ2xhc3MgRnVuY3Rpb24gLSBhZGRlZCBpbiBWMS4yXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVBZnRlclBhZ2VMb2FkQWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcblx0aWYgKCQoJ1tkYXRhLXBhZ2Vsb2FkLWFkZGNsYXNzXScpLmxlbmd0aCAhPT0gMCkge1xuXHRcdCQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnW2RhdGEtcGFnZWxvYWQtYWRkY2xhc3NdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHRhcmdldENsYXNzID0gJCh0aGlzKS5hdHRyKCdkYXRhLXBhZ2Vsb2FkLWFkZGNsYXNzJyk7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3ModGFyZ2V0Q2xhc3MpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cblxuLyogMTMuIEhhbmRsZSBTYXZlIFBhbmVsIFBvc2l0aW9uIEZ1bmN0aW9uIC0gYWRkZWQgaW4gVjEuNVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlU2F2ZVBhbmVsUG9zaXRpb24gPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRpZiAoJCgnLnVpLXNvcnRhYmxlJykubGVuZ3RoICE9PSAwKSB7XG5cdFx0dmFyIG5ld1ZhbHVlID0gW107XG5cdFx0dmFyIGluZGV4ID0gMDtcblx0XHQkLndoZW4oJCgnLnVpLXNvcnRhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwYW5lbFNvcnRhYmxlRWxlbWVudCA9ICQodGhpcykuZmluZCgnW2RhdGEtc29ydGFibGUtaWRdJyk7XG5cdFx0XHRpZiAocGFuZWxTb3J0YWJsZUVsZW1lbnQubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHRcdHZhciBjb2x1bW5WYWx1ZSA9IFtdO1xuXHRcdFx0XHQkKHBhbmVsU29ydGFibGVFbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0YXJnZXRTb3J0SWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc29ydGFibGUtaWQnKTtcblx0XHRcdFx0XHRjb2x1bW5WYWx1ZS5wdXNoKHtpZDogdGFyZ2V0U29ydElkfSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRuZXdWYWx1ZS5wdXNoKGNvbHVtblZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZhbHVlLnB1c2goW10pO1xuXHRcdFx0fVxuXHRcdFx0aW5kZXgrKztcblx0XHR9KSkuZG9uZShmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0YXJnZXRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHQgICAgdGFyZ2V0UGFnZSA9IHRhcmdldFBhZ2Uuc3BsaXQoJz8nKTtcblx0XHRcdCAgICB0YXJnZXRQYWdlID0gdGFyZ2V0UGFnZVswXTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhcmdldFBhZ2UsIEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSk7XG5cdFx0XHQkKGVsZW1lbnQpLmZpbmQoJ1tkYXRhLWlkPVwidGl0bGUtc3Bpbm5lclwiXScpLmRlbGF5KDUwMCkuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cblxuLyogMTQuIEhhbmRsZSBEcmFnZ2FibGUgUGFuZWwgTG9jYWwgU3RvcmFnZSBGdW5jdGlvbiAtIGFkZGVkIGluIFYxLjVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YobG9jYWxTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHZhciB0YXJnZXRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHRcdFx0dGFyZ2V0UGFnZSA9IHRhcmdldFBhZ2Uuc3BsaXQoJz8nKTtcblx0XHRcdFx0XHR0YXJnZXRQYWdlID0gdGFyZ2V0UGFnZVswXTtcblx0XHRcdHZhciBwYW5lbFBvc2l0aW9uRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhcmdldFBhZ2UpO1xuXG5cdFx0XHRpZiAocGFuZWxQb3NpdGlvbkRhdGEpIHtcblx0XHRcdFx0cGFuZWxQb3NpdGlvbkRhdGEgPSBKU09OLnBhcnNlKHBhbmVsUG9zaXRpb25EYXRhKTtcblx0XHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0XHQkLndoZW4oJCgnLnBhbmVsOm5vdChbZGF0YS1zb3J0YWJsZT1cImZhbHNlXCJdKScpLnBhcmVudCgnW2NsYXNzKj1cImNvbC1cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBzdG9yYWdlRGF0YSA9IHBhbmVsUG9zaXRpb25EYXRhW2ldO1xuXHRcdFx0XHRcdHZhciB0YXJnZXRDb2x1bW4gPSAkKHRoaXMpO1xuXHRcdFx0XHRcdGlmIChzdG9yYWdlRGF0YSkge1xuXHRcdFx0XHRcdFx0JC5lYWNoKHN0b3JhZ2VEYXRhLCBmdW5jdGlvbihpbmRleCwgZGF0YSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGFyZ2V0SWQgPSAkKCdbZGF0YS1zb3J0YWJsZS1pZD1cIicrIGRhdGEuaWQgKydcIl0nKS5ub3QoJ1tkYXRhLWluaXQ9XCJ0cnVlXCJdJyk7XG5cdFx0XHRcdFx0XHRcdGlmICgkKHRhcmdldElkKS5sZW5ndGggIT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGFyZ2V0SHRtbCA9ICQodGFyZ2V0SWQpLmNsb25lKCk7XG5cdFx0XHRcdFx0XHRcdFx0JCh0YXJnZXRJZCkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0JCh0YXJnZXRDb2x1bW4pLmFwcGVuZCh0YXJnZXRIdG1sKTtcblx0XHRcdFx0XHRcdFx0XHQkKCdbZGF0YS1zb3J0YWJsZS1pZD1cIicrIGRhdGEuaWQgKydcIl0nKS5hdHRyKCdkYXRhLWluaXQnLCd0cnVlJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdH0pKS5kb25lKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbG9jYWxzdG9yYWdlLXBvc2l0aW9uLWxvYWRlZCcpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFsZXJ0KCdZb3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZCB3aXRoIHRoZSBsb2NhbCBzdG9yYWdlJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0fVxufTtcblxuXG4vKiAxNS4gSGFuZGxlIFJlc2V0IExvY2FsIFN0b3JhZ2UgLSBhZGRlZCBpbiBWMS41XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVSZXNldExvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPXJlc2V0LWxvY2FsLXN0b3JhZ2VdJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciB0YXJnZXRNb2RhbEh0bWwgPSAnJytcblx0XHQnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBkYXRhLW1vZGFsLWlkPVwicmVzZXQtbG9jYWwtc3RvcmFnZS1jb25maXJtYXRpb25cIj4nK1xuXHRcdCcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPicrXG5cdFx0JyAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nK1xuXHRcdCcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+Jytcblx0XHQnICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+PGkgY2xhc3M9XCJmYSBmYS1yZWRvIG0tci01XCI+PC9pPiBSZXNldCBMb2NhbCBTdG9yYWdlIENvbmZpcm1hdGlvbjwvaDQ+Jytcblx0XHQnICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9idXR0b24+Jytcblx0XHQnICAgICAgICAgICAgPC9kaXY+Jytcblx0XHQnICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4nK1xuXHRcdCcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm8gbS1iLTBcIj5Xb3VsZCB5b3UgbGlrZSB0byBSRVNFVCBhbGwgeW91ciBzYXZlZCB3aWRnZXRzIGFuZCBjbGVhciBMb2NhbCBTdG9yYWdlPzwvZGl2PicrXG5cdFx0JyAgICAgICAgICAgIDwvZGl2PicrXG5cdFx0JyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nK1xuXHRcdCcgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gTm88L2E+Jytcblx0XHQnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWludmVyc2VcIiBkYXRhLWNsaWNrPVwiY29uZmlybS1yZXNldC1sb2NhbC1zdG9yYWdlXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4gWWVzPC9hPicrXG5cdFx0JyAgICAgICAgICAgIDwvZGl2PicrXG5cdFx0JyAgICAgICAgPC9kaXY+Jytcblx0XHQnICAgIDwvZGl2PicrXG5cdFx0JzwvZGl2Pic7XG5cblx0XHQkKCdib2R5JykuYXBwZW5kKHRhcmdldE1vZGFsSHRtbCk7XG5cdFx0JCgnW2RhdGEtbW9kYWwtaWQ9XCJyZXNldC1sb2NhbC1zdG9yYWdlLWNvbmZpcm1hdGlvblwiXScpLm1vZGFsKCdzaG93Jyk7XG5cdH0pO1xuXHQkKGRvY3VtZW50KS5vbignaGlkZGVuLmJzLm1vZGFsJywgJ1tkYXRhLW1vZGFsLWlkPVwicmVzZXQtbG9jYWwtc3RvcmFnZS1jb25maXJtYXRpb25cIl0nLCBmdW5jdGlvbihlKSB7XG5cdFx0JCgnW2RhdGEtbW9kYWwtaWQ9XCJyZXNldC1sb2NhbC1zdG9yYWdlLWNvbmZpcm1hdGlvblwiXScpLnJlbW92ZSgpO1xuXHR9KTtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPWNvbmZpcm0tcmVzZXQtbG9jYWwtc3RvcmFnZV0nLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBsb2NhbFN0b3JhZ2VOYW1lID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0bG9jYWxTdG9yYWdlTmFtZSA9IGxvY2FsU3RvcmFnZU5hbWUuc3BsaXQoJz8nKTtcblx0XHRsb2NhbFN0b3JhZ2VOYW1lID0gbG9jYWxTdG9yYWdlTmFtZVswXTtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VOYW1lKTtcblxuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9KTtcbn07XG5cblxuLyogMTYuIEhhbmRsZSBJRSBGdWxsIEhlaWdodCBQYWdlIENvbXBhdGliaWxpdHkgLSBhZGRlZCBpbiBWMS42XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVJRUZ1bGxIZWlnaHRDb250ZW50ID0gZnVuY3Rpb24oKSB7XG5cdHZhciB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0dmFyIG1zaWUgPSB1c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpO1xuXG5cdGlmIChtc2llID4gMCkge1xuXHRcdCQoJy52ZXJ0aWNhbC1ib3gtcm93IFtkYXRhLXNjcm9sbGJhcj1cInRydWVcIl1bZGF0YS1oZWlnaHQ9XCIxMDAlXCJdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0YXJnZXRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJy52ZXJ0aWNhbC1ib3gtcm93Jyk7XG5cdFx0XHR2YXIgdGFyZ2V0SGVpZ2h0ID0gJCh0YXJnZXRSb3cpLmhlaWdodCgpO1xuXHRcdFx0JCh0YXJnZXRSb3cpLmZpbmQoJy52ZXJ0aWNhbC1ib3gtY2VsbCcpLmhlaWdodCh0YXJnZXRIZWlnaHQpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5cbi8qIDE3LiBIYW5kbGUgVW5saW1pdGVkIE5hdiBUYWJzIC0gYWRkZWQgaW4gVjEuNlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlVW5saW1pdGVkVGFic1JlbmRlciA9IGZ1bmN0aW9uKCkge1xuXG5cdC8vIGZ1bmN0aW9uIGhhbmRsZSB0YWIgb3ZlcmZsb3cgc2Nyb2xsIHdpZHRoXG5cdGZ1bmN0aW9uIGhhbmRsZVRhYk92ZXJmbG93U2Nyb2xsV2lkdGgob2JqLCBhbmltYXRpb25TcGVlZCkge1xuXHRcdHZhciB0YXJnZXRFbG0gPSAnbGkuYWN0aXZlJztcblxuXHRcdGlmICgkKG9iaikuZmluZCgnbGknKS5maXJzdCgpLmhhc0NsYXNzKCduYXYtaXRlbScpKSB7XG5cdFx0XHR0YXJnZXRFbG0gPSAkKG9iaikuZmluZCgnLm5hdi1pdGVtIC5hY3RpdmUnKS5jbG9zZXN0KCdsaScpO1xuXHRcdH1cblx0XHR2YXIgdGFyZ2V0Q3NzID0gKCQoJ2JvZHknKS5jc3MoJ2RpcmVjdGlvbicpID09ICdydGwnKSA/ICdtYXJnaW4tcmlnaHQnIDogJ21hcmdpbi1sZWZ0Jztcblx0XHR2YXIgbWFyZ2luTGVmdCA9IHBhcnNlSW50KCQob2JqKS5jc3ModGFyZ2V0Q3NzKSk7XG5cdFx0dmFyIHZpZXdXaWR0aCA9ICQob2JqKS53aWR0aCgpO1xuXHRcdHZhciBwcmV2V2lkdGggPSAkKG9iaikuZmluZCh0YXJnZXRFbG0pLndpZHRoKCk7XG5cdFx0dmFyIHNwZWVkID0gKGFuaW1hdGlvblNwZWVkID4gLTEpID8gYW5pbWF0aW9uU3BlZWQgOiAxNTA7XG5cdFx0dmFyIGZ1bGxXaWR0aCA9IDA7XG5cblx0XHQkKG9iaikuZmluZCh0YXJnZXRFbG0pLnByZXZBbGwoKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0cHJldldpZHRoICs9ICQodGhpcykud2lkdGgoKTtcblx0XHR9KTtcblxuXHRcdCQob2JqKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRmdWxsV2lkdGggKz0gJCh0aGlzKS53aWR0aCgpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKHByZXZXaWR0aCA+PSB2aWV3V2lkdGgpIHtcblx0XHRcdHZhciBmaW5hbFNjcm9sbFdpZHRoID0gcHJldldpZHRoIC0gdmlld1dpZHRoO1xuXHRcdFx0aWYgKGZ1bGxXaWR0aCAhPSBwcmV2V2lkdGgpIHtcblx0XHRcdFx0ZmluYWxTY3JvbGxXaWR0aCArPSA0MDtcblx0XHRcdH1cblx0XHRcdGlmICgkKCdib2R5JykuY3NzKCdkaXJlY3Rpb24nKSA9PSAncnRsJykge1xuXHRcdFx0XHQkKG9iaikuZmluZCgnLm5hdi5uYXYtdGFicycpLmFuaW1hdGUoeyBtYXJnaW5SaWdodDogJy0nICsgZmluYWxTY3JvbGxXaWR0aCArICdweCd9LCBzcGVlZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKG9iaikuZmluZCgnLm5hdi5uYXYtdGFicycpLmFuaW1hdGUoeyBtYXJnaW5MZWZ0OiAnLScgKyBmaW5hbFNjcm9sbFdpZHRoICsgJ3B4J30sIHNwZWVkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocHJldldpZHRoICE9IGZ1bGxXaWR0aCAmJiBmdWxsV2lkdGggPj0gdmlld1dpZHRoKSB7XG5cdFx0XHQkKG9iaikuYWRkQ2xhc3MoJ292ZXJmbG93LXJpZ2h0Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQob2JqKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctcmlnaHQnKTtcblx0XHR9XG5cblx0XHRpZiAocHJldldpZHRoID49IHZpZXdXaWR0aCAmJiBmdWxsV2lkdGggPj0gdmlld1dpZHRoKSB7XG5cdFx0XHQkKG9iaikuYWRkQ2xhc3MoJ292ZXJmbG93LWxlZnQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChvYmopLnJlbW92ZUNsYXNzKCdvdmVyZmxvdy1sZWZ0Jyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZnVuY3Rpb24gaGFuZGxlIHRhYiBidXR0b24gYWN0aW9uIC0gbmV4dCAvIHByZXZcblx0ZnVuY3Rpb24gaGFuZGxlVGFiQnV0dG9uQWN0aW9uKGVsZW1lbnQsIGRpcmVjdGlvbikge1xuXHRcdHZhciBvYmogPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJy50YWItb3ZlcmZsb3cnKTtcblx0XHR2YXIgdGFyZ2V0Q3NzID0gKCQoJ2JvZHknKS5jc3MoJ2RpcmVjdGlvbicpID09ICdydGwnKSA/ICdtYXJnaW4tcmlnaHQnIDogJ21hcmdpbi1sZWZ0Jztcblx0XHR2YXIgbWFyZ2luTGVmdCA9IHBhcnNlSW50KCQob2JqKS5maW5kKCcubmF2Lm5hdi10YWJzJykuY3NzKHRhcmdldENzcykpO1xuXHRcdHZhciBjb250YWluZXJXaWR0aCA9ICQob2JqKS53aWR0aCgpO1xuXHRcdHZhciB0b3RhbFdpZHRoID0gMDtcblx0XHR2YXIgZmluYWxTY3JvbGxXaWR0aCA9IDA7XG5cblx0XHQkKG9iaikuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduZXh0LWJ1dHRvbicpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdwcmV2LWJ1dHRvbicpKSB7XG5cdFx0XHRcdHRvdGFsV2lkdGggKz0gJCh0aGlzKS53aWR0aCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0c3dpdGNoIChkaXJlY3Rpb24pIHtcblx0XHRcdGNhc2UgJ25leHQnOlxuXHRcdFx0XHR2YXIgd2lkdGhMZWZ0ID0gdG90YWxXaWR0aCArIG1hcmdpbkxlZnQgLSBjb250YWluZXJXaWR0aDtcblx0XHRcdFx0aWYgKHdpZHRoTGVmdCA8PSBjb250YWluZXJXaWR0aCkge1xuXHRcdFx0XHRcdGZpbmFsU2Nyb2xsV2lkdGggPSB3aWR0aExlZnQgLSBtYXJnaW5MZWZ0O1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKG9iaikucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LXJpZ2h0Jyk7XG5cdFx0XHRcdFx0fSwgMTUwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmaW5hbFNjcm9sbFdpZHRoID0gY29udGFpbmVyV2lkdGggLSBtYXJnaW5MZWZ0IC0gODA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZmluYWxTY3JvbGxXaWR0aCAhPT0gMCkge1xuXHRcdFx0XHRcdGlmICgkKCdib2R5JykuY3NzKCdkaXJlY3Rpb24nKSAhPSAncnRsJykge1xuXHRcdFx0XHRcdFx0JChvYmopLmZpbmQoJy5uYXYubmF2LXRhYnMnKS5hbmltYXRlKHsgbWFyZ2luTGVmdDogJy0nICsgZmluYWxTY3JvbGxXaWR0aCArICdweCd9LCAxNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKG9iaikuYWRkQ2xhc3MoJ292ZXJmbG93LWxlZnQnKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkKG9iaikuZmluZCgnLm5hdi5uYXYtdGFicycpLmFuaW1hdGUoeyBtYXJnaW5SaWdodDogJy0nICsgZmluYWxTY3JvbGxXaWR0aCArICdweCd9LCAxNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKG9iaikuYWRkQ2xhc3MoJ292ZXJmbG93LWxlZnQnKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAncHJldic6XG5cdFx0XHR2YXIgd2lkdGhMZWZ0ID0gLW1hcmdpbkxlZnQ7XG5cblx0XHRcdGlmICh3aWR0aExlZnQgPD0gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdFx0JChvYmopLnJlbW92ZUNsYXNzKCdvdmVyZmxvdy1sZWZ0Jyk7XG5cdFx0XHRcdGZpbmFsU2Nyb2xsV2lkdGggPSAwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmluYWxTY3JvbGxXaWR0aCA9IHdpZHRoTGVmdCAtIGNvbnRhaW5lcldpZHRoICsgODA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJCgnYm9keScpLmNzcygnZGlyZWN0aW9uJykgIT0gJ3J0bCcpIHtcblx0XHRcdFx0JChvYmopLmZpbmQoJy5uYXYubmF2LXRhYnMnKS5hbmltYXRlKHsgbWFyZ2luTGVmdDogJy0nICsgZmluYWxTY3JvbGxXaWR0aCArICdweCd9LCAxNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQob2JqKS5hZGRDbGFzcygnb3ZlcmZsb3ctcmlnaHQnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKG9iaikuZmluZCgnLm5hdi5uYXYtdGFicycpLmFuaW1hdGUoeyBtYXJnaW5SaWdodDogJy0nICsgZmluYWxTY3JvbGxXaWR0aCArICdweCd9LCAxNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQob2JqKS5hZGRDbGFzcygnb3ZlcmZsb3ctcmlnaHQnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBoYW5kbGUgcGFnZSBsb2FkIGFjdGl2ZSB0YWIgZm9jdXNcblx0ZnVuY3Rpb24gaGFuZGxlUGFnZUxvYWRUYWJGb2N1cygpIHtcblx0XHQkKCcudGFiLW92ZXJmbG93JykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGhhbmRsZVRhYk92ZXJmbG93U2Nyb2xsV2lkdGgodGhpcywgMCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBoYW5kbGUgdGFiIG5leHQgYnV0dG9uIGNsaWNrIGFjdGlvblxuXHQkKCdbZGF0YS1jbGljaz1cIm5leHQtdGFiXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRoYW5kbGVUYWJCdXR0b25BY3Rpb24odGhpcywnbmV4dCcpO1xuXHR9KTtcblxuXHQvLyBoYW5kbGUgdGFiIHByZXYgYnV0dG9uIGNsaWNrIGFjdGlvblxuXHQkKCdbZGF0YS1jbGljaz1cInByZXYtdGFiXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRoYW5kbGVUYWJCdXR0b25BY3Rpb24odGhpcywncHJldicpO1xuXHR9KTtcblxuXHQvLyBoYW5kbGUgdW5saW1pdGVkIHRhYnMgcmVzcG9uc2l2ZSBzZXR0aW5nXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnRhYi1vdmVyZmxvdyAubmF2Lm5hdi10YWJzJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHRoYW5kbGVQYWdlTG9hZFRhYkZvY3VzKCk7XG5cdH0pO1xuXG5cdGhhbmRsZVBhZ2VMb2FkVGFiRm9jdXMoKTtcbn07XG5cblxuLyogMTguIEhhbmRsZSBUb3AgTWVudSAtIFVubGltaXRlZCBUb3AgTWVudSBSZW5kZXIgLSBhZGRlZCBpbiBWMS45XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVVbmxpbWl0ZWRUb3BNZW51UmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQvLyBmdW5jdGlvbiBoYW5kbGUgbWVudSBidXR0b24gYWN0aW9uIC0gbmV4dCAvIHByZXZcblx0ZnVuY3Rpb24gaGFuZGxlTWVudUJ1dHRvbkFjdGlvbihlbGVtZW50LCBkaXJlY3Rpb24pIHtcblx0XHR2YXIgb2JqID0gJChlbGVtZW50KS5jbG9zZXN0KCcubmF2Jyk7XG5cdFx0dmFyIHRhcmdldENzcyA9ICgkKCdib2R5JykuY3NzKCdkaXJlY3Rpb24nKSA9PSAncnRsJykgPyAnbWFyZ2luLXJpZ2h0JyA6ICdtYXJnaW4tbGVmdCc7XG5cdFx0dmFyIG1hcmdpbkxlZnQgPSBwYXJzZUludCgkKG9iaikuY3NzKHRhcmdldENzcykpO1xuXHRcdHZhciBjb250YWluZXJXaWR0aCA9ICQoJy50b3AtbWVudScpLndpZHRoKCkgLSA4ODtcblx0XHR2YXIgdG90YWxXaWR0aCA9IDA7XG5cdFx0dmFyIGZpbmFsU2Nyb2xsV2lkdGggPSAwO1xuXG5cdFx0JChvYmopLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICghJCh0aGlzKS5oYXNDbGFzcygnbWVudS1jb250cm9sJykpIHtcblx0XHRcdFx0dG90YWxXaWR0aCArPSAkKHRoaXMpLndpZHRoKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xuXHRcdFx0Y2FzZSAnbmV4dCc6XG5cdFx0XHRcdHZhciB3aWR0aExlZnQgPSB0b3RhbFdpZHRoICsgbWFyZ2luTGVmdCAtIGNvbnRhaW5lcldpZHRoO1xuXHRcdFx0XHRpZiAod2lkdGhMZWZ0IDw9IGNvbnRhaW5lcldpZHRoKSB7XG5cdFx0XHRcdFx0ZmluYWxTY3JvbGxXaWR0aCA9IHdpZHRoTGVmdCAtIG1hcmdpbkxlZnQgKyAxMjg7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQob2JqKS5maW5kKCcubWVudS1jb250cm9sLm1lbnUtY29udHJvbC1yaWdodCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdFx0fSwgMTUwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmaW5hbFNjcm9sbFdpZHRoID0gY29udGFpbmVyV2lkdGggLSBtYXJnaW5MZWZ0IC0gMTI4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGZpbmFsU2Nyb2xsV2lkdGggIT09IDApIHtcblx0XHRcdFx0XHRpZiAoJCgnYm9keScpLmNzcygnZGlyZWN0aW9uJykgIT0gJ3J0bCcpIHtcblx0XHRcdFx0XHRcdCQob2JqKS5hbmltYXRlKHsgbWFyZ2luTGVmdDogJy0nICsgZmluYWxTY3JvbGxXaWR0aCArICdweCd9LCAxNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKG9iaikuZmluZCgnLm1lbnUtY29udHJvbC5tZW51LWNvbnRyb2wtbGVmdCcpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JChvYmopLmFuaW1hdGUoeyBtYXJnaW5SaWdodDogJy0nICsgZmluYWxTY3JvbGxXaWR0aCArICdweCd9LCAxNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQkKG9iaikuZmluZCgnLm1lbnUtY29udHJvbC5tZW51LWNvbnRyb2wtbGVmdCcpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwcmV2Jzpcblx0XHRcdFx0dmFyIHdpZHRoTGVmdCA9IC1tYXJnaW5MZWZ0O1xuXG5cdFx0XHRcdGlmICh3aWR0aExlZnQgPD0gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdFx0XHQkKG9iaikuZmluZCgnLm1lbnUtY29udHJvbC5tZW51LWNvbnRyb2wtbGVmdCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdFx0ZmluYWxTY3JvbGxXaWR0aCA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZmluYWxTY3JvbGxXaWR0aCA9IHdpZHRoTGVmdCAtIGNvbnRhaW5lcldpZHRoICsgODg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCQoJ2JvZHknKS5jc3MoJ2RpcmVjdGlvbicpICE9ICdydGwnKSB7XG5cdFx0XHRcdFx0JChvYmopLmFuaW1hdGUoeyBtYXJnaW5MZWZ0OiAnLScgKyBmaW5hbFNjcm9sbFdpZHRoICsgJ3B4J30sIDE1MCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKG9iaikuZmluZCgnLm1lbnUtY29udHJvbC5tZW51LWNvbnRyb2wtcmlnaHQnKS5hZGRDbGFzcygnc2hvdycpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQob2JqKS5hbmltYXRlKHsgbWFyZ2luUmlnaHQ6ICctJyArIGZpbmFsU2Nyb2xsV2lkdGggKyAncHgnfSwgMTUwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQob2JqKS5maW5kKCcubWVudS1jb250cm9sLm1lbnUtY29udHJvbC1yaWdodCcpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdH1cblxuXHQvLyBoYW5kbGUgcGFnZSBsb2FkIGFjdGl2ZSBtZW51IGZvY3VzXG5cdGZ1bmN0aW9uIGhhbmRsZVBhZ2VMb2FkTWVudUZvY3VzKCkge1xuXHRcdHZhciB0YXJnZXRNZW51ID0gJCgnLnRvcC1tZW51IC5uYXYnKTtcblx0XHR2YXIgdGFyZ2V0TGlzdCA9ICQoJy50b3AtbWVudSAubmF2ID4gbGknKTtcblx0XHR2YXIgdGFyZ2V0QWN0aXZlTGlzdCA9ICQoJy50b3AtbWVudSAubmF2ID4gbGkuYWN0aXZlJyk7XG5cdFx0dmFyIHRhcmdldENvbnRhaW5lciA9ICQoJy50b3AtbWVudScpO1xuXHRcdHZhciB0YXJnZXRDc3MgPSAoJCgnYm9keScpLmNzcygnZGlyZWN0aW9uJykgPT0gJ3J0bCcpID8gJ21hcmdpbi1yaWdodCcgOiAnbWFyZ2luLWxlZnQnO1xuXHRcdHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoJCh0YXJnZXRNZW51KS5jc3ModGFyZ2V0Q3NzKSk7XG5cdFx0dmFyIHZpZXdXaWR0aCA9ICQodGFyZ2V0Q29udGFpbmVyKS53aWR0aCgpIC0gMTI4O1xuXHRcdHZhciBwcmV2V2lkdGggPSAkKCcudG9wLW1lbnUgLm5hdiA+IGxpLmFjdGl2ZScpLndpZHRoKCk7XG5cdFx0dmFyIHNwZWVkID0gMDtcblx0XHR2YXIgZnVsbFdpZHRoID0gMDtcblxuXHRcdCQodGFyZ2V0QWN0aXZlTGlzdCkucHJldkFsbCgpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRwcmV2V2lkdGggKz0gJCh0aGlzKS53aWR0aCgpO1xuXHRcdH0pO1xuXG5cdFx0JCh0YXJnZXRMaXN0KS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdtZW51LWNvbnRyb2wnKSkge1xuXHRcdFx0XHRmdWxsV2lkdGggKz0gJCh0aGlzKS53aWR0aCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKHByZXZXaWR0aCA+PSB2aWV3V2lkdGgpIHtcblx0XHRcdHZhciBmaW5hbFNjcm9sbFdpZHRoID0gcHJldldpZHRoIC0gdmlld1dpZHRoICsgMTI4O1xuXHRcdFx0aWYgKCQoJ2JvZHknKS5jc3MoJ2RpcmVjdGlvbicpICE9ICdydGwnKSB7XG5cdFx0XHRcdCQodGFyZ2V0TWVudSkuYW5pbWF0ZSh7IG1hcmdpbkxlZnQ6ICctJyArIGZpbmFsU2Nyb2xsV2lkdGggKyAncHgnfSwgc3BlZWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0YXJnZXRNZW51KS5hbmltYXRlKHsgbWFyZ2luUmlnaHQ6ICctJyArIGZpbmFsU2Nyb2xsV2lkdGggKyAncHgnfSwgc3BlZWQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwcmV2V2lkdGggIT0gZnVsbFdpZHRoICYmIGZ1bGxXaWR0aCA+PSB2aWV3V2lkdGgpIHtcblx0XHRcdCQodGFyZ2V0TWVudSkuZmluZCgnLm1lbnUtY29udHJvbC5tZW51LWNvbnRyb2wtcmlnaHQnKS5hZGRDbGFzcygnc2hvdycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRhcmdldE1lbnUpLmZpbmQoJy5tZW51LWNvbnRyb2wubWVudS1jb250cm9sLXJpZ2h0JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblx0XHR9XG5cblx0XHRpZiAocHJldldpZHRoID49IHZpZXdXaWR0aCAmJiBmdWxsV2lkdGggPj0gdmlld1dpZHRoKSB7XG5cdFx0XHQkKHRhcmdldE1lbnUpLmZpbmQoJy5tZW51LWNvbnRyb2wubWVudS1jb250cm9sLWxlZnQnKS5hZGRDbGFzcygnc2hvdycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRhcmdldE1lbnUpLmZpbmQoJy5tZW51LWNvbnRyb2wubWVudS1jb250cm9sLWxlZnQnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGhhbmRsZSBtZW51IG5leHQgYnV0dG9uIGNsaWNrIGFjdGlvblxuXHQkKCdbZGF0YS1jbGljaz1cIm5leHQtbWVudVwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aGFuZGxlTWVudUJ1dHRvbkFjdGlvbih0aGlzLCduZXh0Jyk7XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSBtZW51IHByZXYgYnV0dG9uIGNsaWNrIGFjdGlvblxuXHQkKCdbZGF0YS1jbGljaz1cInByZXYtbWVudVwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aGFuZGxlTWVudUJ1dHRvbkFjdGlvbih0aGlzLCdwcmV2Jyk7XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSB1bmxpbWl0ZWQgbWVudSByZXNwb25zaXZlIHNldHRpbmdcblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHQkKCcudG9wLW1lbnUgLm5hdicpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0aGFuZGxlUGFnZUxvYWRNZW51Rm9jdXMoKTtcblx0fSk7XG5cblx0aGFuZGxlUGFnZUxvYWRNZW51Rm9jdXMoKTtcbn07XG5cblxuLyogMTkuIEhhbmRsZSBUb3AgTWVudSAtIFN1YiBNZW51IFRvZ2dsZSAtIGFkZGVkIGluIFYxLjlcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVRvcE1lbnVTdWJNZW51ID0gZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnRvcC1tZW51IC5zdWItbWVudSAuaGFzLXN1YiA+IGEnLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGFyZ2V0ID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpLmZpbmQoJy5zdWItbWVudScpLmZpcnN0KCk7XG5cdFx0dmFyIG90aGVyTWVudSA9ICQodGhpcykuY2xvc2VzdCgndWwnKS5maW5kKCcuc3ViLW1lbnUnKS5ub3QodGFyZ2V0KTtcblx0XHQkKG90aGVyTWVudSkubm90KHRhcmdldCkuc2xpZGVVcCgyNTAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdleHBhbmQnKTtcblx0XHR9KTtcblx0XHQkKHRhcmdldCkuc2xpZGVUb2dnbGUoMjUwLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0YXJnZXRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcblx0XHRcdGlmICgkKHRhcmdldExpKS5oYXNDbGFzcygnZXhwYW5kJykpIHtcblx0XHRcdFx0JCh0YXJnZXRMaSkucmVtb3ZlQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0YXJnZXRMaSkuYWRkQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cblxuLyogMjAuIEhhbmRsZSBUb3AgTWVudSAtIE1vYmlsZSBTdWIgTWVudSBUb2dnbGUgLSBhZGRlZCBpbiBWMS45XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVNb2JpbGVUb3BNZW51U3ViTWVudSA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50b3AtbWVudSAubmF2ID4gbGkuaGFzLXN1YiA+IGEnLCBmdW5jdGlvbigpIHtcblx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY3KSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpLmZpbmQoJy5zdWItbWVudScpLmZpcnN0KCk7XG5cdFx0XHR2YXIgb3RoZXJNZW51ID0gJCh0aGlzKS5jbG9zZXN0KCd1bCcpLmZpbmQoJy5zdWItbWVudScpLm5vdCh0YXJnZXQpO1xuXHRcdFx0JChvdGhlck1lbnUpLm5vdCh0YXJnZXQpLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCdleHBhbmQnKTtcblx0XHRcdH0pO1xuXHRcdFx0JCh0YXJnZXQpLnNsaWRlVG9nZ2xlKDI1MCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcblx0XHRcdFx0aWYgKCQodGFyZ2V0TGkpLmhhc0NsYXNzKCdleHBhbmQnKSkge1xuXHRcdFx0XHRcdCQodGFyZ2V0TGkpLnJlbW92ZUNsYXNzKCdleHBhbmQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKHRhcmdldExpKS5hZGRDbGFzcygnZXhwYW5kJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5cbi8qIDIxLiBIYW5kbGUgVG9wIE1lbnUgLSBNb2JpbGUgVG9wIE1lbnUgVG9nZ2xlIC0gYWRkZWQgaW4gVjEuOVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlVG9wTWVudU1vYmlsZVRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwidG9wLW1lbnUtdG9nZ2xlZFwiXScsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy50b3AtbWVudScpLnNsaWRlVG9nZ2xlKDI1MCk7XG5cdH0pO1xufTtcblxuXG4vKiAyMi4gSGFuZGxlIENsZWFyIFNpZGViYXIgU2VsZWN0aW9uICYgSGlkZSBNb2JpbGUgTWVudSAtIGFkZGVkIGluIFYxLjlcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZUNsZWFyU2lkZWJhclNlbGVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHQkKCcuc2lkZWJhciAubmF2ID4gbGksIC5zaWRlYmFyIC5uYXYgLnN1Yi1tZW51JykucmVtb3ZlQ2xhc3MoJ2V4cGFuZCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG59O1xudmFyIGhhbmRsZUNsZWFyU2lkZWJhck1vYmlsZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHQkKCcjcGFnZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygncGFnZS1zaWRlYmFyLXRvZ2dsZWQnKTtcbn07XG5cblxuLyogMjMuIEhhbmRsZSBDaGVjayBCb290c3RyYXAgVmVyc2lvbiAtIGFkZGVkIGluIFY0LjBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZUNoZWNrQm9vdHN0cmFwVmVyc2lvbiA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gcGFyc2VJbnQoJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLlZFUlNJT04pO1xufTtcblxuXG4vKiAyNC4gSGFuZGxlIFBhZ2UgU2Nyb2xsIENsYXNzIC0gYWRkZWQgaW4gVjQuMFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlQ2hlY2tTY3JvbGxDbGFzcyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMCkge1xuXHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLmFkZENsYXNzKCdoYXMtc2Nyb2xsJyk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnI3BhZ2UtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2hhcy1zY3JvbGwnKTtcblx0fVxufTtcbnZhciBoYW5kbGVQYWdlU2Nyb2xsQ2xhc3MgPSBmdW5jdGlvbigpIHtcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcblx0XHRoYW5kbGVDaGVja1Njcm9sbENsYXNzKCk7XG5cdH0pO1xuXHRoYW5kbGVDaGVja1Njcm9sbENsYXNzKCk7XG59O1xuXG5cbi8qIDI1LiBIYW5kbGUgVG9nZ2xlIE5hdmJhciBQcm9maWxlIC0gYWRkZWQgaW4gVjQuMFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgaGFuZGxlVG9nZ2xlTmF2UHJvZmlsZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZXhwYW5kVGltZSA9ICgkKCcuc2lkZWJhcicpLmF0dHIoJ2RhdGEtZGlzYWJsZS1zbGlkZS1hbmltYXRpb24nKSkgPyAwIDogMjUwO1xuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJuYXYtcHJvZmlsZVwiXScsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgdGFyZ2V0TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XG5cdFx0dmFyIHRhcmdldFByb2ZpbGUgPSAkKCcuc2lkZWJhciAubmF2Lm5hdi1wcm9maWxlJyk7XG5cdFx0dmFyIHRhcmdldENsYXNzID0gJ2FjdGl2ZSc7XG5cdFx0dmFyIHRhcmdldEV4cGFuZGluZ0NsYXNzID0gJ2V4cGFuZGluZyc7XG5cdFx0dmFyIHRhcmdldEV4cGFuZENsYXNzID0gJ2V4cGFuZCc7XG5cdFx0dmFyIHRhcmdldENsb3NpbmdDbGFzcyA9ICdjbG9zaW5nJztcblx0XHR2YXIgdGFyZ2V0Q2xvc2VkQ2xhc3MgPSAnY2xvc2VkJztcblxuXHRcdGlmICgkKHRhcmdldFByb2ZpbGUpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHQkKHRhcmdldExpKS5yZW1vdmVDbGFzcyh0YXJnZXRDbGFzcyk7XG5cdFx0XHQkKHRhcmdldFByb2ZpbGUpLnJlbW92ZUNsYXNzKHRhcmdldENsb3NpbmdDbGFzcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGFyZ2V0TGkpLmFkZENsYXNzKHRhcmdldENsYXNzKTtcblx0XHRcdCQodGFyZ2V0UHJvZmlsZSkuYWRkQ2xhc3ModGFyZ2V0RXhwYW5kaW5nQ2xhc3MpO1xuXHRcdH1cblx0XHQkKHRhcmdldFByb2ZpbGUpLnNsaWRlVG9nZ2xlKGV4cGFuZFRpbWUsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCEkKHRhcmdldFByb2ZpbGUpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRcdCQodGFyZ2V0UHJvZmlsZSkuYWRkQ2xhc3ModGFyZ2V0Q2xvc2VkQ2xhc3MpO1xuXHRcdFx0XHQkKHRhcmdldFByb2ZpbGUpLnJlbW92ZUNsYXNzKHRhcmdldEV4cGFuZENsYXNzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGFyZ2V0UHJvZmlsZSkuYWRkQ2xhc3ModGFyZ2V0RXhwYW5kQ2xhc3MpO1xuXHRcdFx0XHQkKHRhcmdldFByb2ZpbGUpLnJlbW92ZUNsYXNzKHRhcmdldENsb3NlZENsYXNzKTtcblx0XHRcdH1cblx0XHRcdCQodGFyZ2V0UHJvZmlsZSkucmVtb3ZlQ2xhc3ModGFyZ2V0RXhwYW5kaW5nQ2xhc3MgKyAnICcgKyB0YXJnZXRDbG9zaW5nQ2xhc3MpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cblxuLyogMjYuIEhhbmRsZSBTaWRlYmFyIFNjcm9sbCBNZW1vcnkgLSBhZGRlZCBpbiBWNC4wXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBoYW5kbGVTaWRlYmFyU2Nyb2xsTWVtb3J5ID0gZnVuY3Rpb24oKSB7XG5cdGlmICghKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mKGxvY2FsU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdCQoJy5zaWRlYmFyIFtkYXRhLXNjcm9sbGJhcj1cInRydWVcIl0nKS5zbGltU2Nyb2xsKCkuYmluZCgnc2xpbXNjcm9sbGluZycsIGZ1bmN0aW9uKGUsIHBvcykge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaWRlYmFyU2Nyb2xsUG9zaXRpb24nLCBwb3MgKyAncHgnKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dmFyIGRlZmF1bHRTY3JvbGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2lkZWJhclNjcm9sbFBvc2l0aW9uJyk7XG5cdFx0XHRcdGlmIChkZWZhdWx0U2Nyb2xsKSB7XG5cdFx0XHRcdFx0JCgnLnNpZGViYXIgW2RhdGEtc2Nyb2xsYmFyPVwidHJ1ZVwiXScpLnNsaW1TY3JvbGwoeyBzY3JvbGxUbzogZGVmYXVsdFNjcm9sbCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8qIDI3LiBIYW5kbGUgU2lkZWJhciBNaW5pZnkgU3ViIE1lbnUgLSBhZGRlZCBpbiBWNC4wXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbnZhciBmbG9hdFN1Yk1lbnVUaW1lb3V0O1xudmFyIHRhcmdldEZsb2F0TWVudTtcbnZhciBoYW5kbGVNb3VzZW92ZXJGbG9hdFN1Yk1lbnUgPSBmdW5jdGlvbihlbG0pIHtcblx0Y2xlYXJUaW1lb3V0KGZsb2F0U3ViTWVudVRpbWVvdXQpO1xufTtcbnZhciBoYW5kbGVNb3VzZW91dEZsb2F0U3ViTWVudSA9IGZ1bmN0aW9uKGVsbSkge1xuXHRmbG9hdFN1Yk1lbnVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQkKCcjZmxvYXQtc3ViLW1lbnUnKS5yZW1vdmUoKTtcblx0fSwgMTUwKTtcbn07XG52YXIgaGFuZGxlU2lkZWJhck1pbmlmeUZsb2F0TWVudSA9IGZ1bmN0aW9uKCkge1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2Zsb2F0LXN1Yi1tZW51IGxpLmhhcy1zdWIgPiBhJywgZnVuY3Rpb24oZSkge1xuXHRcdHZhciB0YXJnZXQgPSAkKHRoaXMpLm5leHQoJy5zdWItbWVudScpO1xuXHRcdHZhciB0YXJnZXRMaSA9ICQodGFyZ2V0KS5jbG9zZXN0KCdsaScpO1xuXHRcdHZhciBjbG9zZSA9IGZhbHNlO1xuXHRcdHZhciBleHBhbmQgPSBmYWxzZTtcblx0XHRpZiAoJCh0YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHQkKHRhcmdldExpKS5hZGRDbGFzcygnY2xvc2luZycpO1xuXHRcdFx0Y2xvc2UgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRhcmdldExpKS5hZGRDbGFzcygnZXhwYW5kaW5nJyk7XG5cdFx0XHRleHBhbmQgPSB0cnVlO1xuXHRcdH1cblx0XHQkKHRhcmdldCkuc2xpZGVUb2dnbGUoe1xuXHRcdFx0ZHVyYXRpb246IDI1MCxcblx0XHRcdHByb2dyZXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHRhcmdldE1lbnUgPSAkKCcjZmxvYXQtc3ViLW1lbnUnKTtcblx0XHRcdFx0dmFyIHRhcmdldEhlaWdodCA9ICQodGFyZ2V0TWVudSkuaGVpZ2h0KCk7XG5cdFx0XHRcdHZhciB0YXJnZXRPZmZzZXQgPSAkKHRhcmdldE1lbnUpLm9mZnNldCgpO1xuXHRcdFx0XHR2YXIgdGFyZ2V0T3JpVG9wID0gJCh0YXJnZXRNZW51KS5hdHRyKCdkYXRhLW9mZnNldC10b3AnKTtcblx0XHRcdFx0dmFyIHRhcmdldE1lbnVUb3AgPSAkKHRhcmdldE1lbnUpLmF0dHIoJ2RhdGEtbWVudS1vZmZzZXQtdG9wJyk7XG5cdFx0XHRcdHZhciB0YXJnZXRUb3AgXHQgPSB0YXJnZXRPZmZzZXQudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdFx0XHR2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRcdFx0XHRpZiAoY2xvc2UpIHtcblx0XHRcdFx0XHRpZiAodGFyZ2V0VG9wID4gdGFyZ2V0T3JpVG9wKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRUb3AgPSAodGFyZ2V0VG9wID4gdGFyZ2V0T3JpVG9wKSA/IHRhcmdldE9yaVRvcCA6IHRhcmdldFRvcDtcblx0XHRcdFx0XHRcdCQoJyNmbG9hdC1zdWItbWVudScpLmNzcyh7ICd0b3AnOiB0YXJnZXRUb3AgKyAncHgnLCAnYm90dG9tJzogJ2F1dG8nIH0pO1xuXHRcdFx0XHRcdFx0JCgnI2Zsb2F0LXN1Yi1tZW51LWFycm93JykuY3NzKHsgJ3RvcCc6ICcyMHB4JywgJ2JvdHRvbSc6ICdhdXRvJyB9KTtcblx0XHRcdFx0XHRcdCQoJyNmbG9hdC1zdWItbWVudS1saW5lJykuY3NzKHsgJ3RvcCc6ICcyMHB4JywgJ2JvdHRvbSc6ICdhdXRvJyB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGV4cGFuZCkge1xuXHRcdFx0XHRcdGlmICgod2luZG93SGVpZ2h0IC0gdGFyZ2V0VG9wKSA8IHRhcmdldEhlaWdodCkge1xuXHRcdFx0XHRcdFx0dmFyIGFycm93Qm90dG9tID0gKHdpbmRvd0hlaWdodCAtIHRhcmdldE1lbnVUb3ApIC0gMjI7XG5cdFx0XHRcdFx0XHQkKCcjZmxvYXQtc3ViLW1lbnUnKS5jc3MoeyAndG9wJzogJ2F1dG8nLCAnYm90dG9tJzogMCB9KTtcblx0XHRcdFx0XHRcdCQoJyNmbG9hdC1zdWItbWVudS1hcnJvdycpLmNzcyh7ICd0b3AnOiAnYXV0bycsICdib3R0b20nOiBhcnJvd0JvdHRvbSArICdweCcgfSk7XG5cdFx0XHRcdFx0XHQkKCcjZmxvYXQtc3ViLW1lbnUtbGluZScpLmNzcyh7ICd0b3AnOiAnMjBweCcsICdib3R0b20nOiBhcnJvd0JvdHRvbSArICdweCcgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoJCh0YXJnZXQpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRcdFx0JCh0YXJnZXRMaSkuYWRkQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdFx0XHRcdCQodGFyZ2V0TGkpLnJlbW92ZUNsYXNzKCdjbG9zZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKHRhcmdldExpKS5hZGRDbGFzcygnY2xvc2VkJyk7XG5cdFx0XHRcdFx0JCh0YXJnZXRMaSkucmVtb3ZlQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQodGFyZ2V0TGkpLnJlbW92ZUNsYXNzKCdjbG9zaW5nIGV4cGFuZGluZycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblx0JChkb2N1bWVudCkub24oe1xuXHRcdG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQoJyNwYWdlLWNvbnRhaW5lcicpLmhhc0NsYXNzKCdwYWdlLXNpZGViYXItbWluaWZpZWQnKSkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoZmxvYXRTdWJNZW51VGltZW91dCk7XG5cblx0XHRcdFx0dmFyIHRhcmdldE1lbnUgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuZmluZCgnLnN1Yi1tZW51JykuZmlyc3QoKTtcblx0XHRcdFx0aWYgKHRhcmdldEZsb2F0TWVudSA9PSB0aGlzICYmICQoJyNmbG9hdC1zdWItbWVudScpLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRGbG9hdE1lbnUgPSB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0YXJnZXRNZW51SHRtbCA9ICQodGFyZ2V0TWVudSkuaHRtbCgpO1xuXHRcdFx0XHRpZiAodGFyZ2V0TWVudUh0bWwpIHtcblx0XHRcdFx0XHR2YXIgc2lkZWJhck9mZnNldCA9ICQoJyNzaWRlYmFyJykub2Zmc2V0KCk7XG5cdFx0XHRcdFx0dmFyIHNpZGViYXJXaWR0aCA9IHBhcnNlSW50KCQoJyNzaWRlYmFyJykud2lkdGgoKSk7XG5cdFx0XHRcdFx0dmFyIHNpZGViYXJYID0gKCEkKCcjcGFnZS1jb250YWluZXInKS5oYXNDbGFzcygncGFnZS13aXRoLXJpZ2h0LXNpZGViYXInKSAmJiAkKCdib2R5JykuY3NzKCdkaXJlY3Rpb24nKSAhPSAncnRsJykgPyAoc2lkZWJhck9mZnNldC5sZWZ0ICsgc2lkZWJhcldpZHRoKSA6ICgkKHdpbmRvdykud2lkdGgoKSAtIHNpZGViYXJPZmZzZXQubGVmdCk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldEhlaWdodCA9ICQodGFyZ2V0TWVudSkuaGVpZ2h0KCk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldE9mZnNldCA9ICQodGhpcykub2Zmc2V0KCk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldFRvcCA9IHRhcmdldE9mZnNldC50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHRcdFx0dmFyIHRhcmdldExlZnQgPSAoISQoJyNwYWdlLWNvbnRhaW5lcicpLmhhc0NsYXNzKCdwYWdlLXdpdGgtcmlnaHQtc2lkZWJhcicpICYmICQoJ2JvZHknKS5jc3MoJ2RpcmVjdGlvbicpICE9ICdydGwnKSA/IHNpZGViYXJYIDogJ2F1dG8nO1xuXHRcdFx0XHRcdHZhciB0YXJnZXRSaWdodCA9ICghJCgnI3BhZ2UtY29udGFpbmVyJykuaGFzQ2xhc3MoJ3BhZ2Utd2l0aC1yaWdodC1zaWRlYmFyJykgJiYgJCgnYm9keScpLmNzcygnZGlyZWN0aW9uJykgIT0gJ3J0bCcpID8gJ2F1dG8nIDogc2lkZWJhclg7XG5cdFx0XHRcdFx0dmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuXHRcdFx0XHRcdGlmICgkKCcjZmxvYXQtc3ViLW1lbnUnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdHRhcmdldE1lbnVIdG1sID0gJycrXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImZsb2F0LXN1Yi1tZW51LWNvbnRhaW5lclwiIGlkPVwiZmxvYXQtc3ViLW1lbnVcIiBkYXRhLW9mZnNldC10b3A9XCInKyB0YXJnZXRUb3AgKydcIiBkYXRhLW1lbnUtb2Zmc2V0LXRvcD1cIicrIHRhcmdldFRvcCArJ1wiIG9ubW91c2VvdmVyPVwiaGFuZGxlTW91c2VvdmVyRmxvYXRTdWJNZW51KHRoaXMpXCIgb25tb3VzZW91dD1cImhhbmRsZU1vdXNlb3V0RmxvYXRTdWJNZW51KHRoaXMpXCI+Jytcblx0XHRcdFx0XHRcdCdcdDxkaXYgY2xhc3M9XCJmbG9hdC1zdWItbWVudS1hcnJvd1wiIGlkPVwiZmxvYXQtc3ViLW1lbnUtYXJyb3dcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0J1x0PGRpdiBjbGFzcz1cImZsb2F0LXN1Yi1tZW51LWxpbmVcIiBpZD1cImZsb2F0LXN1Yi1tZW51LWxpbmVcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0J1x0PHVsIGNsYXNzPVwiZmxvYXQtc3ViLW1lbnVcIj4nKyB0YXJnZXRNZW51SHRtbCArICc8L3VsPicrXG5cdFx0XHRcdFx0XHQnPC9kaXY+Jztcblx0XHRcdFx0XHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLmFwcGVuZCh0YXJnZXRNZW51SHRtbCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoJyNmbG9hdC1zdWItbWVudScpLmF0dHIoJ2RhdGEtb2Zmc2V0LXRvcCcsIHRhcmdldFRvcCk7XG5cdFx0XHRcdFx0XHQkKCcjZmxvYXQtc3ViLW1lbnUnKS5hdHRyKCdkYXRhLW1lbnUtb2Zmc2V0LXRvcCcsIHRhcmdldFRvcCk7XG5cdFx0XHRcdFx0XHQkKCcuZmxvYXQtc3ViLW1lbnUnKS5odG1sKHRhcmdldE1lbnVIdG1sKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgdGFyZ2V0SGVpZ2h0ID0gJCgnI2Zsb2F0LXN1Yi1tZW51JykuaGVpZ2h0KCk7XG5cdFx0XHRcdFx0aWYgKCh3aW5kb3dIZWlnaHQgLSB0YXJnZXRUb3ApID4gdGFyZ2V0SGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHQkKCcjZmxvYXQtc3ViLW1lbnUnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHQndG9wJzogdGFyZ2V0VG9wLFxuXHRcdFx0XHRcdFx0XHQnbGVmdCc6IHRhcmdldExlZnQsXG5cdFx0XHRcdFx0XHRcdCdib3R0b20nOiAnYXV0bycsXG5cdFx0XHRcdFx0XHRcdCdyaWdodCc6IHRhcmdldFJpZ2h0XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdCQoJyNmbG9hdC1zdWItbWVudS1hcnJvdycpLmNzcyh7ICd0b3AnOiAnMjBweCcsICdib3R0b20nOiAnYXV0bycgfSk7XG5cdFx0XHRcdFx0XHQkKCcjZmxvYXQtc3ViLW1lbnUtbGluZScpLmNzcyh7ICd0b3AnOiAnMjBweCcsICdib3R0b20nOiAnYXV0bycgfSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoJyNmbG9hdC1zdWItbWVudScpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdib3R0b20nOiAwLFxuXHRcdFx0XHRcdFx0XHQndG9wJzogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0XHQnbGVmdCc6IHRhcmdldExlZnQsXG5cdFx0XHRcdFx0XHRcdCdyaWdodCc6IHRhcmdldFJpZ2h0XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHZhciBhcnJvd0JvdHRvbSA9ICh3aW5kb3dIZWlnaHQgLSB0YXJnZXRUb3ApIC0gMjE7XG5cdFx0XHRcdFx0XHQkKCcjZmxvYXQtc3ViLW1lbnUtYXJyb3cnKS5jc3MoeyAndG9wJzogJ2F1dG8nLCAnYm90dG9tJzogYXJyb3dCb3R0b20gKyAncHgnIH0pO1xuXHRcdFx0XHRcdFx0JCgnI2Zsb2F0LXN1Yi1tZW51LWxpbmUnKS5jc3MoeyAndG9wJzogJzIwcHgnLCAnYm90dG9tJzogYXJyb3dCb3R0b20gKyAncHgnIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKCcjZmxvYXQtc3ViLW1lbnUnKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR0YXJnZXRGbG9hdE1lbnUgPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91c2VsZWF2ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCgnI3BhZ2UtY29udGFpbmVyJykuaGFzQ2xhc3MoJ3BhZ2Utc2lkZWJhci1taW5pZmllZCcpKSB7XG5cdFx0XHRcdGZsb2F0U3ViTWVudVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoJyNmbG9hdC1zdWItbWVudScpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdHRhcmdldEZsb2F0TWVudSA9ICcnO1xuXHRcdFx0XHR9LCAyNTApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgJy5zaWRlYmFyIC5uYXYgPiBsaS5oYXMtc3ViID4gYScpO1xufTtcblxuXG4vKiAyOC4gSGFuZGxlIEFqYXggTW9kZSAtIGFkZGVkIGluIFY0LjBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIENMRUFSX09QVElPTiA9ICcnO1xudmFyIGhhbmRsZUFqYXhNb2RlID0gZnVuY3Rpb24oc2V0dGluZykge1xuXHR2YXIgZW1wdHlIdG1sID0gKHNldHRpbmcuZW1wdHlIdG1sKSA/ICBzZXR0aW5nLmVtcHR5SHRtbCA6ICc8ZGl2IGNsYXNzPVwicC10LTQwIHAtYi00MCB0ZXh0LWNlbnRlciBmLXMtMjAgY29udGVudFwiPjxpIGNsYXNzPVwiZmEgZmEtd2FybmluZyBmYS1sZyB0ZXh0LW11dGVkIG0tci01XCI+PC9pPiA8c3BhbiBjbGFzcz1cImYtdy02MDAgdGV4dC1pbnZlcnNlXCI+RXJyb3IgNDA0ISBQYWdlIG5vdCBmb3VuZC48L3NwYW4+PC9kaXY+Jztcblx0dmFyIGRlZmF1bHRVcmwgPSAoc2V0dGluZy5hamF4RGVmYXVsdFVybCkgPyBzZXR0aW5nLmFqYXhEZWZhdWx0VXJsIDogJyc7XG5cdCAgICBkZWZhdWx0VXJsID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSA/IHdpbmRvdy5sb2NhdGlvbi5oYXNoIDogZGVmYXVsdFVybDtcblxuXHRpZiAoZGVmYXVsdFVybCA9PT0gJycpIHtcblx0XHQkKCcjY29udGVudCcpLmh0bWwoZW1wdHlIdG1sKTtcblx0fSBlbHNlIHtcblx0XHRyZW5kZXJBamF4KGRlZmF1bHRVcmwsICcnLCB0cnVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyRWxlbWVudCgpIHtcblx0XHQkKCcuanZlY3Rvcm1hcC1sYWJlbCwgLmp2ZWN0b3ItbGFiZWwsIC5BdXRvRmlsbF9ib3JkZXIgLCNncml0dGVyLW5vdGljZS13cmFwcGVyLCAudWktYXV0b2NvbXBsZXRlLCAuY29sb3JwaWNrZXIsIC5GaXhlZEhlYWRlcl9IZWFkZXIsIC5GaXhlZEhlYWRlcl9DbG9uZWQgLmxpZ2h0Ym94T3ZlcmxheSwgLmxpZ2h0Ym94LCAuaW50cm9qcy1oaW50cywgLm52dG9vbHRpcCwgI2Zsb2F0LXN1Yi1tZW51JykucmVtb3ZlKCk7XG5cdFx0aWYgKCQuZm4uRGF0YVRhYmxlKSB7XG5cdFx0XHQkKCcuZGF0YVRhYmxlJykuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xuXHRcdH1cblx0XHRpZiAoJCgnI3BhZ2UtY29udGFpbmVyJykuaGFzQ2xhc3MoJ3BhZ2Utc2lkZWJhci10b2dnbGVkJykpIHtcblx0XHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdwYWdlLXNpZGViYXItdG9nZ2xlZCcpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrU2lkZWJhckFjdGl2ZSh1cmwpIHtcblx0XHR2YXIgdGFyZ2V0RWxtID0gJyNzaWRlYmFyIFtkYXRhLXRvZ2dsZT1cImFqYXhcIl1baHJlZj1cIicrIHVybCArJ1wiXSc7XG5cdFx0aWYgKCQodGFyZ2V0RWxtKS5sZW5ndGggIT09IDApIHtcblx0XHRcdCQoJyNzaWRlYmFyIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JCh0YXJnZXRFbG0pLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JCh0YXJnZXRFbG0pLnBhcmVudHMoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tQdXNoU3RhdGUodXJsKSB7XG5cdFx0dmFyIHRhcmdldFVybCA9IHVybC5yZXBsYWNlKCcjJywnJyk7XG5cdFx0dmFyIHRhcmdldFVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdHZhciBpc0lFID0gdGFyZ2V0VXNlckFnZW50LmluZGV4T2YoJ01TSUUgJyk7XG5cblx0XHRpZiAoaXNJRSAmJiAoaXNJRSA+IDAgJiYgaXNJRSA8IDkpKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldFVybDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCAnIycgKyB0YXJnZXRVcmwpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrQ2xlYXJPcHRpb24oKSB7XG5cdFx0aWYgKENMRUFSX09QVElPTikge1xuXHRcdFx0QXBwLmNsZWFyUGFnZU9wdGlvbihDTEVBUl9PUFRJT04pO1xuXHRcdFx0Q0xFQVJfT1BUSU9OID0gJyc7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tMb2FkaW5nKGxvYWQpIHtcblx0XHRpZiAoIWxvYWQpIHtcblx0XHRcdGlmICgkKCcjcGFnZS1jb250ZW50LWxvYWRlcicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ3BhZ2UtY29udGVudC1sb2FkaW5nJyk7XG5cdFx0XHRcdCQoJyNjb250ZW50JykuYXBwZW5kKCc8ZGl2IGlkPVwicGFnZS1jb250ZW50LWxvYWRlclwiPjxzcGFuIGNsYXNzPVwic3Bpbm5lclwiPjwvc3Bhbj48L2Rpdj4nKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnI3BhZ2UtY29udGVudC1sb2FkZXInKS5yZW1vdmUoKTtcblx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygncGFnZS1jb250ZW50LWxvYWRpbmcnKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXJBamF4KHVybCwgZWxtLCBkaXNhYmxlUHVzaFN0YXRlKSB7XG5cdFx0UGFjZS5yZXN0YXJ0KCk7XG5cblx0XHRjaGVja0xvYWRpbmcoZmFsc2UpO1xuXHRcdGNsZWFyRWxlbWVudCgpO1xuXHRcdGNoZWNrU2lkZWJhckFjdGl2ZSh1cmwpO1xuXHRcdGNoZWNrQ2xlYXJPcHRpb24oKTtcblx0XHRpZiAoIWRpc2FibGVQdXNoU3RhdGUpIHtcblx0XHRcdGNoZWNrUHVzaFN0YXRlKHVybCk7XG5cdFx0fVxuXG5cdFx0dmFyIHRhcmdldENvbnRhaW5lcj0gJyNjb250ZW50Jztcblx0XHR2YXIgdGFyZ2V0VXJsIFx0ICAgPSB1cmwucmVwbGFjZSgnIycsJycpO1xuXHRcdHZhciB0YXJnZXRUeXBlIFx0ICAgPSAoc2V0dGluZy5hamF4VHlwZSkgPyBzZXR0aW5nLmFqYXhUeXBlIDogJ0dFVCc7XG5cdFx0dmFyIHRhcmdldERhdGFUeXBlID0gKHNldHRpbmcuYWpheERhdGFUeXBlKSA/IHNldHRpbmcuYWpheERhdGFUeXBlIDogJ2h0bWwnO1xuXHRcdGlmIChlbG0pIHtcblx0XHRcdHRhcmdldERhdGFUeXBlID0gKCQoZWxtKS5hdHRyKCdkYXRhLXR5cGUnKSkgPyAkKGVsbSkuYXR0cignZGF0YS10eXBlJykgOiB0YXJnZXREYXRhVHlwZTtcblx0XHRcdHRhcmdldERhdGFEYXRhVHlwZSA9ICgkKGVsbSkuYXR0cignZGF0YS1kYXRhLXR5cGUnKSkgPyAkKGVsbSkuYXR0cignZGF0YS1kYXRhLXR5cGUnKSA6IHRhcmdldERhdGFUeXBlO1xuXHRcdH1cblxuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IHRhcmdldFVybCxcblx0XHRcdHR5cGU6IHRhcmdldFR5cGUsXG5cdFx0XHRkYXRhVHlwZTogdGFyZ2V0RGF0YVR5cGUsXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdCQodGFyZ2V0Q29udGFpbmVyKS5odG1sKGRhdGEpO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcblx0XHRcdFx0JCh0YXJnZXRDb250YWluZXIpLmh0bWwoZW1wdHlIdG1sKTtcblx0XHRcdH1cblx0XHR9KS5kb25lKGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2hlY2tMb2FkaW5nKHRydWUpO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMCk7XG5cdFx0XHRBcHAuaW5pdENvbXBvbmVudCgpO1xuXHRcdH0pO1xuXHR9XG5cblx0JCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRyZW5kZXJBamF4KHdpbmRvdy5sb2NhdGlvbi5oYXNoLCAnJywgdHJ1ZSk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwiYWpheFwiXScsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cmVuZGVyQWpheCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgdGhpcyk7XG5cdH0pO1xufTtcbnZhciBoYW5kbGVTZXRQYWdlT3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cdGlmIChvcHRpb24ucGFnZUNvbnRlbnRGdWxsSGVpZ2h0KSB7XG5cdFx0JCgnI3BhZ2UtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3BhZ2UtY29udGVudC1mdWxsLWhlaWdodCcpO1xuXHR9XG5cdGlmIChvcHRpb24ucGFnZVNpZGViYXJMaWdodCkge1xuXHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLmFkZENsYXNzKCdwYWdlLXdpdGgtbGlnaHQtc2lkZWJhcicpO1xuXHR9XG5cdGlmIChvcHRpb24ucGFnZVNpZGViYXJSaWdodCkge1xuXHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLmFkZENsYXNzKCdwYWdlLXdpdGgtcmlnaHQtc2lkZWJhcicpO1xuXHR9XG5cdGlmIChvcHRpb24ucGFnZVNpZGViYXJXaWRlKSB7XG5cdFx0JCgnI3BhZ2UtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3BhZ2Utd2l0aC13aWRlLXNpZGViYXInKTtcblx0fVxuXHRpZiAob3B0aW9uLnBhZ2VTaWRlYmFyTWluaWZpZWQpIHtcblx0XHQkKCcjcGFnZS1jb250YWluZXInKS5hZGRDbGFzcygncGFnZS1zaWRlYmFyLW1pbmlmaWVkJyk7XG5cdH1cblx0aWYgKG9wdGlvbi5wYWdlU2lkZWJhclRyYW5zcGFyZW50KSB7XG5cdFx0JCgnI3NpZGViYXInKS5hZGRDbGFzcygnc2lkZWJhci10cmFuc3BhcmVudCcpO1xuXHR9XG5cdGlmIChvcHRpb24ucGFnZUNvbnRlbnRGdWxsV2lkdGgpIHtcblx0XHQkKCcjY29udGVudCcpLmFkZENsYXNzKCdjb250ZW50LWZ1bGwtd2lkdGgnKTtcblx0fVxuXHRpZiAob3B0aW9uLnBhZ2VDb250ZW50SW52ZXJzZU1vZGUpIHtcblx0XHQkKCcjY29udGVudCcpLmFkZENsYXNzKCdjb250ZW50LWludmVyc2UtbW9kZScpO1xuXHR9XG5cdGlmIChvcHRpb24ucGFnZUJveGVkTGF5b3V0KSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdib3hlZC1sYXlvdXQnKTtcblx0fVxuXHRpZiAob3B0aW9uLmNsZWFyT3B0aW9uT25MZWF2ZSkge1xuXHRcdENMRUFSX09QVElPTiA9IG9wdGlvbjtcblx0fVxufTtcbnZhciBoYW5kbGVDbGVhclBhZ2VPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblx0aWYgKG9wdGlvbi5wYWdlQ29udGVudEZ1bGxIZWlnaHQpIHtcblx0XHQkKCcjcGFnZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygncGFnZS1jb250ZW50LWZ1bGwtaGVpZ2h0Jyk7XG5cdH1cblx0aWYgKG9wdGlvbi5wYWdlU2lkZWJhckxpZ2h0KSB7XG5cdFx0JCgnI3BhZ2UtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3BhZ2Utd2l0aC1saWdodC1zaWRlYmFyJyk7XG5cdH1cblx0aWYgKG9wdGlvbi5wYWdlU2lkZWJhclJpZ2h0KSB7XG5cdFx0JCgnI3BhZ2UtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3BhZ2Utd2l0aC1yaWdodC1zaWRlYmFyJyk7XG5cdH1cblx0aWYgKG9wdGlvbi5wYWdlU2lkZWJhcldpZGUpIHtcblx0XHQkKCcjcGFnZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygncGFnZS13aXRoLXdpZGUtc2lkZWJhcicpO1xuXHR9XG5cdGlmIChvcHRpb24ucGFnZVNpZGViYXJNaW5pZmllZCkge1xuXHRcdCQoJyNwYWdlLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdwYWdlLXNpZGViYXItbWluaWZpZWQnKTtcblx0fVxuXHRpZiAob3B0aW9uLnBhZ2VTaWRlYmFyVHJhbnNwYXJlbnQpIHtcblx0XHQkKCcjc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLXRyYW5zcGFyZW50Jyk7XG5cdH1cblx0aWYgKG9wdGlvbi5wYWdlQ29udGVudEZ1bGxXaWR0aCkge1xuXHRcdCQoJyNjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnQtZnVsbC13aWR0aCcpO1xuXHR9XG5cdGlmIChvcHRpb24ucGFnZUNvbnRlbnRJbnZlcnNlTW9kZSkge1xuXHRcdCQoJyNjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnQtaW52ZXJzZS1tb2RlJyk7XG5cdH1cblx0aWYgKG9wdGlvbi5wYWdlQm94ZWRMYXlvdXQpIHtcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JveGVkLWxheW91dCcpO1xuXHR9XG59O1xuXG5cbi8qIDI5LiBIYW5kbGUgRmxvYXQgTmF2YmFyIFNlYXJjaCAtIGFkZGVkIGluIFY0LjBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGhhbmRsZVRvZ2dsZU5hdmJhclNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuXHQkKCdbZGF0YS10b2dnbGU9XCJuYXZiYXItc2VhcmNoXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci1zZWFyY2gtdG9nZ2xlZCcpO1xuXHR9KTtcblxuXHQkKCdbZGF0YS1kaXNtaXNzPVwibmF2YmFyLXNlYXJjaFwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItc2VhcmNoLXRvZ2dsZWQnKTtcblx0fSk7XG59O1xuXG52YXIgY29udmVydE51bWJlcldpdGhDb21tYXMgPSBmdW5jdGlvbih4KSB7XG5cdHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xufTtcblxudmFyIGNoZWNrSXNGbG9hdCA9IGZ1bmN0aW9uKHgpe1xuXHRyZXR1cm4gTnVtYmVyKHgpID09PSB4ICYmIHggJSAxICE9PSAwO1xufTtcblxudmFyIGNoZWNrSXNJbnQgPSBmdW5jdGlvbih4KXtcblx0cmV0dXJuIE51bWJlcih4KSA9PT0geCAmJiB4ICUgMSA9PT0gMDtcbn07XG5cbnZhciBjb3VudERlY2ltYWxzID0gZnVuY3Rpb24oeCkge1xuXHR2YXIgc3BsaXQgPSB4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcblxuICByZXR1cm4gKHNwbGl0WzFdKSA/IHNwbGl0WzFdLmxlbmd0aCA6IDA7XG59O1xuXG52YXIgaGFuZGxlQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdCQoJ1tkYXRhLWFuaW1hdGlvbl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0YXJnZXRBbmltYXRlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFuaW1hdGlvbicpO1xuXHRcdHZhciB0YXJnZXRWYWx1ZSA9ICQodGhpcykuYXR0cignZGF0YS12YWx1ZScpO1xuXG5cdFx0c3dpdGNoICh0YXJnZXRBbmltYXRlKSB7XG5cdFx0XHRjYXNlICd3aWR0aCc6XG5cdFx0XHRcdCQodGhpcykuY3NzKCd3aWR0aCcsIHRhcmdldFZhbHVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWlnaHQnOlxuXHRcdFx0XHQkKHRoaXMpLmNzcygnaGVpZ2h0JywgdGFyZ2V0VmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdHZhciB0YXJnZXRFbG0gPSB0aGlzO1xuXHRcdFx0XHR2YXIgZGVjaW1hbCA9IGNvdW50RGVjaW1hbHModGFyZ2V0VmFsdWUpO1xuXHRcdFx0XHR2YXIgZGl2aWRlID0gMTtcblx0XHRcdFx0dmFyIHggPSBkZWNpbWFsO1xuXHRcdFx0XHR3aGlsZSAoeCA+IDApIHtcblx0XHRcdFx0XHRkaXZpZGUgKj0gMTA7XG5cdFx0XHRcdFx0eC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JCh7YW5pbWF0ZU51bWJlcjogMH0pLmFuaW1hdGUoe2FuaW1hdGVOdW1iZXI6IHRhcmdldFZhbHVlfSwge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdFx0XHRcdGVhc2luZzonc3dpbmcnLFxuXHRcdFx0XHRcdHN0ZXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dmFyIG51bWJlciA9IChNYXRoLmNlaWwodGhpcy5hbmltYXRlTnVtYmVyICogZGl2aWRlKSAvIGRpdmlkZSkudG9GaXhlZChkZWNpbWFsKTtcblx0XHRcdFx0XHRcdHZhciBudW1iZXIgPSBjb252ZXJ0TnVtYmVyV2l0aENvbW1hcyhudW1iZXIpO1xuXHRcdFx0XHRcdFx0JCh0YXJnZXRFbG0pLnRleHQobnVtYmVyKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRvbmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0YXJnZXRFbG0pLnRleHQoY29udmVydE51bWJlcldpdGhDb21tYXModGFyZ2V0VmFsdWUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NsYXNzJzpcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyh0YXJnZXRWYWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdH0pO1xufTtcblxudmFyIGhhbmRsZVNpZGViYXJTZWFyY2ggPSBmdW5jdGlvbigpIHtcblx0JChkb2N1bWVudCkub24oJ2tleXVwJywgJ1tkYXRhLXNpZGViYXItc2VhcmNoPVwidHJ1ZVwiXScsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0YXJnZXRWYWx1ZSA9ICQodGhpcykudmFsKCk7XG5cdFx0XHRcdHRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmICh0YXJnZXRWYWx1ZSkge1xuXHRcdFx0JCgnLnNpZGViYXI6bm90KC5zaWRlYmFyLXJpZ2h0KSAubmF2ID4gbGk6bm90KC5uYXYtcHJvZmlsZSk6bm90KC5uYXYtaGVhZGVyKTpub3QoLm5hdi1zZWFyY2gpLCAuc2lkZWJhcjpub3QoLnNpZGViYXItcmlnaHQpIC5zdWItbWVudSA+IGxpJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXHRcdFx0JCgnLnNpZGViYXI6bm90KC5zaWRlYmFyLXJpZ2h0KSAuaGFzLXRleHQnKS5yZW1vdmVDbGFzcygnaGFzLXRleHQnKTtcblx0XHRcdCQoJy5zaWRlYmFyOm5vdCguc2lkZWJhci1yaWdodCkgLmV4cGFuZCcpLnJlbW92ZUNsYXNzKCdleHBhbmQnKTtcblx0XHRcdCQoJy5zaWRlYmFyOm5vdCguc2lkZWJhci1yaWdodCkgLm5hdiA+IGxpOm5vdCgubmF2LXByb2ZpbGUpOm5vdCgubmF2LWhlYWRlcik6bm90KC5uYXYtc2VhcmNoKSA+IGEsIC5zaWRlYmFyIC5zdWItbWVudSA+IGxpID4gYScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRUZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG5cdFx0XHRcdFx0XHR0YXJnZXRUZXh0ID0gdGFyZ2V0VGV4dC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRpZiAodGFyZ2V0VGV4dC5zZWFyY2godGFyZ2V0VmFsdWUpID4gLTEpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnaGFzLXRleHQnKTtcblxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmNsb3Nlc3QoJ2xpLmhhcy1zdWInKS5sZW5ndGggIT0gMCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaS5oYXMtc3ViJykuZmluZCgnLnN1Yi1tZW51IGxpLmQtbm9uZScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCQodGhpcykuY2xvc2VzdCgnLnN1Yi1tZW51JykubGVuZ3RoICE9IDApIHtcblx0XHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLnN1Yi1tZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5oYXMtc3ViJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdleHBhbmQnKTtcblx0XHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLnN1Yi1tZW51JykuZmluZCgnbGk6bm90KC5oYXMtdGV4dCknKS5hZGRDbGFzcygnZC1ub25lJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCcuc2lkZWJhcjpub3QoLnNpZGViYXItcmlnaHQpIC5uYXYgPiBsaTpub3QoLm5hdi1wcm9maWxlKTpub3QoLm5hdi1oZWFkZXIpOm5vdCgubmF2LXNlYXJjaCkuaGFzLXN1YiAuc3ViLW1lbnUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdFx0JCgnLnNpZGViYXI6bm90KC5zaWRlYmFyLXJpZ2h0KSAubmF2ID4gbGk6bm90KC5uYXYtcHJvZmlsZSk6bm90KC5uYXYtaGVhZGVyKTpub3QoLm5hdi1zZWFyY2gpLCAuc2lkZWJhcjpub3QoLnNpZGViYXItcmlnaHQpIC5zdWItbWVudSA+IGxpJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXHRcdFx0JCgnLnNpZGViYXI6bm90KC5zaWRlYmFyLXJpZ2h0KSAuZXhwYW5kJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZCcpO1xuXHRcdH1cblx0fSlcbn07XG5cblxuLyogQXBwbGljYXRpb24gQ29udHJvbGxlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG52YXIgQXBwID0gZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgc2V0dGluZztcblxuXHRyZXR1cm4ge1xuXHRcdC8vbWFpbiBmdW5jdGlvblxuXHRcdGluaXQ6IGZ1bmN0aW9uIChvcHRpb24pIHtcblx0XHRcdGlmIChvcHRpb24pIHtcblx0XHRcdFx0c2V0dGluZyA9IG9wdGlvbjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5pbml0TG9jYWxTdG9yYWdlKCk7XG5cdFx0XHR0aGlzLmluaXRTaWRlYmFyKCk7XG5cdFx0XHR0aGlzLmluaXRUb3BNZW51KCk7XG5cdFx0XHR0aGlzLmluaXRDb21wb25lbnQoKTtcblx0XHRcdC8vdGhpcy5pbml0VGhlbWVQYW5lbCgpO1xuXHRcdFx0dGhpcy5pbml0UGFnZUxvYWQoKTtcblx0XHRcdCQod2luZG93KS50cmlnZ2VyKCdsb2FkJyk7XG5cblx0XHRcdGlmIChzZXR0aW5nICYmIHNldHRpbmcuYWpheE1vZGUpIHtcblx0XHRcdFx0dGhpcy5pbml0QWpheCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2V0dGluZ3M6IGZ1bmN0aW9uIChvcHRpb24pIHtcblx0XHRcdGlmIChvcHRpb24pIHtcblx0XHRcdFx0c2V0dGluZyA9IG9wdGlvbjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXRTaWRlYmFyOiBmdW5jdGlvbigpIHtcblx0XHRcdGhhbmRsZVNpZGViYXJNZW51KCk7XG4gICAgICAgICAgaGFuZGxlTW9iaWxlU2lkZWJhclRvZ2dsZSgpO1xuICAgICAgICAgIGhhbmRsZVNpZGViYXJNaW5pZnkoKTtcbiAgICAgICAgICBoYW5kbGVTaWRlYmFyTWluaWZ5RmxvYXRNZW51KCk7XG4gICAgICAgICAgaGFuZGxlVG9nZ2xlTmF2UHJvZmlsZSgpO1xuICAgICAgICAgIGhhbmRsZVRvZ2dsZU5hdmJhclNlYXJjaCgpO1xuICAgICAgICAgIGhhbmRsZVNpZGViYXJTZWFyY2goKTtcblxuICAgICAgICAgIGlmICghc2V0dGluZyB8fCAoc2V0dGluZyAmJiAhc2V0dGluZy5kaXNhYmxlU2lkZWJhclNjcm9sbE1lbW9yeSkpIHtcbiAgICAgICAgICAgICAgaGFuZGxlU2lkZWJhclNjcm9sbE1lbW9yeSgpO1xuICAgICAgICAgIH1cblx0XHR9LFxuXHRcdGluaXRTaWRlYmFyU2VsZWN0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdGhhbmRsZUNsZWFyU2lkZWJhclNlbGVjdGlvbigpO1xuXHRcdH0sXG5cdFx0aW5pdFNpZGViYXJNb2JpbGVTZWxlY3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0aGFuZGxlQ2xlYXJTaWRlYmFyTW9iaWxlU2VsZWN0aW9uKCk7XG5cdFx0fSxcblx0XHRpbml0VG9wTWVudTogZnVuY3Rpb24oKSB7XG5cdFx0XHRoYW5kbGVVbmxpbWl0ZWRUb3BNZW51UmVuZGVyKCk7XG5cdFx0XHRoYW5kbGVUb3BNZW51U3ViTWVudSgpO1xuXHRcdFx0aGFuZGxlTW9iaWxlVG9wTWVudVN1Yk1lbnUoKTtcblx0XHRcdGhhbmRsZVRvcE1lbnVNb2JpbGVUb2dnbGUoKTtcblx0XHR9LFxuXHRcdGluaXRQYWdlTG9hZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRoYW5kbGVQYWdlQ29udGVudFZpZXcoKTtcblx0XHR9LFxuXHRcdGluaXRDb21wb25lbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0LyppZiAoIXNldHRpbmcgfHwgKHNldHRpbmcgJiYgIXNldHRpbmcuZGlzYWJsZURyYWdnYWJsZVBhbmVsKSkge1xuXHRcdFx0XHRoYW5kbGVEcmFnZ2FibGVQYW5lbCgpO1xuXHRcdFx0fSovXG5cdFx0XHRoYW5kbGVJRUZ1bGxIZWlnaHRDb250ZW50KCk7XG5cdFx0XHQvL2hhbmRsZVNsaW1TY3JvbGwoKTtcblx0XHRcdC8qaGFuZGxlVW5saW1pdGVkVGFic1JlbmRlcigpOyovXG5cdFx0XHRoYW5kbGVQYW5lbEFjdGlvbigpO1xuXHRcdFx0LypoYW5kbGVTY3JvbGxUb1RvcEJ1dHRvbigpO1xuXHRcdFx0aGFuZGxlQWZ0ZXJQYWdlTG9hZEFkZENsYXNzKCk7XG5cdFx0XHRoYW5kbGVQYWdlU2Nyb2xsQ2xhc3MoKTtcblx0XHRcdGhhbmRsZUFuaW1hdGlvbigpOyovXG5cblx0XHRcdC8qaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XG5cdFx0XHRcdGhhbmRlbFRvb2x0aXBQb3BvdmVyQWN0aXZhdGlvbigpO1xuXHRcdFx0fSovXG5cdFx0fSxcblx0XHRpbml0TG9jYWxTdG9yYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghc2V0dGluZyB8fCAoc2V0dGluZyAmJiAhc2V0dGluZy5kaXNhYmxlTG9jYWxTdG9yYWdlKSkge1xuXHRcdFx0XHRoYW5kbGVMb2NhbFN0b3JhZ2UoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGluaXRUaGVtZVBhbmVsOiBmdW5jdGlvbigpIHtcblx0XHRcdGhhbmRsZVRoZW1lUGFnZVN0cnVjdHVyZUNvbnRyb2woKTtcblx0XHRcdGhhbmRsZVRoZW1lUGFuZWxFeHBhbmQoKTtcblx0XHRcdGhhbmRsZVJlc2V0TG9jYWxTdG9yYWdlKCk7XG5cdFx0fSxcblx0XHRpbml0QWpheDogZnVuY3Rpb24oKSB7XG5cdFx0XHRoYW5kbGVBamF4TW9kZShzZXR0aW5nKTtcblx0XHRcdCQuYWpheFNldHVwKHtcblx0XHRcdFx0Y2FjaGU6IHRydWVcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0c2V0UGFnZVRpdGxlOiBmdW5jdGlvbihwYWdlVGl0bGUpIHtcblx0XHRcdGRvY3VtZW50LnRpdGxlID0gcGFnZVRpdGxlO1xuXHRcdH0sXG5cdFx0c2V0UGFnZU9wdGlvbjogZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0XHRoYW5kbGVTZXRQYWdlT3B0aW9uKG9wdGlvbik7XG5cdFx0fSxcblx0XHRjbGVhclBhZ2VPcHRpb246IGZ1bmN0aW9uKG9wdGlvbikge1xuXHRcdFx0aGFuZGxlQ2xlYXJQYWdlT3B0aW9uKG9wdGlvbik7XG5cdFx0fSxcblx0XHRyZXN0YXJ0R2xvYmFsRnVuY3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5pbml0TG9jYWxTdG9yYWdlKCk7XG5cdFx0XHR0aGlzLmluaXRUb3BNZW51KCk7XG5cdFx0XHR0aGlzLmluaXRDb21wb25lbnQoKTtcblx0XHR9LFxuXHRcdHNjcm9sbFRvcDogZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbFRvcDogJCgnYm9keScpLm9mZnNldCgpLnRvcFxuXHRcdFx0fSwgMCk7XG5cdFx0fVxuICB9O1xufSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0QXBwLmluaXQoKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==