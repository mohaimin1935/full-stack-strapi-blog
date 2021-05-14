import { useEffect } from 'react';
import CommonHero from '../../components/common/commonHero'


const SingleProject = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (  
        <>
            <CommonHero title="Single Project" />
        </>
    );
}
 
export default SingleProject;