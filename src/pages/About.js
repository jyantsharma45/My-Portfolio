import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <>
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="progress-bar-animate"
            />
            <div className="about">
                <h2>About</h2>
                <>
                    <article>
                        <p>
                            Hello, I'm JAYANT PARASHAR a Frontend Developer and a Part-time Graphic Designer
                        </p>
                        <p>
                            The great pleasure introduce my self.

                            I’m JAYANT PARASHAR , Im from Rewari,India, Since a year I’m working as web developerby my own. have developed few website and apart from the I have been part of a project using React.
                        </p>
                        <p>
                            I'm Passionate about Graphic Designing and also in Web Designing.

                            Explore the you skills different way.

                            1. HTML5, CSS3, Javascript,PHP, MYSQL and React JS.

                           

                            That’s all about and Thank you so much.

                            Note: Sorry my english language is not good. If you ll get an error and any modify the words please let me know because It helps to developing my communication skills and english language
                        </p>
                        <h2>Sub-header</h2>
                        <p>
                            In eget sodales arcu, consectetur efficitur metus. Duis efficitur
                            tincidunt odio, sit amet laoreet massa fringilla eu.
                        </p>
                        <p>
                            Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                            Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
                            arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
                        </p>
                        <p>
                            Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
                        </p>
                        <p>
                            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                            pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
                            suscipit leo.
                        </p>
                        <h2>Sub-header</h2>
                        <p>
                            Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                            fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam
                            id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
                            faucibus, vehicula metus ac, interdum nibh. Curabitur vitae
                            convallis ligula. Integer ac enim vel felis pharetra laoreet.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Pellentesque hendrerit ac augue quis pretium.
                        </p>
                        <p>
                            Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                            tristique, elit metus efficitur elit, ac pretium sapien nisl nec
                            ante. In et ex ultricies, mollis mi in, euismod dolor.
                        </p>
                        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                        <p>
                            Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                            Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
                            arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
                        </p>
                        <p>
                            Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
                        </p>
                        <p>
                            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                            pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
                            suscipit leo.
                        </p>
                        <h2>Sub-header</h2>
                        <p>
                            Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                            fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam
                            id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
                            faucibus, vehicula metus ac, interdum nibh. Curabitur vitae
                            convallis ligula. Integer ac enim vel felis pharetra laoreet.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Pellentesque hendrerit ac augue quis pretium.
                        </p>
                        <p>
                            Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                            tristique, elit metus efficitur elit, ac pretium sapien nisl nec
                            ante. In et ex ultricies, mollis mi in, euismod dolor.
                        </p>
                        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                    </article>
                </>
            </div>
        </>
    );
};

export default About;