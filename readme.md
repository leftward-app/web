# Leftward Github Pages Site

Check the GH Pages docs for [how to test the site locally](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).

After running `bundle exec jekyll serve --c _config.dev.yaml`, navigate to `localhost:4000/leftward/` or `localhost:4000/leftward/index.html` - the trailing slash is currently significant, which is something that we may need to find a solution for

## Contributing help

* Add sass partials to the `_sass` directory, then import them to `assets/css/main.scss` to add new stylesheets to the site.