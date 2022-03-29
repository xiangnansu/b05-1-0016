"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _element = /*#__PURE__*/new WeakMap();

var _running = /*#__PURE__*/new WeakMap();

var AutoPlay = /*#__PURE__*/function () {
  function AutoPlay(_click) {
    var _this = this;

    _classCallCheck(this, AutoPlay);

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _running, {
      writable: true,
      value: void 0
    });

    if (!AutoPlay.instance) {
      _classPrivateFieldSet(this, _element, new Element(document.querySelector(".autoplay")));

      _classPrivateFieldSet(this, _running, false);

      var handlers = {
        click: function click() {
          if (_classPrivateFieldGet(_this, _running)) {
            _classPrivateFieldGet(_this, _element).image = "url(shapes/autoplay-play.svg)";
          } else {
            _classPrivateFieldGet(_this, _element).image = "url(shapes/autoplay-pause.svg)";
          }

          _classPrivateFieldSet(_this, _running, !_classPrivateFieldGet(_this, _running));

          _click && _click(_classPrivateFieldGet(_this, _running));
        },
        pointerover: function pointerover(left, top) {
          Sound.pointerover.play();
        }
      };

      _classPrivateFieldGet(this, _element).domelement.addEventListener("click", handlers.click);

      _classPrivateFieldGet(this, _element).addEventListener("pointerover", handlers.pointerover);
    }

    return AutoPlay.instance || (AutoPlay.instance = this);
  }

  _createClass(AutoPlay, [{
    key: "reset",
    value: function reset() {
      _classPrivateFieldGet(this, _element).image = "url(shapes/autoplay-play.svg)";

      _classPrivateFieldSet(this, _running, false);
    }
  }]);

  return AutoPlay;
}();

var BackgroundMusic = /*#__PURE__*/_createClass(function BackgroundMusic() {
  _classCallCheck(this, BackgroundMusic);

  if (!BackgroundMusic.instance) {
    var audio = Sound.background;
    audio && audio.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });

    var autoplay = function autoplay() {
      audio && (audio.muted = true);
      audio && audio.play();
      audio && (audio.muted = false);

      if (audio && audio.duration > 0 && audio && audio.paused === false) {
        document.removeEventListener("pointerdown", autoplay);
      } else {
        setTimeout(function () {
          document.dispatchEvent(new Event("pointerdown"));
        }, 100);
      }
    };

    document.addEventListener("pointerdown", autoplay);
  }

  return BackgroundMusic.instance || (BackgroundMusic.instance = this);
});

var _element2 = /*#__PURE__*/new WeakMap();

var _enable = /*#__PURE__*/new WeakMap();

var Cursor = /*#__PURE__*/function () {
  function Cursor(domelement) {
    var _this2 = this;

    _classCallCheck(this, Cursor);

    _classPrivateFieldInitSpec(this, _element2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _enable, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$pointerdown", void 0);

    _defineProperty(this, "$pointermove", void 0);

    _defineProperty(this, "$pointerup", void 0);

    _defineProperty(this, "$visible", void 0);

    _classPrivateFieldSet(this, _element2, new Element(domelement));

    _classPrivateFieldSet(this, _enable, true);

    var pointerdown = function pointerdown(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enable) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        if (_this2.visible) {
          if (_this2.$pointerdown) {
            _this2.$pointerdown && _this2.$pointerdown(left, top);
          } else {
            _classPrivateFieldGet(_this2, _element2).left = left;
            _classPrivateFieldGet(_this2, _element2).top = top;
          }
        }
      }
    };

    var pointermove = function pointermove(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enable) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        if (_this2.visible) {
          if (_this2.$pointermove) {
            _this2.$pointermove(left, top);
          } else {
            _classPrivateFieldGet(_this2, _element2).left = left;
            _classPrivateFieldGet(_this2, _element2).top = top;
          }
        }
      }
    };

    var pointerup = function pointerup(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enable) || dispatchEvent) {
        if (_this2.visible) {
          if (_this2.$pointerup) {
            _this2.$pointerup && _this2.$pointerup(left, top);
          } else {
            _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

            _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);
          }
        }
      }
    };

    PointerEvent.addEventListener("pointermove", this.domelement, pointermove, false);
    PointerEvent.addEventListener("pointerdown", this.domelement, pointerdown, false);
    PointerEvent.addEventListener("pointerup", this.domelement, pointerup, false);
  }

  _createClass(Cursor, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element2);
    }
  }, {
    key: "enable",
    set: function set(value) {
      _classPrivateFieldSet(this, _enable, value);
    }
  }, {
    key: "style",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).style;
    }
  }, {
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element2).left = Cursor.left;
      _classPrivateFieldGet(this, _element2).top = Cursor.top;
      _classPrivateFieldGet(this, _element2).visible = value;
      this.$visible && this.$visible(value);
    }
  }], [{
    key: "left",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Cursor, Cursor, _left);
    }
  }, {
    key: "top",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top);
    }
  }]);

  return Cursor;
}();

var _left = {
  writable: true,
  value: void 0
};
var _top = {
  writable: true,
  value: void 0
};

var _element3 = /*#__PURE__*/new WeakMap();

var _enable2 = /*#__PURE__*/new WeakMap();

var _offsetX = /*#__PURE__*/new WeakMap();

var _offsetY = /*#__PURE__*/new WeakMap();

var _originalX = /*#__PURE__*/new WeakMap();

var _originalY = /*#__PURE__*/new WeakMap();

var Draggable = /*#__PURE__*/function () {
  function Draggable(domelement) {
    var _this3 = this;

    _classCallCheck(this, Draggable);

    _classPrivateFieldInitSpec(this, _element3, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _enable2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _offsetX, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _offsetY, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _originalX, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _originalY, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$dragend", void 0);

    _defineProperty(this, "$dragmove", void 0);

    _defineProperty(this, "$dragstart", void 0);

    _classPrivateFieldSet(this, _element3, new Element(domelement));

    _classPrivateFieldSet(this, _enable2, true);

    var dragend = function dragend(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this3, _enable2) || dispatchEvent) {
        if (_this3.$dragend) {
          _this3.$dragend(left, top, dragger);
        } else {
          _classPrivateFieldGet(_this3, _element3).left = _classPrivateFieldGet(_this3, _originalX);
          _classPrivateFieldGet(_this3, _element3).top = _classPrivateFieldGet(_this3, _originalY);
        }

        return null;
      }

      return dragger;
    };

    var dragmove = function dragmove(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this3, _enable2) || dispatchEvent) {
        if (_this3.$dragmove) {
          _this3.$dragmove(left, top, dragger);
        } else {
          _classPrivateFieldGet(_this3, _element3).left = left + _classPrivateFieldGet(_this3, _offsetX);
          _classPrivateFieldGet(_this3, _element3).top = top + _classPrivateFieldGet(_this3, _offsetY);
        }
      }
    };

    var dragstart = function dragstart(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this3, _enable2) || dispatchEvent) {
        _classPrivateFieldSet(_this3, _offsetX, _classPrivateFieldGet(_this3, _element3).left - left);

        _classPrivateFieldSet(_this3, _offsetY, _classPrivateFieldGet(_this3, _element3).top - top);

        _classPrivateFieldSet(_this3, _originalX, _classPrivateFieldGet(_this3, _element3).left);

        _classPrivateFieldSet(_this3, _originalY, _classPrivateFieldGet(_this3, _element3).top);

        if (_this3.$dragstart) {
          return _this3.$dragstart(left, top);
        }

        return _this3;
      }

      return null;
    };

    PointerEvent.addEventListener("dragend", _classPrivateFieldGet(this, _element3), dragend);
    PointerEvent.addEventListener("dragmove", _classPrivateFieldGet(this, _element3), dragmove);
    PointerEvent.addEventListener("dragstart", _classPrivateFieldGet(this, _element3), dragstart);
  }

  _createClass(Draggable, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element3).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element3);
    }
  }, {
    key: "enable",
    set: function set(value) {
      _classPrivateFieldSet(this, _enable2, value);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      _classPrivateFieldGet(this, _element3).left = _classPrivateFieldGet(this, _originalX);
      _classPrivateFieldGet(this, _element3).top = _classPrivateFieldGet(this, _originalY);
    }
  }]);

  return Draggable;
}();

