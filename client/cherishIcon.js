Template.cherishIcon.helpers({
  getIcon: function (lib, icon, size) {
    lib = lib.toLowerCase();
    icon = icon.toLowerCase();

    var html = "<span>unknown</span>";
    switch(lib) {
      case 'materialize':
        var prefix = 'material-icons';
        
        if(size) {
          size = size.toLowerCase();
        } else {
          size = 'medium'
        }

        html = '<i class="' + prefix + ' ' + size + '">' + icon + '</i>';
        break;
      default:
        console.log(packageName + ': Unknown library detected: ' + lib);
    }

    return html
  }
});