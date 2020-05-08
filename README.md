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

3. Change your `config.ini` to include the `jqbx` app

```ini
[AdditionalOptions]
...
custom_apps = reddit|yourownapp
```

4. Run `spicetify apply`
5. Open spotify

[spicetify]: https://github.com/khanhas/spicetify-cli/
[release]: https://github.com/Kasama/spicetify-jqbx/archive/v1.0.0.zip
