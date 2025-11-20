'use server';

import { cookies } from 'next/headers';

export async function changeLocale(locale) {
    const cookieStore = await cookies(); 
     cookieStore.set('locale', locale, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 30
    });
}