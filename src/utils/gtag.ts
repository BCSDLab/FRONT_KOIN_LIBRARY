interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string, gtagId: string, userId?: string) => {
  if (typeof window.gtag === 'undefined') return;
  window.gtag('config', gtagId, {
    page_path: url,
    user_id: userId,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action, category, label, value,
}: GTagEvent) => {
  if (typeof window.gtag === 'undefined') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
