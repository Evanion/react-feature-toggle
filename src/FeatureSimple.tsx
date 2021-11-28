import * as React from 'react';
import { useFeature } from './feature/hooks';

export const FeatureSimple: React.FC = () => {
  // @ts-expect-error: testing
  const auction = useFeature('auction')
  // @ts-expect-error: testing
  const auctionCreate = useFeature('auction.create')
  return (<div>
    <div>Auction: {JSON.stringify(auction, null, 2)}</div>
    <div>AuctionCreate: {JSON.stringify(auctionCreate, null, 2)}</div>
  </div>);
}