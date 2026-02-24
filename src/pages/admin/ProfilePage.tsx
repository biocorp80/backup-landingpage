import { useState } from 'react';
import { Save, Loader2, Shield } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const ProfilePage = () => {
    const { user, updateProfile } = useAuthStore();
    const [form, setForm] = useState({
        name: user?.name ?? '',
        email: user?.email ?? '',
    });
    const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' });
    const [saving, setSaving] = useState(false);
    const [passSaving, setPassSaving] = useState(false);
    const [msg, setMsg] = useState('');
    const [passMsg, setPassMsg] = useState('');

    const saveProfile = async () => {
        setSaving(true);
        await new Promise((r) => setTimeout(r, 800));
        updateProfile({ name: form.name, email: form.email });
        setSaving(false);
        setMsg('Profil berhasil disimpan!');
        setTimeout(() => setMsg(''), 3000);
    };

    const changePassword = async () => {
        if (passwords.newPass !== passwords.confirm) {
            setPassMsg('Password baru tidak cocok!');
            return;
        }
        if (passwords.newPass.length < 6) {
            setPassMsg('Password minimal 6 karakter.');
            return;
        }
        setPassSaving(true);
        await new Promise((r) => setTimeout(r, 800));
        setPassSaving(false);
        setPasswords({ current: '', newPass: '', confirm: '' });
        setPassMsg('Password berhasil diubah!');
        setTimeout(() => setPassMsg(''), 3000);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-xl font-black text-slate-900">Profil Admin</h2>

            {/* Profile Info */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-2xl font-black">
                        {user?.avatar ?? 'A'}
                    </div>
                    <div>
                        <p className="font-black text-slate-900 text-lg">{user?.name}</p>
                        <p className="text-sm text-slate-400">{user?.role === 'admin' ? 'Super Admin' : 'Editor'}</p>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Nama Lengkap</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition" />
                </div>

                {msg && <p className="text-teal-600 text-sm font-bold bg-teal-50 px-4 py-2 rounded-xl">✓ {msg}</p>}

                <button onClick={saveProfile} disabled={saving} className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg hover:from-blue-600 hover:to-teal-600 transition disabled:opacity-50">
                    {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                    {saving ? 'Menyimpan...' : 'Simpan Profil'}
                </button>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
                <div className="flex items-center gap-2">
                    <Shield size={16} className="text-slate-400" />
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Ganti Password</p>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Password Saat Ini</label>
                    <input type="password" value={passwords.current} onChange={(e) => setPasswords({ ...passwords, current: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Password Baru</label>
                        <input type="password" value={passwords.newPass} onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Konfirmasi</label>
                        <input type="password" value={passwords.confirm} onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-teal-400 transition" />
                    </div>
                </div>

                {passMsg && (
                    <p className={`text-sm font-bold px-4 py-2 rounded-xl ${passMsg.includes('berhasil') ? 'text-teal-600 bg-teal-50' : 'text-red-600 bg-red-50'}`}>
                        {passMsg}
                    </p>
                )}

                <button onClick={changePassword} disabled={passSaving || !passwords.current || !passwords.newPass} className="flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 transition disabled:opacity-50">
                    {passSaving ? <Loader2 size={15} className="animate-spin" /> : <Shield size={15} />}
                    {passSaving ? 'Memperbarui...' : 'Ubah Password'}
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
