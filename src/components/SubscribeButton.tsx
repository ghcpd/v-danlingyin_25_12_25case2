import React from 'react';
import { useLibrary } from '../context/LibraryContext';

interface SubscribeButtonProps {
  podcastId: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ podcastId }) => {
  const { subscriptions, toggleSubscribe } = useLibrary();
  const subscribed = subscriptions.includes(podcastId);

  return (
    <button
      onClick={() => toggleSubscribe(podcastId)}
      className={
        subscribed
          ? 'rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft'
          : 'rounded-full border border-primary/60 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10'
      }
      aria-label={subscribed ? 'Unsubscribe from podcast' : 'Subscribe to podcast'}
    >
      {subscribed ? 'Subscribed' : 'Subscribe'}
    </button>
  );
};

export default SubscribeButton;
