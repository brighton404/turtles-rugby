import ClubManagement from "./management/management";
import Squads from "./squads";

type Variant = 'default' | 'management' | 'mens team' | 'womens team' ;

interface diffTeams {
    variant?: Variant;
}

const teams: React.FC<diffTeams> = ({ variant = 'default'}) => {
    let team;

    switch (variant){
        case 'management':
            team = <ClubManagement />
        break;
        case 'mens team':
            team = <Squads variant="men team" />
        break;
        case 'womens team':
            team = <Squads variant="women team" />
        break;
        default:
            team = ''
        break;
    }
    return (team)
};
export default teams;