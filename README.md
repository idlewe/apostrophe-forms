# Apostrophe Forms

## Stability: alpha

This is a work in progress, porting the old 0.5 version to ApostropheCMS 2.x. Currently everything works according to a new, extensible pattern using the lean frontend library, but we only have a text field widget implemented so far.

## Configuration

```javascript
// in app.js
modules: {
  'apostrophe-forms': {},
  'apostrophe-forms-widgets': {},
  // TODO: enabling every field widget module is going to get tedious, can something be done?
  'apostrophe-forms-text-field-widgets': {},
  'apostrophe-email': {
    // see the email HOWTO for required configuration
  }
}
```

TODO: document how to specify more form area widgets, including non-field widgets.

TODO: talk about how submissions are saved to a collection and the event you can listen to in order to handle them in a custom way.
