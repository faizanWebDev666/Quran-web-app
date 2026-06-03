'use client';

import { Sparkles, Bell } from 'lucide-react';

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
  verse = 'Allahumma inni as\'aluka ilman naafi\'an wa rizqan tayyiban wa\'amalan mutaqabbalan',
  meaning = '"O Allah, I ask You for knowledge that is of benefit, and sustenance that is pure, and deeds that are accepted."',
  surah = 'Surah An-Nisa',
  ayah = '88',
}: DailyReminderProps) {
  return (
    <div className="card-interactive group relative overflow-hidden p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border-emerald-200 dark:border-emerald-800">
      {/* Background Decorations */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-100 to-transparent rounded-full opacity-20 dark:opacity-10 group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-cyan-100 to-transparent rounded-full opacity-20 dark:opacity-10 group-hover:scale-110 transition-transform duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white animate-pulse-glow" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-950 dark:text-white">
                Daily Reminder
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {date}
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                {hijriDate}
              </p>
            </div>
          </div>
          <button
            className="btn-icon bg-white dark:bg-neutral-800 shadow-soft hover:shadow-soft-lg"
            aria-label="Set reminder"
          >
            <Bell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </button>
        </div>

        {/* Verse/Dua */}
        <div className="space-y-4">
          {/* Arabic Text */}
          <div className="bg-white/50 dark:bg-neutral-900/50 rounded-xl p-4 backdrop-blur-sm border border-white/50 dark:border-neutral-800/50">
            <p className="text-lg md:text-xl font-semibold text-emerald-700 dark:text-emerald-300 text-right leading-relaxed">
              {verse}
            </p>
          </div>

          {/* English Translation */}
          <div className="bg-white/30 dark:bg-neutral-900/30 rounded-xl p-4 backdrop-blur-sm border border-white/30 dark:border-neutral-800/30">
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 italic">
              {meaning}
            </p>
          </div>

          {/* Source */}
          <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
            <span>
              {surah} {ayah && `- Ayah ${ayah}`}
            </span>
            <button className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
              Read More
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="btn btn-primary flex-1 text-sm">
            Share
          </button>
          <button className="btn btn-secondary flex-1 text-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
