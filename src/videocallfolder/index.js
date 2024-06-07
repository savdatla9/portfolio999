// src/components/VideoCall.js
import React, { useState, useRef, useEffect } from 'react';
import { collection, addDoc, onSnapshot, doc, updateDoc} from 'firebase/firestore';
import SimplePeer from 'simple-peer';

import { db } from '../data';

const VideoCall = () => {
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callerId, setCallerId] = useState('');
  
  const userVideo = useRef();
  const partnerVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    const callCollection = collection(db, 'calls');
    
    const unsubscribe = onSnapshot(callCollection, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const callData = change.doc.data();
          if (callData.callee === "YOUR_USER_ID") { // Replace with actual user ID logic
            setReceivingCall(true);
            setCallerSignal(callData.signal);
            setCallerId(change.doc.id);
          }
        }
      });
    });

    return () => unsubscribe();
  }, []);

  const callUser = async (id) => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', async (data) => {
      const callDoc = await addDoc(collection(db, 'calls'), {
        caller: "YOUR_USER_ID", // Replace with actual user ID logic
        callee: id,
        signal: data,
      });

      connectionRef.current = peer;
    });

    peer.on('stream', (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });
  };

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      const callDoc = doc(db, 'calls', callerId);
      updateDoc(callDoc, { signal: data });
    });

    peer.on('stream', (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    peer.signal(callerSignal); connectionRef.current = peer;
  };

  return (
    <div>
      <div>
        {stream && <video playsInline muted ref={userVideo} autoPlay />}
        {callAccepted && <video playsInline ref={partnerVideo} autoPlay />}
      </div>
      <div>
        <button onClick={() => callUser("TARGET_USER_ID")}>Call</button> {/* Replace with actual target user ID */}
        {receivingCall && !callAccepted && (
          <div>
            <h1>Someone is calling...</h1>
            <button onClick={answerCall}>Answer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCall;