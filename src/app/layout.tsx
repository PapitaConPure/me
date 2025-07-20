import './globals.css';
import { PropsWithChildren } from "react";

//Passthrough for 404
export default function RootLayout({ children }: PropsWithChildren) {
    return children;
}
