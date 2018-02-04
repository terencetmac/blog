const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const handlebars = require('handlebars');
const jstransformer = require('metalsmith-jstransformer');
const paths = require('metalsmith-paths');
const discoverPartials = require('metalsmith-discover-partials');

metalsmith(__dirname)
  .metadata({
    site: {
      name: 'Terence.XYZ',
      description: 'Self-taught Software Engineer, former business-side Entrepreneur. Just some random thoughts, musings and work.',
    },
  })
  .use(discoverPartials({
    directory: './layouts/partials'
  }))
  .source('./src')
  .destination('./public')
  .use(collections({
    articles: {
      pattern: 'articles/**/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown())
  .use(paths({
    property: 'paths'
  }))
  .use(layouts({
    engine: 'handlebars',
    default: 'article.hbs',
    directory: './layouts',
    pattern: '**/*html'
  }))
  //.use(function(item){
    //console.log(item)})
  .build(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Build was successful.')
    }
  });