var _element4 = /*#__PURE__*/new WeakMap();

var _enable3 = /*#__PURE__*/new WeakMap();

var Droppable = /*#__PURE__*/function () {
  function Droppable(domelement) {
    var _this4 = this;

    _classCallCheck(this, Droppable);

    _classPrivateFieldInitSpec(this, _element4, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _enable3, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$dragout", void 0);

    _defineProperty(this, "$dragover", void 0);

    _defineProperty(this, "$drop", void 0);

    _classPrivateFieldSet(this, _element4, new Element(domelement));

    _classPrivateFieldSet(this, _enable3, true);

    var dragout = function dragout(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this4, _enable3) || dispatchEvent) {
        _this4.$dragout && _this4.$dragout(left, top, dragger);
      }
    };

    var dragover = function dragover(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this4, _enable3) || dispatchEvent) {
        _this4.$dragover && _this4.$dragover(left, top, dragger);
      }
    };

    var drop = function drop(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this4, _enable3) || dispatchEvent) {
        _this4.$drop && _this4.$drop(left, top, dragger);
        return null;
      }

      return dragger;
    };

    PointerEvent.addEventListener("dragout", _classPrivateFieldGet(this, _element4), dragout);
    PointerEvent.addEventListener("dragover", _classPrivateFieldGet(this, _element4), dragover);
    PointerEvent.addEventListener("drop", _classPrivateFieldGet(this, _element4), drop);
  }

  _createClass(Droppable, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element4).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element4);
    }
  }, {
    key: "enable",
    set: function set(value) {
      _classPrivateFieldSet(this, _enable3, value);
    }
  }]);

  return Droppable;
}();

var _domelement = /*#__PURE__*/new WeakMap();

var Element = /*#__PURE__*/function () {
  function Element(domelement) {
    _classCallCheck(this, Element);

    _classPrivateFieldInitSpec(this, _domelement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _domelement, domelement);
  }

  _createClass(Element, [{
    key: "bottom",
    get: function get() {
      return this.top + this.height;
    },
    set: function set(value) {
      this.top = value - this.height;
    }
  }, {
    key: "children",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).children;
    }
  }, {
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement);
    }
  }, {
    key: "enable",
    get: function get() {
      return this.style["pointer-events"] === "none" ? false : true;
    },
    set: function set(value) {
      this.style["pointer-events"] = value ? "all" : "none";
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect().height / frame.scale.y;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["height"] = value + "px";
    }
  }, {
    key: "image",
    get: function get() {
      return this.style["background-image"];
    },
    set: function set(value) {
      this.style["background-image"] = value;
    }
  }, {
    key: "left",
    get: function get() {
      return (_classPrivateFieldGet(this, _domelement).getBoundingClientRect().left - frame.getBoundingClientRect().left) / frame.scale.x;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["left"] = value - (1 - this.scale.x) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _domelement)).width) / 2.0 + "px";
    }
  }, {
    key: "rect",
    get: function get() {
      return {
        left: this.left,
        top: this.top,
        width: this.width,
        height: this.height,
        right: this.left + this.width,
        bottom: this.top + this.height
      };
    }
  }, {
    key: "right",
    get: function get() {
      return this.left + this.width;
    },
    set: function set(value) {
      this.left = value - this.width;
    }
  }, {
    key: "scale",
    get: function get() {
      var visible = this.visible;
      _classPrivateFieldGet(this, _domelement).style["display"] = "initial";
      var scale = {
        x: _classPrivateFieldGet(this, _domelement).getBoundingClientRect().width / _classPrivateFieldGet(this, _domelement).offsetWidth / frame.scale.x,
        y: _classPrivateFieldGet(this, _domelement).getBoundingClientRect().height / _classPrivateFieldGet(this, _domelement).offsetHeight / frame.scale.y
      };
      this.visible = visible;
      return scale;
    }
  }, {
    key: "style",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).style;
    }
  }, {
    key: "transform",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).style["transform"];
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["transform"] = value;
    }
  }, {
    key: "top",
    get: function get() {
      return (_classPrivateFieldGet(this, _domelement).getBoundingClientRect().top - frame.getBoundingClientRect().top) / frame.scale.y;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["top"] = value - (1 - this.scale.y) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _domelement)).height) / 2.0 + "px";
    }
  }, {
    key: "visible",
    get: function get() {
      return getComputedStyle(_classPrivateFieldGet(this, _domelement)).display === "none" ? false : true;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["display"] = value ? "block" : "none";
    }
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect().width / frame.scale.x;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["width"] = value + "px";
    }
  }, {
    key: "zindex",
    get: function get() {
      return this.style["z-index"];
    },
    set: function set(value) {
      this.style["z-index"] = value;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler, active) {
      PointerEvent.addEventListener(type, this, handler, active);
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect();
    }
  }, {
    key: "getComputedStyle",
    value: function getComputedStyle() {
      return this.getComputedStyle(_classPrivateFieldGet(this, _domelement));
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      PointerEvent.removeEventListener(type, this, handler);
    }
  }]);

  return Element;
}();

var _element5 = /*#__PURE__*/new WeakMap();

var _buttons = /*#__PURE__*/new WeakMap();

var EndScreen = /*#__PURE__*/function () {
  function EndScreen(_click2) {
    var _this5 = this;

    _classCallCheck(this, EndScreen);

    _classPrivateFieldInitSpec(this, _element5, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _buttons, {
      writable: true,
      value: new Array()
    });

    if (!EndScreen.instance) {
      (function () {
        _classPrivateFieldSet(_this5, _element5, new Element(document.querySelector(".end-screen")));

        var handlers = {
          click: function click(index) {
            if (index === 0) {
              Sound.lose && (Sound.lose.pause(), Sound.lose.currentTime = 0);
              Sound.timeup && (Sound.timeup.pause(), Sound.timeup.currentTime = 0);
              Sound.win && (Sound.win.pause(), Sound.win.currentTime = 0);
              _this5.visible = false;
              _click2 && _click2();
            }
          },
          pointerout: function pointerout(index) {
            _classPrivateFieldGet(_this5, _buttons)[index].image = Image.EndScreen_pointerout;
          },
          pointerover: function pointerover(index) {
            Sound.pointerover.play();
            _classPrivateFieldGet(_this5, _buttons)[index].image = Image.EndScreen_pointerover;
          }
        };
        var buttons = document.querySelector(".end-screen > .end-screen-buttons");

        var _loop = function _loop(i) {
          _classPrivateFieldGet(_this5, _buttons).push(new Element(buttons.children[i]));

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("click", function () {
            return handlers.click(i);
          });

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("pointerout", function () {
            return handlers.pointerout(i);
          });

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("pointerover", function () {
            return handlers.pointerover(i);
          });
        };

        for (var i = 0; i < buttons.childElementCount; i++) {
          _loop(i);
        }
      })();
    }

    return EndScreen.instance || (EndScreen.instance = this);
  }

  _createClass(EndScreen, [{
    key: "result",
    set: function set(value) {
      var result = new Element(document.querySelector(".end-screen > .end-screen-result"));

      switch (value) {
        case "lose":
          Sound.lose && Sound.lose.play();
          result.image = Image.EndScreen_lose;
          break;

        case "timeup":
          Sound.timeup && Sound.timeup.play();
          result.image = Image.EndScreen_timeup;
          break;

        case "win":
          Sound.win && Sound.win.play();
          result.image = Image.EndScreen_win;
          break;
      }
    }
  }, {
    key: "score",
    set: function set(value) {
      document.querySelector(".end-screen > .end-screen-score > .end-screen-score-text").innerHTML = value;
      document.querySelector(".end-screen > .end-screen-score > .end-screen-score-point-text").style["left"] = value < 10 ? "192px" : value < 100 ? "219px" : "246px";
    }
  }, {
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element5).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element5).visible = value;
    }
  }]);

  return EndScreen;
}();

