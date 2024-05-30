// render.tsx
import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IntlProvider } from 'react-intl';
import ThemeProvider from '@/theme/Provider';
import { store } from './store';
import enMessages from './locales/en.json';
import frMessages from './locales/fr.json';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const queryClient = new QueryClient();

function render(App: ComponentType) {
  const locale = import.meta.env.VITE_LANGUAGE;
  const messages = locale === 'fr' ? frMessages : enMessages;

  root.render(
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <IntlProvider locale={locale} messages={messages}>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </IntlProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </Provider>
    </StrictMode>,
  );
}

export default render;
