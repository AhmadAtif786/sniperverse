'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '@/hooks/useAuth';
import { fetchSnipeHistory, fetchSnipeAnalytics } from '@/store/slices/authSlice';
import SnipeAnalytics from '@/components/SnipeAnalytics';
import Header from '@/components/header';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  FiTrendingUp, FiTrendingDown, FiDollarSign, FiActivity, 
  FiClock, FiCheckCircle, FiXCircle, FiArrowUp, FiArrowDown,
  FiRefreshCw, FiFilter, FiCalendar
} from 'react-icons/fi';

export default function VisualLogPage() {
  const { user, isAuthenticated, loading } = useAuth();
  const dispatch = useDispatch();
  const { snipeHistory, snipeAnalytics, historyLoading, analyticsLoading, error } = useSelector((state) => state.auth);
  

  const [timeFilter, setTimeFilter] = useState('7d');
  const [selectedToken, setSelectedToken] = useState('all');



  useEffect(() => {
    if (user?.id && isAuthenticated) {
      dispatch(fetchSnipeHistory({ userId: user.id, limit: 100 }));
      dispatch(fetchSnipeAnalytics({ userId: user.id }));
    } else {
    }
  }, [dispatch, user?.id, isAuthenticated]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatSol = (amount) => {
    return `${parseFloat(amount).toFixed(4)} SOL`;
  };

  const getStatusColor = (result) => {
    return result === 'success' ? 'text-green-400' : 'text-red-400';
  };

  const getStatusIcon = (result) => {
    return result === 'success' ? <FiCheckCircle className="w-4 h-4" /> : <FiXCircle className="w-4 h-4" />;
  };

  const filteredHistory = (snipeHistory || []).filter(item => {
    if (selectedToken !== 'all' && item.token_address !== selectedToken) return false;
    
    const itemDate = new Date(item.created_at);
    const now = new Date();
    const diffDays = (now - itemDate) / (1000 * 60 * 60 * 24);
    
    switch (timeFilter) {
      case '1d': return diffDays <= 1;
      case '7d': return diffDays <= 7;
      case '30d': return diffDays <= 30;
      case '90d': return diffDays <= 90;
      default: return true;
    }
  });

  const chartData = filteredHistory.map(item => ({
    date: formatDate(item.created_at),
    amount: parseFloat(item.amount_sol),
    result: item.result === 'success' ? 1 : 0,
    timestamp: new Date(item.created_at).getTime()
  })).sort((a, b) => a.timestamp - b.timestamp);

  const successRate = filteredHistory.length > 0 
    ? (filteredHistory.filter(item => item.result === 'success').length / filteredHistory.length * 100).toFixed(1)
    : 0;

  const totalVolume = filteredHistory.reduce((sum, item) => sum + parseFloat(item.amount_sol), 0);
  const successVolume = filteredHistory
    .filter(item => item.result === 'success')
    .reduce((sum, item) => sum + parseFloat(item.amount_sol), 0);

  const uniqueTokens = [...new Set(filteredHistory.map(item => item.token_address))];

  const tokenData = uniqueTokens.map(tokenAddress => {
    const tokenHistory = filteredHistory.filter(item => item.token_address === tokenAddress);
    const token = tokenHistory[0];
    return {
      name: token.token_symbol || token.token_name || 'Unknown',
      value: tokenHistory.length,
      address: tokenAddress
    };
  });

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4'];

  return (
    <main className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen">
      <Header />
      <section className="relative min-h-screen px-6 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                  Visual Log & Analytics
                </h1>
                <p className="text-blue-200">
                  Track your snipe performance and analyze trends
                </p>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
                  >
                    Error: {error}
                  </motion.div>
                )}
              </div>

              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <FiActivity className="text-2xl text-blue-400" />
                    <span className="text-sm text-gray-400">Total Snipes</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{filteredHistory.length}</div>
                  <div className="text-sm text-gray-400 mt-2">All time</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#0a0a18] border border-green-900/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <FiTrendingUp className="text-2xl text-green-400" />
                    <span className="text-sm text-gray-400">Success Rate</span>
                  </div>
                  <div className="text-3xl font-bold text-green-400">{successRate}%</div>
                  <div className="text-sm text-gray-400 mt-2">Successful snipes</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[#0a0a18] border border-purple-900/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <FiDollarSign className="text-2xl text-purple-400" />
                    <span className="text-sm text-gray-400">Total Volume</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">{formatSol(totalVolume)}</div>
                  <div className="text-sm text-gray-400 mt-2">SOL invested</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[#0a0a18] border border-yellow-900/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <FiClock className="text-2xl text-yellow-400" />
                    <span className="text-sm text-gray-400">Unique Tokens</span>
                  </div>
                  <div className="text-3xl font-bold text-yellow-400">{uniqueTokens.length}</div>
                  <div className="text-sm text-gray-400 mt-2">Different tokens</div>
                </motion.div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Volume Timeline</h2>
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
                  
                  {historyLoading ? (
                    <div className="flex items-center justify-center h-64">
                      <FiRefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
                    </div>
                  ) : chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={chartData}>
                        <defs>
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
                          tickFormatter={(value) => `${value.toFixed(2)} SOL`}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '1px solid #1e293b',
                            borderRadius: '8px',
                            color: '#ffffff'
                          }}
                          formatter={(value) => [`${value.toFixed(4)} SOL`, 'Volume']}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="amount" 
                          stroke="#3B82F6" 
                          fill="url(#volumeGradient)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-64 text-gray-400">
                      No data available for the selected period
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-[#0a0a18] border border-purple-900/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Token Distribution</h2>
                    <div className="flex items-center space-x-2">
                      <FiFilter className="text-purple-400" />
                      <select
                        value={selectedToken}
                        onChange={(e) => setSelectedToken(e.target.value)}
                        className="bg-[#0f172a] border border-gray-800 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="all">All Tokens</option>
                        {uniqueTokens.map(token => {
                          const tokenData = filteredHistory.find(item => item.token_address === token);
                          return (
                            <option key={token} value={token}>
                              {tokenData?.token_symbol || tokenData?.token_name || 'Unknown'}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  
                  {analyticsLoading ? (
                    <div className="flex items-center justify-center h-64">
                      <FiRefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
                    </div>
                  ) : tokenData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={tokenData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {tokenData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: '#0f172a',
                            border: '1px solid #1e293b',
                            borderRadius: '8px',
                            color: '#ffffff'
                          }}
                          formatter={(value, name) => [value, 'Snipes']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-64 text-gray-400">
                      No token data available
                    </div>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-[#0a0a18] border border-green-900/50 rounded-xl p-6"
              >
                <SnipeAnalytics userId={user?.id} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Recent Snipe History</h2>
                  <button
                    onClick={() => {
                      if (user?.id) {
                        dispatch(fetchSnipeHistory({ userId: user.id, limit: 100 }));
                      }
                    }}
                    disabled={historyLoading}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <FiRefreshCw className={`w-4 h-4 ${historyLoading ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                </div>

                {historyLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <FiRefreshCw className="w-6 h-6 text-blue-400 animate-spin" />
                  </div>
                ) : filteredHistory.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left py-3 px-4 text-blue-200">Token</th>
                          <th className="text-left py-3 px-4 text-blue-200">Amount</th>
                          <th className="text-left py-3 px-4 text-blue-200">Slippage</th>
                          <th className="text-left py-3 px-4 text-blue-200">Status</th>
                          <th className="text-left py-3 px-4 text-blue-200">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredHistory.slice(0, 10).map((item, index) => (
                          <motion.tr
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors"
                          >
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium text-white">
                                  {item.token_symbol || item.token_name || 'Unknown'}
                                </div>
                                <div className="text-sm text-gray-400 font-mono">
                                  {item.token_address.slice(0, 8)}...{item.token_address.slice(-6)}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-white font-medium">
                              {formatSol(item.amount_sol)}
                            </td>
                            <td className="py-3 px-4 text-gray-300">
                              {item.slippage}%
                            </td>
                            <td className="py-3 px-4">
                              <div className={`flex items-center space-x-2 ${getStatusColor(item.result)}`}>
                                {getStatusIcon(item.result)}
                                <span className="capitalize">{item.result}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-300 text-sm">
                              {formatDate(item.created_at)}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <FiActivity className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                    <p>No snipe history found</p>
                    <p className="text-sm mt-2">Start sniping tokens to see your history here</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
                 </section>
       </main>
   );
 }