var ExitButton = /*#__PURE__*/_createClass(function ExitButton() {
  _classCallCheck(this, ExitButton);

  if (!ExitButton.instance) {
    var element = new Element(document.querySelector(".exit-button"));
    var door1 = new Element(document.querySelector(".exit-button > .exit-button-door-1"));
    var text1 = new Element(document.querySelector(".exit-button > .exit-button-text-1"));
    var text2 = new Element(document.querySelector(".exit-button > .exit-button-text-2"));

    var pointerout = function pointerout(left, top) {
      element.style["right"] = "20px";
      element.style["width"] = "64px";
      door1.visible = false;
      text1.style["left"] = " -15px";
      text1.style["top"] = "2px";
      text2.style["right"] = "-5px";
      text2.style["bottom"] = "2px";
    };

    var pointerover = function pointerover(left, top) {
      Sound.exit.play();
      element.style["right"] = "15px";
      element.style["width"] = "90px";
      door1.visible = true;
      text1.style["left"] = " -10px";
      text1.style["top"] = "-5px";
      text2.style["right"] = "-5px";
      text2.style["bottom"] = "-5px";
    };

    element.addEventListener("pointerout", pointerout);
    element.addEventListener("pointerover", pointerover);
  }

  return ExitButton.instance || (ExitButton.instance = this);
});

var _height = /*#__PURE__*/new WeakMap();

var _width = /*#__PURE__*/new WeakMap();

var Frame = /*#__PURE__*/function (_Element) {
  _inherits(Frame, _Element);

  var _super = _createSuper(Frame);

  function Frame(domelement) {
    var _this6;

    _classCallCheck(this, Frame);

    _this6 = _super.call(this, domelement);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _width, {
      get: void 0,
      set: _set_width
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _height, {
      get: void 0,
      set: _set_height
    });

    return _this6;
  }

  _createClass(Frame, [{
    key: "height",
    get: function get() {
      return this.domelement.getBoundingClientRect().height;
    }
  }, {
    key: "scale",
    get: function get() {
      var visible = this.visible;
      this.domelement.style["display"] = "initial";
      var scale = {
        x: this.domelement.getBoundingClientRect().width / this.domelement.offsetWidth,
        y: this.domelement.getBoundingClientRect().height / this.domelement.offsetHeight
      };
      this.visible = visible;
      return scale;
    }
  }, {
    key: "width",
    get: function get() {
      return this.domelement.getBoundingClientRect().width;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler) {
      this.domelement.addEventListener(type, handler);
    }
  }, {
    key: "getComputedStyle",
    value: function getComputedStyle() {
      return this.domelement.getComputedStyle(this.domelement);
    }
  }, {
    key: "removeChild",
    value: function removeChild(domelement) {
      return this.domelement.removeChild(domelement);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      this.domelement.removeEventListener(type, handler);
    }
  }]);

  return Frame;
}(Element);

function _set_height(value) {}

function _set_width(value) {}

var FullScreen = /*#__PURE__*/_createClass(function FullScreen() {
  _classCallCheck(this, FullScreen);

  if (!FullScreen.instance) {
    var element = new Element(document.querySelector(".fullscreen"));
    var fullscreen = false;

    var click = function click() {
      if (fullscreen && document.fullscreenElement !== null) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        frame.transform = "translate(-50%, -50%) scale(1, 1)";
      } else {
        var requestFullscreen = function requestFullscreen() {
          var scale = window.innerWidth > window.innerHeight ? screen.height / 600 : screen.width / 800;
          frame.transform = "translate(-50%, -50%) scale(".concat(scale - 0.01, ", ").concat(scale - 0.01, ")");
        };

        var promise = (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen).call(document.documentElement);
        promise && promise.then(requestFullscreen) || setTimeout(requestFullscreen, 0.33);
      }

      fullscreen = !fullscreen;
    };

    var fullscreenchange = function fullscreenchange() {};

    var pointerover = function pointerover(left, top) {
      Sound.pointerover.play();
    };

    document.addEventListener('fullscreenchange', fullscreenchange);
    document.addEventListener('webkitfullscreenchange', fullscreenchange);
    element.domelement.addEventListener("click", click);
    element.addEventListener("pointerover", pointerover);
  }

  return FullScreen.instance || (FullScreen.instance = this);
});

var PointerEvent = /*#__PURE__*/function () {
  function PointerEvent() {
    _classCallCheck(this, PointerEvent);
  }

  _createClass(PointerEvent, null, [{
    key: "constructor",
    value: function constructor() {
      frame.addEventListener("click", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _click3));
      frame.addEventListener("pointerdown", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerdown));
      frame.addEventListener("pointermove", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointermove));
      frame.addEventListener("pointerup", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerup));
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, element, handler, active) {
      var listeners = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getListeners).call(PointerEvent, type);

      listeners.push({
        element: element,
        handler: handler,
        active: active === false ? false : true
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, left, top) {
      var e = new Event(type);
      var frameScale = frame.scale;
      e.clientX = frame.getBoundingClientRect().left + left * frameScale.x;
      e.clientY = frame.getBoundingClientRect().top + top * frameScale.y;
      e.$dispatchEvent = true;

      switch (type) {
        case "click":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _click3).call(PointerEvent, e);

          break;

        case "pointerdown":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerdown).call(PointerEvent, e);

          break;

        case "pointermove":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointermove).call(PointerEvent, e);

          break;

        case "pointerup":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerup).call(PointerEvent, e);

          break;
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, element, handler) {
      var listeners = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getListeners).call(PointerEvent, type);

      for (var i = 0; i < listeners.length; i++) {
        if (listeners[i].element === element) {
          if (!handler || listeners[i].handler === handler) {
            listeners.splice(i, 1);
          }
        }
      }
    }
  }]);

  return PointerEvent;
}();

function _click3(e) {
  var _classStaticPrivateMe = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe2 = _slicedToArray(_classStaticPrivateMe, 2),
      left = _classStaticPrivateMe2[0],
      top = _classStaticPrivateMe2[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    return;
  }

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[i].element.domelement === topmostDomelement) {
      return;
    }
  }

  for (var _i7 = 0; _i7 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i7++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i7].element.domelement === topmostDomelement) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i7].handler(left, top, dispatchEvent);
    }
  }
}

