import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './utils/seo';
import HomePage from './pages/HomePage';
import CookieConsent from './components/CookieConsent';

const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageLoader = () => (
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #f0f0f0',
            borderTop: '3px solid #B71C1C',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
);

const App = () => {
    useScrollToTop();

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={
                    <Suspense fallback={<PageLoader />}>
                        <BlogListPage />
                    </Suspense>
                } />
                <Route path="/blog/:slug" element={
                    <Suspense fallback={<PageLoader />}>
                        <BlogArticlePage />
                    </Suspense>
                } />
                <Route path="*" element={
                    <Suspense fallback={<PageLoader />}>
                        <NotFoundPage />
                    </Suspense>
                } />
            </Routes>
            <CookieConsent />
        </>
    );
};

export default App;
