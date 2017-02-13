import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('generating minified bundle for production via webpack. this will take a moment ... '.blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

     if(jsonStats.hasWarnings) {
         console.log('webpack generated the following warning: '.bold.yellow);

        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`webpack stats: ${stats}`);
    
    console.log('your app has been compiled in production mode and written to /dist. It is a ready to roll'.green);


    return 0;


})
