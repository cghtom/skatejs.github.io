(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["skatejsGithubIo"] = factory();
	else
		root["skatejsGithubIo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	__webpack_require__(1);
	
	var _index = __webpack_require__(2);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(36);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.head.innerHTML += '<style>' + _index4.default + '</style>';
	exports.App = _index2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["skatejsWebComponents"] = factory();
		else
			root["skatejsWebComponents"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		__webpack_require__(1);
		
		__webpack_require__(2);
		
		__webpack_require__(7);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var _window = window;
		var HTMLElement = _window.HTMLElement;
		var MutationObserver = _window.MutationObserver;
		var natigator = _window.natigator;
		var _navigator = navigator;
		var userAgent = _navigator.userAgent;
		
		var safari = userAgent.indexOf('Safari/60') !== -1;
		var safariVersion = safari && userAgent.match(/Version\/([^\s]+)/)[1];
		var safariVersions = [0, 1].map(function (v) {
		  return '10.0.' + v;
		});
		var patch = safari && safariVersions.indexOf(safariVersion) > -1;
		
		// Workaround for https://bugs.webkit.org/show_bug.cgi?id=160331
		function fixSafari() {
		  var oldAttachShadow = HTMLElement.prototype.attachShadow;
		
		  // We observe a shadow root, but only need to know if the target that was mutated is a <style>
		  // element as this is the only scenario where styles aren't recalculated.
		  var moOpts = { childList: true, subtree: true };
		  var mo = new MutationObserver(function (muts) {
		    muts.forEach(function (mut) {
		      var target = mut.target;
		
		      if (target.tagName === 'STYLE') {
		        var nextSibling = target.nextSibling;
		        var parentNode = target.parentNode;
		
		        // We actually have to remove and subsequently re-insert rather than doing insertBefore()
		        // as it seems that doesn't trigger a recalc.
		
		        parentNode.removeChild(target);
		        parentNode.insertBefore(target, nextSibling);
		      }
		    });
		  });
		
		  // Our override simply calls the native (or overridden) attachShadow but it ensures that changes
		  // to it are observed so that we can take any <style> elements and re-insert them.
		  function newAttachShadow(opts) {
		    var sr = oldAttachShadow.call(this, opts);
		    mo.observe(sr, moOpts);
		    return sr;
		  }
		
		  // We have to define a property because Safari won't take the override if it is set directly.
		  Object.defineProperty(HTMLElement.prototype, 'attachShadow', {
		    // Ensure polyfills can override it (hoping they call it back).
		    configurable: true,
		    enumerable: true,
		    value: newAttachShadow,
		    writable: true
		  });
		}
		
		// We target a specific version of Safari instead of trying to but detect as it seems to involve
		// contriving a breaking case and detecting computed styles. We can remove this code when Safari
		// fixes the bug.
		if (patch) {
		  fixSafari();
		}
		
		exports.default = patch;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function (global, factory) {
		   true ? factory(exports, __webpack_require__(3), __webpack_require__(4), __webpack_require__(6)) :
		  typeof define === 'function' && define.amd ? define(['exports', 'custom-event-polyfill', 'debounce', 'weakmap'], factory) :
		  (factory((global.skatejsNamedSlots = global.skatejsNamedSlots || {}),global.customEventPolyfill,global.debounce,global.WeakMap));
		}(this, (function (exports,customEventPolyfill,debounce,WeakMap) {
		
		debounce = 'default' in debounce ? debounce['default'] : debounce;
		WeakMap = 'default' in WeakMap ? WeakMap['default'] : WeakMap;
		
		var div = document.createElement('div');
		var shadowDomV0 = !!div.createShadowRoot;
		var shadowDomV1 = !!div.attachShadow;
		
		var $shadowRoot = '__shadowRoot';
		
		var v0 = (function () {
		  // Returns the assigned nodes (unflattened) for a <content> node.
		  var getAssignedNodes = function getAssignedNodes(node) {
		    var slot = node.getAttribute('name');
		
		    var host = node;
		    while (host) {
		      var sr = host[$shadowRoot];
		      if (sr && sr.contains(node)) {
		        break;
		      }
		      host = host.parentNode;
		    }
		
		    if (!host) {
		      return [];
		    }
		
		    var chs = host.childNodes;
		    var chsLen = chs.length;
		    var filtered = [];
		
		    for (var a = 0; a < chsLen; a++) {
		      var ch = chs[a];
		      var chSlot = ch.getAttribute ? ch.getAttribute('slot') : null;
		      if (slot === chSlot) {
		        filtered.push(ch);
		      }
		    }
		
		    return filtered;
		  };
		
		  var _HTMLElement$prototyp = HTMLElement.prototype;
		  var getAttribute = _HTMLElement$prototyp.getAttribute;
		  var setAttribute = _HTMLElement$prototyp.setAttribute;
		
		  var elementInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
		  var shadowRootInnerHTML = Object.getOwnPropertyDescriptor(ShadowRoot.prototype, 'innerHTML');
		
		  // We do this so creating a <slot> actually creates a <content>.
		  var filterTagName = function filterTagName(name) {
		    return name === 'slot' ? 'content' : name;
		  };
		  var createElement = document.createElement.bind(document);
		  var createElementNS = document.createElementNS.bind(document);
		  document.createElement = function (name) {
		    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      args[_key - 1] = arguments[_key];
		    }
		
		    return createElement.apply(undefined, [filterTagName(name)].concat(args));
		  };
		  document.createElementNS = function (uri, name) {
		    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
		      args[_key2 - 2] = arguments[_key2];
		    }
		
		    return createElementNS.apply(undefined, [uri, filterTagName(name)].concat(args));
		  };
		
		  // Override innerHTML to turn slot nodes into content nodes.
		  function replaceSlotsWithContents(node) {
		    var tree = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
		    var repl = [];
		
		    // Walk the tree and record nodes that need replacing.
		    while (tree.nextNode()) {
		      var currentNode = tree.currentNode;
		
		      if (currentNode.tagName === 'SLOT') {
		        repl.push(currentNode);
		      }
		    }
		
		    repl.forEach(function (fake) {
		      var name = fake.getAttribute('name');
		      var real = document.createElement('slot');
		      if (name) {
		        real.setAttribute('name', name);
		      }
		
		      fake.parentNode.replaceChild(real, fake);
		      while (fake.hasChildNodes()) {
		        real.appendChild(fake.firstChild);
		      }
		    });
		  }
		  Object.defineProperty(Element.prototype, 'innerHTML', {
		    configurable: true,
		    get: elementInnerHTML.get,
		    set: function set(html) {
		      elementInnerHTML.set.call(this, html);
		      replaceSlotsWithContents(this);
		    }
		  });
		  Object.defineProperty(ShadowRoot.prototype, 'innerHTML', {
		    configurable: true,
		    get: shadowRootInnerHTML.get,
		    set: function set(html) {
		      shadowRootInnerHTML.set.call(this, html);
		      replaceSlotsWithContents(this);
		    }
		  });
		
		  // Node
		  // ----
		
		  Object.defineProperty(Node.prototype, 'assignedSlot', {
		    get: function get() {
		      var parentNode = this.parentNode;
		
		      if (parentNode) {
		        var shadowRoot = parentNode.shadowRoot;
		
		        // If { mode } is "closed", always return `null`.
		
		        if (!shadowRoot) {
		          return null;
		        }
		
		        var contents = shadowRoot.querySelectorAll('content');
		        for (var a = 0; a < contents.length; a++) {
		          var content = contents[a];
		          if (content.assignedNodes().indexOf(this) > -1) {
		            return content;
		          }
		        }
		      }
		      return null;
		    }
		  });
		
		  // Just proxy createShadowRoot() because there's no such thing as closed
		  // shadow trees in v0.
		  HTMLElement.prototype.attachShadow = function attachShadow() {
		    var _this = this;
		
		    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		    var mode = _ref.mode;
		
		    // In v1 you must specify a mode.
		    if (mode !== 'closed' && mode !== 'open') {
		      throw new Error('You must specify { mode } as "open" or "closed" to attachShadow().');
		    }
		
		    // Proxy native v0.
		    var sr = this.createShadowRoot();
		
		    // In v0 it always defines the shadowRoot property so we must undefine it.
		    if (mode === 'closed') {
		      Object.defineProperty(this, 'shadowRoot', {
		        configurable: true,
		        get: function get() {
		          return null;
		        }
		      });
		    }
		
		    // For some reason this wasn't being reported as set, but it seems to work
		    // in dev tools.
		    Object.defineProperty(sr, 'parentNode', {
		      get: function get() {
		        return _this;
		      }
		    });
		
		    // Add a MutationObserver to trigger slot change events when the element
		    // is mutated. We only need to listen to the childList because we only care
		    // about light DOM.
		    var mo = new MutationObserver(function (muts) {
		      var root = _this[$shadowRoot];
		      muts.forEach(function (mut) {
		        var addedNodes = mut.addedNodes;
		        var removedNodes = mut.removedNodes;
		
		        var slots = {};
		        var recordSlots = function recordSlots(node) {
		          return slots[node.getAttribute && node.getAttribute('slot') || '__default'] = true;
		        };
		
		        if (addedNodes) {
		          var addedNodesLen = addedNodes.length;
		          for (var a = 0; a < addedNodesLen; a++) {
		            recordSlots(addedNodes[a]);
		          }
		        }
		
		        if (removedNodes) {
		          var removedNodesLen = removedNodes.length;
		          for (var _a = 0; _a < removedNodesLen; _a++) {
		            recordSlots(removedNodes[_a]);
		          }
		        }
		
		        Object.keys(slots).forEach(function (slot) {
		          var node = slot === '__default' ? root.querySelector('content:not([name])') || root.querySelector('content[name=""]') : root.querySelector('content[name="' + slot + '"]');
		
		          if (node) {
		            node.dispatchEvent(new CustomEvent('slotchange', {
		              bubbles: false,
		              cancelable: false
		            }));
		          }
		        });
		      });
		    });
		    mo.observe(this, { childList: true });
		
		    return this[$shadowRoot] = sr;
		  };
		
		  // Make like the <slot> name property.
		  Object.defineProperty(HTMLContentElement.prototype, 'name', {
		    get: function get() {
		      return this.getAttribute('name');
		    },
		    set: function set(name) {
		      return this.setAttribute('name', name);
		    }
		  });
		
		  // Make like the element slot property.
		  Object.defineProperty(HTMLElement.prototype, 'slot', {
		    get: function get() {
		      return this.getAttribute('slot');
		    },
		    set: function set(name) {
		      return this.setAttribute('slot', name);
		    }
		  });
		
		  // By default, getDistributedNodes() returns a flattened tree (no <slot>
		  // nodes). That means we get native { deep } but we have to manually do the
		  // opposite.
		  HTMLContentElement.prototype.assignedNodes = function assignedNodes() {
		    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		    var deep = _ref2.deep;
		
		    var cnodes = [];
		    var dnodes = deep ? this.getDistributedNodes() : getAssignedNodes(this);
		
		    // Regardless of how we get the nodes, we must ensure we're only given text
		    // nodes or element nodes.
		    for (var a = 0; a < dnodes.length; a++) {
		      var dnode = dnodes[a];
		      var dtype = dnode.nodeType;
		      if (dtype === Node.ELEMENT_NODE || dtype === Node.TEXT_NODE) {
		        cnodes.push(dnode);
		      }
		    }
		    return cnodes;
		  };
		
		  HTMLContentElement.prototype.getAttribute = function overriddenGetAttribute(name) {
		    if (name === 'name') {
		      var select = getAttribute.call(this, 'select');
		      return select ? select.match(/\[slot=['"]?(.*?)['"]?\]/)[1] : null;
		    }
		    return getAttribute.call(this, name);
		  };
		
		  HTMLContentElement.prototype.setAttribute = function overriddenSetAttribute(name, value) {
		    if (name === 'name') {
		      name = 'select';
		      value = '[slot=\'' + value + '\']';
		    }
		    return setAttribute.call(this, name, value);
		  };
		})
		
		function eachChildNode(node, func) {
		  if (!node) {
		    return;
		  }
		
		  var chs = node.childNodes;
		  var chsLen = chs.length;
		  for (var a = 0; a < chsLen; a++) {
		    var ret = func(chs[a], a, chs);
		    if (typeof ret !== 'undefined') {
		      return ret; // eslint-disable-line consistent-return
		    }
		  }
		}
		
		// Re-implemented to avoid Array.prototype.slice.call for performance reasons
		function reverse(arr) {
		  var reversedArray = [];
		  for (var i = arr.length - 1; i >= 0; i--) {
		    reversedArray.push(arr[i]);
		  }
		  return reversedArray;
		}
		
		/**
		 * Execute func over all child nodes or a document fragment, or a single node
		 * @param node the node or document fragment
		 * @param func a function to execute on node or the children of node, if node is a document fragment.
		 *        func may optionally append the node elsewhere, in the case of a document fragment
		 */
		function eachNodeOrFragmentNodes(node, func) {
		  if (node instanceof DocumentFragment) {
		    var chs = node.childNodes;
		    var chsLen = chs.length;
		
		    // We must iterate in reverse to handle the case where child nodes are moved elsewhere during execution
		    for (var a = chsLen - 1; a >= 0; a--) {
		      var thisNode = reverse(node.childNodes)[a];
		      func(thisNode, a);
		    }
		  } else {
		    func(node, 0);
		  }
		}
		
		var div$1 = document.createElement('div');
		
		function getPrototype(obj, key) {
		  var descriptor = void 0;
		
		  while (obj && !(descriptor = Object.getOwnPropertyDescriptor(obj, key))) {
		    // eslint-disable-line no-cond-assign
		    obj = Object.getPrototypeOf(obj);
		  }
		  return descriptor;
		}
		function getPropertyDescriptor (obj, key) {
		  if (obj instanceof Node) {
		    obj = div$1;
		  }
		  var proto = getPrototype(obj, key);
		
		  if (proto) {
		    var getter = proto.get;
		    var setter = proto.set;
		    var _descriptor = {
		      configurable: true,
		      enumerable: true
		    };
		
		    if (getter) {
		      _descriptor.get = getter;
		      _descriptor.set = setter;
		      return _descriptor;
		    } else if (typeof obj[key] === 'function') {
		      _descriptor.value = obj[key];
		      return _descriptor;
		    }
		  }
		
		  var descriptor = Object.getOwnPropertyDescriptor(obj, key);
		  if (descriptor && descriptor.get) {
		    return descriptor;
		  }
		}
		
		// Any code referring to this is because it has to work around this bug in
		// WebKit: https://bugs.webkit.org/show_bug.cgi?id=49739
		
		var nativeParentNode = getPropertyDescriptor(Element.prototype, 'innerHTML');
		
		var canPatchNativeAccessors = !!nativeParentNode;
		
		/**
		 * See https://w3c.github.io/DOM-Parsing/#serializing
		 * @param {TextNode}
		 * @returns {string}
		 */
		function getEscapedTextContent(textNode) {
		  return textNode.textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		}
		
		/**
		 * @param {TextNode}
		 * @returns {string}
		 */
		function getRawTextContent(textNode) {
		  return textNode.textContent;
		}
		
		/**
		 * @returns {string}
		 * @param {commentNode}
		 */
		function getCommentNodeOuterHtml(commentNode) {
		  return commentNode.text || "<!--" + commentNode.textContent + "-->";
		}
		
		function isSlotNode (node) {
		  return node.tagName === 'SLOT';
		}
		
		var toConsumableArray = function (arr) {
		  if (Array.isArray(arr)) {
		    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
		
		    return arr2;
		  } else {
		    return Array.from(arr);
		  }
		};
		
		function findSlots(root) {
		  var slots = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
		  var childNodes = root.childNodes;
		
		
		  if (shadowDomV0 && !shadowDomV1) {
		    return [].concat(toConsumableArray(root.querySelectorAll('content')));
		  }
		
		  if (!childNodes || [Node.ELEMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE].indexOf(root.nodeType) === -1) {
		    return slots;
		  }
		
		  var length = childNodes.length;
		
		
		  for (var a = 0; a < length; a++) {
		    var childNode = childNodes[a];
		
		    if (isSlotNode(childNode)) {
		      slots.push(childNode);
		    }
		    findSlots(childNode, slots);
		  }
		
		  return slots;
		}
		
		function isRootNode (node) {
		  return node.tagName === '_SHADOW_ROOT_';
		}
		
		var pseudoArrayToArray = (function (pseudoArray) {
		  return Array.prototype.slice.call(pseudoArray);
		})
		
		var arrProto = Array.prototype;
		var forEach = arrProto.forEach;
		
		// We use a real DOM node for a shadow root. This is because the host node
		// basically becomes a virtual entry point for your element leaving the shadow
		// root the only thing that can receive instructions on how the host should
		// render to the browser.
		
		var defaultShadowRootTagName = '_shadow_root_';
		
		// * WebKit only *
		//
		// These members we need cannot override as we require native access to their
		// original values at some point.
		var polyfillAtRuntime = ['childNodes', 'parentNode'];
		
		// Some properties that should not be overridden in the Text prototype.
		var doNotOverridePropertiesInTextNodes = ['textContent'];
		
		// Some new properties that should be defined in the Text prototype.
		var defineInTextNodes = ['assignedSlot'];
		
		// Some properties that should not be overridden in the Comment prototype.
		var doNotOverridePropertiesInCommNodes = ['textContent'];
		
		// Some new properties that should be defined in the Comment prototype.
		var defineInCommNodes = [];
		
		// Nodes that should be slotted
		var slottedNodeTypes = [Node.ELEMENT_NODE, Node.TEXT_NODE];
		
		// Private data stores.
		var assignedToSlotMap = new WeakMap();
		var hostToModeMap = new WeakMap();
		var hostToRootMap = new WeakMap();
		var nodeToChildNodesMap = new WeakMap();
		var nodeToParentNodeMap = new WeakMap();
		var nodeToSlotMap = new WeakMap();
		var rootToHostMap = new WeakMap();
		var rootToSlotMap = new WeakMap();
		var slotToRootMap = new WeakMap();
		
		// Unfortunately manual DOM parsing is because of WebKit.
		var parser = new DOMParser();
		function parse(html) {
		  var tree = document.createElement('div');
		
		  // Everything not WebKit can do this easily.
		  if (canPatchNativeAccessors) {
		    tree.__innerHTML = html;
		    return tree;
		  }
		
		  var parsed = parser.parseFromString('<div>' + html + '</div>', 'text/html').body.firstChild;
		
		  while (parsed.hasChildNodes()) {
		    var firstChild = parsed.firstChild;
		    parsed.removeChild(firstChild);
		    tree.appendChild(firstChild);
		  }
		
		  // Need to import the node to initialise the custom elements from the parser.
		  return document.importNode(tree, true);
		}
		
		function staticProp(obj, name, value) {
		  Object.defineProperty(obj, name, {
		    configurable: true,
		    get: function get() {
		      return value;
		    }
		  });
		}
		
		// Slotting helpers.
		
		function arrayItem(idx) {
		  return this[idx];
		}
		
		function makeLikeNodeList(arr) {
		  arr.item = arrayItem;
		  return arr;
		}
		
		function isHostNode(node) {
		  return !!hostToRootMap.get(node);
		}
		
		function getNodeType(node) {
		  if (isHostNode(node)) {
		    return 'host';
		  }
		
		  if (isSlotNode(node)) {
		    return 'slot';
		  }
		
		  if (isRootNode(node)) {
		    return 'root';
		  }
		
		  return 'node';
		}
		
		function findClosest(node, func) {
		  while (node) {
		    if (node === document) {
		      break;
		    }
		    if (func(node)) {
		      return node;
		    }
		    node = node.parentNode;
		  }
		}
		
		function getSlotNameFromSlot(node) {
		  return node.getAttribute && node.getAttribute('name') || 'default';
		}
		
		function getSlotNameFromNode(node) {
		  return node.getAttribute && node.getAttribute('slot') || 'default';
		}
		
		function slotNodeIntoSlot(slot, node, insertBefore) {
		  // Only Text and Element nodes should be slotted.
		  if (slottedNodeTypes.indexOf(node.nodeType) === -1) {
		    return;
		  }
		
		  var assignedNodes = slot.assignedNodes();
		  var shouldGoIntoContentMode = assignedNodes.length === 0;
		  var slotInsertBeforeIndex = assignedNodes.indexOf(insertBefore);
		
		  // Assign the slot to the node internally.
		  nodeToSlotMap.set(node, slot);
		
		  // Remove the fallback content and state if we're going into content mode.
		  if (shouldGoIntoContentMode) {
		    forEach.call(slot.childNodes, function (child) {
		      return slot.__removeChild(child);
		    });
		  }
		
		  if (slotInsertBeforeIndex > -1) {
		    slot.__insertBefore(node, insertBefore !== undefined ? insertBefore : null);
		    assignedNodes.splice(slotInsertBeforeIndex, 0, node);
		  } else {
		    slot.__appendChild(node);
		    assignedNodes.push(node);
		  }
		
		  slot.____triggerSlotChangeEvent();
		}
		
		function slotNodeFromSlot(node) {
		  var slot = nodeToSlotMap.get(node);
		
		  if (slot) {
		    var assignedNodes = slot.assignedNodes();
		    var index = assignedNodes.indexOf(node);
		
		    if (index > -1) {
		      var shouldGoIntoDefaultMode = assignedNodes.length === 1;
		
		      assignedNodes.splice(index, 1);
		      nodeToSlotMap.set(node, null);
		
		      // Actually remove the child.
		      slot.__removeChild(node);
		
		      // If this was the last slotted node, then insert fallback content.
		      if (shouldGoIntoDefaultMode) {
		        forEach.call(slot.childNodes, function (child) {
		          return slot.__appendChild(child);
		        });
		      }
		
		      slot.____triggerSlotChangeEvent();
		    }
		  }
		}
		
		// Returns the index of the node in the host's childNodes.
		function indexOfNode(host, node) {
		  var chs = host.childNodes;
		  var chsLen = chs.length;
		  for (var a = 0; a < chsLen; a++) {
		    if (chs[a] === node) {
		      return a;
		    }
		  }
		  return -1;
		}
		
		// Adds the node to the list of childNodes on the host and fakes any necessary
		// information such as parentNode.
		function registerNode(host, node, insertBefore, func) {
		  var index = indexOfNode(host, insertBefore);
		  eachNodeOrFragmentNodes(node, function (eachNode, eachIndex) {
		    func(eachNode, eachIndex);
		
		    if (canPatchNativeAccessors) {
		      nodeToParentNodeMap.set(eachNode, host);
		    } else {
		      staticProp(eachNode, 'parentNode', host);
		    }
		
		    if (index > -1) {
		      arrProto.splice.call(host.childNodes, index + eachIndex, 0, eachNode);
		    } else {
		      arrProto.push.call(host.childNodes, eachNode);
		    }
		  });
		}
		
		// Cleans up registerNode().
		function unregisterNode(host, node, func) {
		  var index = indexOfNode(host, node);
		
		  if (index > -1) {
		    func(node, 0);
		
		    if (canPatchNativeAccessors) {
		      nodeToParentNodeMap.set(node, null);
		    } else {
		      staticProp(node, 'parentNode', null);
		    }
		
		    arrProto.splice.call(host.childNodes, index, 1);
		  }
		}
		
		function addNodeToNode(host, node, insertBefore) {
		  registerNode(host, node, insertBefore, function (eachNode) {
		    host.__insertBefore(eachNode, insertBefore !== undefined ? insertBefore : null);
		  });
		}
		
		function addNodeToHost(host, node, insertBefore) {
		  registerNode(host, node, insertBefore, function (eachNode) {
		    var rootNode = hostToRootMap.get(host);
		    var slotNodes = rootToSlotMap.get(rootNode);
		    var slotNode = slotNodes[getSlotNameFromNode(eachNode)];
		    if (slotNode) {
		      slotNodeIntoSlot(slotNode, eachNode, insertBefore);
		    }
		  });
		}
		
		function addSlotToRoot(root, slot) {
		  var slotName = getSlotNameFromSlot(slot);
		
		  // Ensure a slot node's childNodes are overridden at the earliest point
		  // possible for WebKit.
		  if (!canPatchNativeAccessors && !Array.isArray(slot.childNodes)) {
		    staticProp(slot, 'childNodes', pseudoArrayToArray(slot.childNodes));
		  }
		
		  rootToSlotMap.get(root)[slotName] = slot;
		
		  if (!slotToRootMap.has(slot)) {
		    slotToRootMap.set(slot, root);
		  }
		
		  eachChildNode(rootToHostMap.get(root), function (eachNode) {
		    if (!eachNode.assignedSlot && slotName === getSlotNameFromNode(eachNode)) {
		      slotNodeIntoSlot(slot, eachNode);
		    }
		  });
		}
		
		function addNodeToRoot(root, node, insertBefore) {
		  eachNodeOrFragmentNodes(node, function (child) {
		    if (isSlotNode(child)) {
		      addSlotToRoot(root, child);
		    } else {
		      var slotNodes = findSlots(child);
		      if (slotNodes) {
		        var slotNodesLen = slotNodes.length;
		        for (var a = 0; a < slotNodesLen; a++) {
		          addSlotToRoot(root, slotNodes[a]);
		        }
		      }
		    }
		  });
		  addNodeToNode(root, node, insertBefore);
		}
		
		// Adds a node to a slot. In other words, adds default content to a slot. It
		// ensures that if the slot doesn't have any assigned nodes yet, that the node
		// is actually displayed, otherwise it's just registered as child content.
		function addNodeToSlot(slot, node, insertBefore) {
		  var isInDefaultMode = slot.assignedNodes().length === 0;
		  registerNode(slot, node, insertBefore, function (eachNode) {
		    if (isInDefaultMode) {
		      slot.__insertBefore(eachNode, insertBefore !== undefined ? insertBefore : null);
		    }
		  });
		}
		
		// Removes a node from a slot (default content). It ensures that if the slot
		// doesn't have any assigned nodes yet, that the node is actually removed,
		// otherwise it's just unregistered.
		function removeNodeFromSlot(slot, node) {
		  var isInDefaultMode = slot.assignedNodes().length === 0;
		  unregisterNode(slot, node, function () {
		    if (isInDefaultMode) {
		      slot.__removeChild(node);
		    }
		  });
		}
		
		function removeNodeFromNode(host, node) {
		  unregisterNode(host, node, function () {
		    host.__removeChild(node);
		  });
		}
		
		function removeNodeFromHost(host, node) {
		  unregisterNode(host, node, function () {
		    slotNodeFromSlot(node);
		  });
		}
		
		function removeSlotFromRoot(root, node) {
		  var assignedNodes = Array.prototype.slice.call(node.assignedNodes());
		  assignedNodes.forEach(slotNodeFromSlot);
		  delete rootToSlotMap.get(root)[getSlotNameFromSlot(node)];
		  slotToRootMap.delete(node);
		}
		
		function removeNodeFromRoot(root, node) {
		  unregisterNode(root, node, function () {
		    if (isSlotNode(node)) {
		      removeSlotFromRoot(root, node);
		    } else {
		      var nodes = findSlots(node);
		      if (nodes) {
		        for (var a = 0; a < nodes.length; a++) {
		          removeSlotFromRoot(root, nodes[a]);
		        }
		      }
		    }
		    root.__removeChild(node);
		  });
		}
		
		// TODO terribly inefficient
		function getRootNode(host) {
		  if (isRootNode(host)) {
		    return host;
		  }
		
		  if (!host.parentNode) {
		    return;
		  }
		
		  return getRootNode(host.parentNode);
		}
		
		function appendChildOrInsertBefore(host, newNode, refNode) {
		  var nodeType = getNodeType(host);
		  var parentNode = newNode.parentNode;
		  var rootNode = getRootNode(host);
		
		  // Ensure childNodes is patched so we can manually update it for WebKit.
		  if (!canPatchNativeAccessors && !Array.isArray(host.childNodes)) {
		    staticProp(host, 'childNodes', pseudoArrayToArray(host.childNodes));
		  }
		
		  if (rootNode && getNodeType(newNode) === 'slot') {
		    addSlotToRoot(rootNode, newNode);
		  }
		
		  // If we append a child to a host, the host tells the shadow root to distribute
		  // it. If the root decides it doesn't need to be distributed, it is never
		  // removed from the old parent because in polyfill land we store a reference
		  // to the node but we don't move it. Due to that, we must explicitly remove the
		  // node from its old parent.
		  if (parentNode && getNodeType(parentNode) === 'host') {
		    if (canPatchNativeAccessors) {
		      nodeToParentNodeMap.set(newNode, null);
		    } else {
		      staticProp(newNode, 'parentNode', null);
		    }
		  }
		
		  if (nodeType === 'node') {
		    if (canPatchNativeAccessors) {
		      nodeToParentNodeMap.set(newNode, host);
		      return host.__insertBefore(newNode, refNode !== undefined ? refNode : null);
		    }
		
		    return addNodeToNode(host, newNode, refNode);
		  }
		
		  if (nodeType === 'slot') {
		    return addNodeToSlot(host, newNode, refNode);
		  }
		
		  if (nodeType === 'host') {
		    return addNodeToHost(host, newNode, refNode);
		  }
		
		  if (nodeType === 'root') {
		    return addNodeToRoot(host, newNode, refNode);
		  }
		}
		
		function syncSlotChildNodes(node) {
		  if (canPatchNativeAccessors && getNodeType(node) === 'slot' && node.__childNodes.length !== node.childNodes.length) {
		    while (node.hasChildNodes()) {
		      node.removeChild(node.firstChild);
		    }
		
		    forEach.call(node.__childNodes, function (child) {
		      return node.appendChild(child);
		    });
		  }
		}
		
		var members = {
		  // For testing purposes.
		  ____assignedNodes: {
		    get: function get() {
		      return this.______assignedNodes || (this.______assignedNodes = []);
		    }
		  },
		
		  // For testing purposes.
		  ____isInFallbackMode: {
		    get: function get() {
		      return this.assignedNodes().length === 0;
		    }
		  },
		
		  ____slotChangeListeners: {
		    get: function get() {
		      if (typeof this.______slotChangeListeners === 'undefined') {
		        this.______slotChangeListeners = 0;
		      }
		      return this.______slotChangeListeners;
		    },
		    set: function set(value) {
		      this.______slotChangeListeners = value;
		    }
		  },
		  ____triggerSlotChangeEvent: {
		    value: debounce(function callback() {
		      if (this.____slotChangeListeners) {
		        this.dispatchEvent(new CustomEvent('slotchange', {
		          bubbles: false,
		          cancelable: false
		        }));
		      }
		    })
		  },
		  addEventListener: {
		    value: function value(name, func, opts) {
		      if (name === 'slotchange' && isSlotNode(this)) {
		        this.____slotChangeListeners++;
		      }
		      return this.__addEventListener(name, func, opts);
		    }
		  },
		  appendChild: {
		    value: function value(newNode) {
		      appendChildOrInsertBefore(this, newNode);
		      return newNode;
		    }
		  },
		  assignedSlot: {
		    get: function get() {
		      var slot = nodeToSlotMap.get(this);
		
		      if (!slot) {
		        return null;
		      }
		
		      var root = slotToRootMap.get(slot);
		      var host = rootToHostMap.get(root);
		      var mode = hostToModeMap.get(host);
		
		      return mode === 'open' ? slot : null;
		    }
		  },
		  attachShadow: {
		    value: function value(opts) {
		      var _this = this;
		
		      var mode = opts && opts.mode;
		      if (mode !== 'closed' && mode !== 'open') {
		        throw new Error('You must specify { mode } as "open" or "closed" to attachShadow().');
		      }
		
		      // Return the existing shadow root if it exists.
		      var existingShadowRoot = hostToRootMap.get(this);
		      if (existingShadowRoot) {
		        return existingShadowRoot;
		      }
		
		      var lightNodes = makeLikeNodeList([].slice.call(this.childNodes));
		      var shadowRoot = document.createElement(opts.polyfillShadowRootTagName || defaultShadowRootTagName);
		
		      // Host and shadow root data.
		      hostToModeMap.set(this, mode);
		      hostToRootMap.set(this, shadowRoot);
		      rootToHostMap.set(shadowRoot, this);
		      rootToSlotMap.set(shadowRoot, {});
		
		      if (canPatchNativeAccessors) {
		        nodeToChildNodesMap.set(this, lightNodes);
		      } else {
		        staticProp(this, 'childNodes', lightNodes);
		      }
		
		      // Process light DOM.
		      lightNodes.forEach(function (node) {
		        // Existing children should be removed from being displayed, but still
		        // appear to be child nodes. This is how light DOM works; they're still
		        // child nodes but not in the composed DOM yet as there won't be any
		        // slots for them to go into.
		        _this.__removeChild(node);
		
		        // We must register the parentNode here as this has the potential to
		        // become out of sync if the node is moved before being slotted.
		        if (canPatchNativeAccessors) {
		          nodeToParentNodeMap.set(node, _this);
		        } else {
		          staticProp(node, 'parentNode', _this);
		        }
		      });
		
		      // The shadow root is actually the only child of the host.
		      return this.__appendChild(shadowRoot);
		    }
		  },
		  childElementCount: {
		    get: function get() {
		      return this.children.length;
		    }
		  },
		  childNodes: {
		    get: function get() {
		      if (canPatchNativeAccessors && getNodeType(this) === 'node') {
		        return this.__childNodes;
		      }
		      var childNodes = nodeToChildNodesMap.get(this);
		
		      if (!childNodes) {
		        nodeToChildNodesMap.set(this, childNodes = makeLikeNodeList([]));
		      }
		
		      return childNodes;
		    }
		  },
		  children: {
		    get: function get() {
		      var chs = [];
		      eachChildNode(this, function (node) {
		        if (node.nodeType === 1) {
		          chs.push(node);
		        }
		      });
		      return makeLikeNodeList(chs);
		    }
		  },
		  firstChild: {
		    get: function get() {
		      return this.childNodes[0] || null;
		    }
		  },
		  firstElementChild: {
		    get: function get() {
		      return this.children[0] || null;
		    }
		  },
		  assignedNodes: {
		    value: function value() {
		      if (isSlotNode(this)) {
		        var assigned = assignedToSlotMap.get(this);
		
		        if (!assigned) {
		          assignedToSlotMap.set(this, assigned = []);
		        }
		
		        return assigned;
		      }
		    }
		  },
		  hasChildNodes: {
		    value: function value() {
		      return this.childNodes.length > 0;
		    }
		  },
		  innerHTML: {
		    get: function get() {
		      var innerHTML = '';
		
		      var getHtmlNodeOuterHtml = function getHtmlNodeOuterHtml(node) {
		        return node.outerHTML;
		      };
		      var getOuterHtmlByNodeType = {};
		      getOuterHtmlByNodeType[Node.ELEMENT_NODE] = getHtmlNodeOuterHtml;
		      getOuterHtmlByNodeType[Node.COMMENT_NODE] = getCommentNodeOuterHtml;
		
		      // Text nodes with these ancestors should be treated as raw text
		      // See section 8.4 of
		      // https://www.w3.org/TR/2008/WD-html5-20080610/serializing.html#html-fragment
		      // Though Chrome does not adhere to spec for <noscript/>
		      var rawTextNodeNames = {
		        style: true,
		        script: true,
		        xmp: true,
		        iframe: true,
		        noembed: true,
		        noframes: true,
		        noscript: true,
		        plaintext: true
		      };
		
		      function isRawTextNode(node) {
		        return node.nodeType === Node.ELEMENT_NODE && node.nodeName.toLowerCase() in rawTextNodeNames;
		      }
		
		      var isParentNodeRawText = isRawTextNode(this);
		
		      eachChildNode(this, function (node) {
		        var getOuterHtml = void 0;
		        if (node.nodeType === Node.TEXT_NODE) {
		          if (isParentNodeRawText) {
		            getOuterHtml = getRawTextContent;
		          } else {
		            getOuterHtml = getEscapedTextContent;
		          }
		        } else {
		          getOuterHtml = getOuterHtmlByNodeType[node.nodeType] || getHtmlNodeOuterHtml;
		        }
		        innerHTML += getOuterHtml(node);
		      });
		      return innerHTML;
		    },
		    set: function set(innerHTML) {
		      var parsed = parse(innerHTML);
		
		      while (this.hasChildNodes()) {
		        this.removeChild(this.firstChild);
		      }
		
		      // when we are doing this: root.innerHTML = "<slot><div></div></slot>";
		      // slot.__childNodes is out of sync with slot.childNodes.
		      // to fix it we have to manually remove and insert them
		      var slots = findSlots(parsed);
		      forEach.call(slots, function (slot) {
		        return syncSlotChildNodes(slot);
		      });
		
		      while (parsed.hasChildNodes()) {
		        var firstChild = parsed.firstChild;
		
		        // When we polyfill everything on HTMLElement.prototype, we overwrite
		        // properties. This makes it so that parentNode reports null even though
		        // it's actually a parent of the HTML parser. For this reason,
		        // cleanNode() won't work and we must manually remove it from the
		        // parser before it is moved to the host just in case it's added as a
		        // light node but not assigned to a slot.
		        parsed.removeChild(firstChild);
		
		        this.appendChild(firstChild);
		      }
		    }
		  },
		  insertBefore: {
		    value: function value(newNode, refNode) {
		      appendChildOrInsertBefore(this, newNode, refNode);
		
		      return newNode;
		    }
		  },
		  lastChild: {
		    get: function get() {
		      var ch = this.childNodes;
		      return ch[ch.length - 1] || null;
		    }
		  },
		  lastElementChild: {
		    get: function get() {
		      var ch = this.children;
		      return ch[ch.length - 1] || null;
		    }
		  },
		  name: {
		    get: function get() {
		      return this.getAttribute('name');
		    },
		    set: function set(name) {
		      var oldName = this.name;
		      var ret = this.__setAttribute('name', name);
		
		      if (name === oldName) {
		        return ret;
		      }
		
		      if (!isSlotNode(this)) {
		        return ret;
		      }
		      var root = slotToRootMap.get(this);
		      if (root) {
		        removeSlotFromRoot(root, this);
		        addSlotToRoot(root, this);
		      }
		      return ret;
		    }
		  },
		  nextSibling: {
		    get: function get() {
		      var host = this;
		      return eachChildNode(this.parentNode, function (child, index, nodes) {
		        if (host === child) {
		          return nodes[index + 1] || null;
		        }
		      });
		    }
		  },
		  nextElementSibling: {
		    get: function get() {
		      var host = this;
		      var found = void 0;
		      return eachChildNode(this.parentNode, function (child) {
		        if (found && child.nodeType === 1) {
		          return child;
		        }
		        if (host === child) {
		          found = true;
		        }
		      });
		    }
		  },
		  outerHTML: {
		    get: function get() {
		      var name = this.tagName.toLowerCase();
		      var attributes = Array.prototype.slice.call(this.attributes).map(function (attr) {
		        return ' ' + attr.name + (attr.value ? '="' + attr.value + '"' : '');
		      }).join('');
		      return '<' + name + attributes + '>' + this.innerHTML + '</' + name + '>';
		    },
		    set: function set(outerHTML) {
		      if (this.parentNode) {
		        var parsed = parse(outerHTML);
		        this.parentNode.replaceChild(parsed.firstChild, this);
		      } else if (canPatchNativeAccessors) {
		        this.__outerHTML = outerHTML; // this will throw a native error;
		      } else {
		          throw new Error('Failed to set the \'outerHTML\' property on \'Element\': This element has no parent node.');
		        }
		    }
		  },
		  parentElement: {
		    get: function get() {
		      return findClosest(this.parentNode, function (node) {
		        return node.nodeType === 1;
		      });
		    }
		  },
		  parentNode: {
		    get: function get() {
		      return nodeToParentNodeMap.get(this) || this.__parentNode || null;
		    }
		  },
		  previousSibling: {
		    get: function get() {
		      var host = this;
		      return eachChildNode(this.parentNode, function (child, index, nodes) {
		        if (host === child) {
		          return nodes[index - 1] || null;
		        }
		      });
		    }
		  },
		  previousElementSibling: {
		    get: function get() {
		      var host = this;
		      var found = void 0;
		      return eachChildNode(this.parentNode, function (child) {
		        if (found && host === child) {
		          return found;
		        }
		        if (child.nodeType === 1) {
		          found = child;
		        }
		      });
		    }
		  },
		  removeChild: {
		    value: function value(refNode) {
		      var nodeType = getNodeType(this);
		
		      switch (nodeType) {
		        case 'node':
		          if (canPatchNativeAccessors) {
		            nodeToParentNodeMap.set(refNode, null);
		            return this.__removeChild(refNode);
		          }
		          removeNodeFromNode(this, refNode);
		          break;
		        case 'slot':
		          removeNodeFromSlot(this, refNode);
		          break;
		        case 'host':
		          removeNodeFromHost(this, refNode);
		          break;
		        case 'root':
		          removeNodeFromRoot(this, refNode);
		          break;
		        default:
		          break;
		      }
		      return refNode;
		    }
		  },
		  removeEventListener: {
		    value: function value(name, func, opts) {
		      if (name === 'slotchange' && this.____slotChangeListeners && isSlotNode(this)) {
		        this.____slotChangeListeners--;
		      }
		      return this.__removeEventListener(name, func, opts);
		    }
		  },
		  replaceChild: {
		    value: function value(newNode, refNode) {
		      this.insertBefore(newNode, refNode);
		      return this.removeChild(refNode);
		    }
		  },
		  setAttribute: {
		    value: function value(attrName, attrValue) {
		      if (attrName === 'slot') {
		        this[attrName] = attrValue;
		      }
		      if (isSlotNode(this)) {
		        if (attrName === 'name') {
		          this[attrName] = attrValue;
		        }
		      }
		      return this.__setAttribute(attrName, attrValue);
		    }
		  },
		  shadowRoot: {
		    get: function get() {
		      return hostToModeMap.get(this) === 'open' ? hostToRootMap.get(this) : null;
		    }
		  },
		  slot: {
		    get: function get() {
		      return this.getAttribute('slot');
		    },
		    set: function set(name) {
		      var oldName = this.name;
		      var ret = this.__setAttribute('slot', name);
		
		      if (oldName === name) {
		        return ret;
		      }
		
		      var slot = nodeToSlotMap.get(this);
		      var root = slot && slotToRootMap.get(slot);
		      var host = root && rootToHostMap.get(root);
		
		      if (host) {
		        removeNodeFromHost(host, this);
		        addNodeToHost(host, this);
		      }
		      return ret;
		    }
		  },
		  textContent: {
		    get: function get() {
		      var textContent = '';
		      eachChildNode(this, function (node) {
		        if (node.nodeType !== Node.COMMENT_NODE) {
		          textContent += node.textContent;
		        }
		      });
		      return textContent;
		    },
		    set: function set(textContent) {
		      while (this.hasChildNodes()) {
		        this.removeChild(this.firstChild);
		      }
		      if (!textContent) {
		        return;
		      }
		      this.appendChild(document.createTextNode(textContent));
		    }
		  }
		};
		
		var v1 = (function () {
		  var commProto = Comment.prototype;
		  var elementProto = HTMLElement.prototype;
		  var svgProto = SVGElement.prototype;
		  var textProto = Text.prototype;
		  var textNode = document.createTextNode('');
		  var commNode = document.createComment('');
		
		  Object.keys(members).forEach(function (memberName) {
		    var memberProperty = members[memberName];
		
		    // All properties should be configurable and enumerable.
		    memberProperty.configurable = true;
		    memberProperty.enumerable = true;
		
		    // Applying to the data properties only since we can't have writable accessor properties.
		    if (memberProperty.hasOwnProperty('value')) {
		      // eslint-disable-line no-prototype-builtins
		      memberProperty.writable = true;
		    }
		
		    // Polyfill as much as we can and work around WebKit in other areas.
		    if (canPatchNativeAccessors || polyfillAtRuntime.indexOf(memberName) === -1) {
		      var nativeDescriptor = getPropertyDescriptor(elementProto, memberName);
		      var nativeTextDescriptor = getPropertyDescriptor(textProto, memberName);
		      var nativeCommDescriptor = getPropertyDescriptor(commProto, memberName);
		      var shouldOverrideInTextNode = memberName in textNode && doNotOverridePropertiesInTextNodes.indexOf(memberName) === -1 || ~defineInTextNodes.indexOf(memberName);
		      var shouldOverrideInCommentNode = memberName in commNode && doNotOverridePropertiesInCommNodes.indexOf(memberName) === -1 || ~defineInCommNodes.indexOf(memberName);
		      var nativeMemberName = '__' + memberName;
		
		      Object.defineProperty(elementProto, memberName, memberProperty);
		      Object.defineProperty(svgProto, memberName, memberProperty);
		
		      if (nativeDescriptor) {
		        Object.defineProperty(elementProto, nativeMemberName, nativeDescriptor);
		        Object.defineProperty(svgProto, nativeMemberName, nativeDescriptor);
		      }
		
		      if (shouldOverrideInTextNode) {
		        Object.defineProperty(textProto, memberName, memberProperty);
		      }
		
		      if (shouldOverrideInTextNode && nativeTextDescriptor) {
		        Object.defineProperty(textProto, nativeMemberName, nativeTextDescriptor);
		      }
		
		      if (shouldOverrideInCommentNode) {
		        Object.defineProperty(commProto, memberName, memberProperty);
		      }
		
		      if (shouldOverrideInCommentNode && nativeCommDescriptor) {
		        Object.defineProperty(commProto, nativeMemberName, nativeCommDescriptor);
		      }
		    }
		  });
		})
		
		// TODO move into the skatejs-web-components package.
		if (shadowDomV1) {
		  // then we should probably not be loading this
		} else if (shadowDomV0) {
		    v0();
		  } else {
		    v1();
		  }
		
		exports.v0 = v0;
		exports.v1 = v1;
		
		Object.defineProperty(exports, '__esModule', { value: true });
		
		})));
		//# sourceMappingURL=index.js.map
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		// Polyfill for creating CustomEvents on IE9/10/11
		
		// code pulled from:
		// https://github.com/d4tocchini/customevent-polyfill
		// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
		
		try {
		    var ce = new window.CustomEvent('test');
		    ce.preventDefault();
		    if (ce.defaultPrevented !== true) {
		        // IE has problems with .preventDefault() on custom events
		        // http://stackoverflow.com/questions/23349191
		        throw new Error('Could not prevent default');
		    }
		} catch(e) {
		  var CustomEvent = function(event, params) {
		    var evt, origPrevent;
		    params = params || {
		      bubbles: false,
		      cancelable: false,
		      detail: undefined
		    };
		
		    evt = document.createEvent("CustomEvent");
		    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		    origPrevent = evt.preventDefault;
		    evt.preventDefault = function () {
		      origPrevent.call(this);
		      try {
		        Object.defineProperty(this, 'defaultPrevented', {
		          get: function () {
		            return true;
		          }
		        });
		      } catch(e) {
		        this.defaultPrevented = true;
		      }
		    };
		    return evt;
		  };
		
		  CustomEvent.prototype = window.Event.prototype;
		  window.CustomEvent = CustomEvent; // expose definition to window
		}
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * Module dependencies.
		 */
		
		var now = __webpack_require__(5);
		
		/**
		 * Returns a function, that, as long as it continues to be invoked, will not
		 * be triggered. The function will be called after it stops being called for
		 * N milliseconds. If `immediate` is passed, trigger the function on the
		 * leading edge, instead of the trailing.
		 *
		 * @source underscore.js
		 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
		 * @param {Function} function to wrap
		 * @param {Number} timeout in ms (`100`)
		 * @param {Boolean} whether to execute at the beginning (`false`)
		 * @api public
		 */
		
		module.exports = function debounce(func, wait, immediate){
		  var timeout, args, context, timestamp, result;
		  if (null == wait) wait = 100;
		
		  function later() {
		    var last = now() - timestamp;
		
		    if (last < wait && last > 0) {
		      timeout = setTimeout(later, wait - last);
		    } else {
		      timeout = null;
		      if (!immediate) {
		        result = func.apply(context, args);
		        if (!timeout) context = args = null;
		      }
		    }
		  };
		
		  return function debounced() {
		    context = this;
		    args = arguments;
		    timestamp = now();
		    var callNow = immediate && !timeout;
		    if (!timeout) timeout = setTimeout(later, wait);
		    if (callNow) {
		      result = func.apply(context, args);
		      context = args = null;
		    }
		
		    return result;
		  };
		};
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = Date.now || now
		
		function now() {
		    return new Date().getTime()
		}
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* (The MIT License)
		 *
		 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
		 *
		 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
		 * associated documentation files (the 'Software'), to deal in the Software without restriction,
		 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
		 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
		 * furnished to do so, subject to the following conditions:
		 *
		 * The above copyright notice and this permission notice shall be included with all copies or
		 * substantial portions of the Software.
		 *
		 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
		 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
		 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		 */
		
		// Original WeakMap implementation by Gozala @ https://gist.github.com/1269991
		// Updated and bugfixed by Raynos @ https://gist.github.com/1638059
		// Expanded by Benvie @ https://github.com/Benvie/harmony-collections
		
		void function(global, undefined_, undefined){
		  var getProps = Object.getOwnPropertyNames,
		      defProp  = Object.defineProperty,
		      toSource = Function.prototype.toString,
		      create   = Object.create,
		      hasOwn   = Object.prototype.hasOwnProperty,
		      funcName = /^\n?function\s?(\w*)?_?\(/;
		
		
		  function define(object, key, value){
		    if (typeof key === 'function') {
		      value = key;
		      key = nameOf(value).replace(/_$/, '');
		    }
		    return defProp(object, key, { configurable: true, writable: true, value: value });
		  }
		
		  function nameOf(func){
		    return typeof func !== 'function'
		          ? '' : 'name' in func
		          ? func.name : toSource.call(func).match(funcName)[1];
		  }
		
		  // ############
		  // ### Data ###
		  // ############
		
		  var Data = (function(){
		    var dataDesc = { value: { writable: true, value: undefined } },
		        datalock = 'return function(k){if(k===s)return l}',
		        uids     = create(null),
		
		        createUID = function(){
		          var key = Math.random().toString(36).slice(2);
		          return key in uids ? createUID() : uids[key] = key;
		        },
		
		        globalID = createUID(),
		
		        storage = function(obj){
		          if (hasOwn.call(obj, globalID))
		            return obj[globalID];
		
		          if (!Object.isExtensible(obj))
		            throw new TypeError("Object must be extensible");
		
		          var store = create(null);
		          defProp(obj, globalID, { value: store });
		          return store;
		        };
		
		    // common per-object storage area made visible by patching getOwnPropertyNames'
		    define(Object, function getOwnPropertyNames(obj){
		      var props = getProps(obj);
		      if (hasOwn.call(obj, globalID))
		        props.splice(props.indexOf(globalID), 1);
		      return props;
		    });
		
		    function Data(){
		      var puid = createUID(),
		          secret = {};
		
		      this.unlock = function(obj){
		        var store = storage(obj);
		        if (hasOwn.call(store, puid))
		          return store[puid](secret);
		
		        var data = create(null, dataDesc);
		        defProp(store, puid, {
		          value: new Function('s', 'l', datalock)(secret, data)
		        });
		        return data;
		      }
		    }
		
		    define(Data.prototype, function get(o){ return this.unlock(o).value });
		    define(Data.prototype, function set(o, v){ this.unlock(o).value = v });
		
		    return Data;
		  }());
		
		
		  var WM = (function(data){
		    var validate = function(key){
		      if (key == null || typeof key !== 'object' && typeof key !== 'function')
		        throw new TypeError("Invalid WeakMap key");
		    }
		
		    var wrap = function(collection, value){
		      var store = data.unlock(collection);
		      if (store.value)
		        throw new TypeError("Object is already a WeakMap");
		      store.value = value;
		    }
		
		    var unwrap = function(collection){
		      var storage = data.unlock(collection).value;
		      if (!storage)
		        throw new TypeError("WeakMap is not generic");
		      return storage;
		    }
		
		    var initialize = function(weakmap, iterable){
		      if (iterable !== null && typeof iterable === 'object' && typeof iterable.forEach === 'function') {
		        iterable.forEach(function(item, i){
		          if (item instanceof Array && item.length === 2)
		            set.call(weakmap, iterable[i][0], iterable[i][1]);
		        });
		      }
		    }
		
		
		    function WeakMap(iterable){
		      if (this === global || this == null || this === WeakMap.prototype)
		        return new WeakMap(iterable);
		
		      wrap(this, new Data);
		      initialize(this, iterable);
		    }
		
		    function get(key){
		      validate(key);
		      var value = unwrap(this).get(key);
		      return value === undefined_ ? undefined : value;
		    }
		
		    function set(key, value){
		      validate(key);
		      // store a token for explicit undefined so that "has" works correctly
		      unwrap(this).set(key, value === undefined ? undefined_ : value);
		    }
		
		    function has(key){
		      validate(key);
		      return unwrap(this).get(key) !== undefined;
		    }
		
		    function delete_(key){
		      validate(key);
		      var data = unwrap(this),
		          had = data.get(key) !== undefined;
		      data.set(key, undefined);
		      return had;
		    }
		
		    function toString(){
		      unwrap(this);
		      return '[object WeakMap]';
		    }
		
		    try {
		      var src = ('return '+delete_).replace('e_', '\\u0065'),
		          del = new Function('unwrap', 'validate', src)(unwrap, validate);
		    } catch (e) {
		      var del = delete_;
		    }
		
		    var src = (''+Object).split('Object');
		    var stringifier = function toString(){
		      return src[0] + nameOf(this) + src[1];
		    };
		
		    define(stringifier, stringifier);
		
		    var prep = { __proto__: [] } instanceof Array
		      ? function(f){ f.__proto__ = stringifier }
		      : function(f){ define(f, stringifier) };
		
		    prep(WeakMap);
		
		    [toString, get, set, has, del].forEach(function(method){
		      define(WeakMap.prototype, method);
		      prep(method);
		    });
		
		    return WeakMap;
		  }(new Data));
		
		  var defaultCreator = Object.create
		    ? function(){ return Object.create(null) }
		    : function(){ return {} };
		
		  function createStorage(creator){
		    var weakmap = new WM;
		    creator || (creator = defaultCreator);
		
		    function storage(object, value){
		      if (value || arguments.length === 2) {
		        weakmap.set(object, value);
		      } else {
		        value = weakmap.get(object);
		        if (value === undefined) {
		          value = creator(object);
		          weakmap.set(object, value);
		        }
		      }
		      return value;
		    }
		
		    return storage;
		  }
		
		
		  if (true) {
		    module.exports = WM;
		  } else if (typeof exports !== 'undefined') {
		    exports.WeakMap = WM;
		  } else if (!('WeakMap' in global)) {
		    global.WeakMap = WM;
		  }
		
		  WM.createStorage = createStorage;
		  if (global.WeakMap)
		    global.WeakMap.createStorage = createStorage;
		}((0, eval)('this'));
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		/* WEBPACK VAR INJECTION */(function(global) {/*!
		
		Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
		
		*/
		function installCustomElements(window) {'use strict';
		
		  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
		  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
		  // THIS FILE IS JUST WRAPPED UP RESULTING IN
		  // build/document-register-element.node.js
		
		  var
		    document = window.document,
		    Object = window.Object
		  ;
		
		  var htmlClass = (function (info) {
		    // (C) Andrea Giammarchi - @WebReflection - MIT Style
		    var
		      catchClass = /^[A-Z]+[a-z]/,
		      filterBy = function (re) {
		        var arr = [], tag;
		        for (tag in register) {
		          if (re.test(tag)) arr.push(tag);
		        }
		        return arr;
		      },
		      add = function (Class, tag) {
		        tag = tag.toLowerCase();
		        if (!(tag in register)) {
		          register[Class] = (register[Class] || []).concat(tag);
		          register[tag] = (register[tag.toUpperCase()] = Class);
		        }
		      },
		      register = (Object.create || Object)(null),
		      htmlClass = {},
		      i, section, tags, Class
		    ;
		    for (section in info) {
		      for (Class in info[section]) {
		        tags = info[section][Class];
		        register[Class] = tags;
		        for (i = 0; i < tags.length; i++) {
		          register[tags[i].toLowerCase()] =
		          register[tags[i].toUpperCase()] = Class;
		        }
		      }
		    }
		    htmlClass.get = function get(tagOrClass) {
		      return typeof tagOrClass === 'string' ?
		        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
		        filterBy(tagOrClass);
		    };
		    htmlClass.set = function set(tag, Class) {
		      return (catchClass.test(tag) ?
		        add(tag, Class) :
		        add(Class, tag)
		      ), htmlClass;
		    };
		    return htmlClass;
		  }({
		    "collections": {
		      "HTMLAllCollection": [
		        "all"
		      ],
		      "HTMLCollection": [
		        "forms"
		      ],
		      "HTMLFormControlsCollection": [
		        "elements"
		      ],
		      "HTMLOptionsCollection": [
		        "options"
		      ]
		    },
		    "elements": {
		      "Element": [
		        "element"
		      ],
		      "HTMLAnchorElement": [
		        "a"
		      ],
		      "HTMLAppletElement": [
		        "applet"
		      ],
		      "HTMLAreaElement": [
		        "area"
		      ],
		      "HTMLAttachmentElement": [
		        "attachment"
		      ],
		      "HTMLAudioElement": [
		        "audio"
		      ],
		      "HTMLBRElement": [
		        "br"
		      ],
		      "HTMLBaseElement": [
		        "base"
		      ],
		      "HTMLBodyElement": [
		        "body"
		      ],
		      "HTMLButtonElement": [
		        "button"
		      ],
		      "HTMLCanvasElement": [
		        "canvas"
		      ],
		      "HTMLContentElement": [
		        "content"
		      ],
		      "HTMLDListElement": [
		        "dl"
		      ],
		      "HTMLDataElement": [
		        "data"
		      ],
		      "HTMLDataListElement": [
		        "datalist"
		      ],
		      "HTMLDetailsElement": [
		        "details"
		      ],
		      "HTMLDialogElement": [
		        "dialog"
		      ],
		      "HTMLDirectoryElement": [
		        "dir"
		      ],
		      "HTMLDivElement": [
		        "div"
		      ],
		      "HTMLDocument": [
		        "document"
		      ],
		      "HTMLElement": [
		        "element",
		        "abbr",
		        "address",
		        "article",
		        "aside",
		        "b",
		        "bdi",
		        "bdo",
		        "cite",
		        "code",
		        "command",
		        "dd",
		        "dfn",
		        "dt",
		        "em",
		        "figcaption",
		        "figure",
		        "footer",
		        "header",
		        "i",
		        "kbd",
		        "mark",
		        "nav",
		        "noscript",
		        "rp",
		        "rt",
		        "ruby",
		        "s",
		        "samp",
		        "section",
		        "small",
		        "strong",
		        "sub",
		        "summary",
		        "sup",
		        "u",
		        "var",
		        "wbr"
		      ],
		      "HTMLEmbedElement": [
		        "embed"
		      ],
		      "HTMLFieldSetElement": [
		        "fieldset"
		      ],
		      "HTMLFontElement": [
		        "font"
		      ],
		      "HTMLFormElement": [
		        "form"
		      ],
		      "HTMLFrameElement": [
		        "frame"
		      ],
		      "HTMLFrameSetElement": [
		        "frameset"
		      ],
		      "HTMLHRElement": [
		        "hr"
		      ],
		      "HTMLHeadElement": [
		        "head"
		      ],
		      "HTMLHeadingElement": [
		        "h1",
		        "h2",
		        "h3",
		        "h4",
		        "h5",
		        "h6"
		      ],
		      "HTMLHtmlElement": [
		        "html"
		      ],
		      "HTMLIFrameElement": [
		        "iframe"
		      ],
		      "HTMLImageElement": [
		        "img"
		      ],
		      "HTMLInputElement": [
		        "input"
		      ],
		      "HTMLKeygenElement": [
		        "keygen"
		      ],
		      "HTMLLIElement": [
		        "li"
		      ],
		      "HTMLLabelElement": [
		        "label"
		      ],
		      "HTMLLegendElement": [
		        "legend"
		      ],
		      "HTMLLinkElement": [
		        "link"
		      ],
		      "HTMLMapElement": [
		        "map"
		      ],
		      "HTMLMarqueeElement": [
		        "marquee"
		      ],
		      "HTMLMediaElement": [
		        "media"
		      ],
		      "HTMLMenuElement": [
		        "menu"
		      ],
		      "HTMLMenuItemElement": [
		        "menuitem"
		      ],
		      "HTMLMetaElement": [
		        "meta"
		      ],
		      "HTMLMeterElement": [
		        "meter"
		      ],
		      "HTMLModElement": [
		        "del",
		        "ins"
		      ],
		      "HTMLOListElement": [
		        "ol"
		      ],
		      "HTMLObjectElement": [
		        "object"
		      ],
		      "HTMLOptGroupElement": [
		        "optgroup"
		      ],
		      "HTMLOptionElement": [
		        "option"
		      ],
		      "HTMLOutputElement": [
		        "output"
		      ],
		      "HTMLParagraphElement": [
		        "p"
		      ],
		      "HTMLParamElement": [
		        "param"
		      ],
		      "HTMLPictureElement": [
		        "picture"
		      ],
		      "HTMLPreElement": [
		        "pre"
		      ],
		      "HTMLProgressElement": [
		        "progress"
		      ],
		      "HTMLQuoteElement": [
		        "blockquote",
		        "q",
		        "quote"
		      ],
		      "HTMLScriptElement": [
		        "script"
		      ],
		      "HTMLSelectElement": [
		        "select"
		      ],
		      "HTMLShadowElement": [
		        "shadow"
		      ],
		      "HTMLSlotElement": [
		        "slot"
		      ],
		      "HTMLSourceElement": [
		        "source"
		      ],
		      "HTMLSpanElement": [
		        "span"
		      ],
		      "HTMLStyleElement": [
		        "style"
		      ],
		      "HTMLTableCaptionElement": [
		        "caption"
		      ],
		      "HTMLTableCellElement": [
		        "td",
		        "th"
		      ],
		      "HTMLTableColElement": [
		        "col",
		        "colgroup"
		      ],
		      "HTMLTableElement": [
		        "table"
		      ],
		      "HTMLTableRowElement": [
		        "tr"
		      ],
		      "HTMLTableSectionElement": [
		        "thead",
		        "tbody",
		        "tfoot"
		      ],
		      "HTMLTemplateElement": [
		        "template"
		      ],
		      "HTMLTextAreaElement": [
		        "textarea"
		      ],
		      "HTMLTimeElement": [
		        "time"
		      ],
		      "HTMLTitleElement": [
		        "title"
		      ],
		      "HTMLTrackElement": [
		        "track"
		      ],
		      "HTMLUListElement": [
		        "ul"
		      ],
		      "HTMLUnknownElement": [
		        "unknown",
		        "vhgroupv",
		        "vkeygen"
		      ],
		      "HTMLVideoElement": [
		        "video"
		      ]
		    },
		    "nodes": {
		      "Attr": [
		        "node"
		      ],
		      "Audio": [
		        "audio"
		      ],
		      "CDATASection": [
		        "node"
		      ],
		      "CharacterData": [
		        "node"
		      ],
		      "Comment": [
		        "#comment"
		      ],
		      "Document": [
		        "#document"
		      ],
		      "DocumentFragment": [
		        "#document-fragment"
		      ],
		      "DocumentType": [
		        "node"
		      ],
		      "HTMLDocument": [
		        "#document"
		      ],
		      "Image": [
		        "img"
		      ],
		      "Option": [
		        "option"
		      ],
		      "ProcessingInstruction": [
		        "node"
		      ],
		      "ShadowRoot": [
		        "#shadow-root"
		      ],
		      "Text": [
		        "#text"
		      ],
		      "XMLDocument": [
		        "xml"
		      ]
		    }
		  }));
		  
		  
		    var
		    // V0 polyfill entry
		    REGISTER_ELEMENT = 'registerElement',
		  
		    // IE < 11 only + old WebKit for attributes + feature detection
		    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
		  
		    // shortcuts and costants
		    ADD_EVENT_LISTENER = 'addEventListener',
		    ATTACHED = 'attached',
		    CALLBACK = 'Callback',
		    DETACHED = 'detached',
		    EXTENDS = 'extends',
		  
		    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
		    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
		    CONNECTED_CALLBACK = 'connected' + CALLBACK,
		    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
		    CREATED_CALLBACK = 'created' + CALLBACK,
		    DETACHED_CALLBACK = DETACHED + CALLBACK,
		  
		    ADDITION = 'ADDITION',
		    MODIFICATION = 'MODIFICATION',
		    REMOVAL = 'REMOVAL',
		  
		    DOM_ATTR_MODIFIED = 'DOMAttrModified',
		    DOM_CONTENT_LOADED = 'DOMContentLoaded',
		    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
		  
		    PREFIX_TAG = '<',
		    PREFIX_IS = '=',
		  
		    // valid and invalid node names
		    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
		    invalidNames = [
		      'ANNOTATION-XML',
		      'COLOR-PROFILE',
		      'FONT-FACE',
		      'FONT-FACE-SRC',
		      'FONT-FACE-URI',
		      'FONT-FACE-FORMAT',
		      'FONT-FACE-NAME',
		      'MISSING-GLYPH'
		    ],
		  
		    // registered types and their prototypes
		    types = [],
		    protos = [],
		  
		    // to query subnodes
		    query = '',
		  
		    // html shortcut used to feature detect
		    documentElement = document.documentElement,
		  
		    // ES5 inline helpers || basic patches
		    indexOf = types.indexOf || function (v) {
		      for(var i = this.length; i-- && this[i] !== v;){}
		      return i;
		    },
		  
		    // other helpers / shortcuts
		    OP = Object.prototype,
		    hOP = OP.hasOwnProperty,
		    iPO = OP.isPrototypeOf,
		  
		    defineProperty = Object.defineProperty,
		    empty = [],
		    gOPD = Object.getOwnPropertyDescriptor,
		    gOPN = Object.getOwnPropertyNames,
		    gPO = Object.getPrototypeOf,
		    sPO = Object.setPrototypeOf,
		  
		    // jshint proto: true
		    hasProto = !!Object.__proto__,
		  
		    // V1 helpers
		    fixGetClass = false,
		    DRECEV1 = '__dreCEv1',
		    customElements = window.customElements,
		    usableCustomElements = !!(
		      customElements &&
		      customElements.define &&
		      customElements.get &&
		      customElements.whenDefined
		    ),
		    Dict = Object.create || Object,
		    Map = window.Map || function Map() {
		      var K = [], V = [], i;
		      return {
		        get: function (k) {
		          return V[indexOf.call(K, k)];
		        },
		        set: function (k, v) {
		          i = indexOf.call(K, k);
		          if (i < 0) V[K.push(k) - 1] = v;
		          else V[i] = v;
		        }
		      };
		    },
		    Promise = window.Promise || function (fn) {
		      var
		        notify = [],
		        done = false,
		        p = {
		          'catch': function () {
		            return p;
		          },
		          'then': function (cb) {
		            notify.push(cb);
		            if (done) setTimeout(resolve, 1);
		            return p;
		          }
		        }
		      ;
		      function resolve(value) {
		        done = true;
		        while (notify.length) notify.shift()(value);
		      }
		      fn(resolve);
		      return p;
		    },
		    justCreated = false,
		    constructors = Dict(null),
		    waitingList = Dict(null),
		    nodeNames = new Map(),
		    secondArgument = String,
		  
		    // used to create unique instances
		    create = Object.create || function Bridge(proto) {
		      // silly broken polyfill probably ever used but short enough to work
		      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
		    },
		  
		    // will set the prototype if possible
		    // or copy over all properties
		    setPrototype = sPO || (
		      hasProto ?
		        function (o, p) {
		          o.__proto__ = p;
		          return o;
		        } : (
		      (gOPN && gOPD) ?
		        (function(){
		          function setProperties(o, p) {
		            for (var
		              key,
		              names = gOPN(p),
		              i = 0, length = names.length;
		              i < length; i++
		            ) {
		              key = names[i];
		              if (!hOP.call(o, key)) {
		                defineProperty(o, key, gOPD(p, key));
		              }
		            }
		          }
		          return function (o, p) {
		            do {
		              setProperties(o, p);
		            } while ((p = gPO(p)) && !iPO.call(p, o));
		            return o;
		          };
		        }()) :
		        function (o, p) {
		          for (var key in p) {
		            o[key] = p[key];
		          }
		          return o;
		        }
		    )),
		  
		    // DOM shortcuts and helpers, if any
		  
		    MutationObserver = window.MutationObserver ||
		                       window.WebKitMutationObserver,
		  
		    HTMLElementPrototype = (
		      window.HTMLElement ||
		      window.Element ||
		      window.Node
		    ).prototype,
		  
		    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
		  
		    safeProperty = IE8 ? function (o, k, d) {
		      o[k] = d.value;
		      return o;
		    } : defineProperty,
		  
		    isValidNode = IE8 ?
		      function (node) {
		        return node.nodeType === 1;
		      } :
		      function (node) {
		        return iPO.call(HTMLElementPrototype, node);
		      },
		  
		    targets = IE8 && [],
		  
		    attachShadow = HTMLElementPrototype.attachShadow,
		    cloneNode = HTMLElementPrototype.cloneNode,
		    dispatchEvent = HTMLElementPrototype.dispatchEvent,
		    getAttribute = HTMLElementPrototype.getAttribute,
		    hasAttribute = HTMLElementPrototype.hasAttribute,
		    removeAttribute = HTMLElementPrototype.removeAttribute,
		    setAttribute = HTMLElementPrototype.setAttribute,
		  
		    // replaced later on
		    createElement = document.createElement,
		    patchedCreateElement = createElement,
		  
		    // shared observer for all attributes
		    attributesObserver = MutationObserver && {
		      attributes: true,
		      characterData: true,
		      attributeOldValue: true
		    },
		  
		    // useful to detect only if there's no MutationObserver
		    DOMAttrModified = MutationObserver || function(e) {
		      doesNotSupportDOMAttrModified = false;
		      documentElement.removeEventListener(
		        DOM_ATTR_MODIFIED,
		        DOMAttrModified
		      );
		    },
		  
		    // will both be used to make DOMNodeInserted asynchronous
		    asapQueue,
		    asapTimer = 0,
		  
		    // internal flags
		    setListener = false,
		    doesNotSupportDOMAttrModified = true,
		    dropDomContentLoaded = true,
		  
		    // needed for the innerHTML helper
		    notFromInnerHTMLHelper = true,
		  
		    // optionally defined later on
		    onSubtreeModified,
		    callDOMAttrModified,
		    getAttributesMirror,
		    observer,
		    observe,
		  
		    // based on setting prototype capability
		    // will check proto or the expando attribute
		    // in order to setup the node once
		    patchIfNotAlready,
		    patch
		  ;
		  
		  // only if needed
		  if (!(REGISTER_ELEMENT in document)) {
		  
		    if (sPO || hasProto) {
		        patchIfNotAlready = function (node, proto) {
		          if (!iPO.call(proto, node)) {
		            setupNode(node, proto);
		          }
		        };
		        patch = setupNode;
		    } else {
		        patchIfNotAlready = function (node, proto) {
		          if (!node[EXPANDO_UID]) {
		            node[EXPANDO_UID] = Object(true);
		            setupNode(node, proto);
		          }
		        };
		        patch = patchIfNotAlready;
		    }
		  
		    if (IE8) {
		      doesNotSupportDOMAttrModified = false;
		      (function (){
		        var
		          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
		          addEventListener = descriptor.value,
		          patchedRemoveAttribute = function (name) {
		            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
		            e.attrName = name;
		            e.prevValue = getAttribute.call(this, name);
		            e.newValue = null;
		            e[REMOVAL] = e.attrChange = 2;
		            removeAttribute.call(this, name);
		            dispatchEvent.call(this, e);
		          },
		          patchedSetAttribute = function (name, value) {
		            var
		              had = hasAttribute.call(this, name),
		              old = had && getAttribute.call(this, name),
		              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
		            ;
		            setAttribute.call(this, name, value);
		            e.attrName = name;
		            e.prevValue = had ? old : null;
		            e.newValue = value;
		            if (had) {
		              e[MODIFICATION] = e.attrChange = 1;
		            } else {
		              e[ADDITION] = e.attrChange = 0;
		            }
		            dispatchEvent.call(this, e);
		          },
		          onPropertyChange = function (e) {
		            // jshint eqnull:true
		            var
		              node = e.currentTarget,
		              superSecret = node[EXPANDO_UID],
		              propertyName = e.propertyName,
		              event
		            ;
		            if (superSecret.hasOwnProperty(propertyName)) {
		              superSecret = superSecret[propertyName];
		              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
		              event.attrName = superSecret.name;
		              event.prevValue = superSecret.value || null;
		              event.newValue = (superSecret.value = node[propertyName] || null);
		              if (event.prevValue == null) {
		                event[ADDITION] = event.attrChange = 0;
		              } else {
		                event[MODIFICATION] = event.attrChange = 1;
		              }
		              dispatchEvent.call(node, event);
		            }
		          }
		        ;
		        descriptor.value = function (type, handler, capture) {
		          if (
		            type === DOM_ATTR_MODIFIED &&
		            this[ATTRIBUTE_CHANGED_CALLBACK] &&
		            this.setAttribute !== patchedSetAttribute
		          ) {
		            this[EXPANDO_UID] = {
		              className: {
		                name: 'class',
		                value: this.className
		              }
		            };
		            this.setAttribute = patchedSetAttribute;
		            this.removeAttribute = patchedRemoveAttribute;
		            addEventListener.call(this, 'propertychange', onPropertyChange);
		          }
		          addEventListener.call(this, type, handler, capture);
		        };
		        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
		      }());
		    } else if (!MutationObserver) {
		      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
		      documentElement.setAttribute(EXPANDO_UID, 1);
		      documentElement.removeAttribute(EXPANDO_UID);
		      if (doesNotSupportDOMAttrModified) {
		        onSubtreeModified = function (e) {
		          var
		            node = this,
		            oldAttributes,
		            newAttributes,
		            key
		          ;
		          if (node === e.target) {
		            oldAttributes = node[EXPANDO_UID];
		            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
		            for (key in newAttributes) {
		              if (!(key in oldAttributes)) {
		                // attribute was added
		                return callDOMAttrModified(
		                  0,
		                  node,
		                  key,
		                  oldAttributes[key],
		                  newAttributes[key],
		                  ADDITION
		                );
		              } else if (newAttributes[key] !== oldAttributes[key]) {
		                // attribute was changed
		                return callDOMAttrModified(
		                  1,
		                  node,
		                  key,
		                  oldAttributes[key],
		                  newAttributes[key],
		                  MODIFICATION
		                );
		              }
		            }
		            // checking if it has been removed
		            for (key in oldAttributes) {
		              if (!(key in newAttributes)) {
		                // attribute removed
		                return callDOMAttrModified(
		                  2,
		                  node,
		                  key,
		                  oldAttributes[key],
		                  newAttributes[key],
		                  REMOVAL
		                );
		              }
		            }
		          }
		        };
		        callDOMAttrModified = function (
		          attrChange,
		          currentTarget,
		          attrName,
		          prevValue,
		          newValue,
		          action
		        ) {
		          var e = {
		            attrChange: attrChange,
		            currentTarget: currentTarget,
		            attrName: attrName,
		            prevValue: prevValue,
		            newValue: newValue
		          };
		          e[action] = attrChange;
		          onDOMAttrModified(e);
		        };
		        getAttributesMirror = function (node) {
		          for (var
		            attr, name,
		            result = {},
		            attributes = node.attributes,
		            i = 0, length = attributes.length;
		            i < length; i++
		          ) {
		            attr = attributes[i];
		            name = attr.name;
		            if (name !== 'setAttribute') {
		              result[name] = attr.value;
		            }
		          }
		          return result;
		        };
		      }
		    }
		  
		    // set as enumerable, writable and configurable
		    document[REGISTER_ELEMENT] = function registerElement(type, options) {
		      upperType = type.toUpperCase();
		      if (!setListener) {
		        // only first time document.registerElement is used
		        // we need to set this listener
		        // setting it by default might slow down for no reason
		        setListener = true;
		        if (MutationObserver) {
		          observer = (function(attached, detached){
		            function checkEmAll(list, callback) {
		              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
		            }
		            return new MutationObserver(function (records) {
		              for (var
		                current, node, newValue,
		                i = 0, length = records.length; i < length; i++
		              ) {
		                current = records[i];
		                if (current.type === 'childList') {
		                  checkEmAll(current.addedNodes, attached);
		                  checkEmAll(current.removedNodes, detached);
		                } else {
		                  node = current.target;
		                  if (notFromInnerHTMLHelper &&
		                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
		                      current.attributeName !== 'style') {
		                    newValue = getAttribute.call(node, current.attributeName);
		                    if (newValue !== current.oldValue) {
		                      node[ATTRIBUTE_CHANGED_CALLBACK](
		                        current.attributeName,
		                        current.oldValue,
		                        newValue
		                      );
		                    }
		                  }
		                }
		              }
		            });
		          }(executeAction(ATTACHED), executeAction(DETACHED)));
		          observe = function (node) {
		            observer.observe(
		              node,
		              {
		                childList: true,
		                subtree: true
		              }
		            );
		            return node;
		          };
		          observe(document);
		          if (attachShadow) {
		            HTMLElementPrototype.attachShadow = function () {
		              return observe(attachShadow.apply(this, arguments));
		            };
		          }
		        } else {
		          asapQueue = [];
		          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
		          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
		        }
		  
		        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
		        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
		  
		        HTMLElementPrototype.cloneNode = function (deep) {
		          var
		            node = cloneNode.call(this, !!deep),
		            i = getTypeIndex(node)
		          ;
		          if (-1 < i) patch(node, protos[i]);
		          if (deep) loopAndSetup(node.querySelectorAll(query));
		          return node;
		        };
		      }
		  
		      if (-2 < (
		        indexOf.call(types, PREFIX_IS + upperType) +
		        indexOf.call(types, PREFIX_TAG + upperType)
		      )) {
		        throwTypeError(type);
		      }
		  
		      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
		        throw new Error('The type ' + type + ' is invalid');
		      }
		  
		      var
		        constructor = function () {
		          return extending ?
		            document.createElement(nodeName, upperType) :
		            document.createElement(nodeName);
		        },
		        opt = options || OP,
		        extending = hOP.call(opt, EXTENDS),
		        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
		        upperType,
		        i
		      ;
		  
		      if (extending && -1 < (
		        indexOf.call(types, PREFIX_TAG + nodeName)
		      )) {
		        throwTypeError(nodeName);
		      }
		  
		      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
		  
		      query = query.concat(
		        query.length ? ',' : '',
		        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
		      );
		  
		      constructor.prototype = (
		        protos[i] = hOP.call(opt, 'prototype') ?
		          opt.prototype :
		          create(HTMLElementPrototype)
		      );
		  
		      loopAndVerify(
		        document.querySelectorAll(query),
		        ATTACHED
		      );
		  
		      return constructor;
		    };
		  
		    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
		      var
		        is = getIs(typeExtension),
		        node = is ?
		          createElement.call(document, localName, secondArgument(is)) :
		          createElement.call(document, localName),
		        name = '' + localName,
		        i = indexOf.call(
		          types,
		          (is ? PREFIX_IS : PREFIX_TAG) +
		          (is || name).toUpperCase()
		        ),
		        setup = -1 < i
		      ;
		      if (is) {
		        node.setAttribute('is', is = is.toLowerCase());
		        if (setup) {
		          setup = isInQSA(name.toUpperCase(), is);
		        }
		      }
		      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
		      if (setup) patch(node, protos[i]);
		      return node;
		    });
		  
		  }
		  
		  function ASAP() {
		    var queue = asapQueue.splice(0, asapQueue.length);
		    asapTimer = 0;
		    while (queue.length) {
		      queue.shift().call(
		        null, queue.shift()
		      );
		    }
		  }
		  
		  function loopAndVerify(list, action) {
		    for (var i = 0, length = list.length; i < length; i++) {
		      verifyAndSetupAndAction(list[i], action);
		    }
		  }
		  
		  function loopAndSetup(list) {
		    for (var i = 0, length = list.length, node; i < length; i++) {
		      node = list[i];
		      patch(node, protos[getTypeIndex(node)]);
		    }
		  }
		  
		  function executeAction(action) {
		    return function (node) {
		      if (isValidNode(node)) {
		        verifyAndSetupAndAction(node, action);
		        loopAndVerify(
		          node.querySelectorAll(query),
		          action
		        );
		      }
		    };
		  }
		  
		  function getTypeIndex(target) {
		    var
		      is = getAttribute.call(target, 'is'),
		      nodeName = target.nodeName.toUpperCase(),
		      i = indexOf.call(
		        types,
		        is ?
		            PREFIX_IS + is.toUpperCase() :
		            PREFIX_TAG + nodeName
		      )
		    ;
		    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
		  }
		  
		  function isInQSA(name, type) {
		    return -1 < query.indexOf(name + '[is="' + type + '"]');
		  }
		  
		  function onDOMAttrModified(e) {
		    var
		      node = e.currentTarget,
		      attrChange = e.attrChange,
		      attrName = e.attrName,
		      target = e.target,
		      addition = e[ADDITION] || 2,
		      removal = e[REMOVAL] || 3
		    ;
		    if (notFromInnerHTMLHelper &&
		        (!target || target === node) &&
		        node[ATTRIBUTE_CHANGED_CALLBACK] &&
		        attrName !== 'style' && (
		          e.prevValue !== e.newValue ||
		          // IE9, IE10, and Opera 12 gotcha
		          e.newValue === '' && (
		            attrChange === addition ||
		            attrChange === removal
		          )
		    )) {
		      node[ATTRIBUTE_CHANGED_CALLBACK](
		        attrName,
		        attrChange === addition ? null : e.prevValue,
		        attrChange === removal ? null : e.newValue
		      );
		    }
		  }
		  
		  function onDOMNode(action) {
		    var executor = executeAction(action);
		    return function (e) {
		      asapQueue.push(executor, e.target);
		      if (asapTimer) clearTimeout(asapTimer);
		      asapTimer = setTimeout(ASAP, 1);
		    };
		  }
		  
		  function onReadyStateChange(e) {
		    if (dropDomContentLoaded) {
		      dropDomContentLoaded = false;
		      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
		    }
		    loopAndVerify(
		      (e.target || document).querySelectorAll(query),
		      e.detail === DETACHED ? DETACHED : ATTACHED
		    );
		    if (IE8) purge();
		  }
		  
		  function patchedSetAttribute(name, value) {
		    // jshint validthis:true
		    var self = this;
		    setAttribute.call(self, name, value);
		    onSubtreeModified.call(self, {target: self});
		  }
		  
		  function setupNode(node, proto) {
		    setPrototype(node, proto);
		    if (observer) {
		      observer.observe(node, attributesObserver);
		    } else {
		      if (doesNotSupportDOMAttrModified) {
		        node.setAttribute = patchedSetAttribute;
		        node[EXPANDO_UID] = getAttributesMirror(node);
		        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
		      }
		      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
		    }
		    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
		      node.created = true;
		      node[CREATED_CALLBACK]();
		      node.created = false;
		    }
		  }
		  
		  function purge() {
		    for (var
		      node,
		      i = 0,
		      length = targets.length;
		      i < length; i++
		    ) {
		      node = targets[i];
		      if (!documentElement.contains(node)) {
		        length--;
		        targets.splice(i--, 1);
		        verifyAndSetupAndAction(node, DETACHED);
		      }
		    }
		  }
		  
		  function throwTypeError(type) {
		    throw new Error('A ' + type + ' type is already registered');
		  }
		  
		  function verifyAndSetupAndAction(node, action) {
		    var
		      fn,
		      i = getTypeIndex(node)
		    ;
		    if (-1 < i) {
		      patchIfNotAlready(node, protos[i]);
		      i = 0;
		      if (action === ATTACHED && !node[ATTACHED]) {
		        node[DETACHED] = false;
		        node[ATTACHED] = true;
		        i = 1;
		        if (IE8 && indexOf.call(targets, node) < 0) {
		          targets.push(node);
		        }
		      } else if (action === DETACHED && !node[DETACHED]) {
		        node[ATTACHED] = false;
		        node[DETACHED] = true;
		        i = 1;
		      }
		      if (i && (fn = node[action + CALLBACK])) fn.call(node);
		    }
		  }
		  
		  
		  
		  // V1 in da House!
		  function CustomElementRegistry() {}
		  
		  CustomElementRegistry.prototype = {
		    constructor: CustomElementRegistry,
		    // a workaround for the stubborn WebKit
		    define: usableCustomElements ?
		      function (name, Class, options) {
		        if (options) {
		          CERDefine(name, Class, options);
		        } else {
		          var NAME = name.toUpperCase();
		          constructors[NAME] = {
		            constructor: Class,
		            create: [NAME]
		          };
		          nodeNames.set(Class, NAME);
		          customElements.define(name, Class);
		        }
		      } :
		      CERDefine,
		    get: usableCustomElements ?
		      function (name) {
		        return customElements.get(name) || get(name);
		      } :
		      get,
		    whenDefined: usableCustomElements ?
		      function (name) {
		        return Promise.race([
		          customElements.whenDefined(name),
		          whenDefined(name)
		        ]);
		      } :
		      whenDefined
		  };
		  
		  function CERDefine(name, Class, options) {
		    var
		      is = options && options[EXTENDS] || '',
		      CProto = Class.prototype,
		      proto = create(CProto),
		      attributes = Class.observedAttributes || empty,
		      definition = {prototype: proto}
		    ;
		    // TODO: is this needed at all since it's inherited?
		    // defineProperty(proto, 'constructor', {value: Class});
		    safeProperty(proto, CREATED_CALLBACK, {
		        value: function () {
		          if (justCreated) justCreated = false;
		          else if (!this[DRECEV1]) {
		            this[DRECEV1] = true;
		            new Class(this);
		            if (CProto[CREATED_CALLBACK])
		              CProto[CREATED_CALLBACK].call(this);
		            var info = constructors[nodeNames.get(Class)];
		            if (!usableCustomElements || info.create.length > 1) {
		              notifyAttributes(this);
		            }
		          }
		      }
		    });
		    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
		      value: function (name) {
		        if (-1 < indexOf.call(attributes, name))
		          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
		      }
		    });
		    if (CProto[CONNECTED_CALLBACK]) {
		      safeProperty(proto, ATTACHED_CALLBACK, {
		        value: CProto[CONNECTED_CALLBACK]
		      });
		    }
		    if (CProto[DISCONNECTED_CALLBACK]) {
		      safeProperty(proto, DETACHED_CALLBACK, {
		        value: CProto[DISCONNECTED_CALLBACK]
		      });
		    }
		    if (is) definition[EXTENDS] = is;
		    name = name.toUpperCase();
		    constructors[name] = {
		      constructor: Class,
		      create: is ? [is, secondArgument(name)] : [name]
		    };
		    nodeNames.set(Class, name);
		    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
		    whenDefined(name);
		    waitingList[name].r();
		  }
		  
		  function get(name) {
		    var info = constructors[name.toUpperCase()];
		    return info && info.constructor;
		  }
		  
		  function getIs(options) {
		    return typeof options === 'string' ?
		        options : (options && options.is || '');
		  }
		  
		  function notifyAttributes(self) {
		    var
		      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
		      attributes = callback ? self.attributes : empty,
		      i = attributes.length,
		      attribute
		    ;
		    while (i--) {
		      attribute =  attributes[i]; // || attributes.item(i);
		      callback.call(
		        self,
		        attribute.name || attribute.nodeName,
		        null,
		        attribute.value || attribute.nodeValue
		      );
		    }
		  }
		  
		  function whenDefined(name) {
		    name = name.toUpperCase();
		    if (!(name in waitingList)) {
		      waitingList[name] = {};
		      waitingList[name].p = new Promise(function (resolve) {
		        waitingList[name].r = resolve;
		      });
		    }
		    return waitingList[name].p;
		  }
		  
		  function polyfillV1() {
		    if (customElements) delete window.customElements;
		    defineProperty(window, 'customElements', {
		      configurable: true,
		      value: new CustomElementRegistry()
		    });
		    defineProperty(window, 'CustomElementRegistry', {
		      configurable: true,
		      value: CustomElementRegistry
		    });
		    for (var
		      patchClass = function (name) {
		        var Class = window[name];
		        if (Class) {
		          window[name] = function CustomElementsV1(self) {
		            var info, isNative;
		            if (!self) self = this;
		            if (!self[DRECEV1]) {
		              justCreated = true;
		              info = constructors[nodeNames.get(self.constructor)];
		              isNative = usableCustomElements && info.create.length === 1;
		              self = isNative ?
		                Reflect.construct(Class, empty, info.constructor) :
		                document.createElement.apply(document, info.create);
		              self[DRECEV1] = true;
		              justCreated = false;
		              if (!isNative) notifyAttributes(self);
		            }
		            return self;
		          };
		          window[name].prototype = Class.prototype;
		          try {
		            Class.prototype.constructor = window[name];
		          } catch(WebKit) {
		            fixGetClass = true;
		            defineProperty(Class, DRECEV1, {value: window[name]});
		          }
		        }
		      },
		      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
		      i = Classes.length;
		      i--;
		      patchClass(Classes[i])
		    ) {}
		    (document.createElement = function (name, options) {
		      var is = getIs(options);
		      return is ?
		        patchedCreateElement.call(this, name, secondArgument(is)) :
		        patchedCreateElement.call(this, name);
		    });
		  }
		  
		  // if customElements is not there at all
		  if (!customElements) polyfillV1();
		  else {
		    // if available test extends work as expected
		    try {
		      (function (DRE, options, name) {
		        options[EXTENDS] = 'a';
		        DRE.prototype = create(HTMLAnchorElement.prototype);
		        DRE.prototype.constructor = DRE;
		        window.customElements.define(name, DRE, options);
		        if (
		          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
		          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
		        ) {
		          throw options;
		        }
		      }(
		        function DRE() {
		          return Reflect.construct(HTMLAnchorElement, [], DRE);
		        },
		        {},
		        'document-register-element-a'
		      ));
		    } catch(o_O) {
		      // or force the polyfill if not
		      // and keep internal original reference
		      polyfillV1();
		    }
		  }
		  
		  try {
		    createElement.call(document, 'a', 'a');
		  } catch(FireFox) {
		    secondArgument = function (is) {
		      return {is: is};
		    };
		  }
		  
		}
		
		installCustomElements(global);
		
		module.exports = installCustomElements;
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(3);
	
	var _pages = __webpack_require__(5);
	
	var _body = __webpack_require__(31);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _header = __webpack_require__(32);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _router = __webpack_require__(34);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _title = __webpack_require__(35);
	
	var _title2 = _interopRequireDefault(_title);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _skatejs.define)('sk-app', {
	  props: {
	    page: {},
	    scrolled: _skatejs.prop.boolean()
	  },
	  created: function created() {
	    // Setup the Gitter script before it's rendered.
	    ((window.gitter = {}).chat = {}).options = {
	      room: 'skatejs/skatejs'
	    };
	  },
	  attached: function attached(elem) {
	    window.addEventListener('scroll', elem._scrollHandler = function () {
	      return elem.scrolled = !!window.scrollY;
	    });
	  },
	  detached: function detached(elem) {
	    window.removeEventListener('scroll', elem._scrollHandler);
	  },
	  render: function render(elem) {
	    var Page = elem.page;
	    (0, _title2.default)('SkateJS - functional web components');
	    return [(0, _skatejs.h)('script', { src: 'https://sidecar.gitter.im/dist/sidecar.v1.js', async: true, defer: true }), (0, _skatejs.h)(
	      'div',
	      null,
	      (0, _skatejs.h)(
	        _router2.default,
	        { 'on-route-change': function onRouteChange(e) {
	            return elem.page = e.detail;
	          } },
	        (0, _skatejs.h)(_router.Route, { component: _pages.Index, path: '/' }),
	        (0, _skatejs.h)(_router.Route, { component: _pages.Docs, path: '/docs' })
	      ),
	      (0, _skatejs.h)(_header2.default, { scrolled: elem.scrolled, title: 'SkateJS' }),
	      (0, _skatejs.h)(
	        _body2.default,
	        null,
	        Page ? (0, _skatejs.h)(Page, null) : ''
	      )
	    )];
	  }
	});
	// import Footer from '../footer';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(4)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'incremental-dom'], factory) :
	  (factory((global.skate = global.skate || {}),global.IncrementalDOM));
	}(this, (function (exports,incrementalDom) {
	
	function keys() {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var _ref$enumOnly = _ref.enumOnly;
	  var enumOnly = _ref$enumOnly === undefined ? false : _ref$enumOnly;
	
	  var listOfKeys = Object[enumOnly ? 'keys' : 'getOwnPropertyNames'](obj);
	  return typeof Object.getOwnPropertySymbols === 'function' ? listOfKeys.concat(Object.getOwnPropertySymbols(obj)) : listOfKeys;
	}
	
	// We are not using Object.assign if it is defined since it will cause problems when Symbol is polyfilled.
	// Apparently Object.assign (or any polyfill for this method) does not copy non-native Symbols.
	var assign = (function (obj) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  args.forEach(function (arg) {
	    return keys(arg).forEach(function (name) {
	      return obj[name] = arg[name];
	    });
	  }); // eslint-disable-line no-return-assign
	  return obj;
	});
	
	var empty = function (val) {
	  return typeof val === 'undefined' || val === null;
	};
	
	var alwaysUndefinedIfNotANumberOrNumber = function alwaysUndefinedIfNotANumberOrNumber(val) {
	  return isNaN(val) ? undefined : Number(val);
	};
	var alwaysUndefinedIfEmptyOrString = function alwaysUndefinedIfEmptyOrString(val) {
	  return empty(val) ? undefined : String(val);
	};
	
	function create(def) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    args.unshift({}, def);
	    return assign.apply(undefined, args);
	  };
	}
	
	var array = create({
	  coerce: function coerce(val) {
	    return Array.isArray(val) ? val : [val];
	  },
	  default: function _default() {
	    return [];
	  },
	  deserialize: JSON.parse,
	  serialize: JSON.stringify
	});
	
	var boolean = create({
	  coerce: function coerce(value) {
	    return !!value;
	  },
	  default: false,
	  deserialize: function deserialize(value) {
	    return !(value === null);
	  },
	  serialize: function serialize(value) {
	    return value ? '' : undefined;
	  }
	});
	
	var number = create({
	  default: 0,
	  coerce: alwaysUndefinedIfNotANumberOrNumber,
	  deserialize: alwaysUndefinedIfNotANumberOrNumber,
	  serialize: alwaysUndefinedIfNotANumberOrNumber
	});
	
	var string = create({
	  default: '',
	  coerce: alwaysUndefinedIfEmptyOrString,
	  deserialize: alwaysUndefinedIfEmptyOrString,
	  serialize: alwaysUndefinedIfEmptyOrString
	});
	
	var prop = Object.freeze({
		create: create,
		array: array,
		boolean: boolean,
		number: number,
		string: string
	});
	
	var connected = '____skate_connected';
	var created$1 = '____skate_created';
	var name$1 = '____skate_name';
	var props = '____skate_props';
	var ref$1 = '____skate_ref';
	var renderer$1 = '____skate_renderer';
	var rendering = '____skate_rendering';
	var rendererDebounced = '____skate_rendererDebounced';
	var shadowRoot = '____skate_shadowRoot';
	var updated$1 = '____skate_updated';
	
	
	
	var symbols$1 = Object.freeze({
		name: name$1,
		shadowRoot: shadowRoot
	});
	
	var doc = document;
	var win = window;
	var div = doc.createElement('div');
	var customElementsV0 = !!doc.registerElement;
	var customElementsV1 = !!win.customElements;
	var shadowDomV0 = !!div.createShadowRoot;
	var shadowDomV1 = !!div.attachShadow;
	var reflect = 'Reflect' in window;
	
	function enter(object, props) {
	  var saved = {};
	  Object.keys(props).forEach(function (key) {
	    saved[key] = object[key];
	    object[key] = props[key];
	  });
	  return saved;
	}
	
	function exit(object, saved) {
	  assign(object, saved);
	}
	
	// Decorates a function with a side effect that changes the properties of an
	// object during its execution, and restores them after. There is no error
	// handling here, if the wrapped function throws an error, properties are not
	// restored and all bets are off.
	var propContext = function (object, props) {
	  return function (func) {
	    return function () {
	      var saved = enter(object, props);
	      var result = func.apply(undefined, arguments);
	      exit(object, saved);
	      return result;
	    };
	  };
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	var asyncGenerator = function () {
	  function AwaitValue(value) {
	    this.value = value;
	  }
	
	  function AsyncGenerator(gen) {
	    var front, back;
	
	    function send(key, arg) {
	      return new Promise(function (resolve, reject) {
	        var request = {
	          key: key,
	          arg: arg,
	          resolve: resolve,
	          reject: reject,
	          next: null
	        };
	
	        if (back) {
	          back = back.next = request;
	        } else {
	          front = back = request;
	          resume(key, arg);
	        }
	      });
	    }
	
	    function resume(key, arg) {
	      try {
	        var result = gen[key](arg);
	        var value = result.value;
	
	        if (value instanceof AwaitValue) {
	          Promise.resolve(value.value).then(function (arg) {
	            resume("next", arg);
	          }, function (arg) {
	            resume("throw", arg);
	          });
	        } else {
	          settle(result.done ? "return" : "normal", result.value);
	        }
	      } catch (err) {
	        settle("throw", err);
	      }
	    }
	
	    function settle(type, value) {
	      switch (type) {
	        case "return":
	          front.resolve({
	            value: value,
	            done: true
	          });
	          break;
	
	        case "throw":
	          front.reject(value);
	          break;
	
	        default:
	          front.resolve({
	            value: value,
	            done: false
	          });
	          break;
	      }
	
	      front = front.next;
	
	      if (front) {
	        resume(front.key, front.arg);
	      } else {
	        back = null;
	      }
	    }
	
	    this._invoke = send;
	
	    if (typeof gen.return !== "function") {
	      this.return = undefined;
	    }
	  }
	
	  if (typeof Symbol === "function" && Symbol.asyncIterator) {
	    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
	      return this;
	    };
	  }
	
	  AsyncGenerator.prototype.next = function (arg) {
	    return this._invoke("next", arg);
	  };
	
	  AsyncGenerator.prototype.throw = function (arg) {
	    return this._invoke("throw", arg);
	  };
	
	  AsyncGenerator.prototype.return = function (arg) {
	    return this._invoke("return", arg);
	  };
	
	  return {
	    wrap: function (fn) {
	      return function () {
	        return new AsyncGenerator(fn.apply(this, arguments));
	      };
	    },
	    await: function (value) {
	      return new AwaitValue(value);
	    }
	  };
	}();
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var get$1 = function get$1(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get$1(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	
	
	var set$1 = function set$1(object, property, value, receiver) {
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent !== null) {
	      set$1(parent, property, value, receiver);
	    }
	  } else if ("value" in desc && desc.writable) {
	    desc.value = value;
	  } else {
	    var setter = desc.set;
	
	    if (setter !== undefined) {
	      setter.call(receiver, value);
	    }
	  }
	
	  return value;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};
	
	/* eslint no-plusplus: 0 */
	
	var applyDefault = incrementalDom.attributes[incrementalDom.symbols.default];
	var fallbackToV0 = !shadowDomV1 && shadowDomV0;
	
	// A stack of children that corresponds to the current function helper being
	// executed.
	var stackChren = [];
	
	var $skip = '__skip';
	var $currentEventHandlers = '__events';
	var $stackCurrentHelperProps = '__props';
	
	// The current function helper in the stack.
	var stackCurrentHelper = void 0;
	
	// This is used for the Incremental DOM overrides to keep track of what args
	// to pass the main elementOpen() function.
	var overrideArgs = void 0;
	
	// The number of levels deep after skipping a tree.
	var skips = 0;
	
	var noop = function noop() {};
	
	// Adds or removes an event listener for an element.
	function applyEvent(elem, ename, newFunc) {
	  var events = elem[$currentEventHandlers];
	
	  if (!events) {
	    events = elem[$currentEventHandlers] = {};
	  }
	
	  var oldFunc = events[ename];
	
	  // Remove old listener so they don't double up.
	  if (oldFunc) {
	    elem.removeEventListener(ename, oldFunc);
	  }
	
	  // Bind new listener.
	  if (newFunc) {
	    elem.addEventListener(ename, events[ename] = newFunc);
	  }
	}
	
	var attributesContext = propContext(incrementalDom.attributes, defineProperty({
	  // Attributes that shouldn't be applied to the DOM.
	  key: noop,
	  statics: noop,
	
	  // Attributes that *must* be set via a property on all elements.
	  checked: incrementalDom.applyProp,
	  className: incrementalDom.applyProp,
	  disabled: incrementalDom.applyProp,
	  value: incrementalDom.applyProp,
	
	  // V0 Shadow DOM to V1 normalisation.
	  name: function name(elem, _name, value) {
	    if (elem.tagName === 'CONTENT') {
	      _name = 'select';
	      value = '[slot="' + value + '"]';
	    }
	    applyDefault(elem, _name, value);
	  },
	
	
	  // Ref handler.
	  ref: function ref(elem, name$$1, value) {
	    elem[ref$1] = value;
	  },
	
	
	  // Skip handler.
	  skip: function skip(elem, name$$1, value) {
	    if (value) {
	      elem[$skip] = true;
	    } else {
	      delete elem[$skip];
	    }
	  }
	}, incrementalDom.symbols.default, function (elem, name$$1, value) {
	  // Custom element properties should be set as properties.
	  var props$$1 = elem.constructor.props;
	  if (props$$1 && name$$1 in props$$1) {
	    return incrementalDom.applyProp(elem, name$$1, value);
	  }
	
	  // Boolean false values should not set attributes at all.
	  if (value === false) {
	    return applyDefault(elem, name$$1);
	  }
	
	  // Handle built-in and custom events.
	  if (name$$1.indexOf('on') === 0) {
	    var firstChar = name$$1[2];
	    var eventName = void 0;
	
	    if (firstChar === '-') {
	      eventName = name$$1.substring(3);
	    } else if (firstChar === firstChar.toUpperCase()) {
	      eventName = firstChar.toLowerCase() + name$$1.substring(3);
	    }
	
	    if (eventName) {
	      applyEvent(elem, eventName, value);
	      return;
	    }
	  }
	
	  // Set defined props on the element directly. This ensures properties like
	  // "value" on <input> elements get set correctly. Setting those as attributes
	  // doesn't always work and setting props is faster than attributes.
	  //
	  // However, certain props on SVG elements are readonly and error when you try
	  // to set them.
	  if (name$$1 in elem && !('ownerSVGElement' in elem)) {
	    incrementalDom.applyProp(elem, name$$1, value);
	    return;
	  }
	
	  // Fallback to default IncrementalDOM behaviour.
	  applyDefault(elem, name$$1, value);
	}));
	
	function resolveTagName(tname) {
	  // If the tag name is a function, a Skate constructor or a standard function
	  // is supported.
	  //
	  // - If a Skate constructor, the tag name is extracted from that.
	  // - If a standard function, it is used as a helper.
	  if (typeof tname === 'function') {
	    return tname[name$1] || tname;
	  }
	
	  // Skate allows the consumer to use <slot /> and it will translate it to
	  // <content /> if Shadow DOM V0 is preferred.
	  if (tname === 'slot' && fallbackToV0) {
	    return 'content';
	  }
	
	  // All other tag names are just passed through.
	  return tname;
	}
	
	// Incremental DOM's elementOpen is where the hooks in `attributes` are applied,
	// so it's the only function we need to execute in the context of our attributes.
	var elementOpen$1 = attributesContext(incrementalDom.elementOpen);
	
	function elementOpenStart(tag) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var statics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  overrideArgs = [tag, key, statics];
	}
	
	function elementOpenEnd() {
	  var node = newElementOpen.apply(undefined, toConsumableArray(overrideArgs)); // eslint-disable-line no-use-before-define
	  overrideArgs = null;
	  return node;
	}
	
	function wrapIdomFunc(func) {
	  var tnameFuncHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	
	  return function wrap() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    args[0] = resolveTagName(args[0]);
	    stackCurrentHelper = null;
	    if (typeof args[0] === 'function') {
	      // If we've encountered a function, handle it according to the type of
	      // function that is being wrapped.
	      stackCurrentHelper = args[0];
	      return tnameFuncHandler.apply(undefined, args);
	    } else if (stackChren.length) {
	      // We pass the wrap() function in here so that when it's called as
	      // children, it will queue up for the next stack, if there is one.
	      stackChren[stackChren.length - 1].push([wrap, args]);
	    } else {
	      if (func === elementOpen$1) {
	        if (skips) {
	          return ++skips;
	        }
	
	        var elem = func.apply(undefined, args);
	
	        if (elem[$skip]) {
	          ++skips;
	        }
	
	        return elem;
	      }
	
	      if (func === incrementalDom.elementClose) {
	        if (skips === 1) {
	          incrementalDom.skip();
	        }
	
	        // We only want to skip closing if it's not the last closing tag in the
	        // skipped tree because we keep the element that initiated the skpping.
	        if (skips && --skips) {
	          return;
	        }
	
	        var _elem = func.apply(undefined, args);
	        var ref$$1 = _elem[ref$1];
	
	        // We delete so that it isn't called again for the same element. If the
	        // ref changes, or the element changes, this will be defined again.
	        delete _elem[ref$1];
	
	        // Execute the saved ref after esuring we've cleand up after it.
	        if (typeof ref$$1 === 'function') {
	          ref$$1(_elem);
	        }
	
	        return _elem;
	      }
	
	      // We must call elementOpenStart and elementOpenEnd even if we are
	      // skipping because they queue up attributes and then call elementClose.
	      if (!skips || func === elementOpenStart || func === elementOpenEnd) {
	        return func.apply(undefined, args);
	      }
	    }
	  };
	}
	
	function newAttr() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  if (stackCurrentHelper) {
	    stackCurrentHelper[$stackCurrentHelperProps][args[0]] = args[1];
	  } else if (stackChren.length) {
	    stackChren[stackChren.length - 1].push([newAttr, args]);
	  } else {
	    overrideArgs.push(args[0]);
	    overrideArgs.push(args[1]);
	  }
	}
	
	function stackOpen(tname, key, statics) {
	  var props$$1 = { key: key, statics: statics };
	
	  for (var _len3 = arguments.length, attrs = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	    attrs[_key3 - 3] = arguments[_key3];
	  }
	
	  for (var a = 0; a < attrs.length; a += 2) {
	    props$$1[attrs[a]] = attrs[a + 1];
	  }
	  tname[$stackCurrentHelperProps] = props$$1;
	  stackChren.push([]);
	}
	
	function stackClose(tname) {
	  var chren = stackChren.pop();
	  var props$$1 = tname[$stackCurrentHelperProps];
	  delete tname[$stackCurrentHelperProps];
	  var elemOrFn = tname(props$$1, function () {
	    return chren.forEach(function (args) {
	      return args[0].apply(args, toConsumableArray(args[1]));
	    });
	  });
	  return typeof elemOrFn === 'function' ? elemOrFn() : elemOrFn;
	}
	
	// Incremental DOM overrides
	// -------------------------
	
	// We must override internal functions that call internal Incremental DOM
	// functions because we can't override the internal references. This means
	// we must roughly re-implement their behaviour. Luckily, they're fairly
	// simple.
	var newElementOpenStart = wrapIdomFunc(elementOpenStart, stackOpen);
	var newElementOpenEnd = wrapIdomFunc(elementOpenEnd);
	
	// Standard open / closed overrides don't need to reproduce internal behaviour
	// because they are the ones referenced from *End and *Start.
	var newElementOpen = wrapIdomFunc(elementOpen$1, stackOpen);
	var newElementClose = wrapIdomFunc(incrementalDom.elementClose, stackClose);
	
	// Ensure we call our overridden functions instead of the internal ones.
	function newElementVoid(tag) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }
	
	  newElementOpen.apply(undefined, [tag].concat(args));
	  return newElementClose(tag);
	}
	
	// Text override ensures their calls can queue if using function helpers.
	var newText = wrapIdomFunc(incrementalDom.text);
	
	// Convenience function for declaring an Incremental DOM element using
	// hyperscript-style syntax.
	function element(tname, attrs) {
	  var atype = typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs);
	
	  // If attributes are a function, then they should be treated as children.
	
	  for (var _len5 = arguments.length, chren = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
	    chren[_key5 - 2] = arguments[_key5];
	  }
	
	  if (atype === 'function' || atype === 'string' || atype === 'number') {
	    chren.unshift(attrs);
	  }
	
	  // Ensure the attributes are an object. Null is considered an object so we
	  // have to test for this explicitly.
	  if (attrs === null || atype !== 'object') {
	    attrs = {};
	  }
	
	  // We open the element so we can set attrs after.
	  newElementOpenStart(tname, attrs.key, attrs.statics);
	
	  // Delete so special attrs don't actually get set.
	  delete attrs.key;
	  delete attrs.statics;
	
	  // Set attributes.
	  Object.keys(attrs).forEach(function (name$$1) {
	    return newAttr(name$$1, attrs[name$$1]);
	  });
	
	  // Close before we render the descendant tree.
	  newElementOpenEnd(tname);
	
	  chren.forEach(function (ch) {
	    var ctype = typeof ch === 'undefined' ? 'undefined' : _typeof(ch);
	    if (ctype === 'function') {
	      ch();
	    } else if (ctype === 'string' || ctype === 'number') {
	      newText(ch);
	    } else if (Array.isArray(ch)) {
	      ch.forEach(function (sch) {
	        return sch();
	      });
	    }
	  });
	
	  return newElementClose(tname);
	}
	
	// Even further convenience for building a DSL out of JavaScript functions or hooking into standard
	// transpiles for JSX (React.createElement() / h).
	function builder() {
	  for (var _len6 = arguments.length, tags = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    tags[_key6] = arguments[_key6];
	  }
	
	  if (tags.length === 0) {
	    return function () {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return element.bind.apply(element, [null].concat(args));
	    };
	  }
	  return tags.map(function (tag) {
	    return function () {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      return element.bind.apply(element, [null, tag].concat(args));
	    };
	  });
	}
	
	
	
	var vdom = Object.freeze({
		element: element,
		builder: builder,
		attr: newAttr,
		elementClose: newElementClose,
		elementOpen: newElementOpen,
		elementOpenEnd: newElementOpenEnd,
		elementOpenStart: newElementOpenStart,
		elementVoid: newElementVoid,
		text: newText
	});
	
	var data = function (element) {
	  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
	  return namespace && (data[namespace] || (data[namespace] = {})) || data; // eslint-disable-line no-mixed-operators
	};
	
	var _window$2 = window;
	var MutationObserver = _window$2.MutationObserver;
	
	
	var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	var timeoutDuration = 0;
	for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	  if (navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	    timeoutDuration = 1;
	    break;
	  }
	}
	
	function microTaskDebounce(cbFunc) {
	  var called = false;
	  var i = 0;
	  var cbArgs = [];
	  var elem = document.createElement('span');
	  var observer = new MutationObserver(function () {
	    cbFunc.apply(undefined, toConsumableArray(cbArgs));
	    called = false;
	    cbArgs = null;
	  });
	
	  observer.observe(elem, { childList: true });
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    cbArgs = args;
	    if (!called) {
	      called = true;
	      elem.textContent = '' + i;
	      i += 1;
	    }
	  };
	}
	
	function taskDebounce(fn) {
	  var called = false;
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    if (!called) {
	      called = true;
	      setTimeout(function () {
	        called = false;
	        fn.apply(undefined, args);
	      }, timeoutDuration);
	    }
	  };
	}
	
	var debounce = window.MutationObserver ? microTaskDebounce : taskDebounce;
	
	var getOwnPropertyDescriptors = function () {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  return keys(obj).reduce(function (prev, curr) {
	    prev[curr] = Object.getOwnPropertyDescriptor(obj, curr);
	    return prev;
	  }, {});
	};
	
	function get$2(elem) {
	  var props$$1 = {};
	  keys(elem.constructor.props).forEach(function (key) {
	    props$$1[key] = elem[key];
	  });
	
	  return props$$1;
	}
	
	function set$2(elem, newProps) {
	  assign(elem, newProps);
	  if (elem.constructor[renderer$1]) {
	    elem.constructor[renderer$1](elem);
	  }
	}
	
	var props$1 = function (elem, newProps) {
	  return typeof newProps === 'undefined' ? get$2(elem) : set$2(elem, newProps);
	};
	
	function getDefaultValue(elem, name, opts) {
	  return typeof opts.default === 'function' ? opts.default(elem, { name: name }) : opts.default;
	}
	
	function getInitialValue(elem, name, opts) {
	  return typeof opts.initial === 'function' ? opts.initial(elem, { name: name }) : opts.initial;
	}
	
	function getPropData(elem, name) {
	  var elemData = data(elem, 'props');
	  return elemData[name] || (elemData[name] = {});
	}
	
	function syncFirstTimeProp(elem, prop, propName, attributeName, propData) {
	  var syncAttrValue = propData.lastAssignedValue;
	  if (empty(syncAttrValue)) {
	    if ('initial' in prop) {
	      syncAttrValue = getInitialValue(elem, propName, prop);
	    } else if ('default' in prop) {
	      syncAttrValue = getDefaultValue(elem, propName, prop);
	    }
	  }
	  if (!empty(syncAttrValue) && prop.serialize) {
	    syncAttrValue = prop.serialize(syncAttrValue);
	  }
	  if (!empty(syncAttrValue)) {
	    propData.syncingAttribute = true;
	    elem.setAttribute(attributeName, syncAttrValue);
	  }
	}
	
	function syncExistingProp(elem, prop, propName, attributeName, propData) {
	  if (attributeName && !propData.settingAttribute) {
	    var internalValue = propData.internalValue;
	
	    var serializedValue = prop.serialize(internalValue);
	    var currentAttrValue = elem.getAttribute(attributeName);
	    var serializedIsEmpty = empty(serializedValue);
	    var attributeChanged = !(serializedIsEmpty && empty(currentAttrValue) || serializedValue === currentAttrValue);
	
	    propData.syncingAttribute = true;
	
	    var shouldRemoveAttribute = empty(propData.lastAssignedValue);
	    if (shouldRemoveAttribute || serializedIsEmpty) {
	      elem.removeAttribute(attributeName);
	    } else {
	      elem.setAttribute(attributeName, serializedValue);
	    }
	
	    if (!attributeChanged && propData.syncingAttribute) {
	      propData.syncingAttribute = false;
	    }
	  }
	
	  // Allow the attribute to be linked again.
	  propData.settingAttribute = false;
	}
	
	function syncPropToAttr(elem, prop, propName, isFirstSync) {
	  var attributeName = data(elem, 'propertyLinks')[propName];
	  var propData = getPropData(elem, propName);
	
	  if (attributeName) {
	    if (isFirstSync) {
	      syncFirstTimeProp(elem, prop, propName, attributeName, propData);
	    } else {
	      syncExistingProp(elem, prop, propName, attributeName, propData);
	    }
	  }
	}
	
	var _window$1 = window;
	var HTMLElement = _window$1.HTMLElement;
	
	// Abstracts shadow root across v1, v0 and no support.
	// Once v1 is supported everywhere, we can call elem.attachShadow() directly
	// and remove this function.
	
	function attachShadow(elem) {
	  if (shadowDomV1) {
	    return elem.attachShadow({ mode: 'open' });
	  } else if (shadowDomV0) {
	    return elem.createShadowRoot();
	  }
	  return elem;
	}
	
	function getOrAttachShadow(elem) {
	  return elem[shadowRoot] || (elem[shadowRoot] = attachShadow(elem));
	}
	
	function callConstructor(elem) {
	  var elemData = data(elem);
	  var readyCallbacks = elemData.readyCallbacks;
	  var constructor = elem.constructor;
	
	  // Ensures that this can never be called twice.
	
	  if (elem[created$1]) {
	    return;
	  }
	
	  elem[created$1] = true;
	
	  // Set up a renderer that is debounced for property sets to call directly.
	  elem[rendererDebounced] = debounce(constructor[renderer$1].bind(constructor));
	
	  // Set up property lifecycle.
	  if (constructor.props && constructor[props]) {
	    constructor[props](elem);
	  }
	
	  // Props should be set up before calling this.
	  if (typeof constructor.created === 'function') {
	    constructor.created(elem);
	  }
	
	  // Created should be set before invoking the ready listeners.
	  if (readyCallbacks) {
	    readyCallbacks.forEach(function (cb) {
	      return cb(elem);
	    });
	    delete elemData.readyCallbacks;
	  }
	
	  // In v0 we must ensure the attributeChangedCallback is called for attrs
	  // that aren't linked to props so that the callback behaves the same no
	  // matter if v0 or v1 is being used.
	  if (customElementsV0) {
	    constructor.observedAttributes.forEach(function (name$$1) {
	      var propertyName = data(elem, 'attributeLinks')[name$$1];
	      if (!propertyName) {
	        elem.attributeChangedCallback(name$$1, null, elem.getAttribute(name$$1));
	      }
	    });
	  }
	}
	
	function syncPropsToAttrs(elem) {
	  var props$$1 = elem.constructor.props;
	  Object.keys(props$$1).forEach(function (propName) {
	    var prop = props$$1[propName];
	    syncPropToAttr(elem, prop, propName, true);
	  });
	}
	
	function callConnected(elem) {
	  var constructor = elem.constructor;
	
	
	  syncPropsToAttrs(elem);
	
	  elem[connected] = true;
	  elem[rendererDebounced](elem);
	
	  if (typeof constructor.attached === 'function') {
	    constructor.attached(elem);
	  }
	
	  elem.setAttribute('defined', '');
	}
	
	function callDisconnected(elem) {
	  var constructor = elem.constructor;
	
	
	  elem[connected] = false;
	
	  if (typeof constructor.detached === 'function') {
	    constructor.detached(elem);
	  }
	}
	
	// v1
	function Component() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var elem = reflect ? Reflect.construct(HTMLElement, args, this.constructor) : HTMLElement.call(this, args[0]);
	  callConstructor(elem);
	  return elem;
	}
	
	// v1
	Component.observedAttributes = [];
	
	// Skate
	Component.props = {};
	
	// Skate
	Component.extend = function extend() {
	  var definition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
	  // Create class for the user.
	  var Ctor = function (_Base) {
	    inherits(Ctor, _Base);
	
	    function Ctor() {
	      classCallCheck(this, Ctor);
	      return possibleConstructorReturn(this, (Ctor.__proto__ || Object.getPrototypeOf(Ctor)).apply(this, arguments));
	    }
	
	    return Ctor;
	  }(Base);
	
	  // Pass on statics from the Base if not supported (IE 9 and 10).
	
	
	  if (!Ctor.observedAttributes) {
	    var staticOpts = getOwnPropertyDescriptors(Base);
	    delete staticOpts.length;
	    delete staticOpts.prototype;
	    Object.defineProperties(Ctor, staticOpts);
	  }
	
	  // For inheriting from the object literal.
	  var opts = getOwnPropertyDescriptors(definition);
	  var prot = getOwnPropertyDescriptors(definition.prototype);
	
	  // Prototype is non configurable (but is writable).
	  delete opts.prototype;
	
	  // Pass on static and instance members from the definition.
	  Object.defineProperties(Ctor, opts);
	  Object.defineProperties(Ctor.prototype, prot);
	
	  return Ctor;
	};
	
	// Skate
	//
	// Incremental DOM renderer.
	Component.renderer = function renderer(_ref) {
	  var elem = _ref.elem;
	  var render = _ref.render;
	  var shadowRoot$$1 = _ref.shadowRoot;
	
	  incrementalDom.patchInner(shadowRoot$$1, function () {
	    var possibleFn = render(elem);
	    if (typeof possibleFn === 'function') {
	      possibleFn();
	    } else if (Array.isArray(possibleFn)) {
	      possibleFn.forEach(function (fn) {
	        if (typeof fn === 'function') {
	          fn();
	        }
	      });
	    }
	  });
	};
	
	// Skate
	//
	// This is a default implementation that does strict equality copmarison on
	// previous props and next props. It synchronously renders on the first prop
	// that is different and returns immediately.
	Component.updated = function updated(elem, prev) {
	  if (!prev) {
	    return true;
	  }
	  // use get all keys so that we check Symbols as well as regular props
	  // using a for loop so we can break early
	  var allKeys = keys(prev);
	  for (var i = 0; i < allKeys.length; i += 1) {
	    if (prev[allKeys[i]] !== elem[allKeys[i]]) {
	      return true;
	    }
	  }
	  return false;
	};
	
	// Skate
	//
	// Calls the user-defined updated() lifecycle callback.
	Component[updated$1] = function _updated(elem) {
	  if (typeof this.updated === 'function') {
	    var prev = elem[props];
	    elem[props] = props$1(elem);
	    return this.updated(elem, prev);
	  }
	  return true;
	};
	
	// Skate
	//
	// Goes through the user-defined render lifecycle.
	Component[renderer$1] = function _renderer(elem) {
	  if (elem[rendering] || !elem[connected]) {
	    return;
	  }
	
	  // Flag as rendering. This prevents anything from trying to render - or
	  // queueing a render - while there is a pending render.
	  elem[rendering] = true;
	
	  var shouldRender = this[updated$1](elem);
	
	  // Even though this would ideally be checked in the updated() callback,
	  // it may not be, so we ensure that there is a point in proceeding.
	  if (!this.render || !this.renderer) {
	    elem[rendering] = false;
	    return;
	  }
	
	  if (shouldRender) {
	    this.renderer({ elem: elem, render: this.render, shadowRoot: getOrAttachShadow(elem) });
	    if (typeof this.rendered === 'function') {
	      this.rendered(elem);
	    }
	  }
	
	  elem[rendering] = false;
	};
	
	Component.prototype = Object.create(HTMLElement.prototype, {
	  // v1
	  connectedCallback: {
	    configurable: true,
	    value: function value() {
	      callConnected(this);
	    }
	  },
	
	  // v1
	  disconnectedCallback: {
	    configurable: true,
	    value: function value() {
	      callDisconnected(this);
	    }
	  },
	
	  // v0 and v1
	  attributeChangedCallback: {
	    configurable: true,
	    value: function value(name$$1, oldValue, newValue) {
	      var _constructor = this.constructor;
	      var attributeChanged = _constructor.attributeChanged;
	      var observedAttributes = _constructor.observedAttributes;
	
	      var propertyName = data(this, 'attributeLinks')[name$$1];
	
	      // In V0 we have to ensure the attribute is being observed.
	      if (customElementsV0 && observedAttributes.indexOf(name$$1) === -1) {
	        return;
	      }
	
	      if (propertyName) {
	        var propData = data(this, 'props')[propertyName];
	
	        // This ensures a property set doesn't cause the attribute changed
	        // handler to run again once we set this flag. This only ever has a
	        // chance to run when you set an attribute, it then sets a property and
	        // then that causes the attribute to be set again.
	        if (propData.syncingAttribute) {
	          propData.syncingAttribute = false;
	        } else {
	          // Sync up the property.
	          var propOpts = this.constructor.props[propertyName];
	          propData.settingAttribute = true;
	          var newPropVal = newValue !== null && propOpts.deserialize ? propOpts.deserialize(newValue) : newValue;
	          this[propertyName] = newPropVal;
	        }
	      }
	
	      if (attributeChanged) {
	        attributeChanged(this, { name: name$$1, newValue: newValue, oldValue: oldValue });
	      }
	    }
	  },
	
	  // v0
	  createdCallback: {
	    configurable: true,
	    value: function value() {
	      callConstructor(this);
	    }
	  },
	
	  // v0
	  attachedCallback: {
	    configurable: true,
	    value: function value() {
	      callConnected(this);
	    }
	  },
	
	  // v0
	  detachedCallback: {
	    configurable: true,
	    value: function value() {
	      callDisconnected(this);
	    }
	  }
	});
	
	var dashCase = function (str) {
	  return str.split(/([A-Z])/).reduce(function (one, two, idx) {
	    var dash = !one || idx % 2 === 0 ? '' : '-';
	    return '' + one + dash + two.toLowerCase();
	  });
	};
	
	function createNativePropertyDefinition(name$$1, opts) {
	  var prop = {
	    configurable: true,
	    enumerable: true
	  };
	
	  prop.created = function created(elem) {
	    var propData = getPropData(elem, name$$1);
	    var attributeName = opts.attribute === true ? dashCase(name$$1) : opts.attribute;
	    var initialValue = elem[name$$1];
	
	    // Store property to attribute link information.
	    data(elem, 'attributeLinks')[attributeName] = name$$1;
	    data(elem, 'propertyLinks')[name$$1] = attributeName;
	
	    // Set up initial value if it wasn't specified.
	    if (empty(initialValue)) {
	      if (attributeName && elem.hasAttribute(attributeName)) {
	        initialValue = opts.deserialize(elem.getAttribute(attributeName));
	      } else if ('initial' in opts) {
	        initialValue = getInitialValue(elem, name$$1, opts);
	      } else if ('default' in opts) {
	        initialValue = getDefaultValue(elem, name$$1, opts);
	      }
	    }
	
	    propData.internalValue = opts.coerce ? opts.coerce(initialValue) : initialValue;
	  };
	
	  prop.get = function get() {
	    var propData = getPropData(this, name$$1);
	    var internalValue = propData.internalValue;
	
	    return typeof opts.get === 'function' ? opts.get(this, { name: name$$1, internalValue: internalValue }) : internalValue;
	  };
	
	  prop.set = function set(newValue) {
	    var propData = getPropData(this, name$$1);
	    propData.lastAssignedValue = newValue;
	    var oldValue = propData.oldValue;
	
	
	    if (empty(oldValue)) {
	      oldValue = null;
	    }
	
	    if (empty(newValue)) {
	      newValue = getDefaultValue(this, name$$1, opts);
	    }
	
	    if (typeof opts.coerce === 'function') {
	      newValue = opts.coerce(newValue);
	    }
	
	    var changeData = { name: name$$1, newValue: newValue, oldValue: oldValue };
	
	    if (typeof opts.set === 'function') {
	      opts.set(this, changeData);
	    }
	
	    // Queue a re-render.
	    this[rendererDebounced](this);
	
	    // Update prop data so we can use it next time.
	    propData.internalValue = propData.oldValue = newValue;
	
	    // Link up the attribute.
	    if (this[connected]) {
	      syncPropToAttr(this, opts, name$$1, false);
	    }
	  };
	
	  return prop;
	}
	
	var initProps = function (opts) {
	  opts = opts || {};
	
	  if (typeof opts === 'function') {
	    opts = { coerce: opts };
	  }
	
	  return function (name$$1) {
	    return createNativePropertyDefinition(name$$1, assign({
	      default: null,
	      deserialize: function deserialize(value) {
	        return value;
	      },
	      serialize: function serialize(value) {
	        return value;
	      }
	    }, opts));
	  };
	};
	
	/* eslint no-bitwise: 0 */
	
	// Ensures that definitions passed as part of the constructor are functions
	// that return property definitions used on the element.
	function ensurePropertyFunctions(Ctor) {
	  var props$$1 = Ctor.props;
	
	  return keys(props$$1).reduce(function (descriptors, descriptorName) {
	    descriptors[descriptorName] = props$$1[descriptorName];
	    if (typeof descriptors[descriptorName] !== 'function') {
	      descriptors[descriptorName] = initProps(descriptors[descriptorName]);
	    }
	    return descriptors;
	  }, {});
	}
	
	// Ensures the property definitions are transformed to objects that can be used
	// to create properties on the element.
	function ensurePropertyDefinitions(Ctor) {
	  var props$$1 = ensurePropertyFunctions(Ctor);
	  return keys(props$$1).reduce(function (descriptors, descriptorName) {
	    descriptors[descriptorName] = props$$1[descriptorName](descriptorName);
	    return descriptors;
	  }, {});
	}
	
	// Ensures linked properties that have linked attributes are pre-formatted to
	// the attribute name in which they are linked.
	function formatLinkedAttributes(Ctor) {
	  var observedAttributes = Ctor.observedAttributes;
	  var props$$1 = Ctor.props;
	
	
	  if (!props$$1) {
	    return;
	  }
	
	  keys(props$$1).forEach(function (name$$1) {
	    var prop = props$$1[name$$1];
	    var attr = prop.attribute;
	    if (attr) {
	      // Ensure the property is updated.
	      var linkedAttr = prop.attribute = attr === true ? dashCase(name$$1) : attr;
	
	      // Automatically observe the attribute since they're linked from the
	      // attributeChangedCallback.
	      if (observedAttributes.indexOf(linkedAttr) === -1) {
	        observedAttributes.push(linkedAttr);
	      }
	    }
	  });
	
	  // Merge observed attributes.
	  Object.defineProperty(Ctor, 'observedAttributes', {
	    configurable: true,
	    enumerable: true,
	    get: function get() {
	      return observedAttributes;
	    }
	  });
	}
	
	function createInitProps(Ctor) {
	  var props$$1 = ensurePropertyDefinitions(Ctor);
	
	  return function (elem) {
	    if (!props$$1) {
	      return;
	    }
	
	    keys(props$$1).forEach(function (name$$1) {
	      var prop = props$$1[name$$1];
	      prop.created(elem);
	
	      // https://bugs.webkit.org/show_bug.cgi?id=49739
	      //
	      // When Webkit fixes that bug so that native property accessors can be
	      // retrieved, we can move defining the property to the prototype and away
	      // from having to do if for every instance as all other browsers support
	      // this.
	      Object.defineProperty(elem, name$$1, prop);
	    });
	  };
	}
	
	function generateUniqueName(name$$1) {
	  // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
	  var rand = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0;
	    var v = c === 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line no-mixed-operators
	    return v.toString(16);
	  });
	
	  return name$$1 + '-' + rand;
	}
	
	function prepareForRegistration(name$$1, Ctor) {
	  Ctor[name$1] = name$$1;
	  Ctor[props] = createInitProps(Ctor);
	}
	
	function registerV0Element(name$$1, Ctor) {
	  var res = void 0;
	  var uniqueName = void 0;
	  try {
	    prepareForRegistration(name$$1, Ctor);
	    res = document.registerElement(name$$1, Ctor);
	  } catch (e) {
	    uniqueName = generateUniqueName(name$$1);
	    prepareForRegistration(uniqueName, Ctor);
	    res = document.registerElement(uniqueName, Ctor);
	  }
	  return res;
	}
	
	function registerV1Element(name$$1, Ctor) {
	  var uniqueName = name$$1;
	  if (window.customElements.get(name$$1)) {
	    uniqueName = generateUniqueName(name$$1);
	  }
	  prepareForRegistration(uniqueName, Ctor);
	  window.customElements.define(uniqueName, Ctor, Ctor.extends ? { extends: Ctor.extends } : null);
	  return Ctor;
	}
	
	var define = function (name$$1, opts) {
	  if (opts === undefined) {
	    throw new Error('You have to define options to register a component ' + name$$1);
	  }
	  var Ctor = (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' ? Component.extend(opts) : opts;
	  formatLinkedAttributes(Ctor);
	
	  if (customElementsV1) {
	    return registerV1Element(name$$1, Ctor);
	  } else if (customElementsV0) {
	    return registerV0Element(name$$1, Ctor);
	  }
	
	  throw new Error('Skate requires native custom element support or a polyfill.');
	};
	
	var Event = function (TheEvent) {
	  if (TheEvent) {
	    try {
	      new TheEvent('emit-init'); // eslint-disable-line no-new
	    } catch (e) {
	      return undefined;
	    }
	  }
	  return TheEvent;
	}(window.Event);
	
	function createCustomEvent(name) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var detail = opts.detail;
	
	  delete opts.detail;
	
	  var e = void 0;
	  if (Event) {
	    e = new Event(name, opts);
	    if (typeof detail !== 'undefined') {
	      Object.defineProperty(e, 'detail', { value: detail });
	    }
	  } else {
	    e = document.createEvent('CustomEvent');
	    e.initCustomEvent(name, opts.bubbles, opts.cancelable, detail);
	  }
	  return e;
	}
	
	var emit = function (elem, name) {
	  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if (opts.bubbles === undefined) {
	    opts.bubbles = true;
	  }
	  if (opts.cancelable === undefined) {
	    opts.cancelable = true;
	  }
	  if (opts.composed === undefined) {
	    opts.composed = true;
	  }
	  return elem.dispatchEvent(createCustomEvent(name, opts));
	};
	
	function getValue(elem) {
	  var type = elem.type;
	  if (type === 'checkbox' || type === 'radio') {
	    return elem.checked ? elem.value || true : false;
	  }
	  return elem.value;
	}
	
	var link = function (elem, target) {
	  return function (e) {
	    var value = getValue(e.target);
	    var localTarget = target || e.target.name || 'value';
	
	    if (localTarget.indexOf('.') > -1) {
	      var parts = localTarget.split('.');
	      var firstPart = parts[0];
	      var propName = parts.pop();
	      var obj = parts.reduce(function (prev, curr) {
	        return prev && prev[curr];
	      }, elem);
	
	      obj[propName || e.target.name] = value;
	      props$1(elem, defineProperty({}, firstPart, elem[firstPart]));
	    } else {
	      props$1(elem, defineProperty({}, localTarget, value));
	    }
	  };
	};
	
	var ready = function (elem, done) {
	  var info = data(elem);
	  if (elem[created$1]) {
	    done(elem);
	  } else if (info.readyCallbacks) {
	    info.readyCallbacks.push(done);
	  } else {
	    info.readyCallbacks = [done];
	  }
	};
	
	var h = builder();
	
	exports.Component = Component;
	exports.define = define;
	exports.emit = emit;
	exports.h = h;
	exports.link = link;
	exports.prop = prop;
	exports.props = props$1;
	exports.ready = ready;
	exports.symbols = symbols$1;
	exports.vdom = vdom;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=index.js.map


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @license
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	'use strict';
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * A cached reference to the hasOwnProperty function.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * A cached reference to the create function.
	 */
	var create = Object.create;
	
	/**
	 * Used to prevent property collisions between our "map" and its prototype.
	 * @param {!Object<string, *>} map The map to check.
	 * @param {string} property The property to check.
	 * @return {boolean} Whether map has property.
	 */
	var has = function (map, property) {
	  return hasOwnProperty.call(map, property);
	};
	
	/**
	 * Creates an map object without a prototype.
	 * @return {!Object}
	 */
	var createMap = function () {
	  return create(null);
	};
	
	/**
	 * Keeps track of information needed to perform diffs for a given DOM node.
	 * @param {!string} nodeName
	 * @param {?string=} key
	 * @constructor
	 */
	function NodeData(nodeName, key) {
	  /**
	   * The attributes and their values.
	   * @const {!Object<string, *>}
	   */
	  this.attrs = createMap();
	
	  /**
	   * An array of attribute name/value pairs, used for quickly diffing the
	   * incomming attributes to see if the DOM node's attributes need to be
	   * updated.
	   * @const {Array<*>}
	   */
	  this.attrsArr = [];
	
	  /**
	   * The incoming attributes for this Node, before they are updated.
	   * @const {!Object<string, *>}
	   */
	  this.newAttrs = createMap();
	
	  /**
	   * The key used to identify this node, used to preserve DOM nodes when they
	   * move within their parent.
	   * @const
	   */
	  this.key = key;
	
	  /**
	   * Keeps track of children within this node by their key.
	   * {?Object<string, !Element>}
	   */
	  this.keyMap = null;
	
	  /**
	   * Whether or not the keyMap is currently valid.
	   * {boolean}
	   */
	  this.keyMapValid = true;
	
	  /**
	   * The node name for this node.
	   * @const {string}
	   */
	  this.nodeName = nodeName;
	
	  /**
	   * @type {?string}
	   */
	  this.text = null;
	}
	
	/**
	 * Initializes a NodeData object for a Node.
	 *
	 * @param {Node} node The node to initialize data for.
	 * @param {string} nodeName The node name of node.
	 * @param {?string=} key The key that identifies the node.
	 * @return {!NodeData} The newly initialized data object
	 */
	var initData = function (node, nodeName, key) {
	  var data = new NodeData(nodeName, key);
	  node['__incrementalDOMData'] = data;
	  return data;
	};
	
	/**
	 * Retrieves the NodeData object for a Node, creating it if necessary.
	 *
	 * @param {Node} node The node to retrieve the data for.
	 * @return {!NodeData} The NodeData for this Node.
	 */
	var getData = function (node) {
	  var data = node['__incrementalDOMData'];
	
	  if (!data) {
	    var nodeName = node.nodeName.toLowerCase();
	    var key = null;
	
	    if (node instanceof Element) {
	      key = node.getAttribute('key');
	    }
	
	    data = initData(node, nodeName, key);
	  }
	
	  return data;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var symbols = {
	  default: '__default',
	
	  placeholder: '__placeholder'
	};
	
	/**
	 * @param {string} name
	 * @return {string|undefined} The namespace to use for the attribute.
	 */
	var getNamespace = function (name) {
	  if (name.lastIndexOf('xml:', 0) === 0) {
	    return 'http://www.w3.org/XML/1998/namespace';
	  }
	
	  if (name.lastIndexOf('xlink:', 0) === 0) {
	    return 'http://www.w3.org/1999/xlink';
	  }
	};
	
	/**
	 * Applies an attribute or property to a given Element. If the value is null
	 * or undefined, it is removed from the Element. Otherwise, the value is set
	 * as an attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {?(boolean|number|string)=} value The attribute's value.
	 */
	var applyAttr = function (el, name, value) {
	  if (value == null) {
	    el.removeAttribute(name);
	  } else {
	    var attrNS = getNamespace(name);
	    if (attrNS) {
	      el.setAttributeNS(attrNS, name, value);
	    } else {
	      el.setAttribute(name, value);
	    }
	  }
	};
	
	/**
	 * Applies a property to a given Element.
	 * @param {!Element} el
	 * @param {string} name The property's name.
	 * @param {*} value The property's value.
	 */
	var applyProp = function (el, name, value) {
	  el[name] = value;
	};
	
	/**
	 * Applies a style to an Element. No vendor prefix expansion is done for
	 * property names/values.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} style The style to set. Either a string of css or an object
	 *     containing property-value pairs.
	 */
	var applyStyle = function (el, name, style) {
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	  } else {
	    el.style.cssText = '';
	    var elStyle = el.style;
	    var obj = /** @type {!Object<string,string>} */style;
	
	    for (var prop in obj) {
	      if (has(obj, prop)) {
	        elStyle[prop] = obj[prop];
	      }
	    }
	  }
	};
	
	/**
	 * Updates a single attribute on an Element.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value. If the value is an object or
	 *     function it is set on the Element, otherwise, it is set as an HTML
	 *     attribute.
	 */
	var applyAttributeTyped = function (el, name, value) {
	  var type = typeof value;
	
	  if (type === 'object' || type === 'function') {
	    applyProp(el, name, value);
	  } else {
	    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
	  }
	};
	
	/**
	 * Calls the appropriate attribute mutator for this attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value.
	 */
	var updateAttribute = function (el, name, value) {
	  var data = getData(el);
	  var attrs = data.attrs;
	
	  if (attrs[name] === value) {
	    return;
	  }
	
	  var mutator = attributes[name] || attributes[symbols.default];
	  mutator(el, name, value);
	
	  attrs[name] = value;
	};
	
	/**
	 * A publicly mutable object to provide custom mutators for attributes.
	 * @const {!Object<string, function(!Element, string, *)>}
	 */
	var attributes = createMap();
	
	// Special generic mutator that's called for any attribute that does not
	// have a specific mutator.
	attributes[symbols.default] = applyAttributeTyped;
	
	attributes[symbols.placeholder] = function () {};
	
	attributes['style'] = applyStyle;
	
	/**
	 * Gets the namespace to create an element (of a given tag) in.
	 * @param {string} tag The tag to get the namespace for.
	 * @param {?Node} parent
	 * @return {?string} The namespace to create the tag in.
	 */
	var getNamespaceForTag = function (tag, parent) {
	  if (tag === 'svg') {
	    return 'http://www.w3.org/2000/svg';
	  }
	
	  if (getData(parent).nodeName === 'foreignObject') {
	    return null;
	  }
	
	  return parent.namespaceURI;
	};
	
	/**
	 * Creates an Element.
	 * @param {Document} doc The document with which to create the Element.
	 * @param {?Node} parent
	 * @param {string} tag The tag for the Element.
	 * @param {?string=} key A key to identify the Element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element.
	 * @return {!Element}
	 */
	var createElement = function (doc, parent, tag, key, statics) {
	  var namespace = getNamespaceForTag(tag, parent);
	  var el = undefined;
	
	  if (namespace) {
	    el = doc.createElementNS(namespace, tag);
	  } else {
	    el = doc.createElement(tag);
	  }
	
	  initData(el, tag, key);
	
	  if (statics) {
	    for (var i = 0; i < statics.length; i += 2) {
	      updateAttribute(el, /** @type {!string}*/statics[i], statics[i + 1]);
	    }
	  }
	
	  return el;
	};
	
	/**
	 * Creates a Text Node.
	 * @param {Document} doc The document with which to create the Element.
	 * @return {!Text}
	 */
	var createText = function (doc) {
	  var node = doc.createTextNode('');
	  initData(node, '#text', null);
	  return node;
	};
	
	/**
	 * Creates a mapping that can be used to look up children using a key.
	 * @param {?Node} el
	 * @return {!Object<string, !Element>} A mapping of keys to the children of the
	 *     Element.
	 */
	var createKeyMap = function (el) {
	  var map = createMap();
	  var child = el.firstElementChild;
	
	  while (child) {
	    var key = getData(child).key;
	
	    if (key) {
	      map[key] = child;
	    }
	
	    child = child.nextElementSibling;
	  }
	
	  return map;
	};
	
	/**
	 * Retrieves the mapping of key to child node for a given Element, creating it
	 * if necessary.
	 * @param {?Node} el
	 * @return {!Object<string, !Node>} A mapping of keys to child Elements
	 */
	var getKeyMap = function (el) {
	  var data = getData(el);
	
	  if (!data.keyMap) {
	    data.keyMap = createKeyMap(el);
	  }
	
	  return data.keyMap;
	};
	
	/**
	 * Retrieves a child from the parent with the given key.
	 * @param {?Node} parent
	 * @param {?string=} key
	 * @return {?Node} The child corresponding to the key.
	 */
	var getChild = function (parent, key) {
	  return key ? getKeyMap(parent)[key] : null;
	};
	
	/**
	 * Registers an element as being a child. The parent will keep track of the
	 * child using the key. The child can be retrieved using the same key using
	 * getKeyMap. The provided key should be unique within the parent Element.
	 * @param {?Node} parent The parent of child.
	 * @param {string} key A key to identify the child with.
	 * @param {!Node} child The child to register.
	 */
	var registerChild = function (parent, key, child) {
	  getKeyMap(parent)[key] = child;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var notifications = {
	  /**
	   * Called after patch has compleated with any Nodes that have been created
	   * and added to the DOM.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesCreated: null,
	
	  /**
	   * Called after patch has compleated with any Nodes that have been removed
	   * from the DOM.
	   * Note it's an applications responsibility to handle any childNodes.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesDeleted: null
	};
	
	/**
	 * Keeps track of the state of a patch.
	 * @constructor
	 */
	function Context() {
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.created = notifications.nodesCreated && [];
	
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.deleted = notifications.nodesDeleted && [];
	}
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markCreated = function (node) {
	  if (this.created) {
	    this.created.push(node);
	  }
	};
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markDeleted = function (node) {
	  if (this.deleted) {
	    this.deleted.push(node);
	  }
	};
	
	/**
	 * Notifies about nodes that were created during the patch opearation.
	 */
	Context.prototype.notifyChanges = function () {
	  if (this.created && this.created.length > 0) {
	    notifications.nodesCreated(this.created);
	  }
	
	  if (this.deleted && this.deleted.length > 0) {
	    notifications.nodesDeleted(this.deleted);
	  }
	};
	
	/**
	* Makes sure that keyed Element matches the tag name provided.
	* @param {!string} nodeName The nodeName of the node that is being matched.
	* @param {string=} tag The tag name of the Element.
	* @param {?string=} key The key of the Element.
	*/
	var assertKeyedTagMatches = function (nodeName, tag, key) {
	  if (nodeName !== tag) {
	    throw new Error('Was expecting node with key "' + key + '" to be a ' + tag + ', not a ' + nodeName + '.');
	  }
	};
	
	/** @type {?Context} */
	var context = null;
	
	/** @type {?Node} */
	var currentNode = null;
	
	/** @type {?Node} */
	var currentParent = null;
	
	/** @type {?Element|?DocumentFragment} */
	var root = null;
	
	/** @type {?Document} */
	var doc = null;
	
	/**
	 * Returns a patcher function that sets up and restores a patch context,
	 * running the run function with the provided data.
	 * @param {function((!Element|!DocumentFragment),!function(T),T=)} run
	 * @return {function((!Element|!DocumentFragment),!function(T),T=)}
	 * @template T
	 */
	var patchFactory = function (run) {
	  /**
	   * TODO(moz): These annotations won't be necessary once we switch to Closure
	   * Compiler's new type inference. Remove these once the switch is done.
	   *
	   * @param {(!Element|!DocumentFragment)} node
	   * @param {!function(T)} fn
	   * @param {T=} data
	   * @template T
	   */
	  var f = function (node, fn, data) {
	    var prevContext = context;
	    var prevRoot = root;
	    var prevDoc = doc;
	    var prevCurrentNode = currentNode;
	    var prevCurrentParent = currentParent;
	    var previousInAttributes = false;
	    var previousInSkip = false;
	
	    context = new Context();
	    root = node;
	    doc = node.ownerDocument;
	    currentParent = node.parentNode;
	
	    if (false) {}
	
	    run(node, fn, data);
	
	    if (false) {}
	
	    context.notifyChanges();
	
	    context = prevContext;
	    root = prevRoot;
	    doc = prevDoc;
	    currentNode = prevCurrentNode;
	    currentParent = prevCurrentParent;
	  };
	  return f;
	};
	
	/**
	 * Patches the document starting at node with the provided function. This
	 * function may be called during an existing patch operation.
	 * @param {!Element|!DocumentFragment} node The Element or Document
	 *     to patch.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchInner = patchFactory(function (node, fn, data) {
	  currentNode = node;
	
	  enterNode();
	  fn(data);
	  exitNode();
	
	  if (false) {}
	});
	
	/**
	 * Patches an Element with the the provided function. Exactly one top level
	 * element call should be made corresponding to `node`.
	 * @param {!Element} node The Element where the patch should start.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM. This should have at most one top level
	 *     element call.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchOuter = patchFactory(function (node, fn, data) {
	  currentNode = /** @type {!Element} */{ nextSibling: node };
	
	  fn(data);
	
	  if (false) {}
	});
	
	/**
	 * Checks whether or not the current node matches the specified nodeName and
	 * key.
	 *
	 * @param {?string} nodeName The nodeName for this node.
	 * @param {?string=} key An optional key that identifies a node.
	 * @return {boolean} True if the node matches, false otherwise.
	 */
	var matches = function (nodeName, key) {
	  var data = getData(currentNode);
	
	  // Key check is done using double equals as we want to treat a null key the
	  // same as undefined. This should be okay as the only values allowed are
	  // strings, null and undefined so the == semantics are not too weird.
	  return nodeName === data.nodeName && key == data.key;
	};
	
	/**
	 * Aligns the virtual Element definition with the actual DOM, moving the
	 * corresponding DOM node to the correct location or creating it if necessary.
	 * @param {string} nodeName For an Element, this should be a valid tag string.
	 *     For a Text, this should be #text.
	 * @param {?string=} key The key used to identify this element.
	 * @param {?Array<*>=} statics For an Element, this should be an array of
	 *     name-value pairs.
	 */
	var alignWithDOM = function (nodeName, key, statics) {
	  if (currentNode && matches(nodeName, key)) {
	    return;
	  }
	
	  var node = undefined;
	
	  // Check to see if the node has moved within the parent.
	  if (key) {
	    node = getChild(currentParent, key);
	    if (node && 'production' !== 'production') {
	      assertKeyedTagMatches(getData(node).nodeName, nodeName, key);
	    }
	  }
	
	  // Create the node if it doesn't exist.
	  if (!node) {
	    if (nodeName === '#text') {
	      node = createText(doc);
	    } else {
	      node = createElement(doc, currentParent, nodeName, key, statics);
	    }
	
	    if (key) {
	      registerChild(currentParent, key, node);
	    }
	
	    context.markCreated(node);
	  }
	
	  // If the node has a key, remove it from the DOM to prevent a large number
	  // of re-orders in the case that it moved far or was completely removed.
	  // Since we hold on to a reference through the keyMap, we can always add it
	  // back.
	  if (currentNode && getData(currentNode).key) {
	    currentParent.replaceChild(node, currentNode);
	    getData(currentParent).keyMapValid = false;
	  } else {
	    currentParent.insertBefore(node, currentNode);
	  }
	
	  currentNode = node;
	};
	
	/**
	 * Clears out any unvisited Nodes, as the corresponding virtual element
	 * functions were never called for them.
	 */
	var clearUnvisitedDOM = function () {
	  var node = currentParent;
	  var data = getData(node);
	  var keyMap = data.keyMap;
	  var keyMapValid = data.keyMapValid;
	  var child = node.lastChild;
	  var key = undefined;
	
	  if (child === currentNode && keyMapValid) {
	    return;
	  }
	
	  if (data.attrs[symbols.placeholder] && node !== root) {
	    if (false) {}
	    return;
	  }
	
	  while (child !== currentNode) {
	    node.removeChild(child);
	    context.markDeleted( /** @type {!Node}*/child);
	
	    key = getData(child).key;
	    if (key) {
	      delete keyMap[key];
	    }
	    child = node.lastChild;
	  }
	
	  // Clean the keyMap, removing any unusued keys.
	  if (!keyMapValid) {
	    for (key in keyMap) {
	      child = keyMap[key];
	      if (child.parentNode !== node) {
	        context.markDeleted(child);
	        delete keyMap[key];
	      }
	    }
	
	    data.keyMapValid = true;
	  }
	};
	
	/**
	 * Changes to the first child of the current node.
	 */
	var enterNode = function () {
	  currentParent = currentNode;
	  currentNode = null;
	};
	
	/**
	 * Changes to the next sibling of the current node.
	 */
	var nextNode = function () {
	  if (currentNode) {
	    currentNode = currentNode.nextSibling;
	  } else {
	    currentNode = currentParent.firstChild;
	  }
	};
	
	/**
	 * Changes to the parent of the current node, removing any unvisited children.
	 */
	var exitNode = function () {
	  clearUnvisitedDOM();
	
	  currentNode = currentParent;
	  currentParent = currentParent.parentNode;
	};
	
	/**
	 * Makes sure that the current node is an Element with a matching tagName and
	 * key.
	 *
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementOpen = function (tag, key, statics) {
	  nextNode();
	  alignWithDOM(tag, key, statics);
	  enterNode();
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Closes the currently open Element, removing any unvisited children if
	 * necessary.
	 *
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementClose = function () {
	  if (false) {}
	
	  exitNode();
	  return (/** @type {!Element} */currentNode
	  );
	};
	
	/**
	 * Makes sure the current node is a Text node and creates a Text node if it is
	 * not.
	 *
	 * @return {!Text} The corresponding Text Node.
	 */
	var coreText = function () {
	  nextNode();
	  alignWithDOM('#text', null, null);
	  return (/** @type {!Text} */currentNode
	  );
	};
	
	/**
	 * Gets the current Element being patched.
	 * @return {!Element}
	 */
	var currentElement = function () {
	  if (false) {}
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Skips the children in a subtree, allowing an Element to be closed without
	 * clearing out the children.
	 */
	var skip = function () {
	  if (false) {}
	  currentNode = currentParent.lastChild;
	};
	
	/**
	 * The offset in the virtual element declaration where the attributes are
	 * specified.
	 * @const
	 */
	var ATTRIBUTES_OFFSET = 3;
	
	/**
	 * Builds an array of arguments for use with elementOpenStart, attr and
	 * elementOpenEnd.
	 * @const {Array<*>}
	 */
	var argsBuilder = [];
	
	/**
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpen = function (tag, key, statics, const_args) {
	  if (false) {}
	
	  var node = coreElementOpen(tag, key, statics);
	  var data = getData(node);
	
	  /*
	   * Checks to see if one or more attributes have changed for a given Element.
	   * When no attributes have changed, this is much faster than checking each
	   * individual argument. When attributes have changed, the overhead of this is
	   * minimal.
	   */
	  var attrsArr = data.attrsArr;
	  var newAttrs = data.newAttrs;
	  var attrsChanged = false;
	  var i = ATTRIBUTES_OFFSET;
	  var j = 0;
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    if (attrsArr[j] !== arguments[i]) {
	      attrsChanged = true;
	      break;
	    }
	  }
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    attrsArr[j] = arguments[i];
	  }
	
	  if (j < attrsArr.length) {
	    attrsChanged = true;
	    attrsArr.length = j;
	  }
	
	  /*
	   * Actually perform the attribute update.
	   */
	  if (attrsChanged) {
	    for (i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
	      newAttrs[arguments[i]] = arguments[i + 1];
	    }
	
	    for (var _attr in newAttrs) {
	      updateAttribute(node, _attr, newAttrs[_attr]);
	      newAttrs[_attr] = undefined;
	    }
	  }
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document. This
	 * corresponds to an opening tag and a elementClose tag is required. This is
	 * like elementOpen, but the attributes are defined using the attr function
	 * rather than being passed as arguments. Must be folllowed by 0 or more calls
	 * to attr, then a call to elementOpenEnd.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 */
	var elementOpenStart = function (tag, key, statics) {
	  if (false) {}
	
	  argsBuilder[0] = tag;
	  argsBuilder[1] = key;
	  argsBuilder[2] = statics;
	};
	
	/***
	 * Defines a virtual attribute at this point of the DOM. This is only valid
	 * when called between elementOpenStart and elementOpenEnd.
	 *
	 * @param {string} name
	 * @param {*} value
	 */
	var attr = function (name, value) {
	  if (false) {}
	
	  argsBuilder.push(name, value);
	};
	
	/**
	 * Closes an open tag started with elementOpenStart.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpenEnd = function () {
	  if (false) {}
	
	  var node = elementOpen.apply(null, argsBuilder);
	  argsBuilder.length = 0;
	  return node;
	};
	
	/**
	 * Closes an open virtual Element.
	 *
	 * @param {string} tag The element's tag.
	 * @return {!Element} The corresponding Element.
	 */
	var elementClose = function (tag) {
	  if (false) {}
	
	  var node = coreElementClose();
	
	  if (false) {}
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that has
	 * no children.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementVoid = function (tag, key, statics, const_args) {
	  elementOpen.apply(null, arguments);
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that is a
	 * placeholder element. Children of this Element can be manually managed and
	 * will not be cleared by the library.
	 *
	 * A key must be specified to make sure that this node is correctly preserved
	 * across all conditionals.
	 *
	 * @param {string} tag The element's tag.
	 * @param {string} key The key used to identify this element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementPlaceholder = function (tag, key, statics, const_args) {
	  if (false) {}
	
	  elementOpen.apply(null, arguments);
	  skip();
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Text at this point in the document.
	 *
	 * @param {string|number|boolean} value The value of the Text.
	 * @param {...(function((string|number|boolean)):string)} const_args
	 *     Functions to format the value which are called only when the value has
	 *     changed.
	 * @return {!Text} The corresponding text node.
	 */
	var text = function (value, const_args) {
	  if (false) {}
	
	  var node = coreText();
	  var data = getData(node);
	
	  if (data.text !== value) {
	    data.text = /** @type {string} */value;
	
	    var formatted = value;
	    for (var i = 1; i < arguments.length; i += 1) {
	      /*
	       * Call the formatter function directly to prevent leaking arguments.
	       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
	       */
	      var fn = arguments[i];
	      formatted = fn(formatted);
	    }
	
	    node.data = formatted;
	  }
	
	  return node;
	};
	
	exports.patch = patchInner;
	exports.patchInner = patchInner;
	exports.patchOuter = patchOuter;
	exports.currentElement = currentElement;
	exports.skip = skip;
	exports.elementVoid = elementVoid;
	exports.elementOpenStart = elementOpenStart;
	exports.elementOpenEnd = elementOpenEnd;
	exports.elementOpen = elementOpen;
	exports.elementClose = elementClose;
	exports.elementPlaceholder = elementPlaceholder;
	exports.text = text;
	exports.attr = attr;
	exports.symbols = symbols;
	exports.attributes = attributes;
	exports.applyAttr = applyAttr;
	exports.applyProp = applyProp;
	exports.notifications = notifications;
	
	//# sourceMappingURL=incremental-dom-cjs.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Index = exports.Docs = undefined;
	
	var _docs = __webpack_require__(6);
	
	var _docs2 = _interopRequireDefault(_docs);
	
	var _index = __webpack_require__(19);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Docs = _docs2.default;
	exports.Index = _index2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(3);
	
	var _helpers = __webpack_require__(7);
	
	exports.default = (0, _skatejs.define)('sk-page-docs', {
	  render: function render() {
	    return (0, _skatejs.h)(
	      _helpers.Layout,
	      null,
	      (0, _skatejs.h)(
	        'p',
	        null,
	        'The docs are currently being ported over from the ',
	        (0, _skatejs.h)(
	          'a',
	          { href: 'https://github.com/skatejs/skatejs/blob/master/README.md' },
	          'README'
	        ),
	        '.'
	      )
	    );
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Layout = exports.Link = exports.Css = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _skatejs = __webpack_require__(3);
	
	var _glamor = __webpack_require__(8);
	
	var _page = __webpack_require__(16);
	
	var _page2 = _interopRequireDefault(_page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function followHref(e) {
	  (0, _page2.default)(e.target.pathname || '/');
	  e.preventDefault();
	}
	
	var Css = exports.Css = function Css(props) {
	  return (0, _skatejs.h)(
	    'style',
	    null,
	    props.for.length ? _glamor.cssFor.apply(undefined, _toConsumableArray(props.for)) : (0, _glamor.cssFor)(props.for)
	  );
	};
	var Link = exports.Link = function Link(props, chren) {
	  return (0, _skatejs.h)(
	    'a',
	    _extends({}, props, { onclick: followHref }),
	    chren
	  );
	};
	var Layout = exports.Layout = function Layout(props, chren) {
	  return (0, _skatejs.h)(
	    'div',
	    { style: 'padding: 20px' },
	    chren
	  );
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.presets = exports.compose = exports.$ = exports.plugins = exports.styleSheet = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.speedy = speedy;
	exports.simulations = simulations;
	exports.simulate = simulate;
	exports.cssLabels = cssLabels;
	exports.isLikeRule = isLikeRule;
	exports.idFor = idFor;
	exports.insertRule = insertRule;
	exports.insertGlobal = insertGlobal;
	exports.rehydrate = rehydrate;
	exports.flush = flush;
	exports.style = style;
	exports.select = select;
	exports.parent = parent;
	exports.merge = merge;
	exports.media = media;
	exports.trackMediaQueryLabels = trackMediaQueryLabels;
	exports.pseudo = pseudo;
	exports.active = active;
	exports.any = any;
	exports.checked = checked;
	exports.disabled = disabled;
	exports.empty = empty;
	exports.enabled = enabled;
	exports._default = _default;
	exports.first = first;
	exports.firstChild = firstChild;
	exports.firstOfType = firstOfType;
	exports.fullscreen = fullscreen;
	exports.focus = focus;
	exports.hover = hover;
	exports.indeterminate = indeterminate;
	exports.inRange = inRange;
	exports.invalid = invalid;
	exports.lastChild = lastChild;
	exports.lastOfType = lastOfType;
	exports.left = left;
	exports.link = link;
	exports.onlyChild = onlyChild;
	exports.onlyOfType = onlyOfType;
	exports.optional = optional;
	exports.outOfRange = outOfRange;
	exports.readOnly = readOnly;
	exports.readWrite = readWrite;
	exports.required = required;
	exports.right = right;
	exports.root = root;
	exports.scope = scope;
	exports.target = target;
	exports.valid = valid;
	exports.visited = visited;
	exports.dir = dir;
	exports.lang = lang;
	exports.not = not;
	exports.nthChild = nthChild;
	exports.nthLastChild = nthLastChild;
	exports.nthLastOfType = nthLastOfType;
	exports.nthOfType = nthOfType;
	exports.after = after;
	exports.before = before;
	exports.firstLetter = firstLetter;
	exports.firstLine = firstLine;
	exports.selection = selection;
	exports.backdrop = backdrop;
	exports.placeholder = placeholder;
	exports.keyframes = keyframes;
	exports.fontFace = fontFace;
	exports.cssFor = cssFor;
	exports.attribsFor = attribsFor;
	
	var _sheet = __webpack_require__(10);
	
	var _CSSPropertyOperations = __webpack_require__(11);
	
	var _clean = __webpack_require__(12);
	
	var _clean2 = _interopRequireDefault(_clean);
	
	var _plugins = __webpack_require__(13);
	
	var _hash = __webpack_require__(15);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**** stylesheet  ****/
	
	var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
	// an isomorphic StyleSheet shim. hides all the nitty gritty. 
	
	// /**************** LIFTOFF IN 3... 2... 1... ****************/
	styleSheet.inject(); //eslint-disable-line indent
	// /****************      TO THE MOOOOOOON     ****************/
	
	// convenience function to toggle speedy
	function speedy(bool) {
	  return styleSheet.speedy(bool);
	}
	
	// plugins 
	// we include these by default 
	var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet(_plugins.fallbacks, _plugins.bug20fix, _plugins.prefixes);
	plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
	plugins.fontFace = new _plugins.PluginSet();
	plugins.keyframes = new _plugins.PluginSet(_plugins.prefixes);
	
	// define some constants 
	var isBrowser = typeof window !== 'undefined';
	var isDev = function (x) {
	  return x === 'development' || !x;
	}(process.env.NODE_ENV);
	var isTest = process.env.NODE_ENV === 'test';
	
	/**** simulations  ****/
	
	// a flag to enable simulation meta tags on dom nodes 
	// defaults to true in dev mode. recommend *not* to 
	// toggle often. 
	var canSimulate = isDev;
	
	// we use these flags for issuing warnings when simulate is called 
	// in prod / in incorrect order 
	var warned1 = false,
	    warned2 = false;
	
	// toggles simulation activity. shouldn't be needed in most cases 
	function simulations() {
	  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	  canSimulate = !!bool;
	}
	
	// use this on dom nodes to 'simulate' pseudoclasses
	// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
	// you can even send in some weird ones, as long as it's in simple format 
	// and matches an existing rule on the element 
	// eg simulate('nthChild2', ':hover:active') etc 
	function simulate() {
	  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
	    pseudos[_key] = arguments[_key];
	  }
	
	  pseudos = (0, _clean2.default)(pseudos);
	  if (!pseudos) return {};
	  if (!canSimulate) {
	    if (!warned1) {
	      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
	      warned1 = true;
	    }
	    if (!isDev && !isTest && !warned2) {
	      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
	      warned2 = true;
	    }
	    return {};
	  }
	  return pseudos.reduce(function (o, p) {
	    return o['data-simulate-' + simple(p)] = '', o;
	  }, {});
	}
	
	/**** labels ****/
	// toggle for debug labels. 
	// *shouldn't* have to mess with this manually
	var hasLabels = isDev;
	
	function cssLabels(bool) {
	  hasLabels = !!bool;
	}
	
	// takes a string, converts to lowercase, strips out nonalphanumeric.
	function simple(str) {
	  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
	}
	
	// flatten a nested array 
	function flatten(inArr) {
	  var arr = [];
	  for (var i = 0; i < inArr.length; i++) {
	    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
	  }
	  return arr;
	}
	
	// hashes a string to something 'unique'
	// we use this to generate ids for styles
	
	
	function hashify() {
	  for (var _len2 = arguments.length, objs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    objs[_key2] = arguments[_key2];
	  }
	
	  return (0, _hash2.default)(objs.map(function (x) {
	    return JSON.stringify(x);
	  }).join('')).toString(36);
	}
	
	// of shape { 'data-css-<id>': ''}
	function isLikeRule(rule) {
	  var keys = Object.keys(rule).filter(function (x) {
	    return x !== 'toString';
	  });
	  if (keys.length !== 1) {
	    return false;
	  }
	  return !!/data\-css\-([a-zA-Z0-9]+)/.exec(keys[0]);
	}
	
	// extracts id from a { 'data-css-<id>': ''} like object 
	function idFor(rule) {
	  var keys = Object.keys(rule).filter(function (x) {
	    return x !== 'toString';
	  });
	  if (keys.length !== 1) throw new Error('not a rule');
	  var regex = /data\-css\-([a-zA-Z0-9]+)/;
	  var match = regex.exec(keys[0]);
	  if (!match) throw new Error('not a rule');
	  return match[1];
	}
	
	// a simple cache to store generated rules 
	var registered = {};
	function register(spec) {
	  if (!registered[spec.id]) {
	    registered[spec.id] = spec;
	  }
	}
	
	// semi-deeply merge 2 'mega' style objects 
	function deepMergeStyles(dest, src) {
	  Object.keys(src).forEach(function (expr) {
	    dest[expr] = dest[expr] || {};
	    Object.keys(src[expr]).forEach(function (type) {
	      dest[expr][type] = dest[expr][type] || {};
	      Object.assign(dest[expr][type], src[expr][type]);
	    });
	  });
	}
	
	//todo - prevent nested media queries
	function deconstruct(obj) {
	  var ret = [];
	  var plain = {},
	      hasPlain = false;
	  var hasPseudos = obj && find(Object.keys(obj), function (x) {
	    return x.charAt(0) === ':';
	  });
	  var hasMedias = obj && find(Object.keys(obj), function (x) {
	    return x.charAt(0) === '@';
	  }); // todo - check @media
	
	  if (hasPseudos || hasMedias) {
	
	    Object.keys(obj).forEach(function (key) {
	      if (key.charAt(0) === ':') {
	        ret.push({
	          type: 'pseudo',
	          style: obj[key],
	          selector: key
	        });
	      } else if (key.charAt(0) === '@') {
	        ret.push({
	          type: 'media',
	          rules: deconstruct(obj[key]),
	          expr: key.substring(6)
	        });
	      } else {
	        hasPlain = true;
	        plain[key] = obj[key];
	      }
	    });
	    return hasPlain ? [plain].concat(ret) : ret;
	  }
	  return obj;
	}
	
	// extracts and composes styles from a rule into a 'mega' style
	// with sub styles keyed by media query + 'path'
	function extractStyles() {
	  for (var _len3 = arguments.length, rules = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    rules[_key3] = arguments[_key3];
	  }
	
	  rules = flatten(rules);
	  var exprs = {};
	  // converts {[data-css-<id>]} to the backing rule 
	  rules = rules.map(function (x) {
	    return x.type === 'style' || !x.type ? deconstruct(x.style || x) : x;
	  });
	  rules = flatten(rules);
	  rules.forEach(function (rule) {
	    // avoid possible label. todo - cleaner 
	    if (typeof rule === 'string') {
	      return;
	    }
	    if (isLikeRule(rule)) {
	      rule = registered[idFor(rule)];
	    }
	    switch (rule.type) {
	      case 'raw':
	      case 'font-face':
	      case 'keyframes':
	        throw new Error('not implemented');
	
	      case 'merge':
	        return deepMergeStyles(exprs, extractStyles(rule.rules));
	
	      case 'pseudo':
	        if (rule.selector === ':hover' && exprs._ && exprs._['%%%:active'] && !exprs._['%%%:hover']) {
	          console.warn(':active must come after :hover to work correctly'); //eslint-disable-line no-console
	        }
	        return deepMergeStyles(exprs, { _: _defineProperty({}, '%%%' + rule.selector, rule.style) });
	      case 'select':
	        return deepMergeStyles(exprs, { _: _defineProperty({}, '^^^' + rule.selector, rule.style) });
	      case 'parent':
	        return deepMergeStyles(exprs, { _: _defineProperty({}, '***' + rule.selector, rule.style) });
	
	      case 'style':
	        return deepMergeStyles(exprs, { _: { _: rule.style } });
	
	      case 'media':
	        return deepMergeStyles(exprs, _defineProperty({}, rule.expr, extractStyles(rule.rules)._));
	
	      default:
	        return deepMergeStyles(exprs, { _: { _: rule } });
	    }
	  });
	  return exprs;
	}
	
	// extract label from a rule / style 
	function extractLabel(rule) {
	  if (isLikeRule(rule)) {
	    rule = registered[idFor(rule)];
	  }
	  return rule.label || '{:}';
	}
	
	// given an id / 'path', generate a css selector 
	function selector(id, path) {
	  if (path === '_') return '.css-' + id + ',[data-css-' + id + ']';
	
	  if (path.indexOf('%%%') === 0) {
	    var x = '.css-' + id + path.slice(3) + ',[data-css-' + id + ']' + path.slice(3);
	    if (canSimulate) x += ',[data-css-' + id + '][data-simulate-' + simple(path) + '],.css-' + id + '[data-simulate-' + simple(path) + ']';
	    return x;
	  }
	
	  if (path.indexOf('***') === 0) {
	    return path.slice(3).split(',').map(function (x) {
	      return x + ' .css-' + id + ',' + x + ' [data-css-' + id + ']';
	    }).join(',');
	  }
	  if (path.indexOf('^^^') === 0) {
	    return path.slice(3).split(',').map(function (x) {
	      return '.css-' + id + x + ',[data-css-' + id + ']' + x;
	    }).join(',');
	  }
	}
	
	function toCSS(_ref4) {
	  var selector = _ref4.selector;
	  var style = _ref4.style;
	
	  var result = plugins.transform({ selector: selector, style: style });
	  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
	}
	
	function ruleToAst(rule) {
	  var styles = extractStyles(rule);
	  return Object.keys(styles).reduce(function (o, expr) {
	    o[expr] = Object.keys(styles[expr]).map(function (s) {
	      return { selector: selector(rule.id, s), style: styles[expr][s] };
	    });
	    return o;
	  }, {});
	}
	
	function ruleToCSS(spec) {
	  var css = [];
	  var ast = ruleToAst(spec);
	  // plugins here 
	  var _ = ast._;
	
	  var exprs = _objectWithoutProperties(ast, ['_']);
	
	  if (_) {
	    _.map(toCSS).forEach(function (str) {
	      return css.push(str);
	    });
	  }
	  Object.keys(exprs).forEach(function (expr) {
	    css.push('@media ' + expr + '{' + exprs[expr].map(toCSS).join('') + '}');
	  });
	  return css;
	}
	
	// this cache to track which rules have 
	// been inserted into the stylesheet
	var inserted = styleSheet.inserted = {};
	
	// and helpers to insert rules into said styleSheet
	function insert(spec) {
	  if (!inserted[spec.id]) {
	    inserted[spec.id] = true;
	    ruleToCSS(spec).map(function (cssRule) {
	      return styleSheet.insert(cssRule);
	    });
	  }
	}
	
	function insertRule(css) {
	  var spec = {
	    id: hashify(css),
	    css: css,
	    type: 'raw',
	    label: '^'
	  };
	  register(spec);
	  if (!inserted[spec.id]) {
	    styleSheet.insert(spec.css);
	    inserted[spec.id] = true;
	  }
	}
	
	function insertGlobal(selector, style) {
	  return insertRule(selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(style) + '}');
	}
	
	function insertKeyframe(spec) {
	  if (!inserted[spec.id]) {
	    (function () {
	      var inner = Object.keys(spec.keyframes).map(function (kf) {
	        var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
	        return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
	      }).join('');
	
	      ['-webkit-', '-moz-', '-o-', ''].forEach(function (prefix) {
	        return styleSheet.insert('@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}');
	      });
	
	      inserted[spec.id] = true;
	    })();
	  }
	}
	
	function insertFontFace(spec) {
	  if (!inserted[spec.id]) {
	    styleSheet.insert('@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}');
	    inserted[spec.id] = true;
	  }
	}
	
	// rehydrate the insertion cache with ids sent from 
	// renderStatic / renderStaticOptimized 
	function rehydrate(ids) {
	  // load up ids
	  Object.assign(inserted, ids.reduce(function (o, i) {
	    return o[i] = true, o;
	  }, {}));
	  // assume css loaded separately
	}
	
	// todo - perf
	var ruleCache = {};
	function toRule(spec) {
	  register(spec);
	  insert(spec);
	  if (ruleCache[spec.id]) {
	    return ruleCache[spec.id];
	  }
	
	  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
	  Object.defineProperty(ret, 'toString', {
	    enumerable: false, value: function value() {
	      return 'css-' + spec.id;
	    }
	  });
	  ruleCache[spec.id] = ret;
	  return ret;
	}
	
	// clears out the cache and empties the stylesheet
	// best for tests, though there might be some value for SSR. 
	
	function flush() {
	  inserted = styleSheet.inserted = {};
	  registered = {};
	  ruleCache = {};
	  styleSheet.flush();
	  styleSheet.inject();
	}
	
	function find(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    if (fn(arr[i]) === true) {
	      return true;
	    }
	  }
	  return false;
	}
	
	function style(obj) {
	  obj = (0, _clean2.default)(obj);
	
	  return obj ? toRule({
	    id: hashify(obj),
	    type: 'style',
	    style: obj,
	    label: obj.label || '*'
	  }) : {};
	}
	
	// unique feature 
	// when you need to define 'real' css (whatever that may be)
	// https://twitter.com/threepointone/status/756585907877273600
	// https://twitter.com/threepointone/status/756986938033254400
	function select(selector, obj) {
	  if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
	    return style(selector);
	  }
	  obj = (0, _clean2.default)(obj);
	
	  return obj ? toRule({
	    id: hashify(selector, obj),
	    type: 'select',
	    selector: selector,
	    style: obj,
	    label: obj.label || '*'
	  }) : {};
	}
	
	var $ = exports.$ = select; // bringin' jquery back
	
	function parent(selector, obj) {
	  obj = (0, _clean2.default)(obj);
	  return obj ? toRule({
	    id: hashify(selector, obj),
	    type: 'parent',
	    selector: selector,
	    style: obj,
	    label: obj.label || '*'
	  }) : {};
	}
	
	// we define a function to 'merge' styles together.
	// backstory - because of a browser quirk, multiple styles are applied in the order they're 
	// defined in the stylesheet, not in the order of application 
	// in most cases, this won't case an issue UNTIL IT DOES 
	// instead, use merge() to merge styles,
	// with latter styles gaining precedence over former ones 
	
	function merge() {
	  for (var _len4 = arguments.length, rules = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    rules[_key4] = arguments[_key4];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  return rules ? toRule({
	    id: hashify(extractStyles(rules)),
	    type: 'merge',
	    rules: rules,
	    label: '[' + (typeof rules[0] === 'string' ? rules[0] : rules.map(extractLabel).join(' + ')) + ']'
	  }) : {};
	}
	
	var compose = exports.compose = merge;
	
	function media(expr) {
	  for (var _len5 = arguments.length, rules = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	    rules[_key5 - 1] = arguments[_key5];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  return rules ? toRule({
	    id: hashify(expr, extractStyles(rules)),
	    type: 'media',
	    rules: rules,
	    expr: expr,
	    label: '*mq(' + rules.map(extractLabel).join(' + ') + ')'
	  }) : {};
	}
	
	var presets = exports.presets = {
	  mobile: '(min-width: 400px)',
	  phablet: '(min-width: 550px)',
	  tablet: '(min-width: 750px)',
	  desktop: '(min-width: 1000px)',
	  hd: '(min-width: 1200px)'
	};
	
	/**** live media query labels ****/
	
	// simplest implementation -
	// cycle through the cache, and for every media query
	// find matching elements and update the label 
	function updateMediaQueryLabels() {
	  Object.keys(registered).forEach(function (id) {
	    var expr = registered[id].expr;
	
	    if (expr && hasLabels && window.matchMedia) {
	      (function () {
	        var els = document.querySelectorAll('[data-css-' + id + ']');
	        var match = window.matchMedia(expr).matches ? '✓' : '✕';
	        var regex = /^(✓|✕|\*)mq/;
	        [].concat(_toConsumableArray(els)).forEach(function (el) {
	          return el.setAttribute('data-css-' + id, el.getAttribute('data-css-' + id).replace(regex, match + 'mq'));
	        });
	      })();
	    }
	  });
	}
	
	// saves a reference to the loop we trigger 
	var interval = void 0;
	
	function trackMediaQueryLabels() {
	  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
	
	  if (bool) {
	    if (interval) {
	      console.warn('already tracking labels, call trackMediaQueryLabels(false) to stop'); // eslint-disable-line no-console 
	      return;
	    }
	    interval = setInterval(function () {
	      return updateMediaQueryLabels();
	    }, period);
	  } else {
	    clearInterval(interval);
	    interval = null;
	  }
	}
	
	// in dev mode, start this up immediately 
	if (isDev && isBrowser) {
	  trackMediaQueryLabels(true);
	  // todo - make sure hot loading isn't broken
	  // todo - clearInterval on browser close  
	}
	
	function pseudo(selector, obj) {
	  obj = (0, _clean2.default)(obj);
	  return obj ? toRule({
	    id: hashify(selector, obj),
	    type: 'pseudo',
	    selector: selector,
	    style: obj,
	    label: obj.label || ':*'
	  }) : {};
	}
	
	// allllll the pseudoclasses
	
	function active(x) {
	  return pseudo(':active', x);
	}
	
	function any(x) {
	  return pseudo(':any', x);
	}
	
	function checked(x) {
	  return pseudo(':checked', x);
	}
	
	function disabled(x) {
	  return pseudo(':disabled', x);
	}
	
	function empty(x) {
	  return pseudo(':empty', x);
	}
	
	function enabled(x) {
	  return pseudo(':enabled', x);
	}
	
	function _default(x) {
	  return pseudo(':default', x); // note '_default' name  
	}
	
	function first(x) {
	  return pseudo(':first', x);
	}
	
	function firstChild(x) {
	  return pseudo(':first-child', x);
	}
	
	function firstOfType(x) {
	  return pseudo(':first-of-type', x);
	}
	
	function fullscreen(x) {
	  return pseudo(':fullscreen', x);
	}
	
	function focus(x) {
	  return pseudo(':focus', x);
	}
	
	function hover(x) {
	  return pseudo(':hover', x);
	}
	
	function indeterminate(x) {
	  return pseudo(':indeterminate', x);
	}
	
	function inRange(x) {
	  return pseudo(':in-range', x);
	}
	
	function invalid(x) {
	  return pseudo(':invalid', x);
	}
	
	function lastChild(x) {
	  return pseudo(':last-child', x);
	}
	
	function lastOfType(x) {
	  return pseudo(':last-of-type', x);
	}
	
	function left(x) {
	  return pseudo(':left', x);
	}
	
	function link(x) {
	  return pseudo(':link', x);
	}
	
	function onlyChild(x) {
	  return pseudo(':only-child', x);
	}
	
	function onlyOfType(x) {
	  return pseudo(':only-of-type', x);
	}
	
	function optional(x) {
	  return pseudo(':optional', x);
	}
	
	function outOfRange(x) {
	  return pseudo(':out-of-range', x);
	}
	
	function readOnly(x) {
	  return pseudo(':read-only', x);
	}
	
	function readWrite(x) {
	  return pseudo(':read-write', x);
	}
	
	function required(x) {
	  return pseudo(':required', x);
	}
	
	function right(x) {
	  return pseudo(':right', x);
	}
	
	function root(x) {
	  return pseudo(':root', x);
	}
	
	function scope(x) {
	  return pseudo(':scope', x);
	}
	
	function target(x) {
	  return pseudo(':target', x);
	}
	
	function valid(x) {
	  return pseudo(':valid', x);
	}
	
	function visited(x) {
	  return pseudo(':visited', x);
	}
	
	// parameterized pseudoclasses
	function dir(p, x) {
	  return pseudo(':dir(' + p + ')', x);
	}
	function lang(p, x) {
	  return pseudo(':lang(' + p + ')', x);
	}
	function not(p, x) {
	  // should this be a plugin?
	  var selector = p.split(',').map(function (x) {
	    return x.trim();
	  }).map(function (x) {
	    return ':not(' + x + ')';
	  });
	  if (selector.length === 1) {
	    return pseudo(':not(' + p + ')', x);
	  }
	  return select(selector.join(''), x);
	}
	function nthChild(p, x) {
	  return pseudo(':nth-child(' + p + ')', x);
	}
	function nthLastChild(p, x) {
	  return pseudo(':nth-last-child(' + p + ')', x);
	}
	function nthLastOfType(p, x) {
	  return pseudo(':nth-last-of-type(' + p + ')', x);
	}
	function nthOfType(p, x) {
	  return pseudo(':nth-of-type(' + p + ')', x);
	}
	
	// pseudoelements
	function after(x) {
	  return pseudo('::after', x);
	}
	function before(x) {
	  return pseudo('::before', x);
	}
	function firstLetter(x) {
	  return pseudo('::first-letter', x);
	}
	function firstLine(x) {
	  return pseudo('::first-line', x);
	}
	function selection(x) {
	  return pseudo('::selection', x);
	}
	function backdrop(x) {
	  return pseudo('::backdrop', x);
	}
	function placeholder(x) {
	  // https://github.com/threepointone/glamor/issues/14
	  return merge(pseudo('::placeholder', x), pseudo('::-webkit-input-placeholder', x), pseudo('::-moz-placeholder', x), pseudo('::-ms-input-placeholder', x));
	}
	
	// we can add keyframes in a similar manner, but still generating a unique name 
	// for including in styles. this gives us modularity, but still a natural api 
	function keyframes(name, kfs) {
	  if (!kfs) {
	    kfs = name, name = 'animation';
	  }
	
	  // do not ignore empty keyframe definitions for now.
	  kfs = (0, _clean2.default)(kfs) || {};
	  var spec = {
	    id: hashify(name, kfs),
	    type: 'keyframes',
	    name: name,
	    keyframes: kfs
	  };
	  register(spec);
	  insertKeyframe(spec);
	  return name + '_' + spec.id;
	}
	
	// we don't go all out for fonts as much, giving a simple font loading strategy 
	// use a fancier lib if you need moar power
	function fontFace(font) {
	  font = (0, _clean2.default)(font);
	  var spec = {
	    id: hashify(font),
	    type: 'font-face',
	    font: font
	  };
	  register(spec);
	  insertFontFace(spec);
	
	  return font.fontFamily;
	}
	
	/*** helpers for web components ***/
	// https://github.com/threepointone/glamor/issues/16
	
	function cssFor() {
	  for (var _len6 = arguments.length, rules = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    rules[_key6] = arguments[_key6];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  return rules ? flatten(rules.map(function (r) {
	    return registered[idFor(r)];
	  }).map(ruleToCSS)).join('') : '';
	}
	
	function attribsFor() {
	  for (var _len7 = arguments.length, rules = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	    rules[_key7] = arguments[_key7];
	  }
	
	  rules = (0, _clean2.default)(rules);
	  var htmlAttributes = rules ? rules.map(function (rule) {
	    idFor(rule); // throwaway check for rule 
	    var key = Object.keys(rule)[0],
	        value = rule[key];
	    return key + '="' + (value || '') + '"';
	  }).join(' ') : '';
	
	  return htmlAttributes;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* 
	
	high performance StyleSheet for css-in-js systems 
	
	- uses multiple style tags behind the scenes for millions of rules 
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side 
	
	
	// usage
	
	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()
	
	styleSheet.inject() 
	- 'injects' the stylesheet into the page (or into memory if on server)
	
	styleSheet.insert('#box { border: 1px solid red; }') 
	- appends a css rule into the stylesheet 
	
	styleSheet.flush() 
	- empties the stylesheet of all its contents
	
	
	*/
	
	function last() {
	  return this[this.length - 1];
	}
	
	function sheetForTag(tag) {
	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      return document.styleSheets[i];
	    }
	  }
	}
	
	var isBrowser = typeof window !== 'undefined';
	var isDev = function (x) {
	  return x === 'development' || !x;
	}(process.env.NODE_ENV);
	var isTest = process.env.NODE_ENV === 'test';
	
	var oldIE = function () {
	  if (isBrowser) {
	    var div = document.createElement('div');
	    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
	    return div.getElementsByTagName('i').length === 1;
	  }
	}();
	
	function makeStyleTag() {
	  var tag = document.createElement('style');
	  tag.type = 'text/css';
	  tag.appendChild(document.createTextNode(''));
	  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
	  return tag;
	}
	
	var StyleSheet = exports.StyleSheet = function () {
	  function StyleSheet() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _ref$speedy = _ref.speedy;
	    var speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy;
	    var _ref$maxLength = _ref.maxLength;
	    var maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;
	
	    _classCallCheck(this, StyleSheet);
	
	    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
	    this.sheet = undefined;
	    this.tags = [];
	    this.maxLength = maxLength;
	    this.ctr = 0;
	  }
	
	  _createClass(StyleSheet, [{
	    key: 'inject',
	    value: function inject() {
	      var _this = this;
	
	      if (this.injected) {
	        throw new Error('already injected stylesheet!');
	      }
	      if (isBrowser) {
	        // this section is just weird alchemy I found online off many sources 
	        this.tags[0] = makeStyleTag();
	        // this weirdness brought to you by firefox 
	        this.sheet = sheetForTag(this.tags[0]);
	      } else {
	        // server side 'polyfill'. just enough behavior to be useful.
	        this.sheet = {
	          cssRules: [],
	          insertRule: function insertRule(rule) {
	            // enough 'spec compliance' to be able to extract the rules later  
	            // in other words, just the cssText field 
	            _this.sheet.cssRules.push({ cssText: rule });
	          }
	        };
	      }
	      this.injected = true;
	    }
	  }, {
	    key: 'speedy',
	    value: function speedy(bool) {
	      if (this.ctr !== 0) {
	        throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
	      }
	      this.isSpeedy = !!bool;
	    }
	  }, {
	    key: '_insert',
	    value: function _insert(rule) {
	      // this weirdness for perf, and chrome's weird bug 
	      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	      try {
	        this.sheet.insertRule(rule, this.sheet.cssRules.length); // todo - correct index here     
	      } catch (e) {
	        if (isDev) {
	          // might need beter dx for this 
	          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
	        }
	      }
	    }
	  }, {
	    key: 'insert',
	    value: function insert(rule) {
	
	      if (isBrowser) {
	        var _context;
	
	        // this is the ultrafast version, works across browsers 
	        if (this.isSpeedy && this.sheet.insertRule) {
	          this._insert(rule);
	        }
	        // more browser weirdness. I don't even know    
	        else if (this.tags.length > 0 && (_context = this.tags, last).call(_context).styleSheet) {
	            var _context2;
	
	            (_context2 = this.tags, last).call(_context2).styleSheet.cssText += rule;
	          } else {
	            var _context3;
	
	            (_context3 = this.tags, last).call(_context3).appendChild(document.createTextNode(rule));
	
	            if (!this.isSpeedy) {
	              var _context4;
	
	              // sighhh
	              this.sheet = sheetForTag((_context4 = this.tags, last).call(_context4));
	            }
	          }
	      } else {
	        // server side is pretty simple         
	        this.sheet.insertRule(rule);
	      }
	
	      this.ctr++;
	      if (isBrowser && this.ctr % this.maxLength === 0) {
	        var _context5;
	
	        this.tags.push(makeStyleTag());
	        this.sheet = sheetForTag((_context5 = this.tags, last).call(_context5));
	      }
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      if (isBrowser) {
	        this.tags.forEach(function (tag) {
	          return tag.parentNode.removeChild(tag);
	        });
	        this.tags = [];
	        this.sheet = null;
	        this.ctr = 0;
	        // todo - look for remnants in document.styleSheets
	      } else {
	        // simpler on server 
	        this.sheet.cssRules = [];
	      }
	      this.injected = false;
	    }
	  }, {
	    key: 'rules',
	    value: function rules() {
	      if (!isBrowser) {
	        return this.sheet.cssRules;
	      }
	      var arr = [];
	      this.tags.forEach(function (tag) {
	        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
	      });
	      return arr;
	    }
	  }]);
	
	  return StyleSheet;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (f) {
	  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	    module.exports = f();
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    var g;if (typeof window !== "undefined") {
	      g = window;
	    } else if (typeof global !== "undefined") {
	      g = global;
	    } else if (typeof self !== "undefined") {
	      g = self;
	    } else {
	      g = this;
	    }g.CSSOps = f();
	  }
	})(function () {
	  var define, module, exports;return function e(t, n, r) {
	    function s(o, u) {
	      if (!n[o]) {
	        if (!t[o]) {
	          var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	          var n = t[o][1][e];return s(n ? n : e);
	        }, l, l.exports, e, t, n, r);
	      }return n[o].exports;
	    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	      s(r[o]);
	    }return s;
	  }({ 1: [function (_dereq_, module, exports) {
	      module.exports = _dereq_("react/lib/CSSPropertyOperations");
	    }, { "react/lib/CSSPropertyOperations": 14 }], 2: [function (_dereq_, module, exports) {
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       */
	
	      'use strict';
	
	      var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	      /**
	       * Simple, lightweight module assisting with the detection and context of
	       * Worker. Helps avoid circular dependencies and allows code to reason about
	       * whether or not they are in a Worker, even if they never include the main
	       * `ReactWorker` dependency.
	       */
	      var ExecutionEnvironment = {
	
	        canUseDOM: canUseDOM,
	
	        canUseWorkers: typeof Worker !== 'undefined',
	
	        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	        canUseViewport: canUseDOM && !!window.screen,
	
	        isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	      };
	
	      module.exports = ExecutionEnvironment;
	    }, {}], 3: [function (_dereq_, module, exports) {
	      "use strict";
	
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @typechecks
	       */
	
	      var _hyphenPattern = /-(.)/g;
	
	      /**
	       * Camelcases a hyphenated string, for example:
	       *
	       *   > camelize('background-color')
	       *   < "backgroundColor"
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function camelize(string) {
	        return string.replace(_hyphenPattern, function (_, character) {
	          return character.toUpperCase();
	        });
	      }
	
	      module.exports = camelize;
	    }, {}], 4: [function (_dereq_, module, exports) {
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @typechecks
	       */
	
	      'use strict';
	
	      var camelize = _dereq_('./camelize');
	
	      var msPattern = /^-ms-/;
	
	      /**
	       * Camelcases a hyphenated CSS property name, for example:
	       *
	       *   > camelizeStyleName('background-color')
	       *   < "backgroundColor"
	       *   > camelizeStyleName('-moz-transition')
	       *   < "MozTransition"
	       *   > camelizeStyleName('-ms-transition')
	       *   < "msTransition"
	       *
	       * As Andi Smith suggests
	       * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	       * is converted to lowercase `ms`.
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function camelizeStyleName(string) {
	        return camelize(string.replace(msPattern, 'ms-'));
	      }
	
	      module.exports = camelizeStyleName;
	    }, { "./camelize": 3 }], 5: [function (_dereq_, module, exports) {
	      "use strict";
	
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * 
	       */
	
	      function makeEmptyFunction(arg) {
	        return function () {
	          return arg;
	        };
	      }
	
	      /**
	       * This function accepts and discards inputs; it has no side effects. This is
	       * primarily useful idiomatically for overridable function endpoints which
	       * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	       */
	      var emptyFunction = function emptyFunction() {};
	
	      emptyFunction.thatReturns = makeEmptyFunction;
	      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	      emptyFunction.thatReturnsThis = function () {
	        return this;
	      };
	      emptyFunction.thatReturnsArgument = function (arg) {
	        return arg;
	      };
	
	      module.exports = emptyFunction;
	    }, {}], 6: [function (_dereq_, module, exports) {
	      'use strict';
	
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @typechecks
	       */
	
	      var _uppercasePattern = /([A-Z])/g;
	
	      /**
	       * Hyphenates a camelcased string, for example:
	       *
	       *   > hyphenate('backgroundColor')
	       *   < "background-color"
	       *
	       * For CSS style names, use `hyphenateStyleName` instead which works properly
	       * with all vendor prefixes, including `ms`.
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function hyphenate(string) {
	        return string.replace(_uppercasePattern, '-$1').toLowerCase();
	      }
	
	      module.exports = hyphenate;
	    }, {}], 7: [function (_dereq_, module, exports) {
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @typechecks
	       */
	
	      'use strict';
	
	      var hyphenate = _dereq_('./hyphenate');
	
	      var msPattern = /^ms-/;
	
	      /**
	       * Hyphenates a camelcased CSS property name, for example:
	       *
	       *   > hyphenateStyleName('backgroundColor')
	       *   < "background-color"
	       *   > hyphenateStyleName('MozTransition')
	       *   < "-moz-transition"
	       *   > hyphenateStyleName('msTransition')
	       *   < "-ms-transition"
	       *
	       * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	       * is converted to `-ms-`.
	       *
	       * @param {string} string
	       * @return {string}
	       */
	      function hyphenateStyleName(string) {
	        return hyphenate(string).replace(msPattern, '-ms-');
	      }
	
	      module.exports = hyphenateStyleName;
	    }, { "./hyphenate": 6 }], 8: [function (_dereq_, module, exports) {
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       */
	
	      'use strict';
	
	      /**
	       * Use invariant() to assert state which your program assumes to be true.
	       *
	       * Provide sprintf-style format (only %s is supported) and arguments
	       * to provide information about what broke and what you were
	       * expecting.
	       *
	       * The invariant message will be stripped in production, but the invariant
	       * will remain to ensure logic does not differ in production.
	       */
	
	      function invariant(condition, format, a, b, c, d, e, f) {
	        if (false) {
	          if (format === undefined) {
	            throw new Error('invariant requires an error message argument');
	          }
	        }
	
	        if (!condition) {
	          var error;
	          if (format === undefined) {
	            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	          } else {
	            var args = [a, b, c, d, e, f];
	            var argIndex = 0;
	            error = new Error(format.replace(/%s/g, function () {
	              return args[argIndex++];
	            }));
	            error.name = 'Invariant Violation';
	          }
	
	          error.framesToPop = 1; // we don't care about invariant's own frame
	          throw error;
	        }
	      }
	
	      module.exports = invariant;
	    }, {}], 9: [function (_dereq_, module, exports) {
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * 
	       * @typechecks static-only
	       */
	
	      'use strict';
	
	      /**
	       * Memoizes the return value of a function that accepts one string argument.
	       */
	
	      function memoizeStringOnly(callback) {
	        var cache = {};
	        return function (string) {
	          if (!cache.hasOwnProperty(string)) {
	            cache[string] = callback.call(this, string);
	          }
	          return cache[string];
	        };
	      }
	
	      module.exports = memoizeStringOnly;
	    }, {}], 10: [function (_dereq_, module, exports) {
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @typechecks
	       */
	
	      'use strict';
	
	      var ExecutionEnvironment = _dereq_('./ExecutionEnvironment');
	
	      var performance;
	
	      if (ExecutionEnvironment.canUseDOM) {
	        performance = window.performance || window.msPerformance || window.webkitPerformance;
	      }
	
	      module.exports = performance || {};
	    }, { "./ExecutionEnvironment": 2 }], 11: [function (_dereq_, module, exports) {
	      'use strict';
	
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @typechecks
	       */
	
	      var performance = _dereq_('./performance');
	
	      var performanceNow;
	
	      /**
	       * Detect if we can use `window.performance.now()` and gracefully fallback to
	       * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	       * because of Facebook's testing infrastructure.
	       */
	      if (performance.now) {
	        performanceNow = function performanceNow() {
	          return performance.now();
	        };
	      } else {
	        performanceNow = function performanceNow() {
	          return Date.now();
	        };
	      }
	
	      module.exports = performanceNow;
	    }, { "./performance": 10 }], 12: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2014-2015, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       */
	
	      'use strict';
	
	      var emptyFunction = _dereq_('./emptyFunction');
	
	      /**
	       * Similar to invariant but only logs a warning if the condition is not met.
	       * This can be used to log issues in development environments in critical
	       * paths. Removing the logging code for production environments will keep the
	       * same logic and follow the same code paths.
	       */
	
	      var warning = emptyFunction;
	
	      if (false) {
	        (function () {
	          var printWarning = function printWarning(format) {
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	              args[_key - 1] = arguments[_key];
	            }
	
	            var argIndex = 0;
	            var message = 'Warning: ' + format.replace(/%s/g, function () {
	              return args[argIndex++];
	            });
	            if (typeof console !== 'undefined') {
	              console.error(message);
	            }
	            try {
	              // --- Welcome to debugging React ---
	              // This error was thrown as a convenience so that you can use this stack
	              // to find the callsite that caused this warning to fire.
	              throw new Error(message);
	            } catch (x) {}
	          };
	
	          warning = function warning(condition, format) {
	            if (format === undefined) {
	              throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	            }
	
	            if (format.indexOf('Failed Composite propType: ') === 0) {
	              return; // Ignore CompositeComponent proptype check.
	            }
	
	            if (!condition) {
	              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	                args[_key2 - 2] = arguments[_key2];
	              }
	
	              printWarning.apply(undefined, [format].concat(args));
	            }
	          };
	        })();
	      }
	
	      module.exports = warning;
	    }, { "./emptyFunction": 5 }], 13: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule CSSProperty
	       */
	
	      'use strict';
	
	      /**
	       * CSS properties which accept numbers but are not in units of "px".
	       */
	
	      var isUnitlessNumber = {
	        animationIterationCount: true,
	        borderImageOutset: true,
	        borderImageSlice: true,
	        borderImageWidth: true,
	        boxFlex: true,
	        boxFlexGroup: true,
	        boxOrdinalGroup: true,
	        columnCount: true,
	        flex: true,
	        flexGrow: true,
	        flexPositive: true,
	        flexShrink: true,
	        flexNegative: true,
	        flexOrder: true,
	        gridRow: true,
	        gridColumn: true,
	        fontWeight: true,
	        lineClamp: true,
	        lineHeight: true,
	        opacity: true,
	        order: true,
	        orphans: true,
	        tabSize: true,
	        widows: true,
	        zIndex: true,
	        zoom: true,
	
	        // SVG-related properties
	        fillOpacity: true,
	        floodOpacity: true,
	        stopOpacity: true,
	        strokeDasharray: true,
	        strokeDashoffset: true,
	        strokeMiterlimit: true,
	        strokeOpacity: true,
	        strokeWidth: true
	      };
	
	      /**
	       * @param {string} prefix vendor-specific prefix, eg: Webkit
	       * @param {string} key style name, eg: transitionDuration
	       * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	       * WebkitTransitionDuration
	       */
	      function prefixKey(prefix, key) {
	        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	      }
	
	      /**
	       * Support style names that may come passed in prefixed by adding permutations
	       * of vendor prefixes.
	       */
	      var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	      // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	      // infinite loop, because it iterates over the newly added props too.
	      Object.keys(isUnitlessNumber).forEach(function (prop) {
	        prefixes.forEach(function (prefix) {
	          isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	        });
	      });
	
	      /**
	       * Most style properties can be unset by doing .style[prop] = '' but IE8
	       * doesn't like doing that with shorthand properties so for the properties that
	       * IE8 breaks on, which are listed here, we instead unset each of the
	       * individual properties. See http://bugs.jquery.com/ticket/12385.
	       * The 4-value 'clock' properties like margin, padding, border-width seem to
	       * behave without any problems. Curiously, list-style works too without any
	       * special prodding.
	       */
	      var shorthandPropertyExpansions = {
	        background: {
	          backgroundAttachment: true,
	          backgroundColor: true,
	          backgroundImage: true,
	          backgroundPositionX: true,
	          backgroundPositionY: true,
	          backgroundRepeat: true
	        },
	        backgroundPosition: {
	          backgroundPositionX: true,
	          backgroundPositionY: true
	        },
	        border: {
	          borderWidth: true,
	          borderStyle: true,
	          borderColor: true
	        },
	        borderBottom: {
	          borderBottomWidth: true,
	          borderBottomStyle: true,
	          borderBottomColor: true
	        },
	        borderLeft: {
	          borderLeftWidth: true,
	          borderLeftStyle: true,
	          borderLeftColor: true
	        },
	        borderRight: {
	          borderRightWidth: true,
	          borderRightStyle: true,
	          borderRightColor: true
	        },
	        borderTop: {
	          borderTopWidth: true,
	          borderTopStyle: true,
	          borderTopColor: true
	        },
	        font: {
	          fontStyle: true,
	          fontVariant: true,
	          fontWeight: true,
	          fontSize: true,
	          lineHeight: true,
	          fontFamily: true
	        },
	        outline: {
	          outlineWidth: true,
	          outlineStyle: true,
	          outlineColor: true
	        }
	      };
	
	      var CSSProperty = {
	        isUnitlessNumber: isUnitlessNumber,
	        shorthandPropertyExpansions: shorthandPropertyExpansions
	      };
	
	      module.exports = CSSProperty;
	    }, {}], 14: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule CSSPropertyOperations
	       */
	
	      'use strict';
	
	      var CSSProperty = _dereq_('./CSSProperty');
	      var ExecutionEnvironment = _dereq_('fbjs/lib/ExecutionEnvironment');
	      var ReactInstrumentation = _dereq_('./ReactInstrumentation');
	
	      var camelizeStyleName = _dereq_('fbjs/lib/camelizeStyleName');
	      var dangerousStyleValue = _dereq_('./dangerousStyleValue');
	      var hyphenateStyleName = _dereq_('fbjs/lib/hyphenateStyleName');
	      var memoizeStringOnly = _dereq_('fbjs/lib/memoizeStringOnly');
	      var warning = _dereq_('fbjs/lib/warning');
	
	      var processStyleName = memoizeStringOnly(function (styleName) {
	        return hyphenateStyleName(styleName);
	      });
	
	      var hasShorthandPropertyBug = false;
	      var styleFloatAccessor = 'cssFloat';
	      if (ExecutionEnvironment.canUseDOM) {
	        var tempStyle = document.createElement('div').style;
	        try {
	          // IE8 throws "Invalid argument." if resetting shorthand style properties.
	          tempStyle.font = '';
	        } catch (e) {
	          hasShorthandPropertyBug = true;
	        }
	        // IE8 only supports accessing cssFloat (standard) as styleFloat
	        if (document.documentElement.style.cssFloat === undefined) {
	          styleFloatAccessor = 'styleFloat';
	        }
	      }
	
	      if (false) {
	        // 'msTransform' is correct, but the other prefixes should be capitalized
	        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
	        // style values shouldn't contain a semicolon
	        var badStyleValueWithSemicolonPattern = /;\s*$/;
	
	        var warnedStyleNames = {};
	        var warnedStyleValues = {};
	        var warnedForNaNValue = false;
	
	        var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
	          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	            return;
	          }
	
	          warnedStyleNames[name] = true;
	          "production" !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
	        };
	
	        var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
	          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	            return;
	          }
	
	          warnedStyleNames[name] = true;
	          "production" !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
	        };
	
	        var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
	          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	            return;
	          }
	
	          warnedStyleValues[value] = true;
	          "production" !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
	        };
	
	        var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
	          if (warnedForNaNValue) {
	            return;
	          }
	
	          warnedForNaNValue = true;
	          "production" !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
	        };
	
	        var checkRenderMessage = function checkRenderMessage(owner) {
	          if (owner) {
	            var name = owner.getName();
	            if (name) {
	              return ' Check the render method of `' + name + '`.';
	            }
	          }
	          return '';
	        };
	
	        /**
	         * @param {string} name
	         * @param {*} value
	         * @param {ReactDOMComponent} component
	         */
	        var warnValidStyle = function warnValidStyle(name, value, component) {
	          var owner;
	          if (component) {
	            owner = component._currentElement._owner;
	          }
	          if (name.indexOf('-') > -1) {
	            warnHyphenatedStyleName(name, owner);
	          } else if (badVendoredStyleNamePattern.test(name)) {
	            warnBadVendoredStyleName(name, owner);
	          } else if (badStyleValueWithSemicolonPattern.test(value)) {
	            warnStyleValueWithSemicolon(name, value, owner);
	          }
	
	          if (typeof value === 'number' && isNaN(value)) {
	            warnStyleValueIsNaN(name, value, owner);
	          }
	        };
	      }
	
	      /**
	       * Operations for dealing with CSS properties.
	       */
	      var CSSPropertyOperations = {
	
	        /**
	         * Serializes a mapping of style properties for use as inline styles:
	         *
	         *   > createMarkupForStyles({width: '200px', height: 0})
	         *   "width:200px;height:0;"
	         *
	         * Undefined values are ignored so that declarative programming is easier.
	         * The result should be HTML-escaped before insertion into the DOM.
	         *
	         * @param {object} styles
	         * @param {ReactDOMComponent} component
	         * @return {?string}
	         */
	        createMarkupForStyles: function createMarkupForStyles(styles, component) {
	          var serialized = '';
	          for (var styleName in styles) {
	            if (!styles.hasOwnProperty(styleName)) {
	              continue;
	            }
	            var styleValue = styles[styleName];
	            if (false) {
	              warnValidStyle(styleName, styleValue, component);
	            }
	            if (styleValue != null) {
	              serialized += processStyleName(styleName) + ':';
	              serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
	            }
	          }
	          return serialized || null;
	        },
	
	        /**
	         * Sets the value for multiple styles on a node.  If a value is specified as
	         * '' (empty string), the corresponding style property will be unset.
	         *
	         * @param {DOMElement} node
	         * @param {object} styles
	         * @param {ReactDOMComponent} component
	         */
	        setValueForStyles: function setValueForStyles(node, styles, component) {
	          if (false) {
	            ReactInstrumentation.debugTool.onHostOperation(component._debugID, 'update styles', styles);
	          }
	
	          var style = node.style;
	          for (var styleName in styles) {
	            if (!styles.hasOwnProperty(styleName)) {
	              continue;
	            }
	            if (false) {
	              warnValidStyle(styleName, styles[styleName], component);
	            }
	            var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
	            if (styleName === 'float' || styleName === 'cssFloat') {
	              styleName = styleFloatAccessor;
	            }
	            if (styleValue) {
	              style[styleName] = styleValue;
	            } else {
	              var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	              if (expansion) {
	                // Shorthand property that IE8 won't like unsetting, so unset each
	                // component to placate it
	                for (var individualStyleName in expansion) {
	                  style[individualStyleName] = '';
	                }
	              } else {
	                style[styleName] = '';
	              }
	            }
	          }
	        }
	
	      };
	
	      module.exports = CSSPropertyOperations;
	    }, { "./CSSProperty": 13, "./ReactInstrumentation": 20, "./dangerousStyleValue": 22, "fbjs/lib/ExecutionEnvironment": 2, "fbjs/lib/camelizeStyleName": 4, "fbjs/lib/hyphenateStyleName": 7, "fbjs/lib/memoizeStringOnly": 9, "fbjs/lib/warning": 12 }], 15: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule ReactChildrenMutationWarningHook
	       */
	
	      'use strict';
	
	      var ReactComponentTreeHook = _dereq_('./ReactComponentTreeHook');
	
	      var warning = _dereq_('fbjs/lib/warning');
	
	      function handleElement(debugID, element) {
	        if (element == null) {
	          return;
	        }
	        if (element._shadowChildren === undefined) {
	          return;
	        }
	        if (element._shadowChildren === element.props.children) {
	          return;
	        }
	        var isMutated = false;
	        if (Array.isArray(element._shadowChildren)) {
	          if (element._shadowChildren.length === element.props.children.length) {
	            for (var i = 0; i < element._shadowChildren.length; i++) {
	              if (element._shadowChildren[i] !== element.props.children[i]) {
	                isMutated = true;
	              }
	            }
	          } else {
	            isMutated = true;
	          }
	        }
	        if (!Array.isArray(element._shadowChildren) || isMutated) {
	           false ? warning(false, 'Component\'s children should not be mutated.%s', ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	        }
	      }
	
	      var ReactChildrenMutationWarningHook = {
	        onMountComponent: function onMountComponent(debugID) {
	          handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
	        },
	        onUpdateComponent: function onUpdateComponent(debugID) {
	          handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
	        }
	      };
	
	      module.exports = ReactChildrenMutationWarningHook;
	    }, { "./ReactComponentTreeHook": 16, "fbjs/lib/warning": 12 }], 16: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2016-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule ReactComponentTreeHook
	       */
	
	      'use strict';
	
	      var _prodInvariant = _dereq_('./reactProdInvariant');
	
	      var ReactCurrentOwner = _dereq_('./ReactCurrentOwner');
	
	      var invariant = _dereq_('fbjs/lib/invariant');
	      var warning = _dereq_('fbjs/lib/warning');
	
	      function isNative(fn) {
	        // Based on isNative() from Lodash
	        var funcToString = Function.prototype.toString;
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var reIsNative = RegExp('^' + funcToString
	        // Take an example native function source for comparison
	        .call(hasOwnProperty)
	        // Strip regex characters so we can use it for regex
	        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	        // Remove hasOwnProperty from the template to make it generic
	        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	        try {
	          var source = funcToString.call(fn);
	          return reIsNative.test(source);
	        } catch (err) {
	          return false;
	        }
	      }
	
	      var canUseCollections =
	      // Array.from
	      typeof Array.from === 'function' &&
	      // Map
	      typeof Map === 'function' && isNative(Map) &&
	      // Map.prototype.keys
	      Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	      // Set
	      typeof Set === 'function' && isNative(Set) &&
	      // Set.prototype.keys
	      Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
	
	      var itemMap;
	      var rootIDSet;
	
	      var itemByKey;
	      var rootByKey;
	
	      if (canUseCollections) {
	        itemMap = new Map();
	        rootIDSet = new Set();
	      } else {
	        itemByKey = {};
	        rootByKey = {};
	      }
	
	      var unmountedIDs = [];
	
	      // Use non-numeric keys to prevent V8 performance issues:
	      // https://github.com/facebook/react/pull/7232
	      function getKeyFromID(id) {
	        return '.' + id;
	      }
	      function getIDFromKey(key) {
	        return parseInt(key.substr(1), 10);
	      }
	
	      function get(id) {
	        if (canUseCollections) {
	          return itemMap.get(id);
	        } else {
	          var key = getKeyFromID(id);
	          return itemByKey[key];
	        }
	      }
	
	      function remove(id) {
	        if (canUseCollections) {
	          itemMap['delete'](id);
	        } else {
	          var key = getKeyFromID(id);
	          delete itemByKey[key];
	        }
	      }
	
	      function create(id, element, parentID) {
	        var item = {
	          element: element,
	          parentID: parentID,
	          text: null,
	          childIDs: [],
	          isMounted: false,
	          updateCount: 0
	        };
	
	        if (canUseCollections) {
	          itemMap.set(id, item);
	        } else {
	          var key = getKeyFromID(id);
	          itemByKey[key] = item;
	        }
	      }
	
	      function addRoot(id) {
	        if (canUseCollections) {
	          rootIDSet.add(id);
	        } else {
	          var key = getKeyFromID(id);
	          rootByKey[key] = true;
	        }
	      }
	
	      function removeRoot(id) {
	        if (canUseCollections) {
	          rootIDSet['delete'](id);
	        } else {
	          var key = getKeyFromID(id);
	          delete rootByKey[key];
	        }
	      }
	
	      function getRegisteredIDs() {
	        if (canUseCollections) {
	          return Array.from(itemMap.keys());
	        } else {
	          return Object.keys(itemByKey).map(getIDFromKey);
	        }
	      }
	
	      function getRootIDs() {
	        if (canUseCollections) {
	          return Array.from(rootIDSet.keys());
	        } else {
	          return Object.keys(rootByKey).map(getIDFromKey);
	        }
	      }
	
	      function purgeDeep(id) {
	        var item = get(id);
	        if (item) {
	          var childIDs = item.childIDs;
	
	          remove(id);
	          childIDs.forEach(purgeDeep);
	        }
	      }
	
	      function describeComponentFrame(name, source, ownerName) {
	        return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	      }
	
	      function _getDisplayName(element) {
	        if (element == null) {
	          return '#empty';
	        } else if (typeof element === 'string' || typeof element === 'number') {
	          return '#text';
	        } else if (typeof element.type === 'string') {
	          return element.type;
	        } else {
	          return element.type.displayName || element.type.name || 'Unknown';
	        }
	      }
	
	      function describeID(id) {
	        var name = ReactComponentTreeHook.getDisplayName(id);
	        var element = ReactComponentTreeHook.getElement(id);
	        var ownerID = ReactComponentTreeHook.getOwnerID(id);
	        var ownerName;
	        if (ownerID) {
	          ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	        }
	         false ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	        return describeComponentFrame(name, element && element._source, ownerName);
	      }
	
	      var ReactComponentTreeHook = {
	        onSetChildren: function onSetChildren(id, nextChildIDs) {
	          var item = get(id);
	          item.childIDs = nextChildIDs;
	
	          for (var i = 0; i < nextChildIDs.length; i++) {
	            var nextChildID = nextChildIDs[i];
	            var nextChild = get(nextChildID);
	            !nextChild ?  false ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	            !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ?  false ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	            !nextChild.isMounted ?  false ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	            if (nextChild.parentID == null) {
	              nextChild.parentID = id;
	              // TODO: This shouldn't be necessary but mounting a new root during in
	              // componentWillMount currently causes not-yet-mounted components to
	              // be purged from our tree data so their parent ID is missing.
	            }
	            !(nextChild.parentID === id) ?  false ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	          }
	        },
	        onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
	          create(id, element, parentID);
	        },
	        onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
	          var item = get(id);
	          if (!item || !item.isMounted) {
	            // We may end up here as a result of setState() in componentWillUnmount().
	            // In this case, ignore the element.
	            return;
	          }
	          item.element = element;
	        },
	        onMountComponent: function onMountComponent(id) {
	          var item = get(id);
	          item.isMounted = true;
	          var isRoot = item.parentID === 0;
	          if (isRoot) {
	            addRoot(id);
	          }
	        },
	        onUpdateComponent: function onUpdateComponent(id) {
	          var item = get(id);
	          if (!item || !item.isMounted) {
	            // We may end up here as a result of setState() in componentWillUnmount().
	            // In this case, ignore the element.
	            return;
	          }
	          item.updateCount++;
	        },
	        onUnmountComponent: function onUnmountComponent(id) {
	          var item = get(id);
	          if (item) {
	            // We need to check if it exists.
	            // `item` might not exist if it is inside an error boundary, and a sibling
	            // error boundary child threw while mounting. Then this instance never
	            // got a chance to mount, but it still gets an unmounting event during
	            // the error boundary cleanup.
	            item.isMounted = false;
	            var isRoot = item.parentID === 0;
	            if (isRoot) {
	              removeRoot(id);
	            }
	          }
	          unmountedIDs.push(id);
	        },
	        purgeUnmountedComponents: function purgeUnmountedComponents() {
	          if (ReactComponentTreeHook._preventPurging) {
	            // Should only be used for testing.
	            return;
	          }
	
	          for (var i = 0; i < unmountedIDs.length; i++) {
	            var id = unmountedIDs[i];
	            purgeDeep(id);
	          }
	          unmountedIDs.length = 0;
	        },
	        isMounted: function isMounted(id) {
	          var item = get(id);
	          return item ? item.isMounted : false;
	        },
	        getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
	          var info = '';
	          if (topElement) {
	            var type = topElement.type;
	            var name = typeof type === 'function' ? type.displayName || type.name : type;
	            var owner = topElement._owner;
	            info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	          }
	
	          var currentOwner = ReactCurrentOwner.current;
	          var id = currentOwner && currentOwner._debugID;
	
	          info += ReactComponentTreeHook.getStackAddendumByID(id);
	          return info;
	        },
	        getStackAddendumByID: function getStackAddendumByID(id) {
	          var info = '';
	          while (id) {
	            info += describeID(id);
	            id = ReactComponentTreeHook.getParentID(id);
	          }
	          return info;
	        },
	        getChildIDs: function getChildIDs(id) {
	          var item = get(id);
	          return item ? item.childIDs : [];
	        },
	        getDisplayName: function getDisplayName(id) {
	          var element = ReactComponentTreeHook.getElement(id);
	          if (!element) {
	            return null;
	          }
	          return _getDisplayName(element);
	        },
	        getElement: function getElement(id) {
	          var item = get(id);
	          return item ? item.element : null;
	        },
	        getOwnerID: function getOwnerID(id) {
	          var element = ReactComponentTreeHook.getElement(id);
	          if (!element || !element._owner) {
	            return null;
	          }
	          return element._owner._debugID;
	        },
	        getParentID: function getParentID(id) {
	          var item = get(id);
	          return item ? item.parentID : null;
	        },
	        getSource: function getSource(id) {
	          var item = get(id);
	          var element = item ? item.element : null;
	          var source = element != null ? element._source : null;
	          return source;
	        },
	        getText: function getText(id) {
	          var element = ReactComponentTreeHook.getElement(id);
	          if (typeof element === 'string') {
	            return element;
	          } else if (typeof element === 'number') {
	            return '' + element;
	          } else {
	            return null;
	          }
	        },
	        getUpdateCount: function getUpdateCount(id) {
	          var item = get(id);
	          return item ? item.updateCount : 0;
	        },
	
	        getRegisteredIDs: getRegisteredIDs,
	
	        getRootIDs: getRootIDs
	      };
	
	      module.exports = ReactComponentTreeHook;
	    }, { "./ReactCurrentOwner": 17, "./reactProdInvariant": 23, "fbjs/lib/invariant": 8, "fbjs/lib/warning": 12 }], 17: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule ReactCurrentOwner
	       */
	
	      'use strict';
	
	      /**
	       * Keeps track of the current owner.
	       *
	       * The current owner is the component who should own any components that are
	       * currently being constructed.
	       */
	
	      var ReactCurrentOwner = {
	
	        /**
	         * @internal
	         * @type {ReactComponent}
	         */
	        current: null
	
	      };
	
	      module.exports = ReactCurrentOwner;
	    }, {}], 18: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2016-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule ReactDebugTool
	       */
	
	      'use strict';
	
	      var ReactInvalidSetStateWarningHook = _dereq_('./ReactInvalidSetStateWarningHook');
	      var ReactHostOperationHistoryHook = _dereq_('./ReactHostOperationHistoryHook');
	      var ReactComponentTreeHook = _dereq_('./ReactComponentTreeHook');
	      var ReactChildrenMutationWarningHook = _dereq_('./ReactChildrenMutationWarningHook');
	      var ExecutionEnvironment = _dereq_('fbjs/lib/ExecutionEnvironment');
	
	      var performanceNow = _dereq_('fbjs/lib/performanceNow');
	      var warning = _dereq_('fbjs/lib/warning');
	
	      var hooks = [];
	      var didHookThrowForEvent = {};
	
	      function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
	        try {
	          fn.call(context, arg1, arg2, arg3, arg4, arg5);
	        } catch (e) {
	           false ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
	          didHookThrowForEvent[event] = true;
	        }
	      }
	
	      function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
	        for (var i = 0; i < hooks.length; i++) {
	          var hook = hooks[i];
	          var fn = hook[event];
	          if (fn) {
	            callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
	          }
	        }
	      }
	
	      var _isProfiling = false;
	      var flushHistory = [];
	      var lifeCycleTimerStack = [];
	      var currentFlushNesting = 0;
	      var currentFlushMeasurements = null;
	      var currentFlushStartTime = null;
	      var currentTimerDebugID = null;
	      var currentTimerStartTime = null;
	      var currentTimerNestedFlushDuration = null;
	      var currentTimerType = null;
	
	      var lifeCycleTimerHasWarned = false;
	
	      function clearHistory() {
	        ReactComponentTreeHook.purgeUnmountedComponents();
	        ReactHostOperationHistoryHook.clearHistory();
	      }
	
	      function getTreeSnapshot(registeredIDs) {
	        return registeredIDs.reduce(function (tree, id) {
	          var ownerID = ReactComponentTreeHook.getOwnerID(id);
	          var parentID = ReactComponentTreeHook.getParentID(id);
	          tree[id] = {
	            displayName: ReactComponentTreeHook.getDisplayName(id),
	            text: ReactComponentTreeHook.getText(id),
	            updateCount: ReactComponentTreeHook.getUpdateCount(id),
	            childIDs: ReactComponentTreeHook.getChildIDs(id),
	            // Text nodes don't have owners but this is close enough.
	            ownerID: ownerID || ReactComponentTreeHook.getOwnerID(parentID),
	            parentID: parentID
	          };
	          return tree;
	        }, {});
	      }
	
	      function resetMeasurements() {
	        var previousStartTime = currentFlushStartTime;
	        var previousMeasurements = currentFlushMeasurements || [];
	        var previousOperations = ReactHostOperationHistoryHook.getHistory();
	
	        if (currentFlushNesting === 0) {
	          currentFlushStartTime = null;
	          currentFlushMeasurements = null;
	          clearHistory();
	          return;
	        }
	
	        if (previousMeasurements.length || previousOperations.length) {
	          var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
	          flushHistory.push({
	            duration: performanceNow() - previousStartTime,
	            measurements: previousMeasurements || [],
	            operations: previousOperations || [],
	            treeSnapshot: getTreeSnapshot(registeredIDs)
	          });
	        }
	
	        clearHistory();
	        currentFlushStartTime = performanceNow();
	        currentFlushMeasurements = [];
	      }
	
	      function checkDebugID(debugID) {
	        var allowRoot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        if (allowRoot && debugID === 0) {
	          return;
	        }
	        if (!debugID) {
	           false ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
	        }
	      }
	
	      function beginLifeCycleTimer(debugID, timerType) {
	        if (currentFlushNesting === 0) {
	          return;
	        }
	        if (currentTimerType && !lifeCycleTimerHasWarned) {
	           false ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	          lifeCycleTimerHasWarned = true;
	        }
	        currentTimerStartTime = performanceNow();
	        currentTimerNestedFlushDuration = 0;
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }
	
	      function endLifeCycleTimer(debugID, timerType) {
	        if (currentFlushNesting === 0) {
	          return;
	        }
	        if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
	           false ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	          lifeCycleTimerHasWarned = true;
	        }
	        if (_isProfiling) {
	          currentFlushMeasurements.push({
	            timerType: timerType,
	            instanceID: debugID,
	            duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
	          });
	        }
	        currentTimerStartTime = null;
	        currentTimerNestedFlushDuration = null;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }
	
	      function pauseCurrentLifeCycleTimer() {
	        var currentTimer = {
	          startTime: currentTimerStartTime,
	          nestedFlushStartTime: performanceNow(),
	          debugID: currentTimerDebugID,
	          timerType: currentTimerType
	        };
	        lifeCycleTimerStack.push(currentTimer);
	        currentTimerStartTime = null;
	        currentTimerNestedFlushDuration = null;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }
	
	      function resumeCurrentLifeCycleTimer() {
	        var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop();
	
	        var startTime = _lifeCycleTimerStack$.startTime;
	        var nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime;
	        var debugID = _lifeCycleTimerStack$.debugID;
	        var timerType = _lifeCycleTimerStack$.timerType;
	
	        var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
	        currentTimerStartTime = startTime;
	        currentTimerNestedFlushDuration += nestedFlushDuration;
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }
	
	      var ReactDebugTool = {
	        addHook: function addHook(hook) {
	          hooks.push(hook);
	        },
	        removeHook: function removeHook(hook) {
	          for (var i = 0; i < hooks.length; i++) {
	            if (hooks[i] === hook) {
	              hooks.splice(i, 1);
	              i--;
	            }
	          }
	        },
	        isProfiling: function isProfiling() {
	          return _isProfiling;
	        },
	        beginProfiling: function beginProfiling() {
	          if (_isProfiling) {
	            return;
	          }
	
	          _isProfiling = true;
	          flushHistory.length = 0;
	          resetMeasurements();
	          ReactDebugTool.addHook(ReactHostOperationHistoryHook);
	        },
	        endProfiling: function endProfiling() {
	          if (!_isProfiling) {
	            return;
	          }
	
	          _isProfiling = false;
	          resetMeasurements();
	          ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
	        },
	        getFlushHistory: function getFlushHistory() {
	          return flushHistory;
	        },
	        onBeginFlush: function onBeginFlush() {
	          currentFlushNesting++;
	          resetMeasurements();
	          pauseCurrentLifeCycleTimer();
	          emitEvent('onBeginFlush');
	        },
	        onEndFlush: function onEndFlush() {
	          resetMeasurements();
	          currentFlushNesting--;
	          resumeCurrentLifeCycleTimer();
	          emitEvent('onEndFlush');
	        },
	        onBeginLifeCycleTimer: function onBeginLifeCycleTimer(debugID, timerType) {
	          checkDebugID(debugID);
	          emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	          beginLifeCycleTimer(debugID, timerType);
	        },
	        onEndLifeCycleTimer: function onEndLifeCycleTimer(debugID, timerType) {
	          checkDebugID(debugID);
	          endLifeCycleTimer(debugID, timerType);
	          emitEvent('onEndLifeCycleTimer', debugID, timerType);
	        },
	        onBeginProcessingChildContext: function onBeginProcessingChildContext() {
	          emitEvent('onBeginProcessingChildContext');
	        },
	        onEndProcessingChildContext: function onEndProcessingChildContext() {
	          emitEvent('onEndProcessingChildContext');
	        },
	        onHostOperation: function onHostOperation(debugID, type, payload) {
	          checkDebugID(debugID);
	          emitEvent('onHostOperation', debugID, type, payload);
	        },
	        onSetState: function onSetState() {
	          emitEvent('onSetState');
	        },
	        onSetChildren: function onSetChildren(debugID, childDebugIDs) {
	          checkDebugID(debugID);
	          childDebugIDs.forEach(checkDebugID);
	          emitEvent('onSetChildren', debugID, childDebugIDs);
	        },
	        onBeforeMountComponent: function onBeforeMountComponent(debugID, element, parentDebugID) {
	          checkDebugID(debugID);
	          checkDebugID(parentDebugID, true);
	          emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
	        },
	        onMountComponent: function onMountComponent(debugID) {
	          checkDebugID(debugID);
	          emitEvent('onMountComponent', debugID);
	        },
	        onBeforeUpdateComponent: function onBeforeUpdateComponent(debugID, element) {
	          checkDebugID(debugID);
	          emitEvent('onBeforeUpdateComponent', debugID, element);
	        },
	        onUpdateComponent: function onUpdateComponent(debugID) {
	          checkDebugID(debugID);
	          emitEvent('onUpdateComponent', debugID);
	        },
	        onBeforeUnmountComponent: function onBeforeUnmountComponent(debugID) {
	          checkDebugID(debugID);
	          emitEvent('onBeforeUnmountComponent', debugID);
	        },
	        onUnmountComponent: function onUnmountComponent(debugID) {
	          checkDebugID(debugID);
	          emitEvent('onUnmountComponent', debugID);
	        },
	        onTestEvent: function onTestEvent() {
	          emitEvent('onTestEvent');
	        }
	      };
	
	      // TODO remove these when RN/www gets updated
	      ReactDebugTool.addDevtool = ReactDebugTool.addHook;
	      ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;
	
	      ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
	      ReactDebugTool.addHook(ReactComponentTreeHook);
	      ReactDebugTool.addHook(ReactChildrenMutationWarningHook);
	      var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	      if (/[?&]react_perf\b/.test(url)) {
	        ReactDebugTool.beginProfiling();
	      }
	
	      module.exports = ReactDebugTool;
	    }, { "./ReactChildrenMutationWarningHook": 15, "./ReactComponentTreeHook": 16, "./ReactHostOperationHistoryHook": 19, "./ReactInvalidSetStateWarningHook": 21, "fbjs/lib/ExecutionEnvironment": 2, "fbjs/lib/performanceNow": 11, "fbjs/lib/warning": 12 }], 19: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2016-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule ReactHostOperationHistoryHook
	       */
	
	      'use strict';
	
	      var history = [];
	
	      var ReactHostOperationHistoryHook = {
	        onHostOperation: function onHostOperation(debugID, type, payload) {
	          history.push({
	            instanceID: debugID,
	            type: type,
	            payload: payload
	          });
	        },
	        clearHistory: function clearHistory() {
	          if (ReactHostOperationHistoryHook._preventClearing) {
	            // Should only be used for tests.
	            return;
	          }
	
	          history = [];
	        },
	        getHistory: function getHistory() {
	          return history;
	        }
	      };
	
	      module.exports = ReactHostOperationHistoryHook;
	    }, {}], 20: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2016-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule ReactInstrumentation
	       */
	
	      'use strict';
	
	      var debugTool = null;
	
	      if (false) {
	        var ReactDebugTool = _dereq_('./ReactDebugTool');
	        debugTool = ReactDebugTool;
	      }
	
	      module.exports = { debugTool: debugTool };
	    }, { "./ReactDebugTool": 18 }], 21: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2016-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule ReactInvalidSetStateWarningHook
	       */
	
	      'use strict';
	
	      var warning = _dereq_('fbjs/lib/warning');
	
	      if (false) {
	        var processingChildContext = false;
	
	        var warnInvalidSetState = function warnInvalidSetState() {
	          "production" !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	        };
	      }
	
	      var ReactInvalidSetStateWarningHook = {
	        onBeginProcessingChildContext: function onBeginProcessingChildContext() {
	          processingChildContext = true;
	        },
	        onEndProcessingChildContext: function onEndProcessingChildContext() {
	          processingChildContext = false;
	        },
	        onSetState: function onSetState() {
	          warnInvalidSetState();
	        }
	      };
	
	      module.exports = ReactInvalidSetStateWarningHook;
	    }, { "fbjs/lib/warning": 12 }], 22: [function (_dereq_, module, exports) {
	      /**
	       * Copyright 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule dangerousStyleValue
	       */
	
	      'use strict';
	
	      var CSSProperty = _dereq_('./CSSProperty');
	      var warning = _dereq_('fbjs/lib/warning');
	
	      var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	      var styleWarnings = {};
	
	      /**
	       * Convert a value into the proper css writable value. The style name `name`
	       * should be logical (no hyphens), as specified
	       * in `CSSProperty.isUnitlessNumber`.
	       *
	       * @param {string} name CSS property name such as `topMargin`.
	       * @param {*} value CSS property value such as `10px`.
	       * @param {ReactDOMComponent} component
	       * @return {string} Normalized style value with dimensions applied.
	       */
	      function dangerousStyleValue(name, value, component) {
	        // Note that we've removed escapeTextForBrowser() calls here since the
	        // whole string will be escaped when the attribute is injected into
	        // the markup. If you provide unsafe user data here they can inject
	        // arbitrary CSS which may be problematic (I couldn't repro this):
	        // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	        // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	        // This is not an XSS hole but instead a potential CSS injection issue
	        // which has lead to a greater discussion about how we're going to
	        // trust URLs moving forward. See #2115901
	
	        var isEmpty = value == null || typeof value === 'boolean' || value === '';
	        if (isEmpty) {
	          return '';
	        }
	
	        var isNonNumeric = isNaN(value);
	        if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	          return '' + value; // cast to string
	        }
	
	        if (typeof value === 'string') {
	          if (false) {
	            // Allow '0' to pass through without warning. 0 is already special and
	            // doesn't require units, so we don't need to warn about it.
	            if (component && value !== '0') {
	              var owner = component._currentElement._owner;
	              var ownerName = owner ? owner.getName() : null;
	              if (ownerName && !styleWarnings[ownerName]) {
	                styleWarnings[ownerName] = {};
	              }
	              var warned = false;
	              if (ownerName) {
	                var warnings = styleWarnings[ownerName];
	                warned = warnings[name];
	                if (!warned) {
	                  warnings[name] = true;
	                }
	              }
	              if (!warned) {
	                "production" !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
	              }
	            }
	          }
	          value = value.trim();
	        }
	        return value + 'px';
	      }
	
	      module.exports = dangerousStyleValue;
	    }, { "./CSSProperty": 13, "fbjs/lib/warning": 12 }], 23: [function (_dereq_, module, exports) {
	      /**
	       * Copyright (c) 2013-present, Facebook, Inc.
	       * All rights reserved.
	       *
	       * This source code is licensed under the BSD-style license found in the
	       * LICENSE file in the root directory of this source tree. An additional grant
	       * of patent rights can be found in the PATENTS file in the same directory.
	       *
	       * @providesModule reactProdInvariant
	       * 
	       */
	      'use strict';
	
	      /**
	       * WARNING: DO NOT manually require this module.
	       * This is a replacement for `invariant(...)` used by the error code system
	       * and will _only_ be required by the corresponding babel pass.
	       * It always throws.
	       */
	
	      function reactProdInvariant(code) {
	        var argCount = arguments.length - 1;
	
	        var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
	
	        for (var argIdx = 0; argIdx < argCount; argIdx++) {
	          message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	        }
	
	        message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
	
	        var error = new Error(message);
	        error.name = 'Invariant Violation';
	        error.framesToPop = 1; // we don't care about reactProdInvariant's own frame
	
	        throw error;
	      }
	
	      module.exports = reactProdInvariant;
	    }, {}] }, {}, [1])(1);
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = clean;
	// Returns true for null, false, undefined and {}
	function isFalsy(value) {
	  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
	}
	
	function cleanObject(object) {
	  if (isFalsy(object)) return null;
	  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;
	
	  var acc = {},
	      keys = Object.keys(object),
	      hasFalsy = false;
	  for (var i = 0; i < keys.length; i++) {
	    var value = object[keys[i]];
	    var filteredValue = clean(value);
	    if (filteredValue === null || filteredValue !== value) {
	      hasFalsy = true;
	    }
	    if (filteredValue !== null) {
	      acc[keys[i]] = filteredValue;
	    }
	  }
	  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
	}
	
	function cleanArray(rules) {
	  var hasFalsy = false;
	  var filtered = [];
	  rules.forEach(function (rule) {
	    var filteredRule = clean(rule);
	    if (filteredRule === null || filteredRule !== rule) {
	      hasFalsy = true;
	    }
	    if (filteredRule !== null) {
	      filtered.push(filteredRule);
	    }
	  });
	  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
	}
	
	// Takes style array or object provided by user and clears all the falsy data 
	// If there is no styles left after filtration returns null
	function clean(input) {
	  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PluginSet = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.fallbacks = fallbacks;
	exports.prefixes = prefixes;
	exports.bug20fix = bug20fix;
	
	var _autoprefix = __webpack_require__(14);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var isDev = function (x) {
	  return x === 'development' || !x;
	}(process.env.NODE_ENV);
	
	var PluginSet = exports.PluginSet = function () {
	  function PluginSet() {
	    _classCallCheck(this, PluginSet);
	
	    for (var _len = arguments.length, initial = Array(_len), _key = 0; _key < _len; _key++) {
	      initial[_key] = arguments[_key];
	    }
	
	    this.fns = initial || [];
	  }
	
	  _createClass(PluginSet, [{
	    key: 'add',
	    value: function add() {
	      var _this = this;
	
	      for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        fns[_key2] = arguments[_key2];
	      }
	
	      fns.forEach(function (fn) {
	        if (_this.fns.indexOf(fn) >= 0) {
	          if (isDev) {
	            console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
	          }
	        } else {
	          _this.fns = [fn].concat(_toConsumableArray(_this.fns));
	        }
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove(fn) {
	      this.fns = this.fns.filter(function (x) {
	        return x !== fn;
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.fns = [];
	    }
	  }, {
	    key: 'transform',
	    value: function transform(o) {
	      return this.fns.reduce(function (o, fn) {
	        return fn(o);
	      }, o);
	    }
	  }]);
	
	  return PluginSet;
	}();
	
	function fallbacks(node) {
	  var hasArray = Object.keys(node.style).map(function (x) {
	    return Array.isArray(node.style[x]);
	  }).indexOf(true) >= 0;
	  if (hasArray) {
	    var _ret = function () {
	      var style = node.style;
	
	      var rest = _objectWithoutProperties(node, ['style']);
	
	      var flattened = Object.keys(style).reduce(function (o, key) {
	        o[key] = Array.isArray(style[key]) ? style[key].join('; ' + key + ': ') : style[key];
	        return o;
	      }, {});
	      // todo - 
	      // flatten arrays which haven't been flattened yet 
	      return {
	        v: _extends({ style: flattened }, rest)
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return node;
	}
	
	function prefixes(_ref) {
	  var style = _ref.style;
	
	  var rest = _objectWithoutProperties(_ref, ['style']);
	
	  return _extends({ style: (0, _autoprefix.autoprefix)(style) }, rest);
	}
	
	function bug20fix(_ref2) {
	  var selector = _ref2.selector;
	  var style = _ref2.style;
	
	  // https://github.com/threepointone/glamor/issues/20
	  // todo - only on chrome versions and server side   
	  return { selector: selector.replace(/\:hover/g, ':hover:nth-child(n)'), style: style };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	// forked from https://www.npmjs.com/package/auto-prefixer
	
	function capitalize(str) {
	  return str && str.charAt(0).toUpperCase() + str.substring(1);
	}
	
	function includes(obj, search) {
	  if (typeof obj === 'number') {
	    obj = obj.toString();
	  }
	  return obj.indexOf(search) !== -1;
	}
	
	function values(obj) {
	  return Object.keys(obj).map(function (key) {
	    return obj[key];
	  });
	}
	
	var webkitPrefix = 'Webkit';
	var mozPrefix = 'Moz';
	var msPrefix = 'ms';
	var oPrefix = 'o';
	
	var webkit = [webkitPrefix];
	var webkitO = [webkitPrefix, oPrefix];
	var moz = [mozPrefix];
	var ms = [msPrefix];
	
	var webkitMoz = [webkitPrefix, mozPrefix];
	var webkitMozO = [webkitPrefix, mozPrefix, oPrefix];
	var webkitMozMs = [webkitPrefix, mozPrefix, msPrefix];
	var webkitMs = [webkitPrefix, msPrefix];
	var allPrefixes = [webkitPrefix, msPrefix, mozPrefix, oPrefix];
	
	var neededRules = {
	  alignContent: webkit,
	  alignItems: webkit,
	  alignSelf: webkit,
	  animation: webkitMoz,
	  animationDelay: webkitMoz,
	  animationDirection: webkitMoz,
	  animationDuration: webkitMoz,
	  animationFillMode: webkitMoz,
	  animationIterationCount: webkitMoz,
	  animationName: webkitMoz,
	  animationPlayState: webkitMoz,
	  animationTimingFunction: webkitMoz,
	  appearance: webkitMoz,
	  backfaceVisibility: webkitMoz,
	  backgroundClip: webkit,
	  borderImage: webkitMozO,
	  borderImageSlice: webkitMozO,
	  boxShadow: webkitMozMs,
	  boxSizing: webkitMoz,
	  clipPath: webkit,
	  columns: webkitMoz,
	  cursor: webkitMoz,
	  flex: webkitMs, //new flex and 2012 specification , no support for old specification
	  flexBasis: webkitMs,
	  flexDirection: webkitMs,
	  flexFlow: webkitMs,
	  flexGrow: webkitMs,
	  flexShrink: webkitMs,
	  flexWrap: webkitMs,
	  fontSmoothing: webkitMoz,
	  justifyContent: webkitMoz,
	  order: webkitMoz,
	  perspective: webkitMoz,
	  perspectiveOrigin: webkitMoz,
	  transform: webkitMozMs,
	  transformOrigin: webkitMozMs,
	  transformOriginX: webkitMozMs,
	  transformOriginY: webkitMozMs,
	  transformOriginZ: webkitMozMs,
	  transformStyle: webkitMozMs,
	  transition: webkitMozMs,
	  transitionDelay: webkitMozMs,
	  transitionDuration: webkitMozMs,
	  transitionProperty: webkitMozMs,
	  transitionTimingFunction: webkitMozMs,
	  userSelect: webkitMozMs
	};
	
	var neededCssValues = {
	  calc: webkitMoz,
	  flex: webkitMs
	};
	
	var clientPrefix = function () {
	  if (typeof navigator === 'undefined') {
	    //in server rendering
	    return allPrefixes; //also default when not passing true to 'all vendors' explicitly
	  }
	  var sUsrAg = navigator.userAgent;
	
	  if (includes(sUsrAg, 'Chrome')) {
	    return webkit;
	  } else if (includes(sUsrAg, 'Safari')) {
	    return webkit;
	  } else if (includes(sUsrAg, 'Opera')) {
	    return webkitO;
	  } else if (includes(sUsrAg, 'Firefox')) {
	    return moz;
	  } else if (includes(sUsrAg, 'MSIE')) {
	    return ms;
	  }
	
	  return [];
	}();
	
	function checkAndAddPrefix(styleObj, key, val, allVendors) {
	  var oldFlex = true;
	
	  function valueWithPrefix(cssVal, prefix) {
	    return includes(val, cssVal) && (allVendors || includes(clientPrefix, prefix)) ? val.replace(cssVal, ['', prefix.toLowerCase(), cssVal].join('-')) : null;
	    //example return -> 'transition: -webkit-transition'
	  }
	
	  function createObjectOfValuesWithPrefixes(cssVal) {
	    return neededCssValues[cssVal].reduce(function (o, v) {
	      o[v.toLowerCase()] = valueWithPrefix(cssVal, v);
	      return o;
	    }, {});
	    //example return -> {webkit: -webkit-calc(10% - 1px), moz: -moz-calc(10% - 1px)}
	  }
	
	  function composePrefixedValues(objOfPrefixedValues) {
	    var composed = values(objOfPrefixedValues).filter(function (str) {
	      return str !== null;
	    }).map(function (str) {
	      return key + ':' + str;
	    }).join(';');
	
	    if (composed) {
	      styleObj[key] = styleObj[key] + ';' + composed;
	    }
	    //example do -> {display: "flex;display:-webkit-flex;display:-ms-flexbox"}
	  }
	
	  function valWithoutFlex() {
	    return val.replace('flex-', '').toLowerCase();
	  }
	
	  if (val === 'flex' && key === 'display') {
	
	    var flex = createObjectOfValuesWithPrefixes('flex');
	    if (flex.ms) {
	      flex.ms = flex.ms.replace('flex', 'flexbox');
	    } //special case
	
	    composePrefixedValues(flex);
	    //if(oldFlex){styleObj[key] = styleObj[key] + ';display:-webkit-box'; }
	    if (oldFlex) {
	      styleObj[key] = '-webkit-box;display:' + styleObj[key];
	    }
	
	    //display:flex is simple case, no need for other checks
	    return styleObj;
	  }
	
	  var allPrefixedCssValues = Object.keys(neededCssValues).filter(function (c) {
	    return c !== 'flex';
	  }).reduce(function (o, c) {
	    o[c] = createObjectOfValuesWithPrefixes(c);
	    return o;
	  }, {});
	  /*
	   example allPrefixedCssValues = {
	   calc: {
	   webkit: "translateX(-webkit-calc(10% - 10px))",
	   moz: "translateX(-moz-calc(10% - 10px))"
	   },
	   flex: {
	   ms: null,
	   webkit: null
	   }
	   };*/
	
	  //if(includes(val, 'gradient')){
	  //
	  //}
	
	  if (neededRules[key]) {
	
	    var prefixes = allVendors ? neededRules[key] : neededRules[key].filter(function (vendor) {
	      return includes(clientPrefix, vendor);
	    });
	
	    var prefixedProperties = prefixes.reduce(function (obj, prefix) {
	      var property = val;
	
	      //add valueWithPrefixes in their position and null the property
	      Object.keys(allPrefixedCssValues).forEach(function (cssKey) {
	        var cssVal = allPrefixedCssValues[cssKey];
	        Object.keys(cssVal).forEach(function (vendor) {
	          if (cssVal[vendor] && capitalize(prefix) === capitalize(vendor)) {
	            property = cssVal[vendor];
	            cssVal[vendor] = null;
	          }
	        });
	      });
	
	      obj[prefix + capitalize(key)] = property;
	      return obj;
	    }, {});
	
	    if (oldFlex) {
	      switch (key) {
	        case 'flexDirection':
	          if (includes(val, 'reverse')) {
	            prefixedProperties.WebkitBoxDirection = 'reverse';
	          } else {
	            prefixedProperties.WebkitBoxDirection = 'normal';
	          }
	          if (includes(val, 'row')) {
	            prefixedProperties.WebkitBoxOrient = prefixedProperties.boxOrient = 'horizontal';
	          } else if (includes(val, 'column')) {
	            prefixedProperties.WebkitBoxOrient = 'vertical';
	          }
	          break;
	        case 'alignSelf':
	          prefixedProperties.msFlexItemAlign = valWithoutFlex();break;
	        case 'alignItems':
	          prefixedProperties.WebkitBoxAlign = prefixedProperties.msFlexAlign = valWithoutFlex();break;
	        case 'alignContent':
	          if (val === 'spaceAround') {
	            prefixedProperties.msFlexLinePack = 'distribute';
	          } else if (val === 'spaceBetween') {
	            prefixedProperties.msFlexLinePack = 'justify';
	          } else {
	            prefixedProperties.msFlexLinePack = valWithoutFlex();
	          }
	          break;
	        case 'justifyContent':
	          if (val === 'spaceAround') {
	            prefixedProperties.msFlexPack = 'distribute';
	          } else if (val === 'spaceBetween') {
	            prefixedProperties.WebkitBoxPack = prefixedProperties.msFlexPack = 'justify';
	          } else {
	            prefixedProperties.WebkitBoxPack = prefixedProperties.msFlexPack = valWithoutFlex();
	          }
	          break;
	        case 'flexBasis':
	          prefixedProperties.msFlexPreferredSize = val;break;
	        case 'order':
	          prefixedProperties.msFlexOrder = '-moz-calc(' + val + ')'; //ugly hack to prevent react from adding 'px'
	          prefixedProperties.WebkitBoxOrdinalGroup = '-webkit-calc(' + (parseInt(val) + 1) + ')'; //this might not work for browsers who don't support calc
	          break;
	        case 'flexGrow':
	          prefixedProperties.WebkitBoxFlex = prefixedProperties.msFlexPositive = val;break;
	        case 'flexShrink':
	          prefixedProperties.msFlexNegative = val;break;
	        case 'flex':
	          prefixedProperties.WebkitBoxFlex = val;break;
	      }
	    }
	
	    Object.assign(styleObj, prefixedProperties);
	  }
	
	  //if valueWithPrefixes were not added before
	  Object.keys(allPrefixedCssValues).forEach(function (cssKey) {
	    composePrefixedValues(allPrefixedCssValues[cssKey]);
	  });
	  return styleObj;
	}
	
	function autoPrefixer(obj, allVendors) {
	  Object.keys(obj).forEach(function (key) {
	    return obj = checkAndAddPrefix(_extends({}, obj), key, obj[key], allVendors);
	  });
	  return obj;
	}
	
	function gate(objOrBool) {
	  var optionalBoolean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	
	  if (typeof objOrBool === 'boolean') {
	    return function (obj) {
	      return autoPrefixer(obj, objOrBool);
	    };
	  }
	  if (!objOrBool) {
	    return {};
	  } else {
	    return autoPrefixer(objOrBool, optionalBoolean);
	  } // default: don't include all browsers
	}
	
	var autoprefix = exports.autoprefix = gate(true);

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423
	
	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;
	
	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);
	
	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);
	
	    h = Umul32(h, m);
	    h ^= k;
	
	    currentIndex += 4;
	    length -= 4;
	  }
	
	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;
	
	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;
	
	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }
	
	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}
	
	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}
	
	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */
	
	  'use strict';
	
	  /**
	   * Module dependencies.
	   */
	
	  var pathtoRegexp = __webpack_require__(17);
	
	  /**
	   * Module exports.
	   */
	
	  module.exports = page;
	
	  /**
	   * Detect click event
	   */
	  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';
	
	  /**
	   * To work properly with the URL
	   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
	   */
	
	  var location = ('undefined' !== typeof window) && (window.history.location || window.location);
	
	  /**
	   * Perform initial dispatch.
	   */
	
	  var dispatch = true;
	
	
	  /**
	   * Decode URL components (query string, pathname, hash).
	   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
	   */
	  var decodeURLComponents = true;
	
	  /**
	   * Base path.
	   */
	
	  var base = '';
	
	  /**
	   * Running flag.
	   */
	
	  var running;
	
	  /**
	   * HashBang option
	   */
	
	  var hashbang = false;
	
	  /**
	   * Previous context, for capturing
	   * page exit events.
	   */
	
	  var prevContext;
	
	  /**
	   * Register `path` with callback `fn()`,
	   * or route `path`, or redirection,
	   * or `page.start()`.
	   *
	   *   page(fn);
	   *   page('*', fn);
	   *   page('/user/:id', load, user);
	   *   page('/user/' + user.id, { some: 'thing' });
	   *   page('/user/' + user.id);
	   *   page('/from', '/to')
	   *   page();
	   *
	   * @param {string|!Function|!Object} path
	   * @param {Function=} fn
	   * @api public
	   */
	
	  function page(path, fn) {
	    // <callback>
	    if ('function' === typeof path) {
	      return page('*', path);
	    }
	
	    // route <path> to <callback ...>
	    if ('function' === typeof fn) {
	      var route = new Route(/** @type {string} */ (path));
	      for (var i = 1; i < arguments.length; ++i) {
	        page.callbacks.push(route.middleware(arguments[i]));
	      }
	      // show <path> with [state]
	    } else if ('string' === typeof path) {
	      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
	      // start [options]
	    } else {
	      page.start(path);
	    }
	  }
	
	  /**
	   * Callback functions.
	   */
	
	  page.callbacks = [];
	  page.exits = [];
	
	  /**
	   * Current path being processed
	   * @type {string}
	   */
	  page.current = '';
	
	  /**
	   * Number of pages navigated to.
	   * @type {number}
	   *
	   *     page.len == 0;
	   *     page('/login');
	   *     page.len == 1;
	   */
	
	  page.len = 0;
	
	  /**
	   * Get or set basepath to `path`.
	   *
	   * @param {string} path
	   * @api public
	   */
	
	  page.base = function(path) {
	    if (0 === arguments.length) return base;
	    base = path;
	  };
	
	  /**
	   * Bind with the given `options`.
	   *
	   * Options:
	   *
	   *    - `click` bind to click events [true]
	   *    - `popstate` bind to popstate [true]
	   *    - `dispatch` perform initial dispatch [true]
	   *
	   * @param {Object} options
	   * @api public
	   */
	
	  page.start = function(options) {
	    options = options || {};
	    if (running) return;
	    running = true;
	    if (false === options.dispatch) dispatch = false;
	    if (false === options.decodeURLComponents) decodeURLComponents = false;
	    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
	    if (false !== options.click) {
	      document.addEventListener(clickEvent, onclick, false);
	    }
	    if (true === options.hashbang) hashbang = true;
	    if (!dispatch) return;
	    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
	    page.replace(url, null, true, dispatch);
	  };
	
	  /**
	   * Unbind click and popstate event handlers.
	   *
	   * @api public
	   */
	
	  page.stop = function() {
	    if (!running) return;
	    page.current = '';
	    page.len = 0;
	    running = false;
	    document.removeEventListener(clickEvent, onclick, false);
	    window.removeEventListener('popstate', onpopstate, false);
	  };
	
	  /**
	   * Show `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} dispatch
	   * @param {boolean=} push
	   * @return {!Context}
	   * @api public
	   */
	
	  page.show = function(path, state, dispatch, push) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    if (false !== dispatch) page.dispatch(ctx);
	    if (false !== ctx.handled && false !== push) ctx.pushState();
	    return ctx;
	  };
	
	  /**
	   * Goes back in the history
	   * Back should always let the current route push state and then go back.
	   *
	   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
	   * @param {Object=} state
	   * @api public
	   */
	
	  page.back = function(path, state) {
	    if (page.len > 0) {
	      // this may need more testing to see if all browsers
	      // wait for the next tick to go back in history
	      history.back();
	      page.len--;
	    } else if (path) {
	      setTimeout(function() {
	        page.show(path, state);
	      });
	    }else{
	      setTimeout(function() {
	        page.show(base, state);
	      });
	    }
	  };
	
	
	  /**
	   * Register route to redirect from one path to other
	   * or just redirect to another route
	   *
	   * @param {string} from - if param 'to' is undefined redirects to 'from'
	   * @param {string=} to
	   * @api public
	   */
	  page.redirect = function(from, to) {
	    // Define route from a path to another
	    if ('string' === typeof from && 'string' === typeof to) {
	      page(from, function(e) {
	        setTimeout(function() {
	          page.replace(/** @type {!string} */ (to));
	        }, 0);
	      });
	    }
	
	    // Wait for the push state and replace it with another
	    if ('string' === typeof from && 'undefined' === typeof to) {
	      setTimeout(function() {
	        page.replace(from);
	      }, 0);
	    }
	  };
	
	  /**
	   * Replace `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} init
	   * @param {boolean=} dispatch
	   * @return {!Context}
	   * @api public
	   */
	
	
	  page.replace = function(path, state, init, dispatch) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    ctx.init = init;
	    ctx.save(); // save before dispatching, which may redirect
	    if (false !== dispatch) page.dispatch(ctx);
	    return ctx;
	  };
	
	  /**
	   * Dispatch the given `ctx`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	  page.dispatch = function(ctx) {
	    var prev = prevContext,
	      i = 0,
	      j = 0;
	
	    prevContext = ctx;
	
	    function nextExit() {
	      var fn = page.exits[j++];
	      if (!fn) return nextEnter();
	      fn(prev, nextExit);
	    }
	
	    function nextEnter() {
	      var fn = page.callbacks[i++];
	
	      if (ctx.path !== page.current) {
	        ctx.handled = false;
	        return;
	      }
	      if (!fn) return unhandled(ctx);
	      fn(ctx, nextEnter);
	    }
	
	    if (prev) {
	      nextExit();
	    } else {
	      nextEnter();
	    }
	  };
	
	  /**
	   * Unhandled `ctx`. When it's not the initial
	   * popstate then redirect. If you wish to handle
	   * 404s on your own use `page('*', callback)`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	  function unhandled(ctx) {
	    if (ctx.handled) return;
	    var current;
	
	    if (hashbang) {
	      current = base + location.hash.replace('#!', '');
	    } else {
	      current = location.pathname + location.search;
	    }
	
	    if (current === ctx.canonicalPath) return;
	    page.stop();
	    ctx.handled = false;
	    location.href = ctx.canonicalPath;
	  }
	
	  /**
	   * Register an exit route on `path` with
	   * callback `fn()`, which will be called
	   * on the previous context when a new
	   * page is visited.
	   */
	  page.exit = function(path, fn) {
	    if (typeof path === 'function') {
	      return page.exit('*', path);
	    }
	
	    var route = new Route(path);
	    for (var i = 1; i < arguments.length; ++i) {
	      page.exits.push(route.middleware(arguments[i]));
	    }
	  };
	
	  /**
	   * Remove URL encoding from the given `str`.
	   * Accommodates whitespace in both x-www-form-urlencoded
	   * and regular percent-encoded form.
	   *
	   * @param {string} val - URL component to decode
	   */
	  function decodeURLEncodedURIComponent(val) {
	    if (typeof val !== 'string') { return val; }
	    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
	  }
	
	  /**
	   * Initialize a new "request" `Context`
	   * with the given `path` and optional initial `state`.
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} state
	   * @api public
	   */
	
	  function Context(path, state) {
	    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
	    var i = path.indexOf('?');
	
	    this.canonicalPath = path;
	    this.path = path.replace(base, '') || '/';
	    if (hashbang) this.path = this.path.replace('#!', '') || '/';
	
	    this.title = document.title;
	    this.state = state || {};
	    this.state.path = path;
	    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
	    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
	    this.params = {};
	
	    // fragment
	    this.hash = '';
	    if (!hashbang) {
	      if (!~this.path.indexOf('#')) return;
	      var parts = this.path.split('#');
	      this.path = parts[0];
	      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
	      this.querystring = this.querystring.split('#')[0];
	    }
	  }
	
	  /**
	   * Expose `Context`.
	   */
	
	  page.Context = Context;
	
	  /**
	   * Push state.
	   *
	   * @api private
	   */
	
	  Context.prototype.pushState = function() {
	    page.len++;
	    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };
	
	  /**
	   * Save the context state.
	   *
	   * @api public
	   */
	
	  Context.prototype.save = function() {
	    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };
	
	  /**
	   * Initialize `Route` with the given HTTP `path`,
	   * and an array of `callbacks` and `options`.
	   *
	   * Options:
	   *
	   *   - `sensitive`    enable case-sensitive routes
	   *   - `strict`       enable strict matching for trailing slashes
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} options
	   * @api private
	   */
	
	  function Route(path, options) {
	    options = options || {};
	    this.path = (path === '*') ? '(.*)' : path;
	    this.method = 'GET';
	    this.regexp = pathtoRegexp(this.path,
	      this.keys = [],
	      options);
	  }
	
	  /**
	   * Expose `Route`.
	   */
	
	  page.Route = Route;
	
	  /**
	   * Return route middleware with
	   * the given callback `fn()`.
	   *
	   * @param {Function} fn
	   * @return {Function}
	   * @api public
	   */
	
	  Route.prototype.middleware = function(fn) {
	    var self = this;
	    return function(ctx, next) {
	      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
	      next();
	    };
	  };
	
	  /**
	   * Check if this route matches `path`, if so
	   * populate `params`.
	   *
	   * @param {string} path
	   * @param {Object} params
	   * @return {boolean}
	   * @api private
	   */
	
	  Route.prototype.match = function(path, params) {
	    var keys = this.keys,
	      qsIndex = path.indexOf('?'),
	      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
	      m = this.regexp.exec(decodeURIComponent(pathname));
	
	    if (!m) return false;
	
	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = decodeURLEncodedURIComponent(m[i]);
	      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
	        params[key.name] = val;
	      }
	    }
	
	    return true;
	  };
	
	
	  /**
	   * Handle "populate" events.
	   */
	
	  var onpopstate = (function () {
	    var loaded = false;
	    if ('undefined' === typeof window) {
	      return;
	    }
	    if (document.readyState === 'complete') {
	      loaded = true;
	    } else {
	      window.addEventListener('load', function() {
	        setTimeout(function() {
	          loaded = true;
	        }, 0);
	      });
	    }
	    return function onpopstate(e) {
	      if (!loaded) return;
	      if (e.state) {
	        var path = e.state.path;
	        page.replace(path, e.state);
	      } else {
	        page.show(location.pathname + location.hash, undefined, undefined, false);
	      }
	    };
	  })();
	  /**
	   * Handle "click" events.
	   */
	
	  function onclick(e) {
	
	    if (1 !== which(e)) return;
	
	    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	    if (e.defaultPrevented) return;
	
	
	
	    // ensure link
	    // use shadow dom when available
	    var el = e.path ? e.path[0] : e.target;
	    while (el && 'A' !== el.nodeName) el = el.parentNode;
	    if (!el || 'A' !== el.nodeName) return;
	
	
	
	    // Ignore if tag has
	    // 1. "download" attribute
	    // 2. rel="external" attribute
	    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;
	
	    // ensure non-hash for the same path
	    var link = el.getAttribute('href');
	    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;
	
	
	
	    // Check for mailto: in the href
	    if (link && link.indexOf('mailto:') > -1) return;
	
	    // check target
	    if (el.target) return;
	
	    // x-origin
	    if (!sameOrigin(el.href)) return;
	
	
	
	    // rebuild path
	    var path = el.pathname + el.search + (el.hash || '');
	
	    // strip leading "/[drive letter]:" on NW.js on Windows
	    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
	      path = path.replace(/^\/[a-zA-Z]:\//, '/');
	    }
	
	    // same page
	    var orig = path;
	
	    if (path.indexOf(base) === 0) {
	      path = path.substr(base.length);
	    }
	
	    if (hashbang) path = path.replace('#!', '');
	
	    if (base && orig === path) return;
	
	    e.preventDefault();
	    page.show(orig);
	  }
	
	  /**
	   * Event button.
	   */
	
	  function which(e) {
	    e = e || window.event;
	    return null === e.which ? e.button : e.which;
	  }
	
	  /**
	   * Check if `href` is the same origin.
	   */
	
	  function sameOrigin(href) {
	    var origin = location.protocol + '//' + location.hostname;
	    if (location.port) origin += ':' + location.port;
	    return (href && (0 === href.indexOf(origin)));
	  }
	
	  page.sameOrigin = sameOrigin;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(18)
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {String} str
	 * @return {Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var suffix = res[6]
	    var asterisk = res[7]
	
	    var repeat = suffix === '+' || suffix === '*'
	    var optional = suffix === '?' || suffix === '*'
	    var delimiter = prefix || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      pattern: escapeGroup(pattern)
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {String}   str
	 * @return {Function}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
	    }
	  }
	
	  return function (obj) {
	    var path = ''
	    var data = obj || {}
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encodeURIComponent(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = encodeURIComponent(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)
	
	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }
	
	  return attachKeys(re, keys)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {Array}  tokens
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = token.pattern
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (prefix) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }
	
	  return new RegExp('^' + route, flags(options))
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []
	
	  if (!isarray(keys)) {
	    options = keys
	    keys = []
	  } else if (!options) {
	    options = {}
	  }
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys, options)
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(path, keys, options)
	  }
	
	  return stringToRegexp(path, keys, options)
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _props;
	
	var _skatejs = __webpack_require__(3);
	
	var skate = _interopRequireWildcard(_skatejs);
	
	var _index = __webpack_require__(20);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _prism = __webpack_require__(22);
	
	var _prism2 = _interopRequireDefault(_prism);
	
	var _prismjs = __webpack_require__(23);
	
	var _prismjs2 = _interopRequireDefault(_prismjs);
	
	var _tabs = __webpack_require__(24);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var define = skate.define;
	var h = skate.h;
	
	
	function format(code) {
	  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'markup';
	
	  var lines = code.split('\n');
	  var ident = (lines[1] || '').match(/^\s*/)[0].length;
	  var formatted = lines.map(function (line) {
	    return line.substring(ident);
	  }).join('\n').trim();
	  var highlighted = _prismjs2.default.highlight(formatted, _prismjs2.default.languages[lang]);
	  return highlighted;
	}
	
	var CodeExample = function CodeExample(props, chren) {
	  return h(
	    'div',
	    { 'class': _index2.default.locals.code },
	    h(
	      'style',
	      null,
	      _prism2.default.toString()
	    ),
	    props.title ? h(
	      'h3',
	      { 'class': _index2.default.locals.title },
	      props.title
	    ) : '',
	    props.description ? h(
	      'h3',
	      { 'class': _index2.default.locals.description },
	      props.description
	    ) : '',
	    h(
	      _tabs2.default,
	      null,
	      h(
	        _tabs.Tab,
	        { name: 'Result', selected: true },
	        h(
	          'p',
	          null,
	          chren
	        )
	      ),
	      h(
	        _tabs.Tab,
	        { name: 'JS' },
	        h(
	          'pre',
	          null,
	          h('code', { ref: function ref(e) {
	              return e.innerHTML = format(props.js, 'javascript');
	            } })
	        )
	      ),
	      h(
	        _tabs.Tab,
	        { name: 'HTML' },
	        h(
	          'pre',
	          null,
	          h('code', { ref: function ref(e) {
	              return e.innerHTML = format(props.html, 'markup');
	            } })
	        )
	      )
	    )
	  );
	};
	
	var FeaturePane = function FeaturePane(props, chren) {
	  return h(
	    'div',
	    { 'class': _index2.default.locals.featurePane },
	    h(
	      'h3',
	      null,
	      props.title
	    ),
	    h(
	      'p',
	      null,
	      chren
	    )
	  );
	};
	
	// Hello World
	
	skate.define('x-hello', {
	  render: function render() {
	    return h(
	      'span',
	      null,
	      'Hello, ',
	      h('slot', null),
	      '!'
	    );
	  }
	});
	
	// Simple Counter
	
	skate.define('x-counter', {
	  props: {
	    count: skate.prop.number()
	  },
	  attached: function attached(elem) {
	    elem.__ival = setInterval(function () {
	      return ++elem.count;
	    }, 1000);
	  },
	  detached: function detached(elem) {
	    clearInterval(elem.__ival);
	  },
	  render: function render(elem) {
	    return h(
	      'span',
	      null,
	      'Count: ',
	      elem.count
	    );
	  }
	});
	
	// Todo List
	
	// Dumb component that just emits events when something happens.
	
	function remove(elem, indx) {
	  return function () {
	    skate.emit(elem, 'x-todo-remove', { detail: {
	        todo: elem,
	        item: elem.children[indx]
	      } });
	  };
	}
	
	function submit(elem) {
	  return function (e) {
	    skate.emit(elem, 'x-todo-add', { detail: {
	        todo: elem,
	        item: elem.value
	      } });
	    e.preventDefault();
	  };
	}
	
	// This is currently in RFC: https://github.com/skatejs/skatejs/issues/863
	var _window = window;
	var MutationObserver = _window.MutationObserver;
	
	var symCache = Symbol();
	var symDefault = Symbol();
	var symMap = Symbol();
	var symMo = Symbol();
	var symProps = Symbol();
	
	function distribute(cache, child) {
	  var slot = child.getAttribute('slot') || symDefault;
	  cache[slot] = cache[slot] || [];
	  cache[slot].push(child);
	  return cache;
	}
	
	function distributed(_ref) {
	  var children = _ref.children;
	
	  return [].concat(_toConsumableArray(children)).reduce(distribute, {});
	}
	
	function slotMap(elem, name) {
	  return elem[symMap][name] || symDefault;
	}
	
	function updateProp(elem, name, distributed) {
	  elem[name] = distributed[slotMap(elem, name)];
	}
	
	function updateProps(_ref2) {
	  var elem = _ref2.target;
	
	  var dist = distributed(elem);
	  elem[symProps].forEach(function (name) {
	    return updateProp(elem, name, dist);
	  });
	}
	
	var slot = skate.prop.create({
	  slot: null,
	  get: function get(elem, _ref3) {
	    var name = _ref3.name;
	
	    if (!elem[symMo]) {
	      var mo = new MutationObserver(function (muts) {
	        return muts.forEach(updateProps);
	      });
	      mo.observe(elem, { childList: true });
	      elem[symMo] = mo;
	      elem[symCache] = distributed(elem);
	      elem[symMap] = {};
	      elem[symProps] = [];
	    }
	    elem[symMap][name] = this.slot;
	    elem[symProps].push(name);
	    return elem[symCache][slotMap(elem, name)];
	  },
	  set: function set(elem, _ref4) {
	    var name = _ref4.name;
	    var newValue = _ref4.newValue;
	
	    elem[symCache][slotMap(elem, name)] = newValue || [];
	  }
	});
	
	var symItems = Symbol();
	var Xtodo = skate.define('x-todo', {
	  props: (_props = {}, _defineProperty(_props, symItems, slot()), _defineProperty(_props, 'title', skate.prop.string({ attribute: true })), _defineProperty(_props, 'value', skate.prop.string({ attribute: true })), _props),
	  render: function render(elem) {
	    var numItems = elem[symItems].length;
	    return h(
	      'div',
	      null,
	      h(
	        'h3',
	        null,
	        elem.title,
	        ' (',
	        numItems,
	        ')'
	      ),
	      h(
	        'form',
	        { 'on-submit': submit(elem) },
	        h('input', { 'on-keyup': skate.link(elem), type: 'text', value: elem.value }),
	        h(
	          'button',
	          { type: 'submit' },
	          'Add ',
	          elem.value
	        )
	      ),
	      numItems ? h(
	        'ol',
	        null,
	        elem[symItems].map(function (item, indx) {
	          return h(
	            'li',
	            null,
	            item.textContent,
	            h(
	              'button',
	              { 'on-click': remove(elem, indx) },
	              'x'
	            )
	          );
	        })
	      ) : h(
	        'p',
	        null,
	        'There is nothing to do.'
	      )
	    );
	  }
	});
	
	// Smart component so <x-todo> doesn't mutate itself.
	
	function addTodo(e) {
	  var _e$detail = e.detail;
	  var item = _e$detail.item;
	  var todo = _e$detail.todo;
	
	  var xitem = document.createElement('x-item');
	  xitem.textContent = item;
	  todo.appendChild(xitem);
	  todo.value = '';
	}
	
	function removeTodo(e) {
	  var _e$detail2 = e.detail;
	  var item = _e$detail2.item;
	  var todo = _e$detail2.todo;
	
	  todo.removeChild(item);
	}
	
	skate.define('x-todo-smart', function (_Xtodo) {
	  _inherits(_class, _Xtodo);
	
	  function _class() {
	    _classCallCheck(this, _class);
	
	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }
	
	  _createClass(_class, null, [{
	    key: 'created',
	    value: function created(elem) {
	      elem.addEventListener('x-todo-add', addTodo);
	      elem.addEventListener('x-todo-remove', removeTodo);
	    }
	  }]);
	
	  return _class;
	}(Xtodo));
	
	exports.default = define('sk-page-index', {
	  render: function render() {
	    return h(
	      'div',
	      null,
	      h(
	        'style',
	        null,
	        _index2.default.toString()
	      ),
	      h(
	        'div',
	        { 'class': _index2.default.locals.hero },
	        h(
	          'h1',
	          null,
	          'SkateJS'
	        ),
	        h(
	          'p',
	          null,
	          'Skate is a functional, featherweight and cross-framework compatible web component library built on W3C specs.'
	        )
	      ),
	      h(
	        'div',
	        { 'class': _index2.default.locals.featurePanes },
	        h(
	          FeaturePane,
	          { title: 'Forward-thinking' },
	          'Skate leverages the web platform and is built on top of the ',
	          h(
	            'a',
	            { href: 'https://github.com/w3c/webcomponents' },
	            'W3C Web Component specs'
	          ),
	          '. From this it gets native performance, longevity and cross-framework compatibility.'
	        ),
	        h(
	          FeaturePane,
	          { title: 'Functional' },
	          h(
	            'a',
	            { href: 'https://github.com/google/incremental-dom' },
	            'Incremental DOM'
	          ),
	          ' backs Skate\'s functional rendering pipeline, offering performance, memory-efficiency and simplicity.'
	        ),
	        h(
	          FeaturePane,
	          { title: 'Featherweight' },
	          'Weighing in at only 5k min+gz, it gives you a solid foundation for building complex UI components without downloading the entire internet.'
	        )
	      ),
	      h(
	        'div',
	        { 'class': _index2.default.locals.grid + ' ' + _index2.default.locals.grid2 },
	        h(
	          CodeExample,
	          {
	            title: 'Hello World',
	            description: 'A simple hello world example.',
	            html: '\n              <x-hello>Bob</x-hello>\n            ',
	            js: '\n              skate.define(\'x-hello\', {\n                render() {\n                  return <span>Hello, <slot />!</span>;\n                },\n              });\n            '
	          },
	          h(
	            'x-hello',
	            null,
	            'Bob'
	          )
	        ),
	        h(
	          CodeExample,
	          {
	            title: 'Simple Counter',
	            description: 'A simple counter that shows how to use Shadow DOM name slots and re-rendering.',
	            html: '\n              <x-counter count="1"></x-counter>\n            ',
	            js: '\n              skate.define(\'x-counter\', {\n                props: {\n                  count: skate.prop.number(),\n                },\n                attached(elem) {\n                  elem.__ival = setInterval(() => ++elem.count, 1000);\n                },\n                detached(elem) {\n                  clearInterval(elem.__ival);\n                },\n                render(elem) {\n                  return <span>Count: {elem.count}</span>;\n                },\n              });\n            '
	          },
	          h('x-counter', { count: '1' })
	        )
	      )
	    );
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, "._2o8n2ytNJ2UOwNLCVyzNYy {\n  background-color: #F1EDE4;\n}\n\n._2o8n2ytNJ2UOwNLCVyzNYy ._2mr8X-mQ-giOJSHzOxhpg7 {\n  background-color: #DAD6CE;\n  font-size: 24px;\n  font-weight: 200;\n  margin: 0;\n  padding: 20px;\n}\n\n._2o8n2ytNJ2UOwNLCVyzNYy ._2bgY6v_faJIOWaSxG0ZQ17 {\n  background-color: #DAD6CE;\n  font-size: 14px;\n  font-weight: 100;\n  margin: 0;\n  padding: 20px;\n}\n\n\n\n.iYB-ylcS-0bRr059nTAvY {\n  background-color: #111;\n  color: #eee;\n  flex-basis: 0;\n  flex-grow: 1;\n  font-size: 14px;\n  margin: 10px;\n}\n\n.iYB-ylcS-0bRr059nTAvY a {\n  color: #fff;\n}\n\n.iYB-ylcS-0bRr059nTAvY h3 {\n  background-color: #222;\n  font-weight: 200;\n}\n\n.iYB-ylcS-0bRr059nTAvY p {\n  font-weight: 100;\n}\n\n.iYB-ylcS-0bRr059nTAvY h3,\n.iYB-ylcS-0bRr059nTAvY p {\n  margin: 0;\n  padding: 20px;\n}\n\n._2eA-gGgtu95U0T2LIjbefD {\n  background-color: #333;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: auto;\n  padding: 10px;\n}\n\n\n\n._3D_dMEHrZnxFd8qnEFinfp { \n  display: flex;\n  flex-wrap: wrap;\n}\n._3D_dMEHrZnxFd8qnEFinfp > * { \n  flex: 1 0 0;\n  box-sizing: border-box;\n  min-width: 100%;\n}\n@media (min-width: 500px) {\n  ._3IO_h7OgF7qT3tVrtEBvGh > * { min-width: 50%; }\n}\n@media (min-width: 750px) {\n  ._1xp5oHR2jCWbCKOEmGVTBz > * { min-width: 33.33%; }\n}\n@media (min-width: 1000px) {\n  ._3lTlDqKv0pwHrtQOqWB4kr > * { min-width: 25%; }\n}\n@media (min-width: 1250px) {\n  .GvcmiLQPFcHqLjWtZbCOe > * { min-width: 20%; }\n}\n@media (min-width: 1500px) {\n  ._1RWEsALJT9qMFZdnZnZDdt > * { min-width: 16.66%; }\n  ._2nWdTB7MlNAJgSglZ9R34- > * { min-width: 14.28%; }\n  ._1MeqOMty_QAoNuiNm9teCy > * { min-width: 12.5%; }\n  .rr8oEvwtBEBkJ7EvY8ZYq > * { min-width: 11.11%; }\n  ._7VGTUeyUzCWRVv1cDP6ql > * { min-width: 10%; }\n}\n\n\n\n._34LLXGQWwpFC-AGNgRE-Zi {\n  background-color: #F4547B;\n  color: #fff;\n  padding: 40px;\n}\n\n._34LLXGQWwpFC-AGNgRE-Zi h1 {\n  font-size: 48px;\n  font-weight: 200;\n  margin-top: 0;\n}\n\n._34LLXGQWwpFC-AGNgRE-Zi p {\n  font-size: 24px;\n  font-weight: 100;\n  margin-bottom: 0;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"code": "_2o8n2ytNJ2UOwNLCVyzNYy",
		"code": "_2o8n2ytNJ2UOwNLCVyzNYy",
		"title": "_2mr8X-mQ-giOJSHzOxhpg7",
		"title": "_2mr8X-mQ-giOJSHzOxhpg7",
		"description": "_2bgY6v_faJIOWaSxG0ZQ17",
		"description": "_2bgY6v_faJIOWaSxG0ZQ17",
		"feature-pane": "iYB-ylcS-0bRr059nTAvY",
		"featurePane": "iYB-ylcS-0bRr059nTAvY",
		"feature-panes": "_2eA-gGgtu95U0T2LIjbefD",
		"featurePanes": "_2eA-gGgtu95U0T2LIjbefD",
		"grid": "_3D_dMEHrZnxFd8qnEFinfp",
		"grid": "_3D_dMEHrZnxFd8qnEFinfp",
		"grid-2": "_3IO_h7OgF7qT3tVrtEBvGh",
		"grid2": "_3IO_h7OgF7qT3tVrtEBvGh",
		"grid-3": "_1xp5oHR2jCWbCKOEmGVTBz",
		"grid3": "_1xp5oHR2jCWbCKOEmGVTBz",
		"grid-4": "_3lTlDqKv0pwHrtQOqWB4kr",
		"grid4": "_3lTlDqKv0pwHrtQOqWB4kr",
		"grid-5": "GvcmiLQPFcHqLjWtZbCOe",
		"grid5": "GvcmiLQPFcHqLjWtZbCOe",
		"grid-6": "_1RWEsALJT9qMFZdnZnZDdt",
		"grid6": "_1RWEsALJT9qMFZdnZnZDdt",
		"grid-7": "_2nWdTB7MlNAJgSglZ9R34-",
		"grid7": "_2nWdTB7MlNAJgSglZ9R34-",
		"grid-8": "_1MeqOMty_QAoNuiNm9teCy",
		"grid8": "_1MeqOMty_QAoNuiNm9teCy",
		"grid-9": "rr8oEvwtBEBkJ7EvY8ZYq",
		"grid9": "rr8oEvwtBEBkJ7EvY8ZYq",
		"grid-10": "_7VGTUeyUzCWRVv1cDP6ql",
		"grid10": "_7VGTUeyUzCWRVv1cDP6ql",
		"hero": "_34LLXGQWwpFC-AGNgRE-Zi",
		"hero": "_34LLXGQWwpFC-AGNgRE-Zi"
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #a67f59;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	var _self = (typeof window !== 'undefined')
		? window   // if in browser
		: (
			(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
		);
	
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */
	
	var Prism = (function(){
	
	// Private helper vars
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;
	
	var _ = _self.Prism = {
		util: {
			encode: function (tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},
	
			type: function (o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},
	
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},
	
			// Deep clone a language definition (e.g. to extend it)
			clone: function (o) {
				var type = _.util.type(o);
	
				switch (type) {
					case 'Object':
						var clone = {};
	
						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}
	
						return clone;
	
					case 'Array':
						// Check for existence for IE8
						return o.map && o.map(function(v) { return _.util.clone(v); });
				}
	
				return o;
			}
		},
	
		languages: {
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);
	
				for (var key in redef) {
					lang[key] = redef[key];
				}
	
				return lang;
			},
	
			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];
	
				if (arguments.length == 2) {
					insert = arguments[1];
	
					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}
	
					return grammar;
				}
	
				var ret = {};
	
				for (var token in grammar) {
	
					if (grammar.hasOwnProperty(token)) {
	
						if (token == before) {
	
							for (var newToken in insert) {
	
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}
	
						ret[token] = grammar[token];
					}
				}
	
				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});
	
				return root[inside] = ret;
			},
	
			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type, visited) {
				visited = visited || {};
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, null, visited);
						}
						else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, i, visited);
						}
					}
				}
			}
		},
		plugins: {},
	
		highlightAll: function(async, callback) {
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};
	
			_.hooks.run("before-highlightall", env);
	
			var elements = env.elements || document.querySelectorAll(env.selector);
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, env.callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1].toLowerCase();
				grammar = _.languages[language];
			}
	
			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
			// Set language on the parent, for styling
			parent = element.parentNode;
	
			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
	
			var code = element.textContent;
	
			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};
	
			_.hooks.run('before-sanity-check', env);
	
			if (!env.code || !env.grammar) {
				_.hooks.run('complete', env);
				return;
			}
	
			_.hooks.run('before-highlight', env);
	
			if (async && _self.Worker) {
				var worker = new Worker(_.filename);
	
				worker.onmessage = function(evt) {
					env.highlightedCode = evt.data;
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				};
	
				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
				_.hooks.run('before-insert', env);
	
				env.element.innerHTML = env.highlightedCode;
	
				callback && callback.call(element);
	
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			}
		},
	
		highlight: function (text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},
	
		tokenize: function(text, grammar, language) {
			var Token = _.Token;
	
			var strarr = [text];
	
			var rest = grammar.rest;
	
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}
	
				delete grammar.rest;
			}
	
			tokenloop: for (var token in grammar) {
				if(!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}
	
				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
	
				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						greedy = !!pattern.greedy,
						lookbehindLength = 0,
						alias = pattern.alias;
	
					pattern = pattern.pattern || pattern;
	
					for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop
	
						var str = strarr[i];
	
						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}
	
						if (str instanceof Token) {
							continue;
						}
	
						pattern.lastIndex = 0;
	
						var match = pattern.exec(str),
						    delNum = 1;
	
						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							// Reconstruct the original text using the next two tokens
							var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
							    combStr = str + nextToken;
	
							if (i < strarr.length - 2) {
								combStr += strarr[i + 2].matchedStr || strarr[i + 2];
							}
	
							// Try the pattern again on the reconstructed text
							pattern.lastIndex = 0;
							match = pattern.exec(combStr);
							if (!match) {
								continue;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0);
							// To be a valid candidate, the new match has to start inside of str
							if (from >= str.length) {
								continue;
							}
							var to = match.index + match[0].length,
							    len = str.length + nextToken.length;
	
							// Number of tokens to delete and replace with the new match
							delNum = 3;
	
							if (to <= len) {
								if (strarr[i + 1].greedy) {
									continue;
								}
								delNum = 2;
								combStr = combStr.slice(0, len);
							}
							str = combStr;
						}
	
						if (!match) {
							continue;
						}
	
						if(lookbehind) {
							lookbehindLength = match[1].length;
						}
	
						var from = match.index + lookbehindLength,
						    match = match[0].slice(lookbehindLength),
						    to = from + match.length,
						    before = str.slice(0, from),
						    after = str.slice(to);
	
						var args = [i, delNum];
	
						if (before) {
							args.push(before);
						}
	
						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);
	
						args.push(wrapped);
	
						if (after) {
							args.push(after);
						}
	
						Array.prototype.splice.apply(strarr, args);
					}
				}
			}
	
			return strarr;
		},
	
		hooks: {
			all: {},
	
			add: function (name, callback) {
				var hooks = _.hooks.all;
	
				hooks[name] = hooks[name] || [];
	
				hooks[name].push(callback);
			},
	
			run: function (name, env) {
				var callbacks = _.hooks.all[name];
	
				if (!callbacks || !callbacks.length) {
					return;
				}
	
				for (var i=0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};
	
	var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
		this.type = type;
		this.content = content;
		this.alias = alias;
		// Copy of the full string this token was created from
		this.matchedStr = matchedStr || null;
		this.greedy = !!greedy;
	};
	
	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}
	
		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}
	
		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};
	
		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}
	
		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}
	
		_.hooks.run('wrap', env);
	
		var attributes = '';
	
		for (var name in env.attributes) {
			attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
		}
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
	
	};
	
	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
	 	// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code,
			    immediateClose = message.immediateClose;
	
			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	
		return _self.Prism;
	}
	
	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			if(document.readyState !== "loading") {
				requestAnimationFrame(_.highlightAll, 0);
			}
			else {
				document.addEventListener('DOMContentLoaded', _.highlightAll);
			}
		}
	}
	
	return _self.Prism;
	
	})();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}
	
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}
	
			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};
	
	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function(env) {
	
		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});
	
	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};
	
	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});
		
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}
	
	/* **********************************************
	     Begin prism-clike.js
	********************************************** */
	
	Prism.languages.clike = {
		'comment': [
			{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}
		],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};
	
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}
	
	Prism.languages.js = Prism.languages.javascript;
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function() {
	
			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};
	
			if(Array.prototype.forEach) { // Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');
	
					var language, parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}
	
					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}
	
					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}
	
					var code = document.createElement('code');
					code.className = 'language-' + language;
	
					pre.textContent = '';
	
					code.textContent = 'Loading…';
	
					pre.appendChild(code);
	
					var xhr = new XMLHttpRequest();
	
					xhr.open('GET', src, true);
	
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {
	
							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;
	
								Prism.highlightElement(code);
							}
							else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							}
							else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};
	
					xhr.send(null);
				});
			}
	
		};
	
		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tab = undefined;
	
	var _skatejs = __webpack_require__(3);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _index = __webpack_require__(26);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _tab = __webpack_require__(27);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function onTabsChanged(elem) {
	  return function () {
	    return elem.tabs = [].concat(_toConsumableArray(elem.children));
	  };
	}
	
	function selectTab(tabs, tab) {
	  return function (e) {
	    tabs.forEach(function (cur) {
	      return cur.selected = cur === tab;
	    });
	    e.preventDefault();
	  };
	}
	
	exports.default = (0, _skatejs.define)('sk-tabs', {
	  props: {
	    tabs: _skatejs.prop.array()
	  },
	  updated: function updated(elem, prev) {
	    if (_skatejs.Component.updated(elem, prev)) {
	      return (0, _skatejs.emit)(elem, 'tab-changed', { detail: elem.selected });
	    }
	  },
	  render: function render(elem) {
	    return (0, _skatejs.h)(
	      'div',
	      null,
	      (0, _skatejs.h)(
	        'style',
	        null,
	        _index2.default.toString()
	      ),
	      (0, _skatejs.h)(
	        'div',
	        { 'class': _index2.default.locals.tabs },
	        elem.tabs.map(function (tab) {
	          var _cx;
	
	          return (0, _skatejs.h)(
	            'div',
	            { 'class': (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, _index2.default.locals.tab, true), _defineProperty(_cx, _index2.default.locals.selected, tab.selected), _cx)) },
	            (0, _skatejs.h)(
	              'a',
	              { href: '#' + tab.name, 'on-click': selectTab(elem.tabs, tab) },
	              tab.name
	            )
	          );
	        })
	      ),
	      (0, _skatejs.h)('slot', { 'on-slotchange': onTabsChanged(elem) })
	    );
	  }
	});
	exports.Tab = _tab2.default;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n  display: block;\n}\n\n._2Lx4fB9RrtyJZEybizTry_ {\n  background-color: #DAD6CE;\n}\n\n._3jX3hCKqKj9o6D_5Kx_JBv {\n  display: inline-block;\n}\n\n._3jX3hCKqKj9o6D_5Kx_JBv a {\n  color: #333;\n  display: inline-block;\n  font-size: 18px;\n  font-weight: 200;\n  padding: 20px;\n  text-decoration: none;\n}\n\n._3jX3hCKqKj9o6D_5Kx_JBv._1UoOCaJGOGhObV5161qk5M {\n  background-color: #F1EDE4;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"tabs": "_2Lx4fB9RrtyJZEybizTry_",
		"tabs": "_2Lx4fB9RrtyJZEybizTry_",
		"tab": "_3jX3hCKqKj9o6D_5Kx_JBv",
		"tab": "_3jX3hCKqKj9o6D_5Kx_JBv",
		"selected": "_1UoOCaJGOGhObV5161qk5M",
		"selected": "_1UoOCaJGOGhObV5161qk5M"
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(3);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _tab = __webpack_require__(28);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _debounce = __webpack_require__(29);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function emitSlotChange(elem) {
	  if (!elem.__debouncedSlotChangeEvent) {
	    elem.__debouncedSlotChangeEvent = (0, _debounce2.default)(_skatejs.emit.bind(null, elem, 'slotchange'), 0);
	  }
	  return elem.__debouncedSlotChangeEvent();
	}
	
	exports.default = (0, _skatejs.define)('sk-tabs-tab', {
	  props: {
	    name: _skatejs.prop.string({ attribute: true }),
	    selected: _skatejs.prop.boolean({ attribute: true })
	  },
	  attached: function attached(elem) {
	    emitSlotChange(elem);
	  },
	  detached: function detached(elem) {
	    emitSlotChange(elem);
	  },
	  updated: function updated(elem, prev) {
	    emitSlotChange(elem);
	    return _skatejs.Component.updated(elem, prev);
	  },
	  render: function render(elem) {
	    var _cx;
	
	    return (0, _skatejs.h)(
	      'div',
	      { 'class': (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, _tab2.default.locals.pane, true), _defineProperty(_cx, _tab2.default.locals.selected, elem.selected), _cx)) },
	      (0, _skatejs.h)(
	        'style',
	        null,
	        _tab2.default.toString()
	      ),
	      (0, _skatejs.h)('slot', null)
	    );
	  }
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n  display: block;\n}\n\n._3WkQLUyd_5sA_re7EzYvMx {\n  background-color: #F1EDE4;\n  display: none;\n  margin: 0;\n  overflow: auto;\n  padding: 20px;\n}\n\n._3WkQLUyd_5sA_re7EzYvMx._2nRhrrYvmfuxu34UiGItXs {\n  display: block;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"pane": "_3WkQLUyd_5sA_re7EzYvMx",
		"pane": "_3WkQLUyd_5sA_re7EzYvMx",
		"selected": "_2nRhrrYvmfuxu34UiGItXs",
		"selected": "_2nRhrrYvmfuxu34UiGItXs"
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(30);
	
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */
	
	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;
	
	  function later() {
	    var last = now() - timestamp;
	
	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };
	
	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }
	
	    return result;
	  };
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = Date.now || now
	
	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(3);
	
	var _helpers = __webpack_require__(7);
	
	var _glamor = __webpack_require__(8);
	
	var css = (0, _glamor.style)({
	  backgroundColor: '#fefefe',
	  color: '#333',
	  fontSize: 16,
	  padding: '60px 0 0 0'
	});
	
	exports.default = function (props, chren) {
	  return (0, _skatejs.h)(
	    'div',
	    css,
	    (0, _skatejs.h)(_helpers.Css, { 'for': css }),
	    chren
	  );
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _skatejs = __webpack_require__(3);
	
	var _helpers = __webpack_require__(7);
	
	var _glamor = __webpack_require__(8);
	
	var _logo = __webpack_require__(33);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var css = {
	  header: (0, _glamor.style)({
	    backgroundColor: '#fefefe',
	    color: '#333',
	    position: 'fixed',
	    transition: 'box-shadow .3s ease',
	    width: '100%'
	  }),
	  item: (0, _glamor.style)({
	    display: 'inline-block',
	    margin: 0,
	    padding: 0
	  }),
	  link: (0, _glamor.merge)((0, _glamor.style)({
	    color: '#333',
	    display: 'inline-block',
	    fontSize: 18,
	    margin: 0,
	    padding: 20,
	    textDecoration: 'none',
	    transition: 'background-color .3s ease'
	  }), (0, _glamor.hover)({
	    backgroundColor: '#eee'
	  })),
	  list: (0, _glamor.style)({
	    display: 'inline-block',
	    listStyle: 'none',
	    margin: 0,
	    padding: 0
	  }),
	  scrolled: (0, _glamor.style)({
	    boxShadow: '0 0 15px 0 #333'
	  }),
	  title: (0, _glamor.style)({
	    display: 'inline-block',
	    margin: '0 20px 0 10px',
	    padding: 0,
	    position: 'relative',
	    left: 14,
	    top: 8
	  })
	};
	
	var Item = function Item(props, chren) {
	  return (0, _skatejs.h)(
	    'li',
	    css.item,
	    props.external ? (0, _skatejs.h)(
	      'a',
	      _extends({}, props, css.link),
	      chren
	    ) : (0, _skatejs.h)(
	      _helpers.Link,
	      _extends({}, props, css.link),
	      chren
	    )
	  );
	};
	var allCss = Object.keys(css).map(function (k) {
	  return css[k];
	});
	
	exports.default = function (props) {
	  return (0, _skatejs.h)(
	    'div',
	    null,
	    (0, _skatejs.h)(_helpers.Css, { 'for': allCss }),
	    (0, _skatejs.h)(
	      'div',
	      _extends({}, css.header, props.scrolled ? css.scrolled : {}),
	      (0, _skatejs.h)(
	        'h1',
	        css.title,
	        (0, _skatejs.h)(
	          _helpers.Link,
	          { href: '/' },
	          (0, _skatejs.h)('img', { alt: props.title, src: _logo2.default, width: '30' })
	        )
	      ),
	      (0, _skatejs.h)(
	        'ul',
	        css.list,
	        (0, _skatejs.h)(
	          Item,
	          { href: '/docs' },
	          'Docs'
	        ),
	        (0, _skatejs.h)(
	          Item,
	          { href: 'https://github.com/skatejs/skatejs', external: true },
	          'Github'
	        )
	      )
	    )
	  );
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/cdcf8f64994df2f0ca865f88e17aaa59.png";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Route = undefined;
	
	var _skatejs = __webpack_require__(3);
	
	var _page = __webpack_require__(16);
	
	var _page2 = _interopRequireDefault(_page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createRouteHandler(elem, detail) {
	  return function () {
	    (0, _skatejs.emit)(elem, 'route-change', { detail: detail });
	  };
	}
	
	function onRouteUpdate(elem) {
	  return function (e) {
	    var _e$target = e.target;
	    var component = _e$target.component;
	    var path = _e$target.path;
	
	    if (component && path) {
	      var curr = window.location.pathname;
	      (0, _page2.default)(path, createRouteHandler(elem, component));
	      if (curr === path) {
	        (0, _page2.default)(curr);
	      }
	    }
	  };
	}
	
	exports.default = (0, _skatejs.define)('sk-router', {
	  created: function created(elem) {
	    elem.addEventListener('route-update', onRouteUpdate(elem));
	  }
	});
	var Route = exports.Route = (0, _skatejs.define)('sk-router-route', {
	  props: {
	    // We shouldn't need to specify these as attributes but there is currently
	    // a syncing issue: https://github.com/skatejs/skatejs/issues/840
	    component: { attribute: true },
	    path: { attribute: true }
	  },
	  updated: function updated(elem) {
	    var component = elem.component;
	    var path = elem.path;
	
	    if (component && path) {
	      (0, _skatejs.emit)(elem, 'route-update', {
	        detail: { component: component, path: path }
	      });
	    }
	  }
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (title) {
	  document.title = title;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  font-family: Helvetica;\n  font-size: 14px;\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  color: #333;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index-with-deps.js.map