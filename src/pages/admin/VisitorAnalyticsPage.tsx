import { useState, useMemo } from 'react';
import { Monitor, Smartphone, Tablet, Globe, Clock, Users, Eye, BarChart3, ArrowUpRight, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useVisitorStore, VisitorEntry } from '../../store/visitorStore';

const VisitorAnalyticsPage = () => {
    const { visitors, clearVisitors } = useVisitorStore();
    const [tab, setTab] = useState<'overview' | 'log' | 'devices'>('overview');
    const [logPage, setLogPage] = useState(1);
    const perPage = 15;

    // Stats calculations
    const stats = useMemo(() => {
        const now = Date.now();
        const last24h = visitors.filter((v) => now - new Date(v.timestamp).getTime() < 86400000);
        const last7d = visitors.filter((v) => now - new Date(v.timestamp).getTime() < 604800000);

        // Unique sessions (unique per hour)
        const uniqueHours = new Set(last24h.map((v) => new Date(v.timestamp).getHours()));
        const avgSessionDuration = visitors.length > 0
            ? Math.round(visitors.reduce((sum, v) => sum + v.sessionDuration, 0) / visitors.length)
            : 0;

        return {
            totalVisitors: visitors.length,
            today: last24h.length,
            thisWeek: last7d.length,
            activeHours: uniqueHours.size,
            avgDuration: avgSessionDuration,
        };
    }, [visitors]);

    // Device breakdown
    const deviceBreakdown = useMemo(() => {
        const counts: Record<string, number> = {};
        visitors.forEach((v) => { counts[v.device] = (counts[v.device] || 0) + 1; });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]);
    }, [visitors]);

    // Browser breakdown
    const browserBreakdown = useMemo(() => {
        const counts: Record<string, number> = {};
        visitors.forEach((v) => { counts[v.browser] = (counts[v.browser] || 0) + 1; });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]);
    }, [visitors]);

    // OS breakdown
    const osBreakdown = useMemo(() => {
        const counts: Record<string, number> = {};
        visitors.forEach((v) => { counts[v.os] = (counts[v.os] || 0) + 1; });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]);
    }, [visitors]);

    // Top pages
    const topPages = useMemo(() => {
        const counts: Record<string, number> = {};
        visitors.forEach((v) => { counts[v.page] = (counts[v.page] || 0) + 1; });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]);
    }, [visitors]);

    // Referral sources
    const referralSources = useMemo(() => {
        const counts: Record<string, number> = {};
        visitors.forEach((v) => { counts[v.referrer] = (counts[v.referrer] || 0) + 1; });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]);
    }, [visitors]);

    // Location breakdown
    const locationBreakdown = useMemo(() => {
        const counts: Record<string, number> = {};
        visitors.forEach((v) => { counts[v.country] = (counts[v.country] || 0) + 1; });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]);
    }, [visitors]);

    // Hourly distribution
    const hourlyDist = useMemo(() => {
        const hours = new Array(24).fill(0);
        visitors.forEach((v) => {
            const h = new Date(v.timestamp).getHours();
            hours[h]++;
        });
        return hours;
    }, [visitors]);
    const maxHourly = Math.max(...hourlyDist, 1);

    // Pagination for log
    const totalPages = Math.ceil(visitors.length / perPage);
    const paginatedVisitors = visitors.slice((logPage - 1) * perPage, logPage * perPage);

    const formatDuration = (s: number) => {
        if (s < 60) return `${s}s`;
        const m = Math.floor(s / 60);
        return `${m}m ${s % 60}s`;
    };

    const deviceIcon = (d: string) => {
        if (d === 'Mobile') return <Smartphone size={14} />;
        if (d === 'Tablet') return <Tablet size={14} />;
        return <Monitor size={14} />;
    };

    const pct = (count: number) => visitors.length > 0 ? ((count / visitors.length) * 100).toFixed(1) : '0';

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-slate-400">Monitor pengunjung website secara real-time</p>
                </div>
                <button onClick={() => { if (confirm('Hapus semua data visitor?')) clearVisitors(); }} className="flex items-center gap-2 px-4 py-2.5 border border-red-200 text-red-500 text-sm font-bold rounded-xl hover:bg-red-50 transition">
                    <Trash2 size={14} /> Reset Data
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                    { label: 'Total Visitor', value: stats.totalVisitors, icon: <Users size={18} />, color: 'from-blue-500 to-blue-600' },
                    { label: 'Hari Ini', value: stats.today, icon: <Eye size={18} />, color: 'from-teal-500 to-teal-600' },
                    { label: '7 Hari', value: stats.thisWeek, icon: <BarChart3 size={18} />, color: 'from-violet-500 to-violet-600' },
                    { label: 'Jam Aktif', value: `${stats.activeHours}/24`, icon: <Clock size={18} />, color: 'from-amber-500 to-orange-500' },
                    { label: 'Avg. Durasi', value: formatDuration(stats.avgDuration), icon: <ArrowUpRight size={18} />, color: 'from-cyan-500 to-cyan-600' },
                ].map((s) => (
                    <div key={s.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-3`}>
                            {s.icon}
                        </div>
                        <p className="text-2xl font-black text-slate-900">{s.value}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {visitors.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 text-center">
                    <BarChart3 className="mx-auto text-slate-200 mb-4" size={56} />
                    <h3 className="text-lg font-black text-slate-400 mb-2">Belum Ada Data Pengunjung</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">Data pengunjung akan muncul secara otomatis setelah website dikunjungi. Pastikan tracker sudah terpasang di halaman landing.</p>
                </div>
            ) : (
                <>

                    {/* Tabs */}
                    <div className="flex gap-2">
                        {(['overview', 'log', 'devices'] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${tab === t ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'}`}
                            >
                                {t === 'overview' ? '📊 Overview' : t === 'log' ? '📋 Log Visitor' : '📱 Devices'}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {tab === 'overview' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Hourly Traffic Chart */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">⏰ Distribusi Jam Kunjungan</p>
                                <div className="flex items-end gap-1 h-40">
                                    {hourlyDist.map((count, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                            <div
                                                className="w-full bg-gradient-to-t from-teal-500 to-blue-500 rounded-t-sm transition-all hover:from-teal-400 hover:to-blue-400 min-h-[2px]"
                                                style={{ height: `${(count / maxHourly) * 100}%` }}
                                                title={`${String(i).padStart(2, '0')}:00 — ${count} visits`}
                                            />
                                            {i % 4 === 0 && <span className="text-[8px] text-slate-400 font-bold">{String(i).padStart(2, '0')}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Top Pages */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">📄 Halaman Populer</p>
                                <div className="space-y-3">
                                    {topPages.slice(0, 6).map(([page, count]) => (
                                        <div key={page} className="flex items-center gap-3">
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between text-sm mb-1">
                                                    <span className="font-bold text-slate-700 truncate max-w-[200px]">{page}</span>
                                                    <span className="text-slate-400 font-medium text-xs">{count} ({pct(count)}%)</span>
                                                </div>
                                                <div className="w-full bg-slate-100 rounded-full h-1.5">
                                                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-1.5 rounded-full" style={{ width: `${(count / (topPages[0]?.[1] || 1)) * 100}%` }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Referral Sources */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">🔗 Sumber Traffic</p>
                                <div className="space-y-3">
                                    {referralSources.map(([src, count]) => (
                                        <div key={src} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Globe size={14} className="text-slate-400" />
                                                <span className="text-sm font-bold text-slate-700">{src}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-400">{count}</span>
                                                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">{pct(count)}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">📍 Lokasi Pengunjung</p>
                                <div className="space-y-2">
                                    {locationBreakdown.slice(0, 8).map(([loc, count]) => (
                                        <div key={loc} className="flex items-center justify-between py-1">
                                            <span className="text-sm font-bold text-slate-700">{loc}</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 bg-slate-100 rounded-full h-1.5">
                                                    <div className="bg-gradient-to-r from-violet-500 to-blue-500 h-1.5 rounded-full" style={{ width: `${(count / (locationBreakdown[0]?.[1] || 1)) * 100}%` }} />
                                                </div>
                                                <span className="text-xs text-slate-400 font-medium w-8 text-right">{count}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {tab === 'log' && (
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-100 bg-slate-50/50">
                                            <th className="text-left px-5 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Waktu</th>
                                            <th className="text-left px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Halaman</th>
                                            <th className="text-left px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hidden md:table-cell">Device</th>
                                            <th className="text-left px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hidden lg:table-cell">Browser</th>
                                            <th className="text-left px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hidden lg:table-cell">OS</th>
                                            <th className="text-left px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hidden md:table-cell">Screen</th>
                                            <th className="text-left px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hidden xl:table-cell">Sumber</th>
                                            <th className="text-left px-4 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Durasi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedVisitors.map((v) => (
                                            <tr key={v.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition">
                                                <td className="px-5 py-3">
                                                    <div>
                                                        <p className="font-bold text-slate-700 text-xs">{new Date(v.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</p>
                                                        <p className="text-[10px] text-slate-400 font-medium">{new Date(v.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-lg max-w-[180px] truncate block">{v.page}</span>
                                                </td>
                                                <td className="px-4 py-3 hidden md:table-cell">
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                                        {deviceIcon(v.device)}
                                                        <span className="font-medium">{v.device}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 hidden lg:table-cell text-xs text-slate-500 font-medium">{v.browser}</td>
                                                <td className="px-4 py-3 hidden lg:table-cell text-xs text-slate-500 font-medium">{v.os}</td>
                                                <td className="px-4 py-3 hidden md:table-cell text-[10px] text-slate-400 font-mono">{v.screenSize}</td>
                                                <td className="px-4 py-3 hidden xl:table-cell text-xs text-slate-500 font-medium">{v.referrer}</td>
                                                <td className="px-4 py-3 text-xs text-slate-500 font-bold">{formatDuration(v.sessionDuration)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100">
                                <p className="text-xs text-slate-400 font-medium">
                                    Menampilkan {(logPage - 1) * perPage + 1}–{Math.min(logPage * perPage, visitors.length)} dari {visitors.length}
                                </p>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => setLogPage(Math.max(1, logPage - 1))} disabled={logPage === 1} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition disabled:opacity-30">
                                        <ChevronLeft size={14} />
                                    </button>
                                    <span className="text-xs font-bold text-slate-600">{logPage}/{totalPages}</span>
                                    <button onClick={() => setLogPage(Math.min(totalPages, logPage + 1))} disabled={logPage === totalPages} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition disabled:opacity-30">
                                        <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {tab === 'devices' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Device */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">📱 Device</p>
                                <div className="space-y-4">
                                    {deviceBreakdown.map(([device, count]) => (
                                        <div key={device}>
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                                    {deviceIcon(device)} {device}
                                                </div>
                                                <span className="text-xs text-slate-400">{pct(count)}%</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full transition-all" style={{ width: `${(count / visitors.length) * 100}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Browser */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">🌐 Browser</p>
                                <div className="space-y-4">
                                    {browserBreakdown.map(([browser, count]) => (
                                        <div key={browser}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-bold text-slate-700">{browser}</span>
                                                <span className="text-xs text-slate-400">{pct(count)}%</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2.5 rounded-full transition-all" style={{ width: `${(count / visitors.length) * 100}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* OS */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">💻 Sistem Operasi</p>
                                <div className="space-y-4">
                                    {osBreakdown.map(([os, count]) => (
                                        <div key={os}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-bold text-slate-700">{os}</span>
                                                <span className="text-xs text-slate-400">{pct(count)}%</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full transition-all" style={{ width: `${(count / visitors.length) * 100}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </>
            )}
        </div>
    );
};

export default VisitorAnalyticsPage;
