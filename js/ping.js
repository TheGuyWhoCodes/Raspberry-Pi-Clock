function ping() {
    for(i = 0; i < websites.length; i++){
      if (!this.inUse) {
          this.status = 'unchecked';
          this.inUse = true;
          var _that = this;
          this.img = new Image();
          this.img.onload = function () {
              _that.inUse = false;
              alert("ur good")

          };
          this.img.onerror = function (e) {
              if (_that.inUse) {
                  _that.inUse = false;
                  alert("ur good")
              }

          };
          this.start = new Date().getTime();
          _that.inUse = false
          this.img.src = "http://" + i;
          this.timer = setTimeout(function () {
              if (_that.inUse) {
                  alert("ur fucked")
              }
          }, 1500);
      }
    }
}

var websites = ["apache-vm/", "omega/", "zen:32400/", "192.168.1.64:8080/"]
ping()
