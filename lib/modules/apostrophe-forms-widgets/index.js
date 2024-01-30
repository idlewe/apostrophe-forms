module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Form',
  addFields: [
    {
      name: '_form',
      label: 'Form to Display',
      type: 'joinByOne',
      withType: 'apostrophe-forms-ya',
      required: true
    }
  ],
  arrangeFields: [
    {
      name: 'form',
      label: 'Form',
      fields: [ '_form' ]
    }
  ],
  construct: function (self, options) {
    console.log('construct widget', self)
    const superPushAssets = self.pushAssets;
    self.pushAssets = function () {
      self.pushAsset('script', 'lean', { when: 'lean' });

      if (options.disableBaseStyles !== true) {
        self.pushAsset('stylesheet', 'forms', { when: 'lean' });
      }

      superPushAssets();
    };

    const superLoad = self.load;
    const forms = self.apos.modules['apostrophe-forms-ya'];
    const classPrefix = forms.options.classPrefix;

    if (classPrefix) {
      self.load = (req, widgets, callback) => {
        widgets.forEach(widget => {
          widget.classPrefix = classPrefix;
        });
        return superLoad(req, widgets, callback);
      };
    }
  },
  afterConstruct: function (self) {
    self.pushAssets();
  }
};
