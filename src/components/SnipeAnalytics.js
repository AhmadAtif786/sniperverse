'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSnipeAnalytics } from '@/store/slices/authSlice';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import {
  FiTrendingUp, FiTrendingDown, FiDollarSign, FiActivity,
  FiClock, FiCheckCircle, FiXCircle, FiArrowUp, FiArrowDown,
  FiRefreshCw, FiFilter, FiCalendar, FiBarChart
} from 'react-icons/fi';

export default function SnipeAnalytics({ userId }) {
  const dispatch = useDispatch();
  const { snipeAnalytics, analyticsLoading, error } = useSelector((state) => state.auth);
  const [timeFilter, setTimeFilter] = useState('7d');


  useEffect(() => {
    if (userId) {
      dispatch(fetchSnipeAnalytics({ userId }));
    }
  }, [dispatch, userId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const formatSol = (amount) => {
    return `${parseFloat(amount).toFixed(4)} SOL`;
  };

  const formatPercentage = (value) => {
    return `${parseFloat(value).toFixed(2)}%`;
  };

  const pnlData = snipeAnalytics?.pnl_data || [];
  const totalPnL = snipeAnalytics?.total_pnl || 0;
  const totalVolume = snipeAnalytics?.total_volume || 0;
  const roi = totalVolume > 0 ? (totalPnL / totalVolume) * 100 : 0;

  const chartData = pnlData.map(item => ({
    date: formatDate(item.date || item.created_at),
    pnl: parseFloat(item.pnl || 0),
    volume: parseFloat(item.volume || item.amount_sol || 0),
    timestamp: new Date(item.date || item.created_at).getTime()
  })).sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <FiTrendingUp className="text-2xl text-blue-400" />
            <span className="text-sm text-gray-400">Total P&L</span>
          </div>
          <div className={`text-3xl font-bold ${totalPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {totalPnL >= 0 ? '+' : ''}{formatSol(totalPnL)}
          </div>
          <div className="text-sm text-gray-400 mt-2">All time profit/loss</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0a0a18] border border-green-900/50 rounded-xl p-6"
        >
                                <div className="flex items-center justify-between mb-4">
                        <FiBarChart className="text-2xl text-green-400" />
                        <span className="text-sm text-gray-400">ROI</span>
                      </div>
          <div className={`text-3xl font-bold ${roi >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {roi >= 0 ? '+' : ''}{formatPercentage(roi)}
          </div>
          <div className="text-sm text-gray-400 mt-2">Return on investment</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#0a0a18] border border-purple-900/50 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <FiDollarSign className="text-2xl text-purple-400" />
            <span className="text-sm text-gray-400">Avg P&L</span>
          </div>
          <div className={`text-3xl font-bold ${totalPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {totalPnL >= 0 ? '+' : ''}{formatSol(totalPnL / (chartData.length || 1))}
          </div>
          <div className="text-sm text-gray-400 mt-2">Per trade average</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">P&L Trend</h2>
          <div className="flex items-center space-x-2">
            <FiFilter className="text-blue-400" />
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="bg-[#0f172a] border border-gray-800 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1d">Last 24h</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="all">All time</option>
            </select>
          </div>
        </div>
        
        {analyticsLoading ? (
          <div className="flex items-center justify-center h-64">
            <FiRefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
          </div>
        ) : chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis 
                dataKey="date" 
                stroke="#64748b" 
                fontSize={12}
                tick={{ fill: '#64748b' }}
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={12}
                tick={{ fill: '#64748b' }}
                tickFormatter={(value) => `${value.toFixed(1)} SOL`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
                formatter={(value, name) => [
                  `${value.toFixed(2)} SOL`, 
                  name === 'pnl' ? 'P&L' : 'Volume'
                ]}
              />
              <Line 
                type="monotone" 
                dataKey="pnl" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
              />
              <Area 
                type="monotone" 
                dataKey="volume" 
                stroke="#3B82F6" 
                fill="url(#volumeGradient)"
                strokeWidth={1}
                opacity={0.3}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-64 text-gray-400">
            No P&L data available for the selected period
          </div>
        )}
      </motion.div>
    </div>
  );
}
