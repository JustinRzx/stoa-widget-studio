const assert = require('node:assert/strict');
const fs = require('node:fs');
assert.ok(fs.existsSync(__dirname + '/widget.js'), 'widget builder must exist');
const {buildEmbed} = require('./widget.js');
const token='0x13E6993417616De724F2b337D65063f229e96718';
const ref='0x8ee95914b80bab47318bc98b818d36b18ca82b0d';
const result=buildEmbed({token,ref,pay:'USDG',theme:'dark',amount:'0.01'});
assert.equal(new URL(result.url).origin,'https://stoadex.com');
assert.equal(new URL(result.url).searchParams.get('ref'),ref);
assert.equal(new URL(result.url).searchParams.get('pay'),'USDG');
assert.ok(result.html.includes('title='));
console.log('PASS: embed uses official origin and preserves referral');
for (const patch of [{token:'0xabc'},{ref:token+'\" onload=alert(1)'},{ref:'0x'+'0'.repeat(40)},{pay:'BTC'},{theme:'evil'},{amount:'-1'},{amount:'NaN'},{amount:'1e9'}]) {
 assert.throws(()=>buildEmbed({token,ref,...patch}),Error,JSON.stringify(patch));
}
console.log('PASS: invalid addresses, zero referral and invalid options rejected');
