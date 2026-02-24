import { Twitter, Link2, MessageCircle, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
    title: string;
    url?: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
    const [copied, setCopied] = useState(false);
    const shareUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    const copyLink = async () => {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Bagikan:</span>
            <a
                href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-green-50 text-green-700 text-xs font-bold hover:bg-green-100 transition"
            >
                <MessageCircle size={14} /> WhatsApp
            </a>
            <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 text-sky-700 text-xs font-bold hover:bg-sky-100 transition"
            >
                <Twitter size={14} /> Twitter / X
            </a>
            <button
                onClick={copyLink}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition"
            >
                {copied ? <Check size={14} className="text-teal-600" /> : <Link2 size={14} />}
                {copied ? 'Tersalin!' : 'Salin Link'}
            </button>
        </div>
    );
};

export default ShareButtons;