function _pointerdown(e) {
  e.preventDefault();

  var _classStaticPrivateMe3 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe4 = _slicedToArray(_classStaticPrivateMe3, 2),
      left = _classStaticPrivateMe4[0],
      top = _classStaticPrivateMe4[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerout).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[i].element.domelement === topmostDomelement) {
      _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[i].handler(left, top, dispatchEvent);

      break;
    }
  }

  (function () {
    for (var _i8 = 0; _i8 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i8++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i8].element.domelement === topmostDomelement) {
        return;
      }
    }

    for (var _i9 = 0; _i9 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners).length; _i9++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[_i9].active === false) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[_i9].handler(left, top, dispatchEvent);
      }
    }
  })();

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) === null) {
    for (var _i10 = 0; _i10 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners).length; _i10++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners)[_i10].element.domelement === topmostDomelement) {
        _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners)[_i10].handler(left, top, dispatchEvent));

        break;
      }
    }
  }

  _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _hoveringDomelement, topmostDomelement);
}

function _pointermove(e) {
  e.preventDefault();

  var _classStaticPrivateMe5 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe6 = _slicedToArray(_classStaticPrivateMe5, 2),
      left = _classStaticPrivateMe6[0],
      top = _classStaticPrivateMe6[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerout).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) && _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners)[i].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement)) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners)[i].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent);

        break;
      }
    }
  }

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) && _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var _i11 = 0; _i11 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners).length; _i11++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners)[_i11].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners)[_i11].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent);

        break;
      }
    }
  }

  for (var _i12 = 0; _i12 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners).length; _i12++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i12].element.domelement === topmostDomelement || _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i12].active === false) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i12].handler(left, top, dispatchEvent);
    }
  }

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger)) {
    for (var _i13 = 0; _i13 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners).length; _i13++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners)[_i13].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners)[_i13].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent);

        break;
      }
    }
  }

  _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _hoveringDomelement, topmostDomelement);
}

function _pointerup(e) {
  e.preventDefault();

  var _classStaticPrivateMe7 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe8 = _slicedToArray(_classStaticPrivateMe7, 2),
      left = _classStaticPrivateMe8[0],
      top = _classStaticPrivateMe8[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[i].element.domelement === topmostDomelement) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[i].handler(left, top, dispatchEvent);

      break;
    }
  }

  (function () {
    for (var _i14 = 0; _i14 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i14++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i14].element.domelement === topmostDomelement) {
        return;
      }
    }

    for (var _i15 = 0; _i15 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners).length; _i15++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[_i15].active === false) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[_i15].handler(left, top, dispatchEvent);
      }
    }
  })();

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger)) {
    for (var _i16 = 0; _i16 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners).length; _i16++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[_i16].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[_i16].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent));

        return;
      }
    }

    for (var _i17 = 0; _i17 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners).length; _i17++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners)[_i17].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement) {
        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners)[_i17].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent));

        return;
      }
    }
  }
}

function _getListeners(type) {
  switch (type) {
    case "click":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners);

    case "dragstart":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners);

    case "dragmove":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners);

    case "dragout":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners);

    case "dragover":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners);

    case "dragend":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners);

    case "drop":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners);

    case "pointerdown":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners);

    case "pointermove":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners);

    case "pointerover":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners);

    case "pointerout":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners);

    case "pointerup":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners);
  }
}

function _getPointerPosition(e) {
  var frameScale = frame.scale;
  return [(e.clientX - frame.getBoundingClientRect().left) / frameScale.x, (e.clientY - frame.getBoundingClientRect().top) / frameScale.y];
}

function _isDispatchEvent(e) {
  return e.$dispatchEvent !== undefined;
}

function _getTopmostDomelementFromPointer(left, top) {
  var topmostDomelements = document.elementsFromPoint(left, top);
  var topmostDomelement = topmostDomelements[0].$parent || topmostDomelements[0];

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) === null) {
    return topmostDomelement;
  }

  for (var i = 0; i < topmostDomelements.length; i++) {
    topmostDomelement = topmostDomelements[i].$parent || topmostDomelements[i];

    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement !== topmostDomelement) {
      return topmostDomelement;
    }
  }
}

function _dispatchPointerout(topmostDomelement, left, top, dispatchEvent) {
  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners)[i].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement)) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners)[i].handler(left, top, dispatchEvent);

        return;
      }
    }
  }
}

function _dispatchPointerover(topmostDomelement, left, top, dispatchEvent) {
  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners)[i].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners)[i].handler(left, top, dispatchEvent);

        return;
      }
    }
  }
}

var _hoveringDomelement = {
  writable: true,
  value: null
};
var _dragger = {
  writable: true,
  value: null
};
var _clickListeners = {
  writable: true,
  value: new Array()
};
var _dragstartListeners = {
  writable: true,
  value: new Array()
};
var _dragmoveListeners = {
  writable: true,
  value: new Array()
};
var _dragoutListeners = {
  writable: true,
  value: new Array()
};
var _dragoverListeners = {
  writable: true,
  value: new Array()
};
var _dragendListeners = {
  writable: true,
  value: new Array()
};
var _dropListeners = {
  writable: true,
  value: new Array()
};
var _pointerdownListeners = {
  writable: true,
  value: new Array()
};
var _pointermoveListeners = {
  writable: true,
  value: new Array()
};
var _pointeroutListeners = {
  writable: true,
  value: new Array()
};
var _pointeroverListeners = {
  writable: true,
  value: new Array()
};
var _pointerupListeners = {
  writable: true,
  value: new Array()
};

var _button = /*#__PURE__*/new WeakMap();

var _element6 = /*#__PURE__*/new WeakMap();

var StartScreen = /*#__PURE__*/function () {
  function StartScreen(_click5) {
    var _this7 = this;

    _classCallCheck(this, StartScreen);

    _classPrivateFieldInitSpec(this, _button, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _element6, {
      writable: true,
      value: void 0
    });

    if (!StartScreen.instance) {
      _classPrivateFieldSet(this, _element6, new Element(document.querySelector(".start-screen")));

      _classPrivateFieldSet(this, _button, new Element(document.querySelector(".start-screen > .start-screen-button")));

      var handlers = {
        click: function click(left, top) {
          Sound.start.play();
          _this7.visible = false;
          _click5 && _click5();
        },
        pointerout: function pointerout(left, top) {
          _classPrivateFieldGet(_this7, _button).width = 434;
          _classPrivateFieldGet(_this7, _button).height = 155;
          _classPrivateFieldGet(_this7, _button).image = Image.StartScreen_pointerout;
          _classPrivateFieldGet(_this7, _button).transform = "translate(-50%, -50%) scale(0.8, 0.8)";
        },
        pointerover: function pointerover(left, top) {
          Sound.pointerover.play();
          _classPrivateFieldGet(_this7, _button).width = 613;
          _classPrivateFieldGet(_this7, _button).height = 211;
          _classPrivateFieldGet(_this7, _button).image = Image.StartScreen_pointerover;
          _classPrivateFieldGet(_this7, _button).transform = "translate(-50%, -50%) scale(0.8, 0.8)";
        }
      };

      _classPrivateFieldGet(this, _button).addEventListener("click", handlers.click);

      _classPrivateFieldGet(this, _button).addEventListener("pointerout", handlers.pointerout);

      _classPrivateFieldGet(this, _button).addEventListener("pointerover", handlers.pointerover);
    }

    return StartScreen.instance || (StartScreen.instance = this);
  }

  _createClass(StartScreen, [{
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element6).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element6).visible = value;
    }
  }]);

  return StartScreen;
}();

