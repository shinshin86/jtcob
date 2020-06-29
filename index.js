(function() {
  window.jtcob = function (jsonArr) {
    var header = Object.keys(jsonArr[0]).join(',');
    var csv = header + '\r\n';

    for (var i = 0; i < jsonArr.length; i++) {
      var line = '';
          
      for (var index in jsonArr[i]) {
        if (line !== '') line += ',';
            
        line += jsonArr[i][index];
      }

      csv += line + '\r\n';
    }

    return csv;
  };
})();
