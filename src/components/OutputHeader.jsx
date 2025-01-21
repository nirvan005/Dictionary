import { useContext, useRef } from "react";
import { DictContext } from "../store/DictContext";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

function OutputHeader() {
  const { result } = useContext(DictContext);
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const word = result[0].word;
  const origin = result[0].origin;
  const phonetics = result[0].phonetics;
  let phoneticsText = null;
  let phoneticsAudio = null;
  try {
    phoneticsText = phonetics[0].text;
  } catch (err) {}
  try {
    phoneticsAudio = phonetics[0].audio;
  } catch (err) {}
  return (
    <>
      <div className="header row">
        <div>
          <div className="speaker-icon">
            <HiOutlineSpeakerWave
              className=""
              onClick={handlePlayAudio}
              style={{
                fontSize: "3rem",
                cursor: "pointer",
                color: "white",
              }}
            />
          </div>

          <audio ref={audioRef} src={phoneticsAudio} />

          <h1 className="output-title mt-3">{word}</h1>
        </div>
        {phoneticsText && <div className="phonetic">{phoneticsText}</div>}
        {"origin" in result[0] && (
          <div className="origin">origin: {origin} </div>
        )}
      </div>
    </>
  );
}
export default OutputHeader;
