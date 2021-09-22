import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/dist/shared/lib/router/router';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}