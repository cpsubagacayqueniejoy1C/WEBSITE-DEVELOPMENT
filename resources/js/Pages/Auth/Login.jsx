import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Head title="Log in - Tech Spec Hub" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link href="/" className="inline-block">
                    <span className="font-black text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-400 uppercase">
                        Tech Spec Hub
                    </span>
                </Link>
                <h2 className="mt-4 text-xl font-bold tracking-tight text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-900/80 backdrop-blur-xl py-8 px-6 shadow-2xl sm:rounded-2xl border border-slate-800 sm:px-10">
                    {status && (
                        <div className="mb-4 text-sm font-medium text-emerald-400 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-slate-300 text-xs font-bold uppercase tracking-wider" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 text-white focus:border-red-500 focus:ring-red-500 rounded-xl shadow-inner"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2 text-red-400 text-xs" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-slate-300 text-xs font-bold uppercase tracking-wider" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 text-white focus:border-red-500 focus:ring-red-500 rounded-xl shadow-inner"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2 text-red-400 text-xs" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-slate-700 bg-slate-950 text-red-600 focus:ring-red-500"
                                />
                                <span className="ms-2 text-slate-400 text-xs">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-xs text-red-400 hover:text-red-300 font-semibold transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <div>
                            <PrimaryButton
                                className="w-full justify-center bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center border-t border-slate-800/80 pt-6">
                        <p className="text-xs text-slate-400">
                            Don't have an account?{' '}
                            <Link href={route('register')} className="text-red-400 font-semibold hover:underline">
                                Register now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};