var StarCursor = /*#__PURE__*/function (_Cursor) {
  _inherits(StarCursor, _Cursor);

  var _super2 = _createSuper(StarCursor);

  function StarCursor() {
    var _this8;

    _classCallCheck(this, StarCursor);

    if (!StarCursor.instance) {
      _this8 = _super2.call(this, document.querySelector(".star-cursor"));
    }

    return _possibleConstructorReturn(_this8, StarCursor.instance || (StarCursor.instance = _assertThisInitialized(_this8)));
  }

  return _createClass(StarCursor);
}(Cursor);

var _element7 = /*#__PURE__*/new WeakMap();

var _hInterval = /*#__PURE__*/new WeakMap();

var _paused = /*#__PURE__*/new WeakMap();

var _second = /*#__PURE__*/new WeakMap();

var _timeup = /*#__PURE__*/new WeakMap();

var Timer = /*#__PURE__*/function () {
  function Timer(timeup) {
    _classCallCheck(this, Timer);

    _classPrivateFieldInitSpec(this, _element7, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _hInterval, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _paused, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _second, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _timeup, {
      writable: true,
      value: void 0
    });

    if (!Timer.instance) {
      _classPrivateFieldSet(this, _element7, new Element(document.querySelector(".timer")));

      _classPrivateFieldSet(this, _second, 0);

      _classPrivateFieldSet(this, _timeup, timeup);
    }

    return Timer.instance || (Timer.instance = this);
  }

  _createClass(Timer, [{
    key: "pause",
    value: function pause() {
      _classPrivateFieldSet(this, _paused, true);
    }
  }, {
    key: "resume",
    value: function resume() {
      _classPrivateFieldSet(this, _paused, false);
    }
  }, {
    key: "start",
    value: function start(duration) {
      var _this9 = this;

      _classPrivateFieldSet(this, _paused, false);

      _classPrivateFieldSet(this, _second, 0);

      clearInterval(_classPrivateFieldGet(this, _hInterval));

      _classPrivateFieldSet(this, _hInterval, setInterval(function () {
        if (_classPrivateFieldGet(_this9, _paused) === true) {
          return;
        }

        _classPrivateFieldSet(_this9, _second, _classPrivateFieldGet(_this9, _second) + 0.1);

        var remainingTime = duration - _classPrivateFieldGet(_this9, _second);

        if (remainingTime <= 0) {
          _classPrivateFieldGet(_this9, _element7).domelement.innerHTML = "00:00";

          _this9.stop();

          _classPrivateFieldGet(_this9, _timeup) && _classPrivateFieldGet(_this9, _timeup).call(_this9);
        } else {
          _classPrivateFieldGet(_this9, _element7).domelement.innerHTML = "00:".concat(remainingTime / 10 < 1 ? "0" : "").concat(Math.floor(remainingTime));
        }
      }, 100));
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(_classPrivateFieldGet(this, _hInterval));
    }
  }]);

  return Timer;
}();

var Utility = /*#__PURE__*/function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: "distance",
    value: function distance(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
  }, {
    key: "isBaidu",
    value: function isBaidu() {
      var userAgent = navigator.userAgent.toLowerCase();
      return userAgent.indexOf("bidu") >= 0 || userAgent.indexOf("baidu") >= 0 || false;
    }
  }, {
    key: "isFirefox",
    value: function isFirefox() {
      var userAgent = navigator.userAgent.toLowerCase();
      return userAgent.indexOf("firefox") >= 0 || userAgent.indexOf("fxios/i") >= 0 || false;
    }
  }, {
    key: "intersectPoint",
    value: function intersectPoint(point, rect) {
      if (point.left > rect.left && point.left < rect.left + rect.width && point.top > rect.top && point.top < rect.top + rect.height) {
        return true;
      }

      return false;
    }
  }, {
    key: "intersectRect",
    value: function intersectRect(rect1, rect2) {
      if (Utility.intersectPoint({
        left: rect1.left,
        top: rect1.top
      }, rect2) || Utility.intersectPoint({
        left: rect1.left + rect1.width,
        top: rect1.top
      }, rect2) || Utility.intersectPoint({
        left: rect1.left,
        top: rect1.top + rect1.height
      }, rect2) || Utility.intersectPoint({
        left: rect1.left + rect1.width,
        top: rect1.top + rect1.height
      }, rect2)) {
        return true;
      }

      return false;
    }
  }, {
    key: "lerp",
    value: function lerp(start, end, t) {
      return start + (end - start) * t;
    }
  }, {
    key: "random",
    value: function random(max) {
      return Math.floor(Math.random() * max);
    }
  }, {
    key: "randoms",
    value: function randoms(max) {
      return Utility.randomSort(_toConsumableArray(Array(max).keys()));
    }
  }, {
    key: "randomSort",
    value: function randomSort(array) {
      for (var i = 0; i < array.length; i++) {
        var index = Utility.random(array.length);
        var _ref = [array[index], array[i]];
        array[i] = _ref[0];
        array[index] = _ref[1];
      }

      return array;
    }
  }, {
    key: "waitForCondition",
    value: function () {
      var _waitForCondition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(condition) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(condition() === false)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Utility.waitForSeconds(0);

              case 3:
                _context.next = 0;
                break;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function waitForCondition(_x) {
        return _waitForCondition.apply(this, arguments);
      }

      return waitForCondition;
    }()
  }, {
    key: "waitForSeconds",
    value: function waitForSeconds(seconds) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, seconds * 1000.0);
      });
    }
  }]);

  return Utility;
}();

window.focus();

window.ondragstart = function () {
  return false;
};

var frame = new Frame(document.getElementById("frame"));
PointerEvent.constructor();
"use strict";

var _candies = /*#__PURE__*/new WeakMap();

var _droppers = /*#__PURE__*/new WeakMap();

var _running2 = /*#__PURE__*/new WeakMap();

