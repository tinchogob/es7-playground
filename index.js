'use strict';

const getPromise = function(id, time) {
	return new Promise(function(resolve,reject) {
        setTimeout(function() {
        	resolve(id + ' was fulfilled');
        }, 3000);
    });
};

async function tes7() {
	console.log('start!');
	
	try {

		var promises = [getPromise('A'), getPromise('B')];
		
		let results = [];
		
		for (let promise of promises) {
			results.push(await promise);
		}
		
		console.log(results);
	
	} catch(e) {
		console.error(e);
		throw e
	}

	console.log('end!');
}

tes7();