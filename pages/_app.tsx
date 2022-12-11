import '../styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { setupLogGroups } from '../utils/monitoring';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  setupLogGroups();

  console.log(metric);
}
