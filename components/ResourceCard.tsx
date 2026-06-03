'use client';

import React from 'react';
import { Bookmark, Share2 } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  author?: string;
  category: string;
  imageUrl?: string;
  views?: number;
  rating?: number;
  isNew?: boolean;
}

export default function ResourceCard({
  title,
  description,
  author,
  category,
  imageUrl,
  views,
  rating,
  isNew,
}: ResourceCardProps) {
  return (
    <div className="card-interactive group overflow-hidden h-full flex flex-col">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 h-40 -m-4 mb-0 group-hover:scale-105 transition-transform duration-300">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {isNew && (
            <div className="absolute top-3 right-3">
              <span className="badge-accent text-xs">New</span>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="badge-primary text-xs">{category}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-base md:text-lg text-neutral-950 dark:text-white mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3 flex-1">
          {description}
        </p>

        {/* Metadata */}
        {(author || views || rating) && (
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-3 pb-3 border-t border-neutral-100 dark:border-neutral-800 pt-3">
            {author && <span>{author}</span>}
            {views && <span>{views.toLocaleString()} views</span>}
            {rating && (
              <span className="flex items-center gap-1">
                ★ {rating.toFixed(1)}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="flex-1 btn btn-primary text-sm py-2">
            Read More
          </button>
          <button
            className="btn-icon btn-icon-primary"
            aria-label="Save resource"
          >
            <Bookmark className="w-5 h-5" />
          </button>
          <button
            className="btn-icon btn-icon-primary"
            aria-label="Share resource"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
