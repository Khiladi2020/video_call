var _0x50b9=['298sKhXnP','setLocalDescription','ConstraintNotSatisfiedError','client','join_request','then','clientId','ws://onlinecall.herokuapp.com/','message','name','onerror','Sending\x20offer\x20to\x20peer.\x20','>>>\x20Creating\x20Peer\x20Connection','joined:\x20','setRemoteDescription','addIceCandidate','#local_video','Some\x20Error\x20Occured','callin','icecandidate\x20event:','\x20is\x20full\x20','offer','forEach','peer_left','PermissionDeniedError','getUserMedia','event','bye','createOffer','notification','Adding\x20local\x20stream.','>>>\x20maybeStart()','onclose','catch','created','full','setLocalAndSendMessage\x20sending\x20Message','connection','Sending\x20answer\x20to\x20peer.\x20','162761UMaGXa','3GtIJHL','status','87961IvpEQH','Unable\x20to\x20send\x20message','candidate','Message\x20Received\x20from\x20Client:','onremovetrack','Enter\x20room\x20name','getVideoTracks','createAnswer','63313KtCaJY','create_or_join_status','End\x20of\x20candidates','#remote_video','srcObject','onopen','ice_candidate','OPEN','The\x20Resolution\x20Constraints\x20are\x20not\x20supported\x20by\x20your\x20device','stringify','upgrade','readyState','ontrack','349573GWpeAX','43163mNwawl','log','13TBPVTq','Remote\x20Stream\x20Added.','752380nXdzxL','roomCode','data','type','Using\x20video\x20device:\x20','getUserMedia\x20','Created\x20RTCPeerConnection','addTrack','method','isInitiator','6894IZjQwN','answer','offer_or_answer','send','getTracks','Room:\x20','37kkLkoN','Failed\x20to\x20create\x20PeerConnection,\x20exception','close','mediaDevices','Connection\x20established','message\x20received\x20from\x20server','querySelector','got_user_media','joined','onmessage','client_msg'];var _0x4b1e=function(_0x5aff93,_0x741aaa){_0x5aff93=_0x5aff93-0x178;var _0x50b967=_0x50b9[_0x5aff93];return _0x50b967;};var _0x2d520c=_0x4b1e;(function(_0x2c40c7,_0x15673c){var _0x1518ee=_0x4b1e;while(!![]){try{var _0x27985d=parseInt(_0x1518ee(0x193))*-parseInt(_0x1518ee(0x19d))+-parseInt(_0x1518ee(0x1bf))*parseInt(_0x1518ee(0x1ab))+-parseInt(_0x1518ee(0x1af))+-parseInt(_0x1518ee(0x192))+parseInt(_0x1518ee(0x1ad))*parseInt(_0x1518ee(0x195))+parseInt(_0x1518ee(0x1aa))+parseInt(_0x1518ee(0x1ca))*parseInt(_0x1518ee(0x1b9));if(_0x27985d===_0x15673c)break;else _0x2c40c7['push'](_0x2c40c7['shift']());}catch(_0x2d37f2){_0x2c40c7['push'](_0x2c40c7['shift']());}}}(_0x50b9,0xce637));var localStream,pc,remoteStream,turnReady,clientId,isChannelReady=!0x1,isInitiator=!0x1,isStarted=!0x1,pcConfig={'iceServers':[{'urls':'stun:stun.l.google.com:19302'}]};function handle_client_messages(_0x3fbecb){var _0x59852d=_0x4b1e;if(console[_0x59852d(0x1ac)](_0x59852d(0x198),_0x3fbecb),_0x59852d(0x1c6)===_0x3fbecb[_0x59852d(0x1b2)])maybeStart();else{if(_0x59852d(0x180)===_0x3fbecb[_0x59852d(0x1b2)])isInitiator||isStarted||maybeStart(),pc['setRemoteDescription'](new RTCSessionDescription(_0x3fbecb['message'])),doAnswer();else{if(_0x59852d(0x1ba)===_0x3fbecb[_0x59852d(0x1b2)]&&isStarted)pc[_0x59852d(0x179)](new RTCSessionDescription(_0x3fbecb['message']));else{if(_0x59852d(0x197)===_0x3fbecb[_0x59852d(0x1b2)]){const _0x10cf8e=new RTCIceCandidate(_0x3fbecb[_0x59852d(0x197)]);pc[_0x59852d(0x17a)](_0x10cf8e);}else _0x59852d(0x186)===_0x3fbecb['type']&&isStarted&&handleRemoteHangup();}}}}function handle_incoming_messages(_0xffff34){var _0x2a0744=_0x4b1e;_0x2a0744(0x188)===_0xffff34[_0x2a0744(0x1b7)]?_0x2a0744(0x190)===_0xffff34[_0x2a0744(0x185)]?(clientId=_0xffff34[_0x2a0744(0x1d0)],console[_0x2a0744(0x1ac)](_0xffff34[_0x2a0744(0x1d2)])):_0x2a0744(0x1a7)===_0xffff34[_0x2a0744(0x185)]?(isInitiator=!0x0,console['log'](_0xffff34[_0x2a0744(0x1d2)])):_0x2a0744(0x182)===_0xffff34[_0x2a0744(0x185)]&&(handleRemoteHangup(),console[_0x2a0744(0x1ac)](_0xffff34[_0x2a0744(0x1d2)])):_0x2a0744(0x19e)===_0xffff34[_0x2a0744(0x1b7)]?(_0x2a0744(0x18d)===_0xffff34[_0x2a0744(0x194)]?(console[_0x2a0744(0x1ac)](_0x2a0744(0x1be)+_0xffff34['roomCode']+'\x20is\x20created\x20'),isInitiator=!0x0):_0x2a0744(0x18e)===_0xffff34[_0x2a0744(0x194)]?console[_0x2a0744(0x1ac)](_0x2a0744(0x1be)+_0xffff34[_0x2a0744(0x1b0)]+_0x2a0744(0x17f)):_0x2a0744(0x1c7)===_0xffff34[_0x2a0744(0x194)]&&(console[_0x2a0744(0x1ac)](_0x2a0744(0x178)+_0xffff34[_0x2a0744(0x1b0)]),isChannelReady=!0x0),_0x2a0744(0x18d)!==_0xffff34[_0x2a0744(0x194)]&&'joined'!==_0xffff34[_0x2a0744(0x194)]||start_video()):_0x2a0744(0x1ce)===_0xffff34[_0x2a0744(0x1b7)]?(console['log']('Another\x20peer\x20made\x20a\x20request\x20to\x20join\x20room.\x20Client:\x20'+_0xffff34[_0x2a0744(0x1cd)]),isChannelReady=!0x0):_0x2a0744(0x1ac)===_0xffff34['method']?console['log']['apply'](console,_0xffff34[_0x2a0744(0x1d2)]):_0x2a0744(0x1c9)===_0xffff34[_0x2a0744(0x1b7)]?handle_client_messages(_0xffff34):console['log'](_0xffff34[_0x2a0744(0x1d2)]);}function sendMessage(_0x1aa4cd){var _0x3355e4=_0x4b1e;socket[_0x3355e4(0x1a8)]===WebSocket[_0x3355e4(0x1a4)]?(_0x1aa4cd[_0x3355e4(0x1d0)]=clientId,socket[_0x3355e4(0x1bc)](JSON[_0x3355e4(0x1a6)](_0x1aa4cd))):console[_0x3355e4(0x1ac)](_0x3355e4(0x196));}const serv_addr=_0x2d520c(0x1d1);var socket=new WebSocket(serv_addr);socket[_0x2d520c(0x1a2)]=function(_0x1847c4){var _0x5094a1=_0x2d520c;console[_0x5094a1(0x1ac)](_0x5094a1(0x1c3)),sendRoomCode();},socket[_0x2d520c(0x1c8)]=function(_0x56e691){var _0x2562ec=_0x2d520c;console[_0x2562ec(0x1ac)](_0x2562ec(0x1c4)),handle_incoming_messages(JSON['parse'](_0x56e691[_0x2562ec(0x1b1)]));},socket[_0x2d520c(0x18b)]=function(_0xb1a42b){console['log']('Disconnected');},socket[_0x2d520c(0x1d4)]=function(_0x4c413e){var _0x33ee13=_0x2d520c;console[_0x33ee13(0x1ac)](_0x33ee13(0x17c));};var room=_0x2d520c(0x17d);function sendRoomCode(){var _0x16759a=_0x2d520c;sendMessage({'command':'create_or_join','roomCode':room=prompt(_0x16759a(0x19a))});}var localVideo=document['querySelector'](_0x2d520c(0x17b)),remoteVideo=document[_0x2d520c(0x1c5)](_0x2d520c(0x1a0));const constraints={'audio':!0x0,'video':!0x0};function start_video(){var _0x3a6221=_0x2d520c;navigator[_0x3a6221(0x1c2)][_0x3a6221(0x184)](constraints)[_0x3a6221(0x1cf)](gotLocalStream)[_0x3a6221(0x18c)](handleLocalStreamError);}function gotLocalStream(_0x32baed){var _0x758db4=_0x2d520c;console['log'](_0x758db4(0x189));const _0x303219=_0x32baed[_0x758db4(0x19b)]();console[_0x758db4(0x1ac)](_0x758db4(0x1b3)+_0x303219[0x0]['label']),localStream=_0x32baed,localVideo[_0x758db4(0x1a1)]=_0x32baed,(sendMessage({'command':_0x758db4(0x1c6)}),isInitiator&&maybeStart());}function handleLocalStreamError(_0x510544){var _0x153e97=_0x2d520c;_0x153e97(0x1cc)===_0x510544[_0x153e97(0x1d3)]?console['log'](_0x153e97(0x1a5)):_0x153e97(0x183)===_0x510544[_0x153e97(0x1d3)]&&console['log']('Permissions\x20have\x20not\x20been\x20granted'),console[_0x153e97(0x1ac)](_0x153e97(0x1b4)+_0x510544[_0x153e97(0x1d3)]+'\x20:\x20'+_0x510544[_0x153e97(0x1d2)]);}function maybeStart(){var _0x1cc510=_0x2d520c;console['log'](_0x1cc510(0x18a),isStarted,localStream,isChannelReady),!isStarted&&void 0x0!==localStream&&isChannelReady&&(console[_0x1cc510(0x1ac)](_0x1cc510(0x1d6)),createPeerConnection(),localStream[_0x1cc510(0x1bd)]()[_0x1cc510(0x181)](_0x28cc74=>pc[_0x1cc510(0x1b6)](_0x28cc74,localStream)),isStarted=!0x0,console[_0x1cc510(0x1ac)](_0x1cc510(0x1b8),isInitiator),isInitiator&&doCall());}function createPeerConnection(){var _0x2bfbde=_0x2d520c;try{(pc=new RTCPeerConnection(pcConfig))['onicecandidate']=handleIceCandidate,pc[_0x2bfbde(0x1a9)]=handleTrackEvent,pc[_0x2bfbde(0x199)]=handleRemoveTrackEvent,console[_0x2bfbde(0x1ac)](_0x2bfbde(0x1b5));}catch(_0x122b7b){return void console[_0x2bfbde(0x1ac)](_0x2bfbde(0x1c0),_0x122b7b[_0x2bfbde(0x1d2)]);}}function handleIceCandidate(_0x55c0f5){var _0x18ed29=_0x2d520c;if(console[_0x18ed29(0x1ac)](_0x18ed29(0x17e),_0x55c0f5),_0x55c0f5['candidate'])sendMessage({'command':_0x18ed29(0x1a3),'candidate':_0x55c0f5['candidate']});else console[_0x18ed29(0x1ac)](_0x18ed29(0x19f));}function handleCreateOfferError(_0x48badf){var _0x4bfa6f=_0x2d520c;console[_0x4bfa6f(0x1ac)]('createOffer()\x20error:\x20',_0x48badf);}function doCall(){var _0xdaee3=_0x2d520c;console['log'](_0xdaee3(0x1d5)),pc[_0xdaee3(0x187)](setLocalAndSendMessage,handleCreateOfferError);}function doAnswer(){var _0x171eef=_0x2d520c;console['log'](_0x171eef(0x191)),pc[_0x171eef(0x19c)]()[_0x171eef(0x1cf)](setLocalAndSendMessage,onCreateSessionDescriptionError);}function setLocalAndSendMessage(_0x4f8f3a){var _0x28cb7e=_0x2d520c;pc[_0x28cb7e(0x1cb)](_0x4f8f3a),console[_0x28cb7e(0x1ac)](_0x28cb7e(0x18f),_0x4f8f3a),sendMessage({'command':_0x28cb7e(0x1bb),'message':_0x4f8f3a});}function onCreateSessionDescriptionError(_0x48f050){var _0xbb6cec=_0x2d520c;console[_0xbb6cec(0x1ac)]('error');}function handleTrackEvent(_0x2a1547){var _0x45bd76=_0x2d520c;console[_0x45bd76(0x1ac)](_0x45bd76(0x1ae)),remoteStream=_0x2a1547['streams'][0x0],remoteVideo[_0x45bd76(0x1a1)]=remoteStream;}function handleRemoveTrackEvent(){var _0x85bb91=_0x2d520c;console[_0x85bb91(0x1ac)]('Remote\x20stream\x20removed.\x20Event',event);}function hangup(){var _0x181fe9=_0x2d520c;console['log']('Hanging\x20up.'),stop(),sendMessage({'command':_0x181fe9(0x186)});}function handleRemoteHangup(){var _0x1af60c=_0x2d520c;console[_0x1af60c(0x1ac)]('Session\x20Terminated.'),stop();}function stop(){var _0x2b76c3=_0x2d520c;isStarted=!0x1,pc[_0x2b76c3(0x1c1)](),pc=null,isChannelReady=!0x1;}window['onbeforeunload']=()=>{};