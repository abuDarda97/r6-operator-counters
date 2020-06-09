# R6 Operator Counters

A graph visualisation of counterplay in Rainbow Six Siege.

![R6 Operator Counters](https://i.imgur.com/8bRZsdb.png)

## Features

* Visualise hard and soft counters for each operator in the game.
* View operator details, counter details and filter the graph based on counter level (hard/soft/minor).
* Drag & interact with the operators.
* Crisp graphics at any zoom level.
* Responsive web design.

## Dependencies
* Uses [neo4dj3](https://github.com/eisman/neo4jd3) for graph visualisation.
* Uses [marcopixel's r6operators](https://r6operators.marcopixel.eu) for all the vector operator icons.

## Running

Make sure you are using node version 12.16.1 and npm version 6.13.4 on your system at minimum.
To check your versions you can run the following commands:

```
node --version
npm --version
```

To update to the latest node and npm version, visit https://nodejs.org/en/.

After, clone the repository, install all dependencies, build and serve the project.

```bash
> git clone https://github.com/BurkusCat/r6-operator-counters.git
> npm install
> npm start
```

Open `http://localhost:8080` in your favorite browser.

### Building the project for a release

Use the `gulp build` command to build a static version of the website to the "dist" folder. This will prepare all the site assets and optimise them to be hosted in an AWS S3 storage bucket.

During the gulp build, if their is an error during the `npm run createjson` portion, gulp will not tell you a specific error. To see the specific error you must run `npm run createjson` from the console.

## How to contribute

I am hoping that this project will be a fun place for open source newcomers (like myself). Feel free to take a look at the issues or come up with your own improvements for the project. I am happy to review pull requests and I can answer questions you might have.

Key places to look if you want to update something in this project:

```
Operator SVGs/Images - r6-operator-counters\src\images\svg\
The main webpage - r6-operator-counters\src\html\index.html
Neo4j JSON file with operator data - r6-operator-counters\src\json\r6OperatorCounters.json
Neo4jd3 script - r6-operator-counter\src\main\scripts\neo4jd3.js
Stylesheets - r6-operator-counter\src\main\styles
```

## r6counters.com
Any pull requests that get merged into master will trigger a build of the website. This build will get published to AWS and will be hosted at [https://r6counters.com/](https://r6counters.com/) after a day.

## Contributors
Thank you to [all the contributors](https://github.com/BurkusCat/r6-operator-counters/graphs/contributors) to R6 Operator Counters.



[View our humans.txt file with more info about this project's contributors.](
https://raw.githubusercontent.com/BurkusCat/r6-operator-counters/master/src/main/humans.txt)

## What's coming?

* More filtering
* More views

## Copyright and license

Code and documentation copyright 2019 the author. Code released under the [MIT license](LICENSE). Docs released under [Creative Commons](docs/LICENSE).
