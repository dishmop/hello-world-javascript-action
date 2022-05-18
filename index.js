const core = require('@actions/core');
const github = require('@actions/github');
const { isPlainObject } = require('is-plain-object');

isPlain = isPlainObject(Object.create({}));

console.log(`is plain: ${isPlain}`);

try{
    // 'who-to-greet' input defined in action metadata file (test)
    const nameToGreet = core.getInput(`who-to-greet`);
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // Get the JSON wrbhook payload for the envent that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);

} catch (error){
    core.setFailed(error.message);
}