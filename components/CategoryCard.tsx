'use client';

import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  resourceCount: number;
  description: string;
  color: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple' | 'cyan' | 'lime' | 'pink' | 'indigo' | 'orange';
  link?: string;
}

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-100 dark:border-emerald-800',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-800',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-800',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    text: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-100 dark:border-rose-800',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-100 dark:border-purple-800',
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-100 dark:border-cyan-800',
  },
  lime: {
    bg: 'bg-lime-50 dark:bg-lime-900/20',
    text: 'text-lime-600 dark:text-lime-400',
    border: 'border-lime-100 dark:border-lime-800',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-100 dark:border-pink-800',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    text: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-100 dark:border-indigo-800',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-100 dark:border-orange-800',
  },
};

export default function CategoryCard({
  icon,
  title,
  resourceCount,
  description,
  color,
  link,
}: CategoryCardProps) {
  const colors = colorClasses[color];
  
  const CardContent = () => (
    <>
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-all duration-300`} />

      {/* Icon Container */}
      <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg mx-auto`}>
        <div className="w-7 h-7">
          {icon}
        </div>
      </div> 

      {/* Content */}
      <div className="space-y-3 relative z-10 text-center">
        <h3 className="font-bold text-xl text-neutral-950 dark:text-white group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {description}
        </p>

        {/* Resource Count Badge */}
        <div className="flex items-center justify-center pt-2 gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
            {resourceCount} resources
          </span>
          <span className={`text-lg font-medium ${colors.text} opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300`}>
            →
          </span>
        </div>
      </div>

      {/* Hover Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.text.replace('text-', 'bg-')} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </>
  );
  
  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block card-interactive group relative overflow-hidden p-6"
      >
        <CardContent />
      </a>
    );
  }
  
  return (
    <div className="card-interactive group relative overflow-hidden p-6">
      <CardContent />
    </div>
  );
}
