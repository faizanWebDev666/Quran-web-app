'use client';

import { Sparkles, Bell, Share2, Bookmark } from 'lucide-react';

interface DailyReminderProps {
  date?: string;
  hijriDate?: string;
  verse?: string;
  meaning?: string;
  surah?: string;
  ayah?: string;
}

export default function DailyReminder({
  date = 'June 3, 2024',
  hijriDate = '27 Dhul-Hijjah 1445 AH',
  verse = 'Allahumma inni as\'aluka ilman nafi\'an wa rizqan tayyiban wa\'amalan mutaqabbalan',
  meaning = '"O Allah, I ask You for knowledge that is of benefit, and sustenance that is pure, and deeds that are accepted."',
  surah = 'Surah An-Nisa',
  ayah = '88',
}: DailyReminderProps) {
  return (
    <div className="card-interactive group relative overflow-hidden p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-emerald-900/30 dark:via-neutral-900 dark:to-cyan-900/30 border-emerald-100 dark:border-emerald-800">
      {/* Background Decorations */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-emerald-200/60 to-cyan-200/60 dark:from-emerald-800/30 dark:to-cyan-800/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-amber-200/60 to-emerald-200/60 dark:from-amber-800/30 dark:to-emerald-800/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" style={{ transitionDelay: '100ms' }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30">
              <Sparkles className="w-7 h-7 text-white animate-pulse-glow" />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl text-neutral-950 dark:text-white">
                Daily Reminder
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {date}
              </p>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {hijriDate}
              </p>
            </div>
          </div>
          <button
            className="btn-icon bg-white dark:bg-neutral-800 shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
            aria-label="Set reminder"
          >
            <Bell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </button>
        </div>

        {/* Verse/Dua */}
        <div className="space-y-4">
          {/* Arabic Text */}
          <div className="bg-white/70 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-neutral-800/50">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-emerald-700 dark:text-emerald-300 text-right leading-relaxed font-arabic">
              {verse}
            </p>
          </div>

          {/* English Translation */}
          <div className="bg-white/50 dark:bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-5 border border-white/30 dark:border-neutral-800/30">
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
              {meaning}
            </p>
          </div>

          {/* Source */}
          <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-medium">
              {surah} {ayah && `- Ayah ${ayah}`}
            </span>
            <button className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium flex items-center gap-1 group/btn">
              Read More
              <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="btn btn-primary flex-1 text-sm py-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="btn btn-secondary flex-1 text-sm py-3 flex items-center justify-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300">
            <Bookmark className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
