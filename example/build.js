(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/basics.js
  var require_basics = __commonJS({
    "../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/basics.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compose = exports.pipe = void 0;
      function pipe(value, ...functions) {
        return functions.reduce((currentValue, func) => {
          return func(currentValue);
        }, value);
      }
      exports.pipe = pipe;
      function compose(...functions) {
        return function(value) {
          return functions.reduce((currentValue, func) => {
            return func(currentValue);
          }, value);
        };
      }
      exports.compose = compose;
    }
  });

  // ../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/debug.js
  var require_debug = __commonJS({
    "../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/debug.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.log = void 0;
      function log(message, value) {
        console.log(message, value);
        return value;
      }
      exports.log = log;
    }
  });

  // ../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/maybe.js
  var require_maybe = __commonJS({
    "../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/maybe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.map3 = exports.map2 = exports.map = exports.withDefault = exports.isNothing = exports.isJust = exports.Nothing = exports.Just = void 0;
      function Just2(value) {
        return {
          kind: "just",
          value
        };
      }
      exports.Just = Just2;
      function Nothing2() {
        return {
          kind: "nothing"
        };
      }
      exports.Nothing = Nothing2;
      function isJust(maybe) {
        switch (maybe.kind) {
          case "just":
            return true;
          default:
            return false;
        }
      }
      exports.isJust = isJust;
      function isNothing(maybe) {
        switch (maybe.kind) {
          case "nothing":
            return true;
          default:
            return false;
        }
      }
      exports.isNothing = isNothing;
      function withDefault(value, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return maybeValue.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function map4(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return Just2(func(maybeValue.value));
          default:
            return maybeValue;
        }
      }
      exports.map = map4;
      function map22(func, firstMaybeValue, secondMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
                return Just2(func(firstMaybeValue.value, secondMaybeValue.value));
              default:
                return Nothing2();
            }
          default:
            return Nothing2();
        }
      }
      exports.map2 = map22;
      function map32(func, firstMaybeValue, secondMaybeValue, thirdMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
                switch (thirdMaybeValue.kind) {
                  case "just":
                    return Just2(func(firstMaybeValue.value, secondMaybeValue.value, thirdMaybeValue.value));
                  default:
                    return Nothing2();
                }
              default:
                return Nothing2();
            }
          default:
            return Nothing2();
        }
      }
      exports.map3 = map32;
      function andThen(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return func(maybeValue.value);
          default:
            return Nothing2();
        }
      }
      exports.andThen = andThen;
    }
  });

  // ../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/result.js
  var require_result = __commonJS({
    "../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/result.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.mapError = exports.map3 = exports.map2 = exports.map = exports.fromMaybe = exports.toMaybe = exports.either = exports.withDefault = exports.Err = exports.Ok = void 0;
      var Maybe3 = __importStar(require_maybe());
      function Ok2(value) {
        return {
          kind: "ok",
          value
        };
      }
      exports.Ok = Ok2;
      function Err2(error) {
        return {
          kind: "err",
          error
        };
      }
      exports.Err = Err2;
      function withDefault(value, result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function either(result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return result.error;
        }
      }
      exports.either = either;
      function toMaybe(result) {
        switch (result.kind) {
          case "ok":
            return Maybe3.Just(result.value);
          default:
            return Maybe3.Nothing();
        }
      }
      exports.toMaybe = toMaybe;
      function fromMaybe(error, maybe) {
        switch (maybe.kind) {
          case "just":
            return Ok2(maybe.value);
          default:
            return Err2(error);
        }
      }
      exports.fromMaybe = fromMaybe;
      function map4(func, result) {
        switch (result.kind) {
          case "ok":
            return Ok2(func(result.value));
          default:
            return result;
        }
      }
      exports.map = map4;
      function map22(func, firstResult, secondResult) {
        switch (firstResult.kind) {
          case "ok":
            switch (secondResult.kind) {
              case "ok":
                return Ok2(func(firstResult.value, secondResult.value));
              default:
                return secondResult;
            }
          default:
            return firstResult;
        }
      }
      exports.map2 = map22;
      function map32(func, firstResult, secondResult, thirdResult) {
        switch (firstResult.kind) {
          case "ok":
            switch (secondResult.kind) {
              case "ok":
                switch (thirdResult.kind) {
                  case "ok":
                    return Ok2(func(firstResult.value, secondResult.value, thirdResult.value));
                  default:
                    return thirdResult;
                }
              default:
                return secondResult;
            }
          default:
            return firstResult;
        }
      }
      exports.map3 = map32;
      function mapError(func, result) {
        switch (result.kind) {
          case "err":
            return Err2(func(result.error));
          default:
            return result;
        }
      }
      exports.mapError = mapError;
      function andThen(func, result) {
        switch (result.kind) {
          case "ok":
            return func(result.value);
          default:
            return result;
        }
      }
      exports.andThen = andThen;
    }
  });

  // ../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/tuple.js
  var require_tuple = __commonJS({
    "../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/tuple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.mapBoth = exports.mapSecond = exports.mapFirst = exports.second = exports.first = exports.pair = void 0;
      function pair(first2, second2) {
        return {
          first: first2,
          second: second2
        };
      }
      exports.pair = pair;
      function first(tuple) {
        return tuple.first;
      }
      exports.first = first;
      function second(tuple) {
        return tuple.second;
      }
      exports.second = second;
      function mapFirst(func, tuple) {
        return {
          first: func(tuple.first),
          second: tuple.second
        };
      }
      exports.mapFirst = mapFirst;
      function mapSecond(func, tuple) {
        return {
          first: tuple.first,
          second: func(tuple.second)
        };
      }
      exports.mapSecond = mapSecond;
      function mapBoth(firstFunc, secondFunc, tuple) {
        return {
          first: firstFunc(tuple.first),
          second: secondFunc(tuple.second)
        };
      }
      exports.mapBoth = mapBoth;
    }
  });

  // ../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/index.js
  var require_main = __commonJS({
    "../derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tuple = exports.Result = exports.Maybe = exports.Debug = exports.Basics = void 0;
      exports.Basics = __importStar(require_basics());
      exports.Debug = __importStar(require_debug());
      exports.Maybe = __importStar(require_maybe());
      exports.Result = __importStar(require_result());
      exports.Tuple = __importStar(require_tuple());
    }
  });

  // ../derw-packages/derw-lang/html/node_modules/@eeue56/coed/build/coed.js
  var require_coed = __commonJS({
    "../derw-packages/derw-lang/html/node_modules/@eeue56/coed/build/coed.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.footer = exports.figure = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.program = exports.map = exports.triggerEvent = exports.buildTree = exports.render = exports.voidNode = exports.node = exports.text = exports.onInput = exports.on = exports.attribute = exports.none = exports.style_ = exports.class_ = void 0;
      exports.script = exports.samp = exports.s = exports.ruby = exports.rtc = exports.rt = exports.rp = exports.rb = exports.q = exports.progress = exports.pre = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map_ = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = void 0;
      exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = void 0;
      var ts_core_1 = require_main();
      function class_5(str) {
        return {
          kind: "string",
          key: "class",
          value: str
        };
      }
      exports.class_ = class_5;
      function style_3(key, value) {
        return {
          kind: "style",
          key,
          value
        };
      }
      exports.style_ = style_3;
      function none5() {
        return {
          kind: "none"
        };
      }
      exports.none = none5;
      function attribute5(key, value) {
        if (key === "style")
          return style_3(value.split(":")[0], value.split(":")[1]);
        return {
          kind: "string",
          key,
          value
        };
      }
      exports.attribute = attribute5;
      function on4(name, tagger) {
        return {
          name,
          tagger: (event) => {
            if (event.stopPropagation) {
              event.stopPropagation();
              event.preventDefault();
            }
            return tagger(event);
          }
        };
      }
      exports.on = on4;
      function onInput3(tagger) {
        return {
          name: "input",
          tagger: (event) => {
            event.stopPropagation();
            event.preventDefault();
            return tagger(event.target.value);
          }
        };
      }
      exports.onInput = onInput3;
      function text5(str) {
        return {
          kind: "text",
          text: str
        };
      }
      exports.text = text5;
      function node3(tag, events, attributes, children) {
        return {
          kind: "regular",
          tag,
          events,
          attributes: combineAttributes(attributes),
          children,
          _eventListeners: []
        };
      }
      exports.node = node3;
      function voidNode(tag, events, attributes) {
        return {
          kind: "void",
          tag,
          events,
          attributes: combineAttributes(attributes),
          _eventListeners: []
        };
      }
      exports.voidNode = voidNode;
      function combineAttributes(attributes) {
        const knownStringAttributes = {};
        const knownStyleAttributes = [];
        const otherAttributes = [];
        attributes.forEach((attribute6) => {
          switch (attribute6.kind) {
            case "string":
              if (!knownStringAttributes[attribute6.key]) {
                knownStringAttributes[attribute6.key] = [];
              }
              knownStringAttributes[attribute6.key].push(attribute6);
              break;
            case "style":
              knownStyleAttributes.push(attribute6);
              break;
            default:
              otherAttributes.push(attribute6);
          }
        });
        const combinedAttributes = otherAttributes.filter((attribute6) => attribute6.kind !== "none");
        Object.keys(knownStringAttributes).map((key) => {
          combinedAttributes.push(knownStringAttributes[key].reduce((acc, currentValue) => {
            if (key === "class") {
              acc.value += " " + currentValue.value;
            }
            return acc;
          }));
        });
        if (knownStyleAttributes.length > 0) {
          combinedAttributes.push(knownStyleAttributes.reduce((acc, currentValue) => {
            if (typeof acc.value === "undefined")
              acc.value = "";
            acc.value += currentValue.key + ":" + currentValue.value + ";";
            return acc;
          }, attribute5("style", "")));
        }
        return combinedAttributes;
      }
      function renderAttribute(attribute6) {
        switch (attribute6.kind) {
          case "string":
            if (attribute6.value.indexOf('"') > 0) {
              return `${attribute6.key}='${attribute6.value}'`;
            }
            return `${attribute6.key}="${attribute6.value}"`;
          case "number":
            return `${attribute6.key}=${attribute6.value}`;
          case "style":
            return "";
          case "none":
            return "";
        }
      }
      function render3(node4, depth = 0) {
        const whitespace = " ".repeat(depth * 4);
        switch (node4.kind) {
          case "text":
            return whitespace + node4.text;
          case "void":
          case "regular":
            const attributes = (node4.attributes.length > 0 ? " " : "") + node4.attributes.map(renderAttribute).join(" ");
            switch (node4.kind) {
              case "void":
                return whitespace + `<${node4.tag}${attributes}>`;
              case "regular": {
                if (node4.children.length > 0) {
                  return whitespace + `<${node4.tag}${attributes}>
${node4.children.map((child) => render3(child, depth + 1)).join("\n")}
${whitespace}</${node4.tag}>`;
                }
                return whitespace + `<${node4.tag}${attributes}></${node4.tag}>`;
              }
            }
        }
      }
      exports.render = render3;
      function buildTree(listener, node4) {
        switch (node4.kind) {
          case "text":
            return document.createTextNode(node4.text);
          case "void":
          case "regular": {
            const element = document.createElement(node4.tag);
            node4.attributes.forEach((attribute6) => {
              setAttributeOnElement(element, attribute6);
            });
            node4.events.forEach((event) => {
              const listenerFunction = (data4) => {
                listener(event.tagger(data4));
              };
              element.addEventListener(event.name, listenerFunction, {
                once: true
              });
              node4._eventListeners.push({
                event,
                listener: listenerFunction
              });
            });
            if (node4.kind === "regular") {
              const children = node4.children.map((child) => buildTree(listener, child));
              children.forEach((child) => {
                element.appendChild(child);
              });
            }
            return element;
          }
        }
      }
      exports.buildTree = buildTree;
      function triggerEvent(eventName, payload, node4) {
        switch (node4.kind) {
          case "text":
            return ts_core_1.Maybe.Nothing();
          case "void":
          case "regular":
            const events = node4.events.filter((event) => event.name === eventName);
            if (events.length > 0) {
              return ts_core_1.Maybe.Just(events[0].tagger(payload));
            } else {
              return ts_core_1.Maybe.Nothing();
            }
        }
      }
      exports.triggerEvent = triggerEvent;
      function map4(tagger, tree) {
        switch (tree.kind) {
          case "text":
            return tree;
          case "void":
            return voidNode(tree.tag, tree.events.map((event) => {
              return on4(event.name, (data4) => tagger(event.tagger(data4)));
            }), tree.attributes);
          case "regular":
            return node3(tree.tag, tree.events.map((event) => {
              return on4(event.name, (data4) => tagger(event.tagger(data4)));
            }), tree.attributes, tree.children.map((child) => {
              return map4(tagger, child);
            }));
        }
      }
      exports.map = map4;
      function setAttributeOnElement(element, attribute6) {
        switch (attribute6.kind) {
          case "string":
          case "number":
            const hasSameAttributeAlready = element.getAttribute(attribute6.key) === attribute6.value;
            if (hasSameAttributeAlready)
              return;
            element[attribute6.key] = attribute6.value;
            element.setAttribute(attribute6.key, attribute6.value);
            return;
          case "style":
            element.removeAttribute("style");
            const styles = attribute6.value.split(";");
            for (var i4 = 0; i4 < styles.length; i4++) {
              const styleName = styles[i4].split(":")[0];
              const styleValue = styles[i4].split(":")[1];
              element.style[styleName] = styleValue;
            }
            return;
          case "none":
            return;
        }
      }
      function patchFacts(previousTree, nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular": {
            if (previousTree.kind === nextTree.kind) {
              previousTree.attributes.filter((attribute6) => {
                for (const nextAttribute of nextTree.attributes) {
                  let seen = false;
                  if (attribute6.kind === nextAttribute.kind) {
                    switch (nextAttribute.kind) {
                      case "number":
                      case "string": {
                        seen = nextAttribute.key === attribute6.key;
                        break;
                      }
                      case "style":
                        seen = true;
                    }
                  }
                  if (seen)
                    return false;
                }
                return true;
              }).forEach((attribute6) => {
                switch (attribute6.kind) {
                  case "number":
                    elements.removeAttribute(attribute6.key);
                  case "string":
                    elements.removeAttribute(attribute6.key);
                  case "style":
                    elements.removeAttribute("style");
                }
              });
            }
            nextTree.attributes.forEach((attribute6) => {
              setAttributeOnElement(elements, attribute6);
            });
            return;
          }
          case "text":
            return;
        }
      }
      function patchEvents(listener, previousTree, nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular":
            previousTree._eventListeners.forEach((eventListeners) => {
              elements.removeEventListener(eventListeners.event.name, eventListeners.listener);
            });
            nextTree.events.forEach((event) => {
              const listenerFunction = (data4) => {
                listener(event.tagger(data4));
              };
              elements.addEventListener(event.name, listenerFunction, {
                once: true
              });
              nextTree._eventListeners.push({
                event,
                listener: listenerFunction
              });
            });
            return;
          case "text":
            return;
        }
      }
      function patch(listener, currentTree, nextTree, elements) {
        var _a, _b;
        if (currentTree.kind != nextTree.kind) {
          elements.replaceWith(buildTree(listener, nextTree));
          return nextTree;
        }
        switch (currentTree.kind) {
          case "text":
            nextTree = nextTree;
            elements = elements;
            if (currentTree.text == nextTree.text) {
              return currentTree;
            } else {
              elements.replaceWith(document.createTextNode(nextTree.text));
              return nextTree;
            }
          case "void": {
            currentTree = currentTree;
            nextTree = nextTree;
            if (currentTree.tag != nextTree.tag) {
              elements.replaceWith(buildTree(listener, nextTree));
              return nextTree;
            } else {
              patchFacts(currentTree, nextTree, elements);
              patchEvents(listener, currentTree, nextTree, elements);
              const htmlElements = elements;
            }
            return nextTree;
          }
          case "regular":
            currentTree = currentTree;
            nextTree = nextTree;
            const currentTreeId = (_a = currentTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0]) === null || _a === void 0 ? void 0 : _a.value;
            const nextTreeId = (_b = nextTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0]) === null || _b === void 0 ? void 0 : _b.value;
            if (currentTree.tag !== nextTree.tag || currentTreeId !== nextTreeId) {
              elements.replaceWith(buildTree(listener, nextTree));
              return nextTree;
            } else {
              patchFacts(currentTree, nextTree, elements);
              patchEvents(listener, currentTree, nextTree, elements);
              const htmlElements = elements;
              for (var i4 = 0; i4 < nextTree.children.length; i4++) {
                const currentChild = currentTree.children[i4];
                const nextChild = nextTree.children[i4];
                const node4 = htmlElements.childNodes[i4];
                if (typeof node4 === "undefined") {
                  htmlElements.appendChild(buildTree(listener, nextChild));
                  continue;
                }
                switch (node4.nodeType) {
                  case Node.ELEMENT_NODE:
                    const element = node4;
                    patch(listener, currentChild, nextChild, element);
                    break;
                  case Node.TEXT_NODE:
                    const text6 = node4;
                    patch(listener, currentChild, nextChild, text6);
                    break;
                }
              }
              for (var i4 = htmlElements.childNodes.length - 1; i4 > nextTree.children.length - 1; i4--) {
                const node4 = htmlElements.childNodes[i4];
                htmlElements.removeChild(node4);
              }
            }
            return nextTree;
        }
      }
      function program5(program6) {
        let model = program6.initialModel;
        let previousView = program6.view(program6.initialModel);
        const listener = (msg) => {
          model = program6.update(msg, model, listener);
          const nextView = program6.view(model);
          patch(listener, previousView, nextView, currentTree);
          previousView = nextView;
        };
        let currentTree = buildTree(listener, previousView);
        program6.root.appendChild(currentTree);
        return {
          program: program6,
          send: listener
        };
      }
      exports.program = program5;
      function a3(events, attributes, children) {
        return node3("a", events, attributes, children);
      }
      exports.a = a3;
      function abbr3(events, attributes, children) {
        return node3("abbr", events, attributes, children);
      }
      exports.abbr = abbr3;
      function address3(events, attributes, children) {
        return node3("address", events, attributes, children);
      }
      exports.address = address3;
      function area3(events, attributes) {
        return voidNode("area", events, attributes);
      }
      exports.area = area3;
      function article3(events, attributes, children) {
        return node3("article", events, attributes, children);
      }
      exports.article = article3;
      function aside3(events, attributes, children) {
        return node3("aside", events, attributes, children);
      }
      exports.aside = aside3;
      function audio3(events, attributes, children) {
        return node3("audio", events, attributes, children);
      }
      exports.audio = audio3;
      function b3(events, attributes, children) {
        return node3("b", events, attributes, children);
      }
      exports.b = b3;
      function base3(events, attributes) {
        return voidNode("base", events, attributes);
      }
      exports.base = base3;
      function bdi3(events, attributes, children) {
        return node3("bdi", events, attributes, children);
      }
      exports.bdi = bdi3;
      function bdo3(events, attributes, children) {
        return node3("bdo", events, attributes, children);
      }
      exports.bdo = bdo3;
      function blockquote3(events, attributes, children) {
        return node3("blockquote", events, attributes, children);
      }
      exports.blockquote = blockquote3;
      function body3(events, attributes, children) {
        return node3("body", events, attributes, children);
      }
      exports.body = body3;
      function br3(events, attributes) {
        return voidNode("br", events, attributes);
      }
      exports.br = br3;
      function button4(events, attributes, children) {
        return node3("button", events, attributes, children);
      }
      exports.button = button4;
      function canvas3(events, attributes, children) {
        return node3("canvas", events, attributes, children);
      }
      exports.canvas = canvas3;
      function caption3(events, attributes, children) {
        return node3("caption", events, attributes, children);
      }
      exports.caption = caption3;
      function cite3(events, attributes, children) {
        return node3("cite", events, attributes, children);
      }
      exports.cite = cite3;
      function code3(events, attributes, children) {
        return node3("code", events, attributes, children);
      }
      exports.code = code3;
      function col3(events, attributes) {
        return voidNode("col", events, attributes);
      }
      exports.col = col3;
      function colgroup3(events, attributes, children) {
        return node3("colgroup", events, attributes, children);
      }
      exports.colgroup = colgroup3;
      function data3(events, attributes, children) {
        return node3("data", events, attributes, children);
      }
      exports.data = data3;
      function datalist3(events, attributes, children) {
        return node3("datalist", events, attributes, children);
      }
      exports.datalist = datalist3;
      function dd3(events, attributes, children) {
        return node3("dd", events, attributes, children);
      }
      exports.dd = dd3;
      function del3(events, attributes, children) {
        return node3("del", events, attributes, children);
      }
      exports.del = del3;
      function details3(events, attributes, children) {
        return node3("details", events, attributes, children);
      }
      exports.details = details3;
      function dfn3(events, attributes, children) {
        return node3("dfn", events, attributes, children);
      }
      exports.dfn = dfn3;
      function dialog3(events, attributes, children) {
        return node3("dialog", events, attributes, children);
      }
      exports.dialog = dialog3;
      function div5(events, attributes, children) {
        return node3("div", events, attributes, children);
      }
      exports.div = div5;
      function dl3(events, attributes, children) {
        return node3("dl", events, attributes, children);
      }
      exports.dl = dl3;
      function dt3(events, attributes, children) {
        return node3("dt", events, attributes, children);
      }
      exports.dt = dt3;
      function em3(events, attributes, children) {
        return node3("em", events, attributes, children);
      }
      exports.em = em3;
      function embed3(events, attributes) {
        return voidNode("embed", events, attributes);
      }
      exports.embed = embed3;
      function fieldset3(events, attributes, children) {
        return node3("fieldset", events, attributes, children);
      }
      exports.fieldset = fieldset3;
      function figure3(events, attributes, children) {
        return node3("figure", events, attributes, children);
      }
      exports.figure = figure3;
      function footer3(events, attributes, children) {
        return node3("footer", events, attributes, children);
      }
      exports.footer = footer3;
      function form3(events, attributes, children) {
        return node3("form", events, attributes, children);
      }
      exports.form = form3;
      function h13(events, attributes, children) {
        return node3("h1", events, attributes, children);
      }
      exports.h1 = h13;
      function h23(events, attributes, children) {
        return node3("h2", events, attributes, children);
      }
      exports.h2 = h23;
      function h33(events, attributes, children) {
        return node3("h3", events, attributes, children);
      }
      exports.h3 = h33;
      function h43(events, attributes, children) {
        return node3("h4", events, attributes, children);
      }
      exports.h4 = h43;
      function h53(events, attributes, children) {
        return node3("h5", events, attributes, children);
      }
      exports.h5 = h53;
      function h63(events, attributes, children) {
        return node3("h6", events, attributes, children);
      }
      exports.h6 = h63;
      function head3(events, attributes, children) {
        return node3("head", events, attributes, children);
      }
      exports.head = head3;
      function header3(events, attributes, children) {
        return node3("header", events, attributes, children);
      }
      exports.header = header3;
      function hgroup3(events, attributes, children) {
        return node3("hgroup", events, attributes, children);
      }
      exports.hgroup = hgroup3;
      function hr3(events, attributes) {
        return voidNode("hr", events, attributes);
      }
      exports.hr = hr3;
      function html3(events, attributes, children) {
        return node3("html", events, attributes, children);
      }
      exports.html = html3;
      function i3(events, attributes, children) {
        return node3("i", events, attributes, children);
      }
      exports.i = i3;
      function iframe3(events, attributes, children) {
        return node3("iframe", events, attributes, children);
      }
      exports.iframe = iframe3;
      function img3(events, attributes) {
        return voidNode("img", events, attributes);
      }
      exports.img = img3;
      function input3(events, attributes) {
        return voidNode("input", events, attributes);
      }
      exports.input = input3;
      function ins3(events, attributes, children) {
        return node3("ins", events, attributes, children);
      }
      exports.ins = ins3;
      function kbd3(events, attributes, children) {
        return node3("kbd", events, attributes, children);
      }
      exports.kbd = kbd3;
      function keygen3(events, attributes, children) {
        return node3("keygen", events, attributes, children);
      }
      exports.keygen = keygen3;
      function label3(events, attributes, children) {
        return node3("label", events, attributes, children);
      }
      exports.label = label3;
      function legend3(events, attributes, children) {
        return node3("legend", events, attributes, children);
      }
      exports.legend = legend3;
      function li3(events, attributes, children) {
        return node3("li", events, attributes, children);
      }
      exports.li = li3;
      function link3(events, attributes) {
        return voidNode("link", events, attributes);
      }
      exports.link = link3;
      function main5(events, attributes, children) {
        return node3("main", events, attributes, children);
      }
      exports.main = main5;
      function map_3(events, attributes, children) {
        return node3("map", events, attributes, children);
      }
      exports.map_ = map_3;
      function mark3(events, attributes, children) {
        return node3("mark", events, attributes, children);
      }
      exports.mark = mark3;
      function menu3(events, attributes, children) {
        return node3("menu", events, attributes, children);
      }
      exports.menu = menu3;
      function menuitem3(events, attributes, children) {
        return node3("menuitem", events, attributes, children);
      }
      exports.menuitem = menuitem3;
      function meta3(events, attributes) {
        return voidNode("meta", events, attributes);
      }
      exports.meta = meta3;
      function meter3(events, attributes, children) {
        return node3("meter", events, attributes, children);
      }
      exports.meter = meter3;
      function nav3(events, attributes, children) {
        return node3("nav", events, attributes, children);
      }
      exports.nav = nav3;
      function noscript3(events, attributes, children) {
        return node3("noscript", events, attributes, children);
      }
      exports.noscript = noscript3;
      function object3(events, attributes, children) {
        return node3("object", events, attributes, children);
      }
      exports.object = object3;
      function ol3(events, attributes, children) {
        return node3("ol", events, attributes, children);
      }
      exports.ol = ol3;
      function optgroup3(events, attributes, children) {
        return node3("optgroup", events, attributes, children);
      }
      exports.optgroup = optgroup3;
      function option3(events, attributes, children) {
        return node3("option", events, attributes, children);
      }
      exports.option = option3;
      function output3(events, attributes, children) {
        return node3("output", events, attributes, children);
      }
      exports.output = output3;
      function p3(events, attributes, children) {
        return node3("p", events, attributes, children);
      }
      exports.p = p3;
      function param3(events, attributes) {
        return voidNode("param", events, attributes);
      }
      exports.param = param3;
      function pre3(events, attributes, children) {
        return node3("pre", events, attributes, children);
      }
      exports.pre = pre3;
      function progress3(events, attributes, children) {
        return node3("progress", events, attributes, children);
      }
      exports.progress = progress3;
      function q3(events, attributes, children) {
        return node3("q", events, attributes, children);
      }
      exports.q = q3;
      function rb3(events, attributes, children) {
        return node3("rb", events, attributes, children);
      }
      exports.rb = rb3;
      function rp3(events, attributes, children) {
        return node3("rp", events, attributes, children);
      }
      exports.rp = rp3;
      function rt3(events, attributes, children) {
        return node3("rt", events, attributes, children);
      }
      exports.rt = rt3;
      function rtc3(events, attributes, children) {
        return node3("rtc", events, attributes, children);
      }
      exports.rtc = rtc3;
      function ruby3(events, attributes, children) {
        return node3("ruby", events, attributes, children);
      }
      exports.ruby = ruby3;
      function s3(events, attributes, children) {
        return node3("s", events, attributes, children);
      }
      exports.s = s3;
      function samp3(events, attributes, children) {
        return node3("samp", events, attributes, children);
      }
      exports.samp = samp3;
      function script3(events, attributes, children) {
        return node3("script", events, attributes, children);
      }
      exports.script = script3;
      function section3(events, attributes, children) {
        return node3("section", events, attributes, children);
      }
      exports.section = section3;
      function select3(events, attributes, children) {
        return node3("select", events, attributes, children);
      }
      exports.select = select3;
      function small3(events, attributes, children) {
        return node3("small", events, attributes, children);
      }
      exports.small = small3;
      function source3(events, attributes) {
        return voidNode("source", events, attributes);
      }
      exports.source = source3;
      function span3(events, attributes, children) {
        return node3("span", events, attributes, children);
      }
      exports.span = span3;
      function strong3(events, attributes, children) {
        return node3("strong", events, attributes, children);
      }
      exports.strong = strong3;
      function style4(events, attributes, children) {
        return node3("style", events, attributes, children);
      }
      exports.style = style4;
      function sub3(events, attributes, children) {
        return node3("sub", events, attributes, children);
      }
      exports.sub = sub3;
      function summary3(events, attributes, children) {
        return node3("summary", events, attributes, children);
      }
      exports.summary = summary3;
      function sup3(events, attributes, children) {
        return node3("sup", events, attributes, children);
      }
      exports.sup = sup3;
      function table3(events, attributes, children) {
        return node3("table", events, attributes, children);
      }
      exports.table = table3;
      function tbody3(events, attributes, children) {
        return node3("tbody", events, attributes, children);
      }
      exports.tbody = tbody3;
      function td3(events, attributes, children) {
        return node3("td", events, attributes, children);
      }
      exports.td = td3;
      function template3(events, attributes, children) {
        return node3("template", events, attributes, children);
      }
      exports.template = template3;
      function textarea3(events, attributes, children) {
        return node3("textarea", events, attributes, children);
      }
      exports.textarea = textarea3;
      function tfoot3(events, attributes, children) {
        return node3("tfoot", events, attributes, children);
      }
      exports.tfoot = tfoot3;
      function th3(events, attributes, children) {
        return node3("th", events, attributes, children);
      }
      exports.th = th3;
      function thead3(events, attributes, children) {
        return node3("thead", events, attributes, children);
      }
      exports.thead = thead3;
      function time3(events, attributes, children) {
        return node3("time", events, attributes, children);
      }
      exports.time = time3;
      function title3(events, attributes, children) {
        return node3("title", events, attributes, children);
      }
      exports.title = title3;
      function tr3(events, attributes, children) {
        return node3("tr", events, attributes, children);
      }
      exports.tr = tr3;
      function track3(events, attributes) {
        return voidNode("track", events, attributes);
      }
      exports.track = track3;
      function u3(events, attributes, children) {
        return node3("u", events, attributes, children);
      }
      exports.u = u3;
      function ul3(events, attributes, children) {
        return node3("ul", events, attributes, children);
      }
      exports.ul = ul3;
      function var_3(events, attributes, children) {
        return node3("var", events, attributes, children);
      }
      exports.var_ = var_3;
      function video3(events, attributes, children) {
        return node3("video", events, attributes, children);
      }
      exports.video = video3;
      function wbr3(events, attributes) {
        return voidNode("wbr", events, attributes);
      }
      exports.wbr = wbr3;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/basics.js
  var require_basics2 = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/basics.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compose = exports.pipe = void 0;
      function pipe(value, ...functions) {
        return functions.reduce((currentValue, func) => {
          return func(currentValue);
        }, value);
      }
      exports.pipe = pipe;
      function compose(...functions) {
        return function(value) {
          return functions.reduce((currentValue, func) => {
            return func(currentValue);
          }, value);
        };
      }
      exports.compose = compose;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/debug.js
  var require_debug2 = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/debug.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.log = void 0;
      function log(message, value) {
        console.log(message, value);
        return value;
      }
      exports.log = log;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/maybe.js
  var require_maybe2 = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/maybe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.map3 = exports.map2 = exports.map = exports.withDefault = exports.isNothing = exports.isJust = exports.Nothing = exports.Just = void 0;
      function Just2(value) {
        return {
          kind: "just",
          value
        };
      }
      exports.Just = Just2;
      function Nothing2() {
        return {
          kind: "nothing"
        };
      }
      exports.Nothing = Nothing2;
      function isJust(maybe) {
        switch (maybe.kind) {
          case "just":
            return true;
          default:
            return false;
        }
      }
      exports.isJust = isJust;
      function isNothing(maybe) {
        switch (maybe.kind) {
          case "nothing":
            return true;
          default:
            return false;
        }
      }
      exports.isNothing = isNothing;
      function withDefault(value, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return maybeValue.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function map4(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return Just2(func(maybeValue.value));
          default:
            return maybeValue;
        }
      }
      exports.map = map4;
      function map22(func, firstMaybeValue, secondMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
                return Just2(func(firstMaybeValue.value, secondMaybeValue.value));
              default:
                return Nothing2();
            }
          default:
            return Nothing2();
        }
      }
      exports.map2 = map22;
      function map32(func, firstMaybeValue, secondMaybeValue, thirdMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
                switch (thirdMaybeValue.kind) {
                  case "just":
                    return Just2(func(firstMaybeValue.value, secondMaybeValue.value, thirdMaybeValue.value));
                  default:
                    return Nothing2();
                }
              default:
                return Nothing2();
            }
          default:
            return Nothing2();
        }
      }
      exports.map3 = map32;
      function andThen(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return func(maybeValue.value);
          default:
            return Nothing2();
        }
      }
      exports.andThen = andThen;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/result.js
  var require_result2 = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/result.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.mapError = exports.map3 = exports.map2 = exports.map = exports.fromMaybe = exports.toMaybe = exports.either = exports.withDefault = exports.Err = exports.Ok = void 0;
      var Maybe3 = __importStar(require_maybe2());
      function Ok2(value) {
        return {
          kind: "ok",
          value
        };
      }
      exports.Ok = Ok2;
      function Err2(error) {
        return {
          kind: "err",
          error
        };
      }
      exports.Err = Err2;
      function withDefault(value, result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function either(result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return result.error;
        }
      }
      exports.either = either;
      function toMaybe(result) {
        switch (result.kind) {
          case "ok":
            return Maybe3.Just(result.value);
          default:
            return Maybe3.Nothing();
        }
      }
      exports.toMaybe = toMaybe;
      function fromMaybe(error, maybe) {
        switch (maybe.kind) {
          case "just":
            return Ok2(maybe.value);
          default:
            return Err2(error);
        }
      }
      exports.fromMaybe = fromMaybe;
      function map4(func, result) {
        switch (result.kind) {
          case "ok":
            return Ok2(func(result.value));
          default:
            return result;
        }
      }
      exports.map = map4;
      function map22(func, firstResult, secondResult) {
        switch (firstResult.kind) {
          case "ok":
            switch (secondResult.kind) {
              case "ok":
                return Ok2(func(firstResult.value, secondResult.value));
              default:
                return secondResult;
            }
          default:
            return firstResult;
        }
      }
      exports.map2 = map22;
      function map32(func, firstResult, secondResult, thirdResult) {
        switch (firstResult.kind) {
          case "ok":
            switch (secondResult.kind) {
              case "ok":
                switch (thirdResult.kind) {
                  case "ok":
                    return Ok2(func(firstResult.value, secondResult.value, thirdResult.value));
                  default:
                    return thirdResult;
                }
              default:
                return secondResult;
            }
          default:
            return firstResult;
        }
      }
      exports.map3 = map32;
      function mapError(func, result) {
        switch (result.kind) {
          case "err":
            return Err2(func(result.error));
          default:
            return result;
        }
      }
      exports.mapError = mapError;
      function andThen(func, result) {
        switch (result.kind) {
          case "ok":
            return func(result.value);
          default:
            return result;
        }
      }
      exports.andThen = andThen;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/tuple.js
  var require_tuple2 = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/tuple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.mapBoth = exports.mapSecond = exports.mapFirst = exports.second = exports.first = exports.pair = void 0;
      function pair(first2, second2) {
        return {
          first: first2,
          second: second2
        };
      }
      exports.pair = pair;
      function first(tuple) {
        return tuple.first;
      }
      exports.first = first;
      function second(tuple) {
        return tuple.second;
      }
      exports.second = second;
      function mapFirst(func, tuple) {
        return {
          first: func(tuple.first),
          second: tuple.second
        };
      }
      exports.mapFirst = mapFirst;
      function mapSecond(func, tuple) {
        return {
          first: tuple.first,
          second: func(tuple.second)
        };
      }
      exports.mapSecond = mapSecond;
      function mapBoth(firstFunc, secondFunc, tuple) {
        return {
          first: firstFunc(tuple.first),
          second: secondFunc(tuple.second)
        };
      }
      exports.mapBoth = mapBoth;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/index.js
  var require_main2 = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tuple = exports.Result = exports.Maybe = exports.Debug = exports.Basics = void 0;
      exports.Basics = __importStar(require_basics2());
      exports.Debug = __importStar(require_debug2());
      exports.Maybe = __importStar(require_maybe2());
      exports.Result = __importStar(require_result2());
      exports.Tuple = __importStar(require_tuple2());
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/coed/build/coed.js
  var require_coed2 = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/coed/build/coed.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.footer = exports.figure = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.program = exports.map = exports.triggerEvent = exports.buildTree = exports.render = exports.voidNode = exports.node = exports.text = exports.onInput = exports.on = exports.attribute = exports.none = exports.style_ = exports.class_ = void 0;
      exports.script = exports.samp = exports.s = exports.ruby = exports.rtc = exports.rt = exports.rp = exports.rb = exports.q = exports.progress = exports.pre = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map_ = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = void 0;
      exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = void 0;
      var ts_core_1 = require_main2();
      function class_5(str) {
        return {
          kind: "string",
          key: "class",
          value: str
        };
      }
      exports.class_ = class_5;
      function style_3(key, value) {
        return {
          kind: "style",
          key,
          value
        };
      }
      exports.style_ = style_3;
      function none5() {
        return {
          kind: "none"
        };
      }
      exports.none = none5;
      function attribute5(key, value) {
        if (key === "style")
          return style_3(value.split(":")[0], value.split(":")[1]);
        return {
          kind: "string",
          key,
          value
        };
      }
      exports.attribute = attribute5;
      function on4(name, tagger) {
        return {
          name,
          tagger: (event) => {
            if (event.stopPropagation) {
              event.stopPropagation();
              event.preventDefault();
            }
            return tagger(event);
          }
        };
      }
      exports.on = on4;
      function onInput3(tagger) {
        return {
          name: "input",
          tagger: (event) => {
            event.stopPropagation();
            event.preventDefault();
            return tagger(event.target.value);
          }
        };
      }
      exports.onInput = onInput3;
      function text5(str) {
        return {
          kind: "text",
          text: str
        };
      }
      exports.text = text5;
      function node3(tag, events, attributes, children) {
        return {
          kind: "regular",
          tag,
          events,
          attributes: combineAttributes(attributes),
          children,
          _eventListeners: []
        };
      }
      exports.node = node3;
      function voidNode(tag, events, attributes) {
        return {
          kind: "void",
          tag,
          events,
          attributes: combineAttributes(attributes),
          _eventListeners: []
        };
      }
      exports.voidNode = voidNode;
      function combineAttributes(attributes) {
        const knownStringAttributes = {};
        const knownStyleAttributes = [];
        const otherAttributes = [];
        attributes.forEach((attribute6) => {
          switch (attribute6.kind) {
            case "string":
              if (!knownStringAttributes[attribute6.key]) {
                knownStringAttributes[attribute6.key] = [];
              }
              knownStringAttributes[attribute6.key].push(attribute6);
              break;
            case "style":
              knownStyleAttributes.push(attribute6);
              break;
            default:
              otherAttributes.push(attribute6);
          }
        });
        const combinedAttributes = otherAttributes.filter((attribute6) => attribute6.kind !== "none");
        Object.keys(knownStringAttributes).map((key) => {
          combinedAttributes.push(knownStringAttributes[key].reduce((acc, currentValue) => {
            if (key === "class") {
              acc.value += " " + currentValue.value;
            }
            return acc;
          }));
        });
        if (knownStyleAttributes.length > 0) {
          combinedAttributes.push(knownStyleAttributes.reduce((acc, currentValue) => {
            if (typeof acc.value === "undefined")
              acc.value = "";
            acc.value += currentValue.key + ":" + currentValue.value + ";";
            return acc;
          }, attribute5("style", "")));
        }
        return combinedAttributes;
      }
      function renderAttribute(attribute6) {
        switch (attribute6.kind) {
          case "string":
            if (attribute6.value.indexOf('"') > 0) {
              return `${attribute6.key}='${attribute6.value}'`;
            }
            return `${attribute6.key}="${attribute6.value}"`;
          case "number":
            return `${attribute6.key}=${attribute6.value}`;
          case "style":
            return "";
          case "none":
            return "";
        }
      }
      function render3(node4, depth = 0) {
        const whitespace = " ".repeat(depth * 4);
        switch (node4.kind) {
          case "text":
            return whitespace + node4.text;
          case "void":
          case "regular":
            const attributes = (node4.attributes.length > 0 ? " " : "") + node4.attributes.map(renderAttribute).join(" ");
            switch (node4.kind) {
              case "void":
                return whitespace + `<${node4.tag}${attributes}>`;
              case "regular": {
                if (node4.children.length > 0) {
                  return whitespace + `<${node4.tag}${attributes}>
${node4.children.map((child) => render3(child, depth + 1)).join("\n")}
${whitespace}</${node4.tag}>`;
                }
                return whitespace + `<${node4.tag}${attributes}></${node4.tag}>`;
              }
            }
        }
      }
      exports.render = render3;
      function buildTree(listener, node4) {
        switch (node4.kind) {
          case "text":
            return document.createTextNode(node4.text);
          case "void":
          case "regular": {
            const element = document.createElement(node4.tag);
            node4.attributes.forEach((attribute6) => {
              setAttributeOnElement(element, attribute6);
            });
            node4.events.forEach((event) => {
              const listenerFunction = (data4) => {
                listener(event.tagger(data4));
              };
              element.addEventListener(event.name, listenerFunction, {
                once: true
              });
              node4._eventListeners.push({
                event,
                listener: listenerFunction
              });
            });
            if (node4.kind === "regular") {
              const children = node4.children.map((child) => buildTree(listener, child));
              children.forEach((child) => {
                element.appendChild(child);
              });
            }
            return element;
          }
        }
      }
      exports.buildTree = buildTree;
      function triggerEvent(eventName, payload, node4) {
        switch (node4.kind) {
          case "text":
            return ts_core_1.Maybe.Nothing();
          case "void":
          case "regular":
            const events = node4.events.filter((event) => event.name === eventName);
            if (events.length > 0) {
              return ts_core_1.Maybe.Just(events[0].tagger(payload));
            } else {
              return ts_core_1.Maybe.Nothing();
            }
        }
      }
      exports.triggerEvent = triggerEvent;
      function map4(tagger, tree) {
        switch (tree.kind) {
          case "text":
            return tree;
          case "void":
            return voidNode(tree.tag, tree.events.map((event) => {
              return on4(event.name, (data4) => tagger(event.tagger(data4)));
            }), tree.attributes);
          case "regular":
            return node3(tree.tag, tree.events.map((event) => {
              return on4(event.name, (data4) => tagger(event.tagger(data4)));
            }), tree.attributes, tree.children.map((child) => {
              return map4(tagger, child);
            }));
        }
      }
      exports.map = map4;
      function setAttributeOnElement(element, attribute6) {
        switch (attribute6.kind) {
          case "string":
          case "number":
            const hasSameAttributeAlready = element.getAttribute(attribute6.key) === attribute6.value;
            if (hasSameAttributeAlready)
              return;
            element[attribute6.key] = attribute6.value;
            element.setAttribute(attribute6.key, attribute6.value);
            return;
          case "style":
            element.removeAttribute("style");
            const styles = attribute6.value.split(";");
            for (var i4 = 0; i4 < styles.length; i4++) {
              const styleName = styles[i4].split(":")[0];
              const styleValue = styles[i4].split(":")[1];
              element.style[styleName] = styleValue;
            }
            return;
          case "none":
            return;
        }
      }
      function patchFacts(previousTree, nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular": {
            if (previousTree.kind === nextTree.kind) {
              previousTree.attributes.filter((attribute6) => {
                for (const nextAttribute of nextTree.attributes) {
                  let seen = false;
                  if (attribute6.kind === nextAttribute.kind) {
                    switch (nextAttribute.kind) {
                      case "number":
                      case "string": {
                        seen = nextAttribute.key === attribute6.key;
                        break;
                      }
                      case "style":
                        seen = true;
                    }
                  }
                  if (seen)
                    return false;
                }
                return true;
              }).forEach((attribute6) => {
                switch (attribute6.kind) {
                  case "number":
                    elements.removeAttribute(attribute6.key);
                  case "string":
                    elements.removeAttribute(attribute6.key);
                  case "style":
                    elements.removeAttribute("style");
                }
              });
            }
            nextTree.attributes.forEach((attribute6) => {
              setAttributeOnElement(elements, attribute6);
            });
            return;
          }
          case "text":
            return;
        }
      }
      function patchEvents(listener, previousTree, nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular":
            previousTree._eventListeners.forEach((eventListeners) => {
              elements.removeEventListener(eventListeners.event.name, eventListeners.listener);
            });
            nextTree.events.forEach((event) => {
              const listenerFunction = (data4) => {
                listener(event.tagger(data4));
              };
              elements.addEventListener(event.name, listenerFunction, {
                once: true
              });
              nextTree._eventListeners.push({
                event,
                listener: listenerFunction
              });
            });
            return;
          case "text":
            return;
        }
      }
      function patch(listener, currentTree, nextTree, elements) {
        var _a, _b;
        if (currentTree.kind != nextTree.kind) {
          elements.replaceWith(buildTree(listener, nextTree));
          return nextTree;
        }
        switch (currentTree.kind) {
          case "text":
            nextTree = nextTree;
            elements = elements;
            if (currentTree.text == nextTree.text) {
              return currentTree;
            } else {
              elements.replaceWith(document.createTextNode(nextTree.text));
              return nextTree;
            }
          case "void": {
            currentTree = currentTree;
            nextTree = nextTree;
            if (currentTree.tag != nextTree.tag) {
              elements.replaceWith(buildTree(listener, nextTree));
              return nextTree;
            } else {
              patchFacts(currentTree, nextTree, elements);
              patchEvents(listener, currentTree, nextTree, elements);
              const htmlElements = elements;
            }
            return nextTree;
          }
          case "regular":
            currentTree = currentTree;
            nextTree = nextTree;
            const currentTreeId = (_a = currentTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0]) === null || _a === void 0 ? void 0 : _a.value;
            const nextTreeId = (_b = nextTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0]) === null || _b === void 0 ? void 0 : _b.value;
            if (currentTree.tag !== nextTree.tag || currentTreeId !== nextTreeId) {
              elements.replaceWith(buildTree(listener, nextTree));
              return nextTree;
            } else {
              patchFacts(currentTree, nextTree, elements);
              patchEvents(listener, currentTree, nextTree, elements);
              const htmlElements = elements;
              for (var i4 = 0; i4 < nextTree.children.length; i4++) {
                const currentChild = currentTree.children[i4];
                const nextChild = nextTree.children[i4];
                const node4 = htmlElements.childNodes[i4];
                if (typeof node4 === "undefined") {
                  htmlElements.appendChild(buildTree(listener, nextChild));
                  continue;
                }
                switch (node4.nodeType) {
                  case Node.ELEMENT_NODE:
                    const element = node4;
                    patch(listener, currentChild, nextChild, element);
                    break;
                  case Node.TEXT_NODE:
                    const text6 = node4;
                    patch(listener, currentChild, nextChild, text6);
                    break;
                }
              }
              for (var i4 = htmlElements.childNodes.length - 1; i4 > nextTree.children.length - 1; i4--) {
                const node4 = htmlElements.childNodes[i4];
                htmlElements.removeChild(node4);
              }
            }
            return nextTree;
        }
      }
      function program5(program6) {
        let model = program6.initialModel;
        let previousView = program6.view(program6.initialModel);
        const listener = (msg) => {
          model = program6.update(msg, model, listener);
          const nextView = program6.view(model);
          patch(listener, previousView, nextView, currentTree);
          previousView = nextView;
        };
        let currentTree = buildTree(listener, previousView);
        program6.root.appendChild(currentTree);
        return {
          program: program6,
          send: listener
        };
      }
      exports.program = program5;
      function a3(events, attributes, children) {
        return node3("a", events, attributes, children);
      }
      exports.a = a3;
      function abbr3(events, attributes, children) {
        return node3("abbr", events, attributes, children);
      }
      exports.abbr = abbr3;
      function address3(events, attributes, children) {
        return node3("address", events, attributes, children);
      }
      exports.address = address3;
      function area3(events, attributes) {
        return voidNode("area", events, attributes);
      }
      exports.area = area3;
      function article3(events, attributes, children) {
        return node3("article", events, attributes, children);
      }
      exports.article = article3;
      function aside3(events, attributes, children) {
        return node3("aside", events, attributes, children);
      }
      exports.aside = aside3;
      function audio3(events, attributes, children) {
        return node3("audio", events, attributes, children);
      }
      exports.audio = audio3;
      function b3(events, attributes, children) {
        return node3("b", events, attributes, children);
      }
      exports.b = b3;
      function base3(events, attributes) {
        return voidNode("base", events, attributes);
      }
      exports.base = base3;
      function bdi3(events, attributes, children) {
        return node3("bdi", events, attributes, children);
      }
      exports.bdi = bdi3;
      function bdo3(events, attributes, children) {
        return node3("bdo", events, attributes, children);
      }
      exports.bdo = bdo3;
      function blockquote3(events, attributes, children) {
        return node3("blockquote", events, attributes, children);
      }
      exports.blockquote = blockquote3;
      function body3(events, attributes, children) {
        return node3("body", events, attributes, children);
      }
      exports.body = body3;
      function br3(events, attributes) {
        return voidNode("br", events, attributes);
      }
      exports.br = br3;
      function button4(events, attributes, children) {
        return node3("button", events, attributes, children);
      }
      exports.button = button4;
      function canvas3(events, attributes, children) {
        return node3("canvas", events, attributes, children);
      }
      exports.canvas = canvas3;
      function caption3(events, attributes, children) {
        return node3("caption", events, attributes, children);
      }
      exports.caption = caption3;
      function cite3(events, attributes, children) {
        return node3("cite", events, attributes, children);
      }
      exports.cite = cite3;
      function code3(events, attributes, children) {
        return node3("code", events, attributes, children);
      }
      exports.code = code3;
      function col3(events, attributes) {
        return voidNode("col", events, attributes);
      }
      exports.col = col3;
      function colgroup3(events, attributes, children) {
        return node3("colgroup", events, attributes, children);
      }
      exports.colgroup = colgroup3;
      function data3(events, attributes, children) {
        return node3("data", events, attributes, children);
      }
      exports.data = data3;
      function datalist3(events, attributes, children) {
        return node3("datalist", events, attributes, children);
      }
      exports.datalist = datalist3;
      function dd3(events, attributes, children) {
        return node3("dd", events, attributes, children);
      }
      exports.dd = dd3;
      function del3(events, attributes, children) {
        return node3("del", events, attributes, children);
      }
      exports.del = del3;
      function details3(events, attributes, children) {
        return node3("details", events, attributes, children);
      }
      exports.details = details3;
      function dfn3(events, attributes, children) {
        return node3("dfn", events, attributes, children);
      }
      exports.dfn = dfn3;
      function dialog3(events, attributes, children) {
        return node3("dialog", events, attributes, children);
      }
      exports.dialog = dialog3;
      function div5(events, attributes, children) {
        return node3("div", events, attributes, children);
      }
      exports.div = div5;
      function dl3(events, attributes, children) {
        return node3("dl", events, attributes, children);
      }
      exports.dl = dl3;
      function dt3(events, attributes, children) {
        return node3("dt", events, attributes, children);
      }
      exports.dt = dt3;
      function em3(events, attributes, children) {
        return node3("em", events, attributes, children);
      }
      exports.em = em3;
      function embed3(events, attributes) {
        return voidNode("embed", events, attributes);
      }
      exports.embed = embed3;
      function fieldset3(events, attributes, children) {
        return node3("fieldset", events, attributes, children);
      }
      exports.fieldset = fieldset3;
      function figure3(events, attributes, children) {
        return node3("figure", events, attributes, children);
      }
      exports.figure = figure3;
      function footer3(events, attributes, children) {
        return node3("footer", events, attributes, children);
      }
      exports.footer = footer3;
      function form3(events, attributes, children) {
        return node3("form", events, attributes, children);
      }
      exports.form = form3;
      function h13(events, attributes, children) {
        return node3("h1", events, attributes, children);
      }
      exports.h1 = h13;
      function h23(events, attributes, children) {
        return node3("h2", events, attributes, children);
      }
      exports.h2 = h23;
      function h33(events, attributes, children) {
        return node3("h3", events, attributes, children);
      }
      exports.h3 = h33;
      function h43(events, attributes, children) {
        return node3("h4", events, attributes, children);
      }
      exports.h4 = h43;
      function h53(events, attributes, children) {
        return node3("h5", events, attributes, children);
      }
      exports.h5 = h53;
      function h63(events, attributes, children) {
        return node3("h6", events, attributes, children);
      }
      exports.h6 = h63;
      function head3(events, attributes, children) {
        return node3("head", events, attributes, children);
      }
      exports.head = head3;
      function header3(events, attributes, children) {
        return node3("header", events, attributes, children);
      }
      exports.header = header3;
      function hgroup3(events, attributes, children) {
        return node3("hgroup", events, attributes, children);
      }
      exports.hgroup = hgroup3;
      function hr3(events, attributes) {
        return voidNode("hr", events, attributes);
      }
      exports.hr = hr3;
      function html3(events, attributes, children) {
        return node3("html", events, attributes, children);
      }
      exports.html = html3;
      function i3(events, attributes, children) {
        return node3("i", events, attributes, children);
      }
      exports.i = i3;
      function iframe3(events, attributes, children) {
        return node3("iframe", events, attributes, children);
      }
      exports.iframe = iframe3;
      function img3(events, attributes) {
        return voidNode("img", events, attributes);
      }
      exports.img = img3;
      function input3(events, attributes) {
        return voidNode("input", events, attributes);
      }
      exports.input = input3;
      function ins3(events, attributes, children) {
        return node3("ins", events, attributes, children);
      }
      exports.ins = ins3;
      function kbd3(events, attributes, children) {
        return node3("kbd", events, attributes, children);
      }
      exports.kbd = kbd3;
      function keygen3(events, attributes, children) {
        return node3("keygen", events, attributes, children);
      }
      exports.keygen = keygen3;
      function label3(events, attributes, children) {
        return node3("label", events, attributes, children);
      }
      exports.label = label3;
      function legend3(events, attributes, children) {
        return node3("legend", events, attributes, children);
      }
      exports.legend = legend3;
      function li3(events, attributes, children) {
        return node3("li", events, attributes, children);
      }
      exports.li = li3;
      function link3(events, attributes) {
        return voidNode("link", events, attributes);
      }
      exports.link = link3;
      function main5(events, attributes, children) {
        return node3("main", events, attributes, children);
      }
      exports.main = main5;
      function map_3(events, attributes, children) {
        return node3("map", events, attributes, children);
      }
      exports.map_ = map_3;
      function mark3(events, attributes, children) {
        return node3("mark", events, attributes, children);
      }
      exports.mark = mark3;
      function menu3(events, attributes, children) {
        return node3("menu", events, attributes, children);
      }
      exports.menu = menu3;
      function menuitem3(events, attributes, children) {
        return node3("menuitem", events, attributes, children);
      }
      exports.menuitem = menuitem3;
      function meta3(events, attributes) {
        return voidNode("meta", events, attributes);
      }
      exports.meta = meta3;
      function meter3(events, attributes, children) {
        return node3("meter", events, attributes, children);
      }
      exports.meter = meter3;
      function nav3(events, attributes, children) {
        return node3("nav", events, attributes, children);
      }
      exports.nav = nav3;
      function noscript3(events, attributes, children) {
        return node3("noscript", events, attributes, children);
      }
      exports.noscript = noscript3;
      function object3(events, attributes, children) {
        return node3("object", events, attributes, children);
      }
      exports.object = object3;
      function ol3(events, attributes, children) {
        return node3("ol", events, attributes, children);
      }
      exports.ol = ol3;
      function optgroup3(events, attributes, children) {
        return node3("optgroup", events, attributes, children);
      }
      exports.optgroup = optgroup3;
      function option3(events, attributes, children) {
        return node3("option", events, attributes, children);
      }
      exports.option = option3;
      function output3(events, attributes, children) {
        return node3("output", events, attributes, children);
      }
      exports.output = output3;
      function p3(events, attributes, children) {
        return node3("p", events, attributes, children);
      }
      exports.p = p3;
      function param3(events, attributes) {
        return voidNode("param", events, attributes);
      }
      exports.param = param3;
      function pre3(events, attributes, children) {
        return node3("pre", events, attributes, children);
      }
      exports.pre = pre3;
      function progress3(events, attributes, children) {
        return node3("progress", events, attributes, children);
      }
      exports.progress = progress3;
      function q3(events, attributes, children) {
        return node3("q", events, attributes, children);
      }
      exports.q = q3;
      function rb3(events, attributes, children) {
        return node3("rb", events, attributes, children);
      }
      exports.rb = rb3;
      function rp3(events, attributes, children) {
        return node3("rp", events, attributes, children);
      }
      exports.rp = rp3;
      function rt3(events, attributes, children) {
        return node3("rt", events, attributes, children);
      }
      exports.rt = rt3;
      function rtc3(events, attributes, children) {
        return node3("rtc", events, attributes, children);
      }
      exports.rtc = rtc3;
      function ruby3(events, attributes, children) {
        return node3("ruby", events, attributes, children);
      }
      exports.ruby = ruby3;
      function s3(events, attributes, children) {
        return node3("s", events, attributes, children);
      }
      exports.s = s3;
      function samp3(events, attributes, children) {
        return node3("samp", events, attributes, children);
      }
      exports.samp = samp3;
      function script3(events, attributes, children) {
        return node3("script", events, attributes, children);
      }
      exports.script = script3;
      function section3(events, attributes, children) {
        return node3("section", events, attributes, children);
      }
      exports.section = section3;
      function select3(events, attributes, children) {
        return node3("select", events, attributes, children);
      }
      exports.select = select3;
      function small3(events, attributes, children) {
        return node3("small", events, attributes, children);
      }
      exports.small = small3;
      function source3(events, attributes) {
        return voidNode("source", events, attributes);
      }
      exports.source = source3;
      function span3(events, attributes, children) {
        return node3("span", events, attributes, children);
      }
      exports.span = span3;
      function strong3(events, attributes, children) {
        return node3("strong", events, attributes, children);
      }
      exports.strong = strong3;
      function style4(events, attributes, children) {
        return node3("style", events, attributes, children);
      }
      exports.style = style4;
      function sub3(events, attributes, children) {
        return node3("sub", events, attributes, children);
      }
      exports.sub = sub3;
      function summary3(events, attributes, children) {
        return node3("summary", events, attributes, children);
      }
      exports.summary = summary3;
      function sup3(events, attributes, children) {
        return node3("sup", events, attributes, children);
      }
      exports.sup = sup3;
      function table3(events, attributes, children) {
        return node3("table", events, attributes, children);
      }
      exports.table = table3;
      function tbody3(events, attributes, children) {
        return node3("tbody", events, attributes, children);
      }
      exports.tbody = tbody3;
      function td3(events, attributes, children) {
        return node3("td", events, attributes, children);
      }
      exports.td = td3;
      function template3(events, attributes, children) {
        return node3("template", events, attributes, children);
      }
      exports.template = template3;
      function textarea3(events, attributes, children) {
        return node3("textarea", events, attributes, children);
      }
      exports.textarea = textarea3;
      function tfoot3(events, attributes, children) {
        return node3("tfoot", events, attributes, children);
      }
      exports.tfoot = tfoot3;
      function th3(events, attributes, children) {
        return node3("th", events, attributes, children);
      }
      exports.th = th3;
      function thead3(events, attributes, children) {
        return node3("thead", events, attributes, children);
      }
      exports.thead = thead3;
      function time3(events, attributes, children) {
        return node3("time", events, attributes, children);
      }
      exports.time = time3;
      function title3(events, attributes, children) {
        return node3("title", events, attributes, children);
      }
      exports.title = title3;
      function tr3(events, attributes, children) {
        return node3("tr", events, attributes, children);
      }
      exports.tr = tr3;
      function track3(events, attributes) {
        return voidNode("track", events, attributes);
      }
      exports.track = track3;
      function u3(events, attributes, children) {
        return node3("u", events, attributes, children);
      }
      exports.u = u3;
      function ul3(events, attributes, children) {
        return node3("ul", events, attributes, children);
      }
      exports.ul = ul3;
      function var_3(events, attributes, children) {
        return node3("var", events, attributes, children);
      }
      exports.var_ = var_3;
      function video3(events, attributes, children) {
        return node3("video", events, attributes, children);
      }
      exports.video = video3;
      function wbr3(events, attributes) {
        return voidNode("wbr", events, attributes);
      }
      exports.wbr = wbr3;
    }
  });

  // ../derw-packages/derw-lang/html/src/Html.ts
  var coed = __toESM(require_coed());
  var import_coed = __toESM(require_coed());
  function text2(str) {
    return coed.text(str);
  }
  function program2(p3) {
    return coed.program(p3);
  }
  function class_2(name) {
    return coed.class_(name);
  }
  var none2 = coed.none();
  function div2(events, attributes, children) {
    return coed.div(events, attributes, children);
  }
  function style2(events, attributes, children) {
    return coed.style(events, attributes, children);
  }

  // ../derw-packages/derw-lang/stdlib/src/List.ts
  function map2(fn, xs) {
    return xs.map(fn);
  }

  // ../derw-packages/derw-lang/stdlib/src/Maybe.ts
  function Just(args) {
    return __spreadValues({
      kind: "Just"
    }, args);
  }
  function Nothing(args) {
    return __spreadValues({
      kind: "Nothing"
    }, args);
  }

  // ../src/HtmlTest.ts
  function Ok(args) {
    return __spreadValues({
      kind: "Ok"
    }, args);
  }
  function Err(args) {
    return __spreadValues({
      kind: "Err"
    }, args);
  }
  function click(query) {
    const element = document.querySelector(query);
    if (element === null) {
      return Err({ value: `Failed to find ${query}` });
    } else {
      const runClick = element.click();
      return Ok({ value: "Clicked element" });
    }
  }
  function getAttribute(query, attribute5) {
    const element = document.querySelector(query);
    if (element === null) {
      return Err({ value: `Failed to find ${query}` });
    } else {
      return Ok({ value: element.getAttribute(attribute5) || element[attribute5] });
    }
  }
  function Click(args) {
    return __spreadValues({
      kind: "Click"
    }, args);
  }
  function ValidateAttribute(args) {
    return __spreadValues({
      kind: "ValidateAttribute"
    }, args);
  }
  function Success(args) {
    return __spreadValues({
      kind: "Success"
    }, args);
  }
  function Failure(args) {
    return __spreadValues({
      kind: "Failure"
    }, args);
  }
  function NotRun(args) {
    return __spreadValues({
      kind: "NotRun"
    }, args);
  }
  function CompletedPlan(args) {
    return __spreadValues({
      kind: "CompletedPlan"
    }, args);
  }
  function notRun(xs) {
    return map2(function(x) {
      return {
        action: x,
        step: NotRun({})
      };
    }, xs);
  }
  var emptyList = [];
  function testPlanHelper(xs) {
    const _res3835 = xs;
    switch (_res3835.length) {
      case 0: {
        return emptyList;
      }
      case _res3835.length: {
        if (_res3835.length >= 1) {
          const [x, ...ys] = _res3835;
          const _res120 = x;
          switch (_res120.kind) {
            case "Click": {
              const { selector } = _res120;
              const _res677072758 = click(selector);
              switch (_res677072758.kind) {
                case "Ok": {
                  const { value } = _res677072758;
                  return [{
                    action: x,
                    step: Success({})
                  }, ...testPlanHelper(ys)];
                }
                case "Err": {
                  const { value } = _res677072758;
                  return [{
                    action: x,
                    step: Failure({ reason: value })
                  }, ...notRun(ys)];
                }
              }
              ;
            }
            case "ValidateAttribute": {
              const { selector, attributeName, attributeValue } = _res120;
              const _res458438935 = getAttribute(selector, attributeName);
              switch (_res458438935.kind) {
                case "Ok": {
                  const { value } = _res458438935;
                  if (value === attributeValue) {
                    return [{
                      action: x,
                      step: Success({})
                    }, ...testPlanHelper(ys)];
                  } else {
                    return [{
                      action: x,
                      step: Failure({ reason: `Expected ${selector}.${attributeName} to be ${attributeValue} but was ${value}` })
                    }, ...notRun(ys)];
                  }
                  ;
                }
                case "Err": {
                  const { value } = _res458438935;
                  return [{
                    action: x,
                    step: Failure({ reason: value })
                  }, ...notRun(ys)];
                }
              }
              ;
            }
          }
          ;
        }
      }
      default: {
        return emptyList;
      }
    }
  }
  function testPlan(actions) {
    const plan2 = CompletedPlan({ plan: testPlanHelper(actions) });
    return plan2;
  }
  var greenCircle = "\u{1F7E2}";
  var orangeCircle = "\u{1F7E0}";
  var redCircle = "\u{1F534}";
  function consoleColorClass(actionStep, message) {
    const _res339290344 = actionStep.step;
    switch (_res339290344.kind) {
      case "Success": {
        return globalThis.console.log(greenCircle, message);
      }
      case "Failure": {
        const {} = _res339290344;
        return globalThis.console.error(redCircle, message);
      }
      case "NotRun": {
        return globalThis.console.warn(orangeCircle, message);
      }
    }
  }
  function consoleActionStep(actionStep) {
    const _res171086974 = actionStep.action;
    switch (_res171086974.kind) {
      case "Click": {
        const { selector } = _res171086974;
        return consoleColorClass(actionStep, `Click on ${selector}`);
      }
      case "ValidateAttribute": {
        const { selector, attributeName, attributeValue } = _res171086974;
        return consoleColorClass(actionStep, `Ensure that ${selector} has ${attributeName} === ${attributeValue}`);
      }
    }
  }
  function consolePlan(overallPlan) {
    const _res1276564202 = overallPlan;
    switch (_res1276564202.kind) {
      case "CompletedPlan": {
        const { plan: plan2 } = _res1276564202;
        const run = map2(consoleActionStep, plan2);
        return void 0;
      }
    }
  }
  function viewActionStep(actionStep) {
    const colorClass = function() {
      const _res339290344 = actionStep.step;
      switch (_res339290344.kind) {
        case "Success": {
          return "html-test-success";
        }
        case "Failure": {
          const {} = _res339290344;
          return "html-test-failure";
        }
        case "NotRun": {
          return "html-test-not-run";
        }
      }
    }();
    const colorCircle = function() {
      const _res339290344 = actionStep.step;
      switch (_res339290344.kind) {
        case "Success": {
          return greenCircle;
        }
        case "Failure": {
          const { reason } = _res339290344;
          return `${redCircle} ${reason} ${redCircle}`;
        }
        case "NotRun": {
          return orangeCircle;
        }
      }
    }();
    const _res171086974 = actionStep.action;
    switch (_res171086974.kind) {
      case "Click": {
        const { selector } = _res171086974;
        return div2([], [class_2("html-test-click"), class_2(colorClass)], [text2(`${colorCircle} Click on ${selector}`)]);
      }
      case "ValidateAttribute": {
        const { selector, attributeName, attributeValue } = _res171086974;
        return div2([], [class_2("html-test-validate-attribute"), class_2(colorClass)], [text2(`${colorCircle} Ensure that ${selector} has ${attributeName} === ${attributeValue}`)]);
      }
    }
  }
  var viewStyle = style2([], [], [text2(`.html-test-plan { margin: 10px; border: 1px solid black; }`)]);
  function viewPlan(overallPlan) {
    const _res1276564202 = overallPlan;
    switch (_res1276564202.kind) {
      case "CompletedPlan": {
        const { plan: plan2 } = _res1276564202;
        return div2([], [class_2("html-test-plan")], [viewStyle, ...map2(viewActionStep, plan2)]);
      }
    }
  }
  function view(model) {
    const _res2117102339 = model.currentPlan;
    switch (_res2117102339.kind) {
      case "Just": {
        const { value } = _res2117102339;
        return div2([], [], [viewStyle, viewPlan(value), div2([], [], [text2("State reset to original model.")])]);
      }
      case "Nothing": {
        return div2([], [class_2("html-test-plan")], [viewStyle, text2("Waiting to run a test.")]);
      }
    }
  }
  var htmlTestRoot = document.getElementById("html-test-root");
  var initialModel = { currentPlan: Nothing({}) };
  function SetPlan(args) {
    return __spreadValues({
      kind: "SetPlan"
    }, args);
  }
  function update(msg, model) {
    const _res108417 = msg;
    switch (_res108417.kind) {
      case "Noop": {
        return model;
      }
      case "SetPlan": {
        const { plan: plan2 } = _res108417;
        return { currentPlan: Just({ value: plan2 }) };
      }
    }
  }
  var main2 = htmlTestRoot === null ? Nothing({}) : Just({ value: program2({
    initialModel,
    view,
    update,
    root: htmlTestRoot
  }) });
  function runPlan(actions) {
    const _res3343801 = main2;
    switch (_res3343801.kind) {
      case "Nothing": {
        return consolePlan(testPlan(actions));
      }
      case "Just": {
        const { value: program5 } = _res3343801;
        return function(x) {
          return program5.send(SetPlan({ plan: x }));
        }(testPlan(actions));
      }
    }
  }

  // derw-packages/derw-lang/html/src/Html.ts
  var coed2 = __toESM(require_coed2());
  var import_coed2 = __toESM(require_coed2());
  function text4(str) {
    return coed2.text(str);
  }
  function program4(p3) {
    return coed2.program(p3);
  }
  function on3(name, tagger) {
    return coed2.on(name, tagger);
  }
  function onClick(fn) {
    return on3("click", fn);
  }
  var none4 = coed2.none();
  function button3(events, attributes, children) {
    return coed2.button(events, attributes, children);
  }
  function div4(events, attributes, children) {
    return coed2.div(events, attributes, children);
  }

  // src/Main.ts
  var initialModel2 = { number: 0 };
  function Clicked(args) {
    return __spreadValues({
      kind: "Clicked"
    }, args);
  }
  function RunTests(args) {
    return __spreadValues({
      kind: "RunTests"
    }, args);
  }
  var plan = [ValidateAttribute({
    selector: "button",
    attributeName: "innerHTML",
    attributeValue: "0"
  }), Click({ selector: "button" }), ValidateAttribute({
    selector: "button",
    attributeName: "innerHTML",
    attributeValue: "3"
  }), Click({ selector: "button" }), Click({ selector: "button" }), Click({ selector: "button" }), ValidateAttribute({
    selector: "button",
    attributeName: "innerHTML",
    attributeValue: "4"
  })];
  function update2(msg, model, send) {
    const _res108417 = msg;
    switch (_res108417.kind) {
      case "Noop": {
        return model;
      }
      case "Clicked": {
        return { number: model.number + 1 };
      }
      case "RunTests": {
        const blank = runPlan(plan);
        return model;
      }
    }
  }
  var viewTestRunner = button3([onClick(function(_) {
    return RunTests({});
  })], [], [text4("Run tests")]);
  function view2(model) {
    return div4([], [], [button3([onClick(function(_) {
      return Clicked({});
    })], [], [text4(`${model.number}`)]), viewTestRunner]);
  }
  var root = document.getElementById("root");
  var main4 = program4({
    initialModel: initialModel2,
    view: view2,
    update: update2,
    root
  });
})();
