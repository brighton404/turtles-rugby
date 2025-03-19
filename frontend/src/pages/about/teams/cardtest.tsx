export interface PlayerMap {
    id?: number,
    name: string,
    surname: string,
    position: string,
    imageUrl: string,
    age: string,
    weight: string,
}

type PlayerMapProps = {
    playerMap: PlayerMap;
}

const playerCard: React.FC<PlayerMapProps> = ({ playerMap }) => {
    return (
        <div className="playerCard">
            <span>{playerMap.name}</span>
            <span>{playerMap.surname}</span>
            <span>{playerMap.age}</span>
            <span>{playerMap.weight}</span>
            <span>{playerMap.position}</span>
        </div>
    )
}
export default playerCard;