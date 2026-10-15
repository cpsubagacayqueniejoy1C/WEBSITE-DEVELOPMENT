import { Head, Link } from '@inertiajs/react';

export default ({ auth, laravelVersion, phpVersion }) => {
    return (
        <>
            <Head title="Welcome to Tech Spec Hub" />
            <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-gray-100 min-h-screen flex flex-col justify-between selection:bg-red-500 selection:text-white">
                
                {/* Navigation Header */}
                <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-400 uppercase">
                                Tech Spec Hub
                            </span>
                        </div>

                        <nav className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-slate-300 hover:text-white font-semibold px-4 py-2 transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="max-w-7xl mx-auto px-6 py-20 text-center space-y-8 my-auto">
                    <div className="inline-block bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">
                        Next-Gen Hardware Database
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
                        Explore Elite Laptop & Desktop <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-400">Specifications</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Access detailed architectural blueprints, hardware metrics, and comprehensive component breakdowns for high-performance systems.
                    </p>

                    <div className="pt-6 flex justify-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all text-base"
                            >
                                Open Catalog Dashboard &rarr;
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all text-base"
                                >
                                    Access Catalog &rarr;
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all text-base"
                                >
                                    Create Account
                                </Link>
                            </>
                        )}
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-center text-xs text-slate-500">
                    <p>Tech Spec Hub — Built with Laravel & React Inertia.</p>
                </footer>

            </div>
        </>
    );
};