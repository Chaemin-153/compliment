import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '칭찬합시다',
  description: '서로를 위해 칭찬하는 목적으로 모인 커뮤니티입니다',
  // OG 추가 예정
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

