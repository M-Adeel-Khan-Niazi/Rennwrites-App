const Utility = {
    // validate email regex
    validateEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    // validate password regex
    validatePassword: function (password) {
      var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      return re.test(password);
    },
    // validate name regex
    validateAlphabet: function (text) {
      var re = /^[a-z ,.'-]+$/i;
      return re.test(text);
    },
    // validate phone regex
    validatePhone: function (text) {
      var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(text);
    },
    isANumber: function (str) {
      return !/\D/.test(str);
    },
    // validate instagram regex
    validateInstagram: function (text) {
      var re = /^[a-zA-Z0-9._]+$/;
      return re.test(text);
    },
    // validate twitter regex
    validateTwitter: function (text) {
      var re = /^[a-zA-Z0-9._]+$/;
      return re.test(text);
    },
    isImgLink: function (url) {
      var regex =
        /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(url)) {
        return false;
      } else {
        return true;
      }
    },
    // Uppercase regex
    uppercaseWords: function (text) {
      var str = text.toLowerCase();
      return str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
    },
    // Username regex
    validateUsername: function (text) {
      var re = /^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9_-]+)*$/;
      return re.test(text);
    },
    hexToRgb: function (hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
  };
  
  export default Utility;