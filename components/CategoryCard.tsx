'use client';

import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  resourceCount: number;
  description: string;
  color: 'emerald' | 'blue' | 'amber' | 'rose' | 'purple' | 'cyan' | 'lime' | 'pink' | 'indigo' | 'orange';
}

const colorClasses = {
  emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
  lime: 'bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300',
  pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
  indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
};

export default function CategoryCard({
  icon,
  title,
  resourceCount,
  description,
  color,
}: CategoryCardProps) {
  return (
    <div className="card-interactive group overflow-hidden p-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-emerald-50 group-hover:to-transparent dark:group-hover:from-emerald-950/10 transition-all duration-300 -z-10" />

      {/* Icon Container */}
      <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <div className="w-6 h-6">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-neutral-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {description}
        </p>

        {/* Resource Count Badge */}
        <div className="flex items-center justify-between pt-2">
          <span className="badge badge-primary text-xs">
            {resourceCount} resources
          </span>
          <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            →
          </span>
        </div>
      </div>

      {/* Hover Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}
