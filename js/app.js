console.log('Running...');
//Some setup vars
var db = "/pretendDB/data.json"
var resources = [];

console.log(resources.length);
jsonLoader(db, function() {
  console.log(resources);
});

jsonWriter(db, function() {
  console.log(resources);
});


//function declarations
function listTopics(resourceID){
  var intArrayLength = resources[resourceID].topics.length;
  for (var i = 0; i < intArrayLength; i++) {
    console.log(resources[resourceID].topics[i].name);
  }
}

function listResources() {
  var aryLength = resources.length;
  for (var i = 0; i < aryLength; i++) {
    console.log(resources[i].id + ' ' + resources[i].name);
  }
}

function readArray(anyArray) {
  for (var i = 0; i < anyArray.length; i++) {
    console.log(anyArray[i]);
  }
}

function supports_local_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}

function jsonLoader(absPath, callback) {
       var xhr = new XMLHttpRequest();
       xhr.open("GET", absPath, true);
       xhr.addEventListener("load", function(){
        resources=JSON.parse(this.responseText);
        callback();
       });
       xhr.send();
}

function jsonWriter(absPath, callback) {
       var xhr = new XMLHttpRequest();
       xhr.open("PUT", absPath, true);
       xhr.addEventListener("load", function(){
        resources=JSON.parse(this.responseText);
        callback();
       });
       xhr.send();
}



/*
function jsonWriter(absPath, callback) {
       var xhr = new XMLHttpRequest();
       xhr.open("POST", absPath, true);
       xhr.onload = function() {
           var json = JSON.parse(this.responseText);
           callback(json);
       };
       xhr.send();
}
*/

//functions to make

//create record
//  adds to record id array
//  wants name, type, category
//  optionally wants topics
//  sets record id to array subscript
//  sets cycle to 0

//add topic
//  add topic to a topic array within a record
//  wants record to add to, category, topic name
