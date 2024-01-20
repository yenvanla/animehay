Element.prototype.hide = function () {
    this.style.display = "none";
  };
  Element.prototype.show = function () {
    this.style.display = "block";
  };
  Element.prototype.middleWindow = function () {
    let _0x220efd = (window.innerHeight - this.clientHeight) / 2;
    let _0x336a11 = window.innerWidth < 550 ? window.innerWidth * 6 / 7 : 500;
    let _0x4039e6 = (window.innerWidth - _0x336a11) / 2;
    _0x220efd = _0x220efd > 0 ? _0x220efd : 0;
    this.style.left = _0x4039e6 + 'px';
    this.style.top = _0x220efd + 'px';
    this.style.width = _0x336a11 + 'px';
  };
  function Observer(_0x4f095a, _0x19ce00, _0x36ccca = true) {
    var _0x226f56 = document.getElementById('' + _0x4f095a);
    var _0x1b5d6f = {
      'root': null,
      'rootMargin': "0px",
      'threshold': 0.5
    };
    var _0x5241a8 = 0;
    var _0x20dc2e = (_0x56088f, _0x2a211a) => {
      _0x56088f.forEach(_0x30e7da => {
        if (_0x30e7da.intersectionRatio > _0x5241a8) {
          if (_0x36ccca) {
            _0x2a211a.unobserve(_0x226f56);
          }
          _0x19ce00();
        }
        _0x5241a8 = _0x30e7da.intersectionRatio;
      });
    };
    let _0xad81be = new IntersectionObserver(_0x20dc2e, _0x1b5d6f);
    _0xad81be.observe(_0x226f56);
  }
  function timeConverter(_0x35a668) {
    var _0x5ecc6a = new Date(_0x35a668 * 1000);
    var _0x5bf513 = _0x5ecc6a.getHours();
    var _0x88e1ad = _0x5ecc6a.getMinutes();
    var _0x2edd9c = _0x5bf513 + " giá» " + _0x88e1ad + " phĂºt";
    return _0x2edd9c;
  }
  function Toast(_0x3ca0bc = {}) {
    let _0xdbf34d = _0x3ca0bc.title || "ThĂ´ng bĂ¡o";
    let _0x2d8f96 = _0x3ca0bc.message || "ThĂ´ng bĂ¡o";
    let _0x2fa2da = _0x3ca0bc.time_post || null;
    let _0x413acc = _0x3ca0bc.type || "info";
    let _0x56a3fc = _0x3ca0bc.time_out || 3000;
    let _0x474dd5 = _0x3ca0bc.href || null;
    let _0x5bd7e6 = _0x3ca0bc.image || null;
    let _0x50e088 = "toast-info";
    let _0x5217cc = document.getElementById("ah_toast");
    if (typeof _0x474dd5 == "string") {
      _0x474dd5 = "window.location.href=\"" + _0x474dd5 + "\"";
    }
    switch (_0x413acc) {
      case "warning":
        _0x50e088 = "toast-warning";
        break;
      case "success":
        _0x50e088 = "toast-success";
        break;
      case "error":
        _0x50e088 = "toast-error";
        break;
      default:
        break;
    }
    let _0x27201d = document.createElement("div");
    _0x27201d.classList.add("toast");
    if (_0x474dd5) {
      _0x27201d.setAttribute("onclick", _0x474dd5);
    }
    let _0x5d497b = "<div class=\"flex\">";
    if (_0x5bd7e6) {
      _0x5d497b += "<div class=\"toast_image margin-r-5\"><img src=\"" + _0x5bd7e6 + "\"/></div>";
    }
    _0x5d497b += "<div>";
    _0x5d497b += "\n    <div class=\"toast_head " + _0x50e088 + "\">\n      <div class=\"toast_title\">" + _0xdbf34d + "</div>\n      <div class=\"toast_exit padding-0-10\" onclick=\"this.parentElement.parentElement.remove()\">X</div>\n    </div>\n    <div class=\"toast_body\">\n        <div class=\"toast_message\">" + _0x2d8f96 + "</div>\n    </div>\n    ";
    if (_0x2fa2da) {
      _0x5d497b += "\n    <div class=\"toast_footer\">\n        <div class=\"toast_time\">LĂºc " + timeConverter(_0x2fa2da) + "</div>\n    </div>\n  ";
    }
    _0x5d497b += "</div>";
    _0x5d497b += "<div>";
    _0x27201d.insertAdjacentHTML("afterbegin", _0x5d497b);
    _0x5217cc.appendChild(_0x27201d);
    execDelay(function () {
      _0x27201d.remove();
    }, _0x56a3fc);
  }
  function handlingSearch() {
    var _0x38c02e = document.getElementById("form-search");
    var _0xc15ae0 = _0x38c02e.getAttribute("action");
    var _0x22f3a7 = _0x38c02e.querySelector("input[name=\"keyword\"]").value;
    if (_0x22f3a7) {
      _0xc15ae0 += _0x22f3a7.replace(/\s+/g, '-');
      window.location.href = '/' + _0xc15ae0 + ".html";
    } else {
      alert("Báº¡n chÆ°a nháº­p tá»« khoĂ¡ Ä‘á»ƒ tĂ¬m kiáº¿m!");
    }
  }
  function setupTab() {
    const _0x5b30b0 = document.getElementsByClassName("tab-links");
    const _0x426fb7 = document.getElementsByClassName("tab-content");
    try {
      if (_0x5b30b0 == null || _0x426fb7 == null) {
        throw "KhĂ´ng phĂ¡t hiá»‡n code-tab, khĂ´ng thá»ƒ cĂ i Ä‘áº·t";
      }
      for (let _0x53188a = 0; _0x53188a < _0x5b30b0.length; _0x53188a++) {
        let _0x38ae17 = [..._0x5b30b0[_0x53188a].children];
        let _0x479cae = [..._0x426fb7[_0x53188a].children];
        _0x38ae17.forEach(_0x1d9b12 => {
          _0x1d9b12.addEventListener("click", function () {
            let _0x4323d1 = _0x1d9b12.attributes.bind.value;
            _0x38ae17.forEach(_0x79d432 => {
              if (_0x79d432.classList.contains("active")) {
                _0x79d432.classList.remove("active");
              }
            });
            this.classList.add("active");
            _0x479cae.forEach(_0x5e87c3 => {
              if (_0x5e87c3.attributes.id.value == _0x4323d1) {
                _0x5e87c3.classList.add("display-block");
              } else if (_0x5e87c3.classList.contains("display-block")) {
                _0x5e87c3.classList.remove("display-block");
              }
            });
          });
        });
      }
    } catch (_0x110e3b) {
      console.log(_0x110e3b);
    }
  }
  function getElem(_0xe05b42, _0x480de5 = 'id') {
    let _0x1e772b = null;
    switch (_0x480de5) {
      case 'id':
        _0x1e772b = document.getElementById(_0xe05b42);
        break;
      case "class":
        _0x1e772b = document.getElementsByClassName(_0xe05b42);
        break;
      case "name":
        _0x1e772b = document.getElementsByName(_0xe05b42);
        break;
      case "tagname":
        _0x1e772b = document.getElementsByTagName(_0xe05b42);
        break;
      default:
        _0x1e772b = null;
        break;
    }
    return _0x1e772b;
  }
  function middleBoxScreen(_0x9fb082 = {}) {
    const _0x22df4d = _0x9fb082.title || "ThĂ´ng tin";
    const _0x477769 = _0x9fb082.content || null;
    const _0x1aaf12 = _0x9fb082.elem || null;
    var _0x5b4ab9 = document.getElementById("middle-box-screen");
    if (_0x5b4ab9 == null) {
      _0x5b4ab9 = document.createElement("div");
      _0x5b4ab9.setAttribute('id', "middle-box-screen");
      document.body.appendChild(_0x5b4ab9);
      middleBoxScreen(_0x9fb082);
    } else {
      _0x5b4ab9.innerHTML = null;
      if (_0x5b4ab9.style.display) {
        _0x5b4ab9.style = null;
      } else {
        _0x5b4ab9.insertAdjacentHTML("afterbegin", "<div class='flex flex-hozi-center flex-space-auto fs-21 border-style-2'><div class='color-red-2 fw-500'>" + _0x22df4d + "</div><div class='color-white'onclick='middleBoxScreen()'>X</div></div>");
        _0x5b4ab9.insertAdjacentHTML("beforeend", _0x1aaf12 ? _0x1aaf12.innerHTML : _0x477769);
        _0x5b4ab9.style.display = "block";
        _0x5b4ab9.middleWindow();
      }
    }
  }
  function viewFullImage(_0x366471) {
    const _0x4ff114 = _0x366471.cloneNode(false);
    _0x4ff114.removeAttribute("onload");
    const _0xa140d4 = _0x4ff114.cloneNode(false);
    const _0x4043a9 = document.createElement("div");
    _0x4043a9.classList.add("view-full-image");
    const _0x14a18e = document.createElement("div");
    _0x14a18e.textContent = "Click To View";
    _0x14a18e.classList.add("button-view");
    _0x4043a9.addEventListener("click", function () {
      let _0x3b42d9 = document.createElement("div");
      _0x3b42d9.style = "position:fixed;width:100%;height:100%;background:#000;top: 0;z-index:20;display: flex;justify-content: center;align-items: center;";
      _0xa140d4.removeAttribute("width");
      _0xa140d4.removeAttribute("height");
      _0xa140d4.style = "max-height:100%;max-width: 100%";
      _0x3b42d9.appendChild(_0xa140d4);
      _0x3b42d9.addEventListener("click", function () {
        this.remove();
      });
      document.body.appendChild(_0x3b42d9);
    });
    _0x4043a9.appendChild(_0x4ff114);
    _0x4043a9.appendChild(_0x14a18e);
    _0x366471.insertAdjacentElement("beforebegin", _0x4043a9);
    const _0x1ee7f3 = (_0x4043a9.clientHeight - _0x14a18e.clientHeight) / 2;
    const _0x4e7d76 = (_0x4043a9.clientWidth - _0x14a18e.clientWidth) / 2;
    _0x14a18e.style = "top:" + _0x1ee7f3 + "px;left:" + _0x4e7d76 + 'px';
    _0x366471.remove();
  }
  function getParam(_0x1ae24d) {
    return parseInt(new URL(window.location.href).searchParams.get(_0x1ae24d));
  }
  function visitedNoti() {
    const _0x21c652 = parseInt(new URL(window.location.href).searchParams.get("notif_id")) || null;
    if (_0x21c652 != null) {
      axios.post("/api", {
        'action': "visited_noti",
        'notif_id': _0x21c652
      }).then(_0x4dab04 => {
        console.log(_0x4dab04.data);
      });
    }
  }
  function goPage(_0x5ccfdd) {
    var _0x4d833a = document.getElementById("go_page");
    var _0x160b11 = _0x4d833a.value;
    var _0x3ee421 = document.getElementsByClassName("active_page")[0].getAttribute("href");
    if (!_0x160b11) {
      alert("Vui lĂ²ng nháº­p sá»‘ page cáº§n Ä‘áº¿n");
      return false;
    }
    if (_0x160b11 > _0x5ccfdd) {
      alert("Danh sĂ¡ch phim nĂ y giá»›i háº¡n " + _0x5ccfdd);
    } else if (_0x160b11 < 1) {
      alert("KhĂ´ng nháº­p sá»‘ page cáº§n Ä‘áº¿n < hÆ¡n 1");
    } else {
      _0x3ee421 = _0x3ee421.replace(/trang-[0-9]+/, "trang-" + _0x160b11);
      window.location.href = _0x3ee421;
    }
  }
  function replaceEmojis(_0x4b08c5) {
    return _0x4b08c5.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, (_0x4b1e8f, _0x1a2059) => "&#x" + _0x4b1e8f.codePointAt(0).toString(16) + ';');
  }
  function CFirm(_0x528ef = "Rá»—ng") {
    return confirm(_0x528ef);
  }
  function toggleGoPage() {
    var _0x3947d8 = document.getElementsByClassName("go_page")[0];
    if (_0x3947d8.style.display == "none") {
      _0x3947d8.style.display = "flex";
    } else {
      _0x3947d8.style.display = "none";
    }
  }
  function execDelay(_0xc8b51a, _0x4b9a54 = 3000) {
    return new Promise(function (_0x4c63e7, _0x11d1a4) {
      setTimeout(() => {
        _0x4c63e7(1);
      }, _0x4b9a54);
    }).then(function () {
      _0xc8b51a();
    });
  }
  async function securityCode() {
    await axios.get("/token.php").then(_0x3c58a8 => {
      $dt.token = _0x3c58a8.data.token;
    });
  }
  function removeLoading(_0x4fdcd1) {
    _0x4fdcd1.classList.remove("loading-cover");
  }
  function addLoading(_0x3ea36d) {
    _0x3ea36d.classList.add("loading-cover");
  }
  function addStr(_0x20cdb2, _0x284462, _0x4a446a) {
    return _0x20cdb2.substring(0, _0x284462) + _0x4a446a + _0x20cdb2.substring(_0x284462, _0x20cdb2.length);
  }
  function toggleNotification(_0x46ad38) {
    clickEventDropDown(_0x46ad38, "notifications");
    if (!isLoadNoti) {
      loadNotification("list-item-notification");
      isLoadNoti = true;
    }
  }
  async function loadNotification(_0xfaa3 = null, _0x1c4278 = 0) {
    var _0x46c135 = loadingSpinner();
    var _0xf0363c = document.getElementById(_0xfaa3);
    var _0x524c11 = null;
    _0xf0363c.appendChild(_0x46c135);
    await securityCode();
    await axios.post("/api", {
      'action': "load_notification",
      'id_load_more': _0x1c4278,
      'token': $dt.token
    }).then(_0x101a8b => {
      _0x524c11 = _0x101a8b.data;
      var _0x2dd8a3 = _0x524c11.status;
      var _0x1e3e78 = _0x524c11.result;
      var _0x3338d4 = null;
      if (_0x2dd8a3) {
        if (_0x1c4278) {
          _0xf0363c.insertAdjacentHTML("beforeend", _0x1e3e78);
        } else {
          _0xf0363c.innerHTML = _0x1e3e78;
        }
        _0x3338d4 = document.getElementsByClassName("badge")[0];
        if (_0x3338d4) {
          _0x3338d4.remove();
        }
      }
    });
    _0x46c135.remove();
    return _0x524c11;
  }
  function loadingSpinner() {
    var _0x17a923 = document.createElement("div");
    _0x17a923.classList.add("ah_loading");
    var _0x39488e = document.createElement("div");
    _0x39488e.classList.add("lds-ellipsis");
    _0x39488e.innerHTML = "<div></div><div></div><div></div><div></div>";
    _0x17a923.appendChild(_0x39488e);
    return _0x17a923;
  }
  function getListEmoji() {
    axios.get("/themes/json/list-emoji-replace.json").then(_0x1f333e => {
      $dt.code_emoji = _0x1f333e.data;
    });
  }
  function initSocket(_0x1beaf4) {
    const _0x3b0439 = io(_0x1beaf4, {
      'secure': true,
      'upgrade': false,
      'transports': ["websocket"]
    });
    _0x3b0439.on("connect_error", _0x441e7b => {
      console.log("connect_error due to " + _0x441e7b.message);
    });
    _0x3b0439.on("new_notif", _0x54d468 => {
      try {
        _0x54d468 = JSON.parse(_0x54d468);
        if (typeof _0x54d468 != "object") {
          throw false;
        }
        if (_0x54d468.user_id && _0x54d468.user_id != $user.id) {
          throw false;
        }
        if (!_0x54d468.user_id) {
          _0x54d468.user_id = $user.id;
        }
        if (!_0x54d468.user_id) {
          throw false;
        }
        axios.post("/api", {
          'action': "get_new_noti",
          'data_new_noti': _0x54d468
        }).then(_0x5ced2e => {
          let _0xc2b9 = _0x5ced2e.data;
          let _0x35bf17 = JSON.parse(_0xc2b9.result);
          if (_0xc2b9.status == "success") {
            let _0x44e4c0 = _0x35bf17.total_notification;
            if (_0x44e4c0 > 0) {
              let _0x326137 = document.getElementById("toggle-notification");
              let _0x745226 = document.getElementsByClassName("badge")[0];
              if (_0x745226 != null) {
                _0x745226.textContent = _0x44e4c0;
              } else {
                _0x745226 = document.createElement("div");
                _0x745226.classList.add("badge");
                _0x745226.textContent = _0x44e4c0;
                _0x326137.insertAdjacentElement("beforebegin", _0x745226);
              }
            }
            Toast({
              'message': _0x35bf17.content,
              'title': _0x35bf17.title,
              'time_out': 0x2710,
              'time_post': _0x35bf17.time,
              'href': _0x35bf17.href,
              'image': _0x35bf17.image
            });
            isLoadNoti = false;
          }
        });
      } catch (_0x1e4a7d) {
        console.log(_0x1e4a7d);
      }
    });
  }
  (function () {
    getListEmoji();
    window.addEventListener("DOMContentLoaded", _0x418d67 => {
      setupTab();
      visitedNoti();
      const _0x1cde47 = document.getElementById("message-line");
      if (_0x1cde47 != null) {
        _0x1cde47.scrollIntoView(false);
      }
    });
  })();