import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Blog
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';

// Admin
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import BlogManagePage from './pages/admin/BlogManagePage';
import BlogEditorPage from './pages/admin/BlogEditorPage';
import CategoriesPage from './pages/admin/CategoriesPage';
import TagsPage from './pages/admin/TagsPage';
import LandingEditorPage from './pages/admin/LandingEditorPage';
import ProfilePage from './pages/admin/ProfilePage';
import VisitorAnalyticsPage from './pages/admin/VisitorAnalyticsPage';
import MediaManagerPage from './pages/admin/MediaManagerPage';
import ProtectedRoute from './components/admin/ProtectedRoute';
import { useEffect } from 'react';
import { useAuthStore } from './store/authStore';
import { useSiteContentStore } from './store/siteContentStore';
import { useMediaStore } from './store/mediaStore';
import { useBlogStore } from './store/blogStore';

function App() {
  const { initAuth } = useAuthStore();
  const { loadFromSupabase: loadContent } = useSiteContentStore();
  const { loadFromSupabase: loadMedia } = useMediaStore();
  const { loadFromSupabase: loadBlog } = useBlogStore();

  useEffect(() => {
    initAuth();
    loadContent();
    loadMedia();
    loadBlog();
  }, [initAuth, loadContent, loadMedia, loadBlog]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public — Main Site */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Route>

        {/* Admin — Auth */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Admin — Protected CMS */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="blog" element={<BlogManagePage />} />
          <Route path="blog/new" element={<BlogEditorPage />} />
          <Route path="blog/edit/:id" element={<BlogEditorPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="tags" element={<TagsPage />} />
          <Route path="landing-editor" element={<LandingEditorPage />} />
          <Route path="analytics" element={<VisitorAnalyticsPage />} />
          <Route path="media" element={<MediaManagerPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
