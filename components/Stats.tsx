import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CHART_DATA } from '../constants';

const Stats: React.FC = () => {
  return (
    <div id="stats" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Outperform the competition
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Don't let your tools slow you down. Lumina is engineered for speed, giving you more time to focus on what matters—creativity.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-400 font-bold">
                  1
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Zero Latency</h4>
                  <p className="text-slate-400">Cloud-native architecture means no lag, ever.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-400 font-bold">
                  2
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">AI Optimization</h4>
                  <p className="text-slate-400">Smart caching predicts your next move.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 shadow-xl">
            <h3 className="text-lg font-medium text-white mb-6 text-center">Workflow Efficiency Score</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis dataKey="name" type="category" stroke="#fff" width={80} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                    itemStyle={{ color: '#818cf8' }}
                    cursor={{fill: 'transparent'}}
                  />
                  <Bar dataKey="efficiency" radius={[0, 4, 4, 0]} barSize={32}>
                    {CHART_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.name === 'Lumina' ? '#818cf8' : '#475569'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-xs text-slate-500 mt-4">*Based on internal benchmark tests for common design tasks.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;