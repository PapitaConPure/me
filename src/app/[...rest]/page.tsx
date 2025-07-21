import { promises as fs } from 'fs';
import path from 'path';
import { defaultLocale } from '@/lib/i18n';
import { redirect } from 'next/navigation';

async function walkDir(dir: string): Promise<string[]> {
	const subdirs = await fs.readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		subdirs.map((entry) => {
			const res = path.resolve(dir, entry.name);
			return entry.isDirectory() ? walkDir(res) : [res];
		}),
	);
	return files.flat();
}

export async function generateStaticParams() {
	const entries = await walkDir('./src/app/[lang]');

	console.log(entries);
	
	const staticParams = entries
	.filter((file) => file.endsWith('\\page.tsx') || file.endsWith('\\page.jsx'))
	.map((file) => {
		const parts = path.relative('./src/app/[lang]', path.dirname(file)).split(path.sep);
		return { rest: parts };
	})
	.filter((param) => param.rest.length > 0 && param.rest[0]);
	
	console.log('Static Params:');
	console.dir(staticParams, { depth: null });
	
	return staticParams;
}

interface PageProps {
	params: Promise<{ rest: string }>;
}

//If no locale prefix is specified, add the prefix via redirect dummy
export default async function Page({ params }: PageProps) {
	const { rest = undefined } = params ? await params : {};

	if (!rest) return redirect(`/${defaultLocale}`);

	return redirect(`/${defaultLocale}/${rest}`);
}
