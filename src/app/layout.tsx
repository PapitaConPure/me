import './globals.css';
import { PropsWithChildren } from "react";

//Passthrough for 404
export default async function RootLayout({ children }: PropsWithChildren) {
    return children;
}
