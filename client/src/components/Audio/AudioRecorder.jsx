import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ReactMic } from 'react-mic';
import IncomingCallModal from '../IncomingCall/IncomingCallModal';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
 const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleRecordingComplete = (recording) => {
    setRecordedAudio(recording.blob);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Audio Recorder
      </Typography>
      <ReactMic
        record={isRecording}
        onStop={handleRecordingComplete}
        mimeType="audio/mp3"
      />
      {recordedAudio && (
        <audio src={URL.createObjectURL(recordedAudio)} controls />
      )}
      <Box mt={2}>
        {!isRecording ? (
          <Button variant="contained" onClick={handleStartRecording}>
            Start Recording
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={handleStopRecording}>
            Stop Recording
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AudioRecorder;
