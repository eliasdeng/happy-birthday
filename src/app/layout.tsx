import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "Happy Birthday 赵玉芝 🎂",
	description: "专为赵玉芝生日打造的纪念网站，展示美好回忆照片集",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body suppressHydrationWarning={true}>
				{children}
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}
