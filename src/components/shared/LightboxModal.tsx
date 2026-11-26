"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GalleryItem } from "@/data/gallery";

interface LightboxModalProps {
  item: GalleryItem | null;
  items?: GalleryItem[];
  onNavigate?: (item: GalleryItem) => void;
  onClose: () => void;
}

export default function LightboxModal({
  item,
  items,
  onNavigate,
  onClose,
}: LightboxModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const transitionTimerRef = useRef<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isOpen = Boolean(item);
  const activeItems = items && items.length > 0 ? items : item ? [item] : [];
  const currentIndex = item
    ? activeItems.findIndex((entry) => entry.id === item.id)
    : -1;
  const hasMultiple = activeItems.length > 1 && Boolean(onNavigate);

  const triggerNavigation = useCallback(
    (nextItem: GalleryItem) => {
      if (!onNavigate) return;
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
      setIsTransitioning(true);
      onNavigate(nextItem);
      transitionTimerRef.current = window.setTimeout(
        () => setIsTransitioning(false),
        160
      );
    },
    [onNavigate]
  );

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const handleNext = useCallback(() => {
    if (!hasMultiple || currentIndex < 0) return;
    const nextIndex = (currentIndex + 1) % activeItems.length;
    triggerNavigation(activeItems[nextIndex]);
  }, [activeItems, currentIndex, hasMultiple, triggerNavigation]);

  const handlePrevious = useCallback(() => {
    if (!hasMultiple || currentIndex < 0) return;
    const prevIndex =
      (currentIndex - 1 + activeItems.length) % activeItems.length;
    triggerNavigation(activeItems[prevIndex]);
  }, [activeItems, currentIndex, hasMultiple, triggerNavigation]);

  // Save/restore focus and lock background page scrolling while open
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move keyboard focus into the dialog
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen]);

  // Keyboard navigation while modal is open
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight" && hasMultiple) {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" && hasMultiple) {
        e.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, hasMultiple, handleNext, handlePrevious, onClose]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!hasMultiple || e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!hasMultiple || !touchStartRef.current || e.changedTouches.length !== 1) {
      touchStartRef.current = null;
      return;
    }

    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    // Trigger only on intentional horizontal swipes
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  if (!item) return null;

  const displayIndex = currentIndex >= 0 ? currentIndex + 1 : 1;
  const totalCount = activeItems.length > 0 ? activeItems.length : 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 overflow-x-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0A1626] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 border-b border-white/10 bg-[#0F243E] shrink-0">
          <span className="text-[11px] sm:text-xs font-bold text-[#FEF08A] uppercase tracking-wider truncate">
            {item.category}
          </span>

          <div className="flex items-center gap-3 shrink-0">
            {totalCount > 1 && (
              <span
                className="text-xs font-semibold text-slate-300 tabular-nums tracking-wide"
                aria-live="polite"
              >
                {displayIndex} / {totalCount}
              </span>
            )}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEF08A]"
              aria-label="Close image viewer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Modal Image Stage with Previous / Next Controls & Swipe Support */}
        <div
          className="relative w-full flex-1 min-h-[260px] sm:min-h-[420px] px-2 sm:px-16 py-3 sm:py-5 flex items-center justify-center bg-[#0A1626] touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0F243E]/85 hover:bg-[#1B7A3E] text-white border border-white/25 hover:border-[#34A853] shadow-lg backdrop-blur-sm flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEF08A]"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>
          )}

          <div
            key={item.id}
            className={`w-full flex items-center justify-center transition-opacity duration-150 ${
              isTransitioning ? "opacity-60" : "opacity-100"
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="max-w-full max-h-[58vh] sm:max-h-[66vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0F243E]/85 hover:bg-[#1B7A3E] text-white border border-white/25 hover:border-[#34A853] shadow-lg backdrop-blur-sm flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEF08A]"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>
          )}
        </div>

        {/* Modal Caption */}
        <div className="w-full px-4 sm:px-6 py-3.5 sm:py-4 bg-[#0F243E] border-t border-white/10 shrink-0">
          <p className="text-xs sm:text-sm text-slate-200 text-center font-medium leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
