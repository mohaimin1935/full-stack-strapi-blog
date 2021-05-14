import { useEffect } from 'react';
import CommonHero from '../../components/common/commonHero'


const AllProjects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (  
        <>
            <CommonHero title="All Projects" />
        </>
    );
}
 
export default AllProjects;