var ArtificialMentalRetardation = /*#__PURE__*/function () {
  function ArtificialMentalRetardation() {
    _classCallCheck(this, ArtificialMentalRetardation);

    _classPrivateFieldInitSpec(this, _candies, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _droppers, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _running2, {
      writable: true,
      value: void 0
    });

    if (!ArtificialMentalRetardation.instance) {}

    return ArtificialMentalRetardation.instance || (ArtificialMentalRetardation.instance = this);
  }

  _createClass(ArtificialMentalRetardation, [{
    key: "candies",
    set: function set(value) {
      _classPrivateFieldSet(this, _candies, value);
    }
  }, {
    key: "droppers",
    set: function set(value) {
      _classPrivateFieldSet(this, _droppers, value);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(handCursor) {
        var candies, candy, position, rect;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _classPrivateFieldSet(this, _running2, true);

              case 1:
                if (!_classPrivateFieldGet(this, _running2)) {
                  _context2.next = 34;
                  break;
                }

                candies = _classPrivateFieldGet(this, _candies).filter(function (candy) {
                  return candy && candy.color !== "";
                });

                if (!(candies.length === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("break", 34);

              case 5:
                candy = candies[Utility.random(candies.length)];

              case 6:
                if (!_classPrivateFieldGet(this, _running2)) {
                  _context2.next = 32;
                  break;
                }

                position = {
                  left: candy.left + candy.width / 2,
                  top: candy.top + candy.height / 2
                };
                PointerEvent.dispatchEvent("pointermove", Utility.lerp(handCursor.left, position.left, 0.1), Utility.lerp(handCursor.top, position.top, 0.1));
                _context2.next = 11;
                return Utility.waitForSeconds(0.033);

              case 11:
                if (!(Math.abs(handCursor.left - position.left) < 2 && Math.abs(handCursor.top - position.top) < 2)) {
                  _context2.next = 30;
                  break;
                }

                PointerEvent.dispatchEvent("pointerdown", position.left, position.top);
                _context2.next = 15;
                return Utility.waitForSeconds(0.25);

              case 15:
                rect = _classPrivateFieldGet(this, _droppers)[candy.color === "green" ? 0 : candy.color === "red" ? 1 : 2].rect;

                if (Utility.random(3) === 0) {
                  rect = _classPrivateFieldGet(this, _droppers)[Utility.random(_classPrivateFieldGet(this, _droppers).length)].rect;
                }

                position = {
                  left: rect.left + Math.random() * rect.width,
                  top: 100
                };

              case 18:
                if (!_classPrivateFieldGet(this, _running2)) {
                  _context2.next = 29;
                  break;
                }

                PointerEvent.dispatchEvent("pointermove", Utility.lerp(handCursor.left, position.left, 0.1), Utility.lerp(handCursor.top, position.top, 0.1));
                _context2.next = 22;
                return Utility.waitForSeconds(0.033);

              case 22:
                if (!(Math.abs(handCursor.left - position.left) < 2 && Math.abs(handCursor.top - position.top) < 2)) {
                  _context2.next = 27;
                  break;
                }

                PointerEvent.dispatchEvent("pointerup", position.left, position.top);
                _context2.next = 26;
                return Utility.waitForSeconds(1);

              case 26:
                return _context2.abrupt("break", 29);

              case 27:
                _context2.next = 18;
                break;

              case 29:
                return _context2.abrupt("break", 32);

              case 30:
                _context2.next = 6;
                break;

              case 32:
                _context2.next = 1;
                break;

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start(_x2) {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      _classPrivateFieldSet(this, _running2, false);
    }
  }]);

  return ArtificialMentalRetardation;
}();

var Image = /*#__PURE__*/function () {
  function Image() {
    _classCallCheck(this, Image);
  }

  _createClass(Image, null, [{
    key: "EndScreen_lose",
    get: function get() {
      return "none";
    }
  }, {
    key: "EndScreen_pointerout",
    get: function get() {
      return "url(shapes/135.svg)";
    }
  }, {
    key: "EndScreen_pointerover",
    get: function get() {
      return "url(shapes/137.svg)";
    }
  }, {
    key: "EndScreen_timeup",
    get: function get() {
      return "url(shapes/111.svg)";
    }
  }, {
    key: "EndScreen_win",
    get: function get() {
      return "url(shapes/114.svg)";
    }
  }, {
    key: "StartScreen_pointerout",
    get: function get() {
      return "url(shapes/92.svg)";
    }
  }, {
    key: "StartScreen_pointerover",
    get: function get() {
      return "url(shapes/93.svg)";
    }
  }]);

  return Image;
}();

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);
  }

  _createClass(Sound, null, [{
    key: "constructor",
    value: function constructor() {
      _classStaticPrivateFieldSpecSet(Sound, Sound, _background, new Audio("sounds/6_bgmusic05.wav.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _exit, new Audio("sounds/78.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _good, null);

      _classStaticPrivateFieldSpecSet(Sound, Sound, _lose, null);

      _classStaticPrivateFieldSpecSet(Sound, Sound, _pointerover, new Audio("sounds/95.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _start2, new Audio("sounds/2_開始玩.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _timeup2, new Audio("sounds/4_lose.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _win, new Audio("sounds/2_win.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _wrong, new Audio("sounds/103.mp3"));
    }
  }, {
    key: "background",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _background);
    }
  }, {
    key: "exit",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _exit);
    }
  }, {
    key: "good",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _good);
    }
  }, {
    key: "lose",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _lose);
    }
  }, {
    key: "pointerover",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _pointerover);
    }
  }, {
    key: "start",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _start2);
    }
  }, {
    key: "timeup",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _timeup2);
    }
  }, {
    key: "win",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _win);
    }
  }, {
    key: "wrong",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _wrong);
    }
  }]);

  return Sound;
}();

var _background = {
  writable: true,
  value: void 0
};
var _exit = {
  writable: true,
  value: void 0
};
var _good = {
  writable: true,
  value: void 0
};
var _lose = {
  writable: true,
  value: void 0
};
var _pointerover = {
  writable: true,
  value: void 0
};
var _start2 = {
  writable: true,
  value: void 0
};
var _timeup2 = {
  writable: true,
  value: void 0
};
var _win = {
  writable: true,
  value: void 0
};
var _wrong = {
  writable: true,
  value: void 0
};

var _accept = /*#__PURE__*/new WeakMap();

var _action = /*#__PURE__*/new WeakMap();

var _color = /*#__PURE__*/new WeakMap();

var _dropping = /*#__PURE__*/new WeakMap();

var _originalTop = /*#__PURE__*/new WeakMap();

var _dropperColor = /*#__PURE__*/new WeakMap();

