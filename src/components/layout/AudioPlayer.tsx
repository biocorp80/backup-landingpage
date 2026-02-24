import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import clsx from 'clsx';
import { useMediaStore } from '../../store/mediaStore';

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicUrl = useMediaStore((s) => s.getMusicUrl());

  useEffect(() => {
    // Dispose previous audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setPlaying(false);
    }

    audioRef.current = new Audio(musicUrl);
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    // Try autoplay on load
    const playPromise = audioRef.current?.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          const enableAudio = () => {
            if (audioRef.current && !playing) {
              audioRef.current.play().then(() => setPlaying(true)).catch(console.error);
            }
            document.removeEventListener('click', enableAudio);
          };
          document.addEventListener('click', enableAudio);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [musicUrl]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 group ios-safe-bottom">
      <div
        className={clsx(
          "absolute -inset-1 bg-primary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200",
          playing && "animate-pulse"
        )}
      ></div>
      <button
        onClick={toggle}
        className="relative bg-white text-slate-900 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transform transition group-hover:scale-110 border border-slate-100 overflow-hidden"
      >
        {playing && <div className="absolute inset-0 bg-primary/5"></div>}
        {playing ? <Pause size={20} className="z-10" /> : <Play size={20} className="z-10 ml-0.5" />}

        {/* Spinning Border when playing */}
        {playing && (
          <div
            className="absolute inset-0 rounded-full border-2 border-primary/30 border-t-primary animate-spin"
            style={{ animationDuration: '2s' }}
          ></div>
        )}
      </button>

      {/* Tooltip */}
      <span className="absolute left-16 top-3 bg-white text-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none">
        {playing ? 'Pause Music' : 'Play Music'}
      </span>
    </div>
  );
};

export default AudioPlayer;