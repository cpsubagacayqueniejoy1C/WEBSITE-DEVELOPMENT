import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Head title="Register - Tech Spec Hub" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link href="/" className="inline-block">
                    <span className="font-black text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-400 uppercase">
                        Tech Spec Hub
                    </span>
                </Link>
                <h2 className="mt-4 text-xl font-bold tracking-tight text-white">
                    Create a new account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-900/80 backdrop-blur-xl py-8 px-6 shadow-2xl sm:rounded-2xl border border-slate-800 sm:px-10">
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <InputLabel htmlFor="name" value="Name" className="text-slate-300 text-xs font-bold uppercase tracking-wider" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 text-white focus:border-red-500 focus:ring-red-500 rounded-xl shadow-inner"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2 text-red-400 text-xs" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-slate-300 text-xs font-bold uppercase tracking-wider" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 text-white focus:border-red-500 focus:ring-red-500 rounded-xl shadow-inner"
                                autoComplete="username"
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2 text-red-400 text-xs" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-slate-300 text-xs font-bold uppercase tracking-wider" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 text-white focus:border-red-500 focus:ring-red-500 rounded-xl shadow-inner"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            <InputError message={errors.password_confirmation} className="mt-2 text-red-400 text-xs" />
                        </div>

                        <div className="pt-2">
                            <PrimaryButton
                                className="w-full justify-center bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center border-t border-slate-800/80 pt-6">
                        <p className="text-xs text-slate-400">
                            Already registered?{' '}
                            <Link href={route('login')} className="text-red-400 font-semibold hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};