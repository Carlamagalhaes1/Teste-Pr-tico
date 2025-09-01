import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
       <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden animate-fadeIn">

        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#17254D] to-[#243B6B]">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="px-6 py-4 text-gray-700 bg-[#F3F3F3]">{children}</div>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
