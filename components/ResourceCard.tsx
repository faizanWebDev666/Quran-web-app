'use client';

import React from 'react';
import { Bookmark, Share2, Star } from 'lucide-react';

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
      <div className={`relative overflow-hidden ${imageUrl ? '' : 'bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20'} h-48 -m-4 mb-0 group-hover:scale-105 transition-transform duration-300`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-50">📚</div>
          </div>
        )}
        {isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              NEW
            </span>
          </div>
        )}
        {rating && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-neutral-900 dark:text-white">{rating.toFixed(1)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg md:text-xl text-neutral-950 dark:text-white mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4 flex-1">
          {description}
        </p>

        {/* Metadata */}
        {(author || views) && (
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-4 pb-4 border-t border-neutral-100 dark:border-neutral-800 pt-4">
            {author && <span className="font-medium">by {author}</span>}
            {views && <span>{views.toLocaleString()} views</span>}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex-1 btn btn-primary text-sm py-2.5 flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300">
            Read More
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn-icon btn-icon-primary group/btn"
            aria-label="Save resource"
          >
            <Bookmark className="w-5 h-5 group-hover/btn:fill-current transition-all duration-300" />
          </button>
          <button
            className="btn-icon btn-icon-primary group/btn"
            aria-label="Share resource"
          >
            <Share2 className="w-5 h-5 group-hover/btn:scale-110 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