var Candy = /*#__PURE__*/function (_Draggable) {
  _inherits(Candy, _Draggable);

  var _super3 = _createSuper(Candy);

  function Candy(color, left, top, action) {
    var _this10;

    _classCallCheck(this, Candy);

    var candy = document.createElement("div");
    candy.className = "candy";
    candy.style["z-index"] = "98";
    candy.style["left"] = left + "px";
    candy.style["top"] = top + "px";
    frame.domelement.appendChild(candy);
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "74");
    svg.setAttribute("height", "54");
    svg.setAttribute("viewBox", "0 0 74 54");
    svg.setAttribute("version", "1.1");
    svg.$parent = candy;
    candy.appendChild(svg);
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m69.805 14.584 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l-0.05 0.05 0.9 1.85q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7q-0.5-0.05-0.85-0.65l-0.4-1.1q-0.8-3.05-0.7-7.75 2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4l0.3 1.15-0.1 1.2 0.15 0.85 0.95 0.5");
    path.setAttribute("fill", color === "red" ? "#f00" : color === "green" ? "#0f0" : color === "blue" ? "#00f" : "");
    path.setAttribute("fill-rule", "evenodd");
    path.$parent = candy;
    svg.appendChild(path);
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m61.105 22.884q0.85 4.95-0.15 9.9-1 4.7-3.6 8.65-2.65 3.95-6.5 6.6-4 2.7-8.75 3.55l-9.4-0.3q-4.5-1.15-8.35-4-3.85-2.8-6.4-6.9-2.65-4.25-3.5-9.25-0.9-5 0.15-9.9 0.95-4.7 3.6-8.7 2.6-3.95 6.45-6.6 4-2.7 8.75-3.5l9.45 0.3q4.45 1.1 8.3 3.95 3.8 2.8 6.4 6.95 2.65 4.2 3.55 9.25");
    path.setAttribute("fill", color === "red" ? "#f00" : color === "green" ? "#0f0" : color === "blue" ? "#00f" : "");
    path.setAttribute("fill-rule", "evenodd");
    path.$parent = candy;
    svg.appendChild(path);
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m9.7046 23.384q2.45 3.65 4.5 4.75l0.8-0.75q1.25 0.75 1.3 3.15v1.85l-0.2 1.75q-0.05 1.15-1 1.55l-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05");
    path.setAttribute("fill", color === "red" ? "#f00" : color === "green" ? "#0f0" : color === "blue" ? "#00f" : "");
    path.setAttribute("fill-rule", "evenodd");
    path.$parent = candy;
    svg.appendChild(path);
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m5.7046 40.284 0.35-1.5 0.95-0.7 1.15-0.4q0.35-0.3 0.25-0.95l-0.3-0.65-0.35-0.5-0.85-1.35 0.4-1.15q0.5-0.7 0.45-1.05l-0.8-1.4q-1.9-3.3-2.35-3.75l0.2-0.4 0.8-0.85q0.45-0.55 0.25-1.15l-1.55-0.55-0.05 0.05q-0.55 1.45-0.55 2.75l0.05 1.3 0.4 1.15 0.5 1.1 0.65 1.95q0.35 1.05 0.15 2.35l-0.65 3.25q-0.1 1.35 0.9 2.45");
    path.setAttribute("fill", color === "red" ? "#752605" : color === "green" ? "#006500" : color === "blue" ? "#00003e" : "");
    path.setAttribute("fill-rule", "evenodd");
    path.$parent = candy;
    svg.appendChild(path);
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m68.805 12.034-0.1 1.2 0.15 0.85 0.95 0.5 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l0.85 1.9q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7-0.45-0.15q-0.05 8.8-5.45 15.6-5.5 6.85-13.95 8.35-8.55 1.5-16.05-3.15-7.5-4.6-10.5-13.05l-0.45 0.3-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05 2.4 3.55 4.4 4.7-0.3-4.6 1.05-8.95 1.25-4.25 3.85-7.75 2.6-3.55 6.25-5.8 3.75-2.4 8.15-3.15 8.55-1.55 16.15 3.15 7.5 4.65 10.5 13.2l-0.05-0.5q2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4z");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color === "red" ? "#f03" : color === "green" ? "#0c0" : color === "blue" ? "#009" : "");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-width", "2");
    path.$parent = candy;
    svg.appendChild(path);
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m57.905 24.234q0.75 4.15-0.05 8.3-0.75 3.9-2.85 7.25-2.05 3.3-5.1 5.5-3.2 2.2-6.95 2.9-5.45 0.95-10.65-1.45-5-2.4-8.25-7.25 3.15 2.45 7 3.45l8 0.3q3.75-0.7 6.95-2.8 3.1-2 5.25-5 2.1-3.1 2.95-6.65 0.85-3.75 0.15-7.5-0.85-4.75-3.8-8.45-2.9-3.6-7.05-5.5 5.35 1.55 9.3 6.05 3.95 4.6 5.1 10.85");
    path.setAttribute("fill", "#fff");
    path.setAttribute("fill-opacity", ".70196");
    path.setAttribute("fill-rule", "evenodd");
    path.$parent = candy;
    svg.appendChild(path);
    _this10 = _super3.call(this, candy);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _accept, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _action, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _color, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _dropping, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _originalTop, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _dropperColor, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this10), _color, color);

    _classPrivateFieldSet(_assertThisInitialized(_this10), _action, action);

    _classPrivateFieldSet(_assertThisInitialized(_this10), _originalTop, top);

    _this10.$dragend = function (left, top, dragger) {
      _this10.element.left = left - _this10.element.width / 2;
      _this10.element.top = top - _this10.element.height / 2 + 15;

      _this10.drop();
    };

    _this10.$dragstart = function (left, top) {
      if (_classPrivateFieldGet(_assertThisInitialized(_this10), _color) === "") {
        return null;
      }

      _this10.element.left = left - _this10.element.width / 2;
      _this10.element.top = top - _this10.element.height / 2 + 15;
      return _assertThisInitialized(_this10);
    };

    _this10.$dragmove = function (left, top, dragger) {
      _this10.element.left = left - _this10.element.width / 2;
      _this10.element.top = top - _this10.element.height / 2 + 15;
    };

    return _this10;
  }

  _createClass(Candy, [{
    key: "color",
    get: function get() {
      return _classPrivateFieldGet(this, _color);
    }
  }, {
    key: "domelement",
    get: function get() {
      return this.element.domelement;
    }
  }, {
    key: "left",
    get: function get() {
      return this.element.left;
    }
  }, {
    key: "top",
    get: function get() {
      return this.element.top;
    }
  }, {
    key: "width",
    get: function get() {
      return this.element.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.element.height;
    }
  }, {
    key: "action",
    value: function action() {
      if (_classPrivateFieldGet(this, _dropping) === true) {
        var top = parseFloat(getComputedStyle(this.domelement).top);

        if (top > _classStaticPrivateFieldSpecGet(Candy, Candy, _triggerTop) && this.element.style["z-index"] != 2) {
          _classPrivateFieldGet(this, _dropperColor) && _classPrivateFieldGet(this, _action) && _classPrivateFieldGet(this, _action).call(this, _classPrivateFieldGet(this, _accept), _classPrivateFieldGet(this, _dropperColor));

          if (_classPrivateFieldGet(this, _accept)) {
            _classPrivateFieldSet(this, _color, "");

            this.element.style["z-index"] = 2;
          }

          _classPrivateFieldSet(this, _dropperColor, "");
        }

        if (top < _classPrivateFieldGet(this, _originalTop)) {
          this.element.style["top"] = Math.min(top + 10, _classPrivateFieldGet(this, _originalTop)) + "px";
        }

        if (parseFloat(getComputedStyle(this.domelement).top) >= _classPrivateFieldGet(this, _originalTop)) {
          _classPrivateFieldSet(this, _dropping, false);

          this.element.style["pointer-events"] = "auto";
          this.element.transform = "none";
        }
      }
    }
  }, {
    key: "drop",
    value: function drop(color) {
      var left = parseFloat(getComputedStyle(this.domelement).left);

      if (left < 180 || left > 650) {
        _classPrivateFieldSet(this, _originalTop, Math.min(450, _classPrivateFieldGet(this, _originalTop)));
      }

      if (_classPrivateFieldSet(this, _accept, _classPrivateFieldGet(this, _color) === color)) {
        _classPrivateFieldSet(this, _originalTop, 350);
      }

      _classPrivateFieldSet(this, _dropperColor, color);

      _classPrivateFieldSet(this, _dropping, true);

      this.element.style["pointer-events"] = "none";
    }
  }], [{
    key: "constructor",
    value: function constructor() {
      var fishBowl = document.querySelector(".fish-bowls> .fish-bowl-red");
      var height = parseFloat(getComputedStyle(fishBowl).height);

      _classStaticPrivateFieldSpecSet(Candy, Candy, _triggerTop, parseFloat(getComputedStyle(fishBowl).top) + height * 0.125 + 20);
    }
  }]);

  return Candy;
}(Draggable);

var _triggerTop = {
  writable: true,
  value: undefined
};

var Dropper = /*#__PURE__*/function (_Droppable) {
  _inherits(Dropper, _Droppable);

  var _super4 = _createSuper(Dropper);

  function Dropper(color) {
    var _this11;

    _classCallCheck(this, Dropper);

    _this11 = _super4.call(this, document.querySelector(".droppers > .dropper-".concat(color)));

    _this11.$drop = function (left, top, dragger) {
      dragger.drop(color);
    };

    return _this11;
  }

  _createClass(Dropper, [{
    key: "rect",
    get: function get() {
      return this.element.rect;
    }
  }]);

  return Dropper;
}(Droppable);

