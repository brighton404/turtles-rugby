import React from 'react';
import  CardCommunity  from './community';
import CardTeams, { MobileCardTeams } from './teams';
import CardSupport, { MobileCardSupport } from './support';
import { DropdownContext } from '@/assets/components/extend/dropdownContext';

type Variant = 'default' | 'community' | 'm-community' | 'teams' | 'm-teams' | 'support' | 'm-support';

interface cardprops {
  variant?: Variant;
  closeDropdown: () => void;
}

const dropCards: React.FC<cardprops> = ({ variant = 'default', closeDropdown}) => {
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
    <DropdownContext.Provider value={{ closeDropdown }}>
    {selectedCard}
    </DropdownContext.Provider>
  );
};

export default dropCards;