import React from 'react';
import  CardCommunity  from './community';
import CardTeams, { MobileCardTeams } from './teams';
import CardSupport, { MobileCardSupport } from './support';

type Variant = 'default' | 'community' | 'm-community' | 'teams' | 'm-teams' | 'support' | 'm-support';

interface cardprops {
  variant?: Variant;
}

const dropCards: React.FC<cardprops> = ({ variant = 'default' }) => {
let selectedCard;

  switch (variant) {
    case 'community':
    selectedCard = <CardCommunity />
    break;
    case 'm-community':
    break;
    case 'm-teams':
      selectedCard = <MobileCardTeams />
    break;
    case 'teams':
      selectedCard = <CardTeams />
    break;
    case 'support':
      selectedCard = <CardSupport />
    break;
      case 'm-support':
        selectedCard = <MobileCardSupport />
    break;
    default:
      selectedCard = '';
  }
  return (
    selectedCard
  );
};

export default dropCards;