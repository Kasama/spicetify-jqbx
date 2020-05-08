JQBX within Spotify
===================

This is a very simple [spicetify][spicetify] custom app that adds a [JQBX](https://jqbx.fm) tab in your spotify desktop app.

![screenshot](./screenshot.jpg "JQBX app screenshot")

How to install
--------------

1. You need to have [spicetify][spicetify] installed
2. Clone this repository into your [spicetify custom apps directory](https://github.com/khanhas/spicetify-cli/wiki/Custom-Apps) or unzip the [latest release][release] in the correct directory depending on your OS.

  Windows: `%userprofile%\.spicetify\CustomApps\`

  Linux: `$XDG_CONFIG_HOME/.config/spicetify/CustomApps/` or `~/.config/spicetify/CustomApps`

  MacOS: `~/spicetify_data/CustomApps`

3. Add the app to your spotify by running `spicetify config custom_apps spicetify-jqbx` or change your `config.ini` to include the `spicetify-jqbx` app

```ini
[AdditionalOptions]
...
custom_apps = spicetify-jqbx
```

4. Run `spicetify apply`
5. Open spotify

[spicetify]: https://github.com/khanhas/spicetify-cli/
[release]: https://github.com/Kasama/spicetify-jqbx/archive/v1.1.0.zip
