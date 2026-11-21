/* Pure URL builder; no wallet, SDK or transaction execution. */
(function(root){
function buildEmbed({token,ref,pay='ETH',theme='light',amount='0.01'}) {
 const address=/^0x[0-9a-fA-F]{40}$/;
 if(!address.test(token)||/^0x0{40}$/i.test(token))throw Error('Enter a non-zero token contract: 0x + 40 hex characters.');
 if(!address.test(ref)||/^0x0{40}$/i.test(ref))throw Error('Enter a non-zero referral wallet: 0x + 40 hex characters.');
 if(!['ETH','USDG'].includes(pay)||!['light','dark'].includes(theme))throw Error('Unsupported payment token or theme.');
 if(!/^(?:0|[1-9]\d*)(?:\.\d{1,18})?$/.test(amount)||!Number.isFinite(Number(amount))||Number(amount)<=0)throw Error('Enter a positive decimal amount (up to 18 decimal places).');
 const url=new URL('https://stoadex.com/embed/swap/robinhood/'+token);
 url.search=new URLSearchParams({pay,theme,amount,ref}).toString();
 return {url:url.href,html:`<iframe src="${url.href.replaceAll('&','&amp;')}" width="100%" height="330" style="max-width:420px;border:0;border-radius:16px" title="Swap on Stoa — Robinhood Chain" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`};
}
if(typeof module!=='undefined')module.exports={buildEmbed};
else root.buildEmbed=buildEmbed;
})(globalThis);
