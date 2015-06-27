Package.describe({
  name: 'mtrcherish:cherish-icon',
  version: '0.0.1',
  summary: 'A simple icon html composer for Meteor',
  git: 'https://github.com/mtr-cherish/cherish-icon.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['client/cherishIcon.html', 'client/cherishIcon.js'], 'client');
  api.use(['templating'], 'client');
});