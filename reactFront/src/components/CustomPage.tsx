import './ExploreContainer.css';
import RefreshGeneric from './refreshGeneric/refreshGeneric';

interface ContainerProps {}

const CustomPage: React.FC<ContainerProps> = ({}) => {
    return (
        <div className="container">
            <RefreshGeneric/>
        </div>
    );
};


export default CustomPage;