var HandCursor = /*#__PURE__*/function (_Cursor2) {
  _inherits(HandCursor, _Cursor2);

  var _super5 = _createSuper(HandCursor);

  function HandCursor() {
    var _this12;

    _classCallCheck(this, HandCursor);

    if (!HandCursor.instance) {
      _this12 = _super5.call(this, document.querySelector(".hand-cursor"));

      _this12.$pointerdown = function (left, top) {
        new Audio("sounds/1_pick.mp3").play();
        _this12.element.left = left - 35;
        _this12.element.top = top - 105;
        _this12.image = "url(shapes/132.svg)";
      };

      _this12.$pointermove = function (left, top) {
        _this12.element.left = left - 35;
        _this12.element.top = top - 105;
      };

      _this12.$pointerup = function (left, top) {
        _this12.image = "url(shapes/129.svg)";
      };

      _this12.$visible = function (value) {
        _this12.element.left = Cursor.left - 35;
        _this12.element.top = Cursor.top - 105;
      };
    }

    return _possibleConstructorReturn(_this12, HandCursor.instance || (HandCursor.instance = _assertThisInitialized(_this12)));
  }

  _createClass(HandCursor, [{
    key: "image",
    set: function set(value) {
      this.element.image = value;
    }
  }, {
    key: "left",
    get: function get() {
      return this.element.left + 35;
    }
  }, {
    key: "top",
    get: function get() {
      return this.element.top + 105;
    }
  }]);

  return HandCursor;
}(Cursor);

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    _defineProperty(this, "artificialMentalRetardation", void 0);

    _defineProperty(this, "autoplay", void 0);

    _defineProperty(this, "backgroundMusic", void 0);

    _defineProperty(this, "candies", void 0);

    _defineProperty(this, "droppers", new Array());

    _defineProperty(this, "endScreen", void 0);

    _defineProperty(this, "handCursor", void 0);

    _defineProperty(this, "running", void 0);

    _defineProperty(this, "score", void 0);

    _defineProperty(this, "startScreen", void 0);

    _defineProperty(this, "starCursor", void 0);

    _defineProperty(this, "timer", void 0);

    this.autoplayClick = this.autoplayClick.bind(this);
    this.gameover = this.gameover.bind(this);
    this.restart = this.restart.bind(this);
    this.result = this.result.bind(this);
    this.start = this.start.bind(this);
    this.timeup = this.timeup.bind(this);
    new BackgroundMusic();
    new ExitButton();
    new FullScreen();
    this.artificialMentalRetardation = new ArtificialMentalRetardation();
    this.autoplay = new AutoPlay(this.autoplayClick);
    this.droppers.push(new Dropper("green"));
    this.droppers.push(new Dropper("red"));
    this.droppers.push(new Dropper("blue"));
    this.endScreen = new EndScreen(this.restart);
    this.handCursor = new HandCursor();
    this.startScreen = new StartScreen(this.start);
    this.starCursor = new StarCursor();
    this.timer = new Timer(this.timeup);
    this.artificialMentalRetardation.droppers = this.droppers;
    this.running = true;
    this.starCursor.visible = true;
  }

  _createClass(Main, [{
    key: "autoplayClick",
    value: function autoplayClick(running) {
      if (running) {
        if (this.startScreen.visible) {
          this.startScreen.visible = false;
          this.start();
        } else if (this.endScreen.visible) {
          this.restart();
        }

        this.handCursor.enable = false;

        for (var i = 0; i < this.candies.length; i++) {
          this.candies[i] && (this.candies[i].enable = false);
        }

        for (var _i = 0; _i < this.droppers.length; _i++) {
          this.droppers[_i].enable = false;
        }

        this.artificialMentalRetardation.start(this.handCursor);
      } else {
        this.artificialMentalRetardation.stop();
        this.handCursor.enable = true;

        for (var _i2 = 0; _i2 < this.candies.length; _i2++) {
          this.candies[_i2] && (this.candies[_i2].enable = true);
        }

        for (var _i3 = 0; _i3 < this.droppers.length; _i3++) {
          this.droppers[_i3].enable = true;
        }
      }
    }
  }, {
    key: "gameover",
    value: function gameover(result) {
      this.artificialMentalRetardation.stop();
      this.autoplay.reset();
      this.handCursor.enable = true;

      for (var i = 0; i < this.candies.length; i++) {
        this.candies[i] && (this.candies[i].enable = true);
      }

      for (var _i4 = 0; _i4 < this.droppers.length; _i4++) {
        this.droppers[_i4].enable = true;
      }

      this.endScreen.result = result;
      this.endScreen.visible = true;
      this.handCursor.visible = false;
      this.starCursor.visible = true;
      this.running = false;

      for (var _i5 = 0; _i5 < this.candies.length; _i5++) {
        frame.removeChild(this.candies[_i5].domelement);
        this.candies[_i5] = null;
      }
    }
  }, {
    key: "restart",
    value: function restart() {
      this.endScreen.visible = false;
      this.start();
    }
  }, {
    key: "result",
    value: function () {
      var _result = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(correct, color) {
        var imageUrl, element, i;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                new Audio("sounds/" + (correct ? "105" : "103") + ".mp3").play();
                imageUrl = "url(shapes/" + (correct ? "104" : "102") + ".svg)";
                element = document.querySelector(".fish-bowls > .fish-bowl-" + color + " > .result");
                i = 0;

              case 4:
                if (!(i < 3)) {
                  _context3.next = 14;
                  break;
                }

                element.style["background-image"] = imageUrl;
                _context3.next = 8;
                return Utility.waitForSeconds(0.1);

              case 8:
                element.style["background-image"] = "none";
                _context3.next = 11;
                return Utility.waitForSeconds(0.1);

              case 11:
                i++;
                _context3.next = 4;
                break;

              case 14:
                element.style["background-image"] = imageUrl;
                _context3.next = 17;
                return Utility.waitForSeconds(0.5);

              case 17:
                element.style["background-image"] = "none";

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function result(_x3, _x4) {
        return _result.apply(this, arguments);
      }

      return result;
    }()
  }, {
    key: "start",
    value: function () {
      var _start3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this13 = this;

        var colors, positions, i, candy, _i6;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.handCursor.visible = true;
                this.starCursor.visible = false;
                this.running = true;
                this.score = 0;
                this.timer.start(60);
                this.candies = new Array(15);
                colors = Utility.randoms(this.candies.length);
                positions = [{
                  left: 100,
                  top: 430
                }, {
                  left: 20,
                  top: 455
                }, {
                  left: 215,
                  top: 535
                }, {
                  left: 250,
                  top: 420
                }, {
                  left: 185,
                  top: 460
                }, {
                  left: 290,
                  top: 470
                }, {
                  left: 380,
                  top: 440
                }, {
                  left: 320,
                  top: 535
                }, {
                  left: 480,
                  top: 480
                }, {
                  left: 410,
                  top: 520
                }, {
                  left: 530,
                  top: 425
                }, {
                  left: 590,
                  top: 460
                }, {
                  left: 520,
                  top: 540
                }, {
                  left: 700,
                  top: 425
                }, {
                  left: 610,
                  top: 530
                }];

                for (i = 0; i < this.candies.length; i++) {
                  candy = new Candy(colors[i] < 5 ? "red" : colors[i] < 10 ? "green" : "blue", positions[i].left, positions[i].top, /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(accept, dropperColor) {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              if (accept) {
                                if (++_this13.score === 15) {
                                  _this13.gameover("win");
                                } else {
                                  _this13.result(true, dropperColor);
                                }
                              } else {
                                _this13.result(false, dropperColor);
                              }

                            case 1:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    return function (_x5, _x6) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                  this.candies[i] = candy;
                }

                this.artificialMentalRetardation.candies = this.candies;

              case 10:
                if (!this.running) {
                  _context5.next = 16;
                  break;
                }

                for (_i6 = 0; _i6 < this.candies.length; _i6++) {
                  this.candies[_i6] && this.candies[_i6].action();
                }

                _context5.next = 14;
                return Utility.waitForSeconds(0.033);

              case 14:
                _context5.next = 10;
                break;

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function start() {
        return _start3.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "timeup",
    value: function timeup() {
      this.gameover("timeup");
    }
  }]);

  return Main;
}();

Candy.constructor();
Sound.constructor();
new Main();