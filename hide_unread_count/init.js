Plugins.Hide_Unread_Count = {
  init: function() {
    const fn = function() {
      var tmp = "Tiny Tiny RSS";
      document.title = tmp;
    };
    App.updateTitle = fn;
  },
};

require(['dojo/_base/kernel', 'dojo/ready'], function  (dojo, ready) {
  ready(function() {
    PluginHost.register(PluginHost.HOOK_INIT_COMPLETE, function() {
      Plugins.Hide_Unread_Count.init();
      return true;
    });
  });
});

