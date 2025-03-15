import SnrWomen from "./women/players";
import SnrMen from "./mens/players";
import ClubManagement from "./management/management";

type Variant = 'default' | 'men team' | 'women team';

interface squadDiff {
    variant?: Variant;
}

const squads: React.FC<squadDiff> = ({variant = 'default'}) => {
    let squad;

    switch(variant){
        case 'men team':
            squad = <SnrMen />
        break;
        case 'women team':
            squad = <SnrWomen />
        break;
        default:
        squad = <ClubManagement />
    }

    return (squad);
   }
export default squads;