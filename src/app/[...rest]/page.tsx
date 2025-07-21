//If no locale prefix is specified, add the prefix via redirect
import LanguageRedirect from '@/components/LanguageRedirect';

export async function generateStaticParams() {
	//Generate at least for the routes within /app/[lang]/ so that the redirect works
	return [
		{ rest: ['about'] },
		{ rest: ['projects'] },
		{ rest: ['music'] },
		{ rest: ['contact'] },
	];
}

interface PageProps {
	params: Promise<{ rest: string }>;
}

export default async function Page({ params }: PageProps) {
	const { rest = undefined } = params ? await params : {};

	if (!rest) return <LanguageRedirect targetPath='/' />;

	return <LanguageRedirect targetPath={`/${rest || ''}`} />;
}
