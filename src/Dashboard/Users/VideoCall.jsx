import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoCall = () => {
    const roomID = "UniAid";
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = 1826497658;
      const serverSecret = "9d9222ca31963ee012102c648a5c2ef2";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Shahadat");


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
  };
  return (
    <div
      className='flex items-center justify-center'
      ref={myMeeting}
      style={{ width: '75vw', height: '100vh', marginRight: "10vh" }}
    ></div>
  );
};

export default VideoCall;