import React from 'react';

export default function SemesterLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen">
			<div className="max-w-6xl mx-auto">
				<main>{children}</main>
			</div>
		</div>
	);
}
