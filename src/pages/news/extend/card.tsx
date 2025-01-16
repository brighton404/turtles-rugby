import { FunctionComponent } from "react";

interface CardProps {
    image: string;
    emoji: string;
    header: string;
    subtext: string;
  }

export const LayoutCard: FunctionComponent<CardProps> = ({ emoji, header, subtext}) => { 

    return (
    <div className="NewsCard column">
        <div className="column">
            <span className="H1_style">{emoji}</span>
            <h4>{header}</h4>
        </div>
        <div className="column align-y2 content-x">
            <div className="">
                <p className="Text_M_Normal" dangerouslySetInnerHTML={{ __html: subtext }} />
            </div>
        </div>
    </div>
    );
}