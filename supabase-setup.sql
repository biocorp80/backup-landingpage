-- ================================================
-- DOSBING.AI — Supabase Database Setup
-- Run this in: Supabase Dashboard → SQL Editor
-- ================================================

-- 1. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT DEFAULT '',
    color TEXT DEFAULT 'teal',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TAGS TABLE
CREATE TABLE IF NOT EXISTS tags (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS blog_posts (
    id TEXT PRIMARY KEY DEFAULT 'post-' || substr(md5(random()::text), 1, 8),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT DEFAULT '',
    content TEXT DEFAULT '',
    cover_image TEXT DEFAULT '',
    category_id TEXT REFERENCES categories(id) ON DELETE SET NULL,
    tag_ids TEXT[] DEFAULT '{}',
    author JSONB DEFAULT '{"name": "Tim Dosbing.ai", "avatar": "TD", "role": "Academic Content Team"}',
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMPTZ DEFAULT NOW(),
    meta_title TEXT DEFAULT '',
    meta_description TEXT DEFAULT '',
    reading_time INT DEFAULT 5,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. MEDIA TABLE
CREATE TABLE IF NOT EXISTS media (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('image', 'audio')),
    mime_type TEXT NOT NULL,
    size BIGINT DEFAULT 0,
    storage_path TEXT NOT NULL,
    url TEXT NOT NULL,
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SITE CONTENT TABLE (JSON blob for landing page)
CREATE TABLE IF NOT EXISTS site_content (
    id TEXT PRIMARY KEY DEFAULT 'main',
    content JSONB NOT NULL DEFAULT '{}',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. SETTINGS TABLE (key-value store)
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT DEFAULT '',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================

-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ for categories, tags, blog_posts, site_content
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read tags" ON tags FOR SELECT USING (true);
CREATE POLICY "Public read blog_posts" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Public read site_content" ON site_content FOR SELECT USING (true);
CREATE POLICY "Public read media" ON media FOR SELECT USING (true);
CREATE POLICY "Public read settings" ON settings FOR SELECT USING (true);

-- AUTHENTICATED WRITE for all tables
CREATE POLICY "Auth insert categories" ON categories FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth update categories" ON categories FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth delete categories" ON categories FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth insert tags" ON tags FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth update tags" ON tags FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth delete tags" ON tags FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth insert blog_posts" ON blog_posts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth update blog_posts" ON blog_posts FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth delete blog_posts" ON blog_posts FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth insert media" ON media FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth update media" ON media FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth delete media" ON media FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth insert site_content" ON site_content FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth update site_content" ON site_content FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth delete site_content" ON site_content FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth insert settings" ON settings FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth update settings" ON settings FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth delete settings" ON settings FOR DELETE TO authenticated USING (true);

-- ================================================
-- STORAGE BUCKET
-- ================================================
-- NOTE: Run these via Supabase Dashboard → Storage, or use the SQL below:

INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to media bucket
CREATE POLICY "Public read media bucket" ON storage.objects
    FOR SELECT USING (bucket_id = 'media');

-- Allow authenticated users to upload to media bucket
CREATE POLICY "Auth upload media bucket" ON storage.objects
    FOR INSERT TO authenticated WITH CHECK (bucket_id = 'media');

-- Allow authenticated users to delete from media bucket
CREATE POLICY "Auth delete media bucket" ON storage.objects
    FOR DELETE TO authenticated USING (bucket_id = 'media');

-- ================================================
-- SEED DATA: Categories
-- ================================================
INSERT INTO categories (id, name, slug, description, color) VALUES
    ('cat-1', 'Tips Skripsi', 'tips-skripsi', 'Panduan dan tips praktis mengerjakan skripsi', 'teal'),
    ('cat-2', 'Metode Penelitian', 'metode-penelitian', 'Pembahasan mendalam tentang metodologi riset', 'blue'),
    ('cat-3', 'Kehidupan Mahasiswa', 'kehidupan-mahasiswa', 'Cerita, motivasi, dan insight dunia kampus', 'violet'),
    ('cat-4', 'AI & Teknologi', 'ai-teknologi', 'Pemanfaatan AI dan teknologi dalam pendidikan', 'cyan'),
    ('cat-5', 'Karir & Akademik', 'karir-akademik', 'Persiapan karir pasca kampus dan jalur akademik', 'orange')
ON CONFLICT (id) DO NOTHING;

-- ================================================
-- SEED DATA: Tags
-- ================================================
INSERT INTO tags (id, name, slug) VALUES
    ('tag-1', 'Skripsi', 'skripsi'),
    ('tag-2', 'Bab 1', 'bab-1'),
    ('tag-3', 'Judul Penelitian', 'judul-penelitian'),
    ('tag-4', 'Dosen Pembimbing', 'dosen-pembimbing'),
    ('tag-5', 'Metode Kuantitatif', 'metode-kuantitatif'),
    ('tag-6', 'Metode Kualitatif', 'metode-kualitatif'),
    ('tag-7', 'Sidang Skripsi', 'sidang-skripsi'),
    ('tag-8', 'Mahasiswa Akhir', 'mahasiswa-akhir'),
    ('tag-9', 'AI', 'ai'),
    ('tag-10', 'Produktivitas', 'produktivitas'),
    ('tag-11', 'Motivasi', 'motivasi'),
    ('tag-12', 'Literature Review', 'literature-review')
ON CONFLICT (id) DO NOTHING;

-- ================================================
-- DONE! 🎉
-- ================================================
-- After running this SQL:
-- 1. Go to Authentication → Users → Add user (create admin login)
-- 2. Your app is ready to connect!
