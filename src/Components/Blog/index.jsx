import * as st from './styled';

export default function Blog() {
    return (
        <st.Section>
            <h2>Blog</h2>
            <st.Blogs>
                <st.Blog>
                    <h1>Making a design system from scratch</h1>
                    <div>
                        <p>12 Feb 2030</p>
                        <p>Design, Pattern</p>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </st.Blog>
                <st.Blog>
                    <h1>Creating pixel perfect icons in Figma</h1>
                    <div>
                        <p>12 Feb 2030</p>
                        <p>Figma, Icon Design</p>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </st.Blog>
            </st.Blogs>
        </st.Section>
    )
}