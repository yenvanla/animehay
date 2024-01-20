var $cookie = {
    'getItem': function getItem(_0x4ee9c5) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(_0x4ee9c5).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), '$1')) || null;
    },
    'setItem': function (_0x2db4ac, _0x528128, _0x2c50c0, _0xa7f505, _0x54d4fd, _0x1c88f8) {
      if (!_0x2db4ac || /^(?:expires|max\-age|path|domain|secure)$/i.test(_0x2db4ac)) {
        return false;
      }
      var _0x5ac667 = '';
      if (_0x2c50c0) {
        switch (_0x2c50c0.constructor) {
          case Number:
            _0x5ac667 = _0x2c50c0 === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + _0x2c50c0;
            break;
          case String:
            _0x5ac667 = "; expires=" + _0x2c50c0;
            break;
          case Date:
            _0x5ac667 = "; expires=" + _0x2c50c0.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(_0x2db4ac) + '=' + encodeURIComponent(_0x528128) + _0x5ac667 + (_0x54d4fd ? "; domain=" + _0x54d4fd : '') + (_0xa7f505 ? "; path=" + _0xa7f505 : '') + (_0x1c88f8 ? "; secure" : '');
      return true;
    },
    'removeItem': function (_0x34b789, _0x16b940, _0x49b47c) {
      if (!_0x34b789 || !this.hasItem(_0x34b789)) {
        return false;
      }
      document.cookie = encodeURIComponent(_0x34b789) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (_0x49b47c ? "; domain=" + _0x49b47c : '') + (_0x16b940 ? "; path=" + _0x16b940 : '');
      return true;
    },
    'hasItem': function (_0xc4452b) {
      return new RegExp("(?:^|;\\s*)" + encodeURIComponent(_0xc4452b).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
    },
    'keys': function () {
      var _0x116f8b = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
      for (var _0x4d27a9 = 0; _0x4d27a9 < _0x116f8b.length; _0x4d27a9++) {
        _0x116f8b[_0x4d27a9] = decodeURIComponent(_0x116f8b[_0x4d27a9]);
      }
      return _0x116f8b;
    }
  };
  var $repo_follow = {
    '_get': function () {
      var _0xb4237a = localStorage.getItem("data_follow");
      return _0xb4237a ? JSON.parse(_0xb4237a) : null;
    },
    '_index': function (_0x4d8ef5) {
      var _0x5d23b3 = localStorage.getItem("data_follow");
      var _0x1f13f9 = _0x5d23b3 ? JSON.parse(_0x5d23b3) : [];
      var _0x4ae31b = _0x1f13f9.indexOf(_0x4d8ef5);
      return _0x4ae31b;
    },
    '_push': function (_0x29b897) {
      var _0x533c6d = localStorage.getItem("data_follow");
      var _0x425e3a = _0x533c6d ? JSON.parse(_0x533c6d) : [];
      _0x425e3a.push(_0x29b897);
      localStorage.setItem("data_follow", JSON.stringify(_0x425e3a));
    },
    '_remove': function (_0x10b576) {
      var _0x4389aa = localStorage.getItem("data_follow");
      var _0x2806ce = _0x4389aa ? JSON.parse(_0x4389aa) : [];
      _0x2806ce.splice(_0x10b576, 1);
      localStorage.setItem("data_follow", JSON.stringify(_0x2806ce));
    }
  };