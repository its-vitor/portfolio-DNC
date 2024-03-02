import * as st from './styled';
import projectOne from '../../Images/project1.svg';
import projectTwo from '../../Images/project2.svg';
import projectThree from '../../Images/project3.svg';


export default function Projects() {
    return (
        <st.Section>
            <h2>Projetos</h2>
            <st.Projects>
                <st.Project>
                    <img src={projectOne} alt="" />
                    <div>
                        <h1>Designing Dashboards</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </st.Project>
                <hr />
                <st.Project>
                    <img src={projectTwo} alt="" />
                    <div>
                        <h1>Vibrant Portraits of 2020</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </st.Project>
                <hr />
                <st.Project>
                    <img src={projectThree} alt="" />
                    <div>
                        <h1>36 Days of Malayalam type</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </st.Project>
                <hr />
            </st.Projects>
        </st.Section>
    )
}