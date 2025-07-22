import './globals.css';
import { PropsWithChildren } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

//Passthrough for 404
export default async function RootLayout({ children }: PropsWithChildren) {
	return children;
}
