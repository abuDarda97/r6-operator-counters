'use strict';

import fs from 'file-system'; // used to write out json file
import operators from './operatorList.js'; // we loop through this to create nodes/relationships for D3.js

const operatorsList = Object.values(operators);
let relationshipId = 0;
let jsonObject = {
    results: [{
        columns: ["user", "entity"],
        data: [{
            graph: {
                nodes: [],
                relationships: []
            }
        }]
    }],
    errors: [],
};

for(let person in operatorsList) {

    let operatorRelationships = operatorsList[person].getCounters();

    // push operator info into 'nodes'
    jsonObject.results[0].data[0].graph.nodes.push(operatorsList[person].getInformation())

    // loop through all relationships for each operator
    for(let relation in operatorRelationships) {

        // add an id field onto the relationship object
        operatorRelationships[relation].id = relationshipId;

        // push object into 'relationships'
        jsonObject.results[0].data[0].graph.relationships.push(operatorRelationships[relation]);
        relationshipId++;
    }

}

fs.writeFile('../../json/r6OperatorCounters.json', JSON.stringify(jsonObject), function (err, data) {
   if (err) {
      return console.error(err);
   }
   return console.log('\n Json Created Succesfully! \n');
});
